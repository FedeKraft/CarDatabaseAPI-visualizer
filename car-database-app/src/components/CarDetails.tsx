import React from 'react';
import '../styles/CarDetails.css';

interface CarDetailsProps {
    car: {
        make: string;
        model: string;
        year: number;
        engine_type: string;
        horsepower: number;
        transmission: string;
        drivetrain: string;
        fuel_type: string;
    };
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
    return (
        <div className="car-details">
            <h2>{car.make} {car.model} ({car.year})</h2>
    <ul>
    <li><strong>Engine Type:</strong> {car.engine_type}</li>
    <li><strong>Horsepower:</strong> {car.horsepower} HP</li>
    <li><strong>Transmission:</strong> {car.transmission}</li>
    <li><strong>Drivetrain:</strong> {car.drivetrain}</li>
    <li><strong>Fuel Type:</strong> {car.fuel_type}</li>
    </ul>
    </div>
);
};

export default CarDetails;
