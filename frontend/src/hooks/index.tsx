import React from 'react';
import { ToastProvider } from './toast';
<<<<<<< HEAD

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
=======
import { ProcessProvider } from './useProcess';

const AppProvider: React.FC = ({ children }) => (
  <>
    <ProcessProvider>
      <ToastProvider>{children}</ToastProvider>
    </ProcessProvider>
  </>
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
);

export default AppProvider;
