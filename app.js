let seatContainer = document.querySelector('.all-seat');

//let seat = document.querySelector('.seat')
let seatCount = document.querySelector('.seat-count')
let seatDetail = document.querySelector(".seat-detail")
let totalPrice = document.querySelector(".total-price")
let grandTotal = document.querySelector(".grand-total-price")
let new15 = document.querySelector('.new15');
let couple20 = document.querySelector(".couple20");

let couponCode = document.querySelector('.coupon-code')

new15.addEventListener("click", function (e) {
    couponCode.value = "NEW15"
})

couple20.addEventListener("click", function (e) {
    couponCode.value = "Couple 20"
})



seatContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('seat')) {



        if (target.classList.contains('seat-fill')) {
            target.classList.remove('seat-fill');

            selectedSeats.pop()

        } else {
            target.classList.add('seat-fill');
            selectedSeats.push(target.innerText)
        }

        update()
        console.log('Element clicked:', target.innerText, selectedSeats);
    }
});

let selectedSeats = []
let price = 0



function update() {


    seatCount.innerHTML = `${selectedSeats.length}`;
    console.log(selectedSeats, 'hello')

    seatRender = ``;
    for (i = 0; i < selectedSeats.length; i++) {

        //   console.log(i, 'hi')
        seatRender += `<div class="seat-details">
        <span>${selectedSeats[i]}</span>
        <span>Economy</span>
        <span>550</span>
    </div>`
    }
    seatDetail.innerHTML = seatRender;

    let seatPrice = 550;

    //  let

    price = selectedSeats.length * seatPrice


    totalPrice.innerHTML = `BDT ${selectedSeats.length * seatPrice}`

    grandTotal.innerHTML = `BDT ${selectedSeats.length * seatPrice}`
    console.log(price)


    couponCode.value = ''
}

function coupon() {


    let coupon = document.querySelector('.coupon-code').value

    let grandPrice = 0;

    if (coupon === 'NEW15') {

        grandPrice = price - price * 15 / 100
        grandTotal.innerHTML = `BDT ${grandPrice}`
    }
    if (coupon === 'Couple 20') {

        grandPrice = price - price * 20 / 100
        grandTotal.innerHTML = `BDT ${grandPrice}`
    }

}

let applyBtn = document.querySelector('.apply-btn')
applyBtn.addEventListener('click', function (e) {
    coupon()
})