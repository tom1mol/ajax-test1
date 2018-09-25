const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    
   
    xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
            
        }
    };
    
    xhr.open("GET", baseURL + type + "/");
    xhr.send();
    
}

function getTableHeaders(obj) {
    var tableHeaders = [];                         //array called tableHeaders
    
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);         //td element contains a key(string)
    });
    
    return `<tr>${tableHeaders}</tr>`;  //returns <tr> that contains an array of table headers
}

function writeToDocument(type) {                //type = people, planets, species etc.
    var tableRows = [];                     //will house each row of data
    var el = document.getElementById("data");
    //el.innerHTML = "";                          //"" = empty string
    
    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        
        data.forEach(function(item) {
           var dataRow = [];
                                //new row for each object in data array
                                
           Object.keys(item).forEach(function(key) {
               var rowData = item[key].toString();  //truncate info thats inserted into td element.shorten strings.less space on page
                            //above..new variable rowData and setting it = string
               var truncatedData = rowData.substring(0, 15);             //substring frow 0 index of string to 15 index of string
               dataRow.push(`<td>${truncatedData}</td>`);        //new <td> element for each item
           });
           tableRows.push(`<tr>${dataRow}</tr>`);         // each row gets rendered as a tablerow
            //el.innerHTML += "<p>" + item.name + "</p>";
        });
        
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}