import type { Locale } from "../i18n-config"; // Import the Locale type

const translations: Record<Locale, { aiChat: { title: string; description: string; placeholder: string; user: string; ai: string } }> = {
  en: {
    aiChat: {
      title: "AI Chat",
      description: "Chat with AI-powered responses.",
      placeholder: "Ask me anything...",
      user: "User",
      ai: "AI Apptiva",
    },
  },
  es: {
    aiChat: {
      title: "Chat de IA",
      description: "Chatea con respuestas impulsadas por IA.",
      placeholder: "Pregúntame cualquier cosa...",
      user: "Usuario",
      ai: "IA Apptiva",
    },
  },
  fr: {
    aiChat: {
      title: "Chat IA",
      description: "Discutez avec des réponses générées par IA.",
      placeholder: "Posez-moi une question...",
      user: "Utilisateur",
      ai: "IA Apptiva",
    },
  },
};

export default translations;
