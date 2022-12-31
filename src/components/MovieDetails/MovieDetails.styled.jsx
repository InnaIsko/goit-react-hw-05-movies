import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  list-style: none;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Img = styled.img`
  width: 300px;
  height: 500px;
`;
export const Title = styled.li`
  list-style: none;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const LinkStyled = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.primary};

  &.active {
    color: ${p => p.theme.colors.activ};
  }
`;
