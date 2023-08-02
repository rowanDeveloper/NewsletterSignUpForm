const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
});

//Variable that gets the local storage item
const subscriptionSuccess = localStorage.getItem('card-subscription');
if(subscriptionSuccess){
    bodyElement.classList.add('card-subscription');
};

//Creating a function for toggling the class and also adding the selection to local storage
const toggleTheme = () => {
    bodyElement.classList.toggle('card-subscription');

    if(bodyElement.classList.contains('card-subscription')){
        localStorage.setItem('card-subscription', 'active');
    }else {
        localStorage.removeItem('card-subscription');
    }
};