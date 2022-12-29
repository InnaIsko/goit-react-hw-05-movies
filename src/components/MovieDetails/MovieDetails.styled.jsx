import styled from 'styled-components';

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
  width: 400px;
  height: 300px;
`;
export const Title = styled.li`
  list-style: none;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 20px;
`;
