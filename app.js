
const modalsListItems = document.querySelector(".modals-list-items");
const mainParent = document.querySelector(".desktop-header-row-two-category");

document.addEventListener("click", function (event) {

    if (!event.target.closest(".desktop-header-row-two-category") && !event.target.closest(".modals-list-items-area")) {
        mainParent.classList.remove("refClass");
        modalsListItems.style.visibility = "hidden";
    }

    else if (event.target.closest(".modals-list-items-area")) {
        modalsListItems.style.visibility = "visible";
        mainParent.classList.add("refClass");
    }

    else {
        if (modalsListItems.style.visibility === "visible") {
            modalsListItems.style.visibility = "hidden";
            mainParent.classList.remove("refClass");
        }

        else {
            modalsListItems.style.visibility = "visible";
            mainParent.classList.add("refClass");
        }
    }


});


const modalsListItemsMobile = document.querySelector(".modals-list-items-mobile");
const mainParentMobile = document.querySelector(".only-hamburger");
const bodySadow = document.querySelector(".body-sadow");

document.addEventListener("click", function (event2) {

    if (!event2.target.closest(".only-hamburger") && !event2.target.closest(".modals-list-items-mobile")) {
        mainParentMobile.classList.remove("refClassMobile");
        modalsListItemsMobile.style.visibility = "hidden";
        bodySadow.style.visibility = "hidden";
    }

    else if (event2.target.closest(".modals-list-items-mobile")) {
        modalsListItemsMobile.style.visibility = "visible";
        mainParentMobile.classList.add("refClassMobile");
        bodySadow.style.visibility = "visible";
    }

    else {
        if (modalsListItemsMobile.style.visibility === "visible") {
            modalsListItemsMobile.style.visibility = "hidden";
            mainParentMobile.classList.remove("refClassMobile");
            bodySadow.style.visibility = "hidden";
        }

        else {
            modalsListItemsMobile.style.visibility = "visible";
            mainParentMobile.classList.add("refClassMobile");
            bodySadow.style.visibility = "visible";
        }
    }


});




// function coordinateOne(event) {
//     let xOne = event.clientX;
//     let coOne = document.getElementById("nav-bottom-update-one");
//     coOne.value = xOne;
//     console.log(xOne);
// }



// function coordinateTwo(event) {
//     let xTwo = event.clientX;
//     let coTwo = document.getElementById("nav-bottom-update-two");
//     coTwo.value = xTwo;
//     console.log(xTwo);
// }


// function coordinateThree(event) {
//     let xThree = event.clientX;
//     let coThree = document.getElementById("nav-bottom-update-three");
//     coThree.value = xThree;
//     console.log(xThree);
// }


// function coordinateFour(event) {
//     let xFour = event.clientX;
//     let coFour = document.getElementById("nav-bottom-update-four");
//     coFour.value = xFour;
//     console.log(xFour);
// }



// function coordinateFive(event) {
//     let xFive = event.clientX;
//     let coFive = document.getElementById("nav-bottom-update-five");
//     coFive.value = xFive;
//     console.log(xFive);
// }





// bottom nav bar 

// document.querySelectorAll(".bottom-nav-item").forEach(function (checkEl, index) {
//     checkEl.addEventListener("click", function (checkOther) {
//         // console.log(index);
//         removeAllactiveClass();
//         document.querySelectorAll(".bottom-nav-item")[index].className += " bottom-nav-item-active";
//         // document.querySelectorAll(".item-icon")[index].className += " active-back-color";
//         // document.querySelectorAll(".item-icon")[index].className += " inactive-back-color";
//         // console.log(checkEl);
//     });
// });

// var removeAllactiveClass = function removeAllactiveClass() {
//     document.querySelectorAll(".bottom-nav-item").forEach(function (checkEl, index) {
//         checkEl.classList.remove("bottom-nav-item-active");
//         // console.log(checkEl);
//         // checkEl.classList.remove("active-back-color");
//         // checkEl.classList.add("inactive-back-color");
//     });
// };




const pos = document.querySelectorAll(".bottom-nav-item")[0].getBoundingClientRect().left;
document.querySelector(".round-circle-item").style.left = pos + "px";
document.querySelector(".round-circle-item-two").style.left = pos + 6.5 + "px";
document.querySelectorAll(".bottom-nav-item").forEach(function (el, index) {
    el.addEventListener("click", function (el1) {
        console.log(index);
        removeAllactiveClass();
        document.querySelectorAll(".bottom-nav-item")[index].className += " bottom-nav-item-active";
        // document.querySelector(".round-circle-item").style.left = "".concat(index * 25 + 10, "%");
        let position = el.getBoundingClientRect().left;
        console.log(position);
        document.querySelector(".round-circle-item").style.left = position + "px";
        document.querySelector(".round-circle-item-two").style.left = position + 6.5 + "px";
    });
});

let removeAllactiveClass = function removeAllactiveClass() {
    document.querySelectorAll(".bottom-nav-item").forEach(function (el, index) {
        el.classList.remove("bottom-nav-item-active");
    });
};