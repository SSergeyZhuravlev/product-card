import React from "react";
import { createRoot } from 'react-dom/client';
import { product } from "./mock";
import { Card } from "./Card";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const tabsContent = [
  product.description,
  product.comments
];

root.render(
    <Card 
      name={product.name}
      code={product.code}
      price={product.price}
      oldPrice={product.oldPrice}
      delivery={product.delivery}
      popularity={product.comments}
      src={product.src}
      description={product.description}
      comments={product.comments}
      tabs={tabsContent}
      initValue={1}
    />
)