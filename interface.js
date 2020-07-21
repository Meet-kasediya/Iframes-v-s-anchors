












function tnon() {
  document.getElementById("myBtn").disabled = false;
    document.getElementById("Disconnect").disabled = true;
     document.getElementById("more").disabled = true;
      document.getElementById("Status").innerHTML = "<font color='#ff5336'>Disconnected 💢</font>";
        document.getElementById("isc").innerHTML = "<font color='grey'>404 Error page</font>";
}

function tndis() {
  document.getElementById("myBtn").disabled = true;
   document.getElementById("Disconnect").disabled = false;
    document.getElementById("more").disabled = false;
     document.getElementById("Status").innerHTML = "<font color='#4cbb17'>Connected ✔</font>";
      document.getElementById("isc").innerHTML = "<font color='grey'>online.htm</font>";
}

   
function ref() {
  document.getElementById("myBtn").disabled = true;
   document.getElementById("Disconnect").disabled = true;
    document.getElementById("more").disabled = true;
     document.getElementById("myvpn").disabled = true;
      document.getElementById("isc").innerHTML = "<font color='green'>Reloading...</font>";
       window.location.reload()

 
}

 

 function ggl() {document.getElementById("isc").innerHTML = "'<font color='grey'>https://www.google.com/</font>'";}
 function bg() {document.getElementById("isc").innerHTML = "'<font color='grey'>https://www.bing.com/</font>'";}
 function drive() {document.getElementById("isc").innerHTML = "'<font color='grey'>https://www.google.com/drive/</font>'";}
 function gml() {document.getElementById("isc").innerHTML = "'<font color='grey'>https://www.google.com/gmail/about/</font>'";}

 


