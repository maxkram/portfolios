import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";
// import Header from "../components/shared/Header";
import axios from "axios";

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      userData = response.data;
    } catch (err) {
      console.error(err);
    }

    return { initialData: [1, 2, 3, 4], userData };
  }
  constructor(props) {
    // debugger;
    super(props);
    // debugger;
    this.state = {
      title: "YeahI'mIndexPage"
    };
    this.updateTitle = this.updateTitle.bind(this);
    console.log("yohoho yeah it's constructor");
  }
  componentDidMount() {
    console.log("yohoho yeah it's componentDidMount");
  }
  componentDidUpdate() {
    console.log("yohoho yeah it's componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("yohoho yeah it's componentWillUnmount");
  }
  updateTitle() {
    this.setState({ title: "yohohoYeahI'mUpdatedIndexPage" });
    // console.log("yo yeah!");
  }
  render() {
    const { title } = this.state;
    // const  = this.props.initialData;
    const { userData, initialData } = this.props;
    return (
      <BaseLayout>
        <h1>Home</h1>
        <h2>{title}</h2>
        <h2>{userData.title}</h2>
        <button onClick={this.updateTitle}>Change the title</button>
      </BaseLayout>
    );
  }
}

export default Index;

// <Header title={"im header component"}>
// <h1>Im a header</h1>
// </Header>
