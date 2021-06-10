import React from 'react';
import { ToastProvider } from './toast';
import { ProcessProvider } from './useProcess';

const AppProvider: React.FC = ({ children }) => (
  <>
    <ProcessProvider>
      <ToastProvider>{children}</ToastProvider>
    </ProcessProvider>
  </>
);

export default AppProvider;
