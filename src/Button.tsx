import React from 'react';
import Icon from './Icon';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  label: string;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ size, label, tooltip, tooltipPosition, icon, iconPosition }) => {
  const sizeClass = `button-${size}`;
  const tooltipClass = tooltip ? `tooltip tooltip-${tooltipPosition}` : '';
  const iconElement = icon ? <Icon icon={icon} position={iconPosition} /> : null;

  return (
    <div className="button-container">
      {tooltip && <span className={tooltipClass}>{tooltip}</span>}
      <button className={`button ${sizeClass}`}>
        {icon && iconPosition === 'left' && iconElement}
        {label}
        {icon && iconPosition === 'right' && iconElement}
      </button>
    </div>
  );
}

export default Button;
