// components/Provider.tsx
'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'; // Adjust the import to your store's path

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
