document.addEventListener("DOMContentLoaded", function(event) { 
    const createBtn = document.querySelectorAll('.converter-currency-card');
    
        if (createBtn) {
            createBtn.forEach(function(el, key){
                el.addEventListener('click', function () {
                el.classList.toggle("assign");
                });
            });
        }
    });