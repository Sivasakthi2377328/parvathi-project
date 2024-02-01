
import Shamiana from './images/Shamiana.jpeg'
import water from './images/water.jpeg'
import wedding from './images/wedding.jpeg'
import  './Home.css'
import './Product.css'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation,faPhoneSquareAlt,faEnvelope,faArrowRight,faSendBack,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import chair1 from './images/chair1.jpg'
import chair2 from './images/chair2.jpg'
import chair3 from './images/chair3.jpg'
import chair4 from './images/chair4.jpg'
import chair5 from './images/chair5.jpg'
import chair6 from './images/chair6.jpg'
import party1 from './images/party1.jpg'
import party2 from './images/party2.jpg'
import party3 from './images/party3.jpg'
import party4 from './images/party4.jpg'
import party5 from './images/party5.jpg'
import party6 from './images/party6.jpg'
const productarray=[chair1,chair2,chair3,chair4,chair5,chair6];
const productarray2=[party1,party2,party3,party4,party5,party6];
const chairrate=[400,300,300,400,300,300]
const partyrate=[400,300,300,400,300,300]
var i=0;

const Header=()=>{
 
    return(
        
       
       <div className='navibar'>
    <div ><h3 className='brand'>PARVATHI KALYANA STORE</h3></div>
    <div className='navibarmiddle'><Link style={{textDecoration:"none",color:"white"}} to={"/"}><label>HOME</label></Link>
    <Link style={{textDecoration:"none",color:"white"}} to={"/products"} ><label >PRODUCTS</label></Link>
  
    <Link style={{textDecoration:"none",color:"white"}} to={"/login"}><label>LOGIN</label></Link>
   < Link style={{textDecoration:"none",color:"white"}} to={"/signin"}><label>SIGNUP</label></Link>
 
    
    </div>
         </div> 
      
    )
}

const Hire=()=>{
  const [isbook,setisbook]=useState(false);
  const [selectitem,isselectitem]=useState([[]])
  const booknowdiv=()=>{
    setisbook(true)
  }
  return(
    
    <div  className='middle1'>
    <h3 className='wish'>YOUR PERFECT DAY, OUR PERFECT SUPPLIES!</h3>
  <br></br>
  <p>Selva Vinayagar Suppliers is one of the most leading 
 
suppliers of Shamiana Chairs, Tables, Catering Equipments,</p>
  <p>
   Stage Setting to offers the various ranges of products like Arabian Tents,
   </p>
   <p>Waterproof Tents, German Hanger Structures, Pagoda Tents, Exhibition Tents, Banquet Chairs, Banquet Tent rent for business conferences, tradeshows, Exhibitions</p>
   <br></br>
   <button className='book' onClick={booknowdiv}>BOOK NOW</button>
   <div className='bookNowdiv' style={{height: isbook? '500px':'',visibility: isbook? 'visible':'',backgroundColor:isbook ?'white':'',}}>
<FontAwesomeIcon icon={faWindowClose}  style={{marginLeft:'95%',backgroundColor:'white' ,width:'40px',height:'30px',color:'red',visibility:isbook?'visible':'',}}  onClick={()=>{setisbook(false)}} className='close'/>
   <br></br>
   <form>
  
   <br></br>
   <label style={{visibility: isbook? 'visible':'',}} className ='label1'>Enter the Full Name</label>
   <br></br>
   <br></br>
     <input type='text' className ='ilabel1'  placeholder='Enter the Full Name' style={{visibility: isbook? 'visible':'',}}></input>
     <br></br>
     
     <label style={{visibility: isbook? 'visible':'',}} className ='label1'>Enter the Mobile Number</label>
   <br></br>
   <br></br>
     <input type='text'  className ='ilabel1' placeholder='Enter the Mobile Number ' style={{visibility: isbook? 'visible':'',}}></input>
     <br></br>
     <label style={{visibility: isbook? 'visible':'',}} className ='label1'>Select the Product</label>
     <br></br>
     <br></br>
     <select className='selectproduct' style={{visibility: isbook? 'visible':'',}} >
      <option value={chair1}>Chair1</option>
      <option value={chair2}>Chair2</option>
      <option value={chair3}>Chair3</option>
      <option value={chair4}>Chair4</option>
     </select>
     <br></br>
     <label  className ='label1' style={{visibility: isbook? 'visible':'',}}>Enter the Mobile Number</label>
   <br></br>
   <br></br>
     <input type='text' placeholder='Enter Number Quantity'  className ='ilabel1' style={{visibility: isbook? 'visible':'',}}></input>
     <br></br>
     <label className ='label1' style={{visibility: isbook? 'visible':'',}}>One Item Price:200</label>
     <br></br>
     <br></br>
     <label  className ='label1'  style={{visibility: isbook? 'visible':'',}}>Total Cost:2000</label>
     <br></br>
     <br></br>
     <input type='date' className ='ilabel1' placeholder='Enter the Delivery  date' style={{visibility: isbook? 'visible':'',}}></input>
     <br></br>
     <button className='bookingbutton'>Booking</button>

</form>
   </div>
   <div className='ourproduts'>
   <br></br>
    <h4  className='op'>OUR PRODUTS</h4>
    <div className='pm'>
    <div><img src={Shamiana} alt='wait'></img>
    <br></br>
    <label className='p1'>Arrangement Items</label>
    <br></br>
    <button  className='discovermore'>DISCOVER MORE</button></div>
    <div><img src={water} alt='wait'></img><br></br>
    <label className='p1'>Chairs Items</label>
    <br></br>
    <button className='discovermore'>DISCOVER MORE</button></div>
    <div> <img src={wedding} alt='wait'></img><br></br>
    <label className='p1'>kitchen items</label>
    <br></br>
    <button className='discovermore'>DISCOVER MORE</button></div></div>
    
   </div>
   <div className='footer'>
  
    
    <div className='services'>
    <h4 className='services1'>OUR SERVICES</h4>
    <ul>
      <li className='listservices'>Chair Suppliers services</li>
      <li className='listservices'>Catering services</li>
      <li className='listservices'>Kichen Items Suppliers services</li>
      <li className='listservices'>light arrangement</li>
    </ul>
   </div>
    <div className='contact'>
      <h5 className='phone'>Phone</h5>
      <p className='phoneno'>+91-944 330 6135</p>
      

      <p className='phoneno'>

+91-984 202 1705</p>
<h5 className='location'>Location</h5>
<p>Erode Road,
Nasiyanur - 638 107</p>
    </div>
   
   
   

    </div>
   
   </div>
   

   
   
  )

}
//const ourproduct
const Footer=()=>{

}
const Home=()=>{
  return (
    <>
      <div className='main'>
      <Header/>
      <Hire/>
      </div>
      
    </>
  )
};









