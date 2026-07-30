export type ViewMode = 'dashboard' | 'theory' | 'flashcards' | 'quiz';

export interface Chapter {
  id: string;
  title: string;
  summary: string[];
}

export interface Flashcard {
  id: string;
  chapterId: string;
  term: string;
  definition: string;
}

export interface QuizQuestion {
  id: string;
  chapterId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface StudyProgress {
  theoryCompleted: string[]; 
  flashcardsMastered: string[]; 
  quizScores: Record<string, number>; // chapterId -> highest score (0-100)
  lastActive: string;
}
