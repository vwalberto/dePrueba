let notas = [10,4,5,9,7];
let notasAprobadas = notas.filter(function(numero){
    return numero >=7;
});

console.log(notasAprobadas);