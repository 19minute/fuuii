"use client"; // Add this to specify client-side rendering

"use client"; // Add this to specify client-side rendering

import React, { useState, useEffect, useRef } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

// Import required CSS
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// Define the ResizeHandle type
type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridLayoutProps {
  children?: React.ReactNode;
  className?: string;
  layouts?: any;
  onLayoutChange?: (layout: any, layouts: any) => void;
  tileBorderClass?: string;
}

// Generate layout based on orientation
const generateLayout = (isLandscape: boolean) => {
  const items = [];
  
  // In landscape mode: 8 columns × 4 rows
  // In portrait mode: 4 columns × 8 rows
  const cols = isLandscape ? 8 : 4;
  const rows = isLandscape ? 4 : 8;
  
  let itemCount = 0;
  
  // Calculate how many tiles can fit with 2x2 size
  const tilesPerRow = Math.floor(cols / 2);
  const tilesPerCol = Math.floor(rows / 2);
  
  for (let row = 0; row < tilesPerCol; row++) {
    for (let col = 0; col < tilesPerRow; col++) {
        console.log(`Adding tile ${itemCount} at position (${col * 2}, ${row * 2})`);
      items.push({
        i: `tile-${itemCount}`,
        x: col * 2,
        y: row * 2,
        w: 2,
        h: 2,
        minW: 1,
        minH: 1,
      });
      itemCount++;
    }
  }
  
  return items;
};

const GridLayout: React.FC<GridLayoutProps> = ({ 
  children, 
  className = "",
  layouts,
  onLayoutChange,
  tileBorderClass = "border-2 border-gray-300 rounded-md shadow-sm hover:border-blue-400"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Initialize with default values, don't access window here
  const [isLandscape, setIsLandscape] = useState(true);
  const [rowHeight, setRowHeight] = useState(100);
  const [gridCols, setGridCols] = useState({ lg: 8, md: 8, sm: 8, xs: 8, xxs: 8 });
  const [currentLayouts, setCurrentLayouts] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // First, set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Update dimensions and orientation
  useEffect(() => {
    if (!isMounted) return;

    const updateLayoutAndDimensions = () => {
      // Determine orientation
      const newIsLandscape = window.innerWidth > window.innerHeight;
      setIsLandscape(newIsLandscape);
      
      // Set number of columns based on orientation
      const newCols = newIsLandscape ? 8 : 4;
      setGridCols({
        lg: newCols,
        md: newCols,
        sm: newCols,
        xs: newCols,
        xxs: newCols
      });
      
      // Generate appropriate layout
      const newLayouts = {
        lg: generateLayout(newIsLandscape),
        md: generateLayout(newIsLandscape),
        sm: generateLayout(newIsLandscape),
        xs: generateLayout(newIsLandscape),
        xxs: generateLayout(newIsLandscape)
      };
      setCurrentLayouts(newLayouts);
      
      // Calculate appropriate row height
      if (containerRef.current) {
        const viewportHeight = window.innerHeight;
        const otherUIHeight = 40; // estimated header/margins
        
        if (newIsLandscape) {
          // In landscape, we have 4 rows
          const availableHeight = viewportHeight - otherUIHeight;
          const idealRowHeight = (availableHeight - 50) / 4; // Account for margins
          setRowHeight(idealRowHeight);
        } else {
          // In portrait, we have 8 rows
          const availableHeight = viewportHeight - otherUIHeight;
          const idealRowHeight = (availableHeight - 90) / 8; // Account for 7 internal margins (10px) and container padding (20px)
          setRowHeight(idealRowHeight);
        }
      }
    };
    
    // Initial calculation
    updateLayoutAndDimensions();
    
    // Recalculate on resize
    window.addEventListener('resize', updateLayoutAndDimensions);
    
    return () => {
      window.removeEventListener('resize', updateLayoutAndDimensions);
    };
  }, [isMounted]);

  const handleLayoutChange = (layout: any, allLayouts: any) => {
    setCurrentLayouts(allLayouts);
    if (onLayoutChange) {
      onLayoutChange(layout, allLayouts);
    }
  };

  // Don't render until client-side
  if (!isMounted) {
    return <div>Loading...</div>;
  }

  // Don't render until we've calculated the layout
  if (!currentLayouts) {
    return <div>Loading...</div>;
  }

  // Grid configuration
  const gridConfig = {
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: gridCols,
    rowHeight: rowHeight,
    containerPadding: [10, 10] as [number, number],
    margin: [10, 10] as [number, number],
    compactType: 'vertical',
    preventCollision: false,
    isResizable: true,
    isDraggable: true,
    // Add this line with our defined type
    resizeHandles: ['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'] as ResizeHandle[],
  };

  // Wrap each child in a div with clear borders
  const borderedChildren = React.Children.map(children, (child) => {
    return (
      <div 
        className={tileBorderClass} 
        style={{ 
          width: '100%', 
          height: '100%', 
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        {child}
      </div>
    );
  });

  return (
    <div className="grid-layout-container w-full h-full" ref={containerRef}>
      <ResponsiveGridLayout
        className={`${className} w-full`}
        layouts={currentLayouts}
        breakpoints={gridConfig.breakpoints}
        cols={gridConfig.cols}
        rowHeight={gridConfig.rowHeight}
        containerPadding={gridConfig.containerPadding}
        margin={gridConfig.margin}
        compactType={gridConfig.compactType as any}
        preventCollision={gridConfig.preventCollision}
        isResizable={gridConfig.isResizable}
        isDraggable={gridConfig.isDraggable}
        onLayoutChange={handleLayoutChange}
        resizeHandles={gridConfig.resizeHandles}
      >
        {borderedChildren}
      </ResponsiveGridLayout>
    </div>
  );
};

export default GridLayout;