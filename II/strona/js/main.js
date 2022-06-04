document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.navbar')
    function addShadow(){
        if (window.scrollY > 100){
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadow)

    const navShow = document.querySelector('.collapse')
    const navA = document.querySelectorAll('.nav-link')
    function removeShow(){
        
    }
    window.addEventListener('click', removeShow)

    navA.forEach(item => item.addEventListener('click', () => navShow.classList.remove('show')))
})