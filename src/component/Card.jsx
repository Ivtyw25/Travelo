import React from 'react';

const Card = ({ src, alt, title, text }) => {
  return (
    <div className="card bg-gray-800 text-white p-4 shadow-lg rounded-lg w-36 flex-shrink-0 m-8">
      <img src={src} alt={alt} className="w-full h-36 object-cover rounded-t-lg" />
      <h3 className="mt-3 text-center">{title}</h3>
      <p className="mt-1 text-center">{text}</p>
    </div>
  );
};

export default Card;
