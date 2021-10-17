// Vendor Resit Section
// Vendor Resit Section

// const swiper2 = new Swiper('.all-member-dashboard', {

//     direction: 'horizontal',
//     loop: false,
//     spaceBetween:20,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//         slidesPerView: 5,
//   });



  let onlineUserNav=document.querySelectorAll(".all-member-list-nav .online-user")
  // let offlineUserNav = document.querySelector(".all-member-list-nav .offline-user")
  // let onlineUserList = document.querySelector("#online-user-list")
  // let offlineUserList = document.querySelector("#offline-user-list")



  
for (x = 0; x < onlineUserNav.length; x++){
  onlineUserNav[x].classList.add("all-member-list-nav-active")
}

  // const showOnlineUser=()=>{
  //   onlineUserNav.classList.add("all-member-list-nav-active")
  //   offlineUserNav.classList.remove("all-member-list-nav-active")

  //   onlineUserList.style.display="grid"
  //   offlineUserList.style.display="none"
  // } 


//   const showOfflineUser=()=>{
//     offlineUserNav.classList.add("all-member-list-nav-active")
//     onlineUserNav.classList.remove("all-member-list-nav-active")

//     offlineUserList.style.display="grid"
//     onlineUserList.style.display="none"
// }
  



const showOnlineUser = (x) => {

  let parentSection = x.parentElement.parentElement.parentElement;

  let onlineUserNav= parentSection.querySelector(".all-member-list-nav .online-user")
  let offlineUserNav = parentSection.querySelector(".all-member-list-nav .offline-user")
  let onlineUserList = parentSection.querySelector("#online-user-list")
  let offlineUserList = parentSection.querySelector("#offline-user-list")


  onlineUserNav.classList.add("all-member-list-nav-active")
  offlineUserNav.classList.remove("all-member-list-nav-active")

  onlineUserList.style.display="grid"
  offlineUserList.style.display="none"
} 



const showOfflineUser = (x) => {
  let parentSection = x.parentElement.parentElement.parentElement;

  let onlineUserNav= parentSection.querySelector(".all-member-list-nav .online-user")
  let offlineUserNav = parentSection.querySelector(".all-member-list-nav .offline-user")
  let onlineUserList = parentSection.querySelector("#online-user-list")
  let offlineUserList = parentSection.querySelector("#offline-user-list")


    offlineUserNav.classList.add("all-member-list-nav-active")
    onlineUserNav.classList.remove("all-member-list-nav-active")

    offlineUserList.style.display="grid"
    onlineUserList.style.display="none"
}

















// DROPDOWN MENU SECTION FOR PAYMENT STATUS
// DROPDOWN MENU SECTION FOR PAYMENT STATUS
// DROPDOWN MENU SECTION FOR PAYMENT STATUS
const  dropDownSection= document.querySelector(".payment-drop-down-option-section")
const  dropDownOption= document.querySelector(".payment-drop-down-option")
const topDropDownOption=  document.querySelector(".payment-drop-down-top")


dropDownSection.addEventListener('click', x=>{
    if(x.target !== x.currentTarget){
        var clickedItem= x.target.innerHTML;
        clickedItem= x.target.innerHTML;

        topDropDownOption.innerHTML=clickedItem;

        paymentDropDownSection("dropdown1"); // To close the dropdown section 
        console.log(x.target)
    }
    x.stopPropagation();
})



let TotalDropdownSection= document.querySelectorAll(`.payment-drop-down-option-section`)

for (i = 0; i < TotalDropdownSection.length; i++){
  document.querySelectorAll(`.payment-drop-down-option-section`)[i].style.display = "none"
}




// DROPDOWN MENU OPEN / CLOSE FOR PAYMENT
const paymentDropDownSection = (e) => {
  
  let allDropdownSection = document.querySelector(`#${e.parentElement.id} .payment-drop-down-option-section`)
  allDropdownSection.parentElement

      if(allDropdownSection.style.display =="none" ){
        allDropdownSection.style.display="grid"
      }

    else{
        allDropdownSection.style.display="none"
        
  }
  


}



// const myDropdown = (e) => {
//   console.log(e.parentElement.id)
// }








// const preferredButtonLenth2= document.querySelectorAll(".preferred-button").length


// // Button Decoration
// // Button Decoration
// const showMe2=()=>{
//     for(let x=0; x<preferredButtonLenth2; x++ ){

//         const preferredButton= document.querySelectorAll(".preferred-button")[x]
//         preferredButton.nextElementSibling.addEventListener('mouseover', function(){
//         preferredButton.classList.replace("btn-danger","btn-outline-danger")
//     })

//         preferredButton.nextElementSibling.addEventListener('mouseout', function(){
//         preferredButton.classList.replace("btn-outline-danger","btn-danger")
//     })
//     }
// }



// const beforeButton2=()=>{
//     for(let x=0; x<preferredButtonLenth2; x++ ){

//         const preferredButton= document.querySelectorAll(".preferred-buttons")[x]
//         preferredButton.classList.replace("btn-danger","btn-outline-danger")

//         preferredButton.previousElementSibling.addEventListener('mouseout', function(){
//         preferredButton.classList.replace("btn-outline-danger","btn-danger")
//     })
//     }
// }











