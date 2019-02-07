
// BASED ON THE EXAMPLES FOUND IN:
// https://sictweb.github.io/web422/notes/knockout
// https://knockoutjs.com/documentation/introduction.html


//--- RESPONDING TO VIEWMODEL CHANGES WITH "OBSERVABLE" ----------
var myViewModel = {
    personName: ko.observable('Bob'),
    showMessage: ko.observable(false), // Message initially hidden
    wantsSpam: ko.observable(true), // Initially checked

};

var cart = [
    { name: "Dog" , price: null },
    { name: "Beer", price: 3.15 },
    { name: "Book", price: 1.01 }
  ];

// YOU MUST CREATE THE BINDINGS FOR EACH ELEMENT YOU WANT TO MANIPULATE
$(function(){
    ko.applyBindings(myViewModel, $("#prsChange")[0]);
    ko.applyBindings(myViewModel, $("#message")[0]); 
    ko.applyBindings(myViewModel, $("#check")[0]); 

    ko.applyBindings(cart);
});

// FUNCTION TO MAKE CHANGES AFTER 2 SECONDS
window.setTimeout(function(){
    myViewModel.personName("Dave"); // changes the name Bob to Dave after 2 seconds 
    myViewModel.showMessage(true); // makes message appear
    myViewModel.wantsSpam(false); // The checkbox becomes unchecked
},2000);

//-----------------------------------------------------------