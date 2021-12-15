export default class Examples {
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

// const nameOf = (f) => f.toString().replace(/[ |\(\)=>]/g, "");

// const assets = {
//   header: "Tartl Barb presents",
//   subheader: "Kevin Jevin Kevin: COPBLOP",
//   imageSrcs: [
//     "https://i.redd.it/45q6b52yke341.jpg",
//     "https://i.kym-cdn.com/photos/images/newsfeed/000/951/040/34b.jpg",
//     "https://i.pinimg.com/474x/9e/b4/21/9eb421bab753d13a7cd15cd73bced5ee--paul-blart-mall-cop-meme-meme.jpg"
//   ]
// };

// const ex = new Examples(assets);
// ex.arrayDestructuring();
