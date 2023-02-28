import React from 'react';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './Home.scss';

import { cards, projects } from '../../data';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality service at every price point. No hourly rate,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality service at every price point. No hourly rate,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality service at every price point. No hourly rate,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality service at every price point. No hourly rate,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designd for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talenet by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Exlore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
