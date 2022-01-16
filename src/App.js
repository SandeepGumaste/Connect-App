import React, { useState, useEffect } from "react";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm";
import Search from "./components/Search";
import Tabs from "./components/Tabs";

function App() {
  const getPeople = () => {
    let newPeople = localStorage.getItem("people");
    if (newPeople) {
      return JSON.parse(newPeople);
    } else {
      return [];
    }
  };
  const [people, setPeople] = useState(getPeople());
  const [add, setAdd] = useState(false);

  const [connection, setConnection] = useState(null);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return (
    <div className="sm:grid sm:pt-20 place-content-center">
      <div className=" flex flex-col sm:border sm:rounded-box shadow-lg sm:w-96 overflow-hidden">
        <h1 className="text-4xl w-full bg-primary text-gray-300 text-center pt-3 pb-3">
          Connect+
        </h1>
        <Tabs add={add} setAdd={setAdd} />
        {add && <AddPersonForm people={people} setPeople={setPeople} />}
        {!add && (
          <Search
            people={people}
            connection={connection}
            setConnection={setConnection}
            setPeople={setPeople}
          />
        )}
        {!add && (
          <div className="px-5 pb-5">
            <div className="collapse border rounded-box border-base-300 collapse-open text-gray-300">
              <div className="collapse-title text-xl font-medium">
                Degree of Separation
              </div>
              <div className="collapse-content">
                {connection !== null ? (
                  connection.length > 1 ? (
                    <p>{connection.join(" > ")}</p>
                  ) : (
                    <p>Not related</p>
                  )
                ) : (
                  <p>Once you search, your search result will appear here</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
