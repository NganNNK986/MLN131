import React, { useState } from 'react';
import { ViewMode } from './types';
import { Sidebar } from './components/Sidebar';
import { TheoryView } from './components/TheoryView';
import { FlashcardView } from './components/FlashcardView';
import { QuizView } from './components/QuizView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { TipsView } from './components/TipsView';
import { useProgress } from './hooks/useProgress';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const { progress, markTheoryCompleted, markFlashcardMastered, updateQuizScore } = useProgress();

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
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
            />
          )}
          {currentView === 'quiz' && (
            <QuizView onScoreUpdate={updateQuizScore} />
          )}
          {currentView === 'tips' && (
            <TipsView />
          )}
        </div>
      </main>
    </div>
  );
}
