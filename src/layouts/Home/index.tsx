import Footer from 'components/Footer'
import Header from 'components/Header'
import * as S from './styles'

const Home = () => (
  <S.Home>
    <Header />
    <S.Content>
      <S.Paragraph>
        Rise of Kingdoms é um jogo de estratégia e gerenciamento onde você pode
        levar sua civilização da Idade da Pedra para a Idade Feudal. Existem
        treze civilizações para escolher quando você inicia o jogo: Egito, Roma,
        Alemanha, Grã-Bretanha, França, Vikings, China, Japão, Coréia, Espanha,
        Arábia, Império Otomano e Bizâncio.
      </S.Paragraph>
      <img src="/img/img-home.svg" alt="imagem do jogo Rise of Kingdoms" />
    </S.Content>

    <Footer />
  </S.Home>
)

export default Home
