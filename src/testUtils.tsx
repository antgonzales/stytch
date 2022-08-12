import {render as rtlRender, RenderOptions} from '@testing-library/react';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export function renderWithProviders(ui: React.ReactElement, renderOptions?: RenderOptions) {
  const queryClient = new QueryClient();

  const Wrapper = ({children}: {children: React.ReactNode}) => {
      return <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
  };

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

export * from '@testing-library/react';

export {renderWithProviders as render};
