// src/components/ComicForm.js
import React, { useState } from 'react';

const ComicForm = ({ generateComic }) => {
  const [textInputs, setTextInputs] = useState(Array(10).fill(''));

  const handleChange = (index, value) => {
    let newInputs = [...textInputs];
    newInputs[index] = value;
    setTextInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateComic(textInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {textInputs.map((input, index) => (
        <div key={index}>
          <label>{`Panel ${index + 1}:`}</label>
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Generate Comic</button>
    </form>
  );
};

export default ComicForm;
