import { IoMdAdd } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { NavBox, NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <header>
      <NavBox>
        <h3>Phonebook</h3>
        <NavList>
          <li>
            <IoMdAdd size={30} />
          </li>
          <li>
            <FaSearch size={20} />
          </li>
          <li>
            <MdLogout size={25} />
          </li>
        </NavList>
      </NavBox>
    </header>
  );
};
