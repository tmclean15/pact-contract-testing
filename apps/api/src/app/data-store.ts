export type Data = {
  id: number;
  date: Date;
  value: string;
};

export const data: Data[] = [
  {
    id: 1,
    date: new Date(),
    value: 'Item No. 1',
  },
  {
    id: 2,
    date: new Date(),
    value: 'Item No. 2',
  },
  {
    id: 3,
    date: new Date(),
    value: 'Item No. 3',
  },
];
