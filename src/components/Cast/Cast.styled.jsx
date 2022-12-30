import styled from 'styled-components';

export const Img = styled.img`
  width: 100px;
  box-shadow: ${p => p.theme.shadows.box};
`;

export const Item = styled.li`
  list-style: none;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: 10px;
`;
