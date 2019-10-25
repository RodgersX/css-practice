var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var modalNoButton = document.querySelector('.modal__action--negative');
var ctaButton = document.querySelector('.main-nav__item--cta');

for(var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.style.display = 'block';
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal); 
}


function closeModal(){
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.style.display = 'none';
    
    setTimeout(function() {
        backdrop.classList.add('open');;
    }, 200);
}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');;
    }, 10);
    
});

ctaButton.addEventListener('animationstart', function(){
    console.log('Animation started',event);
});

ctaButton.addEventListener('animationend', function(){
    console.log('Animation ended',event);
});

ctaButton.addEventListener('animationiteration', function(){
    console.log('Animation iterated',event);
});
