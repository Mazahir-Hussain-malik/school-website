import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const useCarouselPagination = (api) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  const onClick = useCallback((index) => {
    if (!api) return;
    api.scrollTo(index);
  }, [api]);

  return {
    selectedIndex,
    scrollSnaps,
    onClick,
  };
};

const CarouselPagination = ({ api }) => {
  const { selectedIndex, scrollSnaps, onClick } = useCarouselPagination(api);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`w-8 h-3 rounded-2xl ${
            index === selectedIndex ? 'bg-[#11B67A]' : 'bg-gray-300'
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselPagination;