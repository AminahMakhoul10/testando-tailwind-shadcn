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
            url:'',
            alt: 'Logo do Rust',

          }
        }
      ]

    }

  ]
    
  


  return(
    
    <main className="mt-10 px=12 lg:px=20 space-y-14">
      <div className="space-y-10">
      <h1 className="text-2xl lg:text-5xl font-bold text-center text-zinc-50">Site para conferir noticias relacionadas ao mundo dos &lt;códigos&gt;</h1>
      <h2 className="text-xl lg:text-3xl text-center">Aqui voce encontrará tudo sobre as notícias de &lt;códigos&gt;</h2>
      </div>
      <h4 className="">noticias...</h4>

      {news.map((props, idx) => (
        <News key={props.title + idx} {...props} />

      ))}
      </main>
  )
}

//parei em 30:36