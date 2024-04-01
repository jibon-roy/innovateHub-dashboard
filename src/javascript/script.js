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

const getData = async () => {
    const response = await fetch("./src/public/data.json");
    const data = await response.json();
    return data;
}
const main = async () => {

    const tableData = await getData()

    // dynamic table
    function createTable() {
        const tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = "";
        tableData?.forEach(function (data, index) {
            const row = document.createElement("tr");

            // Checkbox column
            const cell1 = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.id = `selectCheckbox${index}`
            checkbox.type = "checkbox";
            cell1.appendChild(checkbox);
            const label = document.createElement("label");
            label.setAttribute("for", `selectCheckbox${index}`);
            cell1.appendChild(label);
            row.appendChild(cell1);

            // Brand column with image
            const cell2 = document.createElement("td");
            cell2.style.display = 'flex'
            cell2.style.alignItems = 'center'
            cell2.style.gap = '5px'
            const brandImage = document.createElement("img");
            brandImage.src = data.brand.image;
            brandImage.alt = data.brand.name;
            brandImage.style.width = "35px";
            brandImage.style.borderRadius = "10px";
            cell2.appendChild(brandImage);
            cell2.appendChild(document.createTextNode(data.brand.name));
            row.appendChild(cell2);
    
            // Description column
            const cell3 = document.createElement("td");
            const desc = data.description;
            cell3.textContent = desc.slice(0,22)+'...'
            row.appendChild(cell3);

            // Members column with images
            const cell4 = document.createElement("td");
            cell4.style.paddingLeft = '13px'
            data.members.forEach(function (member) {
                const memberImage = document.createElement("img");
                memberImage.src = member.image;
                memberImage.alt = member.name;
                memberImage.style.width = "30px";
                memberImage.style.height = "30px";
                memberImage.style.borderRadius = "50%";
                memberImage.style.marginLeft = "-8px";
                memberImage.style.border = "2px solid white";
                memberImage.style.cursor = "pointer";
                cell4.appendChild(memberImage);
                memberImage.title = member.name
            });
            row.appendChild(cell4);


            // Categories column
            const cell5 = document.createElement("td");
            cell5.innerHTML = data.categories;
            row.appendChild(cell5);

            // Tags column
            const cell6 = document.createElement("td");
            cell6.innerHTML = data.tags;
            row.appendChild(cell6);

            // Next Meeting Time column
            const cell7 = document.createElement("td");
            cell7.innerHTML = data.meetingTime;
            row.appendChild(cell7);

            // Plus Icon column
            const cell8 = document.createElement("td");
            cell8.textContent = data.plusIcon;
            row.appendChild(cell8);

            tableBody.appendChild(row);
            const selectedChecked = document.getElementById(`selectCheckbox${index}`)
            console.log(selectedChecked.checked)
        });
    }

    // Call the function to create the table
    createTable();
}

main()

// Add event listener to the select all checkbox
document.getElementById("selectAllCheckbox").addEventListener("change", function () {
    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = this.checked;
    }, this);
});

// Selected button



document.getElementById('selectBtn').addEventListener('click', function() {
    alert('Select button clicked');
  });
  
  document.getElementById('archiveBtn').addEventListener('click', function() {
    alert('Archive button clicked');
  });
  
  document.getElementById('deleteBtn').addEventListener('click', function() {
    alert('Delete button clicked');
  });
  
  document.getElementById('moreBtn').addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    this.parentElement.style.display = 'none';
  });

  document.getElementById('menu').addEventListener('click', function() {
    const navbar = document.getElementById('navigation')
    navbar.style.transition = '0.8s'
    navbar.style.marginLeft = 0
  });

  const exitMenu =() => {
    const navbar = document.getElementById('navigation')
    navbar.style.transition = '0.8s'
    navbar.style.marginLeft = '-400px'
  }