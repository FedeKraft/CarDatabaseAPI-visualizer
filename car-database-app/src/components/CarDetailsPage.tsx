import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CarDetailsPage.css';

const CarDetailsPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { car } = location.state || {};

    // Verificación para asegurarse de que el objeto 'car' existe
    if (!car) {
        // Redirigir al usuario a la página principal si 'car' es undefined
        navigate('/');
        return null;
    }
    const goHome = () => {
        navigate('/');
    };
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className="car-details-page">
            <h2>{car.make} {car.model} ({car.year})</h2>
            <img
                src={`https://source.unsplash.com/featured/?${car.make},${car.model}`}
                alt={`${car.make} ${car.model}`}
                className="car-image"
            />
            <ul>
                <li><strong>Class:</strong> {car.class}</li>
                <li><strong>Engine Type:</strong> {car.engine_type}</li>
                <li><strong>Cylinders:</strong> {car.cylinders}</li>
                <li><strong>Displacement:</strong> {car.displacement} L</li>
                <li><strong>Drive Type:</strong> {car.drive}</li>
                <li><strong>Fuel Type:</strong> {car.fuel_type}</li>
                <li><strong>Transmission:</strong> {car.transmission}</li>
                <li><strong>City MPG:</strong> {car.city_mpg}</li>
                <li><strong>Highway MPG:</strong> {car.highway_mpg}</li>
                <li><strong>Combined MPG:</strong> {car.combination_mpg}</li>
            </ul>
            <button onClick={goHome}>Ir a Home</button>
        </div>


    );

};

export default CarDetailsPage;
