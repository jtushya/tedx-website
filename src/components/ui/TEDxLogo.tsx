import React from 'react';

interface TEDxLogoProps {
  className?: string;
}

const TEDxLogo: React.FC<TEDxLogoProps> = ({ className = 'w-40 h-auto' }) => {
  return (
    <img 
      src="/logo-white.png" 
      alt="TEDx BITS Hyderabad 2025" 
      className={className}
    />
  );
};

export default TEDxLogo;