import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import './estilo.css';
import FiltroPropiedades from "./FiltroPropiedades";
import Button from 'react-bootstrap/Button';
import PropiedadUnitaria from './PropiedadUnitaria';

export default function PropiedadesPage() {

  const propiedades = [
    {
      inmueble: 1,
      titulo: 'Carri',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sed saepe ut voluptatum possimus maxime maiores, delectus odio exercitationem eligendi nisi cupiditate quo tempore quaerat dolore. Consectetur, iusto provident.',
      image: 'https://picsum.photos/320/220',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento',
    },
    {
      inmueble: 2,
      titulo: 'Gonza',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sed saepe ut voluptatum possimus maxime maiores, delectus odio exercitationem eligendi nisi cupiditate quo tempore quaerat dolore. Consectetur, iusto provident.',
      image: 'https://picsum.photos/320/220',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento'
    },
    {
      inmueble: 3,
      titulo: 'Matias',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum sed saepe ut voluptatum possimus maxime maiores, delectus odio exercitationem eligendi nisi cupiditate quo tempore quaerat dolore. Consectetur, iusto provident.',
      image: 'https://picsum.photos/320/220',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento'
    }, 
    {
      inmueble: 4,
      titulo: 'Matias',
      descripcion: 'Corrientes capital la ciduadasdsada',
      image: 'https://picsum.photos/320/220',
      precio: '$250.000',
      estado: 'En Venta',
      tipo: 'departamento'
    }
  ];

  return (
    <div>
      <div className="header">
        <FiltroPropiedades></FiltroPropiedades>
      </div>
      <div className="body">
        <div className="caja-tarjetas">

          { propiedades.map(propiedad => <Card 
            key={propiedad.inmueble} 
            titulo={propiedad.titulo} 
            descripcion={propiedad.descripcion} 
            imagen={propiedad.image}
            precio={propiedad.precio}
            estado={propiedad.estado}
            tipo= {propiedad.tipo}
          />) },
        </div>
      </div>
    </div>
  );
}