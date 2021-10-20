function call()
{ var a=parseInt(age.value)
  if(a>=25 && a<=30)
  {
   pimg.src="tic.png"
   msg.innerHTML="<font color='green'>Valid Age</font>"
   }
  else
  {
     pimg.src="crs.png"
     msg.innerHTML="<font color='red'>Invalid Age</font>"
  
  }
}