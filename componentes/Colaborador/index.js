import React from 'react'
import "./Colaborador.css"

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {// {nome, imagem, cargo} desestruturação ao inves de passar prop passa a desestruturação
  return (
    <div className='colaborador' >
        <div className='cabecalho' style={{backgroundColor: corDeFundo}} >
            <img src={imagem} alt={nome} />
        </div>
        {/* "https://github.com/viniciosneves.png" */}
        <div className='rodape' >
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>

    </div>
  )
}

export default Colaborador