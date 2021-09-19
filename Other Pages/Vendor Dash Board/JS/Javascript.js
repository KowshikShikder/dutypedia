// SIDE BAR CLOSE & OPEN START
// SIDE BAR CLOSE & OPEN START
// SIDE BAR CLOSE & OPEN START

const vendorSection= document.querySelector(".vendor-section");


const vendorAbout= document.querySelector(".vendor-section .vendor-about");
const vendorName= document.querySelector(".vendor-section .vendor-navigation-icon span");

const shadowRemover= document.querySelector(".shadow-remover");
const fullScreenSection= document.querySelector(".full-screen-section");

const clientSection= document.querySelector(".client-section")
const clientImageSection= document.querySelector(".client-section-image-section")
const clientInfoSection= document.querySelector(".clients-more-info-section")

const appointmentSection= document.querySelector(".appointment-section")



vendorSection.addEventListener('mouseover', function(){
    vendorSection.style.width="16.7vw"
    shadowRemover.style.width="16.7vw"

    vendorAbout.style.display="grid"
    vendorName.style.display="grid"

    fullScreenSection.classList.add('full-screen-section-width-class')
    clientSection.style.cssText="width:30vw; height:75vw"
    clientImageSection.style.cssText="width:23vw; height:22vw"
    clientInfoSection.style.cssText="width:23vw; height:22vw"
    appointmentSection.style.cssText="width:23vw; height:22vw"

    // ClientMoreInfoSection.style.display="block" //on Check
})



vendorSection.addEventListener('mouseout', function(){
    vendorSection.style.width="4vw"
    vendorAbout.style.display="none"
    vendorName.style.display="grid"
    shadowRemover.style.width="4vw"
    fullScreenSection.classList.remove('full-screen-section-width-class')    

    clientSection.style.cssText="width:36vw; height:88vw"
    clientImageSection.style.cssText="width:30vw; height:26vw"
    clientInfoSection.style.cssText="width:30vw; height:26vw"
    appointmentSection.style.cssText="width:30vw; height:26vw"

    // ClientMoreInfoSection.style.display="block" //on Check
})


// SIDE BAR CLOSE & OPEN END
// SIDE BAR CLOSE & OPEN END
// SIDE BAR CLOSE & OPEN END














// SIDE BAR DROPDOWN SECTION START
// SIDE BAR DROPDOWN SECTION START
// SIDE BAR DROPDOWN SECTION START


// All In One
// All In One
// All In One

const sideBarMenuToggle=(sideId)=>{

const toggleButton = document.querySelector(`#${sideId}`)
const toggleOption = toggleButton.previousElementSibling.querySelector('div')

    if(toggleButton.innerHTML === '+'){
        toggleButton.innerHTML = '-'
        toggleOption.style.display="grid"
    }


    else{
        toggleButton.innerHTML = '+'
        toggleOption.style.display="none"

    }
}














// const toggleButtton1 = document.querySelector('#vendor-toggle-service1')
// const toggleOption1  = document.querySelector('#vendor-toggle-service1').previousElementSibling.querySelector('div')


// toggleButtton1.addEventListener('click', function(){

//     if(toggleButtton1.innerHTML === '+'){
//         toggleButtton1.innerHTML = '-'
//         toggleOption1.style.display="grid"

//     }
//     else{
//         toggleButtton1.innerHTML = '+'
//         toggleOption1.style.display="none"
//     }
// })






const toggleButtton2 = document.querySelector('#vendor-toggle-service2')
const toggleOption2  = document.querySelector('#vendor-toggle-service2').previousElementSibling.querySelector('div')


toggleButtton2.addEventListener('click', function(){

    if(toggleButtton2.innerHTML === '+'){
        toggleButtton2.innerHTML = '-'
        toggleOption2.style.display="grid"
    }
    else{
        toggleButtton2.innerHTML = '+'
        toggleOption2.style.display="none"
    }
})








const toggleButtton3 = document.querySelector('#vendor-toggle-service3')
const toggleOption3  = document.querySelector('#vendor-toggle-service3').previousElementSibling.querySelector('div')


toggleButtton3.addEventListener('click', function(){

    if(toggleButtton3.innerHTML === '+'){
        toggleButtton3.innerHTML = '-'
        toggleOption3.style.display="grid"
    }
    else{
        toggleButtton3.innerHTML = '+'
        toggleOption3.style.display="none"
    }
})




const toggleButtton4 = document.querySelector('#vendor-toggle-service4')
const toggleOption4  = document.querySelector('#vendor-toggle-service4').previousElementSibling.querySelector('div')

