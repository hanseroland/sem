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

const Title = styled(Link)`
   color:#000 ;
   text-align:justify;
  
   &:hover {
    color:#006431;
   }

`;

export default function ArticleList({item}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
            item.slice(1,5).map((item)=>(
                <>
                <ListItem alignItems="flex-start" key={item._id} >
                    <ListItemAvatar>
                     <Avatar sx={{width:50,height:50}} variant="square" alt={item.alt} src={item.image} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={<Title to="#"> {item.title} </Title>}
                    secondary={
                        <React.Fragment>
                        
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            textAlign="justify"
                        >
                            {item.date}
                        </Typography>
                        {item.content.substring(0,50)}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </>
            ))
        }
    
    </List>
  );
}