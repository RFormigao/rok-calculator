import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 140px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secundary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.secundary};
`

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const Logo = styled.img``
