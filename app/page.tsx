import Link from 'next/link'

export default function Page() {
  return(
    <>
        <h1>Hello, Next.js!</h1>
        <h2>Título 2</h2>
        <h3>Título 3</h3>
        Qualquer coisa
        
     <ul>
       <li><Link href={'/sobre'}>Sobre</Link></li>
       <li><Link href={'/usuarios/cadastrousuario'}>Cadastro de Usuario</Link></li>
       <li><Link href={'/usuarios'}>Lista de Usuarios</Link></li>
     </ul>  
    </>
  );
}