import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";

export interface NewsProps{
    title: string;
    description: string;
    news: {
        title: string;
        description: string;
        image?:{
            url: string;
            alt: string;
        };
        date?: string;

    }[]

}
export const News = ({title, description, news}: NewsProps) => {
    return(
        <section className="space-y-10">
            <div className="flex flex-col justify-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-zinc-50">{title}</h3>
                <h4 className="">{description}</h4>
            </div>
            {news.map(({title, description, image, date}) => (
                <Card className="mx-auto mb-10">
                <CardContent className="flex justify-center">
                    {image &&(
                         <Image
                            src={'https://blog.rust-lang.org/images/rust-logo-blk.svg'} //src{image.url} aq colocar a url da imagem e ir configurar no next config
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="object-fill"
                         />
                    )}
                </CardContent>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  {date}
                </CardFooter>
              </Card>
            ))}
        </section>


    )
}
