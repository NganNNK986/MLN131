import React, { useState } from 'react';
import { flashcards } from '../data';
import { RefreshCcw, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FlashcardViewProps {
  masteredCards: string[];
  onMarkMastered: (cardId: string) => void;
}

export function FlashcardView({ masteredCards, onMarkMastered }: FlashcardViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showOnlyUnmastered, setShowOnlyUnmastered] = useState(false);

  const activeCards = showOnlyUnmastered 
    ? flashcards.filter(card => !masteredCards.includes(card.id))
    : flashcards;

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
      onMarkMastered(activeCards[currentIndex].id);
      handleNext();
    }
  };

  if (activeCards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <Check className="text-emerald-600" size={48} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Tuyệt vời!</h2>
        <p className="text-slate-600 mb-6">Bạn đã thuộc lòng tất cả các thuật ngữ.</p>
        <button 
          onClick={() => setShowOnlyUnmastered(false)}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ôn tập lại tất cả
        </button>
      </div>
    );
  }

  const currentCard = activeCards[currentIndex];
  const isMastered = masteredCards.includes(currentCard.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Flashcards Thuật ngữ</h2>
          <p className="text-slate-600 mt-2">Ghi nhớ nhanh các khái niệm cốt lõi.</p>
        </div>
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
          <span className="text-sm font-medium text-slate-700">Chỉ hiển thị chưa thuộc</span>
        </label>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl text-slate-500 mb-4 flex justify-between font-medium">
          <span>Card {currentIndex + 1} / {activeCards.length}</span>
          {isMastered && <span className="text-emerald-600 flex items-center gap-1"><Check size={16} /> Đã thuộc</span>}
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
