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
