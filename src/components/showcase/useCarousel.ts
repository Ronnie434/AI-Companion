import { useState, useCallback, useEffect, useRef } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

interface UseCarouselReturn {
  currentIndex: number;
  direction: number;
  isAutoPlaying: boolean;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  pauseAutoPlay: () => void;
  resumeAutoPlay: () => void;
  containerProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function useCarousel({
  totalSlides,
  autoPlayInterval = 5000,
  pauseOnHover = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, autoPlayInterval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const containerProps = {
    onMouseEnter: pauseOnHover ? pauseAutoPlay : () => {},
    onMouseLeave: pauseOnHover ? resumeAutoPlay : () => {},
  };

  return {
    currentIndex,
    direction,
    isAutoPlaying,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoPlay: () => setIsAutoPlaying(false),
    resumeAutoPlay: () => setIsAutoPlaying(true),
    containerProps,
  };
}