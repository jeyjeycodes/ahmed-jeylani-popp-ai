import { Button } from '@/components/ui/button.tsx';
import { environmentVariables } from '@/config';
import { useListCandidatesQuery } from '@/graphql/generated';
import { graphqlClient } from '@/libs';
import { useState } from 'react';
import { useDebounce } from '@/hooks';
import { Input } from '@/components/ui/input.tsx';

export function App() {
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search, 500);

  // NOTE: backend filters should be case insensitive
  const { data } = useListCandidatesQuery(graphqlClient, {
    filter: { or: [{ firstName: { contains: debouncedSearch } }] },
  });

  return (
    <div>
      <h1>{environmentVariables.VITE_GRAPHQL_ENDPOINT}</h1>
      <Button>Hello world</Button>
      <Input value={search} onChange={(event) => setSearch(event.target.value)} />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
