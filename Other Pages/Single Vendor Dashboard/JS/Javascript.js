// SIDE BAR CLOSE & OPEN START
// SIDE BAR CLOSE & OPEN START
// SIDE BAR CLOSE & OPEN START

const vendorSection= document.querySelector(".vendor-section");


const vendorAbout= document.querySelector(".vendor-section .vendor-about");
const vendorName= document.querySelector(".vendor-section .vendor-navigation-icon span");

const shadowRemover= document.querySelector(".shadow-remover");
const fullScreenSection= document.querySelectorAll(".full-screen-section");


const clientSection = document.querySelectorAll(".client-section")

const clientImageSection= document.querySelectorAll(".client-section-image-section")
const clientInfoSection= document.querySelectorAll(".clients-more-info-section")
const appointmentSection = document.querySelectorAll(".appointment-section")

const dropdownSection=  document.querySelectorAll(".vendor-nav-more")



vendorSection.addEventListener('mouseover', function(){
    shadowRemover.style.width="20vw"

    for (x = 0; x < fullScreenSection.length; x++){
        fullScreenSection[x].classList.add('full-screen-section-width-class')

        clientSection[x].style.cssText = "width:30vw; height:75vw"


        let hoverAfter = "width:23vw; height:22vw"

        clientImageSection[x].style.cssText= hoverAfter;
        clientInfoSection[x].style.cssText= hoverAfter;
        appointmentSection[x].style.cssText= hoverAfter;
    }






    // Open opened toggle
    for (i = 0; i < dropdownSection.length; i++){
        document.querySelectorAll(".vendor-nav-more")[i].style.height = "auto";
        document.querySelectorAll(".vendor-nav-more")[i].style.opacity = "1";
    }

    // clientSection.style.cssText = "width:30vw; height:75vw"

    // let hoverAfter="width:23vw; height:22vw"
    // clientImageSection.style.cssText= hoverAfter;
    // clientInfoSection.style.cssText= hoverAfter;
    // appointmentSection.style.cssText= hoverAfter;

    // ClientMoreInfoSection.style.display="block" //on Check
})



vendorSection.addEventListener('mouseout', function(){
    shadowRemover.style.width = "4vw"
    
    for (x = 0; x < fullScreenSection.length; x++){
        fullScreenSection[x].classList.remove('full-screen-section-width-class')



        clientSection[x].style.cssText = "width:36vw; height:88vw";


        let hoverBefore = "width:30vw; height:26vw";
        
        clientImageSection[x].style.cssText= hoverBefore;
        clientInfoSection[x].style.cssText= hoverBefore;
        appointmentSection[x].style.cssText= hoverBefore;




    }

    // fullScreenSection.classList.remove('full-screen-section-width-class')
    
    // Close opened toggle
    for (i = 0; i < dropdownSection.length; i++){
        document.querySelectorAll(".vendor-nav-more")[i].style.height = "0vw";
        document.querySelectorAll(".vendor-nav-more")[i].style.opacity = "0";
    }



    // clientSection.style.cssText="width:36vw; height:88vw"


    // let hoverBefore = "width:30vw; height:26vw"
    
    // clientImageSection.style.cssText= hoverBefore;
    // clientInfoSection.style.cssText= hoverBefore;
    // appointmentSection.style.cssText= hoverBefore;

    // ClientMoreInfoSection.style.display="block" //on Check
})


// SIDE BAR CLOSE & OPEN END
// SIDE BAR CLOSE & OPEN END
// SIDE BAR CLOSE & OPEN END













// SIDE BAR DROPDOWN SECTION START
// SIDE BAR DROPDOWN SECTION START
// SIDE BAR DROPDOWN SECTION START


// const sideBarMenuToggle=(sideId)=>{

// const toggleButton = document.querySelector(`#${sideId}`)

// const toggleOption = toggleButton.previousElementSibling.querySelector('div')

//         // Close All other toggled bar
//         // Close All other toggled bar
//         let sideArray=["side-menu1","side-menu2","side-menu3","side-menu4","side-menu5",]

//         sideArray.map((x)=>{
//             let newToggleButton= document.querySelector(`#${x}`);

//             if(newToggleButton !== toggleButton){
//                 let newToggleOption= newToggleButton.previousElementSibling.querySelector('div');        
//                 newToggleButton.innerHTML = '+'
//                 newToggleOption.style.display="none"
//             }
//         })


