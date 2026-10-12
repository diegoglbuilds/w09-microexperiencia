import type { Evaluation, Submission, Task, Validation } from "./domain";

export function buildProofRecord(task:Task,submission:Submission,evaluation:Evaluation,validation:Validation){
  return {taskTitle:task.title,paidHours:{min:task.hoursMin,max:task.hoursMax},paymentMxn:task.paymentMxn,skillsDemonstrated:task.skills,rubricEvidence:evaluation.dimensions.map(({label,status,explanation})=>({label,status,explanation})),humanValidation:validation,aiUseDisclosure:submission.aiUseDisclosure,isSimulated:true as const};
}
