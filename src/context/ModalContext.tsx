import React, { createContext, useContext, useEffect, useState } from 'react';
import { eventEmitter } from '../utils/EventEmitter';
import { CarType } from '../types/CarType';

interface ModalContextType {
  isOpen: boolean;
  selectedCar: CarType | null;
  openModal: (car: CarType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);

  useEffect(() => {
    const handleOpenModal = (car: CarType) => {
      setSelectedCar(car);
      setIsOpen(true);
    };

    const handleCloseModal = () => {
      setIsOpen(false);
      setSelectedCar(null);
    };

    eventEmitter.on('openModal', handleOpenModal);
    eventEmitter.on('closeModal', handleCloseModal);

    return () => {
      eventEmitter.off('openModal', handleOpenModal);
      eventEmitter.off('closeModal', handleCloseModal);
    };
  }, []);

  const openModal = (car: CarType) => {
    eventEmitter.emit('openModal', car);
  };

  const closeModal = () => {
    eventEmitter.emit('closeModal');
  };

  return (
    <ModalContext.Provider value={{ isOpen, selectedCar, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}; 