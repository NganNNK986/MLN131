import React, { useState } from 'react';
import { chapters } from '../data';
import { ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TheoryViewProps {
  completedChapters: string[];
  onMarkCompleted: (chapterId: string) => void;
}

export function TheoryView({ completedChapters, onMarkCompleted }: TheoryViewProps) {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(chapters[0].id);

  const toggleChapter = (id: string) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Lý thuyết trọng tâm</h2>
        <p className="text-slate-600 mt-2">Tóm tắt các kiến thức cốt lõi của 7 chương học phần Chủ nghĩa xã hội khoa học.</p>
      </div>

      <div className="space-y-4">
        {chapters.map((chapter) => {
          const isExpanded = expandedChapter === chapter.id;
          const isCompleted = completedChapters.includes(chapter.id);

          return (
            <div key={chapter.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? <ChevronDown className="text-slate-500" /> : <ChevronRight className="text-slate-500" />}
                  <h3 className="text-lg font-semibold text-slate-800 text-left">{chapter.title}</h3>
                </div>
                {isCompleted && (
                  <span className="flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    <CheckCircle2 size={16} /> Đã đọc
                  </span>
                )}
              </button>

              {isExpanded && (
                <div className="px-6 py-5 border-t border-slate-100">
                  <ul className="space-y-3 mb-6">
                    {chapter.summary.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {!isCompleted && (
                    <button
                      onClick={() => onMarkCompleted(chapter.id)}
                      className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      Đánh dấu đã hoàn thành
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
