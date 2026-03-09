/**
 * Slack webhook notifications — server-side only.
 * All calls are silent no-ops when SLACK_WEBHOOK_URL is not set.
 */

/** @typedef {"signup"|"writing_submitted"|"mock_completed"|"streak_milestone"|"session_error"|"daily_digest"} SlackEventType */

/**
 * @param {{ type: SlackEventType, user?: string, data?: Record<string,unknown> }} event
 */
export async function notifySlack(event) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  const messages = {
    signup: `🎉 New student signed up: *${event.user ?? "unknown"}*`,
    writing_submitted: `✍️ Writing submitted by *${event.user}* — ${event.data?.wordCount ?? "?"} words`,
    mock_completed: `📝 Mock test completed by *${event.user}* — Band estimate: ${event.data?.band ?? "?"}`,
    streak_milestone: `🔥 Streak milestone! *${event.user}* hit ${event.data?.days ?? "?"} days`,
    session_error: `⚠️ Session error for *${event.user ?? "anon"}* — ${event.data?.message ?? "unknown error"}`,
    daily_digest: `📊 Daily digest — ${event.data?.message ?? ""}`,
  };

  const text = messages[event.type] ?? `📬 Event: ${event.type}`;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch {
    // Silently fail — Slack notifications are non-critical
  }
}
