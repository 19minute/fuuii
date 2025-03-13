import React from 'react';
import GridLayout from '@/components/GridLayout';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <GridLayout>
        {/* Create 8 tiles with matching keys from the layout */}
        {[...Array(8)].map((_, index) => (
          <div key={`tile-${index}`} className="bg-gray-200 rounded shadow p-4">
            <h3>Tile {index + 1}</h3>
            <p>Drag or resize me!</p>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}
