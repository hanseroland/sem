import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import {motion } from 'framer-motion';
import { Grid } from '@mui/material';
import MDEditor from '@uiw/react-md-editor';



const Span = styled.span`
  font-size:12px;
  color: #000;
  font-weight:bold ;
  text-transform:capitalize ;
  text-align:left ;

  @media screen and (max-width: 920px){
    font-size:10px;
   }
`;

export const Image = styled(motion.img)`
  position: relative;
  width: 300px;
  height: 300px;
 

  @media screen and (max-width: 768px){
    width: 250px;
    height:250px;
      
    }
`;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
           <Grid container>
                {children}
           </Grid>
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({data}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container
      sx={{ flexGrow: 1, bgcolor: 'background.paper', height:"auto" }}
    >
      <Grid item lg={4} xs={4} >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {
              data.map((item,index)=>(
                  <Tab  key={item._id} label={<Span>{item.title}</Span>} {...a11yProps(index)} />
              ))
          }
          
        </Tabs>
      </Grid>
      <Grid item lg={8} xs={8} >
      {
            data.map((item,index)=>(
            <TabPanel key={item._id} value={value} index={index}>
                <Grid item xs={12}> <h4>{item.title} </h4> </Grid>

               
                    {item.image ?
                      <Grid item lg={6} xs={12}> 
                            <Image src={item.image} alt={item.alt} />
                      </Grid>
                      :
                      " "
                    }
                    
              
                <Grid item lg={6} xs={12}> 
                    <MDEditor.Markdown source={item.content} style={{backgroundColor:'#fff',color:"#000",textAlign:"justify"}} />
                </Grid>
            </TabPanel>
            ))
        }
     
      </Grid>
      
    </Grid>
  );
}
