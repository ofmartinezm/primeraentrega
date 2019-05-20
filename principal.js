const {mostrarTodos,buscarCurso,  argv} = require('./datos.js')
const fs=require('fs');

console.log(argv);

if (argv._[0]=='inscribir'){

	buscarCurso(argv.i);
	

}

else {
	
	console.log (mostrarTodos());
} 
	 