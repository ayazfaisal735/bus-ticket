// ------------------scroll------------
const jumpButton = document.getElementById("jumpButton");
const targetSection = document.querySelector(".target-section");
jumpButton.addEventListener("click", function () {
  targetSection.scrollIntoView({ behavior: "smooth" });
});
// ----------------- seat count ---------------
const seatCount = document.getElementById("seatCount");
const seatLeft = document.getElementById("left-seat");
const seatDetails = document.getElementById("seat-details");
let count = 0;
let countLeft = 40;
let buttonClick = false;
let inputNumber = false;
const maxTicket = 3;
const totalPrice = document.getElementById("total-price");
const grandPrice = document.getElementById("grand-price");
const ticketPrice = 550;
const target = 4;
const seats = document.querySelectorAll("#seat");
for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];
  seat.addEventListener("click", function () {
    const seatName = seat.querySelector("h4").innerText;
    seat.classList.remove("bg-[#f7f8f8]");
    seat.classList.add("bg-[#1DD111]");
    seat.classList.add("pointer-events-none");
    const p = document.createElement("p");
    p.innerText = seatName + " "+"----------------"+" "+"Economoy"+" " + "---------------" +" "+ ticketPrice;
    seatDetails.appendChild(p);
    nextButton.classList.remove("btn-disabled");
    buttonClick = true;
    count++;
    countLeft--;
    updateSeat();
    updateGrandPrice();
    remainSeat();
    updateTotalPrice();
    checkCondition();
  });
}

const phoneNumber = document.getElementById("Phone-number");
phoneNumber.addEventListener("input", function () {
  if (phoneNumber.value !== "") {
    inputNumber = true;
  } else {
    inputNumber = false;
  }
  checkCondition();
});

const nextButton = document.getElementById("next-button");
// --------------------discount------------------------------
const news20 = document.getElementById("news-20");
const couple20 = document.getElementById("couple20");
const applyButton = document.getElementById("apply-btn");
applyButton.addEventListener("click", function () {
  const couponElement = document.getElementById("coupon-code").value;
  if (couponElement === "NEW15") {
    const price = updateTotalPrice();
    const discountPrice = document.getElementById("discount-price");
    const discountValue = price * 0.15;
    discountPrice.innerText = discountValue;
    const grandPrice = document.getElementById("grand-price");
    grandPrice.innerText = price - discountValue;
  } else if (couponElement === "Couple 20") {
    const price = updateTotalPrice();
    const discountPrice = document.getElementById("discount-price");
    const discountValue = price * 0.2;
    discountPrice.innerText = discountValue;
    const grandPrice = document.getElementById("grand-price");
    grandPrice.innerText = price - discountValue;
  }else{
    alert("Invalid Coupon");
  }
  const removeCoupon = document.querySelector("#remove-coupon");
  removeCoupon.classList.add("hidden");
});
// ------------seat button disable-----------

function clickedButton() {
  let clickedButtons = document.querySelectorAll(".click");

  if (clickedButtons.length >= 4) {
    seats.forEach((button) => {
      button.disabled = true;
      const activeButton = document.querySelector("#apply-btn");
      activeButton.classList.remove("btn-disabled");
      const discountElement = document.querySelector("#discount-element");
      discountElement.classList.remove("hidden");
    });
  }
}
seats.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.add("click");
    clickedButton();
  });
});
// ----------------next button popup-----------
nextButton.addEventListener("click",function(){
  const blur = document.querySelector("#blur");
  const header = document.querySelector("#head");
  const offerSection = document.querySelector("#offer-section");
  const seatTitle = document.querySelector("#seat-title");
  const seatInfo = document.querySelector(".vehicle-details");
  const seatDetails = document.querySelector(".seat-details");
  const popup = document.querySelector("#popup");
  const lastSection = document.querySelector(".last-section");
  blur.classList.add("blur-sm");
  header.classList.add("blur-sm");
  offerSection.classList.add("blur-sm");
  seatTitle.classList.add("blur-sm");
  seatInfo.classList.add("blur-sm");
  seatDetails.classList.add("blur-sm");
  lastSection.classList.add("blur-sm");
  popup.classList.remove("hidden");
})
const continueButton = document.querySelector("#Continue-button");
continueButton.addEventListener("click" , function(){
  const popup = document.querySelector("#popup");
  const blur = document.querySelector("#blur");
  const header = document.querySelector("#head");
  const offerSection = document.querySelector("#offer-section");
  const seatTitle = document.querySelector("#seat-title");
  const seatInfo = document.querySelector(".vehicle-details");
  const seatDetails = document.querySelector(".seat-details");
  const lastSection = document.querySelector(".last-section");
  popup.classList.add("hidden");
  blur.classList.remove("blur-sm");
  header.classList.remove("blur-sm");
  offerSection.classList.remove("blur-sm");
  seatTitle.classList.remove("blur-sm");
  seatInfo.classList.remove("blur-sm");
  seatDetails.classList.remove("blur-sm");
  lastSection.classList.remove("blur-sm");

})
// -----------------utility-------------------------
function updateSeat() {
  seatCount.textContent = count;
}
function remainSeat() {
  seatLeft.textContent = countLeft;
}
function updateTotalPrice() {
  const totalSeatPrice = count * ticketPrice;
  totalPrice.textContent = totalSeatPrice;
  return totalSeatPrice;
}
function updateGrandPrice() {
  const totalGrandPrice = count * ticketPrice;
  grandPrice.textContent = totalGrandPrice;
}
function checkCondition() {
  if (buttonClick && inputNumber) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}
