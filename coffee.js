 const header=document.querySelector("header");
    const menuBtn=document.querySelector("#menu-btn");

    menuBtn.addEventListener('click',()=>{
      header.classList.toggle(" show-mobile-menu")
    })


    menuCloseButton.addEventListener("click",()=>menuBtn.click());

