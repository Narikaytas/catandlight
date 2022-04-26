 let On = document.getElementById('On');
 let Off = document.getElementById('Off');
//  let bulb = document.getElementById('bulb');
//  let cat = document.getElementById('cat');
 

 function switchOff(){
      document.getElementById('bulb').src ="images/bulb-go-off-img.png";
      document.getElementById('cat').src ="images/cat-eyes-img.png";
 }

 function switchOn(){
    document.getElementById('bulb').src ="images/bulb-go-on-img.png";
    document.getElementById('cat').src ="images/cat-img.png";
}