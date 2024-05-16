const validateForm = () => {
    const body = document.querySelector('.balkony');
    const nameInputs = document.querySelectorAll('input[name="fio"]');
    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    const calcInputs = document.getElementById('calc-input');

    nameInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/g, "")
        });
    });

    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()+]/g, "");
        });
    });

    if (body) {
    calcInputs.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
    }
};
export default validateForm;
