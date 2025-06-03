'use client';
import { useChat } from 'ai/react';
import { useEffect } from 'react';
import { useFinancialContext } from '../context/FinancialContext';

export function ChatPanel() {
  const {
    ventas,
    compras,
    ingresosAdicionales,
    gastosAdicionales
  } = useFinancialContext();

  const { messages, input, handleInputChange, handleSubmit, append } = useChat();

  useEffect(() => {
    const totalVentas = ventas + ingresosAdicionales;
    const totalCompras = compras + gastosAdicionales;
    const ganancia = totalVentas - totalCompras;

    if (ventas === 0 && compras === 0) return;

    append({
      role: 'user',
      content: `Este es mi resumen financiero:
- Ventas facturadas: S/ ${ventas.toFixed(2)}
- Ingresos adicionales: S/ ${ingresosAdicionales.toFixed(2)}
- Compras facturadas: S/ ${compras.toFixed(2)}
- Gastos adicionales: S/ ${gastosAdicionales.toFixed(2)}
→ Ganancia neta estimada: S/ ${ganancia.toFixed(2)}
¿Detectas algún gasto común que podría haber olvidado?`
    });
  }, [ventas, compras, ingresosAdicionales, gastosAdicionales]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Asistente AI</h2>
      <div className="border p-4 h-64 overflow-y-scroll bg-white">
        {messages.map((m) => (
          <div key={m.id} className={`mb-2 ${m.role === 'user' ? 'text-blue-700' : 'text-green-700'}`}>
            <strong>{m.role === 'user' ? 'Tú:' : 'AI:'}</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="Escribe tu duda o agrega un gasto..."
        />
        <button className="bg-blue-600 text-white px-4 rounded" type="submit">Enviar</button>
      </form>
    </div>
  );
}
