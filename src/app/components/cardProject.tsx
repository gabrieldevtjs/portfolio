import Image from "next/image"
export default function CardProject({title, description} : {title: string, description: string}){
    return (
        <div className="flex flex-col items-center w-full lg:w-1/2 xl:w-1/2 p-4">
          <Image src="/icons/computador.png" alt="GitHub" width={340} height={20} />
          <div className="flex flex-col items-center gap-2 px-4">
            <span className="text-4xl xl:text-2xl">{title}</span>
            <p className="text-justify xl:text-sm">{description}</p>
          </div>
          <div className="pt-6">
            <span className="bg-fuchsia-700 rounded-2xl px-8 py-2 text-white xl:text-sm">
              <a href="/project">DEMO</a>
            </span>
          </div>
        </div>
    )
}


