import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn-icons-png.flaticon.com/512/219/219986.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        { user.name }
        </Typography>
         <Typography variant="body2" color="text.secondary">
          {user.username}<br/>
          {user.email}<br/>
          {user.address.street}<br/>
          {user.address.suite}<br/>
          {user.address.city}<br/>
          {user.phone}<br/>
          {user.website}
        </Typography> 
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

