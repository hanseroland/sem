import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {motion } from 'framer-motion';


const Title = styled(Link)`
   color:#000 ;
   text-align:justify;
  
   &:hover {
    color:#006431;
   }

`;

export default function ArticleList({item,viewport,initial,whileInView,transition}) {
  return (
    <List sx={{ width: '100%', maxWidth: 400, bgcolor: '#f7f7f7b8' }}>
        {
            item.slice(1,5).map((item)=>(
                <>
                <motion.div
                    viewport={viewport}
                    initial={initial}
                    whileInView={whileInView}
                    transition={transition}
                    key={item._id} 
                >
                <ListItem 
                     alignItems="flex-start"    
                >
                   
                    <ListItemAvatar>
                     <Avatar sx={{width:50,height:50}} variant="square" alt={item.alt} src={item.image} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={<Title to="#"> {item.title} </Title>}
                    secondary={
                        <React.Fragment>
                        
                        <Typography
                            sx={{ display:'inline',textAlign:'justify' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                           
                        >
                            {item.date}
                        </Typography>
                        {item.content.substring(0,50)}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                </motion.div>
                <Divider variant="inset" component="li" />
                </>
            ))
        }
    
    </List>
  );
}