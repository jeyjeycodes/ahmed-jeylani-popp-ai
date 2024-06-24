import { Candidate, useListCandidatesQuery } from '@/graphql/generated';
import { graphqlClient } from '@/libs';
import { useEffect, useState } from 'react';
import { CustomTable } from '@/components/custom/custom-table';
import { useDebounce } from '@/hooks';
import { SearchInput } from '@/components/custom/search-input';
import { PaginationButtons } from '@/components/custom/pagination-buttons';

export function App() {
  const [search, setSearch] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [currentPageToken, setCurrentPageToken] = useState<number>(0);
  const [previousPageToken, setPreviousPageToken] = useState<string[]>(['first-page-token']);
  const [hasNoMorePages, setHasNoMorePages] = useState<boolean>(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const [debouncedFirstName, debouncedLastName] = debouncedSearch.split(' ');
    setFirstName(debouncedFirstName ?? '');
    setLastName(debouncedLastName ?? debouncedSearch);
  }, [debouncedSearch]);

  // NOTE: backend filters should be case insensitive
  const { data, isLoading } = useListCandidatesQuery(
    graphqlClient,
    {
      filter: { or: [{ firstName: { contains: firstName } }, { lastName: { contains: lastName ?? '' } }] },
      limit: 10,
      nextToken: nextPageToken,
    },
    { placeholderData: (previousData) => previousData },
  );

  useEffect(() => {
    if (!data?.listCandidates?.items) {
      setHasNoMorePages(false);
      return;
    }

    if (data?.listCandidates?.nextToken === null || data?.listCandidates?.items?.length < 10) {
      setHasNoMorePages(true);
    } else {
      setHasNoMorePages(false);
    }
  }, [data]);

  const handleLoadMore = async () => {
    if (data?.listCandidates?.nextToken) {
      setPreviousPageToken([...previousPageToken, data.listCandidates.nextToken]);
      setCurrentPageToken(currentPageToken + 1);
      setNextPageToken(data.listCandidates.nextToken);
    }
  };

  const handlePrevious = async () => {
    if (currentPageToken > 1) {
      setNextPageToken(previousPageToken[currentPageToken - 1]);
      setCurrentPageToken(currentPageToken - 1);
    } else {
      setNextPageToken(null);
      setCurrentPageToken(currentPageToken - 1);
    }
  };

  return (
    <div className={'container py-32'}>
      <div className={'flex flex-col border rounded border-gray-400 p-3'}>
        <SearchInput
          testId={'search-input'}
          placeholder={'Search for candidates name (case sensitive)'}
          loading={isLoading}
          onChange={(value) => setSearch(value)}
        />
        <CustomTable
          testId={'custom-table'}
          candidates={(data?.listCandidates?.items as Candidate[]) ?? []}
          onSearchChanged={setSearch}
        />
        {debouncedSearch && !data?.listCandidates?.items.length && data?.listCandidates?.items.length === 0 && (
          <div className={'flex flex-col self-center mt-10'}>
            <h1>
              You have no candidates with the first name or last name <b>'{debouncedSearch}'</b>
            </h1>
          </div>
        )}
        <PaginationButtons
          data-testid={'pagination-buttons'}
          disableNextPageButton={hasNoMorePages}
          disablePreviousPageButton={currentPageToken === 0}
          handlePrevious={handlePrevious}
          handleLoadMore={handleLoadMore}
        />
      </div>
    </div>
  );
}
