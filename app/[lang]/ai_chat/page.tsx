"use client";

import { useChat } from "ai/react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import translations from "../../../dictionaries/dictionaries";
import type { Locale } from "../../../i18n-config"; // ✅ Import Locale type

export default function AiChatPage() {
  const { lang } = useParams();
  const [dictionary, setDictionary] = useState(translations.en); // Default to English

  useEffect(() => {
    // ✅ Ensure `lang` is one of the valid locales
    if (typeof lang === "string" && (lang === "en" || lang === "es" || lang === "fr")) {
      setDictionary(translations[lang as Locale]);
    }
  }, [lang]);

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto px-4 stretch">
      <h1 className="text-2xl font-bold mb-4">{dictionary.aiChat.title}</h1>
      <p className="mb-4">{dictionary.aiChat.description}</p>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder={dictionary.aiChat.placeholder}
          onChange={handleInputChange}
        />
      </form>

      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? dictionary.aiChat.user : dictionary.aiChat.ai}: {m.content}
        </div>
      ))}
    </div>
  );
}
