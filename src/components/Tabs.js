import React from "react";

const Tabs = ({ add, setAdd }) => {
  return (
    <div className="px-5 pt-5">
      <div className="tabs tabs-boxed flex justify-evenly">
        <p
          className={!add ? "tab w-6/12 tab-active" : "tab w-6/12"}
          onClick={() => setAdd(false)}
        >
          Search
        </p>
        <p
          className={add ? "tab w-6/12 tab-active" : "tab w-6/12"}
          onClick={() => setAdd(true)}
        >
          Add
        </p>
      </div>
    </div>
  );
};

export default Tabs;
