let encode = document.querySelector('#encode'); // Queryselector Retorna o primeiro elemento 
let decode = document.querySelector('#decode'); //dentro do documeto que foi 
let output = document.querySelector('textarea');//especificado pelo seletor.

encode.addEventListener('click', () =>{
    output.value = btoa(output.value) ;
});

decode.addEventListener('click', () =>{
    output.value = atob(output.value) ;
});

