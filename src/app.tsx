import { Candidate, useListCandidatesQuery } from '@/graphql/generated';
import { graphqlClient } from '@/libs';
import { useEffect, useState } from 'react';
import { CustomTable } from '@/components/custom/custom-table';
import { useDebounce } from '@/hooks';
import { SearchInput } from '@/components/custom/SearchInput';

export function App() {
  const [search, setSearch] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const [debouncedFirstName, debouncedLastName] = debouncedSearch.split(' ');
    setFirstName(debouncedFirstName ?? '');
    setLastName(debouncedLastName ?? '');
  }, [debouncedSearch]);

  // NOTE: backend filters should be case insensitive
  const { data, isLoading } = useListCandidatesQuery(
    graphqlClient,
    {
      filter: { and: [{ firstName: { contains: firstName } }, { lastName: { contains: lastName ?? '' } }] },
      limit: 10,
    },
    { placeholderData: (previousData) => previousData },
  );

  return (
    <div className="container py-32">
      <div className="flex flex-col">
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
      </div>
    </div>
  );
}
