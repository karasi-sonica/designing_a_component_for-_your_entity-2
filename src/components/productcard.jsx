// write product card here
// Importing the Button component
import React from 'react';
import Button from '../components/button';

const ProductCard = () => {
  // Static data for the product
  const productName = 'Celestial Koi Dream';
  const productPrice = '$1999';
  const productImage = 'https://cdn.pixabay.com/photo/2024/04/28/05/58/fish-8724841_1280.png'; // Placeholder image URL

  return (
    <div style={styles.cardContainer}>
      <img src={productImage} alt="Product" style={styles.productImage} />
      <h2 style={styles.productName}>{productName}</h2>
      <p style={styles.productPrice}>{productPrice}</p>
      <Button label="View Product" />
    </div>
  );
};

const styles = {
  cardContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '15px',
  },
  productPrice: {
    fontSize: '16px',
    color: '#333',
    margin: '10px 0',
  },
};

export default ProductCard;


