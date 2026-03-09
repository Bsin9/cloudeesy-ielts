/**
 * Writing module UI helpers.
 */

/** Word count colour based on task target */
export function wordCountColor(count, taskType = "task2") {
  const min = taskType === "task1" ? 150 : 250;
  const max = taskType === "task1" ? 200 : 300;
  if (count < min)   return "var(--color-brand-red)";
  if (count > max)   return "var(--color-brand-gold)";
  return "var(--color-brand-green)";
}

/** Format task type label */
export function taskTypeLabel(taskType) {
  return taskType === "task1" ? "Task 1 — Letter" : "Task 2 — Essay";
}

/** The 4 IELTS writing assessment criteria */
export const WRITING_CRITERIA = [
  { key: "ta",   label: "Task Achievement",           desc: "Have you addressed all parts of the task?" },
  { key: "cc",   label: "Coherence & Cohesion",        desc: "Is your writing logically structured with linking words?" },
  { key: "lr",   label: "Lexical Resource",            desc: "Have you used a range of vocabulary accurately?" },
  { key: "gra",  label: "Grammatical Range & Accuracy",desc: "Have you used varied grammar with few errors?" },
];
