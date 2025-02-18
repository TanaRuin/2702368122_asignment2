document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropContent = document.getElementById("project-desc");
    
    dropBtn.addEventListener("click", function () {
        if (dropContent.style.display === "block") {
            dropContent.style.display = "none";
        } else {
            dropContent.style.display = "block";
        }
    });
});

$(document).ready(function(){
    $("#nmc-button").click(function(){
        $("#content-hide").slideToggle(300); 
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const ratingText = document.getElementById("rating-text");
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => highlightStars(index));
        star.addEventListener("mouseout", () => resetStars());
        star.addEventListener("click", () => setRating(index));
    });

    function highlightStars(index) {
        stars.forEach((star, i) => {
            if (i <= index) {
                star.classList.add("highlight");
            } else {
                star.classList.remove("highlight");
            }
        });
    }

    function resetStars() {
        stars.forEach((star, i) => {
            if (i < selectedRating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("highlight", "selected");
            }
        });
    }

    function setRating(index) {
        selectedRating = index + 1;
        ratingText.textContent = `You rated this ${selectedRating} out of 5`;
        resetStars();
    }
});