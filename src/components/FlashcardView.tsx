import React, { useState, useEffect } from 'react';
import { flashcards } from '../data';
import { RefreshCcw, Check, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FlashcardViewProps {
  masteredCards: string[];
  onMarkMastered: (cardId: string) => void;
  starredCards: string[];
  onToggleStar: (cardId: string) => void;
}

const FLASHCARD_STATE_KEY = 'mln131_flashcard_state';

export function FlashcardView({ masteredCards, onMarkMastered, starredCards, onToggleStar }: FlashcardViewProps) {
  const [initialState] = useState(() => {
    try {
      const saved = localStorage.getItem(FLASHCARD_STATE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load flashcard state', e);
    }
    return null;
  });

  const [currentIndex, setCurrentIndex] = useState(initialState?.currentIndex || 0);
  const [isFlipped, setIsFlipped] = useState(initialState?.isFlipped || false);
  const [showOnlyUnmastered, setShowOnlyUnmastered] = useState(initialState?.showOnlyUnmastered || false);
  const [showOnlyStarred, setShowOnlyStarred] = useState(initialState?.showOnlyStarred || false);

  useEffect(() => {
    localStorage.setItem(FLASHCARD_STATE_KEY, JSON.stringify({
      currentIndex,
      isFlipped,
      showOnlyUnmastered,
      showOnlyStarred
    }));
  }, [currentIndex, isFlipped, showOnlyUnmastered, showOnlyStarred]);

  let activeCards = flashcards;
  if (showOnlyUnmastered) {
    activeCards = activeCards.filter(card => !masteredCards.includes(card.id));
  }
  if (showOnlyStarred) {
    activeCards = activeCards.filter(card => starredCards.includes(card.id));
  }

  // Ensure currentIndex is within bounds if activeCards changes
  useEffect(() => {
    if (activeCards.length > 0 && currentIndex >= activeCards.length) {
      setCurrentIndex(0);
    }
  }, [activeCards.length, currentIndex]);

  const safeIndex = Math.min(currentIndex, Math.max(0, activeCards.length - 1));

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % activeCards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + activeCards.length) % activeCards.length);
    }, 150);
  };

  const handleMastered = () => {
    if (activeCards.length > 0) {
      onMarkMastered(activeCards[safeIndex].id);
      handleNext();
    }
  };

  if (activeCards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <Check className="text-emerald-600" size={48} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Không tìm thấy thẻ nào!</h2>
        <p className="text-slate-600 mb-6">Bạn đã xem hết hoặc không có thẻ nào phù hợp với bộ lọc.</p>
        <div className="flex gap-4">
          <button 
            onClick={() => { setShowOnlyUnmastered(false); setShowOnlyStarred(false); setCurrentIndex(0); }}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Xem tất cả
          </button>
        </div>
      </div>
    );
  }

  const currentCard = activeCards[safeIndex];
  const isMastered = masteredCards.includes(currentCard.id);
  const isStarred = starredCards.includes(currentCard.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Flashcards Thuật ngữ</h2>
          <p className="text-slate-600 mt-2">Ghi nhớ nhanh các khái niệm cốt lõi.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <label className="flex items-center gap-2 cursor-pointer bg-slate-100 px-4 py-2 rounded-lg">
            <input 
              type="checkbox" 
              checked={showOnlyUnmastered}
              onChange={(e) => {
                setShowOnlyUnmastered(e.target.checked);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="text-sm font-medium text-slate-700">Chưa thuộc</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer bg-amber-50 px-4 py-2 rounded-lg">
            <input 
              type="checkbox" 
              checked={showOnlyStarred}
              onChange={(e) => {
                setShowOnlyStarred(e.target.checked);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="w-4 h-4 text-amber-600 rounded"
            />
            <span className="text-sm font-medium text-amber-700">Có sao</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl text-slate-500 mb-4 flex justify-between font-medium items-center">
          <span>Card {safeIndex + 1} / {activeCards.length}</span>
          <div className="flex items-center gap-3">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onToggleStar(currentCard.id);
              }}
              className={`p-1.5 rounded-full transition-colors ${isStarred ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:bg-slate-100'}`}
              title={isStarred ? "Bỏ đánh dấu sao" : "Đánh dấu sao"}
            >
              <Star size={20} fill={isStarred ? "currentColor" : "none"} />
            </button>
            {isMastered && <span className="text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md"><Check size={16} /> Đã thuộc</span>}
          </div>
        </div>

        {/* Flashcard */}
        <div 
          className="w-full max-w-2xl h-80 perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div 
            className="w-full h-full relative preserve-3d"
            animate={{ rotateX: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Front */}
            <div className={`absolute w-full h-full backface-hidden bg-white border-2 border-slate-200 rounded-2xl shadow-md flex items-center justify-center p-8 text-center ${isFlipped ? 'invisible' : 'visible'}`}>
              <h3 className="text-3xl font-bold text-slate-800">{currentCard.term}</h3>
              <div className="absolute bottom-6 text-slate-400 flex items-center gap-2 text-sm font-medium">
                <RefreshCcw size={16} /> Nhấp để lật
              </div>
            </div>

            {/* Back */}
            <div className={`absolute w-full h-full backface-hidden bg-blue-50 border-2 border-blue-200 rounded-2xl shadow-md flex items-center justify-center p-8 text-center rotate-x-180 ${!isFlipped ? 'invisible' : 'visible'}`}>
              <p className="text-xl leading-relaxed text-slate-700 font-medium whitespace-pre-line">
                {currentCard.definition}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-10">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleMastered}
            className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors ${
              isMastered 
                ? 'bg-slate-200 text-slate-500' 
                : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm'
            }`}
            disabled={isMastered}
          >
            <Check size={20} />
            {isMastered ? 'Đã đánh dấu thuộc' : 'Đánh dấu đã thuộc'}
          </button>

          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
