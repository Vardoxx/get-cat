import axios from 'axios'

export const axiosDefault = axios.create({
	baseURL: 'https://api.thecatapi.com/v1/images',
})
