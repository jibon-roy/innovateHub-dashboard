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
async function getData() {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data)

    return data;
}

var tableData = getData()

// dynamic table
function createTable() {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    tableData.forEach(function (data, index) {
        var row = document.createElement("tr");

        // Checkbox column
        var cell1 = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.id = `selectCheckbox${index}`
        checkbox.type = "checkbox";
        cell1.appendChild(checkbox);
        var label = document.createElement("label");
        label.setAttribute("for", `selectCheckbox${index}`);
        cell1.appendChild(label);
        row.appendChild(cell1);

        // Brand column with image
        var cell2 = document.createElement("td");
        cell2.style.display = 'flex'
        cell2.style.alignItems = 'center'
        cell2.style.gap = '5px'
        var brandImage = document.createElement("img");
        brandImage.src = data.brand.image;
        brandImage.alt = data.brand.name;
        brandImage.style.width = "35px";
        brandImage.style.borderRadius = "10px";
        cell2.appendChild(brandImage);
        cell2.appendChild(document.createTextNode(data.brand.name));
        row.appendChild(cell2);

        // Description column
        var cell3 = document.createElement("td");
        cell3.textContent = data.description;
        row.appendChild(cell3);

        // Members column with images
        var cell4 = document.createElement("td");
        cell4.style.paddingLeft = '13px'
        data.members.forEach(function (member) {
            var memberImage = document.createElement("img");
            memberImage.src = member.image;
            memberImage.alt = member.name;
            memberImage.style.width = "30px";
            memberImage.style.borderRadius = "50%";
            memberImage.style.marginLeft = "-7px";
            memberImage.style.border = "2px solid white";
            cell4.appendChild(memberImage);
            memberImage.title = member.name
            // cell4.appendChild(document.createTextNode(member.name + " "));
        });
        row.appendChild(cell4);

        // Categories column
        var cell5 = document.createElement("td");
        cell5.innerHTML = data.categories;
        row.appendChild(cell5);

        // Tags column
        var cell6 = document.createElement("td");
        cell6.innerHTML = data.tags;
        row.appendChild(cell6);

        // Next Meeting Time column
        var cell7 = document.createElement("td");
        cell7.innerHTML = data.meetingTime;
        row.appendChild(cell7);

        // Plus Icon column
        var cell8 = document.createElement("td");
        cell8.textContent = data.plusIcon;
        row.appendChild(cell8);

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