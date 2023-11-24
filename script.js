// nav reponsive 
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
    
});


// clear form//
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}

//ubah mode//
function ubahMode(){
    const ubah = document.body;
    ubah.classList.toggle("dark");
}
