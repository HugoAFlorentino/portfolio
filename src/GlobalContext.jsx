import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => useContext(AppContext);
