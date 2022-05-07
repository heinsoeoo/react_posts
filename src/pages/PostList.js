import { KeyboardArrowRight } from '@mui/icons-material';
import { Card, CardContent, Grid, Pagination, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paginator from '../components/Paginator';

const useStyles = makeStyles(() => ({
    root: {
      '& > *': {
        justifyContent:"center",
      },
    },
}));

const WrapTitle = styled(Typography)(
    ({theme}) => ({
        height: '1.5em',
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        [theme.breakpoints.down('md')]: {
            height: '4rem',
            WebkitLineClamp: 4,
        }
    })
);

const WrapContent = styled(Typography)(({theme}) => ({
    height: '1.5em',
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        [theme.breakpoints.down('md')]: {
            height: '4rem',
            WebkitLineClamp: 4,
        }
}));

const PostList = () => {
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
                            backgroundColor: 'inherit',
                        }}>
                            <CardContent style={{borderRadius: 0, paddingLeft: 0 ,paddingRight: 0}}>
                                <Grid container>
                                    <Grid item xs={10} md={10}>
                                        <WrapTitle variant='h5' sx={{mb: 1.5}}>
                                            {post.title}
                                        </WrapTitle>
                                        <WrapContent variant="body2" textAlign={'justify'}>
                                            {post.body}
                                        </WrapContent>
                                    </Grid>
                                    <Grid item xs={2} md={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <KeyboardArrowRight/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Link> 
                )) : (
                    <Card variant='outlined' style={{borderRadius: 0, border: 'none', backgroundColor: 'inherit'}}>
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
            {Data.currentData().length > 0? (
                <Pagination
                sx={{my: 4}}
                className={classes.root}
                count={count}
                boundaryCount={2}
                size='small'
                page={page}
                onChange={handleChange}
              />
            ): ""}
        </>
    )
}

export default PostList;