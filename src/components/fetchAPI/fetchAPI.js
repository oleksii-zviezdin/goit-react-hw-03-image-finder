import axios from "axios";

export class PixabayAPI {
    #BASE_URL = `https://pixabay.com/api/`;
    #API_KEY = `35043775-4ad51de805624d481f6825733`;

    #BASE_SEARCH_PARAMS = {
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`,
        per_page: 12,
    }

    get perPage() {
        return this.#BASE_SEARCH_PARAMS.per_page;
    }

    q = null;
    page = 1;
    
    fetchPhotos() {
        return axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&`,{
            params: {
                q: this.q,
                ...this.#BASE_SEARCH_PARAMS,
                page: this.page,
        },
    });
    }
}