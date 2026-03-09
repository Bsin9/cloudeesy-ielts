import { ReadingQuestion } from "@/components/reading/ReadingQuestion.jsx";

/**
 * Listening questions use the same input widgets as reading.
 * @param {{ question: object, value: string, onChange: (v: string) => void }} props
 */
export function ListeningQuestion({ question, value, onChange }) {
  return <ReadingQuestion question={question} value={value} onChange={onChange} />;
}
