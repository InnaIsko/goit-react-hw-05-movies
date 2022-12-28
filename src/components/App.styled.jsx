import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  color: black;
  font-size: ${p => p.theme.fontSizes.l};
  padding-right: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  cursor: pointer;

  &.activ {
    <color:red></color:red>
  }

  :hover:not(.activ),
  :focus {
    text-shadow: ${p => p.theme.shadows.text};
    scale: 1.2;
  }
`;
