// src/Gallery.js
import './Gallery.css'; 
import art from './images/seth-art-one.png'; 
import art2 from './images/seth-art-two.png';
import art3 from './images/seth-art-three.png';
import art4 from './images/seth-art-four.png';
import art5 from './images/seth-art-five.png';
import art6 from './images/seth-art-six.png';
function Gallery() {

  const artworks = [
    { id: 1, title: 'Ghoulz in the dark', imageUrl: art }, 
    { id: 2, title: 'Ghostz playing tag', imageUrl: art2 },
    { id: 3, title: 'Kittiez plotting', imageUrl: art3 },
    { id: 4, title: 'I got you!', imageUrl: art4 },
    { id: 5, title: 'Mondays got me like', imageUrl: art5 },
    { id: 6, title: 'Girlz & Girlz & Girlz', imageUrl: art6 },
  ];

  return (
    <div className="gallery-grid">
      {artworks.map((art) => (
        <div key={art.id} className="gallery-item">
          <img src={art.imageUrl} alt={art.title} className="gallery-image" />
          <p className="gallery-title">{art.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;