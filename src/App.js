import React,{useState} from 'react';
import './App.css';


export const App = () => {

  const [state, setstate] = useState(false);

  const checkMethod = (e) =>{
   
    setstate(e.target.checked);
  }

  const [valid, setValid] = useState(false);
  

  const openModal = (e) =>{
   if(state===true){
     setValid(true);
   }
  
  }
  

  return (
    <main className="formulario">
    <section>
      <h1>Formulario de inscripción de proveedores</h1>
      <div className="descripcion">
      Podrán inscribirse todas las personas interesadas en ser proveedores de bienes y servicios. Cualquier persona natural o jurídica podrá registrarse, cumpliendo con los requisitos exigidos y el procedimiento que la Empresa define para tal efecto. 
      <br/><br/>
      Teniendo en cuenta la estrategia de aprovisionamiento, la Empresa establece criterios de capacidad jurídica, financiera, técnica, administrativa, operativa y demás que se consideran pertinentes, con el fin de que los proveedores registrados puedan ser precalificados para las diferentes categorías de bienes y servicios, lo cual servirá de fuente de información para realizar solicitudes de ofertas, según los procedimientos establecidos en el Reglamento de Contratación. 
      <br/>
      Para poder participar en los procesos de contratación de FINSOCIAL, es requisito para el proveedor, estar registrado en el sistema <p className="rosa"> diligenciando todos los datos solicitados a continuación.</p>
      </div>
    </section>
      
      <section>
      <p>Seleccione el tipo de persona bajo el cual desea realizar el registro</p>
      <div className="secciones">
        <div className="seccion">
          <img className="icono" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/452/external-person-infographic-elements-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
          <div className="seccion-texto">
            <p>
            Seleccione esta opción si usted es <br/>  persona natural.
            </p>
          </div>
          
          <button type="submit" onClick={openModal} >Iniciar</button>
        </div>

        <div className="seccion">
          <img className="icono" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/452/external-person-infographic-elements-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
          <div className="seccion-texto">
            <p>
            Seleccione esta opción si usted es <br/>  persona natural.
            </p>
          </div>
          
          <button type="submit">Iniciar</button>
        </div>
        
      </div>

      <form>
          <input type="checkbox" id="check" onClick={checkMethod} value="true" />
          <label for="check" >
          Autorizo el <a>tratamiento de mis datos personales</a> y autorizo <a>términos y condiciones</a> de la página web.
          </label>
        </form>

      </section>

      {
        valid==true ?(
      <section>
        <p className="subtitulo">
        1.1. Identificación del proveedor
        </p>

       <form >
         <div className="form-tipo1">
           <input type="text" placeholder="Nombres"  className="formulario-proveedor-1" required />
           <input type="text" placeholder="Apellidos" className="formulario-proveedor-1" required />
         </div>

         <div className="form-tipo2">
         <input type="text" placeholder="NIT/CELULA" className="formulario-proveedor" required/>
         <input type="text" placeholder="Direccion" className="formulario-proveedor" required/>
         <select className="formulario-proveedor"  id="ciudad" name="ciudad"required>
           <option value="Bogota" >Bogota</option>
         </select>
         
         </div>
         <div className="form-tipo2">
         <input type="text"  placeholder="Telefono" className="formulario-proveedor"required/>
         <input type="text" placeholder="Correo Electronico" className="formulario-proveedor"required/>
         <input type="text" placeholder="Describa producto o servicio" className="formulario-proveedor"required />
         </div>
         <p className="subtitulo">
         1.2. Identificación de contacto 
        </p> 
         <div className="form-tipo2">
         
         <input type="text" className="formulario-proveedor" placeholder="Nombres" required/>
         <input type="text" className="formulario-proveedor" placeholder="Apellidos"required />
         <input type="text" className="formulario-proveedor" placeholder="Cargo"required/>

         </div>

         <div className="form-tipo1 ok">
           <input type="text" className="formulario-proveedor-1" placeholder="Correo Electronico"required/>
           <input type="text" className="formulario-proveedor-1" placeholder="Telefono" required/>
         </div>
         <button type="submit" > Siguiente </button>

       </form>
        
      </section>) 
      :(<div>Hola</div>)
      }
    

      
    </main>
  )
}
