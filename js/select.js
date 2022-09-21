document.querySelectorAll('.select').forEach(function(selectDropdown) {

    let selectBtn = selectDropdown.querySelector('.arrow-down-icon')
    let selectChangeBtn = selectDropdown.querySelector('.select__list')
    let selectSubItem = selectChangeBtn.querySelectorAll('.select__item')
    let selectInputValue = selectDropdown.querySelector('.select__input-hidden')
    
    selectBtn.addEventListener('click', function() {
        selectChangeBtn.classList.toggle('open')
        selectBtn.classList.toggle('open')
    })
    
    selectSubItem.forEach(function(listItem){
        listItem.addEventListener('click', function(e){
            e.stopPropagation()
            selectBtn.innerText = this.innerText
            selectInputValue.value = this.dataset.value
            selectChangeBtn.classList.remove('open')
        })
    })
    
    document.addEventListener('click', function(e){
        if(e.target !== selectBtn){
            selectChangeBtn.classList.remove('open')
        }
    })
})

