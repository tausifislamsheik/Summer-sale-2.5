let total = 0;
function productList(target){
    const productContainer = document.getElementById('product-list');
    const productName = target.parentNode.childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    productContainer.appendChild(li);


    const productPrice = target.parentNode.childNodes[5].innerText.split(' ')[0];
    total = parseInt(total) + parseInt(productPrice);
    // console.log(total)
    document.getElementById('total-price').innerText=total;


    const purchaseBtn = document.getElementById('purchase-btn');

    if(total > 0){
        purchaseBtn.removeAttribute('disabled');
    }else{
        purchaseBtn.setAttribute('disabled', ' ')
    }


    const applyBtn = document.getElementById('apply-btn');

    if(total > 200){
        applyBtn.removeAttribute('disabled');
    }else{
        applyBtn.setAttribute('disabled', ' ');
    }


    document.getElementById('home-btn').addEventListener('click', function(){
        productContainer.removeChild(li);
    })
    
}


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function(){
    const inputField = document.getElementById('input');
    const inputValue = inputField.value;
    const discountField = document.getElementById('discount');
    const discountTotal = document.getElementById('total');


    if(inputValue == 'SELL200'){
        discountField.innerText = total * 0.2;
        discountTotal.innerText = total - total * 0.2;
    }else{
        alert('Invalid coupon');
    }
});



document.getElementById('home-btn').addEventListener('click', function(){
    document.getElementById('total-price').innerText = '00';
    document.getElementById('discount').innerText = '00';
    document.getElementById('total').innerText = '00';
    total = 0;
    document.getElementById('apply-btn').setAttribute('disabled', '');
    document.getElementById('purchase-btn').setAttribute('disabled', '');
    document.getElementById('input').value = '';
})