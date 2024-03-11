import Link from 'next/link'

export default function Page() {
  return(
    <>
        <h1>Hello, Next.js!</h1>
        <h2>Título 2</h2>
        <h3>Título 3</h3>
        Qualquer coisa
        
     <ul>
     <br/>
       <li><Link href={'/sobre'}>Sobre</Link></li><br/>
       <li><Link href={'/CadUsuario'}>Cadastro de Usuario</Link></li>
     </ul>  
    </>
  );
}