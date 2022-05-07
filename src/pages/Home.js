import { KeyboardArrowRight } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '150px 0'
                }}>
                    <Typography variant={'h3'} mb={5}>The world belongs to those who read</Typography>
                    <Button component={Link} to={"/posts"} variant="outlined" endIcon={<KeyboardArrowRight/>}>
                        Start Reading
                    </Button>
            </div>
        </>
    )
}