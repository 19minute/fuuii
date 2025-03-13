import React from 'react';
import GridLayout from './GridLayout';

const GridExample: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mobile Grid Layout Example</h1>
      <GridLayout>
        <div key="item1" className="bg-blue-200 rounded-lg p-4 shadow">
          <h2 className="font-semibold">Item 1</h2>
          <p>Drag and resize me!</p>
        </div>
        <div key="item2" className="bg-green-200 rounded-lg p-4 shadow">
          <h2 className="font-semibold">Item 2</h2>
          <p>This is another grid item</p>
        </div>
        <div key="item3" className="bg-yellow-200 rounded-lg p-4 shadow">
          <h2 className="font-semibold">Item 3</h2>
          <p>Full width grid item</p>
        </div>
        <div key="item4" className="bg-purple-200 rounded-lg p-4 shadow">
          <h2 className="font-semibold">Item 4</h2>
          <p>The last grid item in our example</p>
        </div>
      </GridLayout>
    </div>
  );
};

export default GridExample;
