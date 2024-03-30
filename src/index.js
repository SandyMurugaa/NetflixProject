import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
 import App from './App';
// import reportWebVitals from './reportWebVitals';
import Card from './Cards';
ReactDOM.render(
<>

<Card 
imgsrc="https://wallpapercave.com/dwp1x/wp4056398.png"
title="A Netflix Original Series"
sname="Dark"
link="https://www.netflix.com/in/title/80100172"

/>
<Card 
imgsrc="https://wallpapercave.com/dwp1x/wp7418539.jpg"
title="A Netflix Original Series"
sname="Extracurricular"
link="https://www.netflix.com/in/title/80990668"
/>
<Card 
imgsrc="https://images2.alphacoders.com/879/thumbbig-879599.webp"
title="A Netflix Original Series"
sname="Stranger Things"
link="https://www.netflix.com/in/title/80057281"
/>
</>,
  document.getElementById("root")
);

export default App;