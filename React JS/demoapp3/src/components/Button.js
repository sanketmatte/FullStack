import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? '#794caf' : '#008CBA'};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Button;