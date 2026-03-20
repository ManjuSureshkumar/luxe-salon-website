function filterServices(category, el) {
    const cards = document.querySelectorAll('.services-card');
    const chips = document.querySelectorAll('.filter-chip');

    // Remove active from all chips
    chips.forEach(chip => chip.classList.remove('active'));

    // Add active to clicked chip
    el.classList.add('active');

    // Show/Hide cards
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


/*plan */
function toggleCard(show){
  const cardBox = document.getElementById("cardBox");
   const options = document.querySelectorAll(".payment-option");
   options.forEach(opt => opt.classList.remove("active"));
  if(show){
    cardBox.style.display = "block";
    options[0].classList.add("active");
  } else {
    cardBox.style.display = "none";
    options[1].classList.add("active");
  }
}

function activateMembership(){

  // OPTIONAL: simple validation
  const inputs = document.querySelectorAll(".card-box input");

  for(let input of inputs){
    if(input.value.trim() === ""){
      alert("Please fill all card details");
      return;
    }
  }

  // generate random membership ID
  const id = "#"+Math.floor(1000000000 + Math.random()*9000000000);
  document.getElementById("memberId").innerText = id;

  // hide checkout
  document.querySelector(".checkout-container").style.display = "none";
  document.getElementById("successOverlay").style.display = "flex";
  // show success screen
  document.getElementById("successScreen").style.display = "block";
}

function goHome(){
  window.location.href = "index.html";
}
 
//Bookingpage- edit

document.querySelectorAll(".edit-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active from all buttons (optional)
    document.querySelectorAll(".edit-btn").forEach(b => b.classList.remove("active"));

    // add active to clicked one
    btn.classList.add("active");

  });
});

//Secure Modal
function openPayment(){
  document.getElementById("paymentModal").style.display = "flex";
}

// close on outside click
window.onclick = function(e){
  const modal = document.getElementById("paymentModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
}

//Booking Confirmation
const payBtn = document.querySelector('.pay-btn');
const paymentPage = document.querySelector('.payment-container');
const successPage = document.getElementById('successPage');

payBtn.addEventListener('click', () => {
    paymentPage.style.display = 'none';
    successPage.style.display = 'flex';
});


function goHome(){
  window.location.href = "index.html";
}