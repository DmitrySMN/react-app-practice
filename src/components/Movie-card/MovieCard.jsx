import styles from "../Main/Main.module.css";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const MovieCard = ({ posterUrl, title, genres, year }) => {
  const splitedDate = year.split("-");
  let month = "января";

  switch (splitedDate[1]) {
    case "01":
      month = "января";
      break;
    case "02":
      month = "февраля";
      break;
    case "03":
      month = "марта";
      break;
    case "04":
      month = "апреля";
      break;
    case "05":
      month = "мая";
      break;
    case "06":
      month = "июня";
      break;
    case "07":
      month = "июля";
      break;
    case "08":
      month = "августа";
      break;
    case "09":
      month = "сентября";
      break;
    case "10":
      month = "октября";
      break;
    case "11":
      month = "ноября";
      break;
    case "12":
      month = "декабря";
      break;
  }

  let formatedDate = `${splitedDate[2]} ${month} ${splitedDate[0]} г.`;

  return (
    <>
      <Card sx={{ width: 220 }}>
        <CardContent>
          <Box component={"img"} src={posterUrl} />
          <Typography component={"div"}>
            <b>{title}</b>
          </Typography>
          {genres.map((g) => (
            <Typography color={"purple"}>{g.genre}</Typography>
          ))}
          <Typography color={green[300]}>{formatedDate}</Typography>

          {/*<button className={styles["favorite-btn"]}>*/}
          {/*    ♥*/}
          {/*</button>*/}
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