toggleButtton4.addEventListener('click', function(){

    if(toggleButtton4.innerHTML === '+'){
        toggleButtton4.innerHTML = '-'
        toggleOption4.style.display="grid"
    }
    else{
        toggleButtton4.innerHTML = '+'
        toggleOption4.style.display="none"
    }
})






const toggleButtton5 = document.querySelector('#vendor-toggle-service5')
const toggleOption5  = document.querySelector('#vendor-toggle-service5').previousElementSibling.querySelector('div')


toggleButtton5.addEventListener('click', function(){

    if(toggleButtton5.innerHTML === '+'){
        toggleButtton5.innerHTML = '-'
        toggleOption5.style.display="grid"
    }
    else{
        toggleButtton5.innerHTML = '+'
        toggleOption5.style.display="none"
    }
})





const toggleButtton6 = document.querySelector('#vendor-toggle-service6')
const toggleOption6  = document.querySelector('#vendor-toggle-service6').previousElementSibling.querySelector('div')


toggleButtton6.addEventListener('click', function(){

    if(toggleButtton6.innerHTML === '+'){
        toggleButtton6.innerHTML = '-'
        toggleOption6.style.display="grid"
    }
    else{
        toggleButtton6.innerHTML = '+'
        toggleOption6.style.display="none"
    }
})



const toggleButtton7 = document.querySelector('#vendor-toggle-service7')
const toggleOption7  = document.querySelector('#vendor-toggle-service7').previousElementSibling.querySelector('div')


toggleButtton7.addEventListener('click', function(){

    if(toggleButtton7.innerHTML === '+'){
        toggleButtton7.innerHTML = '-'
        toggleOption7.style.display="grid"
    }
    else{
        toggleButtton7.innerHTML = '+'
        toggleOption7.style.display="none"
    }
})






const toggleButtton8 = document.querySelector('#vendor-toggle-service8')
const toggleOption8  = document.querySelector('#vendor-toggle-service8').previousElementSibling.querySelector('div')


toggleButtton8.addEventListener('click', function(){

    if(toggleButtton8.innerHTML === '+'){
        toggleButtton8.innerHTML = '-'
        toggleOption8.style.display="grid"
    }
    else{
        toggleButtton8.innerHTML = '+'
        toggleOption8.style.display="none"
    }
})







const toggleButtton9 = document.querySelector('#vendor-toggle-service9')
const toggleOption9  = document.querySelector('#vendor-toggle-service9').previousElementSibling.querySelector('div')


toggleButtton9.addEventListener('click', function(){
    if(toggleButtton9.innerHTML === '+'){
        toggleButtton9.innerHTML = '-'
        toggleOption9.style.display="grid"
    }
    else{
        toggleButtton9.innerHTML = '+'
        toggleOption9.style.display="none"
    }
})

// SIDE BAR DROPDOWN SECTION END
// SIDE BAR DROPDOWN SECTION END
// SIDE BAR DROPDOWN SECTION END









// Clients Information START
// Clients Information START
// Clients Information START

const clientsInfoOne= document.querySelector('.clients-more-info-1-parent')
const clientsInfoTwo= document.querySelector('.clients-more-info-2-parent')

const newNoteSection= document.querySelector('.new-note-section')

const infoButton= document.querySelector('.info')
const descButton= document.querySelector('.desc')




// Client Information NAVIGATION
// Client Information NAVIGATION

const infoOne=()=>{
    clientsInfoOne.style.display="block"
    clientsInfoTwo.style.display="none"
    infoButton.classList.add('clients-information-active-button')
    descButton.classList.remove('clients-information-active-button')
}

const infoTwo=()=>{
    clientsInfoOne.style.display="none"
    clientsInfoTwo.style.display="block"
    infoButton.classList.remove('clients-information-active-button')
    descButton.classList.add('clients-information-active-button')
}



// Edit Information
// Edit Information

// Main Container of More info
const ClientMoreInfoSection = document.querySelector(".clients-more-info-section")
const ClientMoreInfoContainer = document.querySelector(".clients-more-info-container")


const clientMoreNavButton= document.querySelector(".clients-more-info-button-container")



// SHOW EDIT INFORMATION SECTION
const editInfoButton=()=>{
    clientMoreNavButton.style.display="none"
    ClientMoreInfoContainer.style.display="none"
    document.querySelector(".edit-information-section").style.display="grid"
    ClientMoreInfoSection.style.display="block"
}


// HIDE EDIT INFORMATION SECTION
const infoEdited=()=>{
    clientMoreNavButton.style.display="flex"
    ClientMoreInfoContainer.style.display="block"
    document.querySelector(".edit-information-section").style.display="none"
    ClientMoreInfoSection.style.display="grid"
}







