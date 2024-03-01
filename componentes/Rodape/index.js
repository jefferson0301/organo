import "./Rodape.css"

const Rodape = () => {
  return (
    <footer className="rodape" >
        <div className="rodape-redes-sociais" >
            <a href="https://pt-br.facebook.com/" ><img src="/imagens/fb.png" alt="Logo Facebook" /></a> 
            <a href="https://pt-br.facebook.com/" ><img src="/imagens/tw.png" alt="Logo Twiter" /></a> 
            <a href="https://pt-br.facebook.com/" ><img src="/imagens/ig.png" alt="Logo Instagram" /></a>
        </div>
        
        <img src="/imagens/logo.png" alt="Logo Organo" />
        <h3>Desenvolvido por Alura</h3>
    </footer>
  )
}

export default Rodape