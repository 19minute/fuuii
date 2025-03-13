export const gridConfig = {
  // Mobile grid configuration (4 columns x 8 rows)
  mobile: {
    cols: 4,
    rowHeight: 100, // pixels per row
    width: '100%',
    containerPadding: [15, 15], // [x, y] padding
    margin: [10, 10], // [x, y] margin between items
    compactType: 'vertical', // compact items vertically
    preventCollision: false,
    isResizable: true,
    isDraggable: true,
  },
  // You can add other breakpoints like tablet, desktop, etc.
};

// Custom layouts for different screen sizes
export const defaultLayouts = {
  mobile: [
    { i: 'item1', x: 0, y: 0, w: 2, h: 2, static: false },
    { i: 'item2', x: 2, y: 0, w: 2, h: 1, static: false },
    { i: 'item3', x: 0, y: 2, w: 4, h: 2, static: false },
    { i: 'item4', x: 0, y: 4, w: 4, h: 2, static: false },
  ],
};
