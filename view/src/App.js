import React, { useState } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className='app'>
      <div className='input-text-area'>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder='Enter in markdown'
        />
      </div>
      <MarkdownToJsx className='md-preview'>{markdown}</MarkdownToJsx>
    </div>
  )
}
