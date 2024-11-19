import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";

console.log(blogData);
function App() {
  const blogName = "Underreacted"
  const posts = [
    { id: 1, title: 'First Article', content: 'This is the content of the first article.' },
    { id: 2, title: 'Second Article', content: 'This is the content of the second article.' },
    { id: 3, title: 'Third Article', content: 'This is the content of the third article.' }
  ];

  return (
    <div className="App">
      <Header name= {blogName}/>
      <About image="https://example.com/logo.png" 
        about="This is a blog about technology and coding."
       />
      <ArticleList posts= {posts}/>
    </div>
  );

}


export default App;
