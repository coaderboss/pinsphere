// components/MasonryGrid.jsx
'use client';
import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import PinCard from './PinCard';
import LoadMoreButton from './LoadMoreButton';

export default function MasonryGrid() {
  const { pins } = useAppContext(); // already filtered
  const [columns, setColumns] = useState(4);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
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

  // Distribute into columns
  const columnArray = Array.from({ length: columns }, () => []);
  pinsToShow.forEach((pin, index) => {
    columnArray[index % columns].push(pin);
  });

  return (
    <div>
      <div className="flex gap-4 px-4">
        {columnArray.map((colPins, colIndex) => (
          <div key={colIndex} className="flex-1">
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