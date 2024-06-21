export const addItems = (noOfItems: number) => {
  const items = [];
  for (let i = 0; i < noOfItems; i++) {
    items.push({
      id: `id-${i}`,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '1234567890',
      score: 100,
      status: 'SHORTLISTED',
      updatedAt: new Date().toISOString(),
    });
  }
  return items;
};
