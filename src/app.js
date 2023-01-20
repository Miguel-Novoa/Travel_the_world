document.addEventListener('DOMContentLoaded', e =>{
    let dateFormBtn = document.getElementById('dateBtn')

    dateFormBtn.addEventListener('click', () => {
        let fromDate = new Date(document.getElementById('from').value)
        let toDate = new Date(document.getElementById('to').value)

        if(fromDate instanceof Date && !isNaN(fromDate)=== false && 
        toDate instanceof Date && !isNaN(toDate)=== false){
            window.alert('OK!')
        }else{
            window.alert('Les dates ne sont pas valides !')
        }
    })
})