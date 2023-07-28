import React from 'react';

const CircularLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-blue-700 border-solid rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default CircularLoader;
