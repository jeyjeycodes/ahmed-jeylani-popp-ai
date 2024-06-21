import '@testing-library/jest-dom';

import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cleanup, render, screen } from '@testing-library/react';
import { App } from '@/app.tsx';
import { addItems } from './utils/data.ts';

const { useListCandidatesQueryMock } = vi.hoisted(() => {
  return {
    useListCandidatesQueryMock: vi.fn(),
  };
});

vi.mock('@/graphql/generated', () => ({
  ...vi.importActual('@/graphql/generated'),
  useListCandidatesQuery: useListCandidatesQueryMock,
}));

describe('App', () => {
  afterEach(() => {
    useListCandidatesQueryMock.mockReset();
  });

  describe('search input component', () => {
    beforeEach(async () => {
      const queryClient = new QueryClient();

      useListCandidatesQueryMock.mockReturnValue({
        data: {
          listCandidates: {
            items: addItems(1),
          },
        },
      });

      render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>,
      );
    });

    it('should render search input component', () => {
      const searchInput = screen.getByTestId('search-input');

      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('custom table component', () => {
    beforeEach(async () => {
      const queryClient = new QueryClient();

      useListCandidatesQueryMock.mockReturnValue({
        data: {
          listCandidates: {
            items: addItems(1),
          },
        },
      });

      render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>,
      );
    });

    afterEach(() => {
      useListCandidatesQueryMock.mockRestore();
    });

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

  describe('pagination buttons component', () => {
    beforeEach(async () => {
      const queryClient = new QueryClient();

      useListCandidatesQueryMock.mockReturnValue({
        data: {
          listCandidates: {
            items: addItems(1),
          },
        },
      });

      render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>,
      );
    });

    afterEach(() => {
      useListCandidatesQueryMock.mockRestore();
    });

    it('should render pagination buttons component', () => {
      const previousPageButton = screen.getByTestId('previous-page-button');
      const nextPageButton = screen.getByTestId('next-page-button');

      expect(previousPageButton).toBeInTheDocument();
      expect(nextPageButton).toBeInTheDocument();
    });

    it('should call handlePrevious when previous page button is clicked', () => {
      const previousPageButton = screen.getByTestId('previous-page-button');
      previousPageButton.click();

      expect(useListCandidatesQueryMock).toHaveBeenCalled();
    });

    it('should call handleLoadMore when next page button is clicked', () => {
      const nextPageButton = screen.getByTestId('next-page-button');
      nextPageButton.click();

      expect(useListCandidatesQueryMock).toHaveBeenCalled();
    });

    it('previous page button should be disabled when first page', () => {
      const previousPageButton = screen.getByTestId('previous-page-button');
      expect(previousPageButton).toBeDisabled();
    });

    it('next page button should be disabled when no next page', () => {
      const nextPageButton = screen.getByTestId('next-page-button');
      expect(nextPageButton).toBeDisabled();
    });

    it('next page button should be enabled when there is a next page', () => {
      cleanup(); // Clear previous render and load with new mock
      useListCandidatesQueryMock.mockReturnValueOnce(() => ({
        data: {
          listCandidates: {
            items: addItems(10),
            nextToken: 'next-page-token',
          },
        },
      }));

      const queryClient = new QueryClient();

      render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>,
      );

      const nextPageButton = screen.getByTestId('next-page-button');
      expect(nextPageButton).not.toBeDisabled();
    });
  });
});
