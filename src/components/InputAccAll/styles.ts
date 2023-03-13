import styled from 'styled-components'

export const InputAccAll = styled.main``

export const DivInputAll = styled.div``

export const DivTr = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 0;
`

export const ThValue = styled.th`
  width: 110px;
  height: 45px;
  background-color: ${(props) => props.theme.value};
  color: ${(props) => props.theme.secundary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 23px;
`

export const AllInputAcc = styled.input`
  width: 180px;
  height: 45px;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.secundary};
  text-align: center;
`
