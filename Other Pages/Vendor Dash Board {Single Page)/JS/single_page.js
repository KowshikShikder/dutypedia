
let hideAllBigSection = () => {
    let bigSection = document.querySelectorAll(".big-section")

    for (x = 0; x < bigSection.length; x++){
        bigSection[x].style.display="none"
    }
} 




let showSection = (x) => {
    hideAllBigSection();
    document.querySelector(`#${x}`).style.display = "block"
}





// Show All Member List's Section
let showAllMemberSectionNavigation = (x,y) => {
    hideAllBigSection();
    document.querySelector(`#client-list-online-full-screen`).style.display = "none"
    document.querySelector(`#client-list-offline-full-screen`).style.display = "none"
    document.querySelector(`#main-list-full-screen`).style.display = "block"
    document.querySelector(`#${x}`).style.display = "block"

    let vendorNavigation= document.querySelectorAll('.vendor-service-border')


    for (i = 0; i < vendorNavigation.length; i++){
        vendorNavigation[i].classList.remove('vendor-service-active-border');
    }


    if (y != null) {
        
        y.querySelector('.vendor-service-border').classList.add('vendor-service-active-border')
    }

    else {
        vendorNavigation[0].classList.add('vendor-service-active-border');
    }
}







// Show Online Resit
let showOnlineResit = (x) => {
    hideAllBigSection();
    document.querySelector(`#main-list-full-screen`).style.display = "none"
    document.querySelector(`#client-list-offline-full-screen`).style.display = "none"
    document.querySelector(`#client-list-online-full-screen`).style.display = "grid"
    document.querySelector(`#${x}`).style.display = "block"
}





// Show Online Single Client By Navigation
let showSingleClientOnlineSectionNavigation = (x,y) => {
    hideAllBigSection();
    document.querySelector(`#main-list-full-screen`).style.display = "none"
    document.querySelector(`#client-list-offline-full-screen`).style.display = "none"
    document.querySelector(`#client-list-online-full-screen`).style.display = "grid"
    document.querySelector(`#${x}`).style.display = "block"


    let vendorNavigation= document.querySelectorAll('#client-list-online-full-screen .vendor-service-border')

    for (i = 0; i < vendorNavigation.length; i++){
        vendorNavigation[i].classList.remove('vendor-service-active-border');
    }

        document.querySelector(`#client-list-online-full-screen .${y} .vendor-service-border`).classList.add('vendor-service-active-border')

}

















// Show Offline Single Client Section
let showSingleClientOfflineSection = (x) => {
    hideAllBigSection();
    document.querySelector(`#main-list-full-screen`).style.display = "none"
    document.querySelector(`#client-list-online-full-screen`).style.display = "none"
    document.querySelector(`#client-list-offline-full-screen`).style.display = "grid"
    document.querySelector(`#${x}`).style.display = "block"
}


let showSingleClientOfflineSectionNavigation = (x,y) => {
    hideAllBigSection();
    document.querySelector(`#main-list-full-screen`).style.display = "none"
    document.querySelector(`#client-list-online-full-screen`).style.display = "none"
    document.querySelector(`#client-list-offline-full-screen`).style.display = "grid"
    document.querySelector(`#${x}`).style.display = "block"


    
    let vendorNavigation= document.querySelectorAll('#client-list-offline-full-screen .vendor-service-border')

    for (i = 0; i < vendorNavigation.length; i++){
        vendorNavigation[i].classList.remove('vendor-service-active-border');
    }

        document.querySelector(`#client-list-offline-full-screen .${y} .vendor-service-border`).classList.add('vendor-service-active-border')

}