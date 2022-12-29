import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  color: black;
  font-size: ${p => p.theme.fontSizes.l};
  padding-right: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: ${p => p.theme.colors.activ};
  }

  :hover:not(.active),
  :focus:not(.active) {
    text-shadow: ${p => p.theme.shadows.text};
  }
`;
