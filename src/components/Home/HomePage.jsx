import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundDark || '#121212'};
  color: ${({ theme }) => theme.colors.text || '#FFFFFF'};
`;

const WelcomeMessage = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const OptionButton = styled(Link)`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary || '#00BFFF'};
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover || '#008CBA'};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <HomeContainer>
      {!user ? (
        <WelcomeMessage>Welcome to a Healthy Life</WelcomeMessage>
      ) : (
        <>
          <WelcomeMessage>Welcome Back!</WelcomeMessage>
          <ButtonContainer>
            <OptionButton to="/calculate-calories">Calculate Calories</OptionButton>
            <OptionButton to="/bmi">Calculate BMI</OptionButton>
            <OptionButton to="/exercise-tracker">Exercise Tracker</OptionButton>
            <OptionButton to="/dashboard">Dashboard</OptionButton>
          </ButtonContainer>
        </>
      )}
    </HomeContainer>
  );
};

export default HomePage;