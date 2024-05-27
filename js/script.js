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
        purchaseBtn.setAttribute('disabled')
    }


    const applyBtn = document.getElementById('apply-btn');

    if(total > 200){
        applyBtn.removeAttribute('disabled');
    }else{
        applyBtn.setAttribute('disabled');
    }
    
}