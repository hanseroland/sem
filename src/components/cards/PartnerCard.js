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
         border:"1px solid #006431",
         ":hover":{
          boxShadow:" 0px 20px 30px -5px rgba(0, 0, 0, 0.3)"
         } 
        
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
