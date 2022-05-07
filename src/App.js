import './App.css';
import { Fragment } from 'react';
import AppHeader from './components/AppHeader';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { styled } from '@mui/system';

const ContentWrap = styled('div')(({theme}) => ({
    padding: "20px 80px 0 80px",
    [theme.breakpoints.down("md")]: {
        padding: "20px 20px 0 20px",
    }
}));

function App() {
    return (
        <Fragment>
            <Router>
                <AppHeader/>
                <ContentWrap>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/posts" element={<PostList/>}/>
                            <Route path="/posts/:id" element={<PostDetail/>}/>
                        </Routes>
                </ContentWrap>
            </Router>
        </Fragment>
        
    );
}

export default App;
