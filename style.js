let seatCount = 1;
let totalPrice = 0;
let p1Added = false;
let selectedSeats = [];

const totalSeats = 16; 
const seatNumbersElement = document.getElementById("seatNumbers");

const btns = document.querySelectorAll(".seatButton");

for (let index = 0; index < btns.length; index++) {
    const element = btns[index];

    element.addEventListener("click", function () {

        const seatTitle = element.innerText;
        const price = 550;

        const titleContainer = document.getElementById("title-container");

        if (!p1Added) {
            const p1 = document.createElement("p");
            p1Added = true;
            titleContainer.appendChild(p1);
        }

        const p1 = titleContainer.querySelector("p:first-child");
        p1.innerText = "Seat " + seatCount + "   " + "Class  " + "    " + " Ticket Price";

        const p2 = document.createElement("p");
        p2.innerText = seatCount + "." + seatTitle + "   " + "Economy" + "   " + price;
        titleContainer.appendChild(p2);
        seatCount++;

        totalPrice = totalPrice + price;

        document.getElementById('totalPrice').innerText = totalPrice;
        document.getElementById('total').innerText = totalPrice;

        element.disabled = true;
        element.style.backgroundColor = "lime";

        selectedSeats.push(element);
        


        if (selectedSeats.length === 4) {
            btns.forEach(btn => {
                if (!selectedSeats.includes(btn)) {
                    btn.disabled = true;
                }
            });
        }
        
        const purchaseBtn = document.getElementById("purchaseButton");
       
        if (seatCount > 0 ) {
            purchaseBtn.disabled = false;
        } else {
            purchaseBtn.disabled = true;
        }
        
        const remainingSeats = totalSeats - seatCount + 1;
        seatNumbersElement.innerText = ` Seats: ${remainingSeats}`;
    })
}


const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
    const couponElement = document.getElementById("input-field").value;

    if (couponElement === "NEW15") {
        const discountElement = document.getElementById("discountPrice");
        const discountAmount = totalPrice * 0.15;
        discountElement.innerText = "Got 15% discount" + " " + discountAmount+"Taka "+" "+"by using NEW15 coupon";;

        const restTotal = document.getElementById("total");
        restTotal.innerText = totalPrice - discountAmount.toFixed(2);
        const dis = document.getElementById("discountPart");
        console.log(dis);
        dis.style.display="none";
              
    } 
    else if (couponElement === "couple 20") {
        const discountElement = document.getElementById("discountPrice");
        const discountAmount = totalPrice * 0.2;
        discountElement.innerText = "Got 20% discount" + " " + discountAmount+"Taka "+" "+"by using couple 20 coupon";

        const restTotal = document.getElementById("total");
        
        restTotal.innerText = totalPrice - discountAmount.toFixed(2);
        
        const dis = document.getElementById("discountPart");
        console.log(dis);
        dis.style.display="none";

    } else {
        alert("Invalid Coupon code")
        document.getElementById("input-field").value = "";
    }
});
