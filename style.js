let seatCount=1;
let totalPrice=0;

const btns=document.querySelectorAll(".seatButton")


for (let index = 0; index < btns.length; index++) {
    const element = btns[index];
   
    
    element.addEventListener("click",function(){
    console.log(element)

     const seatTitle=element.innerText;
     
    console.log(seatTitle)
     const price  =550;
    
 

    const titleContainer=document.getElementById("title-container")

    const p=document.createElement("p");
    p.innerText= seatCount+". Seat number   "+ seatTitle
    titleContainer.appendChild(p);
    seatCount++;


    totalPrice=totalPrice+price;
    // console.log(totalPrice);
    document.getElementById('totalPrice').innerText=totalPrice.toFixed(2);
   
    })
    
}


const btn=document.getElementById("apply-btn")
btn.addEventListener("click",function(){
    const couponElement=document.getElementById("input-field").value;
    // console.log(couponElement.value);

    const couponCode= couponElement.split(" ").join("").toUpperCase();

    if(totalPrice>=200)
     {
       if(couponCode==="SELL200"){
          const  discountElement=document.getElementById("discountPrice");
          const discountAmount=totalPrice*0.2;
          discountElement.innerText=discountAmount.toFixed(2);

          const restTotal=document.getElementById("total");
          restTotal.innerText=totalPrice-discountAmount.toFixed(2);
          document.getElementById("input-field").value="";

       }
       else{
        alert("Invalid Coupon code")
        document.getElementById("input-field").value="";
       }
     }
 
     else{
        alert("Spent 200 Dollars")
        document.getElementById("input-field").value="";
     }

})