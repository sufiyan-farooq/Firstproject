import { Carousel } from 'antd';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'




const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel  au  style={{height:'100vh'}} afterChange={onChange}>
      <div>
        
        <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt=""  style={{height:'100vh' , width:'100%', objectFit:'cover'}} />
       
      </div>
      <div>
        
          <img src={banner1} alt=""  style={{height:'100vh' , width:'100%',objectFit:'cover'}} />
       
      </div>
      <div>
        
          <img src={banner2} alt=""  style={{height:'100vh' , width:'100%',objectFit:'cover'}} />
       
      </div>
      
    </Carousel>
  );
};
export default App;