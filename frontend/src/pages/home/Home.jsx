import React from 'react';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './Home.scss';

import { cards } from '../../data';
import CatCard from '../../components/catCard/CatCard';

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
