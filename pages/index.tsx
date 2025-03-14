import React from 'react';
import GridLayout from '../components/GridLayout';
import ComponentLoader from '../components/ComponentLoader';
import { GridDimensions } from '../components/types';
import ThemeSwitcherButton from '../components/ThemeSwitcherButton';

// First update your interface to correctly reflect the children as a render prop
interface GridTileProps {
  tileId: string;
  dimensions?: GridDimensions;
}

const GridTile: React.FC<GridTileProps> = ({ tileId, dimensions }) => {
  // Simply call the loader with the dimensions
  return (
    <div className="w-full h-full">
      {ComponentLoader.loadComponent(tileId, dimensions)}
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="w-full h-screen">
      {/* Theme Switcher positioned at top middle */}
      <div className="flex justify-center py-2">
        <ThemeSwitcherButton />
      </div>
      
      <GridLayout>
        {Array.from({ length: 8 }, (_, i) => (
          <GridTile key={i} tileId={`tile-${i}`} />
        ))}
      </GridLayout>
    </div>
  );
}