//         // Open toggle bar
//         if(toggleButton.innerHTML === '+'){
//             toggleButton.innerHTML = '-'
//             toggleOption.style.display="grid"
//             console.log("I am clicked1")
//         }
        
//         // Close opened toggle bar
//         else{
//             toggleButton.innerHTML = '+'
//             toggleOption.style.display="none"
//             console.log("I am clicked2")
//         }
        

// }


let plusIcon =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8.146 6.955" > <g id="plus" transform="translate(-442.5 -965)"> <line id="Line_771" data-name="Line 771" x2="7.146" transform="translate(443 968.478)" stroke-linecap="round" stroke-width="1" /> <line id="Line_772" data-name="Line 772" y2="5.955" transform="translate(446.572 965.5)" stroke-linecap="round" stroke-width="1" /> </g> </svg>`
let minusIcon=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8.146 6.955" > <line id="minus" x2="8" transform="translate(0.5 0.5)" fill="red" stroke-linecap="round" stroke-width="1"/> </svg>`


const sideBarMenuToggle=(sideId)=>{

    const toggleButton = document.querySelector(`#${sideId}`)
    
    const toggleOption = toggleButton.querySelector('.vendor-nav-more')
    const modeDataButton = toggleButton.querySelector('.vendor-nav-btn')


        // Close All other toggled bar
        // Close All other toggled bar
        let sideArray=["side-nav1","side-nav2","side-nav3","side-nav4","side-nav5","side-nav6","side-nav7","side-nav8","side-nav9","side-nav10"]

        sideArray.map((x)=>{
            let newToggleButton= document.querySelector(`#${x}`);

            if(newToggleButton !== toggleButton){
                let newToggleOption= newToggleButton.querySelector('.vendor-nav-more');        
                newToggleOption.style.display="none"
                newToggleButton.querySelector('.vendor-nav-btn').innerHTML=plusIcon;
            }
        })

            // Open toggle bar
            if(toggleOption.style.display === "none"){
                toggleOption.style.display = "grid"
                toggleOption.style.height="auto"
                toggleOption.style.opacity = "1"
                toggleButton.querySelector('.vendor-nav-btn').innerHTML=minusIcon;
                
            }
            
            // Close opened toggle bar
            else{
                toggleOption.style.display = "none"
                toggleButton.querySelector('.vendor-nav-btn').innerHTML=plusIcon;
            }
            
    
    }



// SIDE BAR DROPDOWN SECTION END
// SIDE BAR DROPDOWN SECTION END
// SIDE BAR DROPDOWN SECTION END






























// Clients Information START
// Clients Information START
// Clients Information START

const clientsInfoOne= document.querySelectorAll('.clients-more-info-1-parent')
const clientsInfoTwo= document.querySelectorAll('.clients-more-info-2-parent')

const infoButton= document.querySelectorAll('.info')
const descButton= document.querySelectorAll('.desc')




// Client Information NAVIGATION
// Client Information NAVIGATION

const infoOne=()=>{

    for (i = 0; i < clientsInfoOne.length; i++){
        
        clientsInfoOne[i].style.display="block"
        clientsInfoTwo[i].style.display="none"
        infoButton[i].classList.add('clients-information-active-button')
        descButton[i].classList.remove('clients-information-active-button')

    }

    // clientsInfoOne.style.display="block"
    // clientsInfoTwo.style.display="none"
    // infoButton.classList.add('clients-information-active-button')
    // descButton.classList.remove('clients-information-active-button')
}

const infoTwo=()=>{

    for (i = 0; i < clientsInfoOne.length; i++) {
        clientsInfoOne[i].style.display="none"
        clientsInfoTwo[i].style.display="block"
        infoButton[i].classList.remove('clients-information-active-button')
        descButton[i].classList.add('clients-information-active-button')
    }


    // clientsInfoOne.style.display="none"
    // clientsInfoTwo.style.display="block"
    // infoButton.classList.remove('clients-information-active-button')
    // descButton.classList.add('clients-information-active-button')
}



// Edit Information
// Edit Information

// Main Container of More info
const ClientMoreInfoSection = document.querySelectorAll(".clients-more-info-section")
const ClientMoreInfoContainer = document.querySelectorAll(".clients-more-info-container")
const editInfoSection= document.querySelectorAll(".edit-information-section")
const clientMoreNavButton= document.querySelectorAll(".clients-more-info-button-container")



