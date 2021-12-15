import "./styles.css";
import "animate.css";
import _ from "lodash";
import { useState } from "react";

class Examples {
  constructor(assets) {
    this.assets = assets;
    console.log("Examples()", { assets: assets });
  }

  // https://www.linkedin.com/learning/learning-react-js-5/understanding-array-destructuring
  arrayDestructuring() {
    const [first, second, third] = this.assets.imageSrcs;

    console.log("arrayDestructuring()", {
      first: first,
      second: second,
      third: third
    });
  }
}

export default function App() {
  // https://www.linkedin.com/learning/learning-react-js-5/using-usestate
  const [status, setStatus] = useState("Open");

  const assets = {
    header: "Tartl Barb presents",
    subheader: "Kevin Jevin Kevin: COPBLOP",
    imageSrcs: [
      "https://i.redd.it/45q6b52yke341.jpg",
      "https://i.kym-cdn.com/photos/images/newsfeed/000/951/040/34b.jpg",
      "https://i.pinimg.com/474x/9e/b4/21/9eb421bab753d13a7cd15cd73bced5ee--paul-blart-mall-cop-meme-meme.jpg"
    ]
  };

  const ex = new Examples(assets);
  ex.arrayDestructuring();

  //const nameOf = (f) => f.toString().replace(/[ |\(\)=>]/g, "");

  function Headers({ assets }) {
    return (
      <>
        <h1 className="animate__animated animate__lightSpeedInLeft">
          {assets.header}
        </h1>
        <h2 className="animate__animated animate__lightSpeedInRight">
          Status: {status}
        </h2>
        <button onClick={() => setStatus("Closed")}>Closed</button>
      </>
    );
  }

  function ImageList({ imageSrcs }) {
    const srcList = _.shuffle(imageSrcs);

    return (
      <section className="image-list">
        {srcList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="animate__animated animate__rollIn"
          />
        ))}
      </section>
    );
  }

  function Hello(props) {
    const data = props.assets;

    return (
      <div className="App">
        <Headers assets={data} />
        <ImageList imageSrcs={data.imageSrcs} />
      </div>
    );
  }

  return <Hello assets={assets} />;
}
