import React from 'react';

const ComicDisplay = ({ comicImages }) => {
  return (
    <div>
      {comicImages.map((image, index) => (
        <img key={index} src={URL.createObjectURL(image)} alt={`Panel ${index + 1}`} />
      ))}
    </div>
  );
};

export default ComicDisplay;