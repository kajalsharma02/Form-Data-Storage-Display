// Create container div for form
var containerForm = document.createElement('div');
containerForm.setAttribute('id', 'container');
containerForm.setAttribute('method', 'POST');

containerForm.style.width = "60%";
containerForm.style.margin = "auto";
containerForm.style.padding = "20px";
containerForm.style.backgroundColor = "#f0f0f0";
containerForm.style.borderRadius = "10px";
containerForm.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
containerForm.style.fontFamily = "Arial, sans-serif";

// Create title element
var title = document.createElement('h2');
title.innerText = "Registration Form";
title.style.textAlign = "center";
title.style.marginBottom = "20px";
title.style.color = "#333"; // Change title color

// Append title to the container form
containerForm.appendChild(title);

// Create form element
var form = document.createElement("form");
form.setAttribute("id", "myForm");

// Label styling
var labelStyle = "font-size: 16px; font-weight: bold; margin-bottom: 5px; display: block;";

//Label for Name field
var nameLabel = document.createElement("label");
nameLabel.innerText = "Name: ";
nameLabel.setAttribute("style", labelStyle);

//Input for name
var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("name", "name");
nameInput.style.width = "100%";
nameInput.style.padding = "8px";
nameInput.style.marginBottom = "10px";
nameInput.style.border = "1px solid #ccc";
nameInput.style.borderRadius = "5px";

//Append name label and input to form
form.appendChild(nameLabel);
form.appendChild(nameInput);

//Label for Age field
var ageLabel = document.createElement("label");
ageLabel.innerText = "Age: ";
ageLabel.setAttribute("style", labelStyle);

//Input for age
var ageInput = document.createElement("input");
ageInput.setAttribute("type", "number");
ageInput.setAttribute("id", "age");
ageInput.setAttribute("name", "age");
ageInput.style.width = "100%";
ageInput.style.padding = "8px";
ageInput.style.marginBottom = "10px";
ageInput.style.border = "1px solid #ccc";
ageInput.style.borderRadius = "5px";

//Append age label and input to form
form.appendChild(ageLabel);
form.appendChild(ageInput);

//Label for gender field
var gendersLabel = document.createElement("label");
gendersLabel.innerText = "Gender: ";
gendersLabel.setAttribute("style", labelStyle);

// Create radio buttons for gender
var genders = ["Male", "Female", "Other"];
genders.forEach(function(genderOption) {
    var radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "gender");
    radio.setAttribute("value", genderOption.toLowerCase());
    radio.style.marginRight = "5px";
    
    var radioLabel = document.createElement("label");
    radioLabel.innerText = genderOption;
    radioLabel.style.marginRight = "15px";

    form.appendChild(radio);
    form.appendChild(radioLabel);
});

form.appendChild(document.createElement("br"));

//Label for occupation
var occupationLabel = document.createElement("label");
occupationLabel.innerText = "Occupation: ";
occupationLabel.setAttribute("style", labelStyle);

// Input for occupation
var occupationInput = document.createElement("textarea");
occupationInput.setAttribute("type", "text");
occupationInput.setAttribute("id", "occupation");
occupationInput.setAttribute("name", "occupation");
occupationInput.style.width = "100%";
occupationInput.style.padding = "8px";
occupationInput.style.marginBottom = "10px";
occupationInput.style.border = "1px solid #ccc";
occupationInput.style.borderRadius = "5px";

//Append occupation label and input to form
form.appendChild(occupationLabel);
form.appendChild(occupationInput);

//Label for salary
var salaryLabel = document.createElement("label");
salaryLabel.innerText = "Salary: ";
salaryLabel.setAttribute("style", labelStyle);

// Input for salary
var salaryInput = document.createElement("input");
salaryInput.setAttribute("type", "text");
salaryInput.setAttribute("id", "salary");
salaryInput.setAttribute("name", "salary");
salaryInput.style.width = "100%";
salaryInput.style.padding = "8px";
salaryInput.style.marginBottom = "10px";
salaryInput.style.border = "1px solid #ccc";
salaryInput.style.borderRadius = "5px";

//Append salary label and input to form
form.appendChild(salaryLabel);
form.appendChild(salaryInput);

//Label for contact
var contactLabel = document.createElement("label");
contactLabel.innerText = "Contact Number: ";
contactLabel.setAttribute("style", labelStyle);

// Input for contact
var contactInput = document.createElement("input");
contactInput.setAttribute("type", "number");
contactInput.setAttribute("id", "contact");
contactInput.setAttribute("name", "contact");
contactInput.style.width = "100%";
contactInput.style.padding = "8px";
contactInput.style.marginBottom = "10px";
contactInput.style.border = "1px solid #ccc";
contactInput.style.borderRadius = "5px";

//Append contact label and input to form
form.appendChild(contactLabel);
form.appendChild(contactInput);

