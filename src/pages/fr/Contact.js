import React,{useState} from 'react'
import {motion } from 'framer-motion';
import BannerBread from '../../components/banner/BannerBread';
import Section from '../../components/sections/Section';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import FolderList from '../../components/list/FolderList';
import RoomIcon from '@mui/icons-material/Room';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ImgSEM from '../../images/IMG_5319.jpg'
import styled from 'styled-components';


export const Image = styled(motion.img)`
  position: relative;
  width: 500px;
  height: 350px;
  border-radius:10px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  &:hover {
    box-shadow: 0px 20px 30px -7px rgba(0, 0, 0, 0.4);
   }

 

  @media screen and (max-width: 768px){
    width: 100%;
    height:auto;
      
    }
`;


function Contact() {


  const pageMotion = {
    initial:{opacity:0,x:0},
    animate:{opacity:1,x:100,transition:{duration:2}},
    exit:{opacity:0,x:0,transition:{duration:2}}
  }

 
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('') ;
  const [sujet, setSujet] = useState('');
  const [email, setEmail] = useState('') ;
  const [telephone, setTelephone] = useState('') ;
  const [message, setMessage] = useState('') ;


 const Informations = [
    {
      _id:1,
      title:"Adresse",
      content:"Boulevard de la Nation (Bord de Mer) P.O Box : 2130 Libreville – Gabon",
      icon: <RoomIcon  />
    },
    {
      _id:2,
      title:"Téléphone",
      content:"+241 (0)11444612",
      icon: <LocalPhoneIcon  />
    },
    {
      _id:3,
      title:"Email",
      content:"info@gabonmining.com",
      icon: <AlternateEmailIcon  />
    },
  
 ]

  return (
    <>
      <BannerBread title="Contact" />
      <Section
        title="Contactez-nous"
        bgcolor="#fff"  
        titleColor="#006431"
        viewport={{once:false}}
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"easeIn", duration: 1 }}
      >
        <Grid container spacing={2}>
              <Grid  item lg={6}>
                 <Grid  item xs={12}>
                    <Image 
                      src={ImgSEM} alt="SOCIETE EQUATORIALE DES MINES - SIEGE" 
                      viewport={{once:false}}
                      initial={{opacity:0,x:-100}}
                      whileInView={{opacity:1,x:0}}
                      transition={{type:"easeIn", duration: 1 }}
                      
                      />
                 </Grid>
                 <Grid  item xs={12}>
                  <Box mt={5}>
                      <motion.div 
                      
                      >
                          <FolderList
                                list={Informations}
                            />
                      </motion.div>
                     
                  </Box>
                     
                 </Grid>
                 
              </Grid>
              <Grid  item lg={6}>
                <form >
                       
                        <Grid  container >
                        
                            <Grid item lg={12} md={12} xs={12} >
                                
                                  <TextField
                                        label="Nom"
                                        margin="normal"
                                        type="text"
                                        onChange={(e)=> setNom(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        label="Prénom"
                                        margin="normal"
                                        type="text"
                                        onChange={(e)=> setPrenom(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        
                                    />
                                    <TextField
                                        label="Sujet"
                                        margin="normal"
                                        type="text"
                                        onChange={(e)=> setSujet(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        
                                    />
                                    <TextField
                                        label="Email"
                                        margin="normal"
                                        type="email"
                                        onChange={(e)=> setEmail(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                     <TextField
                                        label="Téléphone"
                                        margin="normal"
                                        type="text"
                                        onChange={(e)=> setTelephone(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                        
                                    <TextField
                                            label="Message"
                                            margin="normal"
                                            type="text"
                                            onChange={(e)=> setMessage(e.target.value)}
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            required
                                    />

                            
                                </Grid>
                            </Grid>
                        
                            <Box my={2}>
                            <Button
                               
                              
                                style={{backgroundColor:'#006431'}}
                                size="medium"
                                type="submit"
                                variant="contained"
                            >
                                Envoyer
                            </Button>
                            </Box>
                        </form>
              </Grid>
              <Grid  item xs={12}>
              
                
                 
              </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default Contact 