import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
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

export default function PartnerCard({src,alt}) {

  const classes = useStyles();

  return (
    <Card sx={{
         maxWidth: 100,
         height:70,
         padding:5,
         display:'flex',
         border:"none",
         justifyContent:'center',
         backgroundColor:"transparent",
         margin:5,
         
        
        }}>
      <CardMedia
        component="img"
        height="100"
        image={src}
        alt={alt}
        sx={{
            width:100,
            height:100,
            objectFit:'contain',
            transition:'all 0.2s linear',
            textAlign:'center',
            ":hover":{
                transform:'scale(1.1)'
            } 
        }}
      />
    </Card>
  );
}
