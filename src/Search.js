import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <form className="Search">
      <div className="row">
        <div className="col-10">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
