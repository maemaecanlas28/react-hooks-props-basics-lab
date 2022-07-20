import React from "react";


function Home({ name, city, color }) {
const h1Style = {
  color: color
}
  return (
    <div id="home">
      <h1 style={ h1Style }>
        { name } is a Web Developer from { city }
      </h1>
    </div>
  );
}

export default Home;
