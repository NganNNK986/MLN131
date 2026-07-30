import React, { useState } from 'react';
import { quizQuestions } from '../data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizViewProps {
  onScoreUpdate: (chapterId: string, score: number) => void;
}

export function QuizView({ onScoreUpdate }: QuizViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [isFinished, setIsFinished] = useState(false);

  // Group by chapter could be added, but for now we do a random/sequential run of all questions
  const question = quizQuestions[currentQuestionIndex];
  
  const selectedAnswer = userAnswers[currentQuestionIndex];

  const handleSelect = (index: number) => {
    // Prevent changing answer once selected
    if (userAnswers[currentQuestionIndex] !== null) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = index;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      const score = userAnswers.reduce((acc, answer, idx) => {
        return acc + (answer === quizQuestions[idx].correctAnswerIndex ? 1 : 0);
      }, 0);
      const percentage = Math.round((score / quizQuestions.length) * 100);
      onScoreUpdate('all', percentage);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(quizQuestions.length).fill(null));
    setIsFinished(false);
  };

  if (isFinished) {
    const score = userAnswers.reduce((acc, answer, idx) => {
      return acc + (answer === quizQuestions[idx].correctAnswerIndex ? 1 : 0);
    }, 0);
    const finalPercentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <div className="max-w-4xl mx-auto p-6 flex flex-col items-center">
        <div className="text-center mb-10">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <span className="text-4xl font-bold text-blue-600">{finalPercentage}%</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Hoàn thành bài tập!</h2>
          <p className="text-slate-600 mb-6 text-lg">Bạn đã trả lời đúng {score} / {quizQuestions.length} câu hỏi.</p>
          <button 
            onClick={handleRestart}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mx-auto"
          >
            <RotateCcw size={20} /> Làm lại từ đầu
          </button>
        </div>

        <div className="w-full space-y-8">
          <h3 className="text-2xl font-bold text-slate-800 border-b pb-4">Xem lại đáp án & Giải thích</h3>
          {quizQuestions.map((q, idx) => {
            const userAnswer = userAnswers[idx];
            const isCorrect = userAnswer === q.correctAnswerIndex;
            return (
              <div key={q.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 leading-relaxed mt-1">
                    {q.question}
                  </h4>
                </div>
                
                <div className="space-y-2 ml-12 mb-4">
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
                      <div key={optIdx} className={`p-3 rounded-lg border flex items-center justify-between ${optClass}`}>
                        <span>{opt}</span>
                        {isActuallyCorrect && <CheckCircle2 size={18} className="text-emerald-500" />}
                        {isSelected && !isActuallyCorrect && <XCircle size={18} className="text-red-500" />}
                      </div>
                    );
                  })}
                </div>
                
                <div className="ml-12 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <h5 className="font-bold text-blue-900 mb-1 text-sm">Giải thích:</h5>
                  <p className="text-blue-800 text-sm leading-relaxed">{q.explanation || 'Không có giải thích cho câu hỏi này.'}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8">
          <button 
            onClick={handleRestart}
            className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors"
          >
            <RotateCcw size={20} /> Làm lại từ đầu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Trắc nghiệm ôn tập</h2>
          <p className="text-slate-600 mt-2">Kiểm tra kiến thức MLN131.</p>
        </div>
        <div className="text-sm font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
          Câu {currentQuestionIndex + 1} / {quizQuestions.length}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm mb-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-6 leading-relaxed">
          {question.question}
        </h3>

        <div className="space-y-3">
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
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${optionClass} ${selectedAnswer !== null ? 'cursor-default' : ''}`}
              >
                <span className="font-medium">{option}</span>
                {selectedAnswer !== null && isCorrect && <CheckCircle2 className="text-emerald-500" />}
                {selectedAnswer !== null && isSelected && !isCorrect && <XCircle className="text-red-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {selectedAnswer !== null && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
          <h4 className="font-bold text-blue-900 mb-2">Giải thích:</h4>
          <p className="text-blue-800 leading-relaxed">{question.explanation || 'Không có giải thích cho câu hỏi này.'}</p>
        </div>
      )}

      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-3 rounded-lg font-bold transition-colors ${
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
          className={`px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 ${
            selectedAnswer !== null
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {currentQuestionIndex === quizQuestions.length - 1 ? 'Hoàn thành' : 'Câu tiếp theo'} 
          {currentQuestionIndex < quizQuestions.length - 1 && <ArrowRight size={20} />}
        </button>
      </div>
    </div>
  );
}
