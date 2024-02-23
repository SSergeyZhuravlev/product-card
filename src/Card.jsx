import { Title } from "./Title";
import { Code } from "./Code";
import { CardImage } from "./CardImage";
import { Price } from "./Price";
import { Counter } from "./Counter";
import { Delivery } from "./Delivery";
import { Popularity } from "./Popularity";
import { Tabs } from "./Tabs";

export const Card = ( { 
  name, 
  code, 
  price,
  oldPrice,
  delivery,
  src,
  comments,
  initValue,
  tabs,
} ) => {
  return (
    <section>
      <Title title={name} />
      <Code code={code} />
      <div>
        <CardImage src={src} alt={name} />
        <div>
          <Price price={price} oldPrice={oldPrice} initValue={initValue} />
          
          <Delivery delivery={delivery} />
          <Popularity comments={comments} />
        </div>
      </div>
      <Tabs tabs={tabs} />
    </section>
  )
};
