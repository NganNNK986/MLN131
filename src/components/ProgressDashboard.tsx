import React from 'react';
import { StudyProgress } from '../types';
import { chapters, flashcards, quizQuestions } from '../data';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { BookOpen, CreditCard, Trophy, Flame } from 'lucide-react';

interface ProgressDashboardProps {
  progress: StudyProgress;
}

export function ProgressDashboard({ progress }: ProgressDashboardProps) {
  const theoryProgress = Math.round((progress.theoryCompleted.length / chapters.length) * 100);
  const flashcardProgress = Math.round((progress.flashcardsMastered.length / flashcards.length) * 100);
  const quizScore = progress.quizScores['all'] || 0;

  const getStatusColor = (percent: number) => {
    if (percent === 100) return 'text-emerald-500';
    if (percent >= 50) return 'text-blue-500';
    return 'text-amber-500';
  };

  const pieData = [
    { name: 'Đã hoàn thành', value: progress.theoryCompleted.length, color: '#3b82f6' },
    { name: 'Chưa hoàn thành', value: chapters.length - progress.theoryCompleted.length, color: '#e2e8f0' },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Tiến độ học tập</h2>
        <p className="text-slate-600 mt-2">Theo dõi kết quả ôn tập môn Chủ nghĩa xã hội khoa học (MLN131).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Lý thuyết</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">{theoryProgress}%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{progress.theoryCompleted.length} / {chapters.length} chương</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <CreditCard size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Flashcards</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">{flashcardProgress}%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{progress.flashcardsMastered.length} / {flashcards.length} thuật ngữ</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Điểm trắc nghiệm cao nhất</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">{quizScore}%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Từ tổng {quizQuestions.length} câu hỏi</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Chi tiết Lý thuyết</h3>
          <div className="space-y-4">
            {chapters.map((chapter, idx) => {
              const isCompleted = progress.theoryCompleted.includes(chapter.id);
              return (
                <div key={chapter.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-400 w-6">{(idx + 1).toString().padStart(2, '0')}</span>
                    <span className={`text-sm font-medium ${isCompleted ? 'text-slate-800' : 'text-slate-500'}`}>
                      {chapter.title.split(':')[1] || chapter.title}
                    </span>
                  </div>
                  {isCompleted ? (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Hoàn thành</span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Chưa học</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-slate-800 self-start mb-2">Tỷ lệ Hoàn thành</h3>
          <div className="w-full h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-4">
            <p className="text-slate-500 text-sm">
              Bạn đã hoàn thành {progress.theoryCompleted.length} trong tổng số {chapters.length} chương lý thuyết.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
