import * as S from './styles'
import { List } from '@phosphor-icons/react'

const Header = () => (
  <S.Header>
    <S.WrapperMenu>
      <List size={40} />
      <S.Title>Rok Storage</S.Title>
    </S.WrapperMenu>

    <S.Logo src="/img/logo.svg" alt="imagem do logo jogo Rise of Kingdoms" />
  </S.Header>
)

export default Header
