import React, { useState } from 'react';
import { quizQuestions } from '../data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, AlertTriangle, BookOpen } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizViewProps {
  onScoreUpdate: (chapterId: string, score: number) => void;
  wrongQuestions: string[];
  onUpdateWrongQuestions: (wrongIds: string[], correctIds: string[]) => void;
}

type QuizMode = 'start' | 'all' | 'review';

export function QuizView({ onScoreUpdate, wrongQuestions, onUpdateWrongQuestions }: QuizViewProps) {
  const validWrongQuestions = wrongQuestions.filter(id => quizQuestions.some(q => q.id === id));
  const [mode, setMode] = useState<QuizMode>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const startQuiz = (selectedMode: 'all' | 'review') => {
    setMode(selectedMode);
    setCurrentQuestionIndex(0);
    const count = selectedMode === 'all' ? quizQuestions.length : validWrongQuestions.length;
    setUserAnswers(Array(count).fill(null));
    setIsFinished(false);
  };

  if (mode === 'start') {
    return (
      <div className="max-w-3xl mx-auto p-4 md:p-6 text-center pt-8 md:pt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">Trắc nghiệm ôn tập</h2>
        <p className="text-slate-600 mb-8 md:mb-10 max-w-lg mx-auto text-sm md:text-base px-2">
          Luyện tập với các câu hỏi trắc nghiệm để củng cố kiến thức. Bạn có thể làm toàn bộ câu hỏi hoặc chỉ ôn lại những câu đã làm sai trước đó.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
          <button 
            onClick={() => startQuiz('all')}
            className="flex flex-col items-center p-6 md:p-8 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">Làm bài mới</h3>
            <p className="text-slate-500 text-xs md:text-sm">Tất cả {quizQuestions.length} câu hỏi</p>
          </button>

          <button 
            onClick={() => startQuiz('review')}
            disabled={validWrongQuestions.length === 0}
            className={`flex flex-col items-center p-6 md:p-8 bg-white border rounded-2xl transition-all group ${
              validWrongQuestions.length > 0 
                ? 'border-slate-200 hover:border-amber-500 hover:shadow-md' 
                : 'border-slate-100 opacity-60 cursor-not-allowed'
            }`}
          >
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-colors ${
              validWrongQuestions.length > 0
                ? 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                : 'bg-slate-50 text-slate-400'
            }`}>
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">Ôn tập câu sai</h3>
            <p className="text-slate-500 text-xs md:text-sm px-2">
              {validWrongQuestions.length > 0 ? `Bạn có ${validWrongQuestions.length} câu cần ôn lại` : 'Chưa có câu trả lời sai'}
            </p>
          </button>
        </div>
      </div>
    );
  }

  const filteredQuestions = mode === 'all' 
    ? quizQuestions 
    : quizQuestions.filter(q => validWrongQuestions.includes(q.id));

  const question = filteredQuestions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  const handleSelect = (index: number) => {
    // Prevent changing answer once selected
    if (userAnswers[currentQuestionIndex] !== null) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = index;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    
    let score = 0;
    const newWrongIds: string[] = [];
    const newCorrectIds: string[] = [];
    
    userAnswers.forEach((answer, idx) => {
      const q = filteredQuestions[idx];
      if (answer === q.correctAnswerIndex) {
        score += 1;
        newCorrectIds.push(q.id);
      } else if (answer !== null) {
        newWrongIds.push(q.id);
      }
    });

    onUpdateWrongQuestions(newWrongIds, newCorrectIds);

    if (mode === 'all') {
      const percentage = Math.round((score / filteredQuestions.length) * 100);
      onScoreUpdate('all', percentage);
    }
  };

  const handleRestart = () => {
    setMode('start');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsFinished(false);
  };

  if (isFinished) {
    const score = userAnswers.reduce((acc, answer, idx) => {
      return acc + (answer === filteredQuestions[idx].correctAnswerIndex ? 1 : 0);
    }, 0);
    const finalPercentage = Math.round((score / filteredQuestions.length) * 100);
    
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10 w-full">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
            <span className="text-3xl md:text-4xl font-bold text-blue-600">{finalPercentage}%</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Hoàn thành bài tập!</h2>
          <p className="text-slate-600 mb-6 text-sm md:text-lg">Bạn đã trả lời đúng {score} / {filteredQuestions.length} câu hỏi.</p>
          <button 
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mx-auto w-full md:w-auto text-sm md:text-base"
          >
            <RotateCcw size={18} className="md:w-5 md:h-5" /> Về trang chủ Quiz
          </button>
        </div>

        <div className="w-full space-y-6 md:space-y-8">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 border-b pb-3 md:pb-4">Xem lại đáp án & Giải thích</h3>
          {filteredQuestions.map((q, idx) => {
            const userAnswer = userAnswers[idx];
            const isCorrect = userAnswer === q.correctAnswerIndex;
            return (
              <div key={q.id} className="bg-white border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm">
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className={`shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {idx + 1}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-slate-800 leading-relaxed mt-0.5 md:mt-1">
                    {q.question}
                  </h4>
                </div>
                
                <div className="space-y-2 md:ml-12 mb-4">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userAnswer === optIdx;
                    const isActuallyCorrect = optIdx === q.correctAnswerIndex;
                    
                    let optClass = "border-slate-100 bg-slate-50 text-slate-500 opacity-70";
                    if (isActuallyCorrect) {
                      optClass = "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium";
                    } else if (isSelected && !isActuallyCorrect) {
                      optClass = "border-red-500 bg-red-50 text-red-700 font-medium";
                    }
                    
                    return (
                      <div key={optIdx} className={`p-3 rounded-lg border flex items-start md:items-center justify-between gap-2 ${optClass}`}>
                        <span className="text-sm md:text-base">{opt}</span>
                        <div className="shrink-0 mt-0.5 md:mt-0">
                          {isActuallyCorrect && <CheckCircle2 size={18} className="md:w-[18px] md:h-[18px] text-emerald-500" />}
                          {isSelected && !isActuallyCorrect && <XCircle size={18} className="md:w-[18px] md:h-[18px] text-red-500" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="md:ml-12 bg-blue-50 border border-blue-100 rounded-xl p-3 md:p-4">
                  <h5 className="font-bold text-blue-900 mb-1 text-xs md:text-sm">Giải thích:</h5>
                  <p className="text-blue-800 text-xs md:text-sm leading-relaxed">{q.explanation || 'Không có giải thích cho câu hỏi này.'}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center w-full">
          <button 
            onClick={handleRestart}
            className="flex md:inline-flex justify-center items-center gap-2 px-8 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors w-full md:w-auto text-sm md:text-base"
          >
            <RotateCcw size={18} className="md:w-5 md:h-5" /> Về trang chủ Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            {mode === 'all' ? 'Trắc nghiệm tổng hợp' : 'Ôn tập câu sai'}
          </h2>
          <p className="text-slate-600 mt-1 md:mt-2 text-sm md:text-base">Kiểm tra kiến thức MLN131.</p>
        </div>
        <div className="self-start sm:self-auto text-xs md:text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
          Câu {currentQuestionIndex + 1} / {filteredQuestions.length}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-4 md:mb-6 leading-relaxed">
          {question.question}
        </h3>

        <div className="space-y-2 md:space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === question.correctAnswerIndex;
            
            let optionClass = "border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700";
            
            if (selectedAnswer !== null) {
              if (isCorrect) {
                optionClass = "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium";
              } else if (isSelected) {
                optionClass = "border-red-500 bg-red-50 text-red-700 font-medium";
              } else {
                optionClass = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
              }
            } else if (isSelected) {
              optionClass = "border-blue-500 bg-blue-50 text-blue-700";
            }
            
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all flex items-start sm:items-center justify-between gap-2 ${optionClass} ${selectedAnswer !== null ? 'cursor-default' : ''}`}
              >
                <span className="font-medium text-sm md:text-base leading-snug">{option}</span>
                <div className="shrink-0 mt-0.5 sm:mt-0">
                  {selectedAnswer !== null && isCorrect && <CheckCircle2 size={18} className="md:w-5 md:h-5 text-emerald-500" />}
                  {selectedAnswer !== null && isSelected && !isCorrect && <XCircle size={18} className="md:w-5 md:h-5 text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedAnswer !== null && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
          <h4 className="font-bold text-blue-900 mb-1 md:mb-2 text-sm md:text-base">Giải thích:</h4>
          <p className="text-blue-800 leading-relaxed text-xs md:text-sm">{question.explanation || 'Không có giải thích cho câu hỏi này.'}</p>
        </div>
      )}

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 md:gap-4 mt-6">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-2.5 md:py-3 rounded-lg font-bold transition-colors w-full sm:w-auto text-sm md:text-base ${
            currentQuestionIndex > 0
              ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
          }`}
        >
          Câu trước
        </button>

        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className={`px-8 py-2.5 md:py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base ${
            selectedAnswer !== null
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {currentQuestionIndex === filteredQuestions.length - 1 ? 'Hoàn thành' : 'Câu tiếp theo'} 
          {currentQuestionIndex < filteredQuestions.length - 1 && <ArrowRight size={18} className="md:w-5 md:h-5" />}
        </button>
      </div>
    </div>
  );
}
