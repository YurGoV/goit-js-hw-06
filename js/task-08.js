const form = document.querySelector('form.login-form');
// console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    // console.log(email);
    const password = formElements.password.value;
    // console.log(password);

    //    alert section
    if (email.length === 0 && password.length === 0) {
        return alert('input email and password Please!');
    }

    if (email.length === 0) {
        return alert('input email Please!');
    }

    if (password.length === 0) {
        return alert('input password Please!');
    }

    const formSubmitData = {
        email,
        password,  
        };
    
        console.log(formSubmitData);
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);
        form.reset();

}

