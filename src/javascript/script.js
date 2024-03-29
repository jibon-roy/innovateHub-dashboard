    const folders = document.querySelectorAll('.folder-dropdown');
    
    folders.forEach((folderContent)=> {
        const folder = document.querySelector('.folder-content');
        const icon = document.getElementById('icon')
       
        folderContent.addEventListener('click',()=> {
        folder.style.display = folder.style.display === 'none' ? 'block' : 'none';
        icon.style.transform = icon.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)'
    })
    })

