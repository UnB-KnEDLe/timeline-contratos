import React from 'react';
import { ToastProvider } from './toast';
import { AdvancedSearchProvider } from './useAdvancedSearch';
import { ProcessProvider } from './useProcess';

const AppProvider: React.FC = ({ children }) => (
  <>
    <ProcessProvider>
      <AdvancedSearchProvider>
        <ToastProvider>{children}</ToastProvider>
      </AdvancedSearchProvider>
    </ProcessProvider>
  </>
);

export default AppProvider;
