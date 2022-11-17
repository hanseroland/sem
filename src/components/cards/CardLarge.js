import React from 'react'
import Grid from '@mui/material/Grid'
import {Paper, Typography, IconButton, Button } from '@mui/material'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Image = styled.img`

 display:block;
 width:100%;
 height:100%;
 max-width:100px;
 max-height:100px;
 border-radius:10px;
 position:relative;
 object-fit:cover;
 transition:all 0.2s linear;

  :hover{
    transform:scale(1.0)
 }
`;

const CardConatiner = styled(Paper)`
    max-width:1000px;
    margin:auto;
    flex-grow:1;
`;

const TitleLink = styled(Link)`
  text-decoration:none;
  font-weight: bold;
  font-size:15px;
  color:#006431;
  :hover{
    border-bottom:1px solid #006431';
  }
`;

const Price = styled(Link)`
  text-decoration:none;
  color:#000;
  font-weight: bold;
  font-size:15px;
`;

const SubTitle = styled(Link)`
  color:#000;
  font-size:12px;
  display:flex;
  

  :hover{
    color:#3976F8;
  }

`;

const ButtonOffre = styled(Button)`
  color: #fff;
  font-size:12px;
  border-color: #3976F8;
  border-radius:20px;
  text-transform:lowercase

  :hover{
    background-color: #3976F8;
  }

`;

const Favorite = styled(IconButton)`
    position:relative;
    top:-170px;
    Right:-210px;
`;






function CardLarge({img}) {


  return (
    <CardConatiner  elevation={1} style={{margin:5}} >
           <Grid  container padding={1} >
             <Grid  item >
                <Image
                    alt="Hotel"
                    src={img}
                />
            </Grid>
            <Grid  item xs={12} sm container  style={{margin:2}}  >
                   <Grid  item xs container spacing={1} >
                     <Grid  item xs>
                             <div  style={{display:'flex',justifyContent:"space-between"}}>
                                <TitleLink to="#"> Radisson Blu  </TitleLink>
                             </div>
                             <Typography   fontSize={12} variant="p" align='justify' color="initial"> 
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. 
                              </Typography>  
                     </Grid>
                     
               </Grid>
            </Grid>
        </Grid>
    </CardConatiner>
  )
}

export default CardLarge