import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  cardCount: number,
  promoFilmTitle: string,
  promoFilmGenre: string,
  promoFilmDate: string,
}

function App({ cardCount, promoFilmTitle, promoFilmGenre, promoFilmDate }: AppProps): JSX.Element {
  return (
    <MainPage
      cardCount={cardCount}
      promoFilmTitle={promoFilmTitle}
      promoFilmGenre={promoFilmGenre}
      promoFilmDate={promoFilmDate}
    />
  );
}

export default App;
