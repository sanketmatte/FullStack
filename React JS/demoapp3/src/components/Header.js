import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>My App</Title>
      <Button>Sign In</Button>
    </HeaderContainer>
  );
}

export default Header;