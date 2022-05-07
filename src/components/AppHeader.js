import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
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
                <Button color="inherit" style={{marginLeft: 10}}>
                    <Link to={'/posts'} style={{textDecoration: 'none', color: 'inherit'}}>Posts</Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </>
)

export default AppHeader;