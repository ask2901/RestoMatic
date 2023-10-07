import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ProductImage from "../../../public/Assets/pizza_sm.png"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{borderRadius:2,width:1/4}}>
      <CardContent>
        <div className="flex flex-row mb-4 justify-between">
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
            <div>
              <Image src={ProductImage} height={25} width={25}></Image>
            </div>
            
        </div>
        
        
        <Typography  variant="h5" component="div">
          {props.value}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}