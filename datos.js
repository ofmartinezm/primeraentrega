const opciones = {

	id: {
		alias: 'i',
		demand: true
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	documento:{
		demand: true,
		alias: 'd'
	},
	

}


let Cursos = [{
    id:1,
    nombre: 'Node JS Básico',
    duracion: 40,
    valor: 1800000
    },
    {
    id:2,
    nombre: 'Node JS Avanzado',
    duracion: 30,
    valor: 2000000
    },
    {
    id:3,
    nombre: 'Excel Financiero',
    duracion: 36,
    valor: 2800000
    },
    {
    id:4,
    nombre: 'Rubby',
    duracion: 60,
    valor: 3200000
    },
    ];


// let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno + nota_dos + nota_tres) / 3;
const mostrarTodos=()=>{

    Cursos.forEach((elemento)=> {
        setTimeout(()=>{ 
         let    respuesta = ('** Código del curso:'+ elemento.id +
            ' -- Nombre del  curso:'+ elemento.nombre+
            ' -- Duración del curso:'+ elemento.duracion+
            ' -- Valor del  curso:$'+ elemento.valor);
            console.log(respuesta);
        },2000);
            });
    
        };


		const fs=require('fs');
	 
		const buscarCurso= (numeroCurso)=> { 
		
		const	 detalleCurso= Cursos.find( curso => curso.id == numeroCurso) ;
		
		if(detalleCurso==undefined){
			console.log('*** El ID del curso seleccionado no existe!! por favor seleccione un ID valido');
			mostrarTodos();
		}
		else{
		datos=( 'El alumno '+argv.n+ ' con ducumento numero:'
		+argv.d+ '\n'+
		' Se inscribio correctamente en el siguiente curso => #'+argv.i+'\n'+
		', Nombre curso:'+ detalleCurso.nombre+'\n'+
		' ,Duración:'+ detalleCurso.duracion+' Horas'+'\n'+
		' ,Valor del  curso:$'+ detalleCurso.valor	);

		crearArchivo(datos);
		}
	}

	let crearArchivo=(texto)=>{
		
		fs.writeFile('inscripcion_'+argv.d+'.txt','Datos de inscripcion: '+texto, (err)=>{
			if(err) throw (err);
			console.log('Se ha creado correctamente el archivo con los datos de inscripción');
		});
	}



const argv = require('yargs')
			.command ('inscribir','Inscribir curso', opciones)
			.argv



module.exports = {
	buscarCurso,
	mostrarTodos,
	argv
};