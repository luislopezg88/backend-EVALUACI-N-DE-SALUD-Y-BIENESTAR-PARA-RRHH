function getEmpleadoInfo(empleado) {
    return {
      name: empleado.name,
      lastname: empleado.lastname,
      edad: empleado.edad,
      sexo: empleado.sexo,
      puesto: empleado.puesto,
      id: empleado.id || empleado._id,
    };
  }
  
  module.exports = getEmpleadoInfo;
  