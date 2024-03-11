import Link from 'next/link'

export default function CadUsuario () {
    return(
        <>
           <h1>Cadastro</h1> 
           <p>Insira as Informações do usuário</p>


     <ul>
       <li><Link href={'/'}>Voltar</Link></li>
     </ul>  

        </>
    )
}