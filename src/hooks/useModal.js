import { useState } from 'react';

const useModal = (initialState) => {
  const [isOpen, setOpen] = useState(initialState || false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return [isOpen, closeModal, openModal];
};

export default useModal;
