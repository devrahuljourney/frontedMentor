// Get the elements using querySelector
const featureDiv = document.querySelector(".feature-div");
const featureContent = document.querySelector(".feature");
const downArrow = document.querySelector(".down-arrow");
const company = document.querySelector(".company-div");
const companyContent = document.querySelector(".company-content")
const menu = document.querySelector(".menu");
const dropdownsection = document.querySelector(".drop-down-section");
menu.addEventListener("click", function() {
    if (dropdownsection.style.opacity === "1") {
        dropdownsection.style.opacity = "0";
    } else {
        dropdownsection.style.opacity = "1";
    }
});


// Add a click event listener to the featureDiv element
featureDiv.addEventListener("click", function(event) {
    // Prevent the click event from propagating to the document
    event.stopPropagation();
    dropDown(featureContent);
    // Change the display property of featureContent
    
});
company.addEventListener("click", function(event) {
    // Prevent the click event from propagating to the document
    event.stopPropagation();
    dropDown(companyContent);
    // Change the display property of featureContent
    
});

// Add a click event listener to the document
document.addEventListener("click", function(event) {
    // Check if the clicked element is not within the featureDiv
    if (!featureDiv.contains(event.target)) {
        // Hide the featureContent
        featureContent.style.display = "none";
        downArrow.classList.remove("active");
    }
    if (!company.contains(event.target)) {
        // Hide the featureContent
        companyContent.style.display = "none";
        downArrow.classList.remove("active");
    }
});

function dropDown(className)
{
    className.style.display = "block";
    downArrow.classList.add("active");
}