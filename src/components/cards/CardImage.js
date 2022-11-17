import React from 'react'
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import {makeStyles} from '@mui/styles'





const CardItem = styled('div')(({ theme }) => ({
    display:"flex",
    flex:1,
    margin: "0 1rem",
    borderRadius:10,
    marginBottom:50
 }));

 const CardItemLink = styled(Link)(({ theme }) => ({
   display:'flex',
   flexFlow:'column',
   width:'100%',
   boxShadow:'0 6px 20px #327b5975',
   WebkitFilter:'drop-shadow 0 6px 20px #1c502e53',
   borderRadius:10,
   overflow:'hidden',
   textDecoration:'none',
  
}));

const CardItemPicWrap = styled('div')(({ theme }) => ({
   position:'relative',
   width:'100%',
   paddingTop:'67%',
   overflow:'hidden',
   left:0,
   
  


   ":after":{
    content:'attr(data-category)',
    position:'absolute',
    bottom:0,
    left:0,
    padding:'6px 8px',
    marginLeft:10,
    maxWidth:'calc((100%) - 60px)',
    fontSize:20,
    fontWeight:700,
    color:"#fff",
    background: 'linear-gradient(90deg,#2d6732 0%, #57bf8d 100%)',
    boxSizing:"border-box"
   }
}));

const CardItemImage = styled('img')(({ theme }) => ({
   position:"absolute",
   top:0,
   right:0,
   bottom:0,
   left:0,
   display:'block',
   width:'100%',
   height:'100%',
   maxWidth:'100%',
   maxHeight:'100%',
   objectFit:'cover',
   transition:'all 0.2s linear',

   ":hover":{
    transform:'scale(1.1)'
   }

}));

const CardItemInfo = styled('div')(({ theme }) => ({
   padding:'10px 20px 20px',
   backgroundColor:'#006431',
   //backdropFilter:"blur(20px)",
   textAlign:"right",
   display:"flex",
   justifyContent:'space-between'
}));

const CardItemText = styled('h1')(({ theme }) => ({
   color:"#ffffff",
   fontSize:15,
   lineBreak:24
}));


const useStyles = makeStyles({
    spanIcon:{
        backgroundColor:'#fff',
        display: "flex",
        justifyContent:'center',
        padding:10,
        borderRadius:50,
        height:50,
        width:50,
        textAlign:'center',
        color:"#006431",

        '&:hover' :{
            borderLeft: '4px solid #fff',
            transform:'all 0.3s ease-in',
            color:"#fff",
            backgroundColor:'#006431',
          }
    },
    
   
})




function CardImage({title,src,details,description,icon}) {
    const classes = useStyles()
  return (
    <CardItem>
        <CardItemLink  to="#" >
            <CardItemPicWrap data-category={title}   >
                <CardItemImage
                    src={src}
                    alt={description}
                />
            </CardItemPicWrap>
            <CardItemInfo>
               <span className={classes.spanIcon} > 
               {icon} 
               </span>
                <CardItemText>
                        {details}
                </CardItemText>
            </CardItemInfo>
        </CardItemLink>
    </CardItem>
  )
}

export default CardImage