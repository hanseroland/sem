import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    menuOption:{
        padding:10
    },
    menuBox:{
        display:'flex',
        flexDirection:'column'
      
   },
   cardMedia:{
    objectFit:'cover',
    transition:'all 0.2s linear',
   
   },
   active:{
    color:'transparent',
    backdropFilter:"blur(20px)",
  
   ":hover":{
    transform:'scale(1.1)'
   }
   }
})

export default function MediaCard({img,alt,title,content}) {

  const classes = useStyles();

  return (
    <Card sx={{
         maxWidth: 345,
         ":hover":{
            boxShadow:'0 6px 20px #54736575',
            WebkitFilter:'drop-shadow 0 6px 20px #1c502e53',
           }

         
        }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={alt}
        sx={{
            width:'100%',
            height:'50%',
            maxWidth:'100%',
            maxHeight:'100%',
            objectFit:'cover',
            transition:'all 0.2s linear',
            ":hover":{
                transform:'scale(1.1)'
            } 
        }}
      />
      <CardContent>
        <Typography fontSize={15} gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:'#006431',textTransform:'none'}} size="small">Partager</Button>
        <Button sx={{color:'#006431',textTransform:'none'}} size="small">Lire plus</Button>
      </CardActions>
    </Card>
  );
}
