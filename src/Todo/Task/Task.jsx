import React, { useState } from "react";
import toast from "react-hot-toast";

const Task = ({ task }) => {
  const { name, description } = task;
  const [strikethrough, setStrikethrough] = useState(false);
  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://agile-stream-09474.herokuapp.com/taskDelete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Task Delete SuccessFull");
        });
    }
  };
  const handleSetStrikethrough = () => {
    setStrikethrough(!strikethrough);
    if (!strikethrough) {
      toast.success("Task Complete");
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2
          style={{
            textDecoration: strikethrough && "line-through",
            color: strikethrough ? "red" : "black",
          }}
          className="card-title"
        >
          {name}
        </h2>
        <p
          style={{
            textDecoration: strikethrough && "line-through",
            color: strikethrough ? "red" : "black",
          }}
        >
          {description}
        </p>
        <div className="card-actions justify-between mt-5">
          <button
            disabled={strikethrough}
            onClick={handleSetStrikethrough}
            className="btn btn-secondary"
          >
            Complete
          </button>
          <button
            onClick={() => handleDeleteService(task._id)}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
