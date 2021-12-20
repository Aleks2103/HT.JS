import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function ImgMediaCard(props) {
    return (
      <Card className="card">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.img}
        />
      </Card>
    );
  }