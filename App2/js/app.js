
const tbody = document.querySelector('tbody');


document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault();
    

    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];
    

    const tr = document.createElement('tr');
    

    campos.forEach(e => {
        

        const td = document.createElement('td');


        td.textContent = e.value;


        tr.appendChild(td);
    });
    

    tbody.appendChild(tr);


    this.reset();    
})