// NEW NOTE OPEN
// NEW NOTE OPEN
const newNoteButton=()=>{
    clientMoreNavButton.style.filter="blur(0.6vw)"
    ClientMoreInfoContainer.style.filter="blur(0.6vw)"
    newNoteSection.style.display="grid"

    ClientMoreInfoSection.style.display="block"
}



// NEW NOTE CLOSE
// NEW NOTE CLOSE
const newNoteDone=()=>{
    clientMoreNavButton.style.filter="blur(0vw)"
    ClientMoreInfoContainer.style.filter="blur(0vw)"
    newNoteSection.style.display="none"
    ClientMoreInfoSection.style.display="grid"
}









// Note REMINDER SECTION

const noteReminderSection= document.querySelector(".note-reminder-section");

// SHOW NOTE REMINDER AND BLUR BACKGROUND
const showNoteReminder=()=>{
    clientMoreNavButton.style.filter="blur(0.6vw)"
    ClientMoreInfoContainer.style.filter="blur(0.6vw)"

    ClientMoreInfoSection.style.display="block"
    noteReminderSection.style.display="block"
}


// HIDE NOTE REMINDER AND REMOVE BLUR FROM BACKGROUND
const hideNoteReminder=()=>{
    clientMoreNavButton.style.filter="blur(0vw)"
    ClientMoreInfoContainer.style.filter="blur(0vw)"

    ClientMoreInfoSection.style.display="grid"
    noteReminderSection.style.display="none"
}




// // NOTE NUMBER INCREMENT / DECREMENT
//     const noteTime= document.querySelector("#note-time")

//     const incrementNoteTime=()=>{
//         let noteTimeValue;
//         noteTimeValue= noteTime.value;
//         noteTimeValue++
//         noteTime.value = noteTimeValue;
//     }

//     const decrementNoteTime=()=>{
//         if (noteTime.value <= 0) {
//             noteTime.value=0;
//         }

//         else{
//             noteTimeValue= noteTime.value;
//             noteTimeValue--
//             noteTime.value = noteTimeValue;
//         }
//     }








// NOTE DESCRIPTION SECTION
// NOTE DESCRIPTION SECTION
// NOTE DESCRIPTION SECTION

const noteDescription= document.querySelector(".note-description-section")
const noteThreeDots= document.querySelector(".three-dots-note-container")

// SHOW NOTE DESCRIPTION
const showNoteDescription=()=>{
    noteDescription.style.display="grid"
    noteThreeDots.style.display="none"
} 


// HIDE NOTE DESCRIPTION
const hideNoteDescription=()=>{
    noteDescription.style.display="none"
    noteThreeDots.style.display="grid"
} 









// DELETE NOTE DESCRIPTION
const deleteNoteSection= document.querySelector(".note-description-delete-section")


// SHOW NOTE DESCRIPTION SECTION
const showDeleteDescription=()=>{
    deleteNoteSection.style.display="grid"
    noteDescription.style.filter="blur(0.6vw)"
    clientMoreNavButton.style.filter="blur(0.6vw)"
}


// HIDE NOTE DESCRIPTION SECTION
const hideDeleteDescription=()=>{
    deleteNoteSection.style.display="none"
    noteDescription.style.filter="blur(0vw)"
    clientMoreNavButton.style.filter="blur(0vw)"
    noteDescription.style.display="none"
    noteThreeDots.style.display="grid"
}



// Clients Information END
// Clients Information END
// Clients Information END




















// APPOINTMENT SECTION START
// APPOINTMENT SECTION START
// APPOINTMENT SECTION START

const upcomingAppointment=document.querySelector(".appoinment-container-upcoming").style;
const previousAppointment=document.querySelector(".appoinment-container-previous").style;
const requestAppointment=document.querySelector(".appoinment-container-request").style;

const appointmentButtonUpcoming=document.querySelector(".appointment-nav-upcoming");
const appointmentButtonPrevious=document.querySelector(".appointment-nav-previous");
const appointmentButtonRequest=document.querySelector(".appointment-nav-request");

// APPOINTMENT NAVIGATION
// default
appointmentButtonUpcoming.classList.add("appointment-nav-bar-active")


// SHOW UPCOMING APPOINTMENT
const showUpComingAppointment=()=>{
    upcomingAppointment.display="grid"
    previousAppointment.display="none"
    requestAppointment.display="none"
    previousSectionDescription.style.display="none"

    appointmentButtonUpcoming.classList.add("appointment-nav-bar-active")
    appointmentButtonPrevious.classList.remove("appointment-nav-bar-active")
    appointmentButtonRequest.classList.remove("appointment-nav-bar-active")


} 


