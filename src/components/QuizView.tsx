import React, { useState } from 'react';
import { quizQuestions } from '../data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizViewProps {
  onScoreUpdate: (chapterId: string, score: number) => void;
}

export function QuizView({ onScoreUpdate }: QuizViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Group by chapter could be added, but for now we do a random/sequential run of all questions
  const question = quizQuestions[currentQuestionIndex];

  const handleSelect = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setIsAnswerSubmitted(true);
    if (selectedAnswer === question.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
      // For simplicity, we just save this as a global score or a specific chapter score.
      // Since it's a mix, we could just pass 'all' as chapterId.
      const percentage = Math.round(((score + (selectedAnswer === question.correctAnswerIndex ? 1 : 0)) / quizQuestions.length) * 100);
      onScoreUpdate('all', percentage);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const finalPercentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="max-w-3xl mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl font-bold text-blue-600">{finalPercentage}%</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Hoàn thành bài tập!</h2>
        <p className="text-slate-600 mb-8 text-lg">Bạn đã trả lời đúng {score} / {quizQuestions.length} câu hỏi.</p>
        <button 
          onClick={handleRestart}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RotateCcw size={20} /> Làm lại từ đầu
        </button>
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
            if (isSelected) optionClass = "border-blue-500 bg-blue-50 text-blue-700";
            
            if (isAnswerSubmitted) {
              if (isCorrect) {
                optionClass = "border-emerald-500 bg-emerald-50 text-emerald-700";
              } else if (isSelected) {
                optionClass = "border-red-500 bg-red-50 text-red-700";
              } else {
                optionClass = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswerSubmitted}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${optionClass}`}
              >
                <span className="font-medium">{option}</span>
                {isAnswerSubmitted && isCorrect && <CheckCircle2 className="text-emerald-500" />}
                {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="text-red-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {isAnswerSubmitted && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
          <h4 className="font-bold text-blue-900 mb-2">Giải thích:</h4>
          <p className="text-blue-800 leading-relaxed">{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        {!isAnswerSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`px-8 py-3 rounded-lg font-bold transition-colors ${
              selectedAnswer !== null
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Kiểm tra
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-900 transition-colors flex items-center gap-2"
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'} <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
