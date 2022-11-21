import React from "react";
import Avatar from "./Avatar";


function card(props) {
  return (
    <>
      <div className="cards">
        <div className="contact">

          <div className="Image">
            <div className='heading'>
              <h1>{props.name}</h1>
            </div>
            <Avatar img={props.image} />
          </div>

          <div className="details">

            <div className='info'>
              <p>{props.phone}</p>
              <p>{props.email}</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
;

export default card;