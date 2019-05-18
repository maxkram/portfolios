import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";
// import Header from "../components/shared/Header";

class Index extends SuperComponent {
  constructor() {
    // debugger;
    super();
    // debugger;
    this.state = {
      title: "FuckYeahI'mIndexPage"
    };
    console.log("fuck yeah it's constructor");
  }
  componentDidMount() {
    console.log("fuck yeah it's componentDidMount");
  }
  componentDidUpdate() {
    console.log("fuck yeah it's componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("fuck yeah it's componentWillUnmount");
  }
  updateTitle() {
    this.setState({ title: "FuckYeahI'mUpdatedIndexPage" });
  }
  render() {
    console.log("fuck yeah it's render");
    return (
      <BaseLayout>
        <h1>Home</h1>
        <h2>{this.state.title}</h2>
        <button onClick={() => this.updateTitle()}>Change the title</button>
      </BaseLayout>
    );
  }
}

export default Index;

// <Header title={"im header component"}>
// <h1>Im a header</h1>
// </Header>
