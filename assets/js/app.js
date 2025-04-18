function CallHassan(){
    const phoneNumber = '+256769643744'
    const phoneLink = document.querySelector('.phone')


    phoneLink.addEventListener('click', async() => {
        window.location.href = `tel:${phoneNumber}`;
    })
}

function SendMessage(){

alert("sent")
}