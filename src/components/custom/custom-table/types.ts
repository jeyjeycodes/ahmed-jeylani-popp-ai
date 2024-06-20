import { Candidate } from '@/graphql/generated';

export interface Props {
  candidates: Candidate[];
  onSearchChanged: (search: string) => void;
  testId: string;
}
