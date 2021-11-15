import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    return (
        <div>
           <Container className="mt-3">
               <h2>Latest Products</h2>
           <Row>
                <Product/> 
                <Product/> 
                <Product/> 
                <Product/> 
                <Product/> 
                <Product/> 
                <Product/> 
            </Row>
           </Container>
        </div>
    );
};

export default Products;