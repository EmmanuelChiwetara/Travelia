const preloader = document.querySelector("[data-preloader]")

const openBtn = document.querySelector(".openNav")
const closeBtn = document.querySelector(".closeNav")
const header = document.querySelector(".header")
const navbar = document.querySelector("[data-navbar]")

const navList = document.querySelectorAll("navbar-link")
const sections = document.querySelectorAll(".section")

window.addEventListener('load', () => {
    preloader.classList.add("remove")
})

openBtn.addEventListener('click', () => {
    navbar.classList.add("active")
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove("active")
})

window.addEventListener('scroll', () => {
    header.classList[window.scrollY>100? "add" : "remove"]("active")
})

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY
//         let offset = sec.offsetTop
//         let height = sec.offsetHeight
//         let id = sec.getAttribute("id")

//         if (top >= offset && top < offset + height) {
//             navList.forEach(listItem => {
//                 listItem.classList.remove('active')
//                 document.querySelector('navbar-link [href*=' + id + ']').classList.add('active')
//             })
//         }
//     })
// }

console.log(navList)

navList.forEach((listItem) => {
    listItem.addEventListener('click', () => {
        listItem.classList.add('active')
    }) 
})




