import { Alert } from "@/components/ui/Alert.jsx";

export function FeedbackPlaceholder() {
  return (
    <Alert type="info" title="AI Feedback Coming Soon">
      Automated band-score feedback powered by AI will be available in Phase 2.
      For now, use the self-assessment checklist to evaluate your response.
    </Alert>
  );
}
