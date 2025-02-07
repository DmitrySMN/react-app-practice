import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Store from '../../store/store.js';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const store = new Store();
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          store.logout();
          navigate('/login');
          window.location.reload();
        }}
        sx={{ color: 'white', margin: 0 }}
        variant="contained"
      >
        <Typography>Сменить пользователя</Typography>
      </Button>
    </>
  );
};

export default LogoutButton;
