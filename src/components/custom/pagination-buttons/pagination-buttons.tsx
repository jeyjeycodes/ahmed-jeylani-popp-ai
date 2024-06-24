import { FC } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Props } from './types.ts';

export const PaginationButtons: FC<Props> = ({
  handlePrevious,
  handleLoadMore,
  disablePreviousPageButton,
  disableNextPageButton,
}) => {
  return (
    <div className={'flex flex-row self-end mt-3'}>
      <Button
        data-testid={'previous-page-button'}
        className={'mr-1'}
        onClick={handlePrevious}
        disabled={disablePreviousPageButton}
      >
        <ChevronLeft />
      </Button>
      <Button data-testid={'next-page-button'} onClick={handleLoadMore} disabled={disableNextPageButton}>
        <ChevronRight />
      </Button>
    </div>
  );
};
