import React, { useState } from "react";
import {  Link } from "react-router-dom";

import TechSelector from "../components/TechSelector/TechSelector";
import ToggleReactConcepts from "../components/GettingReactConsepts/ToggleReactConcepts";
import SearchCountries from "../components/Search/CreatingMySearch";
import QuizApp from "../components/QuizApp/QuizApp";
import ToggleSmallProjects from "../components/Small_Projects/ToggleSmallProjects";
import MathFunction from "../components/Todo mathFunctions/MathFunctions.jsx";

// Todo Stoping File AS Not Working Properly Create Your Own Api And then Add To Project
// import WeatherApp from "../components/Weather_App/weatherApp";

// const initialState = { projectNumber: 0, TotalProjects: 5, content: <TechSelector /> };
const ToggleProject = () => {
  const [ProjectName, setProjectName] = useState("TechSelector");
  const [ComponentSelected, setComponentSelected] = useState(<TechSelector />);
  const [ToggleProjectNumber, setToggleProjectNumber] = useState(0);

  const handleSubmit = (el) => {
    console.log("  flie - ToggleComponentProjects ", el);
    const { type } = el;
    if (type === "decrement") {

      setComponentSelected(GetComponentData(ToggleProjectNumber - 1));
      setProjectName(GetComponentData(ToggleProjectNumber - 1).type.name);
      setToggleProjectNumber(ToggleProjectNumber - 1);
    }
    if (type === "increment") {
      setComponentSelected(GetComponentData(ToggleProjectNumber + 1));
      setProjectName(GetComponentData(ToggleProjectNumber + 1).type.name);
      setToggleProjectNumber(ToggleProjectNumber + 1);

    }
  };

  const GetComponentData = (props) => {
    // Add your Projects
    if (props === 0) return <TechSelector />;
    if (props === 1) return <SearchCountries />;
    if (props === 2) return <QuizApp />;
    if (props === 3) return <MathFunction />;
    if (props === 4) return <ToggleSmallProjects />;
    if (props === 5) return <ToggleReactConcepts />;
    if (props === 6) return null;
    // if (props === 1) return null;
    // if (props === 1) return null;
    // if (props === 1) return null;
    // if (props === 1) return null;
    // ! CoRRENT IT TO WORK ACCORDINGLY
    // if (props === 7) return <WeatherApp />;
  };

  console.log("ToggleProject ~ ProjectName", ProjectName)
  return (
    <>
      <button style={{ margin: "0 10px" }} onClick={() => handleSubmit({ type: "decrement" })}>
        <Link to={{ pathname: "/" + ProjectName }}>{ToggleProjectNumber === 0 ? "Last Project" : "prev Project"}</Link>
      </button>

      <button style={{ margin: "0 10px" }} onClick={() => handleSubmit({ type: "increment" })}>
        <Link to={{ pathname: "/" + ProjectName }}>next Project </Link>
      </button>

      {ComponentSelected}
    </>
  );
};

export default ToggleProject;

// ! LEGACY CODE
// Todo Stoping File AS Not Working Properly Create Your Own Api And then Add To Project
// import WeatherApp from "../components/Weather_App/weatherApp";

// const initialState = { projectNumber: 0, TotalProjects: 5, content: <TechSelector /> };
// const ToggleProject = () => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return { ...state, projectNumber: state.projectNumber + 1, content: GetData(state.projectNumber + 1) };

//       case "decrement":
//         let decProjectNumber;
//         if (state.projectNumber === 0) {
//           decProjectNumber = state.TotalProjects;
//         } else {
//           decProjectNumber = state.projectNumber - 1;
//         }
//         return { ...state, projectNumber: decProjectNumber, content: GetData(decProjectNumber) };
//       default:
//         return null;
//     }
//   };

//   const GetData = (props) => {
//     // Add your Projects
//     if (props === -1) return null;
//     if (props === 0) return initialState.content;
//     if (props === 1) return <SearchCountries />;
//     if (props === 2) return <QuizApp />;
//     if (props === 3) return <MathFunction />;
//     if (props === 4) return <ToggleSmallProjects />;
//     if (props === 5) return <ToggleReactConcepts />;
//     if (props === 6) return null;
//     // if (props === 1) return null;
//     // if (props === 1) return null;
//     // if (props === 1) return null;
//     // if (props === 1) return null;
//     // ! CoRRENT IT TO WORK ACCORDINGLY
//     // if (props === 7) return <WeatherApp />;
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   if (state.content === null) {
//     state.projectNumber = initialState.projectNumber;
//     state.content = initialState.content;
//   }

//   return (
//     <>
//       <button style={{ margin: "0 10px" }} onClick={() => dispatch({ type: "decrement" })}>
//         {" "}
//         {state.projectNumber === 0 ? "Last Project" : "prev Project"}
//       </button>
//       <button style={{ margin: "0 10px" }} onClick={() => dispatch({ type: "increment" })}>
//         {" "}
//         next Project{" "}
//       </button>
//       {state.content}
//     </>
//   );
// };

// export default ToggleProject;
