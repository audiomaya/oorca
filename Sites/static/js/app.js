(function (){
	var aplicacion = angular.module('curso', []);

	aplicacion.controller('CursoController', function () {
		this.cursos = {
			id: 001;
			nombre: 'Open Water Diver',
			nivel: 'Básico'
			requisitos: 'Ninguno'

		};
	});

})();