import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/opertaions';
import { selectUserName } from '../../redux/auth/selectors';
import { UserMenuBox } from './UserMenu.styled';
import { Button, Text } from 'components/CommonStyle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <UserMenuBox>
      <Text>Welcome, {userName}!</Text>
      <Button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </UserMenuBox>
  );
};
