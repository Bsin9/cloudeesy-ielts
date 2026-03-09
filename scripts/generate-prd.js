const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageBreak, TableOfContents, Header, Footer, PageNumber,
} = require("docx");
const fs = require("fs");
const path = require("path");

// ── Helpers ──────────────────────────────────────────────────────
const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text, bold: true, size: 32, font: "Arial", color: "0F1F3D" })],
  spacing: { before: 360, after: 160 },
});
const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text, bold: true, size: 26, font: "Arial", color: "1DB8A4" })],
  spacing: { before: 280, after: 120 },
});
const h3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun({ text, bold: true, size: 22, font: "Arial", color: "0F1F3D" })],
  spacing: { before: 200, after: 80 },
});
const body = (text) => new Paragraph({
  children: [new TextRun({ text, size: 22, font: "Arial" })],
  spacing: { after: 120 },
});
const bullet = (text, level = 0) => new Paragraph({
  numbering: { reference: "bullets", level },
  children: [new TextRun({ text, size: 22, font: "Arial" })],
  spacing: { after: 80 },
});
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

const border = { style: BorderStyle.SINGLE, size: 1, color: "CBD5E1" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellPad = { top: 100, bottom: 100, left: 140, right: 140 };

function tCell(text, isHeader = false, fill = "FFFFFF") {
  return new TableCell({
    borders,
    width: { size: 2340, type: WidthType.DXA },
    margins: cellPad,
    shading: { fill, type: ShadingType.CLEAR },
    children: [new Paragraph({
      children: [new TextRun({ text, size: 20, font: "Arial", bold: isHeader, color: isHeader ? "FFFFFF" : "0F1F3D" })],
    })],
  });
}

function tRow(cells, isHeader = false) {
  return new TableRow({
    children: cells.map((c, i) => typeof c === "string"
      ? tCell(c, isHeader, isHeader ? "0F1F3D" : i % 2 === 0 ? "FAFAFA" : "FFFFFF")
      : c),
    tableHeader: isHeader,
  });
}

// ── Document ─────────────────────────────────────────────────────
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 32, bold: true, font: "Arial", color: "0F1F3D" }, paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 26, bold: true, font: "Arial", color: "1DB8A4" }, paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 22, bold: true, font: "Arial", color: "0F1F3D" }, paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }, {
          level: 1, format: LevelFormat.BULLET, text: "\u2013", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } },
        }],
      },
      {
        reference: "numbered",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1260, bottom: 1440, left: 1260 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [
            new TextRun({ text: "RiseIQ IELTS — Product Requirements Document", size: 18, font: "Arial", color: "64748B" }),
          ],
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "1DB8A4", space: 1 } },
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [
            new TextRun({ text: "© 2025 RiseIQ  ·  Confidential  ·  Page ", size: 18, font: "Arial", color: "64748B" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, font: "Arial", color: "64748B" }),
          ],
          alignment: AlignmentType.CENTER,
        })],
      }),
    },
    children: [
      // ── Cover ──────────────────────────────────────────────────
      new Paragraph({
        children: [new TextRun({ text: "RiseIQ IELTS", bold: true, size: 64, font: "Arial", color: "0F1F3D" })],
        spacing: { before: 1440, after: 240 },
        alignment: AlignmentType.CENTER,
      }),
      new Paragraph({
        children: [new TextRun({ text: "Product Requirements Document", size: 36, font: "Arial", color: "1DB8A4" })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
      }),
      new Paragraph({
        children: [new TextRun({ text: "Version 1.0  ·  March 2026  ·  Confidential", size: 22, font: "Arial", color: "64748B" })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 1440 },
      }),
      pageBreak(),

      // ── ToC ────────────────────────────────────────────────────
      new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-2" }),
      pageBreak(),

      // ── 1. Executive Summary ───────────────────────────────────
      h1("1. Executive Summary"),
      body("RiseIQ IELTS is a student-first online preparation platform purpose-built for IELTS General Training, with architecture designed to extend to Academic IELTS in Phase 2. The platform enables learners to practise all four test skills — Reading, Writing, Listening, and Speaking — through structured lessons, timed interactive sessions, and full mock tests, with real-time feedback and personalised progress tracking."),
      body("The product targets three core user personas: first-time IELTS candidates (beginners), intermediate learners retaking the exam, and working professionals and immigration candidates who need efficient, goal-oriented preparation. The MVP delivers a complete learning loop from onboarding to mock test completion."),
      body("Platform name: RiseIQ IELTS. Tagline: Train Smarter. Score Higher. Start Today."),

      // ── 2. Product Vision ─────────────────────────────────────
      h1("2. Product Vision & Goals"),
      h2("2.1 Vision Statement"),
      body("To become the most effective and student-first IELTS preparation platform — combining structured content, personalised progress tracking, and exam-grade practice to help every learner achieve their target band score with confidence."),
      h2("2.2 Strategic Goals"),
      bullet("Deliver a complete IELTS General Training preparation experience in a single, cohesive platform."),
      bullet("Achieve measurable band score improvement (target: 0.5–1.0 band improvement within 6 weeks for consistent users)."),
      bullet("Build high engagement through streaks, daily goals, and a clear readiness indicator."),
      bullet("Reach 10,000 active students within 6 months of launch."),
      bullet("Maintain a session completion rate above 75%."),
      h2("2.3 Out of Scope (v1)"),
      bullet("Academic IELTS module (Phase 2 roadmap)."),
      bullet("Live human tutor sessions."),
      bullet("AI-generated audio for Listening module."),
      bullet("Mobile native apps (iOS/Android)."),

      // ── 3. User Personas ──────────────────────────────────────
      h1("3. User Personas"),
      h2("3.1 Persona A — The Beginner"),
      body("Name: Priya, 23, international student from India. Needs: Build foundational IELTS skills from scratch, understand test format, build confidence. Goal: Band 6.5 for university admission. Frustration: Overwhelming amount of free content with no structure. Motivation: Guided step-by-step path with clear progress signals."),
      h2("3.2 Persona B — The Intermediate Retaker"),
      body("Name: Mohammed, 31, engineer from UAE. Needs: Improve Band 6.0 to 7.0 for professional migration. Goal: Identify and fix specific weak areas (typically Writing Task 2 or Speaking). Frustration: Generic practice that doesn't pinpoint what to fix. Motivation: Targeted weak-area analysis and focused practice."),
      h2("3.3 Persona C — The Busy Professional"),
      body("Name: Lin, 38, nurse from the Philippines. Needs: Efficient, time-boxed study sessions she can fit into a busy work schedule. Goal: Band 7.0 for AHPRA registration in Australia. Frustration: Study apps that require long daily commitments. Motivation: Short daily goals (20–30 min), streak tracking, mobile-optimised design."),

      // ── 4. Feature Priority Matrix ────────────────────────────
      h1("4. Feature Priority Matrix"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 2340, 2340],
        rows: [
          tRow(["Feature", "Priority", "Phase"], true),
          tRow(["Student registration & onboarding (target band, exam date)", "P0", "MVP"]),
          tRow(["Student dashboard with streaks, scores, weak areas", "P0", "MVP"]),
          tRow(["Reading practice module (TFNG, MCQ, gap fill, matching)", "P0", "MVP"]),
          tRow(["Writing practice (Task 1 + Task 2, timer, word count)", "P0", "MVP"]),
          tRow(["Listening practice (audio player, 4 sections, review)", "P0", "MVP"]),
          tRow(["Speaking cue card practice (timer, follow-up questions)", "P0", "MVP"]),
          tRow(["Interactive session engine (timed, answer review)", "P0", "MVP"]),
          tRow(["Progress & analytics page", "P0", "MVP"]),
          tRow(["Full mock test flow", "P0", "MVP"]),
          tRow(["Slack webhook notifications", "P1", "MVP"]),
          tRow(["AI writing band score feedback", "P1", "Phase 2"]),
          tRow(["Speaking audio recording + playback", "P1", "Phase 2"]),
          tRow(["Vocabulary builder module", "P2", "Phase 2"]),
          tRow(["Academic IELTS module", "P2", "Phase 3"]),
          tRow(["Mobile native apps (iOS/Android)", "P2", "Phase 3"]),
        ],
      }),
      new Paragraph({ spacing: { after: 240 } }),

      // ── 5. MVP Feature Set ────────────────────────────────────
      h1("5. MVP Feature Set"),
      h2("5.1 Reading Module"),
      bullet("Question types: True/False/Not Given, Multiple Choice, Matching Headings, Gap Fill, Sentence Completion."),
      bullet("Timed practice sessions (60 minutes for full test, shorter for lessons)."),
      bullet("Post-submission: question-by-question review with explanations."),
      bullet("Side-by-side passage + question layout on desktop. Collapsible passage on mobile."),
      h2("5.2 Writing Module"),
      bullet("General Training Task 1: letter writing (formal, semi-formal, informal)."),
      bullet("Task 2: discussion, opinion, advantages/disadvantages essay types."),
      bullet("Live word count tracker. Visual warning below minimum threshold."),
      bullet("Timed sessions (20 min Task 1, 40 min Task 2). Draft auto-save."),
      bullet("Sample Band 7 answers revealed after submission."),
      bullet("Self-assessment checklist against 4 marking criteria."),
      h2("5.3 Listening Module"),
      bullet("4 sections covering all IELTS listening text types."),
      bullet("HTML5 audio player with custom accessible UI."),
      bullet("Question types matching real IELTS: form fill, MCQ, matching, gap fill."),
      bullet("Transcript reveal after submission. Mistake review with explanations."),
      h2("5.4 Speaking Module"),
      bullet("Part 1 personal question practice (guided answers)."),
      bullet("Part 2 cue card practice with 1-minute prep timer + 2-minute talk timer."),
      bullet("Part 3 follow-up discussion questions."),
      bullet("Recording placeholder UI (actual recording in Phase 2)."),
      bullet("Vocabulary bank per cue card for lexical resource improvement."),
      h2("5.5 Dashboard"),
      bullet("Welcome panel with target band, days until exam, current streak."),
      bullet("Per-module band scores with trend indicators."),
      bullet("Weak area alerts with priority flags."),
      bullet("Daily goal tracker (3 tasks per day)."),
      bullet("Recommended next task engine (based on lowest-scoring area)."),
      bullet("Weekly activity bar chart. Continue where you left off section."),
      h2("5.6 Mock Test"),
      bullet("Full IELTS General Training mock: Listening (30 min), Reading (60 min), Writing (60 min), Speaking (15 min)."),
      bullet("Each section timed independently."),
      bullet("Band estimate calculated on submission and displayed in progress history."),

      // ── 6. Success Metrics ────────────────────────────────────
      h1("6. Success Metrics"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3120, 2340, 3900],
        rows: [
          tRow(["Metric", "Target (90 days)", "Notes"], true),
          tRow(["Daily Active Users (DAU)", "2,000+", "Students who complete ≥1 session/day"]),
          tRow(["Session completion rate", ">75%", "Sessions started vs fully submitted"]),
          tRow(["Writing submission rate", ">40% of active users", "At least 1 writing task per week"]),
          tRow(["Average streak (active users)", ">7 days", "Measures daily habit formation"]),
          tRow(["Band score improvement", "0.5+ bands in 6 weeks", "Mock test comparison, consistent users"]),
          tRow(["NPS score", ">50", "Monthly survey"]),
          tRow(["Churn rate (Pro plan)", "<8%/month", "Measures retention"]),
        ],
      }),
      new Paragraph({ spacing: { after: 240 } }),

      // ── 7. Risk Register ──────────────────────────────────────
      h1("7. Risk Register"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2340, 1560, 1560, 3900],
        rows: [
          tRow(["Risk", "Likelihood", "Impact", "Mitigation"], true),
          tRow(["Content quality / accuracy of IELTS questions", "Medium", "High", "Expert IELTS teacher review before launch; user feedback loop"]),
          tRow(["Audio licensing for Listening module", "High", "Medium", "Use original audio in MVP; replace with licensed content in Phase 2"]),
          tRow(["AI feedback accuracy (Writing module)", "Medium", "High", "Phase 2 only; use human-reviewed sample answers in MVP"]),
          tRow(["User retention drop after first week", "Medium", "High", "Streak system, daily goals, email reminders, win notifications"]),
          tRow(["WCAG accessibility compliance gaps", "Low", "Medium", "Accessibility audit in Week 2 sprint; automated a11y CI tests"]),
          tRow(["Server-side timer manipulation by users", "Low", "Low", "Validate session timestamps server-side; ignore client-reported durations"]),
        ],
      }),
      new Paragraph({ spacing: { after: 240 } }),

      // ── 8. Sprint Plan ────────────────────────────────────────
      h1("8. 4-Week MVP Sprint Plan"),
      h2("Week 1 — Core Build"),
      bullet("Set up Next.js 14 project, Tailwind design system, component library."),
      bullet("Build Landing page, Auth pages (login, signup), App layout."),
      bullet("Build Student Dashboard with mock data."),
      bullet("Build Reading and Writing module pages."),
      h2("Week 2 — Session Engine & Remaining Modules"),
      bullet("Build Interactive Session Engine (Reading, Writing, Speaking sessions)."),
      bullet("Build Listening and Speaking module pages."),
      bullet("Build Mock Test flow and Progress/Analytics page."),
      bullet("Build Profile & Settings page."),
      h2("Week 3 — QA, Accessibility & Performance"),
      bullet("Conduct WCAG 2.1 AA accessibility audit across all pages."),
      bullet("Keyboard navigation testing on session engine and forms."),
      bullet("Lighthouse performance audit — target 90+ on Landing page."),
      bullet("Cross-browser and mobile responsiveness testing."),
      bullet("Fix all P0 bugs found in QA."),
      h2("Week 4 — SEO, Slack Integration & Soft Launch"),
      bullet("Add structured metadata, Open Graph, JSON-LD schema to all pages."),
      bullet("Implement sitemap.xml and robots.txt."),
      bullet("Configure Slack webhook integration and test all notification events."),
      bullet("Final content review by IELTS expert."),
      bullet("Soft launch to beta users; monitor analytics."),

      // ── 9. Post-Build Action Plan ─────────────────────────────
      h1("9. Post-Build Action Plan"),
      body("Following the 4-week MVP build, the following QA and launch activities are required:"),
      bullet("Week 1: QA all 4 module session flows end-to-end. Test timer expiry, answer submission, review screens. Verify Slack notifications fire correctly."),
      bullet("Week 2: Full WCAG accessibility audit. Check focus management in modals and sessions. Verify ARIA live regions on timers. Lighthouse audit and CWV fixes."),
      bullet("Week 3: SEO and metadata review. Verify Open Graph previews on all public pages. Submit sitemap to Google Search Console. Set up structured data testing."),
      bullet("Week 4: Slack integration end-to-end test with production webhook. Onboard 50 beta students. Collect NPS and qualitative feedback. Prioritise Phase 2 backlog."),

      // ── 10. Phase 2 Roadmap ───────────────────────────────────
      h1("10. Phase 2 Roadmap"),
      h2("Academic IELTS Expansion"),
      bullet("Add Academic IELTS Reading passages (longer, more complex text types)."),
      bullet("Academic Writing Task 1: describe graphs, charts, diagrams, maps."),
      bullet("Academic module toggle in user profile (General / Academic)."),
      h2("AI Features"),
      bullet("AI writing band score feedback on all 4 criteria."),
      bullet("AI-powered grammar and vocabulary suggestions in Writing editor."),
      bullet("AI listening audio generation for practice content."),
      h2("Speaking & Media"),
      bullet("In-browser voice recording with waveform visualisation."),
      bullet("Playback of recorded speaking attempts."),
      bullet("Pronunciation feedback using Web Speech API."),
      h2("Platform Expansion"),
      bullet("Native iOS and Android apps (React Native)."),
      bullet("Vocabulary builder module with spaced repetition."),
      bullet("Live group study sessions."),
      bullet("Admin portal for content management and student analytics."),

      // ── 11. Security & Accessibility Checklist ────────────────
      h1("11. Security & Accessibility Checklist"),
      h2("Security"),
      bullet("All routes authenticated — no unauthenticated access to dashboard or session data."),
      bullet("CSRF protection enabled on all form endpoints."),
      bullet("All user inputs sanitized server-side (writing editor, profile fields, forms)."),
      bullet("Rate limiting on auth endpoints (login, signup, password reset)."),
      bullet("Environment variables used for all secrets (SLACK_WEBHOOK_URL, NEXTAUTH_SECRET, API keys)."),
      bullet("Role-based access control: student / admin separation."),
      bullet("Session timers validated server-side to prevent client manipulation."),
      bullet("HTTPS-only cookies for session tokens (sameSite: lax, httpOnly: true, secure: true in production)."),
      bullet("No console.log statements in production builds."),
      bullet("ESLint + Prettier enforced across all code."),
      h2("Accessibility"),
      bullet("All pages meet WCAG 2.1 AA standards."),
      bullet("Skip-to-main-content link on every page."),
      bullet("Keyboard navigation for all interactive components (tabs, modals, session questions)."),
      bullet("Visible, consistent focus rings (2px teal outline)."),
      bullet("All images have descriptive alt text."),
      bullet("Minimum colour contrast ratio: 4.5:1 for body text."),
      bullet("Session timers use ARIA live regions (aria-live='polite', aria-atomic='true')."),
      bullet("Audio player in Listening module is fully keyboard-accessible."),
      bullet("Form inputs have explicit associated labels."),
      bullet("Error messages linked to input fields via aria-describedby."),

      // ── 12. Slack Integration Event Map ───────────────────────
      h1("12. Slack Integration Event Map"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2340, 2340, 4680],
        rows: [
          tRow(["Event", "Channel", "Message format"], true),
          tRow(["New student sign-up", "#ielts-signups", "New sign-up · Student `{id}` · {timestamp}"]),
          tRow(["Writing task submitted", "#writing-review", "Writing submitted · Task{1/2} · Student `{id}` · {timestamp}"]),
          tRow(["Mock test completed", "#test-results", "Mock complete · Est. band {band} · Student `{id}` · {timestamp}"]),
          tRow(["Streak milestone (7/30/60 days)", "#wins", "{N}-day streak! · Student `{id}` · {timestamp}"]),
          tRow(["Session error / failure", "#platform-alerts", "ALERT: Session `{id}` error · `{error}` · {timestamp}"]),
          tRow(["Daily digest (scheduled)", "#platform-alerts", "Daily digest · {N} active users · {N} sessions · avg {score}"]),
        ],
      }),
      new Paragraph({ spacing: { after: 240 } }),
      body("All messages include anonymised student ID. Slack integration is opt-in via SLACK_WEBHOOK_URL environment variable. Messages are sent server-side from API route handlers only."),

      // ── 13. Open Questions ────────────────────────────────────
      h1("13. Open Questions & Dependencies"),
      bullet("Audio content licensing: Who creates/licenses the Listening audio? Placeholder approach needed for MVP."),
      bullet("Writing AI feedback: Which model/service powers band score feedback in Phase 2? (Anthropic Claude API recommended.)"),
      bullet("Content authorship: Will IELTS questions be written in-house or licensed? What is the review and update cadence?"),
      bullet("Payment provider: Which payment gateway for the Pro plan? (Stripe recommended.)"),
      bullet("Data residency: Where will student data be stored? GDPR compliance required for EU students."),
      bullet("Speaking recording: What is the privacy policy for stored voice recordings?"),
    ],
  }],
});

// ── Write to file ─────────────────────────────────────────────────
Packer.toBuffer(doc).then((buffer) => {
  const outPath = "/sessions/jolly-loving-feynman/mnt/IELTS/RiseIQ-IELTS-PRD.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("PRD written to:", outPath);
}).catch((err) => {
  console.error("Failed to generate PRD:", err.message);
  process.exit(1);
});
