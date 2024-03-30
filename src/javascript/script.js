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

