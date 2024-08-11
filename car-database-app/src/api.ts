import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.api-ninjas.com/v1/cars';

interface Car {
    make: string;
    model: string;
    year: number;
    engine_type: string;
    horsepower: number;
    transmission: string;
}

export const getCars = async (brand: string): Promise<Car[]> => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: { 'X-Api-Key': API_KEY },
            params: { make: brand },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching cars data: ", error);
        return [];
    }
};
