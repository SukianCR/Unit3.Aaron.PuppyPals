import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="alert alert-success">
      {featPupId ? (
        <div className="hotpink">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      ) : (
        <div className="hotpink">
          {" "}
          <p> Click on a puppy to see it's info</p>
        </div>
      )}
      <div className="allPuppies">
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
        >
            {puppy.name}
          </p>
        );
      })}
    </div></div>
  );
}

export default App;
