
total = 0;
discount = 0;

function mainTotalUpdate() {
    const mainTotalElement = document.getElementById('main-total');
    const totalPriceElement = document.getElementById('total-price');
    const mainTotal = parseFloat(totalPriceElement.innerText) - discount;
    mainTotalElement.innerText = mainTotal.toFixed(2);

    // Disable the coupon button: 
    const couponButton = document.getElementById('coupon-btn');
    if (mainTotal < 200) {
        couponButton.disabled = true;
        couponButton.classList.remove('bg-[#E527B2]');
        couponButton.classList.add('bg-gray-400');
    } else {
        couponButton.disabled = false;
        couponButton.classList.remove('bg-gray-400');
        couponButton.classList.add('bg-[#E527B2]');
    }
}
// Handel Click Function
function handelClickContainer(getChild) {
    const itemName = getChild.childNodes[9].childNodes[1].innerText;

    const addItem = document.createElement('li');
    addItem.innerText = itemName;
    const itemContainer = document.getElementById('item');
    itemContainer.appendChild(addItem);

    // get the price
    const getPrice = getChild.childNodes[9].childNodes[3].childNodes[0].innerText;

    total = parseFloat(total) + parseFloat(getPrice);

    const getTotal = document.getElementById('total-price').innerText = total.toFixed(2);


    // Disable and change the color of the Make Purchase Button 
    const purchaseButton = document.getElementById('Make-Purchase');
    if (total > 1) {
        purchaseButton.disabled = false;
        purchaseButton.classList.remove('bg-gray-400');
        purchaseButton.classList.add('bg-[#E527B2]');
    } else {
        purchaseButton.disabled = true;
        purchaseButton.classList.remove('bg-[#E527B2]');
        purchaseButton.classList.add('bg-gray-400');
    }

    mainTotalUpdate();
}

// Get the Coupon function
document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponField = document.getElementById('coupon');
    const coupon = couponField.value;

    if (coupon === "SELL200") {
        discount = total * 0.20;
        const totalDiscountElement = document.getElementById('total-discount');
        totalDiscountElement.innerText = discount.toFixed(2);
    } else {

        discount = 0;
        alert('Your code is not valid');

    }

    couponField.value = '';

    mainTotalUpdate();
});

// Modal Section
document.getElementById('Make-Purchase').addEventListener('click', function () {
    const mainTotalElement = document.getElementById('main-total');
    const mainTotal = parseFloat(mainTotalElement.innerText);

    if (mainTotal > 0) {

        window.location.href = 'congratulation.html';
    } else {
        alert('Your Cart is empty!!!');
    }

});



