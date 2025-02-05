import styles from './MovieCard.module.css';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from 'axios';

const MovieCard = ({ posterUrl, title, genres, year, id }) => {
  const splitedDate = year.split('-');
  let month = 'января';

  switch (splitedDate[1]) {
    case '01':
      month = 'января';
      break;
    case '02':
      month = 'февраля';
      break;
    case '03':
      month = 'марта';
      break;
    case '04':
      month = 'апреля';
      break;
    case '05':
      month = 'мая';
      break;
    case '06':
      month = 'июня';
      break;
    case '07':
      month = 'июля';
      break;
    case '08':
      month = 'августа';
      break;
    case '09':
      month = 'сентября';
      break;
    case '10':
      month = 'октября';
      break;
    case '11':
      month = 'ноября';
      break;
    case '12':
      month = 'декабря';
      break;
  }

  let formatedDate = `${splitedDate[2]} ${month} ${splitedDate[0]} г.`;

  const handleClick = async () => {
    const authHeader = 'Bearer ' + localStorage.getItem('token');
    const response = await axios.post(
      `http://localhost:3000/api/users/favorites/${id}`,
      {},
      {
        headers: { authorization: authHeader },
      },
    );
    console.log(response.status);
  };

  return (
    <>
      <Card className={styles.card} sx={{ width: 220 }}>
        <CardContent>
          <Box component={'img'} src={posterUrl} />
          <Typography component={'div'}>
            <b>{title}</b>
          </Typography>
          {genres.map((g) => (
            <Typography color={'purple'}>{g.genre}</Typography>
          ))}
          <Typography color={green[300]}>{formatedDate}</Typography>
          <Button
            onClick={handleClick}
            variant={'contained'}
            sx={{ width: '100%' }}
          >
            В избранное
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
