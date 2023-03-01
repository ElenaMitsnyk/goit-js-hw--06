const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: {email, password},
    } = event.currentTarget;
    const inputValue = {
        [email.name]: email.value,
        [password.name]: password.value
    }
    console.log(inputValue)
    if (email.value === '' || password.value === '') {
        window.alert("Bсі поля повинні бути заповнені!");
    }
    event.target.reset()
});