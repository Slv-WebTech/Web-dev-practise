function fillCity()
{ removeItems()
  var i=states.selectedIndex
  switch(i)
  { case 1:
        mpcity=["-City-","Gwalior","Indore","Jabalpur","Morena"]
        addcity(mpcity)
         break;
   case 2:
        upcity=["-City-","Agra","Jhansi","Kanpur","Lucknow","Mathura"]
        addcity(upcity)
          break; 
  case 3:
          gcity=["-City-","Surat","Vadodara","Ahmdabad","Gandhi Nagar","Bhuj"]
          addcity(gcity)
          break;
  }


}

function addcity(cities)
{
 for(i=0;i<cities.length;i++)
        { var opt=document.createElement("option")
          opt.text=cities[i]
          city.add(opt)
          }
}
function removeItems()
{
   for(j=city.options.length-1;j>=0;j--)
    {
      city.remove(j)
    }



}

function showMap()
{map.innerHTML="See "+city.value+" City Map"
 map.href="http://maps.google.com/?q="+city.value
 
}




