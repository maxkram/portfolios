import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class SuperComponent extends React.Component {
  constructor() {
    super();
    this.someVariable = "justSomeVariable";
  }
  alertName(title) {
    alert(title);
  }
  render() {
    return (
      <BaseLayout>
        <h1>Blog</h1>
      </BaseLayout>
    );
  }
}

export default SuperComponent;
