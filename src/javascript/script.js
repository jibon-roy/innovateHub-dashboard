const folders = document.querySelectorAll('.folder-dropdown');

folders.forEach((folderContent, index) => {
    const folders = document.querySelectorAll('.folder-content');
    const icon = document.querySelectorAll('.fa-caret-up')

    folderContent.addEventListener('click', () => {
        icon[index].style.transform = icon[index].style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)'
        folders[index].style.display = folders[index].style.display === 'none' ? 'flex' : 'none';


    })
    // folderContent.addEventListener('click', () => {
    //     folders.forEach((folder, idx, num) => {
    //         num[idx].style.display = num[idx].style.display === 'none' ? 'flex' : 'none';
    //     })
    //    
    // })
})

var tableData = [
    { brand: "Brand A", description: "Description A", members: "John, Alice", categories: "Category A", tags: "Tag A", meetingTime: "2024-04-01", plusIcon: "" },
    { brand: "Brand B", description: "Description B", members: "Bob, Eve", categories: "Category B", tags: "Tag B", meetingTime: "2024-04-02", plusIcon: "" },
    { brand: "Brand C", description: "Description C", members: "Charlie, David", categories: "Category C", tags: "Tag C", meetingTime: "2024-04-03", plusIcon: "" }
];

// Function to create table rows dynamically
function createTable() {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Clear existing rows

    tableData.forEach(function (data, idx) {
        var row = document.createElement("tr");

        // Checkbox column
        var cell1 = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox${idx}`;
        cell1.appendChild(checkbox);
        var label = document.createElement("label");
        label.setAttribute("for", `checkbox${idx}`);
        cell1.appendChild(label);
        row.appendChild(cell1);

        // Data columns
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var cell = document.createElement("td");
                cell.textContent = data[key];
                row.appendChild(cell);
            }
        }

        tableBody.appendChild(row);
    });
}

// Call the function to create the table
createTable();

// Add event listener to the select all checkbox
document.getElementById("selectAllCheckbox").addEventListener("change", function () {
    var checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = this.checked;
    }, this);
});