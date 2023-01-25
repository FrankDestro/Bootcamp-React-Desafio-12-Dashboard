export type Stores = {
  id?: number;
  name?: string;
};

export type Store2 = 'Credsystem' | 'Tribanco';

export type FilterStore = {
  stores? : Store2
};