






// Delivery Confirmation section
const deliveryPopUpSection= document.querySelector(".delivery-confirm-pop-up")
const fullResitSection= document.querySelector(".fixed-resit-section")

const showDeliveryPopUp=()=>{
    deliveryPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideDeliveryPopUp=()=>{
    deliveryPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}










// CANCEL BEFORE PAYMENT SECTION
const cancelBeforePaymentPopUpSection= document.querySelector(".cancel-before-payment-pop-up")

const showCancelBeforePaymentSection=()=>{
    cancelBeforePaymentPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideCancelBeforePaymentSection=()=>{
    cancelBeforePaymentPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}











// CANCEL AFTER PAYMENT SECTION
const cancelAfterPaymentPopUpSection= document.querySelector(".cancel-after-payment-pop-up")

const showCancelAfterPaymentSection=()=>{
    cancelAfterPaymentPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideCancelAfterPaymentSection=()=>{
    cancelAfterPaymentPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}












// NEW DELIVERY DATE SECTION
const newDeliveryDatePopUpSection= document.querySelector(".new-delivery-date-pop-up")

const showNewDeliveryDateSection=()=>{
    newDeliveryDatePopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideNewDeliveryDateSection=()=>{
    newDeliveryDatePopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}










// DELIVERY REQUEST SENT SECTION
const deliveryRequestSentPopUpSection= document.querySelector(".request-sent-pop-up")

const showDeliveryRequestSentSection=()=>{
    deliveryRequestSentPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideDeliveryRequestSentSection=()=>{
    deliveryRequestSentPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}










// ORDER CANCELED SUCCESSFULLY
const orderCanceledSuccessPopUpSection= document.querySelector(".order-cancel-success-pop-up")

const showOrderCanceledSuccessSection=()=>{
    orderCanceledSuccessPopUpSection.style.display="flex"
    fullResitSection.style.filter="blur(0.4vw)";
}

const hideOrderCanceledSuccessSection=()=>{
    orderCanceledSuccessPopUpSection.style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}













// CLIENT REQUEST TO CANCEL ORDER
const requestToCancelOrderSection= document.querySelector(".client-request-cancel-order-section")

const clientRequestToCancelSection=()=>{
    requestToCancelOrderSection.style.display="none"
}












// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start
// TRial 2nd time upgrade start



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



// All Loading Popup section start
// All Loading Popup section start
// All Loading Popup section start


const showAllLoadingSection=(title)=>{
    document.querySelector(`#all-loading-pop-up`).style.display="flex"
    document.querySelector('#all-loading-pop-up .loading-animation-title').innerHTML=title;
    fullResitSection.style.filter="blur(0.4vw)";
}


const hideAllLoadingSection=()=>{
    document.querySelector(`#all-loading-pop-up`).style.display="none"
    fullResitSection.style.filter="blur(0vw)";
}


// All Loading Popup section end
// All Loading Popup section end
// All Loading Popup section end








// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end
// TRial 2nd time upgrade end






























// Button Decoration
// Button Decoration

const showMe=()=>{
    for(let x=0; x<5; x++ ){

        const preferredButton= document.querySelectorAll(".preferred-button")[x]
        preferredButton.nextElementSibling.addEventListener('mouseover', function(){
        preferredButton.classList.replace("btn-danger","btn-outline-danger")
    })

        preferredButton.nextElementSibling.addEventListener('mouseout', function(){
        preferredButton.classList.replace("btn-outline-danger","btn-danger")
    })
    }
}



const beforeButton=()=>{
    for(let x=0; x<4; x++ ){

        const preferredButton= document.querySelectorAll(".preferred-buttons")[x]
        preferredButton.classList.replace("btn-danger","btn-outline-danger")

        preferredButton.previousElementSibling.addEventListener('mouseout', function(){
        preferredButton.classList.replace("btn-outline-danger","btn-danger")
    })
    }
}











// PRINT RESIT
// PRINT RESIT
// PRINT RESIT
const serviceItemTable= document.querySelector(".vendor-resit-section-two .service-items")
const installmentTable= document.querySelector(".installment-table-container-parent")

const printResit=()=>{
    serviceItemTable.style.cssText="height:100%; border-bottom:none"
    installmentTable.style.height="auto"
    

    for(let x=0; x<10; x++){

    const tableWidth= document.querySelectorAll(".vendor-resit-section-two table")[x]
    tableWidth.style.width="98%"

}
}





