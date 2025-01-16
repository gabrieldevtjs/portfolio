import Image from "next/image"
import StackCard from "./stack.card"
export default function CardProject({url, urlProject, hidth, title, description, stacks} : {url: string, urlProject: string, hidth: number, title: string, description: string, stacks: string[]}){

    return (
        <div className="flex flex-col items-center w-full p-4 lg:flex-row gap-8 md:px-24 lg:px-0">
          <div className="lg:w-1/2">
          <Image src={`/icons/${url}`} alt="GitHub" width={hidth} height={20} className="md:h-[140px] md:w-[140px] lg:w-[190px] lg:h-[190px] xl:h-[500px] lg:ml-20"/>
          </div>
          <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col items-center gap-2 px-2">
            <span className="text-2xl xl:text-3xl">{title}</span>
            <p className="text-justify xl:text-sm  text-stone-700">{description}</p>
  
            <StackCard stacks={stacks}/>
        <div className="pt-4">
            <span className="bg-fuchsia-700 rounded-2xl px-8 py-2 text-white xl:text-sm">
              <a href={urlProject} target="_blank">VIEW</a>
            </span>
          </div>
          </div>
        </div>
        </div>
    )
}


