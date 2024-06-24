import { FC } from 'react';
import { Loader2, SearchIcon } from 'lucide-react';
import { Props } from './types.ts';

export const SearchInput: FC<Props> = ({ loading, placeholder, onChange, testId }) => {
  return (
    <div
      data-testid={testId}
      className={
        'flex items-center p-0 h-10 mb-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm [&:has(:focus-visible)]:ring-ring [&:has(:focus-visible)]:ring-2'
      }
    >
      <SearchIcon className={'size-4'} />
      <input
        className={'size-full ml-2 border-none bg-transparent focus:outline-none'}
        type={'search'}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      {loading && <Loader2 className={'animate-spin'} size={16} />}
    </div>
  );
};
