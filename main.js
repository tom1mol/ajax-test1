const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", baseURL + type + "/");
    xhr.send();
    
    xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
            
        }
    };
}

function writeToDocument(type) {                //type = people, planets, species etc.
    var el = document.getElementById("data");
    el.innerHTML = "";                          //"" = empty string
    
    getData(type, function(data) {
        data = data.results;
        
        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";
        });
        
    });
}

// json.parse section
/*
const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();         //xml = extensible markup language
    
    //var data;
    
    xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
            
        }
    };
    
    xhr.open("GET", baseURL + type + "/");
    
    xhr.send();
}

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}
 
*/   
    
    /*
        //data = this.responseText;
        //console.log(JSON.parse(this.responseText));
        //console.log(typeof(JSON.parse(this.responseText)));
        //console.log(typeof(this.responseText)); in inspect element this code showed a string in console
        
    */
        







/*
function printDataToConsole(data)  {
    console.log(data);
}

getData(printDataToConsole);

*/
/*getData(function(data) {
    console.log(data);
});

*/
//set timeout function
/*
setTimeout(function() {
    console.log(data);
}, 500);

*/

/*
var xhr = new XMLHttpRequest();         //xml = extensible markup language

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

*/

/*
var xhr = new XMLHttpRequest();         //xml = extensible markup language

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

xhr.onreadystatechange = function() {           //xhr object maintains an internal state as it completes various parts of the request operation
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

*/