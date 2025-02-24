import styles from './MovieCard.module.css';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import FavoriteButton from '../Favorite-button/FavoriteButton.jsx';

const MovieCard = ({ posterUrl, title, genres = [], year, id }) => {
  let formatedDate = '';

  if (year) {
    const splitedDate = year.split('-');
    let month = 'января';

    switch (month) {
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

    formatedDate = `${splitedDate[2]} ${month} ${splitedDate[0]} г.`;
  }

  return (
    <>
      <Card className={styles.card} sx={{ width: 220 }}>
        <CardContent>
          <div>
            <Box component={'img'} src={posterUrl} />
            <Link
              reloadDocument
              style={{ color: 'black', textDecoration: 'none' }}
              to={`/movies/${id}`}
            >
              <Typography component={'div'}>
                <b>{title}</b>
              </Typography>
            </Link>

            {genres.map((g) => (
              <Typography color={'purple'}>{g.genre}</Typography>
            ))}
            <Typography color={green[300]}>{formatedDate}</Typography>
          </div>
          <div>
            <FavoriteButton id={id} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
