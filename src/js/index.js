import { fetchBreeds, fetchCatByBreed } from './cat-api';
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const breedName = document.querySelector('.breed-name');
const description = document.querySelector('.description');
const temperament = document.querySelector('.temperament');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catImage = catInfo.querySelector('img');
breedSelect.style.display = 'none';
catInfo.style.display = 'none';
error.style.display = 'none';
loader.style.display = 'block';
fetchBreeds()
    .then(breeds => {
        breedSelect.innerHTML = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
        breedSelect.style.display = 'block';
        loader.style.display = 'none';
    })
    .catch(err => {
        error.style.display = 'block';
        console.error(err);
        loader.style.display = 'none';
    });
breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;
    breedSelect.style.display = 'none';
    catInfo.style.display = 'none';
    error.style.display = 'none';
    loader.style.display = 'block';
    fetchCatByBreed(selectedBreedId)
        .then(catData => {
            const cat = catData[0];
            breedName.textContent = cat.breeds[0].name;
            description.textContent = cat.breeds[0].description;
            temperament.textContent = cat.breeds[0].temperament;
            catImage.src = cat.url;
            catImage.style.maxWidth = '300px';
            catImage.style.height = 'auto';
            loader.style.display = 'none';
            catInfo.style.display = 'block';
            breedSelect.style.display = 'block';
        })
        .catch(err => {
            error.style.display = 'block';
            console.error(err);
            loader.style.display = 'none';
        });
});
