$(document).ready(function(){


    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');




    openMenu.addEventListener('click',show);
    closeMenu.addEventListener('click',close);

    function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    }
    function close(){
    mainMenu.style.top = '-100%';
    }



    $(".vip").click(function(){
        window.open('https://dele7.github.io/Fintech-app/', '_blank')
    });
     $(".insure").click(function(){
        window.open('https://dele7.github.io/insurance-app/', '_blank')
    });

  
});
