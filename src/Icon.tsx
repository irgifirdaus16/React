import React from 'react';

interface IconProps {
  icon: string;
  position?: 'left' | 'right';
  size?: number;
  background?: string;
}

const Icon: React.FC<IconProps> = ({ icon, position = 'left', size = 16, background = 'transparent' }) => {
  const style = {
    fontSize: size,
    backgroundColor: background,
    padding: '5px',
  };

  return <span style={style} className={`icon icon-${position}`}>{icon}</span>;
}

export default Icon;
