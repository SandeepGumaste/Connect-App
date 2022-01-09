import React, { useState } from "react";

const WARNING = {
  ONE_EMPTY: 1,
  BOTH_EMPTY: 2,
  SAME: 3,
  OK: 4,
  INITIAL: 5,
};

const AddPersonForm = ({ people, setPeople }) => {
  const [firstPerson, setFirstPerson] = useState("");
  const [secondPerson, setSecondPerson] = useState("");
  const [relationship, setRelationship] = useState("friend");
  const [warn, setWarn] = useState(WARNING.INITIAL);

  const formCheck = () => {
    if (!firstPerson && !secondPerson) {
      setWarn(WARNING.BOTH_EMPTY);
      return false;
    } else if (
      !firstPerson ||
      !secondPerson ||
      firstPerson.length < 2 ||
      secondPerson.length < 2
    ) {
      setWarn(WARNING.ONE_EMPTY);
      return false;
    } else if (firstPerson.toLowerCase() === secondPerson.toLowerCase()) {
      setWarn(WARNING.SAME);
      return false;
    } else {
      setWarn(WARNING.OK);
      return true;
    }
  };

  const personCheck = (name) => {
    for (let i = 0; i < people.length; i++) {
      if (people[i].personName === name) {
        people[i].friend = [...people[i].friend, secondPerson];
        setFirstPerson("");
        setSecondPerson("");
        return true;
      }
    }
    return false;
  };

  const addConnection = (name) => {
    if (formCheck()) {
      if (!personCheck(name)) {
        const newPeople = [
          ...people,
          {
            personName: firstPerson,
            [relationship]: [secondPerson],
          },
        ];
        setPeople(newPeople);
        setFirstPerson("");
        setSecondPerson("");
      }
    }
  };
  return (
    <div className="flex flex-col p-5">
      {warn !== WARNING.OK && warn !== WARNING.INITIAL && (
        <p>
          {warn === WARNING.ONE_EMPTY
            ? "To add this data, please enter both the names"
            : warn === WARNING.BOTH_EMPTY
            ? "Please enter two names."
            : "Please enter two different names"}
        </p>
      )}
      <label className="label">
        <span className="label-text">Person 1</span>
      </label>
      <input
        type="text"
        placeholder="Enter a name"
        className="input input-bordered"
        value={firstPerson}
        onChange={(e) => setFirstPerson(e.target.value)}
      />
      <label className="label">
        <span className="label-text">Person 2</span>
      </label>
      <input
        type="text"
        placeholder="Enter a name"
        className="input input-bordered"
        value={secondPerson}
        onChange={(e) => setSecondPerson(e.target.value)}
      />
      <select
        className="select select-bordered mt-6"
        onChange={(e) => {
          setRelationship(e.target.value);
        }}
      >
        <option disabled="disabled" selected="selected">
          Choose relationship
        </option>
        <option value="friend">Friend</option>
      </select>
      <button
        className="btn btn-primary mt-6"
        onClick={() => addConnection(firstPerson)}
      >
        Add
      </button>
    </div>
  );
};

export default AddPersonForm;
