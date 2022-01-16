import React, { useState, useEffect } from "react";

function Node(value) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}
Node.prototype.addEdge = function (neighbor) {
  this.edges.push(neighbor);
  neighbor.edges.push(this);
};
function Graph() {
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}
Graph.prototype.addNode = function (n) {
  this.nodes.push(n);
  const person = n.value;
  this.graph[person] = n;
};
Graph.prototype.getNode = function (friend) {
  const n = this.graph[friend];
  return n;
};

Graph.prototype.setStart = function (name) {
  this.start = this.graph[name];
  return this.start;
};

Graph.prototype.setEnd = function (name) {
  this.end = this.graph[name];
  return this.end;
};

const Search = ({ people, setConnection }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [allNames, setAllNames] = useState([]);

  useEffect(() => {
    const graph = new Graph();
    const peopleData = [];
    for (let i = 0; i < people.length; i++) {
      const person = people[i].personName;
      peopleData.push(person);
      const friends = people[i].friend ? people[i].friend : [];
      const personNode = new Node(person);
      graph.addNode(personNode);
      for (let j = 0; j < friends.length; j++) {
        const friend = friends[j];
        peopleData.push(friend);
        let friendNode = graph.getNode(friend);
        if (friendNode === undefined) {
          friendNode = new Node(friend);
        }
        graph.addNode(friendNode);
        personNode.addEdge(friendNode);
      }
    }
    setAllNames([...new Set(peopleData)]);
  }, [people]);

  const handleSearch = (fn, sn) => {
    const graph = new Graph();
    const peopleData = [];
    for (let i = 0; i < people.length; i++) {
      const person = people[i].personName;
      const friends = people[i].friend;
      const personNode = new Node(person);
      graph.addNode(personNode);
      for (let j = 0; j < friends.length; j++) {
        const friend = friends[j];
        peopleData.push(friend);
        let friendNode = graph.getNode(friend);
        if (friendNode === undefined) {
          friendNode = new Node(friend);
        }
        graph.addNode(friendNode);
        personNode.addEdge(friendNode);
      }
    }
    const start = graph.setStart(fn);
    const end = graph.setEnd(sn);
    const queue = [];
    start.searched = true;
    queue.push(start);
    while (queue.length > 0) {
      const current = queue.shift();
      if (current === end) {
        break;
      }
      const edges = current.edges;
      for (let i = 0; i < edges.length; i++) {
        const neighbor = edges[i];
        if (!neighbor.searched) {
          neighbor.searched = true;
          neighbor.parent = current;
          queue.push(neighbor);
        }
      }
    }
    const path = [];
    path.push(end);
    let next = end.parent;
    while (next != null) {
      path.push(next);
      next = next.parent;
    }
    const newPath = path.map((res) => res.value).reverse();
    setConnection(newPath);
  };

  return (
    <div className="flex flex-col p-5">
      <select
        className="select select-bordered "
        onChange={(e) => setFirstName(e.target.value)}
      >
        <option disabled="disabled" selected="selected">
          Choose a name
        </option>
        {allNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <select
        className="select select-bordered mt-5"
        onChange={(e) => setSecondName(e.target.value)}
      >
        <option disabled="disabled" selected="selected">
          Choose a name
        </option>
        {allNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button
        className="btn btn-primary mt-6"
        onClick={() => handleSearch(firstName, secondName)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
