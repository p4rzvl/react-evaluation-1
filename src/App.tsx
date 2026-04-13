import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      const newTag = inputValue.trim();
      
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue('');
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='container'>
      <div className='tags'>
        {tags.map((tag, index) => (
          <span key={index}>
            {tag}
            <button type="button" onClick={() => removeTag(index)}>
              x
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        className='input-box'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type and press space to add a tag"
        disabled={tags.length === 10}
      />
    </div>
  );
};

export default App;