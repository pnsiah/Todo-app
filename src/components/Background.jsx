import "./background.css";
import Card from "./Card";

const Background = () => {
  return (
    <Card className='bg-main'>
      <section className='img-banner'></section>
      <Card className='default'></Card>
    </Card>
  );
};

export default Background;
