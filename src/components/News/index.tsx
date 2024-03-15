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
export const News = ({}: NewsProps) => {
    return(
        <div>
            <span>noticia</span>
        </div>


    )
}