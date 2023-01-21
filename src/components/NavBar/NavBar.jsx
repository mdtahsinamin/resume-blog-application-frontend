// eslint-disable-next-line
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import resumeLogo from "../../assets/resumebuilder-logo.png";
import { useGetUserDetailsMutation} from "../../features/api/authenciationApi";
import "./NavBar.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from "../../features/authSlice";
const NavBar = ({blog = false}) => {
  const refreshToken = localStorage.getItem('refreshToken');

  const [getUser, result] = useGetUserDetailsMutation();
  const navigate = useNavigate();
  const  dispatch = useDispatch()

  const {isLogout} = useSelector((state) => state.user)

  useEffect(()=>{
      getUser({refreshToken})
      if(result.isSuccess){
         localStorage.setItem('name',result.data.user.name)
      }
  },[])

  const handleClick = () =>{
    localStorage.clear();
    navigate('/')
    window.location.reload(true);
  }



  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to='/'>
           <img src={resumeLogo} alt="" className="logo-section" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 offset-md-3">
                <Nav className="me-auto">
                  <Link to='/create-resume'>Resume</Link>
                  <Link to='/career-center'>Career Center</Link>
                  <Link to='/blog'>Blog</Link>
                  <Link to='/faq'>FAQ</Link>
                  {
                    blog && <Link to='/write'> WRITE</Link>
                  }
                </Nav>
              </div>
              <div className="col-md-4">
                <Nav className="d-flex justify-content-around">
                  {!result.isSuccess && <Link to="/login">
                    <button className="btn btn-outline-primary auth_login">
                      Log In
                    </button>
                  </Link>}
                   {!result.isSuccess &&  <Link to='/register'>
                    <button className="auth_button">Sign Up</button>
                   </Link>}
                   {
                     result.isSuccess && <p className="mt-2">{result.data.user.name}</p>
                   }
                   {
                     result.isSuccess  && <button className="auth_button" onClick={handleClick}>Logout</button>
                   }
                </Nav>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
