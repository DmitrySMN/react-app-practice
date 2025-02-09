import React, { useState } from 'react';
import { Button, IconButton, Snackbar } from '@mui/material';
import axios from 'axios';
import * as PropTypes from 'prop-types';

function CloseIcon(props) {
  return null;
}

CloseIcon.propTypes = { fontSize: PropTypes.string };
const FavoriteButton = ({ id }) => {
  const handleClick = async () => {
    try {
      const authHeader = 'Bearer ' + localStorage.getItem('token');

      // if (authHeader) {
      //   throw new Error('unauthorized');
      // }

      const response = await axios.post(
        `http://localhost:3000/api/users/favorites/${id}`,
        {},
        {
          headers: { authorization: authHeader },
        },
      );

      if (response.status === 200) {
        alert('Добавлено в избранное');
      }
    } catch (err) {
      alert('Сначала надо войти!');
    }
  };

  return (
    <>
      <div>
        <Button
          onClick={handleClick}
          variant={'contained'}
          sx={{ width: '100%' }}
        >
          В избранное
        </Button>
      </div>
    </>
  );
};

export default FavoriteButton;
