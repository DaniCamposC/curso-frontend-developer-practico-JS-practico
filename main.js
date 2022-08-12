const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu()
{
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed)
    {
        aside.classList.add('inactive');       
    }
    desktopMenu.classList.toggle('inactive')// Esto lo que hace es que la va a intercambiar osea la quitara o pondra.
}

function toggleMobileMenu()
{
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed)
    {
        aside.classList.add('inactive');       
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside()
{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed)
    {
        desktopMenu.classList.add('inactive');       
    }

    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');       
    }
 
    aside.classList.toggle('inactive');
}