// SHOW EDIT INFORMATION SECTION
const editInfoButton = () => {
    
    for (i = 0; i < ClientMoreInfoSection.length; i++) {
        clientMoreNavButton[i].style.display="none"
        ClientMoreInfoContainer[i].style.display="none"
        editInfoSection[i].style.display="grid"
        ClientMoreInfoSection[i].style.display="block"
    }

    // clientMoreNavButton.style.display="none"
    // ClientMoreInfoContainer.style.display="none"
    // editInfoSection.style.display="grid"
    // ClientMoreInfoSection.style.display="block"
}


// HIDE EDIT INFORMATION SECTION
const infoEdited=()=>{

    for (i = 0; i < ClientMoreInfoSection.length; i++) {

        clientMoreNavButton[i].style.display="flex"
        ClientMoreInfoContainer[i].style.display="block"
        editInfoSection[i].style.display="none"
        ClientMoreInfoSection[i].style.display="grid"
    }

    // clientMoreNavButton.style.display="flex"
    // ClientMoreInfoContainer.style.display="block"
    // editInfoSection.style.display="none"
    // ClientMoreInfoSection.style.display="grid"
}






const newNoteSection= document.querySelectorAll('.new-note-section')

// NEW NOTE OPEN
// NEW NOTE OPEN
const newNoteButton = () => {
    
    for (i = 0; i < ClientMoreInfoSection.length; i++) {

        clientMoreNavButton[i].style.filter="blur(0.6vw)"
        ClientMoreInfoContainer[i].style.filter="blur(0.6vw)"
        newNoteSection[i].style.display="grid"
        ClientMoreInfoSection[i].style.display="block"
    }


}



// NEW NOTE CLOSE
// NEW NOTE CLOSE
const newNoteDone=()=>{

    for (i = 0; i < ClientMoreInfoSection.length; i++) {

        clientMoreNavButton[i].style.filter="blur(0vw)"
        ClientMoreInfoContainer[i].style.filter="blur(0vw)"
        newNoteSection[i].style.display="none"
        ClientMoreInfoSection[i].style.display="grid"
    }


}









// Note REMINDER SECTION

const noteReminderSection= document.querySelectorAll(".note-reminder-section");

// SHOW NOTE REMINDER AND BLUR BACKGROUND
const showNoteReminder = () => {
    
    for (i = 0; i < ClientMoreInfoSection.length; i++) {

            clientMoreNavButton[i].style.filter="blur(0.6vw)"
            ClientMoreInfoContainer[i].style.filter="blur(0.6vw)"

            ClientMoreInfoSection[i].style.display="block"
            noteReminderSection[i].style.display="block"
    }


}


// HIDE NOTE REMINDER AND REMOVE BLUR FROM BACKGROUND
const hideNoteReminder = () => {
    
    for (i = 0; i < ClientMoreInfoSection.length; i++) {

            clientMoreNavButton[i].style.filter="blur(0vw)"
            ClientMoreInfoContainer[i].style.filter="blur(0vw)"

            ClientMoreInfoSection[i].style.display="grid"
            noteReminderSection[i].style.display="none"
    }
}







// NOTE DESCRIPTION SECTION
// NOTE DESCRIPTION SECTION
// NOTE DESCRIPTION SECTION

const noteDescription= document.querySelectorAll(".note-description-section")
const noteThreeDots= document.querySelectorAll(".three-dots-note-container")

// SHOW NOTE DESCRIPTION
const showNoteDescription = () => {
    
    for (i = 0; i < noteDescription.length; i++) {

        noteDescription[i].style.display="grid"
        noteThreeDots[i].style.display="none"
    }

} 


// HIDE NOTE DESCRIPTION
const hideNoteDescription = () => {
    
    for (i = 0; i < noteDescription.length; i++) {
            noteDescription[i].style.display="none"
            noteThreeDots[i].style.display="grid"
    }
} 









// DELETE NOTE DESCRIPTION
const deleteNoteSection= document.querySelectorAll(".note-description-delete-section")


// SHOW NOTE DESCRIPTION SECTION
const showDeleteDescription = () => {
    
    for (i = 0; i < clientMoreNavButton.length; i++) {
            deleteNoteSection[i].style.display="grid"
            noteDescription[i].style.filter="blur(0.6vw)"
            clientMoreNavButton[i].style.filter="blur(0.6vw)"
    }


}


// HIDE NOTE DESCRIPTION SECTION
const hideDeleteDescription = () => {
    
    for (i = 0; i < clientMoreNavButton.length; i++) {

            deleteNoteSection[i].style.display="none"
            noteDescription[i].style.filter="blur(0vw)"
            clientMoreNavButton[i].style.filter="blur(0vw)"
            noteDescription[i].style.display="none"
            noteThreeDots[i].style.display="grid"
    }


}



