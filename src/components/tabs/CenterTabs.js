import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {motion } from 'framer-motion';



const H3 = styled.h3`
  font-size:1.5em;
  line-height:1em;
  color: #000;
  text-transform:capitalize ;

  @media screen and (max-width: 920px){
    font-size:12px;
   }
`;

export const Image = styled(motion.img)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: auto;
  max-height:auto;
 

  @media screen and (max-width: 768px){
       width: 100%;
       height: 70%;
      
    }
`;


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  

export default function CenteredTabs({data}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                {
                  data.map((item,index)=>(
                    <Tab key={item._id} label={<H3>{item.title}</H3>} />
                  ))
                }
            </Tabs>
         </Box>
               {
                  data.map((item,index)=>(

                    <TabPanel value={value} index={index}>
                         <Typography textAlign="justify" >
                            {item.content}
                         </Typography> 
                         {item.image 
                           ? <Image src={item.image} alt={item.alt} />
                           : ""
                         }
                    </TabPanel>
                  ))
                }
       
    </Box>
  );
}
