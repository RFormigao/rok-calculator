import ButtonCal from 'components/ButtonCal'
import Footer from 'components/Footer'
import Header from 'components/Header'
import InputExp from 'components/InputExp'
import * as S from './styles'

const ExpHero = () => (
  <S.ExpHero>
    <Header />
    <S.Knowledge>
      <S.NameTextExp>Tomo de conhecimento</S.NameTextExp>

      <S.ExpDiv>
        <S.DivImgTextExp>
          <S.ImgExp src="./img/exp-img/exp-img.svg" />
          <S.TextExp>Tomo de comandante</S.TextExp>
        </S.DivImgTextExp>

        <InputExp />
        <ButtonCal />
      </S.ExpDiv>
    </S.Knowledge>
    <Footer />
  </S.ExpHero>
)

export default ExpHero
