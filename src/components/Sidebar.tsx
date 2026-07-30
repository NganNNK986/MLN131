import React from 'react';
import { ViewMode } from '../types';
import { BookOpen, CreditCard, LayoutDashboard, CheckCircle, Lightbulb } from 'lucide-react';

interface SidebarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const menuItems: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Tiến độ học tập', icon: <LayoutDashboard size={20} /> },
    { id: 'theory', label: 'Lý thuyết trọng tâm', icon: <BookOpen size={20} /> },
    { id: 'flashcards', label: 'Flashcards', icon: <CreditCard size={20} /> },
    { id: 'quiz', label: 'Trắc nghiệm', icon: <CheckCircle size={20} /> },
    { id: 'tips', label: 'Mẹo ôn tập', icon: <Lightbulb size={20} /> },
  ];

  return (
    <div className="w-64 md:w-full bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-blue-400">MLN131 Ôn Tập</h1>
        <p className="text-sm text-slate-400 mt-1">Chủ nghĩa Xã hội Khoa học</p>
      </div>
      <nav className="flex-1 mt-4 md:mt-0 pt-4 md:pt-0">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 text-xs text-slate-500 text-center border-t border-slate-800 hidden md:block">
        &copy; 2026 AI Studio - MLN131
      </div>
    </div>
  );
}
