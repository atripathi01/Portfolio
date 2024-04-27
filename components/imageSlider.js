import React from 'react';
import Blog from '../images/blos.jpeg';
import Consulting from '../images/consulting.jpeg';
import Dashboard from '../images/dashboard.jpeg';
import mobiledashboard from '../images/dashboardmobile.jpeg';
import dashboardRecentSection from '../images/dashboardRecentProgess.jpeg';
import desktop from '../images/desktop.jpeg';
import calender from '../images/calender.jpeg';
import course from '../images/courses.jpeg';
import mobilecourse from '../images/coursemobile.jpeg';
import login from '../images/login.jpeg';
import register from '../images/register.jpeg';
import mobilelogin from '../images/mobilelogin.jpeg';
import mobileBlog from '../images/mobileblog.jpeg';
import profilesetting from '../images/profileSetting.jpeg';
import mobileprofilesetting from '../images/settingmobile.jpeg';
import sidebarMobile from '../images/sidebarmobile.jpeg';
import sidebartrading from '../images/sidbarrtrading.jpeg';
import tradingPage from '../images/tradung.jpeg';
// import '../styles/globals.css';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import Image from 'next/image';

const Imagescroller = () => {
  const images = [
    {
      id: 1,
      imageUrl: Blog,
    },
    {
      id: 2,
      imageUrl: Consulting,
    },
    {
      id: 3,
      imageUrl: Dashboard,
    },
    {
      id: 4,
      imageUrl: desktop,
    },
    {
      id: 5,
      imageUrl: tradingPage,
    },
    {
      id: 6,
      imageUrl: login,
    },
    {
      id: 7,
      imageUrl: mobiledashboard,
    },
    {
      id: 8,
      imageUrl: profilesetting,
    },
    {
      id: 8,
      imageUrl: course,
    },
    {
      id: 3,
      imageUrl: Dashboard,
    },
    {
      id: 4,
      imageUrl: desktop,
    },
    {
      id: 5,
      imageUrl: tradingPage,
    },
  ];
  const imagess = [
    {
      id: 1,
      imageUrl: Blog,
    },
    {
      id: 2,
      imageUrl: Consulting,
    },
    {
      id: 3,
      imageUrl: Dashboard,
    },
    {
      id: 4,
      imageUrl: desktop,
    },
    {
      id: 5,
      imageUrl: tradingPage,
    },
    {
      id: 6,
      imageUrl: mobiledashboard,
    },
    {
      id: 7,
      imageUrl: mobilelogin,
    },
    {
      id: 8,
      imageUrl: mobileprofilesetting,
    },
    {
      id: 8,
      imageUrl: register,
    },
    {
      id: 3,
      imageUrl: dashboardRecentSection,
    },
    {
      id: 4,
      imageUrl: mobileprofilesetting,
    },
    {
      id: 5,
      imageUrl: login,
    },
  ];
  return (
    <>
      <ParallaxText baseVelocity={-3} images={images}></ParallaxText>
      <ParallaxText baseVelocity={3} images={imagess}></ParallaxText>
    </>
  );
};




function ParallaxText({ children, images, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  //@ts-ignore
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  //@ts-ignore
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
      moveBy *= -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className='parallax' style={{ backgroundColor: '#000', width:'100vw' }}>
      <motion.div className='scroller' style={{ x }}>
        {images?.map((images,index) => {
          return (
            //eslint-disable-next-line 
            <img
              key={index}
              src={images?.imageUrl}
              className='max-w-sm w-auto h-auto max-h-52 p-3'
            />
          );
        })}
      </motion.div>
    </div>
  );
}



export default Imagescroller;
