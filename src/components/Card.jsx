import React from "react";

const Card = (props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.type}</p>
        <div className="card-actions justify-end">
          <button class="btn btn-soft btn-error">Delete</button>
          <button class="btn btn-soft btn-accent">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
