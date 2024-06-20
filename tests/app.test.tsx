import '@testing-library/jest-dom';

import { vi, describe, expect, it, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { App } from '@/app.tsx';

const { useListCandidatesQueryMock } = vi.hoisted(() => {
  return {
    useListCandidatesQueryMock: vi.fn().mockImplementation(() => ({
      data: {
        listCandidates: {
          items: [
            {
              id: '1',
              firstName: 'John',
              lastName: 'Doe',
              email: 'john.doe@gmail.com',
              phoneNumber: '1234567890',
              score: 100,
              status: 'SHORTLISTED',
              updatedAt: new Date().toISOString(),
            },
          ],
        },
      },
    })),
  };
});

vi.mock('@/graphql/generated', () => ({
  ...vi.importActual('@/graphql/generated'),
  useListCandidatesQuery: useListCandidatesQueryMock,
}));

describe('App', () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
  });

  describe('search input component', () => {
    it('should render search input component', () => {
      const searchInput = screen.getByTestId('search-input');

      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('custom table component', () => {
    it('should render custom table component when the data exists', () => {
      const customTable = screen.getByTestId('custom-table');

      expect(customTable).toBeInTheDocument();
    });

    it('should render the custom table component with the correct data', () => {
      const customTable = screen.getByTestId('custom-table');
      const email = screen.getByText('john.doe@gmail.com');

      expect(customTable).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
});
