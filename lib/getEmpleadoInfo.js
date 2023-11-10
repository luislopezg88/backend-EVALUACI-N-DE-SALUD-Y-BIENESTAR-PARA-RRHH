function getEmpleadoInfo(empleado) {
    return {
      name: empleado.name,
      lastname: empleado.lastname,
      edad: empleado.edad,
      sexo: empleado.sexo,
      puestoTrabajo: empleado.puestoTrabajo,
      id: empleado.id || empleado._id,
    };
  }
  
  module.exports = getEmpleadoInfo;
  