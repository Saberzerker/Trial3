import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.spacing.md} 0;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  
  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    color: #000;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">JustForRules</Logo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink 
            to="/profile" 
            className={location.pathname === '/profile' ? 'active' : ''}
          >
            Profile
          </NavLink>
          <NavLink 
            to="/exercise-log" 
            className={location.pathname === '/exercise-log' ? 'active' : ''}
          >
            Exercise Log
          </NavLink>
          <NavLink 
            to="/login" 
            className={location.pathname === '/login' ? 'active' : ''}
          >
            Login
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;