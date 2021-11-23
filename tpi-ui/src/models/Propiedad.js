class Propietario {
  nro_cliente = 0;
  tipo_cliente = 'particular';
  nombre_apellido = 'cosme fulanito';
  dni = 000000;
  correo = 'cosme@gmail.com'
  direccion = 'calle falta 123';

  contructor(cliente, nombre_apellido, dni, correo, direccion) {
    this.setCliente(cliente);
    this.setNombreApellido(nombre_apellido);
    this.setDni(dni);
    this.setCorreo(correo);
    this.setDireccion(direccion);
  }

  setCliente(tipo) {
    if (tipo === 'corporativo' || tipo === 'particular') {
      this.tipo_cliente = tipo;
    }

    throw new Error('solo puede elejir 2 opciones: corporativo o particular')
  }

  setNombreApellido(nom_app) {
    this.nombre_apellido = nom_app;
  }

  setDni(dni) {
    if (typeof dni === number && (dni+'').length === 8) {
      this.dni = dni;
    }

    throw new Error('dni necesita 8 digitos')
  }

  setCorreo(correo) {
    if (correo) {
      this.correo = correo;
    }

    throw new Error('validar correo electronicio')
  }

  setDireccion(direccion) {
    if (direccion) {
      this.direccion = direccion;
    }

    throw new Error('validar direccion - no puede ser vacio')
  }
}

export default class Propiedad {

  tipo_contrato = 'venta';
  propietario = null;
  constructor(
    prop = new Propietario()
  ) {
    propietario = prop
  }
}