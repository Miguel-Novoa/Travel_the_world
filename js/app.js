document.addEventListener('DOMContentLoaded', e => {
    let dateFormBtn = document.getElementById('dateBtn');

    dateFormBtn.addEventListener('click', () => {
        let fromDate = new Date(document.getElementById('from').value);
        let toDate = new Date(document.getElementById('to').value);

        if (fromDate instanceof Date && !isNaN(fromDate) === true && toDate instanceof Date && !isNaN(toDate) === true) {
            window.alert('OK!');
        } else {
            window.alert('Au moins une des dates n\'est pas valide !');
        }
    });
});