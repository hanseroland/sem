import { Grid } from '@mui/material'
import React from 'react'
import {motion } from 'framer-motion';
import BannerBread from '../../components/banner/BannerBread';
import Mng from '../../images/V79A6136.jpg'
import InfoSection from '../../components/sections/InfoSection';
import Section from '../../components/sections/Section';
import * as RiIcon from 'react-icons/ri';
import * as GiIcon from 'react-icons/gi';
import ValueCard from '../../components/cards/ValueCard';
import { useEffect } from 'react';



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

const NosValeur = [
    {
        _id:1,
        icon:<GiIcon.GiTeacher color="#fff" size={70} />,
        title:"Travail",
        content:"Nous faisons ce qui est juste et nous honorons nos engagements.",
        color:"#fff",
        bgcolor:"#006431",
    },
    {
        _id:2,
        icon:<GiIcon.GiDiploma color="#006431" size={70} />,
        title:"Excellence",
        content:"Nous fixons des standards élevées et nous nous mettons au défi de fournir des performances supérieures.",
        color:"#006431",
        bgcolor:"fff",
    },
    {
        _id:3,
        icon:<GiIcon.GiEcology color="#fff" size={70} />,
        title:"Développement durable",
        content:"Nous faisons de la santé et de la sécurité notre priorité absolue dans tout ce que nous faisons.",
        color:"#fff",
        bgcolor:"#006431",
    },
    {
        _id:4,
        icon:<RiIcon.RiSearchEyeLine color="#006431" size={70} />,
        title:"Transparence",
        content:"Nous encourageons la diversité, l'inclusion, le dialogue ouvert et la collaboration.",
        color:"#707173",
        bgcolor:"#fff",
    }
]

function Missions_valeurs() {
    useEffect(() => {
        window.scrollTo(0,0)
      }, []);
    
  return (
    <>
       <BannerBread title="Missions & Valeurs" />
       <InfoSection
         content={Text}
         imgStart={false}
         Img={Mng}
         title="Nos Missions"
         titleColor="#006431"
         alt="SOCIÉTÉ ÉQUATORIALE DES MINES - MANGANÈSE DU GABON"
         viewport={{once:false}}
         initial={{opacity:0,x:-100}}
         whileInView={{opacity:1,x:0}}
         transition={{type:"easeIn", duration: 1 }}

         boxViewport={{once:false}}
         boxInitial={{opacity:0,x:-100}}
         boxWhileInView={{opacity:1,x:0}}
         boxTransition={{type:"easeOut", duration: 1 }}

         imgViewport={{once:false}}
         imgInitial={{opacity:0,x:100}}
         imgWhileInView={{opacity:1,x:0}}
         imgTransition={{type:"easeOut", duration: 1 }}
       />
       <Section
            title="Nos Valeurs"
            titleColor="#006431"
            bgcolor="#f7f7f7b8"
            viewport={{once:false}}
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{type:"easeIn", duration: 1 }}
       >
            <Grid container spacing={2} mb={5} >

                {
                    NosValeur.map((item,index)=>(
                        <Grid key={item._id} item lg={3} md={3} sm={6} xs={6} sx={{display:'flex',justifyContent:"center"}} >
                            <motion.div
                              viewport={{once:false}}
                              initial={{opacity:0,y:-100}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration: 1 }}
                            >
                                <ValueCard 
                                icon={item.icon}
                                title={item.title}
                                content={item.content}
                                color={item.color}
                                bgcolor={item.bgcolor}
                                width={450}
                            />
                            </motion.div>
                       </Grid>
                    ))
                }
               
            </Grid>
       </Section>
      
    </>
  )
}

export default Missions_valeurs