let copyLink = document.querySelector('.login-invitation-link')
copyLink.querySelector('.login-controls__btn-icon').addEventListener('click', function() {
    let input = copyLink.querySelector('.login-invitation-input')
    input.select()
    document.execCommand('copy')
    copyLink.classList.add('active')
    window.getSelection().removeAllRanges()
})