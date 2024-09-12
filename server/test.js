fetch('https://10.react.htmlacademy.pro/wtw/films').then(res => res.json()).then(films => {
  console.log(films);
  const _comments = films.map(film => {
    return fetch(`https://10.react.htmlacademy.pro/wtw/comments/${film.id}`).then(res => res.json()).then(res => {
      return {
        filmId: film.id,
        comments: res
      }
    })
  })
  const comments = Promise.all(_comments);
  comments.then(data => console.log(data));
  console.log(comments);
})