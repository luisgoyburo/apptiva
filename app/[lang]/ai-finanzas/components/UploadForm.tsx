'use client';
import { useState } from 'react';
import { useFinancialContext } from '../context/FinancialContext';

export function UploadForm() {
  const {
    setVentas, setCompras, ventas, compras,
    ingresosAdicionales, setIngresosAdicionales,
    gastosAdicionales, setGastosAdicionales
  } = useFinancialContext();
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

  const ventasFinal = ventas + ingresosAdicionales;
  const comprasFinal = compras + gastosAdicionales;
  const gananciaNeta = ventasFinal - comprasFinal;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Ingresa tu RUC</h2>
      <input
        type="text"
        placeholder="Tu RUC"
        className="mb-2 border p-2 rounded block w-full"
        value={rucUsuario}
        onChange={(e) => setRucUsuario(e.target.value)}
      />

      <h2 className="text-xl font-semibold mb-2">Subir Facturas XML SUNAT</h2>
      <input
        type="file"
        multiple
        accept=".xml"
        className="mb-4 block"
        onChange={handleChange}
      />

      {(ventas + compras > 0) && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Otros ingresos o gastos no facturados</h2>

          <div>
            <h4 className="font-semibold">Ingresos no facturados</h4>
            <input
              type="number"
              placeholder="Ingresos adicionales"
              className="border p-2 rounded w-full"
              value={ingresosAdicionales}
              onChange={(e) => setIngresosAdicionales(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div>
            <h2 className="font-semibold">Gastos no facturados</h2>
            <input
              type="number"
              placeholder="Gastos adicionales"
              className="border p-2 rounded w-full"
              value={gastosAdicionales}
              onChange={(e) => setGastosAdicionales(parseFloat(e.target.value) || 0)}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Resumen Financiero</h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>Ventas (XML): S/ {ventas.toFixed(2)}</p>
              <p>Compras (XML): S/ {compras.toFixed(2)}</p>
              <p>+ Ingresos adicionales: S/ {ingresosAdicionales.toFixed(2)}</p>
              <p>+ Gastos adicionales: S/ {gastosAdicionales.toFixed(2)}</p>
              <hr className="my-2" />
              <p><strong>Ganancia Neta: S/ {gananciaNeta.toFixed(2)}</strong></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
