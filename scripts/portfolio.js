// Header
// 
// Get the "Menu" text and the menu
const menuText = document.getElementById('menu-text');
const menu = document.getElementById('menu');

menuText.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// body 
// 
// project card array

const projects = [
    {
        title: "Three Pines Coffee",
        description: "A redesign of local coffee shop's website to increase their online presence",
        image:,
        button:
    },
    {
        title: "NKUT Redesign",
        description: "A redesign of the No Kill Utah website. An initiative of Best Friends Animal Society",
        image:,
        button:
    },
    {
        title: "Mountain Dream Boutique",
        description: "A new site for a local boutique to share tutorials on different ribbon flowers",
        image:,
        button:
    },
    {
        title: "Yard Sale Trail",
        description: "A new app idea that helps connect second hand shoppers with the yard sales in their areas",
        image:,
        button:
    },
    
]




// Footer
// 
// gets current date
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

