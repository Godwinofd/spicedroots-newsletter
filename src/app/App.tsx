import { useState } from 'react';
import { Newsletter } from './components/Newsletter';
import { RegistrationForm } from './components/RegistrationForm';

type View = 'newsletter' | 'form';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('newsletter');

  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      {/* Content */}
      {currentView === 'newsletter' && (
        <Newsletter onReserveClick={() => setCurrentView('form')} />
      )}
      {currentView === 'form' && (
        <RegistrationForm onBack={() => setCurrentView('newsletter')} />
      )}
    </div>
  );
}