import ButtonCal from 'components/ButtonCal'
import Footer from 'components/Footer'
import Header from 'components/Header'
import InputAcc from 'components/InputAcc'
import InputAccAll from 'components/InputAccAll'
import * as S from './styles'

const Accelerator = () => (
  <S.Accelerator>
    <Header />
    <S.Section>
      <S.TextAccelerator>Aceleração</S.TextAccelerator>
      <S.Div>
        <S.Construction>
          <S.TextImg>
            <S.ImgIten src="/img/accelerator-img/construction-img.svg" />
            <h1>Construção</h1>
          </S.TextImg>
          <InputAcc />
          <ButtonCal />
        </S.Construction>

        <S.Training>
          <S.TextImg>
            <S.ImgIten src="/img/accelerator-img/training-img.svg" />
            <h1>Treinamento</h1>
          </S.TextImg>
          <InputAcc />
          <ButtonCal />
        </S.Training>

        <S.SearchACC>
          <S.TextImg>
            <S.ImgIten src="/img/accelerator-img/search-img.svg" />
            <h1>Pesquisa</h1>
          </S.TextImg>
          <InputAcc />
          <ButtonCal />
        </S.SearchACC>

        <S.Cure>
          <S.TextImg>
            <S.ImgIten src="/img/accelerator-img/cure-img.svg" />
            <h1>Hospital</h1>
          </S.TextImg>
          <InputAcc />
          <ButtonCal />
        </S.Cure>
      </S.Div>

      <S.Div>
        <S.ACC>
          <S.TextImg>
            <S.ImgIten src="/img/accelerator-img/acc-img.svg" />
            <h1>Acelerador</h1>
          </S.TextImg>
          <InputAccAll />
          <ButtonCal />
        </S.ACC>
      </S.Div>
    </S.Section>

    <Footer />
  </S.Accelerator>
)

export default Accelerator
