// EDIT PRICE POPUP SECTION SHOW / HIDE
const editPricePopUpSection= document.querySelector(".edit-price-pop-up")

const showEditPriceSection=()=>{
    editPricePopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideEditPriceSection=()=>{
    editPricePopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}




// PRICE EDITED loading POPUP
const priceEditedLoadingPopUpSection= document.querySelector(".edit-price-loading-pop-up")

const showPriceEditedLoadingSection=()=>{
    priceEditedLoadingPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hidePriceEditedLoadingSection=()=>{
    priceEditedLoadingPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
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

        paymentDropDownSection(); // To close the dropdown section 
    }
    x.stopPropagation();
})



// DROPDOWN MENU OPEN / CLOSE FOR PAYMENT
let d=0;
const paymentDropDownSection=()=>{
    if(d===0){
        dropDownSection.style.display="grid"
        d=1;
    }

    else{
        dropDownSection.style.display="none"
        d=0;
    }
}






// DROPDOWN MENU SECTION FOR PAYMENT STATUS
// DROPDOWN MENU SECTION FOR PAYMENT STATUS
// DROPDOWN MENU SECTION FOR PAYMENT STATUS
const  priceDropDownSection= document.querySelector(".price-drop-down-option-section")
const  priceDropDownOption= document.querySelector(".price-drop-down-option")
const priceTopDropDownOption=  document.querySelector(".price-drop-down-top")


priceDropDownSection.addEventListener('click', x=>{
    if(x.target !== x.currentTarget){
        var clickedItem= x.target.innerHTML;
        clickedItem= x.target.innerHTML;

        priceTopDropDownOption.innerHTML=clickedItem;

        priceDropDownSectionButton(); // To close the dropdown section 
    }
    x.stopPropagation();
})



// DROPDOWN MENU OPEN / CLOSE FOR PAYMENT
let p=0;

const priceDropDownSectionButton=()=>{
    if(p===0){
        priceDropDownSection.style.display="grid";
        p=1;
    }

    else{
        priceDropDownSection.style.display="none";
        p=0;
    }
}














// Instruction EDIT SECTION SHOW / HIDE
const instructionText= document.querySelector(".details")
const instructionInput= document.querySelector(".instruction-input-text-section")


const showEditInstruction=()=>{
    instructionText.style.display="none"
    instructionInput.style.display="grid"
}

const hideEditInstruction=()=>{
    instructionText.style.display="grid"
    instructionInput.style.display="none"
}