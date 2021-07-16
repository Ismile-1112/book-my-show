import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage = () => {
    return ( 
      <>
      <div className="container nx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
        <EntertainmentCardSlider />
      </div>
      </>
    );
};

export default HomePage;