import React from 'react';
import './index.css';

export const Bubble = ({ children, isButton, onBubbleClick }) => {
  return (
    <div className={`bubble ${isButton ? 'bubble-button' : ''}`} onClick={() => isButton && onBubbleClick()}>
        { children }
    </div>
  )
}