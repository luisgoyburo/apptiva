'use client';
import { useState } from 'react';
import { useFinancialContext } from '../context/FinancialContext';

export function UploadForm() {
  const { setVentas, setCompras, ventas, compras } = useFinancialContext();
  const [rucUsuario, setRucUsuario] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || !rucUsuario) return;

    let totalVentas = 0;
    let totalCompras = 0;

    const readerPromises = Array.from(files).map(file => {
      return new Promise<void>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result as string;
          const parser = new DOMParser();
          const xml = parser.parseFromString(text, 'text/xml');

          const rucEmisor = xml.getElementsByTagName('cbc:CustomerAssignedAccountID')[0]?.textContent?.trim() || '';
          const monto = xml.getElementsByTagName('cbc:PayableAmount')[0]?.textContent?.trim() || '0';
          const montoNumber = parseFloat(monto);

          if (rucEmisor === rucUsuario) {
            totalVentas += montoNumber;
          } else {
            totalCompras += montoNumber;
          }

          resolve();
        };
        reader.readAsText(file);
      });
    });

    Promise.all(readerPromises).then(() => {
      setVentas(totalVentas);
      setCompras(totalCompras);
    });
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Subir Facturas XML SUNAT</h2>

      <input
        type="text"
        placeholder="Tu RUC"
        className="mb-2 border p-2 rounded block w-full"
        value={rucUsuario}
        onChange={(e) => setRucUsuario(e.target.value)}
      />

      <input
        type="file"
        multiple
        accept=".xml"
        className="mb-4 block"
        onChange={handleChange}
      />

      {ventas + compras > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Resumen Financiero</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>Ventas Totales: S/ {ventas.toFixed(2)}</p>
            <p>Compras Totales: S/ {compras.toFixed(2)}</p>
            <p><strong>Ganancia Neta: S/ {(ventas - compras).toFixed(2)}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}
