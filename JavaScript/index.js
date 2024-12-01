

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "400px"
    }
    else {
        MenuItems.style.maxHeight = "0px"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('darkModeToggle');
    const modeIcon = document.getElementById('modeIcon');
    
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Switch between moon and sun images
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.src = '../images/sun.png'; // Replace with your sun image path
            modeIcon.alt = 'Switch to Light Mode'; // Update alt text
        } else {
            modeIcon.src = '../images/moon.png'; // Replace with your moon image path
            modeIcon.alt = 'Switch to Dark Mode'; // Update alt text
        }
    });
});
