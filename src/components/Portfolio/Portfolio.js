import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioCategory from "./PortfolioCategory";
import { PortfolioProject1, PortfolioProject2, PortfolioProject3 } from './PortfolioData';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

// Swiper 모듈 설정
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Project1');
  const [categoryData, setCategoryData] = useState(PortfolioProject1);

  const list = [
    { id: 'Project1', title: 'Project1' },
    { id: 'Project2', title: 'Project2' },
    { id: 'Project3', title: 'Project3' },
  ];

  useEffect(() => {
    switch (activeCategory) {
      case "Project2":
        setCategoryData(PortfolioProject2);
        break;
      case "Project3":
        setCategoryData(PortfolioProject3);
        break;
      default:
        setCategoryData(PortfolioProject1);
    }
  }, [activeCategory]);

  return (
    <div id="portfolio" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Portfolio</span></h1>
        </div>
        <div className="portfolio-category">
          <ul>
            {list.map((item) => (
              <PortfolioCategory
                title={item.title}
                active={activeCategory === item.id}
                setActiveCategory={setActiveCategory}
                id={item.id}
                key={item.id}
              />
            ))}
          </ul>
        </div>
        <div className="portfolio-items">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >

            {categoryData.map((project, index) => (
              <SwiperSlide key={index}>
                <h1 style={{ textAlign: "center", color: "#ffffff" }}>{project.title}</h1>
                <h4 style={{ textAlign: "center", color: "var(--primary)" }}>{project.sub_title}</h4>
                <div className="portfolio-item" style={{ display: "flex", alignItems: "center" }}>
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    style={{ width: "600px", height: "470px" }}
                  >
                    {project.img.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img src={img} alt={`${project.title}_${imgIndex}`}
                             style={{ height: '500px', width: '100%' }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div style={{ flex: "1 1 50%", paddingLeft: "30px" }}>
                    {project.content && <div><span style={{ fontSize: "16px", color:"#ffffff" }}>{project.content}</span></div>}
                    {project.functions && (
                      <div>
                        {project.functions.map((func, idx) => (
                          <div key={idx} style={{ fontSize: "16px" }}>{func}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
