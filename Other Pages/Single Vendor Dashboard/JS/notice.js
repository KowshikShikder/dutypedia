let showNewNoticeSection = (x,y) => {
    document.querySelector(`#${x}`).style.display = "block"
    document.querySelector(`#${y}`).style.display = "none"
}


let hideNewNoticeSection = (x,y) => {
    document.querySelector(`#${x}`).style.display = "none"
    document.querySelector(`#${y}`).style.display = "block"
}


