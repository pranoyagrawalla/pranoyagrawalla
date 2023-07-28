import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Homepage.module.css'
import "./Carousel.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import KingBedIcon from '@mui/icons-material/KingBed';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ChairIcon from '@mui/icons-material/Chair';
import KitchenIcon from '@mui/icons-material/Kitchen';

import img1 from "../../Assets/carouselImage/bangalore.gif";
import img2 from "../../Assets/carouselImage/fitness.jpg";
import img3 from "../../Assets/carouselImage/ac.jpg";
import img4 from "../../Assets/carouselImage/paytm.jpg";

// icons
import covid_icon from "../../Assets/carouselImage/protection.png";
import { Link } from "react-router-dom";
import ProductCarousel from "./ProductCarousel";

import MoreData from "./MoreRent";
import Subscriber from "./Subscriber";
import { CityContext } from "../../Context/CityContext";
const iconStyles = {
  fontSize: '20px',
  color: 'black',
  marginBottom: '8px',
};
const category_arr = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-packages"
        y="806"
      >
        <g fill="none" fillRule="evenodd" stroke="#434A54" strokeWidth=".4">
       
        <KingBedIcon style={iconStyles} />
       
        </g>
      </svg>
    ),
    name: "Packages",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-furniture"
        y="742"
      >
        <g fill="none" fillRule="evenodd">
        
        <ChairIcon style={iconStyles} />
       
        </g>
      </svg>
    ),
    name: "Furniture",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-appliances"
        y="550"
      >
        <g fill="none" fillRule="evenodd">
         
        <KitchenIcon style={iconStyles} />
        </g>
      </svg>
    ),
    name: "Appliances",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-electronics"
        y="614"
      >
        <g fill="none" fillRule="evenodd" stroke="#434A54" strokeWidth=".4">
        
        <PhoneAndroidIcon style={iconStyles} />
       
        </g>
      </svg>
    ),
    name: "Electronics",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        id="new-fitness"
        y="678"
      >
        <g
          fill="none"
          fillRule="evenodd"
        
        >
         
        <FitnessCenterIcon style={iconStyles} />
       
        </g>
      </svg>
    ),
    name: "Fitness",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="wfh-essentials"
        y="1145"
      >
        <g fill="none" fillRule="evenodd">
         
         
        <ComputerIcon style={iconStyles} />
       
        </g>
      </svg>
    ),
    name: "WFH Essentials",
  },
];

const HomePage = () => {
  const { city } = useContext(CityContext);
  const slide = [img1, img2, img3, img4];

  return (
    <div>
      <div className={styles.outer_slider}>
        <div className={styles.img_slider}>
          <Carousel autoPlay infiniteLoop>
            {slide.map((item, i) => (
              <img key={i} src={item} alt="img_slide" />
            ))}
          </Carousel>
          <div className={styles.covid_19_saftey}>
            <span>
              <img src={covid_icon} alt="covid" />
            </span>
            <span className={styles.covid_sen}>
              Safety precautions during COVID-19. We’re taking additional steps
              and precautionary measures to protect our community from COVID-19.
            </span>
            <Link>
              <span className={styles.knowmore}>
                Know more <IoIosArrowDroprightCircle />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.allCategoty}>
        {category_arr.map(({ id, icon, name }) => (
          <div
            title={
              name === "Furniture"
              ? "Click to Check the Furniture Product"
              : name === "Appliances"
              ? "Click to Check the Appliances Product"
              : name === "Electronics"
              ? "Click to Check the Electronics Appliances"
              : name === "WFH Essentials"
              ? "Click to Check the WFH Essentials"
              : name === "Fitness"
              ? "Click to Check the Fitness"
              : name === "Packages"
              ? "Click to Check the Packages"
              : "No Product, we are scaling our inventory"
            }
            key={id}
          >
             <Link
        to={`/${city}/${name}`}
        key={id}
        className={
          name === "Furniture"
            ? styles.__category__
            : name === "Appliances"
            ? styles.__category__ 
            : name === "Electronics"
            ? styles.__category__ 
            : name === "WFH Essentials"
            ? styles.__category__ 
            : name === "Fitness"
            ? styles.__category__ 
            : name === "Packages"
            ? styles.__category__ 
            : styles.eachCategory
        }
      >
              
              
              <div>{icon}</div>
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </div>
      
      {/* productCarousel  */}
      <div className={styles.fullProduct_section}>
        <div className={styles.productTitle__des}>
          <p className={styles.title__des}>
            You'll love to <span>take these home</span>
          </p>
          <div></div>
        </div>
        <div className={styles.product_Carousel}>
          <ProductCarousel />
        </div>
      </div>

      {/* there's more thins  */}
      <div className={styles.__moreThingsRent__}>
        <p className={styles.title__des}>
          There's more <span>to renting</span>
        </p>
        <div></div>
        <div className={styles.__more_rent__}>
          {MoreData?.map((item) => (
            <div key={item.id} className={styles.each__more__rent}>
              {item.icons}
              <p>{item.title}</p>
              <p>{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="" className={styles.__knowMore__}>
          KNOW MORE
        </Link>
      </div>

      {/* happy subscriber  */}
      <div className={styles.__main__subs__}>
        <div className={styles.happy__subscriber}>
          <p className={styles.title__des}>
            Over 1.5 lac <span>happy subscribers</span>
          </p>
          <div></div>
          <p className={styles.__happy__dis}>
            Here's what they have to say about their Bugslayhub experience.
          </p>
          <div>
            <Subscriber />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