// Clients Information END
// Clients Information END
// Clients Information END




















// APPOINTMENT SECTION START
// APPOINTMENT SECTION START
// APPOINTMENT SECTION START

const upcomingAppointment=document.querySelectorAll(".appoinment-container-upcoming");
const previousAppointment=document.querySelectorAll(".appoinment-container-previous");
const requestAppointment=document.querySelectorAll(".appoinment-container-request");

const appointmentButtonUpcoming=document.querySelectorAll(".appointment-nav-upcoming");
const appointmentButtonPrevious=document.querySelectorAll(".appointment-nav-previous");
const appointmentButtonRequest = document.querySelectorAll(".appointment-nav-request");


// PREVIOUS APPOINTMENT DESCRIPTION
const previousSectionDescription = document.querySelectorAll(".appointment-previous-description-section")

// UPCOMING APPOINTMENT DESCRIPTION
const upcomingSectionDescription= document.querySelectorAll(".appointment-upcoming-description-section") 

// APPOINTMENT NAVIGATION
// default

for (i = 0; i < appointmentButtonUpcoming.length; i++) {
    appointmentButtonUpcoming[i].classList.add("appointment-nav-bar-active")
}




// SHOW UPCOMING APPOINTMENT
const showUpComingAppointment = () => {
    
    for (i = 0; i < appointmentButtonUpcoming.length; i++) {
            upcomingAppointment[i].style.display="grid"
            previousAppointment[i].style.display="none"
            requestAppointment[i].style.display="none"
            previousSectionDescription[i].style.display="none"

            appointmentButtonUpcoming[i].classList.add("appointment-nav-bar-active")
            appointmentButtonPrevious[i].classList.remove("appointment-nav-bar-active")
            appointmentButtonRequest[i].classList.remove("appointment-nav-bar-active")
    }
} 


// SHOW PREVIOUS APPOINTMENT
const showPreviousAppointment = () => {
    
    for (i = 0; i < appointmentButtonUpcoming.length; i++) {

            upcomingAppointment[i].style.display="none"
            previousAppointment[i].style.display="grid"
            requestAppointment[i].style.display="none"
            upcomingSectionDescription[i].style.display="none"

            appointmentButtonUpcoming[i].classList.remove("appointment-nav-bar-active")
            appointmentButtonPrevious[i].classList.add("appointment-nav-bar-active")
            appointmentButtonRequest[i].classList.remove("appointment-nav-bar-active")
    }
} 



// SHOW REQUEST APPOINTMENT
const showRequestAppointment=()=>{
    for (i = 0; i < appointmentButtonUpcoming.length; i++) {

            upcomingAppointment[i].style.display="none"
            previousAppointment[i].style.display="none"
            requestAppointment[i].style.display="grid"
            upcomingSectionDescription[i].style.display="none"
            previousSectionDescription[i].style.display="none"
            
            appointmentButtonUpcoming[i].classList.remove("appointment-nav-bar-active")
            appointmentButtonPrevious[i].classList.remove("appointment-nav-bar-active")
            appointmentButtonRequest[i].classList.add("appointment-nav-bar-active")
    }
} 






// UPCOMING APPOINTMENT DESCRIPTION

const showUpcomingSectionDescription = () => {
    
    for (i = 0; i < upcomingSectionDescription.length; i++) {
            upcomingSectionDescription[i].style.display="block"
    }
}

const hideUpcomingSectionDescription = () => {
    for (i = 0; i < upcomingSectionDescription.length; i++) {
            upcomingSectionDescription[i].style.display="none"
    }
}






// Previous APPOINTMENT DESCRIPTION

const showPreviousSectionDescription = () => {
    
    for (i = 0; i < previousSectionDescription.length; i++) {
        previousSectionDescription[i].style.display="block"
    }
}



const hidePreviousSectionDescription = () => {
    
    for (i = 0; i < previousSectionDescription.length; i++) {
        previousSectionDescription[i].style.display="none"
    }
}











// REQUEST APPOINTMENT NAVIGATION
const requestSentButton= document.querySelectorAll(".appoinment-request-nav-sent") 
const requestReceivedButton= document.querySelectorAll(".appoinment-request-nav-received")

const requestSentSection= document.querySelectorAll(".sent-request-section")
const requestReceivedSection= document.querySelectorAll(".received-request-section")


