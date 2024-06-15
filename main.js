let typed = new Typed(".text", {
    strings: ["Student from Parul University", "frontend developer", "Web developer"],
    typeSpeed: 120,
    backSpeed: 150,
    backDelay: 1600,
    loop: true
});

const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})
function showSidebar(){
  const sidebar=document.querySelector(".sidebar")
  sidebar.style.display='flex';
}
function hidebar(){
  const sidebar=document.querySelector(".sidebar")
  sidebar.style.display='none'
  
}