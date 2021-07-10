

const moonPath =
"M43 79.019C43 121.899 83 153.674 83 153.674C37.1604 153.674 0 121.899 0 79.019C0 36.1391 37.1604 1.37805 83 1.37805C83 -4.59433 43 36.1391 43 79.019Z";

const sunPath =
"M156 78C156 121.078 121.078 156 78 156C34.9218 156 0 121.078 0 78C0 34.9218 34.9218 0 78 0C121.078 0 156 34.9218 156 78Z";

const $darkMode = document.querySelector("#darkMode");

let toggle = false;

 $darkMode.addEventListener('click',() => {
     const timeline = anime.timeline({
         duration: 750,
         ease: "liner"
     });
     timeline.add( {            //move1 Change "sunPath to moonPath"
         targets:".sun",
         d:[{value : toggle ? sunPath : moonPath}]
     })
     .add({                   //move2 Moving moon object by using rotate
         targets:"#darkMode",
         rotate: 320,
     }, 
     '-=350'
     )
     .add( {
         targets: "section",        //move3 Change the color of text & background
         backgroundColor: toggle ?  "rgb(235, 231, 231)" : "rgb(22, 22, 22)",
         color: toggle ? "rgb(22, 22, 22)": "rgb(255, 251, 255)"
     }, 
     '-= 700'
     );
     if(!toggle) {        // true = sunPath, false= moonPath
         toggle= true;
     }else {
         toggle= false;
     }
 })