// INSTALMENT CALCULATION SECTION START
// INSTALMENT CALCULATION SECTION START
// INSTALMENT CALCULATION SECTION START

const installmentAmountID= document.querySelector("#installment-amount-tk")
const installmentInterestID= document.querySelector("#installment-interest-tk")
const installmentTotalAmountID= document.querySelector("#installment-total-amount-tk")

const installmentPaidID= document.querySelector("#installment-paid-amount-tk")
const installmentRemindingID= document.querySelector("#installment-remaining-amount-tk")





    let installmentAmount= parseInt(installmentAmountID.innerHTML.replace(',', '')) //amount of instalment

    const installmentInterest=installmentAmount * .1  //calc interest

    installmentInterestID.innerHTML= (installmentInterest)  //print interest

    const InstalmentTotalAmount=installmentAmount + installmentInterest // calc total amount

    installmentTotalAmountID.innerHTML= InstalmentTotalAmount; // print total amount



    let paidAmount= parseInt(installmentPaidID.innerHTML.replace(',', '')) //amount of instalment

    const remainingAmount= InstalmentTotalAmount-paidAmount;

    installmentRemindingID.innerHTML= remainingAmount

// INSTALMENT CALCULATION SECTION END
// INSTALMENT CALCULATION SECTION END
// INSTALMENT CALCULATION SECTION END











// EDIT PRICE POPUP SECTION SHOW / HIDE
// EDIT PRICE POPUP SECTION SHOW / HIDE
// EDIT PRICE POPUP SECTION SHOW / HIDE
const editPricePopUpSection= document.querySelector(".edit-price-section")

const showEditPriceSection=()=>{
    editPricePopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideEditPriceSection=()=>{
    editPricePopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}



// PRICE EDITED loading POPUP
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













// EDIT instalment POPUP SECTION SHOW / HIDE
// EDIT instalment POPUP SECTION SHOW / HIDE
// EDIT instalment POPUP SECTION SHOW / HIDE
const editInstalmentPopUpSection= document.querySelector(".edit-instalment-section")

const showEditInstalmentSection=()=>{
    editInstalmentPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideEditInstalmentSection=()=>{
    editInstalmentPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}



// instalment EDITED loading POPUP
// instalment EDITED loading POPUP
const instalmentEditedLoadingPopUpSection= document.querySelector(".edit-instalment-loading-pop-up")

const showInstalmentEditedLoadingSection=()=>{
    instalmentEditedLoadingPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideInstalmentEditedLoadingSection=()=>{
    instalmentEditedLoadingPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}













// Instruction EDIT SECTION SHOW / HIDE
// Instruction EDIT SECTION SHOW / HIDE
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










// Button Decoration
// Button Decoration
// Button Decoration

// const showMe=()=>{
//     for(let x=0; x<3; x++ ){

//         const preferredButton= document.querySelectorAll(".preferred-button")[x]
//         preferredButton.nextElementSibling.addEventListener('mouseover', function(){
//         preferredButton.classList.replace("btn-danger","btn-outline-danger")
//     })

//         preferredButton.nextElementSibling.addEventListener('mouseout', function(){
//         preferredButton.classList.replace("btn-outline-danger","btn-danger")
//     })
//     }
// }



// const beforeButton=()=>{
//     for(let x=0; x<3; x++ ){

//         const preferredButton= document.querySelectorAll(".preferred-buttons")[x]
//         preferredButton.classList.replace("btn-danger","btn-outline-danger")

//         preferredButton.previousElementSibling.addEventListener('mouseout', function(){
//         preferredButton.classList.replace("btn-outline-danger","btn-danger")
//     })

//     }
// }








// PRINT RESIT
// PRINT RESIT
// PRINT RESIT

// const serviceItemTable= document.querySelector(".vendor-resit-section-two .service-items")

// const printResit=()=>{
//     serviceItemTable.style.cssText="height:100%; border-bottom:none"

//     for(let x=0; x<10; x++){

//     const tableWidth= document.querySelectorAll(".vendor-resit-section-two table")[x]
//     tableWidth.style.width="98%"

// }
// }
