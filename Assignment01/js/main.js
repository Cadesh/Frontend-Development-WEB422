/********************************************************************************** 
 * WEB422 – Assignment 1 
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically 
 * from any other source (including web sites) or distributed to other students.    
 * 
 * Date: 15 JAN 2019 
 * ********************************************************************************/

teamsURL = "https://xxxx.herokuapp.com/";
//teamsURL = "http://localhost:8081/";

//----------------------------------------------------------------
$(document).ready(function(){ //DOM ready handler
    
    console.log ("JQuery is working.");
    //-----------------------------------------------------------
    //1 - TEAMS
    //-----------------------------------------------------------
    $("#teams-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: teamsURL + "teams",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty() //clear
            $("#data").html("<h3>Teams</h3>") //add title
            $("#data").append(JSON.stringify(data)); //list data
        })
    });
    //----------------------------------------------------------
    //2 - EMPLOYEES
    //-----------------------------------------------------------
    $("#employees-menu").on("click",function(event){
        event.preventDefault();
        $.ajax({
            url: teamsURL + "employees",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty() //clear
            $("#data").html("<h3>Employees</h3>") //add title
            $("#data").append(JSON.stringify(data)); //list data
        })
    });
    //----------------------------------------------------------
    //3 - PROJECTS
    //-----------------------------------------------------------
    $("#projects-menu").on("click",function(event){
        event.preventDefault();
        $.ajax({
            url: teamsURL + "projects",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty() //clear
            $("#data").html("<h3>Projects</h3>") //add title
            $("#data").append(JSON.stringify(data)); //list data
        })
    });
    //----------------------------------------------------------
    //4 - POSITIONS
    //-----------------------------------------------------------
    $("#positions-menu").on("click",function(event){
        event.preventDefault();
        $.ajax({
            url: teamsURL + "positions",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty() //clear
            $("#data").html("<h3>Positions</h3>") //add title
            $("#data").append(JSON.stringify(data)); //list data
        })
    });
    //----------------------------------------------------------

}); //end of DOM ready handler
//--------------------------------------------------------------