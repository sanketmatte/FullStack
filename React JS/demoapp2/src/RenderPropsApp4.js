import React from "react";
import ArticleList from "./ArticleList";

class RenderPropsApp4 extends React.Component {
  state = {
    articles: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const articles = await response.json();
      this.setState({ articles, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        <h1>Articles</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ArticleList articles={articles} />
        )}
      </div>
    );
  }
}

export default RenderPropsApp4;