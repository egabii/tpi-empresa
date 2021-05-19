
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';
import {useState} from 'react'





const Citas = () => {
    
  const solicitudes=[
    {
        item: 1,
        apeyNom: 'Gonzalo Zoloaga',
        dni: '12345678',
        cuil: '20123456784',
        fecnac: '21/09/2000',
        telefono: '3777123456',
        mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
      },
    {
        item: 2,
        apeyNom: 'Gonzalo Zoloaga',
        dni: '12345678',
        cuil: '20123456784',
        fecnac: '21/09/2000',
        telefono: '3777123456',
        mail: <a href="mailto:gonzalozoloaga44@gmail.com">gonzalozoloaga44@gmail.com</a>,
      }
  ];

      const [citas, setcitas] = useState(solicitudes);
      const [modalEditar, setModalEditar] = useState(false);
      const [modalEliminar, setModalEliminar] = useState(false);
      const [modalInsertar, setModalInsertar] = useState(false);

      const [citaSeleccionada, setcitaSeleccionada] = useState({
        item: '',
        apeyNom: '',
        dni: '',
        telefono:'',
        mail:'',
      });

      const seleccionarCita=(elemento, caso)=>{
        setcitaSeleccionada(elemento);
        (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
          }

          const handleChange=e=>{
            const {name, value}=e.target;
            setcitaSeleccionada((prevState)=>({
              ...prevState,
              [name]: value
            }));
          }

          const editar=()=>{
            var dataNueva=citas;
            dataNueva.map(cita=>{
              if(cita.item===citaSeleccionada.item){
                cita.apeyNom=citaSeleccionada.apeyNom;
                cita.dni=citaSeleccionada.dni;
                cita.telefono=citaSeleccionada.telefono;
                cita.mail=citaSeleccionada.mail;
              }
            });
            setcitas(dataNueva);
            setModalEditar(false);
          }
        
          const eliminar =()=>{
            setcitas(citas.filter(cita=>cita.item!==citaSeleccionada.item));
            setModalEliminar(false);
          }

          const abrirModalInsertar=()=>{
            setcitaSeleccionada(null);
            setModalInsertar(true);
          }

          const insertar =()=>{
            var valorInsertar=citaSeleccionada;
            valorInsertar.item=citas[citas.length-1].item+1;
            var dataNueva = citas;
            dataNueva.push(valorInsertar);
            setcitas(dataNueva);
            setModalInsertar(false);
          }

    return (
        <div style={{padding:'15px'}}>
              <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
            <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Item</th>
            <th>Nombre y Apellido</th>
            <th>DNI</th>
            <th>Telefono</th>
            <th>Mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {citas.map(elemento=>(
            <tr>
              <td>{elemento.item}</td>
              <td>{elemento.apeyNom}</td>
              <td>{elemento.dni}</td>
              <td>{elemento.telefono}</td>
              <td>{elemento.mail}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarCita(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarCita(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Cita</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Item</label>
            <input
              required
              className="form-control"
              readOnly
              type="text"
              name="item"
              value={citaSeleccionada && citaSeleccionada.item}
            />
            <br />

            <label>Nombre y Apellido</label>
            <input
              required
              className="form-control"
              type="text"
              name="apeyNom"
              value={citaSeleccionada && citaSeleccionada.apeyNom}
              onChange={handleChange}
            />
            <br />

            <label>DNI</label>
            <input
              required
              className="form-control"
              type="text"
              name="dni"
              value={citaSeleccionada && citaSeleccionada.dni}
              onChange={handleChange}
            />
            <label>Telefono</label>
            <input
              required
              className="form-control"
              type="text"
              name="telefono"
              value={citaSeleccionada && citaSeleccionada.telefono}
              onChange={handleChange}
            />
            <label>Mail</label>
            <input
              required
              className="form-control"
              type="text"
              name="mail"
              value={citaSeleccionada && citaSeleccionada.mail}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar la cita {citaSeleccionada && citaSeleccionada.item}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Cita</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Item</label>
            <input
              required
              className="form-control"
              readOnly
              type="text"
              name="item"
              value={citas[citas.length-1].item+1}
            />
            <br />

            <label>apeynom</label>
            <input
              required
              className="form-control"
              type="text"
              name="apeyNom"
              value={citaSeleccionada ? citaSeleccionada.apeyNom: ''}
              onChange={handleChange}
            />
            <br />

            <label>DNI</label>
            <input
              required
              className="form-control"
              type="text"
              name="dni"
              value={citaSeleccionada ? citaSeleccionada.dni: ''}
              onChange={handleChange}
            />
            <br />
            <label>telefono</label>
            <input
              required
              className="form-control"
              type="text"
              name="telefono"
              value={citaSeleccionada ? citaSeleccionada.telefono: ''}
              onChange={handleChange}
            />
            <br />
            <label>mail</label>
            <input
              required
              className="form-control"
              type="text"
              name="mail"
              value={citaSeleccionada ? citaSeleccionada.mail: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    
        </div>
    )
}

export default Citas

