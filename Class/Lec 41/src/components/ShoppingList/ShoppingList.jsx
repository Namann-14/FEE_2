import React from "react";
import Product from "../Products/Product";

const ShoppingList = () => {
  const products = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww",
      name: "iPhone 16",
      price: 160000,
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1557825835-70d97c4aa567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
      name: "iPad",
      price: 16000,
    },
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8fDB8fHww",
      name: "Sony Headphone",
      price: 1600,
    },
  ];

  return (
    <section>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          img={product.imgUrl}
        />
      ))}
    </section>
  );
};

export default ShoppingList;
