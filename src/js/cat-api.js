import axios from "axios";

const apiKey = "live_AJKb2KkNgVFn1NuYMO2fmaNywCcoCy5qxHOfBsVlkn8VR4o7wtYDG0c49v1MJbBw";

axios.defaults.headers.common["x-api-key"] = apiKey;

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
        .then(response => response.data);
}

export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.data);
}
