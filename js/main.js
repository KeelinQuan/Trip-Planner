var avatar = document.querySelector('.avatar')
avatar.addEventListener('click', () => {
    var theme = document.body.getAttribute('data-bs-theme') 
    if (theme == 'dark') {
        document.body.setAttribute('data-bs-theme','light')
    } else {
        document.body.setAttribute('data-bs-theme','dark')
    }      
})