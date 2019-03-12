// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

function USDBRL() 
{
    var http = new XMLHttpRequest();
    const url = 'http://www.apilayer.net/api/live?access_key=580d7cda308b7171741e187e2deb8068&format=1';
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) =>{
        var response = http.responseText;
//        console.log(response);

        var responseJSON = JSON.parse(response);
//        console.log(responseJSON);

        var currency = responseJSON.quotes.USDBRL;
        console.log(currency);
        //document.getElementById('coinsConversion').innerHTML = "USDBRL"+currency;
//        document.getElementById('USD').value = document.getElementById('BRL').value*USDBRL ;
//        document.getElementById('USD').value = document.getElementById('BRL').value*USDBRL ;
   
    }
}

function USDBRLconversion() 
{
    var http = new XMLHttpRequest();
    const url = 'http://www.apilayer.net/api/live?access_key=580d7cda308b7171741e187e2deb8068&format=1';
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) =>{
        var response = http.responseText;
//        console.log(response);

        var responseJSON = JSON.parse(response);
//        console.log(responseJSON);

        var currency = responseJSON.quotes.USDBRL;
        console.log(currency);
        var coin = document.getElementById("coin").value;
        
        document.getElementById('coinsConversion').innerHTML = coin+ " USD = "+ coin/currency +" BRL" ;
   
    }
}
function BRLUSDconversion() 
{
    var http = new XMLHttpRequest();
    const url = 'http://www.apilayer.net/api/live?access_key=580d7cda308b7171741e187e2deb8068&format=1';
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) =>{
        var response = http.responseText;
//        console.log(response);

        var responseJSON = JSON.parse(response);
//        console.log(responseJSON);

        var currency = responseJSON.quotes.USDBRL;
        console.log(currency);
        var coin = document.getElementById("coin").value;
        
        document.getElementById('coinsConversion').innerHTML = coin+ " BRL = "+ currency*coin +" USD" ;
   
    }
}