// Button for submit
var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("id", "submit");
submitButton.setAttribute("name", "submit");
submitButton.setAttribute("value", "Submit");
submitButton.style.width = "100%";
submitButton.style.padding = "10px";
submitButton.style.border = "none";
submitButton.style.borderRadius = "5px";
submitButton.style.backgroundColor = "#4CAF50";
submitButton.style.color = "white";
submitButton.style.fontWeight = "bold";
submitButton.style.cursor = "pointer";

//Append submit button to form
form.appendChild(submitButton);

//Append form to container div
containerForm.appendChild(form);

//Append container div to body
document.body.appendChild(containerForm);




// Retrieve existing data from localStorage when the page loads
var formData = JSON.parse(localStorage.getItem("formData"));

// Check if formData is null or undefined, initialize it as an empty object
if (!formData) {
    formData = {};
}

// Add event listener to form submission
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var nameValue = document.getElementById("name").value;
    var ageValue = document.getElementById("age").value;
    var genderValue = document.querySelector('input[name="gender"]:checked').value;
    var occupationValue = document.getElementById("occupation").value;
    var salaryValue = document.getElementById("salary").value;
    var contactValue = document.getElementById("contact").value;

    // Add new form data to the existing object
    var newFormData = {
        name: nameValue,
        age: ageValue,
        gender: genderValue,
        occupation: occupationValue,
        salary: salaryValue,
        contact: contactValue
    };

    // Retrieve existing data from localStorage
    var existingData = localStorage.getItem("formData");
    var formData = existingData ? JSON.parse(existingData) : {};

    // Generate a unique key for the new form submission
    var timestamp = new Date().getTime();
    var key = "submission_" + timestamp;

    // Add the new form data to the existing object
    formData[key] = newFormData;

    // Convert the object to a JSON string and store it in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Create or update the table with the latest form data
    updateTable(formData);

    // Clear the form fields
    document.getElementById("myForm").reset();
    
    // Alert to notify user
    alert("Form data has been saved to local storage!");
});


// Function to create or update the table with form data
function updateTable(formData) {
    // Remove existing table if present
    var existingTable = document.getElementById("formDataTable");
    if (existingTable) {
        existingTable.parentNode.removeChild(existingTable);
    }

    // Create a new table element
    var table = document.createElement("table");
    table.setAttribute("id", "formDataTable");
    table.style.borderCollapse = "collapse"; // Collapse borders
    table.style.width = "80%";
    table.style.margin = "auto"; // Center the table
    table.style.marginTop = "50px";

    // Create table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    // Define table column headers
    var columns = ["Name", "Age", "Gender", "Occupation", "Salary", "Contact"];

    // Loop through column headers to create table headers
    columns.forEach(function(column) {
        // Create header cell
        var th = document.createElement("th");
        th.textContent = column;
        th.style.border = "1px solid black";
        th.style.padding = "8px";
        th.style.textAlign = "left";
        th.style.fontSize = "16px";
        headerRow.appendChild(th);
    });

    // Append header row to thead
    thead.appendChild(headerRow);

    // Append thead to table
    table.appendChild(thead);

    // Create tbody for table data
    var tbody = document.createElement("tbody");

    // Check if formData is empty
    if (Object.keys(formData).length === 0) {
        var noDataRow = document.createElement("tr");
        var noDataCell = document.createElement("td");
        noDataCell.textContent = "No data available";
        noDataCell.colSpan = columns.length; // Span across all columns
        noDataCell.style.border = "1px solid black";
        noDataCell.style.padding = "8px";
        noDataCell.style.fontSize = "14px";
        noDataRow.appendChild(noDataCell);
        tbody.appendChild(noDataRow);
    } else {
        // Loop through formData object to create table rows
        Object.keys(formData).forEach(function(key) {
            // Create a row for each form submission
            var dataRow = document.createElement("tr");

            // Get the form data for the current key
            var currentFormData = formData[key];

            // Loop through column headers to populate table with data
            columns.forEach(function(column) {
                // Create data cell
                var td = document.createElement("td");
                td.textContent = currentFormData[column.toLowerCase()] || ''; // If data is missing, display an empty string
                td.style.border = "1px solid black";
                td.style.padding = "8px";
                td.style.fontSize = "14px";
                dataRow.appendChild(td);
            });

            // Append data row to tbody
            tbody.appendChild(dataRow);
        });
    }

    // Append tbody to table
    table.appendChild(tbody);

    // Append table to the body of the document
    document.body.appendChild(table);
}

// Retrieve existing data from localStorage when the page loads
var existingData = localStorage.getItem("formData");
if (existingData) {
    // Parse the JSON string into an object
    var formData = JSON.parse(existingData);

    // Create or update the table with existing form data
    updateTable(formData);
} else {
    // If no data in localStorage, display a message
    updateTable({}); // Call updateTable with an empty object to display "No data available"
    console.log("No data found in localStorage.");
}
