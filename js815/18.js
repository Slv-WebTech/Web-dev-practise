function getResult()
{
  var price=fc.value
  var total=price*distance.value
  var company=fc.options[fc.selectedIndex].text
  var gst=total*18/100
  var na=total+gst
  var pic=company+".png"
  var htm="<table border='1' cellspacing='0'>"
  htm+="<caption><h3>Flight Fare</h3></caption>"
  htm+="<tr><th>Flight Id</th><th>Company</th><th>Source</th><th>Destination</th><th>Distance</th><th>Rate</th><th>Amount</th></tr>"
  htm+="<tr><td>"+fid.value+"</td><td><img src='"+pic+"' width='50'></td><td>"+source.value+"</td><td>"+destination.value+"</td><td>"+distance.value+"</td><td>&#8377; "+price+"/km</td><td>"+total+"</td></tr>"
  htm+="<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>GST[18%]:</td><td>"+gst+"</td></tr>"
  htm+="<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td><b>Net Amount:</b></td><td><b>"+na+"</b></td></tr>"
  htm+="</table>"
  
  result.innerHTML=htm
  




}