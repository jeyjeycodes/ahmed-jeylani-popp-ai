import { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';
import { Props } from './types.ts';

export const CustomTable: FC<Props> = ({ candidates, testId }) => {
  return (
    <Table data-testid={testId}>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Updated At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {candidates.map((candidate) => (
          <TableRow key={candidate.id}>
            <TableCell>{candidate.email}</TableCell>
            <TableCell>{candidate.firstName}</TableCell>
            <TableCell>{candidate.lastName}</TableCell>
            <TableCell>{candidate.phoneNumber}</TableCell>
            <TableCell>{candidate.score}</TableCell>
            <TableCell>{candidate.status}</TableCell>
            <TableCell>{candidate.updatedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
