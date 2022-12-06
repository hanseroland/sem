import React from 'react'
import Container from '@mui/material/Container'
import { Link, Typography, Grid } from '@mui/material'
import { styled as styledMui } from '@mui/material/styles';
import { Link as LinkR } from 'react-router-dom';
import Logo from '../../images/Logo_SEM-BLANC.png'
import styled  from 'styled-components';
import { Call, LocationCity, PhoneCallback } from '@mui/icons-material';
import RoomIcon from '@mui/icons-material/Room';



const ContainerLogo = styled.div`
  max-width: 250px;
  padding: 0 10px;
  overflow: hidden;
`;

const LogoLink = styled(Link)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 60px;
`;

const LogoImg = styled.img`
    max-width: 100%;
    max-height: 60px;
`;

const FooterContainer = styledMui('footer')(({ theme }) => ({
    padding:theme.spacing(4),
    backgroundColor: '#006431',
 }));

 const SiteTitle = styledMui(Typography)(({ theme }) => ({
    fontWeight:'bold',
    letterSpacing:1.5,
    color:"white"
   }
 ));

 const FooterLink = styledMui(Link)(({ theme }) => ({
       color:"white",
       fontSize:15,
       textDecoration:'none',
       cursor:'pointer',
       textAlign:"left",

       ":hover":{
          color: "#707173",

       }
   }
 ));

const Copyright = () => {
    return(
        <Typography variant="p" color="white"> 
          Société Equatoriale des Mines © Tous droits reservés by <Link  style={{color:"gray"}} href='#'>
                hrp</Link>  {" "+ new Date().getFullYear()} 
        </Typography>
    )
}


function Footer() {
  return (
    <FooterContainer>
        <Container >
         <ContainerLogo>
            <LogoLink
               to="/"
            >
               <LogoImg  src={Logo} />
            </LogoLink>
         </ContainerLogo>
       
           <Grid textAlign="center" container spacing={1}>
               <Grid item  lg={3} xs={6} 
                style={{
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"flex-start",
                    boxSizing:"border-box"
                 }} 
                >
         <ul
          style={{
            color:"white",
            fontSize:12,
            listStyle:'none',
            marginLeft:0,
            padding:0

          }}
         >
            <li  style={{display:'flex',justifyContent:"flex-start",textAlign:"left"}} > <span> <RoomIcon fontSize='small' sx={{color:"white"}} /> </span> Boulevard de la Nation (bord de mer)<br/>BP 2130 Libreville - Gabon</li>
            <li style={{display:'flex'}}> <span> <Call fontSize='small'/> </span> Tel: +241 11444612  </li>
         </ul>
               </Grid>
               <Grid item  lg={3} xs={6}
                 style={{
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"flex-start",
                    boxSizing:"border-box"
                 }} 
               >
                  <Typography variant="h6" color="white"> <b>À propos</b> </Typography>
                  <FooterLink>Actualités</FooterLink>
                 {/* <FooterLink>Missions & Valeurs</FooterLink>*/}
                  <FooterLink>Messages de nos  Leaders</FooterLink>
                  <FooterLink>Équipe dirigeante</FooterLink>
                  <FooterLink>Galerie</FooterLink>
                  <FooterLink>Contactez-nous</FooterLink>
               </Grid>
               <Grid item  lg={3} xs={6}
                style={{
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"flex-start",
                    boxSizing:"border-box"
                 }} 
               >
                  <Typography variant="h6" color="white"> <b>Nos Activités</b> </Typography>
                  <FooterLink>Projet Bélinga</FooterLink>
                  <FooterLink>Gîte de Dourekiki</FooterLink>
                  <FooterLink>Carrière de Dousse Oussou</FooterLink>
                  <FooterLink>Minkébé Cottage</FooterLink>
                  

               </Grid>
               <Grid item  lg={3} xs={6}
                 style={{
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"flex-start",
                    boxSizing:"border-box"
                 }} 
               >
                  <Typography variant="h6" color="white"> <b>Investisseurs</b> </Typography>
                  <FooterLink>Investir avec nous</FooterLink>
                  <FooterLink>Gabon: une Économie croissante</FooterLink>
                  <FooterLink>Potentiel Minier</FooterLink>
               </Grid>
               <Grid display="flex" justifyContent="center" margin={5}  item xs={12}>
                    <Copyright/>
               </Grid>
           </Grid>
         
        </Container>
    </FooterContainer>
  )
}

export default Footer