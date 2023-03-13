import styled from 'styled-components'

export const Table = styled.main`
  text-align: center;
  margin-bottom: 15px;
  border-collapse: collapse;
`

export const TableDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 0;
`

export const thTable = styled.th`
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

export const InputTable = styled.input`
  width: 180px;
  height: 45px;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.secundary};
  text-align: center;
`