// requestSentButton.classList.add("appoinment-request-nav-active-button")

for (i = 0; i < requestSentButton.length; i++) {
    requestSentButton[i].classList.add("appoinment-request-nav-active-button")
}


// SHOW REQUEST SENT SECTION
const showRequestSentSection = () => {

    for (i = 0; i < requestSentButton.length; i++) {
        requestSentButton[i].classList.add("appoinment-request-nav-active-button")
        requestReceivedButton[i].classList.remove("appoinment-request-nav-active-button")

        requestSentSection[i].style.display="grid"
        requestReceivedSection[i].style.display="none"
    }
} 



// REQUEST SENT APPOINTMENT DESCRIPTION
const requestSentDescription= document.querySelectorAll(".appointment-sent-description-section") 

const showRequestSentDescription = () => {
    for (i = 0; i < requestSentDescription.length; i++) {
        requestSentDescription[i].style.display="block"
    }
}


const hideRequestSentDescription=()=>{

    for (i = 0; i < requestSentDescription.length; i++) {
            requestSentDescription[i].style.display="none"
    }
}









const showRequestReceivedSection = () => {
    
    for (i = 0; i < requestSentButton.length; i++) {
            requestReceivedButton[i].classList.add("appoinment-request-nav-active-button")
            requestSentButton[i].classList.remove("appoinment-request-nav-active-button")

            requestReceivedSection[i].style.display="grid"
            requestSentSection[i].style.display="none"
    }
}




// NEW APPOINTMENT
// NEW APPOINTMENT
const newAppointment= document.querySelectorAll(".new-appoinment-section")

const showNewAppointmentSection=()=>{

    for (i = 0; i < newAppointment.length; i++) {
        newAppointment[i].style.display="grid"
    }
}

const hideNewAppointmentSection=()=>{

    for (i = 0; i < newAppointment.length; i++) {
        newAppointment[i].style.display="none"
    }
}




















// REQUEST RECEIVED APPOINTMENT DESCRIPTION
const requestReceivedDescription= document.querySelectorAll(".appointment-request-description-section") 

const showRequestReceivedDescription = () => {
    
    for (i = 0; i < requestReceivedDescription.length; i++) {
        requestReceivedDescription[i].style.display = "block"
    }
}



const hideRequestReceivedDescription = () => {
    
    for (i = 0; i < requestReceivedDescription.length; i++) {
        requestReceivedDescription[i].style.display = "none"
    }
}





// Blur Appoinment section
const appointmentTitle= document.querySelectorAll(".appoinment-title")
const appoCancelSection= document.querySelectorAll(".permission-to-cancel-appo-section")




// Cancel Appointment from appo description
const appoUpcomingDescriptionSection= document.querySelector(".appointment-upcoming-description-section");

const cancelAppoButtonFromDescription = () => {
    for (i = 0; i < appoUpcomingDescriptionSection.length; i++) {

            appoCancelSection[i].style.display="flex";
            appointmentTitle[i].style.filter="blur(0.3vw)"
            appointmentTitle[i].nextElementSibling.style.filter="blur(0.3vw)"
            appoUpcomingDescriptionSection[i].style.filter="blur(0.3vw)";
    }
}





const cancelAppoButton=()=>{

    for (i = 0; i < appointmentTitle.length; i++) {

        appoCancelSection[i].style.display="flex"

        appointmentTitle[i].style.filter="blur(0.3vw)"
        appointmentTitle[i].nextElementSibling.style.filter="blur(0.3vw)"
        appointmentTitle[i].nextElementSibling.nextElementSibling.style.filter="blur(0.3vw)"
    }
}



const closeCancelSection = () => {
    
    for (i = 0; i < appointmentTitle.length; i++) {
        
            appoCancelSection[i].style.display="none"

            appointmentTitle[i].style.filter="blur(0vw)"
            appointmentTitle[i].nextElementSibling.style.filter="blur(0vw)"
            appointmentTitle[i].nextElementSibling.nextElementSibling.style.filter="blur(0vw)"
            appoUpcomingDescriptionSection[i].style.filter="blur(0vw)";
    }
}









// Vendor Resit Section
// Vendor Resit Section

const swiper1 = new Swiper('.client-file-dashboard', {

    direction: 'horizontal',
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
        slidesPerView: 5,
  });











const preferredButtonLenth= document.querySelectorAll(".preferred-button").length
console.log(preferredButtonLenth)



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




showMe();