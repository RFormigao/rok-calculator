import ButtonCal from 'components/ButtonCal'
import Footer from 'components/Footer'
import Header from 'components/Header'
import InputValue from 'components/InputValue'
import * as S from './styles'

const Resource = () => (
  <S.Resource>
    <Header />
    <S.SectionMain>
      <S.TextResource>Recursos</S.TextResource>
      <S.DivContent>
        <S.FoodResource>
          <S.ImgText>
            <S.ImgResource src="/img/resource-img/food-img.svg" />
            <h1>Alimento</h1>
          </S.ImgText>
          <InputValue />
          <ButtonCal />
        </S.FoodResource>

        <S.WoodResource>
          <S.ImgText>
            <S.ImgResource src="/img/resource-img/wood-img.svg" />
            <h1>Madeira</h1>
          </S.ImgText>
          <InputValue />
          <ButtonCal />
        </S.WoodResource>

        <S.OreResource>
          <S.ImgText>
            <S.ImgResource src="/img/resource-img/ore-img.svg" />
            <h1>Pedra</h1>
          </S.ImgText>
          <InputValue />
          <ButtonCal />
        </S.OreResource>

        <S.GoldResource>
          <S.ImgText>
            <S.ImgResource src="/img/resource-img/gold-img.svg" />
            <h1>Ouro</h1>
          </S.ImgText>
          <InputValue />
          <ButtonCal />
        </S.GoldResource>
      </S.DivContent>
    </S.SectionMain>

    <Footer />
  </S.Resource>
)

export default Resource
