import axios from 'axios'

export const trendingMovies = () => {
    try {
        const res = await axios.get(`${process.env.MOVIESDB_BASE_URL}/trending/all/week?api_key=${process.env.MOVIES_DB_APIKEY}&language=en-US`)
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const originalsMovies = () => {
    try {
        const res = await axios.get(`${process.env.MOVIESDB_BASE_URL}/discover/tv?api_key=${process.env.MOVIES_DB_APIKEY}&with_network=213`)
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const topRatedMovies = () => {
    try {
        const res = await axios.get(`${process.env.MOVIESDB_BASE_URL}/movie/top_rated?api_key=${process.env.MOVIES_DB_APIKEY}&language=en-US`)
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const addFavourites = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('api/favourites/add', data,  config )
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

export const getFavourites = async () => {
    try {
        const res = await axios.get('api/favourites/get')
        console.log('Backend Res Favourites:::', res)
        return res.data;
            
    } catch (err) {
        console.log(err)
        return err
    }
}

