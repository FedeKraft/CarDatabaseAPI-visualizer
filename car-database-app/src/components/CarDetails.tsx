import React from 'react';
import '../styles/CarDetails.css';

interface CarDetailsProps {
    car: {
        make: string;
        model: string;
        year: number;
        transmission: string;
        cylinders: number;
        displacement: number;
        drive: string;
        fuel_type: string;
        class: string;
        city_mpg: number;
        highway_mpg: number;
        combination_mpg: number;
    };
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
    return (
        <div className="car-details">
            <h2>{car.make} {car.model} ({car.year})</h2>
            <ul>
                <li><strong>Class:</strong> {car.class}</li>
                <li><strong>Transmission:</strong> {car.transmission}</li>
                <li><strong>Cylinders:</strong> {car.cylinders}</li>
                <li><strong>Displacement:</strong> {car.displacement} L</li>
                <li><strong>Drive Type:</strong> {car.drive}</li>
                <li><strong>Fuel Type:</strong> {car.fuel_type}</li>
                <li><strong>City MPG:</strong> {car.city_mpg}</li>
                <li><strong>Highway MPG:</strong> {car.highway_mpg}</li>
                <li><strong>Combined MPG:</strong> {car.combination_mpg}</li>
            </ul>
        </div>
    );
};

export default CarDetails;
