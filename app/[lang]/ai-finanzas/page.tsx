import { FinancialProvider } from './context/FinancialContext';
import { ChatPanel } from './components/ChatPanel';
import { UploadForm } from './components/UploadForm';

export default function FinanzasPage() {
  return (
    <FinancialProvider>
      <div className="max-w-4xl mx-auto p-4 space-y-8">
        <h1 className="text-2xl font-bold">Asistente de Ganancias y Pérdidas</h1>
        <UploadForm />
        <ChatPanel />
      </div>
    </FinancialProvider>
  );
}
