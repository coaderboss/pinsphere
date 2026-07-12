'use client';
import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import PinCard from './PinCard';
import LoadMoreButton from './LoadMoreButton';

export default function MasonryGrid() {
  const { pins } = useAppContext();
  const [columns, setColumns] = useState(4);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setColumns(2); // Phone ke liye perfect 2 columns layout
      else if (window.innerWidth < 1024) setColumns(3); // Tablet ke liye 3
      else setColumns(4); // Laptop/Desktop ke liye 4
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pinsToShow = pins.slice(0, visibleCount);
  const hasMore = visibleCount < pins.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  const columnArray = Array.from({ length: columns }, () => []);
  pinsToShow.forEach((pin, index) => {
    columnArray[index % columns].push(pin);
  });

  return (
    <div>
      {/* Mobile me gap-2 aur desktop me gap-4 kiya hai */}
      <div className="flex gap-2 sm:gap-4 px-2 sm:px-4">
        {columnArray.map((colPins, colIndex) => (
          <div key={colIndex} className="flex-1 min-w-0">
            {colPins.map(pin => (
              <PinCard key={pin.id} pin={pin} />
            ))}
          </div>
        ))}
      </div>
      {hasMore && <LoadMoreButton onClick={loadMore} />}
      {pins.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No pins found</div>
      )}
    </div>
  );
}