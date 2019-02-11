myURL = "https://xxxxx.herokuapp.com/";
//teamsURL = "http://localhost:8081/";

let employeesModel = [];

//-------------------------------------------------------------
// GET THE DATA FROM MONGODB
//-------------------------------------------------------------
function initializeEmployeesModel() {

    $.ajax({
        url: myURL + "employees",
        type: "GET",
        contentType: "application/json"
    })
    .done(function (data) {
        employeesModel = _.take(data, 300);
        refreshEmployeeRows(employeesModel);
    })
    .fail(function (err) {
        showGenericModal('Error', 'Unable to get Employees');
    });
}
//-------------------------------------------------------------

//-------------------------------------------------------------
// BUILD THE MODAL WINDOW
//-------------------------------------------------------------
function showGenericModal(title, message) {

    $("#myModalTitle").empty();
    $("#myModalTitle").html(title);
    $("#myModalBody").empty();
    $("#myModalBody").html(message);
    $('#genericModal').modal({ // show the modal programmatically
        backdrop: 'static', // disable clicking on the backdrop to close
        keyboard: false // disable using the keyboard to close
    });
}
//-------------------------------------------------------------

//-------------------------------------------------------------
function refreshEmployeeRows(employees) {
    // Lodash template
    let rowsTemplate = _.template(
        '<% _.forEach(employees, function(employee) { %>' +
        '<div class="row body-row" data-id=<%- employee._id %>>' +
        '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
        '</div>' +
        '<% }); %>');

    // invoke template function
    let rows = rowsTemplate({ 'employees': employees });

    $("#employees-table").empty();
    $("#employees-table").html(rows);

}
//-------------------------------------------------------------

//-------------------------------------------------------------
// FILTER THE EMPLOYEES TO GET THE FILTERSTRING
//-------------------------------------------------------------
function getFilteredEmployeesModel(filterString) {
    let val = false;
    val =  _.filter(employeesModel, function (employee) {
        if (employee.FirstName.toLowerCase().includes(filterString.toLowerCase()) ||
            employee.LastName.toLowerCase().includes(filterString.toLowerCase()) ||
            employee.Position.PositionName.toLowerCase().includes(filterString.toLowerCase())) {
            return true;
        } 
    });
    return val;
}
//-------------------------------------------------------------

//-------------------------------------------------------------
// FIND EMPLOYEE WITH SPECIFIC ID
//-------------------------------------------------------------
function getEmployeeModelById(id) {
    let emp = null;
    let findId = _.findIndex(employeesModel, function (employee) {
        return employee._id == id;
    });
    if (findId > -1) {
        emp = _.cloneDeep(employeesModel[findId]);
    }
    return emp;
}
//-------------------------------------------------------------

//-------------------------------------------------------------
// RUN THE PAGE
//-------------------------------------------------------------
$(function () {

    // fetch data and populate employees table
    initializeEmployeesModel();
    //---------------------------------------------
    // wiring the keypup event from #employee-search field
    $("#employee-search").on("keyup", function() {
        let emp = getFilteredEmployeesModel($(this).val());
        refreshEmployeeRows(emp);
    });
    //---------------------------------------------

    //---------------------------------------------
    // get the click from body-row to show the modal window. 
    $(document).on("click", ".body-row", function() {

        let employee = getEmployeeModelById($(this).attr("data-id"));
        employee.HireDate = moment(employee.HireDate).format('MMM Do YYYY');

        let lodashTemplate = _.template(
            '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %>. <%- employee.AddressZip %></br>' +
            '<strong>Phone Number:</strong> <%- employee.PhoneNum %> ext: <%- employee.Extension %></br>' +
            '<strong>Hire Date:</strong> <%- employee.HireDate %>'
        );
        let info = lodashTemplate({ 'employee': employee });

        // param title and message to print on modal
        showGenericModal(employee.FirstName + ' ' + employee.LastName, info);
    });
    //---------------------------------------------

});