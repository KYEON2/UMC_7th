import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './component/NavBar';
import Movie from './movie';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Category from './pages/Category';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import UpComming from './pages/UpComming';
import SideBar from './component/SideBar'; 
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar /> 
        <Layout>
          <SideBar /> 
          <Routes>
            <Route path="/" element={<Movie />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/NowPlaying" element={<NowPlaying />} />
            <Route path="/Popular" element={<Popular />} />
            <Route path="/TopRated" element={<TopRated />} />
            <Route path="/UpComming" element={<UpComming />} />
            
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
