
  window.onload=function()
        {
      
      
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLssLBJyUlCXE0cN-IWrF0WgN1pCp2Mm8",
    authDomain: "homeautomationcec.firebaseapp.com",
    databaseURL: "https://homeautomationcec.firebaseio.com",
    projectId: "homeautomationcec",
    storageBucket: "",
    messagingSenderId: "1050623757818"
  };

  firebase.initializeApp(config);

console.log(firebase);
    var bulbonbool=false;
      var fanonbool=false;
      var AConbool=false;
      
    var database=firebase.database();
    
            var bref=database.ref('Bulb');
             var fref=database.ref('Fan');
      var aref=database.ref('AC');
    var bulbref=database.ref('Bulb/');
   var fanref=database.ref('Fan/');
      var ACref=database.ref('AC/');
  
      
      
var bulbtogglebutton=document.querySelector("#bulbtoggleid");
 var fantogglebutton=document.querySelector("#fantoggleid");
      var ACtogglebutton=document.querySelector("#ACtoggleid");
         
 
            //text
            //var answer=document.getElementById("ans");
var bulbtextvariable=document.getElementById("Bulbtextid");
var fantextvariable=document.getElementById("Fantextid");
      var ACtextvariable=document.getElementById("ACtextid");
      
 bulbtogglebutton.addEventListener('change',bulbcontrolfunction);
fantogglebutton.addEventListener('change',fancontrolfunction);
ACtogglebutton.addEventListener('change',ACcontrolfunction);
            
      
      //functions
        function bulbcontrolfunction(e)
            {
                if(bulbtogglebutton.checked)
                    {
                        
            console.log("bulb on");
 bulbref.set({
        Bulb1:"ON"
    });
                   
                        
            }
                else{
                  
                      console.log("bulb off");
 bulbref.set({
        Bulb1:"OFF"
    });
                    
                }
                
                
            }
      
      
      //fanfunction
       function fancontrolfunction(e)
            {
                if(fantogglebutton.checked)
                    {
                        
            console.log("fan on");
fanref.set({
        Fan1:"ON"
    });
            }
                else{
                  
                      console.log("fan off");
 fanref.set({
        Fan1:"OFF"
    });
                    
                }
                
                
            }
      
      //acfunction
      
       
       function ACcontrolfunction(e)
            {
                if(ACtogglebutton.checked)
                    {
                        
            console.log("AC on");
ACref.set({
        AC1:"ON"
    });
            }
                else{
                  
                      console.log("AC off");
ACref.set({
        AC1:"OFF"
    });
                    
                }
                
                
            }
      
      
      
      
      
//textstatus function calls
      
bref.on("value",getBulbData,err1Data);
fref.on("value",getFanData,err2Data);
aref.on("value",getACData,err3Data);
      
      //test status functions
 function getBulbData(data1){
              var bulbarray=data1.val();
               var bulbkeys=Object.keys(bulbarray);
                var k=bulbkeys[0];
                var Bulbstatusvar=bulbarray[k];
     if(Bulbstatusvar=="ON")
         {
              bulbtogglebutton.checked=true;
         }
     else{
           bulbtogglebutton.checked=false;
     }
             console.log(Bulbstatusvar);  
    
     bulbtextvariable.innerHTML=Bulbstatusvar;
           } 
    function err1Data(){
console.log(error);
           } 
  
      
      //fan status funtcion
      
             function getFanData(data2){
              var fanarray=data2.val();
               var fankeys=Object.keys(fanarray);
                var k=fankeys[0];
                var Fanstatusvar=fanarray[k];
             console.log(Fanstatusvar); 
                  if(Fanstatusvar=="ON")
         {
              fantogglebutton.checked=true;
         }
     else{
         fantogglebutton.checked=false;
     }
               
     fantextvariable.innerHTML=Fanstatusvar;
           } 
    function err2Data(){
console.log(error);
           } 

      
      //AC
      
       function getACData(data3){
              var ACarray=data3.val();
               var ACkeys=Object.keys(ACarray);
                var k=ACkeys[0];
                var ACstatusvar=ACarray[k];
             console.log(ACstatusvar); 
                  if(ACstatusvar=="ON")
         {
              ACtogglebutton.checked=true;
         }
     else{
         ACtogglebutton.checked=false;
     }
               
     ACtextvariable.innerHTML=ACstatusvar;
           } 
    function err3Data(){
console.log(error);
           } 
            
      
            
            
            
            
            
            
      } 
    

        
        
        

        
       
   

