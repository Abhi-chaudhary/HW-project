//const fs=require("fs");
const request = require("request");
const cheerio = require("cheerio");
//const path=require("path");
const url = "https://www.moneycontrol.com/mf/etf/";
//console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}

// inspect -> 
// unique 
function extractHTML(html) {
let $=cheerio.load(html);
let teamsName=$(".main .FL");
let table=teamsName[0];
let tabledata=$(table).find("tbody").find("tbody").find("tbody").find("tbody");
let tablerow=tabledata.find("tr");
console.log(`   
             All ETFs which gave >=15% return
                     In last 3 yrs
                     
                     `);
for(let i=4;i<=63;i++)
{   
    let rowdata=$(tablerow[i]).find("td");
    if($(rowdata[11]).text()>=15)
    console.log($(rowdata[0]).text());
}

console.log(`   
         All ETFs which gave >=15% return
                     In last 2 yrs
                     
                     `);
for(let i=4;i<=63;i++)
{   
    let rowdata=$(tablerow[i]).find("td");
    if($(rowdata[10]).text()>=15)
    console.log($(rowdata[0]).text());
}

console.log(`  

         All ETFs which gave >=15% return
                     In last 1 yr
                     
                     `);
for(let i=4;i<=63;i++)
{   
    let rowdata=$(tablerow[i]).find("td");
    if($(rowdata[9]).text()>=15)
    console.log($(rowdata[0]).text());
}



}