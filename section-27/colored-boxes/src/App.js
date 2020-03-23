import React, { Component } from 'react';
import './App.css';

import Box from './Box';

const NUM_BOXES = 32;

class App extends Component {
  constructor(props) {
    super(props);

    // old method that is not so efficient
    // const colors = new Array(NUM_BOXES);
    // for(let i=0; i<colors.length; i++) {
    //   colors[i] = { color: this.getRandomColor() };
    // }

    // .fill will put variables into the array so that we can call .map on it.
    // note that this.getRandomColor does not have closing braces because we dont want it to be called right now.
    // the second parameter this passed into map specifies what keyword this means. which is App
    const colors = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = { colors };

    setInterval(() => {
      // change colours here

      // find random box, change the colour
      const randBox = Math.floor(Math.random() * this.state.colors.length);
      const colors = this.state.colors.map( (box,i) => {
        if(i === randBox) {
          return this.getRandomColor();
        }
        return box;
      });

      this.setState({ colors });
    }, 300);
  }

  getRandomColor() {
    let randIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[randIndex];
  }

  render() {
    const boxes = this.state.colors.map( (color, i) => {
      return <Box key={i} color={color} />;
    });

    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
    "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"]
};

export default App;
