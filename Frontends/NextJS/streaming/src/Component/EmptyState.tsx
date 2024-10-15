import Image from "next/image"
export default function EmptyState({src, alt, width, height, title, description} : {src :string, alt: string, width:number, height:number, title: string, description: string}) {
    
    return (
        <section className='empty-state'>
        <Image 
            src={`/icons/${src}`}
            alt={alt}
            width={width}
            height={height}
        /> 
        <p>{title}</p>
        <p>{description}</p>
    </section>
    )
}