document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('itvContactForm');
    if (!form) return;
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const phoneInput = document.getElementById('contactPhone');
    const messageInput = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('contactSubmitBtn');

    // Reglas para validar los campos:
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d*$/; 

    // Para errores
    const setError = (input, errorId, message, isValid) => {
        const errorSpan = document.getElementById(errorId);
        if (!isValid && input.value.trim() !== '') {
            errorSpan.textContent = message;
            input.classList.add('itv-contact__input--error');
        } else {
            errorSpan.textContent = '';
            input.classList.remove('itv-contact__input--error');
        }
        return isValid;
    };

    const validateForm = () => {
        let isFormValid = true;

        const nameTrimmed = nameInput.value.trim();
        const isTextOnly = nameRegex.test(nameTrimmed);
        const nameWords = nameTrimmed.split(/\s+/).filter(word => word.length > 0);
        const isCorrectWordCount = nameWords.length >= 2 && nameWords.length <= 4;
        const isNameValid = nameTrimmed !== '' && isTextOnly && isCorrectWordCount;
        let nameErrorMsg = 'El nombre solo puede contener letras.';
        if (nameTrimmed !== '' && isTextOnly && !isCorrectWordCount) {
            nameErrorMsg = 'Este apartado debe tener al menos 2 palabras.';
        }
        isFormValid = setError(nameInput, 'errorName', nameErrorMsg, isNameValid) && isFormValid;

        const isEmailValid = emailInput.value.trim() !== '' && emailRegex.test(emailInput.value);
        isFormValid = setError(emailInput, 'errorEmail', 'Introduce un correo electrónico válido.', isEmailValid) && isFormValid;

        const phoneTrimmed = phoneInput.value.trim();
        const isNumbersOnly=  phoneRegex.test(phoneTrimmed);
        const isPhoneLengthValid = phoneTrimmed.length >= 9 && phoneTrimmed.length <= 15;
        const isPhoneValid = phoneTrimmed === '' || (isNumbersOnly && isPhoneLengthValid);
        let phoneErrorMsg = 'El teléfono solo admite números.';
        if (phoneTrimmed !== '' && isNumbersOnly && !isPhoneLengthValid) {
            phoneErrorMsg = `El número de teléfono debe tener entre 9 y 15 dígitos.`;
        }
        isFormValid = setError(phoneInput, 'errorPhone', phoneErrorMsg, isPhoneValid) && isFormValid;


        const messageLength = messageInput.value.trim().length;
        const isMessageValid = messageLength >= 20 && messageLength <= 300;
        isFormValid = setError(messageInput, 'errorMessage', `La consulta debe tener entre 20 y 300 caracteres (Llevas: ${messageLength}).`, isMessageValid) && isFormValid;

        const allRequiredFilled = nameTrimmed !== '' && emailInput.value.trim() !== '' && messageLength >= 20;
        
        if(isFormValid && allRequiredFilled) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    };

    [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
        input.addEventListener('input', validateForm);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita la recarga de página

        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            message: messageInput.value.trim()
        };

        console.log('--- NUEVO CONTACTO RECIBIDO ---');
        console.log(formData);

        // Alerta de éxito
        alert('¡El formulario se ha enviado correctamente! Revisaremos tu consulta pronto.');

        form.reset();
        submitBtn.disabled = true;
    });
});