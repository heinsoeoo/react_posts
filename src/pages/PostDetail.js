import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TitleWrapper = styled('div')(({theme}) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: 48,
}));

const PostDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [post, setPost] = useState('');

    const fetchData = async (method, endpoint, id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`, {
            method,
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            }
        });
        return await response.json();
    }

    const getPostDetail = async () => {
        setPost(await fetchData('GET', 'posts', id) || []);
    }

    useEffect(() => {
        getPostDetail();
    });
    
    return (
        <>
            <TitleWrapper>
                <Button onClick={()=>navigate(-1)}>
                    <KeyboardArrowLeft/>
                    <Typography textTransform={'none'}>Back</Typography>
                </Button>
            </TitleWrapper>
            <Typography variant='h5' mb={3}>{post.title}</Typography>
            <Typography variant='body2'>
                {post.body}
            </Typography>
        </>
    )
}

export default PostDetail;