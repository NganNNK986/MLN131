import { useState, useEffect } from 'react';
import { StudyProgress } from '../types';

const STORAGE_KEY = 'mln131_study_progress';

const defaultProgress: StudyProgress = {
  theoryCompleted: [],
  flashcardsMastered: [],
  quizScores: {},
  lastActive: new Date().toISOString(),
};

export function useProgress() {
  const [progress, setProgress] = useState<StudyProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultProgress;
      }
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markTheoryCompleted = (chapterId: string) => {
    setProgress(prev => {
      if (prev.theoryCompleted.includes(chapterId)) return prev;
      return {
        ...prev,
        theoryCompleted: [...prev.theoryCompleted, chapterId],
        lastActive: new Date().toISOString(),
      };
    });
  };

  const markFlashcardMastered = (flashcardId: string) => {
    setProgress(prev => {
      if (prev.flashcardsMastered.includes(flashcardId)) return prev;
      return {
        ...prev,
        flashcardsMastered: [...prev.flashcardsMastered, flashcardId],
        lastActive: new Date().toISOString(),
      };
    });
  };

  const updateQuizScore = (chapterId: string, score: number) => {
    setProgress(prev => {
      const currentHighest = prev.quizScores[chapterId] || 0;
      if (score <= currentHighest) return prev;
      
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [chapterId]: score,
        },
        lastActive: new Date().toISOString(),
      };
    });
  };

  return {
    progress,
    markTheoryCompleted,
    markFlashcardMastered,
    updateQuizScore,
  };
}
