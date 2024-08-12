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
                {/* Puedes agregar más opciones de marcas aquí */}
            </select>
            <div className="car-list">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className="car-card"
                        onClick={() => setSelectedCar(car)}
                    >
                        <h3>{car.make} {car.model} ({car.year})</h3>
                        <p><strong>Class:</strong> {car.class}</p>
                        <p><strong>Engine Type:</strong> {car.engine_type}</p>
                        <p><strong>Cylinders:</strong> {car.cylinders}</p>
                        <p><strong>Displacement:</strong> {car.displacement} L</p>
                        <p><strong>Drive Type:</strong> {car.drive}</p>
                        <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
                        <p><strong>Transmission:</strong> {car.transmission}</p>
                        <p><strong>City MPG:</strong> {car.city_mpg}</p>
                        <p><strong>Highway MPG:</strong> {car.highway_mpg}</p>
                        <p><strong>Combined MPG:</strong> {car.combination_mpg}</p>
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
