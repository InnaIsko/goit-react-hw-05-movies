import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: 15px;
`;
export const ItemName = styled.li`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 10px;
`;
