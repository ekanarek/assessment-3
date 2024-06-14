import axios from 'axios';

const getRandomFossil = async () => {
    const response = await axios.get('/random-fossil.json');
    const fossil = response.data;

    const fossilImageDiv = document.getElementById('random-fossil-image');
    const fossilNameParagraph = document.getElementById('random-fossil-name');

    fossilImageDiv.innerHTML = `<img src="${fossil.img}">`;
    fossilNameParagraph.innerText = fossil.name;
}

const randomFossilButton = document.getElementById('get-random-fossil');

randomFossilButton.addEventListener('click', getRandomFossil)