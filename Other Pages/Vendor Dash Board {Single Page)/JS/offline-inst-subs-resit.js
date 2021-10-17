
// EDIT PRICE POPUP SECTION SHOW / HIDE
// EDIT PRICE POPUP SECTION SHOW / HIDE
// EDIT PRICE POPUP SECTION SHOW / HIDE
// const editPricePopUpSection= document.querySelector(".edit-price-section")

// const showEditPriceSection=()=>{
//     editPricePopUpSection.style.display="flex"
//     fullResitSection.style.filter="blur(0.4vw)";
// }

// const hideEditPriceSection=()=>{
//     editPricePopUpSection.style.display="none"
//     fullResitSection.style.filter="blur(0vw)";
// }







// EDIT instalment POPUP SECTION SHOW / HIDE
// EDIT instalment POPUP SECTION SHOW / HIDE
// EDIT instalment POPUP SECTION SHOW / HIDE
// const editInstalmentPopUpSection= document.querySelector(".edit-instalment-section")

// const showEditInstalmentSection=()=>{
//     editInstalmentPopUpSection.style.display="flex"
//     fullResitSection.style.filter="blur(0.4vw)";
// }

// const hideEditInstalmentSection=()=>{
//     editInstalmentPopUpSection.style.display="none"
//     fullResitSection.style.filter="blur(0vw)";
// }











// INSTALLMENT TABLE FOR INTEREST AND COMPOUNDING SHOW / HIDE START
// INSTALLMENT TABLE FOR INTEREST AND COMPOUNDING SHOW / HIDE START
// INSTALLMENT TABLE FOR INTEREST AND COMPOUNDING SHOW / HIDE START

let showTableInterest=(tableId)=>{

    let tableSection= document.querySelector(`#${tableId} .side-dashed-border`)
    let tableButton= document.querySelector(`#${tableId} .collapse-button`)
    let installmentCompletedSection= document.querySelector(`#${tableId} .side-dashed-border .installment-completed`)

    if(tableSection.style.height != "auto"){
        tableSection.style.height="auto"
        tableButton.style.transform="rotate(180deg)"
        installmentCompletedSection.style.display="none"

    }

    else{
        tableSection.style.height="19.5vw"
        tableButton.style.transform="rotate(0deg)"
        installmentCompletedSection.style.display="grid"
    }
}

// INSTALLMENT TABLE FOR INTEREST AND COMPOUNDING SHOW / HIDE END
// INSTALLMENT TABLE FOR INTEREST AND COMPOUNDING SHOW / HIDE END
// INSTALLMENT TABLE FOR INTEREST AND COMPOUNDING SHOW / HIDE END





// INSTALLMENT TABLE FOR WITHOUT INTEREST SHOW / HIDE START
// INSTALLMENT TABLE FOR WITHOUT INTEREST SHOW / HIDE START
// INSTALLMENT TABLE FOR WITHOUT INTEREST SHOW / HIDE START

let showTable=(tableId)=>{

    let tableSection= document.querySelector(`#${tableId} .side-dashed-border`)
    let tableButton = document.querySelector(`#${tableId} .collapse-button`)
    let installmentCompletedSection= document.querySelector(`#${tableId} .side-dashed-border .installment-completed`)

    if(tableSection.style.height != "auto"){
        tableSection.style.height="auto"
        tableButton.style.transform="rotate(180deg)"
        installmentCompletedSection.style.display="none"
    }

    else{
        tableSection.style.height="15vw"
        tableButton.style.transform="rotate(0deg)"
        installmentCompletedSection.style.display="grid"
    }
}


// INSTALLMENT TABLE FOR WITHOUT INTEREST SHOW / HIDE END
// INSTALLMENT TABLE FOR WITHOUT INTEREST SHOW / HIDE END
// INSTALLMENT TABLE FOR WITHOUT INTEREST SHOW / HIDE END













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


















// PAID AMMOUNT EDIT SECTION SHOW / HIDE START
// PAID AMMOUNT EDIT SECTION SHOW / HIDE START
// PAID AMMOUNT EDIT SECTION SHOW / HIDE START

// const showPaidEditSection=(title, btn1, btn2)=>{
//     document.querySelector("#all-edit-section").style.display="grid";
//     fullResitSection.style.filter="blur(0.4vw)";
// }

// const hidePaidEditSection=()=>{
//     document.querySelector("#all-edit-section").style.display="none";
//     fullResitSection.style.filter="blur(0vw)";
// }



// PAID AMMOUNT EDIT SECTION SHOW / HIDE END
// PAID AMMOUNT EDIT SECTION SHOW / HIDE END
// PAID AMMOUNT EDIT SECTION SHOW / HIDE END









// INTEREST EDIT BUTTON SECTION SHOW / HIDE
// INTEREST EDIT BUTTON SECTION SHOW / HIDE
// INTEREST EDIT BUTTON SECTION SHOW / HIDE

const showEditInterestBtnSection=(x)=>{
    document.querySelector(`.${x}`).style.display="grid"
}

const hideEditInterestBtnSection=(x)=>{
    document.querySelector(`.${x}`).style.display="none"
}





// const showEditInterestBtnSections = (x) => {
//     x.querySelector(".interest-edit-btn").style.display="grid"
// }


// const hideEditInterestBtnSections=(x)=>{
//     x.parentElement.parentElement.querySelector(".interest-edit-btn").style.display = "none"
//     console.log(x.parentElement);
// }











// All EDIT SECTION SHOW / HIDE
// All EDIT SECTION SHOW / HIDE
// All EDIT SECTION SHOW / HIDE

// const showEditSection=(hiddenSection,mainSection)=>{
//     document.querySelector(`#${hiddenSection}`).style.display="grid"
//     fullResitSection.style.filter="blur(0.4vw)";
//     // window.scrollTo(0, 600);
//     // window.screenTop
// }

// const hideEditSection=(hiddenSection,mainSection)=>{
//     document.querySelector(`#${hiddenSection}`).style.display="none"
//     fullResitSection.style.filter="blur(0vw)";
// }






// All Loading Popup section start
// All Loading Popup section start
// All Loading Popup section start


// const showAllLoadingSection=(title)=>{
//     document.querySelector(`#all-loading-pop-up`).style.display="flex"
//     document.querySelector('#all-loading-pop-up .loading-animation-title').innerHTML=title;
//     fullResitSection.style.filter="blur(0.4vw)";
// }


// const hideAllLoadingSection=()=>{
//     document.querySelector(`#all-loading-pop-up`).style.display="none"
//     fullResitSection.style.filter="blur(0vw)";
// }


// All Loading Popup section end
// All Loading Popup section end
// All Loading Popup section end









// DROPDOWN MENU SECTION FOR PRICE STATUS (for package resit) 
// DROPDOWN MENU SECTION FOR PRICE STATUS (for package resit)
// DROPDOWN MENU SECTION FOR PRICE STATUS (for package resit)
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
        p = 1;
    }

    else{
        priceDropDownSection.style.display="none";
        p=0;
    }
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

//         paymentDropDownSection(); // To close the dropdown section 
//     }
//     x.stopPropagation();
// })



// // DROPDOWN MENU OPEN / CLOSE FOR PAYMENT
// let d=0;
// const paymentDropDownSection=()=>{
//     if(d===0){
//         dropDownSection.style.display="grid"
//         d=1;
//     }

//     else{
//         dropDownSection.style.display="none"
//         d = 0;
        
//     }
// }




