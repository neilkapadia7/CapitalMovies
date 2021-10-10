import axios from 'axios'

export const addFavourites = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('api/favourites/add', data,  config )
        console.log('Backend Res :::', res)
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

