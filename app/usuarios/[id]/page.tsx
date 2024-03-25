import Link from 'next/link';

export default function PerfilUsuario ({ params }: { params: { id: string } }) {
    return(
        <>
            <h1>Perfil</h1>
            <p>Nome do usuário {params.id}</p>

            <p><Link href={'/usuarios'}>Voltar</Link></p>            
        </>
    );
}