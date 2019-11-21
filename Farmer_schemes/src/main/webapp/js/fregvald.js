function valid()
{
var flag=true;
	
var fname = document.getElementById('fname').value; alert('fname:'+fname);
var id1 = document.getElementById('id1');
var regex = /^[a-zA-Z ]{5,}$/;
id1.innerHTML='';

if(fname=='' || fname.length==0){
	alert("sdas");
    id1.innerHTML='Plz fill name';
    flag=false;
  }
else
if(regex.test(fname) == false){
	alert("ioh");
     id1.innerHTML="Name must be in alphabets only";
     flag=false;
  }
return false;

var contact = document.getElementById('contact').value;
var f_email = document.getElementById('f_email').value;
var addr1 = document.getElementById('addr1').value;
var accno = document.getElementById('accno').value;
var ifsc = document.getElementById('ifsc').value;
var password = document.getElementById('password').value;
//var confirmpass = document.getElementById("confirmpass").value;


var id2 = document.getElementById('id2');
var id3 = document.getElementById('id3');
var id4 = document.getElementById('id4');
var id5 = document.getElementById('id5');
var id6 = document.getElementById('id6');
var id7 = document.getElementById('id7');
var id8 = document.getElementById('id8');


var mobregex = /^[0-9]{10}$/;
var emailregex = /^[a-zA-Z0-9_.]{5,}@[a-zA-Z0-9_]{5,}.[a-z]{2,5}$/;
var addr1regex = /^[a-zA-Z0-9\s,'-]{3,}$/;
var accnoregex =/^[0-9]{12}$/;
var ifscregex =/[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
var passregex = /^[0-9a-zA-Z$?#$]{8,}$/;


id2.innerHTML='';
id3.innerHTML='';
id4.innerHTML='';
id5.innerHTML='';
id6.innerHTML='';
id7.innerHTML='';
id8.innerHTML='';



if(contact==''){
    id2.innerHTML='Plz fill mobile no';
    flag= false;
  }
else
if(mobregex.test(contact) == false){
     id2.innerHTML="Mobile no is improper";
     flag= false;
  } 

if(f_email==''){
    id3.innerHTML='Plz fill emailid';
    flag= false;
  }
else
if(emailregex.test(f_email) == false){
     id3.innerHTML="emails  is improper";
     flag= false;
  } 

  if(addr1==''){
    id4.innerHTML='Plz fill address';
    flag=false;
  }
  else
  if(addr1regex.test(addr1) == false){
     id4.innerHTML="improper address";
     flag=false;
  }

  if(accno==''){
    id5.innerHTML='Plz fill Account no';
    flag=false;
  }
  else
  if(accnoregex.test(accno) == false){
     id5.innerHTML="improper Account no(12 digit)";
     flag=false;
  }

  if(ifsc==''){
    id6.innerHTML='Plz fill IFSC Code';
    flag=false;
  }
  else
  if(ifscregex.test(ifsc) == false){
     id6.innerHTML="improper IFSC Code";
     flag=false;
  }

  if(passregex==''){
    id7.innerHTML='Password Field cannot be left empty';
    flag= false;
  }
  if(passregex.test(password) == false){
    id7.innerHTML="Password improper";
    flag= false;
  }

  if (password != confirmpass) {
    id8.innerHTML="Password do not match";
    flag= false;
  }
    return flag;
} 