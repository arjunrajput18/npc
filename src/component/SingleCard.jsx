import React from "react";
import { ContextState } from "../context/Context";
import { NavLink } from "react-router-dom";

export const SingleCard = ({ data, noBtn }) => {
  const { favHandler, favData } = ContextState();
  const { id, title, author, image, price } = data;
  return (
    <div>
      <li>
        <img src={image} alt="img" width={200} height={200} />
        <p>{title}</p>
        <p>{author}</p>
        <p>price :{price}</p>
        {!noBtn && (
          <>
            {favData.some((item) => item.id === id) ? (
              <button>
                <NavLink to="/favorite">Go to Fav</NavLink>
              </button>
            ) : (
              <button onClick={() => favHandler(data)}>Add to Fav</button>
            )}{" "}
          </>
        )}
      </li>
    </div>
  );
};
