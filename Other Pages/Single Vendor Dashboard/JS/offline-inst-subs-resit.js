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














// INTEREST EDIT BUTTON SECTION SHOW / HIDE
// INTEREST EDIT BUTTON SECTION SHOW / HIDE
// INTEREST EDIT BUTTON SECTION SHOW / HIDE

const showEditInterestBtnSection=(x)=>{
    document.querySelector(`.${x}`).style.display="grid"
}

const hideEditInterestBtnSection=(x)=>{
    document.querySelector(`.${x}`).style.display="none"
}

















