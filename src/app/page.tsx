import { News, NewsProps } from "@/components/News";

export default function Home(){
  const news: NewsProps[] = [
    {
      title: 'Rust_',
      description:
      'Veja os últimos posts sobre uma das linguagens mais usadas no mundo da programação',
      news: [
        {
          title: 'Anunciando Rust 1.59.0',
          description: 'A equipe Rust esta feliz em anunciar uma nova versão de Rust 1.60.0',
          date: '07 de abr de 2022',
          image:{
            url:'https://www.rust-lang.org/static/images/rust-social.jpg',
            alt: 'Logo do Rust',

          }
        },

        {
          title: 'Anunciando Rust 1.59.0',
          description: 'A Realese de hoje lançou no dia em que a atenção',
          date: '10 de fev de 2022',
          image:{
            url:'https://www.rust-lang.org/static/images/rust-social.jpg',
            alt: 'Logo do Rust',

          }
        },
        {
          title: 'Anunciando Rust 1.59.0',
          description: 'A equipe Rust publicou uma nova versão do Rust 1.59.0. O Rust é uma linguagem de programação que capacita todos a construir software confiável e eficiente.',
          date: '24 de fev de 2022',
          image:{
            url:'https://www.rust-lang.org/static/images/rust-social.jpg',
            alt: 'Logo do Rust',

          }
        },
        {
          title: 'Anunciando Rust 1.59.0',
          description: 'Existem outras mudanças na versão Rust 1.59.0. Confira o que mudou em Rust , Cargo e Clippy .',
          date: '24 de fev de 2022',
          image:{
            url:'https://www.rust-lang.org/static/images/rust-social.jpg',
            alt: 'Logo do Rust',

          }
        }
      ]

    }

  ]

  return(
    
    <main className="mt-10 px=12 lg:px=20 space-y-14">
      <div className="space-y-10">
      <h1 className="text-2xl lg:text-5xl font-bold text-center  bg-gray-500 ">Site para conferir noticias relacionadas ao mundo dos &lt;códigos&gt;</h1>
      <h2 className="text-xl lg:text-3xl text-center ">Aqui voce encontrará tudo sobre as notícias de &lt;códigos&gt;</h2>
      </div>
      <h4 className="text-xl font-bold">Principais Noticias...</h4>

      {news.map((props, idx) => (
        <News key={props.title + idx} {...props} />

      ))}
      </main>
  )
}
