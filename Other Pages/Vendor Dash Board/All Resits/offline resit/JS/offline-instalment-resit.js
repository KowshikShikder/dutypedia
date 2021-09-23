





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




// INSTALLMENT TABLE SHOW / HIDE START
// INSTALLMENT TABLE SHOW / HIDE START
// INSTALLMENT TABLE SHOW / HIDE START

let i=0;
let showTable=(tableId)=>{

    let tableSection= document.querySelector(`#${tableId} .side-dashed-border`)
    let tableButton= document.querySelector(`#${tableId} .collapse-button`)

    if(i === 0){
        tableSection.style.height="auto"
        tableButton.style.transform="rotate(180deg)"
        
        i=1;
    }

    else{
        tableSection.style.height="15vw"
        tableButton.style.transform="rotate(0deg)"
        
        i=0;
    }
}

// INSTALLMENT TABLE SHOW / HIDE END
// INSTALLMENT TABLE SHOW / HIDE END
// INSTALLMENT TABLE SHOW / HIDE END



// INSTALLMENT INTEREST TABLE SHOW / HIDE START
// INSTALLMENT INTEREST TABLE SHOW / HIDE START
// INSTALLMENT INTEREST TABLE SHOW / HIDE START

let j=0;
let showTableInterest=(tableId)=>{

    let tableSection= document.querySelector(`#${tableId} .side-dashed-border`)
    let tableButton= document.querySelector(`#${tableId} .collapse-button`)

    if(j === 0){
        tableSection.style.height="auto"
        tableButton.style.transform="rotate(180deg)"
        
        j=1;
    }

    else{
        tableSection.style.height="19.5vw"
        tableButton.style.transform="rotate(0deg)"
        
        j=0;
    }
}

// INSTALLMENT INTEREST TABLE SHOW / HIDE END
// INSTALLMENT INTEREST TABLE SHOW / HIDE END
// INSTALLMENT INTEREST TABLE SHOW / HIDE END














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










// INSTALMENT + INTEREST

// All EDIT SECTION SHOW / HIDE
// All EDIT SECTION SHOW / HIDE
// All EDIT SECTION SHOW / HIDE

const showEditSection=(hiddenSection,mainSection)=>{
    document.querySelector(`#${hiddenSection}`).style.display="grid"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideEditSection=(hiddenSection,mainSection)=>{
    document.querySelector(`#${hiddenSection}`).style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}








// PAID AMMOUNT EDIT SECTION SHOW / HIDE START
// PAID AMMOUNT EDIT SECTION SHOW / HIDE START
// PAID AMMOUNT EDIT SECTION SHOW / HIDE START

const showAllEditSection=(title, btn1, btn2)=>{
    document.querySelector("#all-edit-section div .edit-price-title").innerHTML=title;
    document.querySelector("#all-edit-section .edit-price-button-container .btn-1").innerHTML=btn1;
    document.querySelector("#all-edit-section .edit-price-button-container .btn-2").innerHTML=btn2;

    document.querySelector("#all-edit-section").style.display="grid";
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideAllEditSection=()=>{
    document.querySelector("#all-edit-section").style.display="none";
    fullResitSection.style.filter="blur(0vw)";
}



// PAID AMMOUNT EDIT SECTION SHOW / HIDE END
// PAID AMMOUNT EDIT SECTION SHOW / HIDE END
// PAID AMMOUNT EDIT SECTION SHOW / HIDE END









// Universal Loading Popup section start
// Universal Loading Popup section start
// Universal Loading Popup section start


const showAllLoadingSection=(title)=>{
    document.querySelector(`#all-loading-pop-up`).style.display="flex"
    document.querySelector('#all-loading-pop-up .loading-animation-title').innerHTML=title;
    fullResitSection.style.filter="blur(0.4vw)";
}


const hideAllLoadingSection=()=>{
    document.querySelector(`#all-loading-pop-up`).style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}


// Universal Loading Popup section end
// Universal Loading Popup section end
// Universal Loading Popup section end


















