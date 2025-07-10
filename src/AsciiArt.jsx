import './AsciiArt.css';
import {useRef, useEffect, useState} from 'react';
import bea from '/headshot.jpg'
// Define ASCII characters by brightness levels
const asciiChars = "@#S%?*+;:,.";

function getAsciiChar(brightness) {
    const index = Math.floor((brightness / 255) * (asciiChars.length - 1));
    return asciiChars[index];
}

function drawImageToAscii(canvas, url, setState) {
  const img = new Image();
  img.src = url;

  const asciiArt = [];

  img.onload = function() {
      const ctx = canvas.getContext("2d");

      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Get image data
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      
      console.log(imageData);
      const data = imageData.data;

      for (let y = 0; y < img.height; y+=15) {
          for (let x = 0; x < img.width; x+= 10) {
              const offset = (Math.floor(y) * img.width + x) * 4;
              const r = data[offset];
              const g = data[offset + 1];
              const b = data[offset + 2];

              // Calculate brightness
              const brightness = (r + g + b) / 3;

              // Get ASCII character
              const asciiChar = getAsciiChar(brightness);

              const style = {
                color:  `rgb(${r},${g},${b})`
              };

              // Add colored ASCII character to the output
              asciiArt.push(<span key={offset} style={style}>${asciiChar}</span>);
          }
          asciiArt.push(<br key={y}></br>)
      }

      setState(asciiArt);
  };
}

function AsciiArt () {
  const canvasRef = useRef(null);
  const [artState, updateArt] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  
  useEffect(() => {
    if (initialLoad)
    {
      const canvas = canvasRef.current;
      drawImageToAscii(canvas, bea, updateArt);
      setInitialLoad(false);
    }

  }, [initialLoad])

  // Example usage: change the URL to your image

  const sty = {};
  if (artState.length > 0)
  {
    sty.display = "none"
  };
  
  return (
    <div className='ascii-art'>
      <canvas ref={canvasRef} style={{display: "none"}}></canvas>
      {artState}
    </div>
  )
}

export default AsciiArt