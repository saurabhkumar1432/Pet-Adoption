import React from 'react'
import {render} from "react-dom"
import Pet from "./Pet"



const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "havenense",
    }),
    React.createElement(Pet, {
      name: "pepper",
      animal: "bird",
      breed: "cockateil",
    }),
    React.createElement(Pet, {
      name: "doink",
      animal: "cat",
      breed: "mix",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