// SHOW PREVIOUS APPOINTMENT
const showPreviousAppointment=()=>{
    upcomingAppointment.display="none"
    previousAppointment.display="grid"
    requestAppointment.display="none"
    upcomingSectionDescription.style.display="none"

    appointmentButtonUpcoming.classList.remove("appointment-nav-bar-active")
    appointmentButtonPrevious.classList.add("appointment-nav-bar-active")
    appointmentButtonRequest.classList.remove("appointment-nav-bar-active")
} 



// SHOW REQUEST APPOINTMENT
const showRequestAppointment=()=>{
    upcomingAppointment.display="none"
    previousAppointment.display="none"
    requestAppointment.display="grid"
    upcomingSectionDescription.style.display="none"
    previousSectionDescription.style.display="none"
    
    appointmentButtonUpcoming.classList.remove("appointment-nav-bar-active")
    appointmentButtonPrevious.classList.remove("appointment-nav-bar-active")
    appointmentButtonRequest.classList.add("appointment-nav-bar-active")
} 






// UPCOMING APPOINTMENT DESCRIPTION
const upcomingSectionDescription= document.querySelector(".appointment-upcoming-description-section") 

const showUpcomingSectionDescription=()=>{
    upcomingSectionDescription.style.display="block"
}

const hideUpcomingSectionDescription=()=>{
    upcomingSectionDescription.style.display="none"
}






// Previous APPOINTMENT DESCRIPTION
const previousSectionDescription= document.querySelector(".appointment-previous-description-section") 

const showPreviousSectionDescription=()=>{
    previousSectionDescription.style.display="block"
}

const hidePreviousSectionDescription=()=>{
    previousSectionDescription.style.display="none"
}












// REQUEST APPOINTMENT NAVIGATION
const requestSentButton= document.querySelector(".appoinment-request-nav-sent") 
const requestReceivedButton= document.querySelector(".appoinment-request-nav-received")

const requestSentSection= document.querySelector(".sent-request-section")
const requestReceivedSection= document.querySelector(".received-request-section")


requestSentButton.classList.add("appoinment-request-nav-active-button")


// SHOW REQUEST SENT SECTION
const showRequestSentSection=()=>{
    requestSentButton.classList.add("appoinment-request-nav-active-button")
    requestReceivedButton.classList.remove("appoinment-request-nav-active-button")

    requestSentSection.style.display="grid"
    requestReceivedSection.style.display="none"

} 



// REQUEST SENT APPOINTMENT DESCRIPTION
const requestSentDescription= document.querySelector(".appointment-sent-description-section") 

const showRequestSentDescription=()=>{
    requestSentDescription.style.display="block"
}

const hideRequestSentDescription=()=>{
    requestSentDescription.style.display="none"
}






// NEW APPOINTMENT
// NEW APPOINTMENT


const newAppointment= document.querySelector(".new-appoinment-section")

const showNewAppointmentSection=()=>{
    newAppointment.style.display="grid"
}

const hideNewAppointmentSection=()=>{
    newAppointment.style.display="none"
}



const showRequestReceivedSection=()=>{
    requestReceivedButton.classList.add("appoinment-request-nav-active-button")
    requestSentButton.classList.remove("appoinment-request-nav-active-button")

    requestReceivedSection.style.display="grid"
    requestSentSection.style.display="none"
}



// NEW APPOINTMENT INCREMENT / DECREMENT

// one
const newAppointmentTime1= document.querySelector("#new-appo-time1");

const incrementAppointment1=()=>{

    let newAppointmentValue1;
    newAppointmentValue1= newAppointmentTime1.value;

    newAppointmentValue1++
    newAppointmentTime1.value = newAppointmentValue1;
}


const decrementAppointment1=()=>{

    if (newAppointmentTime1.value <= 0) {
        newAppointmentTime1.value=0;
    }

    else{
        newAppointmentValue1= newAppointmentTime1.value;
        newAppointmentValue1--
        newAppointmentTime1.value = newAppointmentValue1;
    }
}




// Two
const newAppointmentTime2= document.querySelector("#new-appo-time2");

const incrementAppointment2=()=>{

    let newAppointmentValue2;
    newAppointmentValue2= newAppointmentTime2.value;

    newAppointmentValue2++
    newAppointmentTime2.value = newAppointmentValue2;
}


