import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function FolderList({list}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      
        {
            list.map((item)=>(
             <ListItem  key={item._id}>
                <ListItemAvatar>
                <Avatar  sx={{backgroundColor:"#707173"}} >
                        {item.icon}
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.content} />
            </ListItem>

            ))
        }
       
    </List>
  );
}