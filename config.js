
var mainImage = document.getElementById("mainCarImage");

var selectedColor = mainImage.getAttribute("data-default-color");
var selectedWheel = mainImage.getAttribute("data-default-wheel");

var colorButtons = document.querySelectorAll(".color-btn");
var wheelButtons = document.querySelectorAll(".wheel-btn");

// ============================================================================================================
colorButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        var activeColor = document.querySelector(".color-btn.selected");
        if (activeColor) {
            activeColor.classList.remove("selected");
        }

        button.classList.add("selected");

        selectedColor = button.getAttribute("data-color");

        updateImage();
    });
});

// =============================================================================================================
wheelButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        var activeWheel = document.querySelector(".wheel-btn.selected");
        if (activeWheel) {
            activeWheel.classList.remove("selected");
        }

        button.classList.add("selected");

        selectedWheel = button.getAttribute("data-wheel");

        updateImage();
    });
});

// ===============================================================================================================
function updateImage() {
    var imageName = selectedColor + "-" + selectedWheel + ".jpg";
    mainImage.src = imageName;
}