const decrementAppointment2=()=>{

    if (newAppointmentTime2.value <= 0) {
        newAppointmentTime2.value=0;
    }

    else{
        newAppointmentValue2= newAppointmentTime2.value;
        newAppointmentValue2--
        newAppointmentTime2.value = newAppointmentValue2;
    }
}















// REQUEST RECEIVED APPOINTMENT DESCRIPTION
const requestReceivedDescription= document.querySelector(".appointment-request-description-section") 

const showRequestReceivedDescription=()=>{
    requestReceivedDescription.style.display="block"

}

const hideRequestReceivedDescription=()=>{
    requestReceivedDescription.style.display="none"

}







// Cancel Appointment
// Cancel Appointment
const appointmentTitle= document.querySelector(".appoinment-title")


const cancelAppo1=()=>{
    document.querySelector(".cancel-appo-btn1").style.display="grid"
}

const cancelAppo2=()=>{
    document.querySelector(".cancel-appo-btn2").style.display="grid"
}

const cancelAppo3=()=>{
    document.querySelector(".cancel-appo-btn3").style.display="grid"
}

const cancelAppo4=()=>{
    document.querySelector(".cancel-appo-btn4").style.display="grid"
}

const cancelAppo5=()=>{
    document.querySelector(".cancel-appo-btn5").style.display="grid"
}

const cancelAppo6=()=>{
    document.querySelector(".cancel-appo-btn6").style.display="grid"
}





// Blur Appoinment section

const cancelAppoButton=()=>{
    document.querySelector(".permission-to-cancel-appo-section").style.display="flex"
    
    appointmentTitle.style.filter="blur(0.3vw)"
    appointmentTitle.nextElementSibling.style.filter="blur(0.3vw)"
    appointmentTitle.nextElementSibling.nextElementSibling.style.filter="blur(0.3vw)"


    for(var x=0 ; x<10 ; x++){
    document.querySelectorAll(".cancel-appo-btn")[x].style.display="none"
    console.log(`Closed ${x}`)
    }
}



closeCancelSection=()=>{
    document.querySelector(".permission-to-cancel-appo-section").style.display="none"

    appointmentTitle.style.filter="blur(0vw)"
    appointmentTitle.nextElementSibling.style.filter="blur(0vw)"
    appointmentTitle.nextElementSibling.nextElementSibling.style.filter="blur(0vw)"
    appoUpcomingDescriptionSection.style.filter="blur(0vw)";

}









// Cancel Appointment from appo description
const appoUpcomingDescriptionSection= document.querySelector(".appointment-upcoming-description-section");

const cancelAppoButtonFromDescription=()=>{
    document.querySelector(".permission-to-cancel-appo-section").style.display="flex";
    appointmentTitle.style.filter="blur(0.3vw)"
    appointmentTitle.nextElementSibling.style.filter="blur(0.3vw)"
    appoUpcomingDescriptionSection.style.filter="blur(0.3vw)";

}














































// Vendor Resit Section
// Vendor Resit Section

const swiper1 = new Swiper('.vendor-dashboard', {

    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
        slidesPerView: 5,
  });
  











// Vendor Resit Section
// Vendor Resit Section

document.querySelector('#resit').src="./All Resits/offline resit/demo-installment.html"



const bargaining=()=>{
document.querySelector('#resit').src="./All Resits/bargaining-resit.html"
}


const fixed=()=>{
    document.querySelector('#resit').src="./All Resits/fixed-resit.html"
}


const installment=()=>{
    document.querySelector('#resit').src="./All Resits/offline resit/installment-resit-offline.html"
}


const subscription=()=>{
    document.querySelector('#resit').src="./All Resits/subscription-resit.html"
}


const package=()=>{
    document.querySelector('#resit').src="./All Resits/package-resit.html"
}


const fixedOffline=()=>{
    document.querySelector('#resit').src="./All Resits/offline resit/fixed-resit-offline.html"
}


const packageOffline=()=>{
    document.querySelector('#resit').src="./All Resits/offline resit/package-resit-offline.html"
}


const preferredButtonLenth= document.querySelectorAll(".preferred-button").length


// Button Decoration
// Button Decoration
const showMe=()=>{
    for(let x=0; x<preferredButtonLenth; x++ ){

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
    for(let x=0; x<preferredButtonLenth; x++ ){

        const preferredButton= document.querySelectorAll(".preferred-buttons")[x]
        preferredButton.classList.replace("btn-danger","btn-outline-danger")

        preferredButton.previousElementSibling.addEventListener('mouseout', function(){
        preferredButton.classList.replace("btn-outline-danger","btn-danger")
    })
    }
}
