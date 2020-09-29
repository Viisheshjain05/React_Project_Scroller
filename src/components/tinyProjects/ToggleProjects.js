import React, { Component, lazy, Suspense } from "react";
import TextLengthChecker from "./project-textLengthChecker/TextLengthChecker";
// import UserInputOutput from "./project-userInputoutput/UserInputOutput";
const UserInputOutput = lazy(() => import("./project-userInputoutput/UserInputOutput"));

class ToggleProject extends Component {
  state = {
    displaySolution: true,
    displayProjectID: "01",
    displayName: "project 1",
  };

  // Display Project
  displayProjectID = () => {
    // change the Value of Project to "01" where the number of project ends

    this.state.displayProjectID === "01"
      ? this.setState({ displayProjectID: "02", displayName: "project 2" })
      : this.state.displayProjectID === "02"
      ? this.setState({ displayProjectID: "03", displayName: "project 3" })
      : // : this.state.displayProjectID === "03"
        // ? this.setState({ displayProjectID: "04", displayName: "project 4" }) // total no. of project is currently 2 hence stoping it at 1
        // : this.state.displayProjectID === "04"
        // ? this.setState({ displayProjectID: "05" })
        // : this.state.displayProjectID === "05"
        // ? this.setState({ displayProjectID: "06" })
        // : this.state.displayProjectID === "06"
        // ? this.setState({ displayProjectID: "07" })
        // : this.state.displayProjectID === "01";
        this.setState({ displayProjectID: "01", displayName: "project 1" });
  };

  // Toggle Project Solution
  displayProjectSolution = () => {
    this.state.displaySolution === true ? this.setState({ displaySolution: false }) : this.setState({ displaySolution: true });
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.displayProjectID}>
          {this.state.displayName}
        </button>

        <button type="submit" onClick={this.displayProjectSolution}>
          {this.state.displaySolution === true ? "Hide Solution" : "Watch Solution"}
        </button>

        {/******************* Add Project To Toggle Start **********************/}

        {this.state.displayProjectID === "01" ? (
          <TextLengthChecker DisplaySolution={this.state.displaySolution} />
        ) : this.state.displayProjectID === "02" ? (
          <Suspense fallback={<div>"Loading..."</div>}>
            <UserInputOutput DisplaySolution={this.state.displaySolution} />
          </Suspense>
        ) : // ) : this.state.displayProjectID === "03" ? (
        // ADD YOUR PROJECT HERE

        // <Suspense fallback={<div>"Loading..."</div>}>
        //   <UserInputOutput DisplaySolution={this.state.displaySolution} />
        // </Suspense>
        null}

        {/********************* Add Project To Toggle END **********************/}
      </div>
    );
  }
}

export default ToggleProject;
