import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Create from './Authentication/Create';
import Home from './Home';
import Homepage from './MainPage/Homepage';
import Cart from './MainPage/Cart';
import Search from './MainPage/Search';
import Order from './MainPage/Order';
import Electronics from './MiniNav/Electronics';
import MensWear from './MiniNav/MensWear';
import LadiesWear from './MiniNav/LadiesWear';
import HomeAppliances from './MiniNav/HomeAppliances';
import HomeFurniture from './MiniNav/HomeFurniture';
import Gadgets from './MiniNav/Gadgets';
import DailyDeals from './MainPage/DailyDeals';
import CustomerService from './MiniNav/CustomerService';
import Account from './MiniNav/Account';
import Mobiles from './MiniNavSection/EleNav/Mobiles';
import Laptops from './MiniNavSection/EleNav/Laptops';
import Airpods from './MiniNavSection/EleNav/Airpods';
import Tvs from './MiniNavSection/EleNav/Tvs';
import Shirts from './MiniNavSection/MenNav/Shirts';
import Pants from './MiniNavSection/MenNav/Pants';
import Shoes from './MiniNavSection/MenNav/Shoes';
import Watches from './MiniNavSection/Gadgets/Watches';
import Sarees from './MiniNavSection/WomenNav/Sarees';
import Kurtha from './MiniNavSection/WomenNav/Kurtha';
import Slippers from './MiniNavSection/WomenNav/Slippers';
import Sports from './MiniNav/Sports';
import AirConditioners from './MiniNavSection/HomeAppliances/AirConditioners';
import Microwaves from './MiniNavSection/HomeAppliances/Microwaves';
import Refrigerators from './MiniNavSection/HomeAppliances/Refrigerators';
import ST from './MiniNavSection/HomeAppliances/ST';
import WahingMachines from './MiniNavSection/HomeAppliances/WahingMachines';
import BeddingMattresses from './MiniNavSection/HomeFurniture/BeddingMattresses';
import OutDoorUmbrellas from './MiniNavSection/HomeFurniture/OutDoorUmbrellas';
import SofasCouches from './MiniNavSection/HomeFurniture/SofasCouches';
import WardeobesClosets from './MiniNavSection/HomeFurniture/WardeobesClosets';
import Speakers from './MiniNavSection/Gadgets/Speakers';
import CricketBats from './MiniNavSection/Sports/CricketBats';
import Jersey from './MiniNavSection/Sports/Jersey';
import SportShoes from './MiniNavSection/Sports/SportShoes';
import MobileSingle from './ComponentSinglePage/MobileSingle';
import ScrollTop from './ScrollTop';
import OnlinePayment from './PaymentComponents/OnlinePayment';
import CashPayment from './PaymentComponents/CashPayment';
import Address from './Carts&Orders/Address';
import LaptopsSingle from './ComponentSinglePage/LaptopsSingle';
import AirpodsSingle from './ComponentSinglePage/AirpodsSingle';
import ThankYou from './Carts&Orders/ThankYou';
import TVsSingle from './ComponentSinglePage/TVsSingle';
import ShirtsSingle from './ComponentSinglePage/ShirtsSingle';
import PantsSingle from './ComponentSinglePage/PantsSingle';
import ShoesSingle from './ComponentSinglePage/ShoesSingle';
import SareeSingle from './ComponentSinglePage/SareeSingle';
import KurthaSingle from './ComponentSinglePage/KurthaSingle';

const App = () => {

  const Logined = localStorage.getItem("Login") === "true";

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route
          path='/' element={Logined ? <Navigate to="/home" /> : <Login />}
        />
        <Route path='/create-account' element={<Create />} />
        <Route
          path='/home' element={Logined ? <Home /> : <Navigate to="/" />}
        >
          <Route index element={<Homepage />} />
          <Route path='/home/search' element={<Search />} />
          <Route path='/home/cart' element={<Cart />} />
          <Route path='/home/order' element={<Order />} />
            <Route path='/home/electronics' element={<Electronics />}>
              <Route index element={<Mobiles />} />
              <Route path='mobiles' element={<Mobiles />} />
              <Route path='laptops' element={<Laptops />} />
              <Route path='airpods' element={<Airpods />} />    
              <Route path='tvs' element={<Tvs />} />
              <Route path="mobiles-view/:name" element={<MobileSingle />} />
              <Route path="laptops-view/:name" element={<LaptopsSingle />} />
              <Route path="airpods-view/:name" element={<AirpodsSingle />} />
              <Route path="tvs-view/:name" element={<TVsSingle />} />
            </Route>
            <Route path='/home/menswear' element={<MensWear />}>
              <Route index element={<Shirts />} />
              <Route path='shirts' element={<Shirts />} />
              <Route path='pants' element={<Pants />} />
              <Route path='shoes' element={<Shoes />} />
              <Route path='shirts-view/:name' element={<ShirtsSingle />} />
              <Route path='pants-view/:name' element={<PantsSingle />} />
              <Route path='shoes-view/:name' element={<ShoesSingle />} />
            </Route>
            <Route path='/home/ladieswear' element={<LadiesWear />} >
              <Route index element={<Sarees />} />
              <Route path='sarees' element={<Sarees />} />
              <Route path='kurthas' element={<Kurtha />} />
              <Route path='slippers' element={<Slippers />} />
              <Route path='sarees-view/:name' element={<SareeSingle />} />
              <Route path='kurthas-view/:name' element={<KurthaSingle />} />
            </Route>
            <Route path='/home/homeappliances' element={<HomeAppliances />}>
              <Route index element={<AirConditioners />} />
              <Route path='airconditioners' element={<AirConditioners />} />
              <Route path='microwave' element={<Microwaves />} />
              <Route path='refrigerators' element={<Refrigerators />} />
              <Route path='st' element={<ST />} />
              <Route path='washingmachines' element={<WahingMachines />} /> 
            </Route>
            <Route path='/home/home-furniture' element={<HomeFurniture />} >
              <Route index element={<BeddingMattresses />} />
              <Route path="beddingMattresses" element={<BeddingMattresses />} />
              <Route path="outdoorUmbrellas" element={<OutDoorUmbrellas />} />
              <Route path="sofasCouches" element={<SofasCouches />} />
              <Route path='wardeobesClosets' element={<WardeobesClosets />} /> 
            </Route>
            <Route path='/home/gadgets' element={<Gadgets />} >
              <Route index element={<Speakers />} />
              <Route path='speakers' element={<Speakers />} />
              <Route path='watches' element={<Watches />} />
            </Route>
            <Route path='/home/sports' element={<Sports />} >
              <Route index element={<CricketBats />} />
              <Route path='cricketbats' element={<CricketBats />} />
              <Route path='jersey' element={<Jersey />} />
              <Route path='sportshoes' element={<SportShoes />} />
            </Route>
            <Route path='/home/daily-deals' element={<DailyDeals />} />
            <Route path='/home/customer-service' element={<CustomerService />} />
            <Route path='/home/account' element={<Account />} />
            <Route path='/home/online-payment' element={<OnlinePayment />} />
            <Route path='/home/cash-payment' element={<CashPayment />} />
            <Route path='/home/address' element={<Address />} />
            <Route path='/home/thank-you' element={<ThankYou />} />
          </Route>
        </Routes>
    </>
  )

}

export default App;