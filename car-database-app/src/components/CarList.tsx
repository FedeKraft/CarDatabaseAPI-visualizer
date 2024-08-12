import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCars } from '../api';
import '../styles/CarList.css';

const CarList: React.FC = () => {
    const [cars, setCars] = React.useState<any[]>([]);
    const [brand, setBrand] = React.useState('Toyota');
    const navigate = useNavigate();

    React.useEffect(() => {
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
                <option value="Chevrolet">Chevrolet</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Nissan">Nissan</option>
                {/* Agrega más marcas aquí según sea necesario */}
            </select>
            <div className="car-list">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className="car-card"
                        onClick={() => navigate(`/car-details/${index}`, { state: { car } })}
                    >
                        <h3>{car.make} {car.model} ({car.year})</h3>
                        <p><strong>Transmission:</strong> {car.transmission}</p>
                        <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarList;
