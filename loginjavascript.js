window.onload=function()
        {
    
     
    
    
    
    var config = {
    apiKey: "AIzaSyDLssLBJyUlCXE0cN-IWrF0WgN1pCp2Mm8",
    authDomain: "homeautomationcec.firebaseapp.com",
    databaseURL: "https://homeautomationcec.firebaseio.com",
    projectId: "homeautomationcec",
    storageBucket: "",
    messagingSenderId: "1050623757818"
  };

  firebase.initializeApp(config);

      var database=firebase.database();
    
    
    var userref=database.ref('Registereduser/');
   
   
     var uservalueref=database.ref('Registereduser');
    var emailfield=document.getElementById("emailid");
     var passwordfield=document.getElementById("passwordid");
    
  
          var signinbutton=document.getElementById("signinid");
    
signinbutton.addEventListener('click',verify);
    
    
    function verify(e)
    {
       
        
          uservalueref.once('value',checkdata);
        
        
     
    }
  
    //verify function
     
    
    function checkdata(data5){

     var emailvar=emailfield.value;
      var passwordvar=passwordfield.value;
    var usernamearray=data5.val();
               var usernamekeys=Object.keys(usernamearray);
        var k=usernamekeys[2];
         var m=usernamekeys[0];
       
             var emaildbtext=usernamearray[k];
          var passworddbtext=usernamearray[m];
                if(emaildbtext==emailvar)
                {
                   if(passworddbtext==passwordvar) 
                       {
                           
                           console.log("hy");
                       
                           
                     window.open("mainscreen.html","_self");
                          userref.set({
                              username:emaildbtext,
                              password:passworddbtext,
                             signed:"true"
                              
                          });
                       }
                    else{
                        
                         console.log("wrongpassword");
                      passwordfield.value="";
                        
                    }
                }
        else{
            console.log("check your username and id");
        }
                
            }
                
               
    
   
   
  
    
    
    }
    
    
    
    
    

    
    
    
    
    
    
