const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function afterShowAni(entries){
    entries.forEach((entry)=>{
        entry.target.classList.add('projects__card_afterShow');
    })
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            setTimeout(function() {
                afterShowAni(entries);
            }, 1200);
        }
        // else
        // {
        //     entry.target.classList.remove('show');
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));