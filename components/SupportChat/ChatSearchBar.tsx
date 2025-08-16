import Input from '@/components/ui/Input/';
import { CiSearch } from 'react-icons/ci';

interface SearchUserProps {
  searchUser: string;
  setSearchUser: React.Dispatch<React.SetStateAction<string>>;
}

const SearchUser: React.FC<SearchUserProps> = ({
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

export default SearchUser;
