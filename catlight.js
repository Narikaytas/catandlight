 let switchOn = document.getElementById('switchOn');
 let switchOff = document.getElementById('switchOff');
 let bulbStatus = document.getElementById('bulbStatus');
//  let bulb = document.getElementById('bulb');
//  let cat = document.getElementById('cat');
 

 function switchOFF(){
      document.getElementById('bulb').src ="images/bulb-go-off-img.png";
      document.getElementById('cat').src ="images/cat-eyes-img.png";
      document.getElementById('bulbStatus').innerHTML ="Swiched OFF";
      document.getElementById('switchOn').style.background = "Red";
      document.getElementById('switchOff').style.background = "Green";
     //   
 }

 function switchON(){
     document.getElementById('bulb').src ="images/bulb-go-on-img.png";
     document.getElementById('cat').src ="images/cat-img.png"; 
     document.getElementById('bulbStatus').innerHTML ="Swiched ON";
     document.getElementById('switchOn').style.background = "Green";
     document.getElementById('switchOff').style.background = "red";
     
     

}
 