import React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import {motion } from 'framer-motion';
import styled from 'styled-components';



const Title3 = styled(motion.h3)`
   color:${props => props.titleColor} ;
   font-size: 2rem; 
   text-align:center ;
`;
 

function Section({children,title,bgcolor,titleColor, viewport,initial,whileInView,transition,}) {
  return (
    <div style={{backgroundColor:`${bgcolor}`,paddingBottom:15}} >
        <Container >
          <Box p={2} >
                <Title3 
                   viewport={viewport}
                   initial={initial}
                   whileInView={whileInView}
                   transition={transition}
                   titleColor={titleColor}
                >
                        {title}
                </Title3>
          </Box>
 
            {children}
        </Container>
    </div>
    
  )
}

export default Section