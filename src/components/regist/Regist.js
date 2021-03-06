import React, { Component } from 'react';
import './Regist.css';
import axios from 'axios';

export class Registry extends Component {

  constructor(props){
    super(props);

    this.state={
      tipo_documento: "",
      numero_documento: "",
      primer_nombre: "",
      segundo_nombre: "",
      primer_apellido:"",
      segundo_apellido: "",
      correo:"",
      contrasena:"",
      errors:""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.tipeDoc = this.tipeDoc.bind(this);
  }
  tipeDoc(){
    this.setState({
      tipo_documento:document.querySelector('#Document').value
    })
  }
  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
    console.log(this.tipo_documento);
    console.log(this.state.primer_nombre);
  }
  
  handleSubmit(event){
    const{
      tipo_documento,
      numero_documento,
      verifica_contrasena,
      primer_nombre,
      primer_apellido,
      segundo_apellido,
      correo,
      contrasena,
    } = this.state;
    axios
    .post("http://localhost:4200/users",
    {
      user: {
        nombre: primer_nombre,
        primerApellido: primer_apellido,
        segundoApellido: segundo_apellido,
        email: correo,
        password: contrasena,
        tipoDocumento: tipo_documento,
        estadoProceso: 1,
        documento: numero_documento,
        tipoUsuario: 0 ,
        district_id: 1,
        first_session: "true"
      }
    }, { withCredentials: true}
    )
    .then(response => {     
      console.log("registration res", response);
      window.location.href = '/login';  
    }).catch(error => {
      console.log("registration error", error);
    });

    event.preventDefault();

  }


  render() {
    return (
      <div>
        <div className="App-header App">
          <div className="col-md-12 page-title">
            <h3>Formulario de Registro</h3>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Informacion">
              <div className="spacer"></div>
              <h4>Señor ciudadano</h4>
              <p>El primer paso para definir su situación militar es diligenciar este formulario, con el fin de crear un registro en nuestro portal. Introduzca su información personal completando <b>TODOS</b> los campos. Registre su <b>correo electrónico personal y cree una contraseña</b> que recuerde fácilmente, tenga en cuenta que con estos datos ingresará al portal para completar los demás pasos para definir su situación militar.</p><p>Si no cuenta con un correo electrónico, debe crearlo previamente para registrarse y recibir notificaciones de la Dirección de Reclutamiento.</p>
              <p>Sus datos personales serán protegidos y son requeridos para que usted pueda consultarlos o actualizarlos cuando lo requiera.</p><p>Al hacer click en el botón REGISTRARSE le será enviado un mensaje al correo electrónico que usted registró, verifíquelo y lea las instrucciones que allí se le indican para activar su cuenta y entrar a su perfil.  Si el mensaje no se encuentra en la bandeja de entrada por favor revise la bandeja de Spam o correo no deseado.</p>
              <div className="spacer"></div>
            </div>

            <form onSubmit={this.handleSubmit}>
            <div className="col-md-9">
              <div className="row"> 
                <div className="col-md-11 Informacion2 col-md-offset-1"> 
                  <div className="row">
                      <div className="col-md-6">
                              <div className="control-group">
                                    <label>Tipo de documento (<span className="field-required">*</span>):</label>
                                    <select id="Document" name="tipo_documento"  className="form-control" tabIndex="1" onChange={this.tipeDoc}>
                                      <option value={this.state.tipo_documento}>Seleccione...</option>
                                      <option value="1">C&#233;dula de Ciudadan&#237;a</option>
                                      <option value="0">Tarjeta de Identidad</option>
                                      <option value="2">NUIP</option>
                                    </select>
                                    <span  className="field-validation-error" data-toggle="tooltip" data-placement="top" >&nbsp;&nbsp;&nbsp;</span>
                              </div>
                      </div>
                      <div className="col-md-6">
                              <div className="control-group">
                                <label >Número de documento (<span className="field-required">*</span>):</label>
                                <input type="text" 
                                  name="numero_documento" 
                                  placeholder="Documento Identidad" 
                                  className="form-control" 
                                  value={this.state.numero_documento} 
                                  onChange={this.handleChange} 
                                  tabIndex="2" />  
                             
                              </div>
                      </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                            <div className="control-group">
                              <label>Nombre 1(<span className="field-required">*</span>):</label>
                              <input type="text" 
                              name="primer_nombre" 
                              placeholder="Primer Nombre" 
                              value={this.state.primer_nombre}
                              onChange={this.handleChange} 
                              className="form-control" />
                            </div>
                    </div>
                  
                  
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                            <div className="control-group">
                             <label>Apellido 1(<span className="field-required">*</span>):</label>
                             <input type="text" 
                             name="primer_apellido" 
                             placeholder="Primer apellido" 
                             value={this.state.primer_apellido}
                             onChange={this.handleChange} 
                             className="form-control" />
                            </div>
                    </div>  
                    <div className="col-md-6">
                            <div className="control-group">
                             <label>Apellido 2(<span className="field-required">*</span>):</label>
                             <input type="text" 
                             name="segundo_apellido" 
                             placeholder="segundo apellido" 
                             value={this.state.segundo_apellido}
                             onChange={this.handleChange} 
                             className="form-control" />
                            </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                        <div className="control-group">
                             <label>Correo (<span className="field-required">*</span>):</label>
                             <input type="text" 
                             name="correo" 
                             placeholder="correo" 
                             value={this.state.correo}
                             onChange={this.handleChange} 
                             className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <label >Contrasena (<span className="field-required">*</span>):</label>
                             <input type="password" 
                             name="contrasena" 
                             placeholder="contrasena" 
                             onChange={this.handleChange} 
                             className="form-control" />
                    </div>  
                    <div className="col-md-6">
                    <label>Verifica Contrasena (<span className="field-required">*</span>):</label>
                             <input type="password" 
                             name="verifica_contrasena" 
                             placeholder="verifica_contrasena" 
                             onChange={this.handleChange} 
                             className="form-control" />
                    </div>              
                  </div>
                  <div className="row">
                        <div className="col-md-6">                                                           
						                <input type="submit"  value="Enviar"  className="btn btn-style" />
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

            
          </div>
        </div>
        
        </div>

        <div className="footer" >
        
        <hr></hr> 
        <label className="painted">DIRECCIÓN DE RECLUTAMIENTO</label>
        <br />
        <label>Av. Caracas No. 9-51 - Bogotá-Colombia</label>
        <br />
        <label>PBX: +57 (1) 3362211 Ext: 302 - 303 - 304 - 305 - 306 - 307 </label>
        </div>

        

      </div>
    );
  }
}



/*export default Formulario;*/
