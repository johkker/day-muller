// src/components/Background.tsx
import React from 'react';
import { Box } from '@mui/material';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
    
  );
};

export default Background;
