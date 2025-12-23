import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface WaitlistContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const WaitlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WaitlistContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlistModal = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlistModal must be used within WaitlistProvider');
  }
  return context;
};