import styled from 'styled-components'

export const Wrapper = styled.main``

export const Button = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 7px;

  background-color: ${(props) => props.theme.value};
  color: ${(props) => props.theme.dark};
  font-weight: 600;
  font-size: 16px;
`
