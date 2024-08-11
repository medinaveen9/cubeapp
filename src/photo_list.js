import React, { useEffect, useState } from "react";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("./data/images", false, /\.(png|jpe?g|svg)$/)
);

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);

  function shufflePhotos() {
    const shuffledPhotos = shuffleArray(images).slice(0, 9);
    setPhotos(shuffledPhotos);
  }

  useEffect(() => {
    shufflePhotos();
    const interval = setInterval(shufflePhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Random ${index}`} />
      ))}
    </div>
  );
}
