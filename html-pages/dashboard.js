const notificationBtn = document.querySelector(".notification-btn");
const notificationDropdown = document.querySelector(".notification-dropdown");

const dropdownCloseBtn = document.querySelector(".notification-dropdown .btn-close")


notificationBtn.addEventListener("click", ()=>{

    if(notificationDropdown.style.display === "block"){
        notificationDropdown.style.display ="none";
    }else{
        notificationDropdown.style.display ="block";
    }
    
})

dropdownCloseBtn.addEventListener("click", ()=>{
    notificationDropdown.style.display ="none";
})