let countries;
let i=0,hell=0;
function search_Flag()
{
   let x=document.getElementById("searchname").elements[0].value;//Get the value from search bar
   let options="",option="";
  fetch("https://restcountries.eu/rest/v2/all")
  .then(response =>response.json())              //fetching data in json format
  .then(data =>initialize(data))
  .catch(err =>console.log(err));
      function initialize(countriesData)
       {
           countries=countriesData;           
          for(i=0;i<countries.length;i++)       //traversing countries data to check with searchbar text
               {
                 options=countries[i].name;
                 if(options.toLowerCase()===x.toLowerCase())  //compare two texts
                   {
                     document.querySelector("#flag img").src=countries[i].flag;  //append flag in card
                     document.getElementById("country").innerHTML=countries[i].name;
                     localStorage.click=countries[i].name;                     //store name for fetching data to second page so that second page can call the function and get information through API
                     alert("Click on the flag to View Information!!");     //alert user to click on flag to view information
                     break;
                   }
               else
                   {
                     document.getElementById("country").innerHTML="Check the Country Spelling..";
                    }
              }
        }
}
function get()
{
let x=localStorage.click;  // retrieve saved data from local storage and use this data to traverse as in first function to get more details
document.getElementById("getCountry").innerHTML=x;
let options="",option="";
fetch("https://restcountries.eu/rest/v2/all")
.then(response =>response.json())
.then(data =>initialize(data))
.catch(err =>console.log(err));
    function initialize(countriesData)
     {
        countries=countriesData;
       for(i=0;i<countries.length;i++)
           {
              options=countries[i].name;
              if(options.toLowerCase()===x.toLowerCase()) //if country name is found retrieve all data
                {
                  document.getElementById("cap").innerHTML=countries[i].capital;;
                  document.getElementById("dial").innerHTML=`+${countries[i].callingCodes}`;
                  document.getElementById("pop").innerHTML=countries[i].population.toLocaleString("en-US");
                  document.getElementById("cur").innerHTML=countries[i].currencies.filter(c =>c.name).map(c =>`${c.name}(${c.code})`).join(",");
                  document.getElementById("reg").innerHTML=countries[i].region;
                  document.getElementById("sub").innerHTML=countries[i].subregion;
                  break;
                }
           }
      }
}




