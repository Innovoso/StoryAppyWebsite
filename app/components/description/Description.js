import React from 'react';
import DescriptionOverview from './DescriptionOverview';
import CustomizationOverview from './CustomizationOverview';
import Students from './Students';
import Teachers from './Teachers';
import Parents from './Parents';
import Parallax from 'react-parallax';

class Description extends React.Component{
  render(){
    return(
      <div>
        <Parallax bgImage="img/parallaxOne.png" strength={180}></Parallax>
        <div className="shadow">
          <DescriptionOverview />
          <CustomizationOverview />
        </div>
        <Parallax bgImage="img/parallaxTwo.png" strength={180}></Parallax>
        <div className="shadow">
        <Students />
        <Teachers />
        <Parents />
        </div>
        <Parallax bgImage="img/parallaxThree.png" strength={180}></Parallax>
      </div>
    )
  }
}

export default Description;
