import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const FormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 3px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin: 30px;

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
