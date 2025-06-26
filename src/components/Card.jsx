import React from "react";

const Card = (props) => {
  const Delete = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Restaurant Delete successfully!!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          <button
            onClick={() => Delete(props.id)}
            class="btn btn-soft btn-error"
          >
            Delete
          </button>
          <a href={"/update/" + props.id} class="btn btn-outline btn-warning">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
