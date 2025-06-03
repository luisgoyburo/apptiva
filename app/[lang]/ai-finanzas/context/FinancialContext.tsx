'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface FinancialContextType {
    ventas: number;
    compras: number;
    ingresosAdicionales: number;
    gastosAdicionales: number;
    setVentas: (v: number) => void;
    setCompras: (c: number) => void;
    setIngresosAdicionales: (v: number) => void;
    setGastosAdicionales: (v: number) => void;
}

const FinancialContext = createContext<FinancialContextType | undefined>(undefined);

export function FinancialProvider({ children }: { children: ReactNode }) {
  const [ventas, setVentas] = useState(0);
  const [compras, setCompras] = useState(0);
  const [ingresosAdicionales, setIngresosAdicionales] = useState(0);
  const [gastosAdicionales, setGastosAdicionales] = useState(0);

  return (
    <FinancialContext.Provider value={{
        ventas,
        compras,
        ingresosAdicionales,
        gastosAdicionales,
        setVentas,
        setCompras,
        setIngresosAdicionales,
        setGastosAdicionales
      }}>
      {children}
    </FinancialContext.Provider>
  );
}

export function useFinancialContext() {
  const context = useContext(FinancialContext);
  if (!context) throw new Error('useFinancialContext must be used inside FinancialProvider');
  return context;
}
