/*===== Toggle to Menu Lateral =====*/ 

const btnMenu = document.getElementById("btn-menu");


btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.getElementById("menu-lateral");
    const menuSuperior = document.getElementById("menu-superior");
    const corpoSite = document.getElementById("corpo-site");
    const createNew = document.getElementsByClassName("new");


     menu.classList.toggle('show')

    //  btnMenu.classList.toggle('bx-x')

     menuSuperior.classList.toggle('body-pd')

     corpoSite.classList.toggle('body-pd')
     createNew.classList.toggle('body-pd')
}


 const navList = document.querySelectorAll('.nav-list')

function colorLink(){
    if(navList){
        navList.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
navList.forEach(l=> l.addEventListener('click', colorLink))


const navList2 = document.querySelectorAll('.nav-list2')

function colorLink(){
    if(navList2){
        navList2.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
navList2.forEach(l=> l.addEventListener('click', colorLink))

 //toggle left sidebar
   function toggleSidebar(){
    $("#sidebar").toggleClass("move-to-left");
    $("#sidebar-tab").toggleClass("move-to-left");
    $(".breadcrumb").toggleClass("move-to-left-partly");
    $(".arrow").toggleClass("active");
    // $(".menu-superior").toggleClass("move-to-left");
    //  $("#corpo-site").toggleClass("body-pd");
 
  }

  //toggle left sidebar
  function toggleSidebar2(){
    $("#sidebar2").toggleClass("move-to-left");
    $("#sidebar-tab").toggleClass("move-to-left");
    $(".breadcrumb").toggleClass("move-to-left-partly");
    $(".arrow").toggleClass("active");
    // $(".menu-superior").toggleClass("move-to-left");
    //  $("#corpo-site").toggleClass("body-pd");
 
  }
  
  $('#new').click(function(){
    $('ul').toggleClass('active');
  });

//  newfolder

$(document).ready(function() {
  $('#new-folder').click(function(e) {
    $('.wrapper').fadeIn(500);
    $('.popup-box').removeClass('transform-out').addClass('transform-in');

    e.preventDefault();
  });

  $('.popup-close').click(function(e) {
    $('.wrapper').fadeOut(500);
    $('.popup-box').removeClass('transform-in').addClass('transform-out');

    e.preventDefault();
  });
});