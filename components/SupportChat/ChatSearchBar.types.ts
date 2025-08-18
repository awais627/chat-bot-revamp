import type { Dispatch, SetStateAction } from 'react';

export interface SearchUserProps {
  searchUser: string;
  setSearchUser: Dispatch<SetStateAction<string>>;
}
