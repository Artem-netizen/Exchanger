const closeBtn = document.querySelector('.close')
const converterGet = document.querySelector('.get')
const converterGive = document.querySelector('.give')
const openBtn = document.querySelectorAll('.open-btn')
const openGetBtn = document.querySelectorAll('.open-get')
const openGiveBtn = document.querySelectorAll('.open-give')
const converterWrap = document.querySelector('.converter-transfer')

openBtn.forEach((btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        converterWrap.classList.add('show')
    })
    closeBtn.addEventListener('click', (e) => {
        converterWrap.classList.remove('show')
    })
}))

// открытие отдаваемого
openGiveBtn.forEach((btns => {
    btns.addEventListener('click', () => {
        converterGet.classList.remove('show')
        converterGive.classList.add('show')
    })
}))

// открытие получаемого
openGetBtn.forEach((btnq => {
    btnq.addEventListener('click', () => {
        converterGive.classList.remove('show')
        converterGet.classList.add('show')
    })
}))

// window.addEventListener('resize', resize)

// function resize() {
//     const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// 	if (viewport_width <= 570) {
// 		if (!converterWrap.classList.contains('done')) {
// 			parent.insertBefore(converterWrap, parent.children[2]);
// 			converterWrap.classList.add('done');
// 		}
// 	} else {
// 		if (converterWrap.classList.contains('done')) {
// 			parent_original.insertBefore(converterWrap, parent_original.children[2]);
// 			converterWrap.classList.remove('done');
// 		}
// 	}
// }