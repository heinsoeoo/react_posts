import { KeyboardArrowRight } from '@mui/icons-material';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const API = "https://jsonplaceholder.typicode.com/";

    useEffect(() => {
        getPosts();
    }, []);

    const fetchData = async (method, endpoint) => {
        const response = await fetch(`${API}${endpoint}`, {
            method,
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            }
        });
        return await response.json();
    }

    const getPosts = async () => {
        setPosts(await fetchData('GET', 'posts') || []);
    }

    return (
        <>
            <div style={{marginBottom: 48, textAlign: 'center'}}>
                <Typography variant='h4'>Posts</Typography>
            </div>
            {posts.length > 0 ? 
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`} style={{textDecoration: 'none'}}>
                        <Card 
                        variant='outlined'
                        style={{
                            borderRadius: 0,
                            border: 'none',
                            borderBottom: '1px solid #202124',
                        }}>
                            <CardContent style={{borderRadius: 0, paddingLeft: 0 ,paddingRight: 0}}>
                                <Grid container>
                                    <Grid item xs={10} md={10}>
                                        <Typography variant='h5' sx={{mb: 1.5}}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant='body2' textAlign={'justify'}>
                                            {post.body}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} md={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <KeyboardArrowRight/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Link> 
                )) : (
                    <Card variant='outlined' style={{borderRadius: 0, border: 'none'}}>
                        <CardContent style={{borderRadius: 0, textAlign: 'center'}}>
                            <Typography variant='h6' sx={{mb: 1.5}}>
                                Sorry! No item available for now ...
                            </Typography>
                            <Typography>
                                Fetching Data . . . .
                            </Typography>
                        </CardContent>
                    </Card>
            )}
            {/* <Outlet/> */}
        </>
    )
}

export default PostList;