import React from "react";
import { createRoot } from 'react-dom/client';
import { product, AccordionMenu } from "./mock";
import { Card } from "./Card";
import { Accordion } from "./Accordion";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const tabsContent = [
  product.description,
  product.comments
];

root.render(
    <>
      <Card 
        name={product.name}
        code={product.code}
        price={product.price}
        oldPrice={product.oldPrice}
        delivery={product.delivery}
        popularity={product.comments}
        images={product.images}
        description={product.description}
        comments={product.comments}
        tabs={tabsContent}
        initValue={1}
      />
      <div style={
        {
          padding: 100
        }
      }>
        <Accordion AccordionMenu={AccordionMenu} />
      </div>
    </>
)