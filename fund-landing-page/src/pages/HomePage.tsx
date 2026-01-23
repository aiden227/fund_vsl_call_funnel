import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, Stethoscope } from 'lucide-react';

interface CardProps {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    buttonText: string;
    onClick: () => void;
    theme: 'eden' | 'elephant';
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon, buttonText, onClick, theme }) => {
    const isEden = theme === 'eden';

    return (
        <div
            className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl flex flex-col h-full
      ${isEden ? 'border-emerald-900/10 hover:border-[#11523c]' : 'border-blue-900/10 hover:border-[#112e4a]'}`}
        >
            {/* Background Hover Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500
        ${isEden ? 'bg-[#11523c]' : 'bg-[#112e4a]'}`}
            />

            <div className="p-10 md:p-14 flex flex-col h-full z-10">
                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-colors duration-300
          ${isEden ? 'bg-[#11523c] text-white' : 'bg-[#112e4a] text-white'}`}
                >
                    <Icon className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#0f172a] mb-4" style={{ fontFamily: '"Libre Baskerville", serif' }}>
                    {title}
                </h3>

                <p className="font-sans text-lg text-[#475569] leading-relaxed mb-10 flex-grow" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {description}
                </p>

                <button
                    onClick={onClick}
                    className={`group/btn w-full py-5 px-8 rounded-lg font-sans font-semibold text-lg flex items-center justify-between transition-all duration-300
          ${isEden
                            ? 'bg-[#11523c] text-white hover:bg-[#0d4330]'
                            : 'bg-[#112e4a] text-white hover:bg-[#0c2338]'}`}
                >
                    {buttonText}
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handlePENavigation = () => {
        navigate('/fund');
    };

    const handleMedNavigation = () => {
        alert("This button would link to the Medical Practices Landing Page.");
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#11523c] selection:text-white flex flex-col">
            {/* Font Imports */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Libre+Baskerville:wght@400;700&display=swap');

          body { font-family: 'Inter', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Libre Baskerville', serif; }
        `}
            </style>

            {/* Navigation */}
            <nav className="bg-white border-b border-slate-200 py-6 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex justify-center md:justify-start">
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo-long.png"
                            alt="Sequoia Strategies"
                            className="h-10 md:h-12 w-auto object-contain"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.style.display = 'none';
                                if (target.parentNode && target.parentNode instanceof HTMLElement) {
                                    target.parentNode.innerHTML = '<span class="font-serif font-bold text-2xl text-[#112e4a]">Sequoia Strategies</span>';
                                }
                            }} />
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center py-16 px-6 md:px-12">
                <div className="max-w-7xl w-full mx-auto">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
                            Specialized Growth Strategies for High-Stakes Industries
                        </h1>
                        <p className="font-sans text-xl text-[#64748b] leading-relaxed">
                            Select your industry to discover our tailored client acquisition systems.
                        </p>
                    </div>

                    {/* Selection Grid */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

                        {/* PE / Real Estate Option */}
                        <Card
                            theme="eden"
                            icon={Building2}
                            title="Private Equity & Real Estate"
                            description="For funds and syndicators looking to bypass traditional networking and build a predictable, SEC-compliant pipeline of accredited investors."
                            buttonText="I am a Fund Manager"
                            onClick={handlePENavigation}
                        />

                        {/* Medical Option */}
                        <Card
                            theme="elephant"
                            icon={Stethoscope}
                            title="Private Medical Practices"
                            description="For private practices seeking to increase patient volume and procedure bookings through high-performance acquisition engines."
                            buttonText="I am a Practice Owner"
                            onClick={handleMedNavigation}
                        />

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-10 px-6 text-center">
                <p className="font-sans text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Sequoia Strategies. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
