// All EDIT SECTION SHOW / HIDE
// All EDIT SECTION SHOW / HIDE
// All EDIT SECTION SHOW / HIDE

let vendorDashboardSectionBlur= document.querySelector(".top-nav-bar-section")
let vendorSectionBlur = document.querySelector(".vendor-section")
let topNavBarBlur= document.querySelector(".top-nav-bar-section")

let clientSectionBlur= document.querySelector(".client-section")








const showEditSection = (hiddenSection, mainSection) => {

    let vendorDashboardSectionBlur= document.querySelectorAll(".vendor-dashboard")

    let editSection =  document.querySelectorAll(`#${hiddenSection}`)
    let fixedResitSectionBlur = document.querySelectorAll(".fixed-resit-section")
    

    
    for (x = 0; x < editSection.length; x++){
        editSection[x].style.display = "grid";
    }

    for (x = 0; x < fixedResitSectionBlur.length; x++){
        fixedResitSectionBlur[x].style.filter = "blur(0.4vw)";
    }


    for (x = 0; x < vendorDashboardSectionBlur.length; x++){
        vendorDashboardSectionBlur[x].style.filter="blur(0.4vw)";
    }


    topNavBarBlur.style.filter = "blur(0.4vw)";

    vendorSectionBlur.style.filter = "blur(0.4vw)";
    clientSectionBlur.style.filter="blur(0.4vw)";
}








const hideEditSection = (hiddenSection, mainSection) => {

    let vendorDashboardSectionBlur= document.querySelectorAll(".vendor-dashboard")

    let editSection =  document.querySelectorAll(`#${hiddenSection}`)
    let fixedResitSectionBlur =  document.querySelectorAll(".fixed-resit-section")


    for (x = 0; x < editSection.length; x++){
        editSection[x].style.display = "none";
    }


    for (x = 0; x < fixedResitSectionBlur.length; x++){
        fixedResitSectionBlur[x].style.filter = "blur(0vw)";
    }

    for (x = 0; x < vendorDashboardSectionBlur.length; x++){
        vendorDashboardSectionBlur[x].style.filter="blur(0vw)";
    }



    topNavBarBlur.style.filter = "blur(0vw)";
    vendorSectionBlur.style.filter = "blur(0vw)";
    clientSectionBlur.style.filter="blur(0vw)";
}











// All Loading Popup section start
// All Loading Popup section start
// All Loading Popup section start



const showAllLoadingSection = (title) => {
    
    let vendorDashboardSectionBlur = document.querySelectorAll(".vendor-dashboard")
    
    let loadingSection= document.querySelectorAll(`#all-loading-pop-up`)
    let loadingTitle= document.querySelectorAll('#all-loading-pop-up .loading-animation-title')

    let fixedResitSectionBlur =  document.querySelectorAll(".fixed-resit-section")


    for (x = 0; x < loadingSection.length; x++){
        loadingSection[x].style.display = "flex";

        fixedResitSectionBlur[x].style.filter = "blur(0.4vw)";
        loadingTitle[x].innerHTML = title;
    }

    for (x = 0; x < vendorDashboardSectionBlur.length; x++){
        vendorDashboardSectionBlur[x].style.filter="blur(0.4vw)";
    }

    topNavBarBlur.style.filter = "blur(0.4vw)";

    vendorSectionBlur.style.filter="blur(0.4vw)";
    clientSectionBlur.style.filter = "blur(0.4vw)";    
}












const hideAllLoadingSection = () => {
    let vendorDashboardSectionBlur= document.querySelectorAll(".vendor-dashboard")

    let loadingSection= document.querySelectorAll(`#all-loading-pop-up`)
    let fixedResitSectionBlur =  document.querySelectorAll(".fixed-resit-section")


    for (x = 0; x < loadingSection.length; x++){

        loadingSection[x].style.display = "none"

        fixedResitSectionBlur[x].style.filter="blur(0vw)";
    }

    for (x = 0; x < vendorDashboardSectionBlur.length; x++){
        vendorDashboardSectionBlur[x].style.filter="blur(0vw)";
    }

    topNavBarBlur.style.filter = "blur(0vw)";
    vendorSectionBlur.style.filter="blur(0vw)";
    clientSectionBlur.style.filter="blur(0vw)";

}


// All Loading Popup section end
// All Loading Popup section end
// All Loading Popup section end

