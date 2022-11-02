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



    $(".avat").click(function(){
        window.open('https://dele7.github.io/avat-crypto/', '_blank')
    });
    $(".vip").click(function(){
        window.open('https://dele7.github.io/Fintech-app/', '_blank')
    });
     $(".insure").click(function(){
        window.open('https://dele7.github.io/insurance-app/', '_blank')
    });
     $(".lms").click(function(){
        window.open('https://dele7.github.io/LMS/', '_blank')
    });
      $(".lq").click(function(){
        window.open('https://dele7.github.io/Lodge-quick/', '_blank')
    });
       $(".rest").click(function(){
        window.open('https://www.figma.com/file/3qalxG72uDXPjda1K81qG9/Salad-Bar?node-id=0%3A1/', '_blank')
    });
    $(".Crypto").click(function(){
        window.open('https://dele7.github.io/crypto/', '_blank')
    });

  
});
