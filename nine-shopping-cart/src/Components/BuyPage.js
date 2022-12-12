import React, { useState, useEffect } from "react";
import Axios from "axios";

// import { random, commerce } from "faker";

import { Container, Col, Row } from "reactstrap";

const apiKey = "INSET_YOUR_KEY-HERE";

const url = "https://api.pexels.com/v1.search?query=laptop&per_page=6&&page=1";
// const localurl = "https://api.jsonserve.com/EahwOz";
const localurl = "https://api.jsonserve.com/1e0d-d";

const sampleProducts = [{}];

const BuyPage = ({ addInCart }) => {
   const [product, setProduct] = useState([]);

   //    const fetchPhotos = async () => {
   //       const response = await Axios.get(url, {
   //          header: {
   //             Authorization: apiKey,
   //          },
   //       });

   const fetchPhotos = async () => {
      const { data } = await Axios.get(localurl);

      const { photos } = data;

      const allProduct = photos.map((photo) => ({
         smallImage: photo.src.medium,
         tinyImage: photo.src.tiny,
         productName: "Vishal",
         productPrice: 199,
         id: 1,
      }));

      setProduct(allProduct);
   };

   useEffect(() => {
      fetchPhotos();
   }, []);

   return (
      <Container fluid>
         <h1 className="text-success text-center">Buy Page</h1>
         <Row>
            {product.map((product) => (
               <span key={product.id}>{product.productName}</span>
            ))}
         </Row>
      </Container>
   );
};

export default BuyPage;
