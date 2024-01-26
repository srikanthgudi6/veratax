let btn = document.querySelector('#btn-sidebar');
var sidebar = document.querySelector('.sidebar');
let mainContent = document.querySelector('#main-content')

btn.onclick = function () {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');

    
   
};




let sideMenuheads = document.querySelectorAll('#sidedrop-head');
let sideMenuLists = document.querySelectorAll('.sidedrop-list');


sideMenuheads.forEach(function(sideMenuhead, index) {
    sideMenuhead.onclick = function() {
        
        let sideMenuList = sideMenuLists[index];

       
        sideMenuList.classList.toggle('active');

       
        if (sideMenuList.classList.contains('active')) {
            document.querySelectorAll('.bxs-chevron-down')[index].style.display = 'inline-block';
            document.querySelectorAll('.bxs-chevron-right')[index].style.display = 'none';
        } else {
            document.querySelectorAll('.bxs-chevron-down')[index].style.display = 'none';
            document.querySelectorAll('.bxs-chevron-right')[index].style.display = 'inline-block';
        }


    };
});




// Function to set up behavior for side drop elements
function setupSideDropBehavior(sideDrops, targetElement) {
    sideDrops.forEach(function(sideDrop) {
        sideDrop.addEventListener("mouseover", function() {
            targetElement.style.display = document.querySelector(".sidebar").offsetWidth === 240 ? "none" : "block";
        });

        sideDrop.addEventListener("mouseout", function() {
            targetElement.style.display = "none";
        });

        
    });
}

// Section setup
setupSideDropBehavior(document.querySelectorAll(".h-side-drop"), document.querySelector(".h-dashboard"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-org"), document.querySelector(".h-org"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-allemp"), document.querySelector(".h-allemp"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-onboard"), document.querySelector(".h-onboard"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-sep"), document.querySelector(".h-sep"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-atten"), document.querySelector(".h-atten"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-data"), document.querySelector(".h-data"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-bulk"), document.querySelector(".h-bulk"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-hrman"), document.querySelector(".h-hrman"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-req"), document.querySelector(".h-req"));
setupSideDropBehavior(document.querySelectorAll(".h-side-drop-payrol"), document.querySelector(".h-payrol"));





