import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { FeedOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';


const AppHeader = () => (
    <>
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <FeedOutlined/>
                </IconButton>
                <Typography variant="h6">
                    <Link to={"/"} style={{textDecoration: 'none', color: 'inherit'}}>Read Latest Articles</Link>
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </>
)

export default AppHeader;