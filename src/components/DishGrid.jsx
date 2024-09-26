import './DishGrid.css';

const dishes = [
  {
    name: 'Milanesa Napolitana',
    description: 'Un platillo bien porteño',
    image: 'dish1.jpg',
  },
  {
    name: 'Tinga de Pollo',
    description: 'Autentica receta mexicana',
    image: 'dish2.jpg',
  },
  {
    name: 'Ensalada Nizarda',
    description: 'Una opción muy saludable',
    image: 'dish3.jpg',
  },
  {
    name: 'Aguachile de gambas',
    description: 'Una manera distinta de comer gambas',
    image: 'dish4.jpg',
  },
  {
    name: 'Huevos Benedictinos',
    description: 'Infaltables para el brunch',
    image: 'dish5.jpg',
  },
  {
    name: 'Nuggets de pollo',
    description: 'Los clásicos infaltables',
    image: 'dish6.jpg',
  },
  {
    name: 'Albóndigas en salsa',
    description: 'Con su clásico toque italiano',
    image: 'dish7.jpg',
  },
  {
    name: 'Pavo rostizado',
    description: 'Te sentirás como en navidad',
    image: 'dish8.jpg',
  },
  {
    name: 'Sopa castellana',
    description: 'Una deliciosa sopa con ajo',
    image: 'dish9.jpg',
  },
];

function DishGrid() {
  return (
    <div className="dish-grid-container">
      <h2 className="dish-title">Nuestros Platillos</h2>
      <div className="dish-grid">
        {dishes.map((dish) => (
          <div key={dish.name} className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishGrid;
