import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components';
import {motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';


const HeroContainer = styled.div`
 margin-bottom:40px ;
`;

const Box = styled(motion.div)`
    padding:2px;
`;

export const Image = styled.img`
  position: relative;
  width:100%;
  height:100%;
  margin: 0 0 -4px 0;
  padding-right: 0;
 

  @media screen and (max-width: 768px){
    width:100%;
  height:100%;
      
    }
`;

export const ImgWrap = styled(motion.div)`
    max-width: 555px;
    height:auto;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    border: 7px solid white;
    border-radius: 5px;

    &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
   }

   @media screen and (max-width: 380px){
       max-width: 300px;
    }

`

const Title3 = styled(motion.h3)`
   color:${props => props.titleColor} ;
   font-size: 2rem; 
   text-align:center ;
`;

const Text = "L'objectif de SEM est de participer activement au développement du secteur minier au Gabon en"+ 
 "contribuant par ses activités à l'amélioration des connaissances géologiques et à la promotion des opportunités"+
 "d'investissement dans ce secteur stratégique. Ses missions s'articulent autour de trois axes :\n\n"+

    "- Gérer les intérêts de l'État dans les projets miniers : influencer les décisions stratégiques des"+ 
    "entreprises et veiller à la prise en compte de la vision de l'État, notamment en matière de "+
    "transformation locale et de transfert de compétences.\n\n"+

    "- Développer et exploiter des projets miniers, en tant qu'opérateur, seul ou en partenariat : se positionner"+ 
    "sur des projets viables et établir des partenariats gagnant-gagnant avec des opérateurs partageant la vision de l'État.\n\n"+

    "- Commercialiser les métaux précieux : développer des réseaux d'approvisionnement légaux et des"+
    "partenariats commerciaux au niveau national et international."



function InfoSection({
    imgStart,
    content,
    Img,
    alt,
    viewport,
    initial,
    whileInView,
    transition,
    titleColor,
    title,
    imgViewport,
    imgInitial,
    imgWhileInView,
    imgTransition,
    boxViewport,
    boxInitial,
    boxWhileInView,
    boxTransition,
}) {
   
  return (
    <>
       <HeroContainer
        
       >
            <Container>
                <Grid container spacing={2}>
               
                       
                   
                    <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}} >
                    <Title3 
                         viewport={viewport}
                         initial={initial}
                         whileInView={whileInView}
                         transition={transition}
                         titleColor={titleColor}
                         >
                            {title}
                        </Title3>
                    </Grid>
                    {
                        imgStart 
                        ?
                            <>
                             <Grid item lg={6} xs={12}>
                                    <ImgWrap
                                      viewport={imgViewport}
                                      initial={imgInitial}
                                      whileInView={imgWhileInView}
                                      transition={imgTransition}
                                      
                                    >
                                        <Image src={Img}  alt="SOCIÉTÉ ÉQUATORIALE DES MINES - MANGANÈSE DU GABON" />
                                    </ImgWrap>
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <Box 
                                   viewport={boxViewport}
                                   initial={boxInitial}
                                   whileInView={boxWhileInView}
                                   transition={boxTransition}
                                   
                                >
                                        <MDEditor.Markdown source={content} 
                                            style={{
                                            backgroundColor:'#fff',
                                            color:"#000",textAlign:"justify"
                                            }} 
                                        />
                                </Box>
                                </Grid>
                               
                           </>
                        :
                            <>
                            <Grid item lg={6} xs={12}>
                                <Box 
                                   viewport={boxViewport}
                                   initial={boxInitial}
                                   whileInView={boxWhileInView}
                                   transition={boxTransition}
                                   
                                >
                                        <MDEditor.Markdown source={content} 
                                            style={{
                                            backgroundColor:'#fff',
                                            color:"#000",textAlign:"justify"
                                            }} 
                                        />
                                </Box>
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <ImgWrap
                                      viewport={imgViewport}
                                      initial={imgInitial}
                                      whileInView={imgWhileInView}
                                      transition={imgTransition}
                                     
                                    >
                                        <Image src={Img}  alt={alt} />
                                    </ImgWrap>
                                </Grid>
                            </>

                    }
                    
                </Grid>
            </Container>
        </HeroContainer> 
      

    </>
  )
}

export default InfoSection