const Products=()=>{
  const [ch1,setchair1]=useState([chair1])
  const [ch2,setchair2]=useState([chair2])
  const [ch3,setchair3]=useState([chair3])
  const [p1,setp1]=useState([party1])
  const [p2,setp2]=useState([party2])
  const [p3,setp3]=useState([party3])
  const [isActive, setIsActive] = useState(false);
  const previous=(e)=>{
    setchair1([chair1])
    setchair2([chair2])
    setchair3([chair3])
    i-=3
  }
  const next=(e)=>{
    setIsActive(true)
    setchair1([chair4])
    setchair2([chair5])
    setchair3([chair6])
    i+=3
  }
  const [isActive1, setIsActive1] = useState(false);
  const previous1=(e)=>{
    setp1([party1])
    setp2([party2])
    setp3([party3])
    
  }
  const next1=(e)=>{
    setIsActive1(true)
    setp1([party4])
    setp2([party5])
    setp3([party6])

    
  }
  const [quantity, setMessage] = useState();
  const [quantity2, setMessage2] = useState();

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleChange2 = event => {
    setMessage2(event.target.value);

    console.log('value is:', event.target.value);
  };
  var total=quantity*chairrate[i]
  var total2=quantity2*partyrate[i]
 
  const [orderproduct, setorderproduct] = useState([[null]]);
  const [orderproduct2, setorderproduct2] = useState([[null]]);
  const [isAdd, setIsadd] = useState(false);
  const [isAdd2, setIsadd2] = useState(false);
  const giveorder1=()=>{
    if(total>0)
    {
      alert("Product is successfully ordered");
      setIsadd(false)
      
    }
  }

  const  adddisplayp1=()=>{
    setIsadd2(true)
  
    setorderproduct2([productarray2[i]])
    if(i>3)
    {
      i=3
    }
    if(i<3)
    {
      i=0
    }

  }
  const  adddisplayp2=()=>{
    setIsadd2(true)
  
    setorderproduct2([productarray2[i]])
    if(i>3)
    {
      i=3
    }
    if(i<3)
    {
      i=0
    }

  }
  const  adddisplayp3=()=>{
    setIsadd2(true)
  
    setorderproduct2([productarray2[i]])
    if(i>3)
    {
      i=3
    }
    if(i<3)
    {
      i=0
    }

  }
  
  const adddisplay1=()=>{
    setIsadd(true)
  
    setorderproduct([productarray[i]])
    if(i>3)
    {
      i=3
    }
    if(i<3)
    {
      i=0
    }
  }
  const adddisplay2=()=>{
    setIsadd(true)
   i+=1
    setorderproduct([productarray[i]])
    if(i>3)
    {
      i=3
    }
    if(i<3)
    {
      i=0
    }
  }
  const adddisplay3=()=>{
    setIsadd(true)
    i+=2
    setorderproduct([productarray[i]])
    if(i>3)
    {
      i=3
    }
    if(i<3)
    {
      i=0
    }
  }
  const cancel=()=>{
    setIsadd(false)
  }
  const cancel1=()=>{
    setIsadd2(false)
  }
 
  return(
    <div className='pro'>
    <Header/>
     
    
      <div className='chair0'>
      
    <h3>Plastic Chairs  Collections</h3>
      <div className='chair'>
      <div className='chair1'>
      
      <label className='pname'>Product Name</label>
        <img src={ch1} alt=''></img>
        <br></br>
      <label className='rate'>Rate:400Rs</label>
      <br></br>
      <button className='add' onClick={adddisplay1}>Add+</button>
      </div>
      <div className='chair2'>
      <label  className='pname'>Product Name</label>
      <img src={ch2} alt=''></img>
      <br></br>
      <label className='rate'>Rate:300Rs</label>
      <br></br>
      <button className='add' onClick={adddisplay2}>Add+</button>
      </div>
      <div className='chair3'>
      <label className='pname'>Product Name</label>
      <img src={ch3} alt=''></img>
      <br></br>
      <label className='rate'>Rate:300Rs</label>
      <br></br>
      <button className='add' onClick={adddisplay3}>Add+</button>
      </div>
      </div>
      <button className='next' onClick={next}>Next<FontAwesomeIcon icon={faArrowRight}  /> </button>
      <button className='next' onClick={previous} style={{ backgroundColor: isActive ? 'white' : '',
          color: isActive ? 'black' : '',}}>previous </button>

      </div>
      <div  className='adddis'style={{height: isAdd? '600px':'', visibility:isAdd? 'visible':'',backgroundColor:isAdd? 'rgb(200, 194, 194)':'',}}>
        <label  className='orderproductname'style={{visibility:isAdd? 'visible':'',}}>Product name</label>
        <br></br>
        <img  className='orderproduct' src={orderproduct} alt='' style={{visibility:isAdd? 'visible':'', width:isAdd?'300px':'',height:isAdd?'300px':'',}}></img>
        <br></br>
        <label style={{visibility:isAdd? 'visible':'',}} > Number Quantites : </label>
        
        <input  className='Qi' style={{visibility:isAdd? 'visible':'',}} name="message" onChange={handleChange} value={quantity} type='number'></input>
        <br></br>
        <label style={{visibility:isAdd? 'visible':'',}}>Total Cost: Rs.{total}</label>
        <br></br>
        <button  className='Qb'style={{visibility:isAdd? 'visible':'',backgroundColor:isAdd? 'yellow':'',}} onClick={()=>{alert("Product successfully is ordered")}}>Order</button>
        <br></br>
        <button  className='Qc'style={{visibility:isAdd? 'visible':'',backgroundColor:isAdd? 'white':'',}} onClick={cancel}>Cancel</button>
      </div>
      <div className='chair0'>
      <h3>Cooking Equipments Collections</h3>
      <div className='chair'>
      
      
     
      
      <div className='chair1'>
      <label className='pname'>Product Name</label>
        <img src={p1} alt=''></img>
        <br></br>
      <label className='rate'>Rate:400Rs</label>
      <br></br>
      <button className='add' onClick={adddisplayp1}>Add+</button>
      </div>
      <div className='chair2'>
      <label  className='pname'>Product Name</label>
      <img src={p2} alt=''></img>
      <br></br>
      <label className='rate'>Rate:300Rs</label>
      <br></br>
      <button className='add' onClick={adddisplayp2}>Add+</button>
      </div>
      <div className='chair3'>
      <label className='pname'>Product Name</label>
      <img src={p3} alt=''></img>
      <br></br>
      <label className='rate' >Rate:300Rs</label>
      <br></br>
      <button className='add' onClick={adddisplayp3}>Add+</button>
      </div>

      </div>

      <button className='next1' onClick={next1}> Next<FontAwesomeIcon icon={faArrowRight}  /> </button><button className='next1' onClick={previous1} style={{ backgroundColor: isActive1 ? 'white' : '',
          color: isActive1 ? 'black' : '',}}>previous </button>
      </div>
      <div  className='adddis2'style={{height: isAdd2? '600px':'', visibility:isAdd2? 'visible':'',backgroundColor:isAdd2? 'rgb(200, 194, 194)':'',}}>
        <label  className='orderproductname'style={{visibility:isAdd2? 'visible':'',}}>Product name</label>
        <br></br>
        <img  className='orderproduct' src={orderproduct2} alt='' style={{visibility:isAdd2? 'visible':'', width:isAdd2?'300px':'',height:isAdd2?'300px':'',}}></img>
        <br></br>
        <label style={{visibility:isAdd2? 'visible':'',}} > Number Quantites : </label>
        
        <input  className='Qi' style={{visibility:isAdd2? 'visible':'',}} name="message" onChange={handleChange2} value={quantity} type='number'></input>
        <br></br>
        <label style={{visibility:isAdd2? 'visible':'',}}>Total Cost: Rs.{total2}</label>
        <br></br>
        <button  className='Qb'style={{visibility:isAdd2? 'visible':'',backgroundColor:isAdd2? 'yellow':'',}} onClick={giveorder1}>Order</button>
        <button  className='Qc'style={{visibility:isAdd2? 'visible':'',backgroundColor:isAdd2? 'white':'',}} onClick={cancel1}>Cancel</button>
      </div>
     
      </div>
      

      

      

    
  )


}
export {Header,Hire,Footer,Home ,Products}