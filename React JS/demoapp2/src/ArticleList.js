import React from "react";

class ArticleList extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ArticleList;