import styled from 'styled-components';

import MainColors from '../../../utils/constants/colors';

const StyledButton = styled.button`
  height: 3rem;
    font-family: 'Dm Sans';
    display: ${props=>props.style?.padding || "grid"};
    place-items: center;
    box-sizing: border-box;
    padding: ${props=>props.style?.padding || '7px'};
    letter-spacing: -0.005em;
  cursor: pointer;
  text-align: center;
  font-size: ${props => props.style?.fontSize || "14px"};
  color: ${props=>props.style?.color || MainColors.white};
  border-radius: ${props => props.style?.borderRadius || "5px" };
  border: ${props=>props.style?.border || "none"};
  background: ${props=>props.style?.background || MainColors.blue};
  transition: background-color 0.3s ease-out;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;

  &:hover {
    background: ${props=>props.style?.backgroundColor || MainColors.buttonHover};
  }

  &:focus,
  &:active {
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
    background: ${MainColors.disabled}
  }
`;

export default StyledButton;
