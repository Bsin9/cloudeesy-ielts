/**
 * RiseIQ — 6 Learning Disciplines
 */

export const DISCIPLINES = [
  {
    id: "language",
    name: "Language",
    emoji: "🌐",
    color: "#1DB8A4",
    description: "Master English and other languages for work, exams, and life.",
  },
  {
    id: "data",
    name: "Data & Analytics",
    emoji: "📊",
    color: "#6366F1",
    description: "Turn raw data into decisions with Python, Excel, and SQL.",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    emoji: "☁️",
    color: "#0EA5E9",
    description: "Build and deploy on Azure, AWS, and modern cloud platforms.",
  },
  {
    id: "ai",
    name: "AI & Automation",
    emoji: "🤖",
    color: "#8B5CF6",
    description: "Harness AI tools, prompt engineering, and automation workflows.",
  },
  {
    id: "growth",
    name: "Personal Growth",
    emoji: "🚀",
    color: "#F5A623",
    description: "Level up communication, productivity, and leadership skills.",
  },
  {
    id: "career",
    name: "Career",
    emoji: "💼",
    color: "#EF4444",
    description: "Land your next role — resumes, interviews, and job strategy.",
  },
];

export const getDisciplineById = (id) => DISCIPLINES.find((d) => d.id === id);
