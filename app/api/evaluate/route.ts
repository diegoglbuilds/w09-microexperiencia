import OpenAI from "openai";
import { NextResponse } from "next/server";
import { taskSchema, submissionSchema } from "@/lib/domain";

export async function POST(request: Request) {
  let body: unknown;
  try { body=await request.json(); } catch { return NextResponse.json({error:"Solicitud no válida"},{status:400}); }
  if (!body || typeof body!=="object" || !("task" in body) || !("submission" in body)) return NextResponse.json({error:"Solicitud no válida"},{status:400});
  const candidate=body as {task:unknown;submission:unknown};
  const task=taskSchema.safeParse(candidate.task), submission=submissionSchema.safeParse(candidate.submission);
  if (!task.success || !submission.success || submission.data.taskId!==((candidate.task as {id?:string}).id)) return NextResponse.json({error:"Datos no válidos"},{status:400});
  const key=process.env.OPENAI_API_KEY;
  if(!key) return NextResponse.json({mode:"simulated",explanation:"Evaluación simulada: se revisaron los criterios y la evidencia con reglas estructuradas. La decisión final corresponde a la PyME."});
  try {
    const client=new OpenAI({apiKey:key});
    const response=await client.responses.create({model:"gpt-4o-mini",input:[{role:"system",content:"Explica en español mexicano, en máximo 90 palabras, qué evidencia se relaciona con los criterios. No califiques a la persona, no recomiendes contratar/rechazar y nunca decidas validación. Tu salida es texto explicativo no confiable que debe revisar una persona."},{role:"user",content:JSON.stringify({tarea:{titulo:task.data.title,descripcion:task.data.description,criterios:task.data.rubric},evidencia:{resumen:submission.data.summary,elementos:submission.data.items,usoIA:submission.data.aiUseDisclosure}})}],max_output_tokens:140});
    const explanation=response.output_text.slice(0,900);
    return NextResponse.json({mode:"live-ai",explanation});
  } catch { return NextResponse.json({mode:"simulated",explanation:"Evaluación simulada: no fue posible obtener una explicación con IA. Revisa los criterios y la evidencia; la decisión final corresponde a la PyME."}); }
}
