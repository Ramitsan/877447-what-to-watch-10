import { Film } from '../types/film';

export const films: Film[] = [
  {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi965130777/?playlistId=tt4123430&ref_=tt_pr_ov_vi',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Fantastic Beasts: The Crimes of Grindelwald is a 2018 fantasy film directed by David Yates and written by J. K. Rowling. The sequel to Fantastic Beasts and Where to Find Them (2016), it is the second instalment in the Fantastic Beasts film series and the tenth overall in the Wizarding World franchise.',
    rating: 9.1,
    scoresCount: 500,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    runTime: 134,
    genre: 'fantasy',
    released: 2018,
    isFavorite: true
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi1451538969/?playlistId=tt1727824&ref_=tt_pr_ov_vi',
    previewVideoLink: 'https://www.imdb.com/title/tt1727824/?ref_=fn_al_tt_0',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Музыкальный фестиваль Live Aid (1985).',
    rating: 9.5,
    scoresCount: 470,
    director: 'Bryan Singer',
    starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    runTime: 134,
    genre: 'biography',
    released: 2018,
    isFavorite: true
  },
  {
    id: 3,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi1157933593/?playlistId=tt2278388&ref_=tt_ov_vi',
    previewVideoLink: 'https://www.imdb.com/title/tt2278388/?ref_=nv_sr_srsg_0',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false
  },
  {
    id: 4,
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi2000663321/?ref_=nv_sr_srsg_2',
    previewVideoLink: 'https://www.imdb.com/title/tt2884018/?ref_=fn_al_tt_2',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    rating: 7.8,
    scoresCount: 350,
    director: 'Justin Kurzel',
    starring: ['Michael Fassbender', 'Marion Cotillard', 'Jack Madigan'],
    runTime: 113,
    genre: 'Drama',
    released: 2015,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi3947888665/?playlistId=tt0338751&ref_=tt_ov_vi',
    previewVideoLink: 'https://www.imdb.com/title/tt0338751/?ref_=nv_sr_srsg_0',
    description: 'A biopic depicting the early years of legendary director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
    rating: 7.5,
    scoresCount: 487,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
    runTime: 120,
    genre: 'Biography',
    released: 2004,
    isFavorite: true
  },
  {
    id: 6,
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi566533657/?playlistId=tt1242460&ref_=tt_pr_ov_vi',
    previewVideoLink: 'https://www.imdb.com/title/tt1242460/?ref_=nv_sr_srsg_0',
    description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    rating: 7.5,
    scoresCount: 250,
    director: 'Lynne Ramsay',
    starring: ['Tilda Swinton', 'John C. Reilly', 'Ezra Miller'],
    runTime: 112,
    genre: 'Thriller',
    released: 2011,
    isFavorite: false
  },
  {
    id: 7,
    name: 'What We Do in the Shadows',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi3066085913/?playlistId=tt7908628&ref_=tt_pr_ov_vi',
    previewVideoLink: 'https://www.imdb.com/title/tt7908628/?ref_=nv_sr_srsg_0',
    description: 'A look into the daily (or rather, nightly) lives of four vampires, who\'ve lived together for over 100 years, on Staten Island.',
    rating: 6.7,
    scoresCount: 230,
    director: 'Joanne Toll',
    starring: ['Kayvan Novak', 'Matt Berry', 'Natasia Demetriou'],
    runTime: 150,
    genre: 'Comedy horror',
    released: 2019,
    isFavorite: false
  },
  {
    id: 8,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://www.imdb.com/video/vi3857035801/?playlistId=tt1663202&ref_=tt_pr_ov_vi',
    previewVideoLink: 'https://www.imdb.com/title/tt1663202/?ref_=nv_sr_srsg_0',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    rating: 9.3,
    scoresCount: 500,
    director: 'Alejandro G. Iñárritu',
    starring: ['Leonardo DiCaprio', 'Tom Hardy', 'Will Poulter'],
    runTime: 156,
    genre: 'Drama',
    released: 2015,
    isFavorite: true
  },
];
