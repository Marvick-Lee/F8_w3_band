const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalCon = document.querySelector('.js-modal-container')
const closeBtns = document.querySelector('.js-modal-close')

function showModal() { modal.classList.add('open') }
function closeModal() { modal.classList.remove('open') }

for (const buyBtn of buyBtns) { buyBtn.addEventListener('click', showModal) }

closeBtns.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)
modalCon.addEventListener('click', function (event) { event.stopPropagation() })


var header = document.getElementById('header');
var mobileMenu = document.getElementById('js-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else { header.style.height = null; }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
console.log(menuItems)
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) { header.style.height = null; }
        else { event.preventDefault() }
    }
}

<script></script>