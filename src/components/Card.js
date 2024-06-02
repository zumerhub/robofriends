import React from "react";

const Card = (props) => {
  const { name, email, id } = props;
  return (
    // <div className='bg-light-green mw5 dib br3 pa3 w-25 pa3 mr2 grow bw2 shodow-5'>
    //  <div className=' fl w-50 w-25-m w-20-l pa3 bg-light-green mw5 dib br3 pa3 w-25 mr2 grow shadow-5 pb3'>
    //  <div className='fl pa3 bg-light-green mw5 dib br3 pa3 w-25 grow shadow-5 pb3'>

    <div>
      <div className="robot-card">
        <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
