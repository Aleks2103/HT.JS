import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function ImgMediaCard(props) {
    return (
      <Card className="card">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.img}
        />
        
        <CardActions className='btn'>
          <Button variant="contained">button</Button>
          <Button variant="contained">button</Button>
        </CardActions>
      </Card>
    );
  }