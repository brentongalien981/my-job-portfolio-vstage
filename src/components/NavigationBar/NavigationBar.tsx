import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { RootState } from '../../store/store';
import { useLocation } from 'react-router-dom';
import { setSelectedLink } from '../../store/navSlice';
import './NavigationBar.css';



const NavigationBar: React.FC = () => {

  const dispatch = useDispatch();
  const selectedLink = useSelector((state: RootState) => state.navigation.selectedLink);
  const location = useLocation();

  useEffect(() => {
    dispatch(setSelectedLink(location.pathname));
  }, [location.pathname, dispatch]);

  const linkData = [
    { link: '/', text: 'Home', },
    { link: '/projects', text: 'Projects', },
    { link: '/skills', text: 'Skills', },
  ];


  const linksComponent = linkData.map((data, index) => {

    const linkId = (data.link === selectedLink) ? 'selected-nav-item' : 'reuse-nav-item';


    return (
      <LinkContainer key={index} to={data.link}>
        <Nav.Link id={linkId}>{data.text}</Nav.Link>
      </LinkContainer>
    );
  });


  return (
    <Navbar expand="lg" style={{ borderBottom: "1px solid #ddd" }} id="the-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {linksComponent}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
