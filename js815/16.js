function showTimings()
{
 removeOptions()
switch(scr.selectedIndex)
  {
    case 1:
       s1=["-Select Timing-","9.00-12.00 AM","12.00-3:00 PM"]
       s1v=["","Shershah","Spiderman"]
       fillTimings(s1,s1v)
       break;
   case 2:
       s2=["-Select Timing-","10.00-1.00 AM","4.00-7:00 PM"]
       s2v=["","Bellbottom","James Bond"]
       fillTimings(s2,s2v)
       break;
        
  }

}
function fillTimings(s,sv)
{  
  for(i=0;i<s.length;i++)
  {
   var opt=document.createElement("option")
   opt.text=s[i]
   opt.value=sv[i]
   timings.add(opt)
   }
}


function removeOptions()
{
   for(j=timings.options.length-1;j>=0;j--)
    { timings.remove(j)}
}

function showDetails()
{
  mvn.innerHTML=timings.options[timings.selectedIndex].value
  poster.src=timings.options[timings.selectedIndex].value+".jpg"

}

function getDiscount()
{
  if(dish.checked)
  {
   tp.innerHTML="Ticket Price 200/- Only"
  }
  else if(dise.checked)
  {
    dis=200*dise.value/100;
    na=200-dis;
    tp.innerHTML="Ticket price after "+dise.value+"% is "+na+" Only"
  }


}



