const button = document.querySelector('.button');
const cardList = document.querySelector('#placeRender')

console.log(button)


function renderCard(cardObj) {
    const card = `<div class="col col_m">
    <div class="card" style="width: 18rem;">
      <img src=${cardObj.url} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${cardObj.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>`
    cardList.insertAdjacentHTML('beforeend', card)
    }

function getData() {
        return fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                const json = res.json();
                return json.then(Promise.reject.bind(Promise))
            })
            .catch((err) => {
                throw err;
            })

}
const refresh = () => {
    getData().then((data) => {
        return data.forEach((el) => {
            renderCard(el)
        })
    })
}

button.addEventListener('click', refresh)
