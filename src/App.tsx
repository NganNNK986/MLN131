import React, { useState } from 'react';
import { ViewMode } from './types';
import { Sidebar } from './components/Sidebar';
import { TheoryView } from './components/TheoryView';
import { FlashcardView } from './components/FlashcardView';
import { QuizView } from './components/QuizView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { TipsView } from './components/TipsView';
import { useProgress } from './hooks/useProgress';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { progress, markTheoryCompleted, markFlashcardMastered, updateQuizScore, updateWrongQuestions, toggleFlashcardStar } = useProgress();

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center shrink-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-blue-400">MLN131 Ôn Tập</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Desktop and Mobile Drawer */}
      <div className={`fixed inset-y-0 left-0 z-30 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out md:flex md:w-64 shrink-0 flex-col bg-slate-900 h-full overflow-hidden`}>
        <Sidebar currentView={currentView} onNavigate={handleNavigate} />
      </div>
      
      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="flex-1 overflow-y-auto w-full max-w-full h-full relative">
        <div className="p-4 md:p-8">
          {currentView === 'dashboard' && <ProgressDashboard progress={progress} />}
          {currentView === 'theory' && (
            <TheoryView 
              completedChapters={progress.theoryCompleted} 
              onMarkCompleted={markTheoryCompleted} 
            />
          )}
          {currentView === 'flashcards' && (
            <FlashcardView 
              masteredCards={progress.flashcardsMastered} 
              onMarkMastered={markFlashcardMastered}
              starredCards={progress.starredFlashcards || []}
              onToggleStar={toggleFlashcardStar}
            />
          )}
          {currentView === 'quiz' && (
            <QuizView 
              onScoreUpdate={updateQuizScore}
              wrongQuestions={progress.wrongQuizQuestions || []}
              onUpdateWrongQuestions={updateWrongQuestions}
            />
          )}
          {currentView === 'tips' && (
            <TipsView />
          )}
        </div>
      </main>
    </div>
  );
}
