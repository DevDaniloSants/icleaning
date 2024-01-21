import { useState } from 'react';

export const useMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  return { open, toggleMenu };
};
