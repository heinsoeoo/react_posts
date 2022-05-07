import { KeyboardArrowRight } from '@mui/icons-material';
import { Card, CardContent, Grid, Pagination, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paginator from '../components/Paginator';

const useStyles = makeStyles(() => ({
    root: {
      '& > *': {
        marginTop: 20,
        justifyContent:"center",
      },
    }
}));

const PostList = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 5;
    const count = Math.ceil(posts.length / perPage);
    const Data = Paginator(posts, perPage);

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

    const handleChange = (e, p) => {
        setPage(p);
        Data.jump(p);
      };

    return (
        <>
            <div style={{marginBottom: 48, textAlign: 'center'}}>
                <Typography variant='h4'>Posts</Typography>
            </div>
            {Data.currentData().length > 0 ? 
                Data.currentData().map((post,i,arr) => (
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
                                        <Typography variant='h5' sx={{mb: 1.5}} style={{
                                            height: '1.5em',
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            textOverflow: 'ellipsis',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical'
                                        }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant='body2' textAlign={'justify'} style={{
                                            height: '1.5em',
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            textOverflow: 'ellipsis',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical'
                                        }}>
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
            <Pagination
                className={classes.root}
                count={count}
                page={page}
                onChange={handleChange}
              />
        </>
    )
}

export default PostList;