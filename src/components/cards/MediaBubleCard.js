import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles'
import { Box } from '@mui/material';

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

const DisplayContent = ({icon,title,content}) => {
  return(
    <CardContent 
    sx={{
      textAlign:"center",
      //backgroundColor:'#fff',
      borderRadius:2,
      boxShadow:'0 6px 20px #54736575',
      WebkitFilter:'drop-shadow 0 6px 20px #1c502e53',
      backgroundColor:'transparent',
      backdropFilter:"blur(20px)",
      border:'1px solid #fff'
    }}
   >
     <span> {icon} </span>
    <Typography gutterBottom variant="h5" sx={{
      fontWeight:600,
      color:"#fff"
    }} component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {content}
    </Typography>
  </CardContent>
  )
}

export default function MediaBubleCard({img,alt,title,content,icon,position}) {

  const classes = useStyles();

  return (
    <Box  sx={{
         maxWidth: 345,
         background:'transparent',
         display:"flex",
         flexDirection:"column",
         justifyContent:"center",
         //alignItems:"center",
        
        }}>
          {position ? <DisplayContent icon={icon} title={title} content={content}  /> : ""}
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={alt}
            sx={{
                width:220,
                height:220,
                maxWidth:'100%',
                maxHeight:'100%',
                objectFit:'cover',
                borderRadius:50,
                transition:'all 0.2s linear',
                ":hover":{
                    transform:'scale(1.1)'
                } 
            }}
          />
     {position ? "" : <DisplayContent icon={icon} title={title} content={content} />}
    
    </Box>
  );
}
