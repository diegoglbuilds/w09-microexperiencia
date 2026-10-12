import { describe, expect, it } from "vitest";
import { demoTask, taskSchema } from "./domain";

describe("deadline calendar validation", () => {
  it("rejects an impossible date that matches YYYY-MM-DD", () => {
    const { id, status, isSimulated, ...task } = demoTask;
    expect(taskSchema.safeParse({ ...task, deadline: "2026-02-31" }).success).toBe(false);
  });
});
