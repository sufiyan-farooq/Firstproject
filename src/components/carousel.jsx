import { Carousel } from 'antd';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'




const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel style={{height:'100vh'}} afterChange={onChange}>
      <div>
        <h3 >
        <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt=""  style={{height:'100vh' , width:'100%', objectFit:'cover'}} />
        </h3>
      </div>
      <div>
        <h3 >
          <img src={banner1} alt=""  style={{height:'100vh' , width:'100%',objectFit:'cover'}} />
        </h3>
      </div>
      <div>
        <h3 >
          <img src={banner2} alt=""  style={{height:'100vh' , width:'100%',objectFit:'cover'}} />
        </h3>
      </div>
      
    </Carousel>
  );
};
export default App;