import Input from '@/components/ui/Input/';
import { CiSearch } from 'react-icons/ci';
import type { SearchUserProps } from './ChatSearchBar.types';

export const SearchUser: React.FC<SearchUserProps> = ({
  searchUser,
  setSearchUser
}) => {
  return (
    <div className="relative px-4 py-4 shadow-sm">
      <CiSearch
        className="absolute left-[1.5rem] top-[1.7rem] z-[99999]"
        color="gray-light"
      />
      <Input
        type="text"
        name="search "
        placeholder="Search User"
        value={searchUser}
        onChange={setSearchUser}
        className="m-auto w-full pl-8 text-sm"
      />
    </div>
  );
};
