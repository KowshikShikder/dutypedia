

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
// const  dropDownSection= document.querySelector(".payment-drop-down-option-section")
// const  dropDownOption= document.querySelector(".payment-drop-down-option")
// const topDropDownOption=  document.querySelector(".payment-drop-down-top")


// dropDownSection.addEventListener('click', x=>{
//     if(x.target !== x.currentTarget){
//         var clickedItem= x.target.innerHTML;
//         clickedItem= x.target.innerHTML;

//         topDropDownOption.innerHTML=clickedItem;

//         paymentDropDownSection("dropdown1"); // To close the dropdown section 
//         console.log(x.target)
//     }
//     x.stopPropagation();
// })



// let TotalDropdownSection= document.querySelectorAll(`.payment-drop-down-option-section`)

// for (i = 0; i < TotalDropdownSection.length; i++){
//   document.querySelectorAll(`.payment-drop-down-option-section`)[i].style.display = "none"
// }




// DROPDOWN MENU OPEN / CLOSE FOR PAYMENT
// const paymentDropDownSection = (e) => {
  
//   let allDropdownSection = document.querySelector(`#${e.parentElement.id} .payment-drop-down-option-section`)
//   allDropdownSection.parentElement

//       if(allDropdownSection.style.display =="none" ){
//         allDropdownSection.style.display="grid"
//       }

//     else{
//         allDropdownSection.style.display="none"
        
//   }
  
// }






// DROPDOWN MENU SECTION FOR PRICE STATUS (for package resit) 
// DROPDOWN MENU SECTION FOR PRICE STATUS (for package resit)
// DROPDOWN MENU SECTION FOR PRICE STATUS (for package resit)
// const  priceDropDownSection= document.querySelector(".price-drop-down-option-section")
// const  priceDropDownOption= document.querySelector(".price-drop-down-option")
// const  priceTopDropDownOption=  document.querySelector(".price-drop-down-top")


// priceDropDownSection.addEventListener('click', x=>{
//     if(x.target !== x.currentTarget){
//         var clickedItem= x.target.innerHTML;
//         clickedItem= x.target.innerHTML;

//         priceTopDropDownOption.innerHTML=clickedItem;

//         priceDropDownSectionButton(); // To close the dropdown section 
//     }
//     x.stopPropagation();
// })



// // DROPDOWN MENU OPEN / CLOSE FOR PAYMENT
// let p=0;

// const priceDropDownSectionButton=()=>{
//     if(p===0){
//         priceDropDownSection.style.display="grid";
//         p = 1;
//     }

//     else{
//         priceDropDownSection.style.display="none";
//         p=0;
//     }
// }



let TotalPriceDropdownSection= document.querySelectorAll(`.price-drop-down-option-section`)

for (i = 0; i < TotalPriceDropdownSection.length; i++){
  document.querySelectorAll(`.price-drop-down-option-section`)[i].style.display = "none"
}

const priceDropDownSection = (e) => {
  const dropdownSection = e.parentElement.querySelector(".price-drop-down-option-section")
  
        if(dropdownSection.style.display =="none" ){
          dropdownSection.style.display="grid"
        }

        else{
            dropdownSection.style.display="none"
            
        }
  
}


const priceDropDownSelect = (e) => {

  e.parentElement.parentElement.querySelector(".price-drop-down-top").innerHTML = e.innerHTML;

  e.parentElement.style.display = "none"
  
}

























let TotalDropdownSection= document.querySelectorAll(`.payment-drop-down-option-section`)

for (i = 0; i < TotalDropdownSection.length; i++){
  document.querySelectorAll(`.payment-drop-down-option-section`)[i].style.display = "none"
}



const paymentDropDownSection = (e) => {
  const dropdownSection = e.parentElement.querySelector(".payment-drop-down-option-section")
  
        if(dropdownSection.style.display =="none" ){
          dropdownSection.style.display="grid"
        }

        else{
            dropdownSection.style.display="none"
            
        }
  
}


const paymentDropDownSelect = (e) => {

  e.parentElement.parentElement.querySelector(".payment-drop-down-top").innerHTML = e.innerHTML;

  e.parentElement.style.display = "none"
  
}








