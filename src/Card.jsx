import { Title } from "./Title";
import { Code } from "./Code";
import { CardImage } from "./CardImage";
import { Price } from "./Price";
import { Delivery } from "./Delivery";
import { Popularity } from "./Popularity";
import { Tabs } from "./Tabs";

export const Card = ( { 
  name, 
  code, 
  price,
  oldPrice,
  delivery,
  images,
  comments,
  initValue,
  tabs,
} ) => {
  return (
    <section>
      <Title title={name} />
      <Code code={code} />
      <div style={{width: 500}}>
        <CardImage images={images} />
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
