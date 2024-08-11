import React, { useState, useEffect } from 'react';
import { getCars } from '../api';
import CarDetails from './CarDetails';
import '../styles/CarList.css';

const CarList: React.FC = () => {
    const [cars, setCars] = useState<any[]>([]);
    const [brand, setBrand] = useState('Toyota');
    const [selectedCar, setSelectedCar] = useState<any | null>(null);

    useEffect(() => {
        const fetchCars = async () => {
            const carsData = await getCars(brand);
            setCars(carsData);
        };
        fetchCars();
    }, [brand]);

    return (
        <div>
            <h1>Car Database</h1>
            <select onChange={(e) => setBrand(e.target.value)} value={brand}>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
                {/* Más opciones de marcas */}
            </select>
            <div className="car-list">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className="car-card"
                        onClick={() => setSelectedCar(car)}
                    >
                        <h3>{car.make} {car.model} ({car.year})</h3>
                        <p>Engine Type: {car.engine_type}</p>
                        <p>Horsepower: {car.horsepower} HP</p>
                        <p>Transmission: {car.transmission}</p>
                    </div>
                ))}
            </div>
            {selectedCar && (
                <CarDetails car={selectedCar} />
            )}
        </div>
    );
};

export default CarList;
