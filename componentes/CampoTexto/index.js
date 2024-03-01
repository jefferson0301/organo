//import {useState} from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
  //props = propriedades são propriedades que são passadas como parametros
  const placeholderModificado = `${props.placeholder}...`
  
  //let valor = "jefferson"
  //const [valor, setValor] = useState('')

  const aoDigitado = (evento) => {
    //setValor(evento.target.value) 
    //console.log(valor)
    props.aoAlterado(evento.target.value)
  }

  return (
    
    <div className='campo-texto' >
        <label htmlFor="nome">{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} name='nome' placeholder={placeholderModificado} type="text" />
    </div>
  )
}

export default CampoTexto