'use client';

import { useChat } from 'ai/react';

export default function Ai_chatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            <form onSubmit={handleSubmit}>
        <input
          className="dark:bg-zinc-900 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Pregúntame cualquier cosa..."
          onChange={handleInputChange}
        />
      </form>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI Apptiva: '}
          {m.content}
        </div>
      ))}

    </div>
  );
}