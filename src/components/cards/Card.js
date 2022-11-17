import React from 'react'
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'




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
    fontSize:12,
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
   padding:'10px 30px 30px',
   backgroundColor:"#006431"
}));

const CardItemText = styled('h1')(({ theme }) => ({
   color:"#ffffff",
   fontSize:12,
   lineBreak:24
}));




function Card({path,title,src,details,description}) {
  return (
    <CardItem>
        <CardItemLink  to={path} >
            <CardItemPicWrap data-category={title}   >
                <CardItemImage
                    src={src}
                    alt={description}
                />
            </CardItemPicWrap>
            <CardItemInfo>
                <CardItemText>
                        {details}
                </CardItemText>
            </CardItemInfo>
        </CardItemLink>
    </CardItem>
  )
}

export default Card