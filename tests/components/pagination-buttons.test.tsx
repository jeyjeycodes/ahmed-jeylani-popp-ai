import '@testing-library/jest-dom';

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PaginationButtons } from '@/components/custom/pagination-buttons';

describe('PaginationButtons', () => {
  describe('previous page button', () => {
    it('should render previous page button', async () => {
      render(
        <PaginationButtons
          disablePreviousPageButton={false}
          disableNextPageButton={false}
          handlePrevious={vi.fn()}
          handleLoadMore={vi.fn()}
        />,
      );

      const previousButton = screen.getByTestId('previous-page-button');
      expect(previousButton).toBeInTheDocument();
    });

    it('previous page button should be disabled when prop is set', async () => {
      render(
        <PaginationButtons
          disablePreviousPageButton={true}
          disableNextPageButton={false}
          handlePrevious={vi.fn()}
          handleLoadMore={vi.fn()}
        />,
      );

      const previousPageButton = screen.getByTestId('previous-page-button');
      expect(previousPageButton).toBeDisabled();
    });

    it('should call handlePrevious when previous page button is clicked', async () => {
      const handlePrevious = vi.fn();
      render(
        <PaginationButtons
          disablePreviousPageButton={false}
          disableNextPageButton={false}
          handlePrevious={handlePrevious}
          handleLoadMore={vi.fn()}
        />,
      );

      const previousPageButton = screen.getByTestId('previous-page-button');
      previousPageButton.click();
      expect(handlePrevious).toHaveBeenCalled();
    });
  });

  describe('next page button', () => {
    it('should render next page button', async () => {
      render(
        <PaginationButtons
          disablePreviousPageButton={false}
          disableNextPageButton={false}
          handlePrevious={vi.fn()}
          handleLoadMore={vi.fn()}
        />,
      );

      const nextPageButton = screen.getByTestId('next-page-button');
      expect(nextPageButton).toBeInTheDocument();
    });

    it('next page button should be disabled when prop is set', async () => {
      render(
        <PaginationButtons
          disablePreviousPageButton={false}
          disableNextPageButton={true}
          handlePrevious={vi.fn()}
          handleLoadMore={vi.fn()}
        />,
      );

      const nextPageButton = screen.getByTestId('next-page-button');
      expect(nextPageButton).toBeDisabled();
    });

    it('should call handleLoadMore when next page button is clicked', async () => {
      const handleLoadMore = vi.fn();
      render(
        <PaginationButtons
          disablePreviousPageButton={false}
          disableNextPageButton={false}
          handlePrevious={vi.fn()}
          handleLoadMore={handleLoadMore}
        />,
      );

      const nextPageButton = screen.getByTestId('next-page-button');
      nextPageButton.click();
      expect(handleLoadMore).toHaveBeenCalled();
    });
  });
});
