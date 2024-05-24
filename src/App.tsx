import React, { useState, useEffect } from 'react';
import Button from './Button';
import './style.css';

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('red');
  const colors = ['red', 'yellow', 'green'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(prevColor => {
        const currentIndex = colors.indexOf(prevColor);
        return colors[(currentIndex + 1) % colors.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <Button size="small" label="Click Me" tooltip="This is a button" tooltipPosition="top" />
      <Button size="medium" label="Click Me" icon="⭐" iconPosition="left" />
      <Button size="large" label="Click Me" icon="⭐" iconPosition="right" tooltip="Large Button" tooltipPosition="bottom" />
    </div>
  );
}

export default App;
