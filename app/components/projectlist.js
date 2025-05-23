import Image from 'next/image';
import Link from 'next/link';

export default function ProjectList({ imgUrl, title, desc, tags, width, height, gitLink, webLink, buttonText }) {
    return (
        <div className="flex flex-col h-full border-[1px] border-dark rounded-sm">
            <a className="relative flex h-auto p-8">
                <Image 
                    src={imgUrl}
                    width={width}
                    height={height}
                    alt={desc}
                    className='rounded-t-md object-fill w-auto'
                /> 
            </a>
            <div className="flex flex-col justify-start items-start p-8 h-auto gap-4">
                <h2 className="text-3xl">{title}</h2>
                <p>{desc}</p>
                <Link 
                    href={webLink} 
                    id="underline" 
                    className="flex w-max h-max font-medium" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {buttonText}
                </Link>
                <div className="pt-5 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span 
                            key={tag} 
                            className="text-lg font-medium pr-2 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
