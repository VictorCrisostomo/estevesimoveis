import Image from "next/image"
import family from "@/assets/undraw_family_vg76.svg"

type RootProps = {
  children: React.ReactNode
}

export function Root({children}: RootProps) {
  return (
    <>
      <section className="bg-zinc-200">
        <div className="pt-12 md:mx-32">
          <h2 className="text-xl font-semibold text-center text-zinc-700 pb-4">O que você está procurando?</h2>
          
          <div className="mt-6 relative overflow-auto">
            {children}
          </div>
        </div>
        
        <div className="my-20 mx-8 md:mx-32 md:flex items-center justify-center">
            <div className="pb-8 md:mr-4 flex justify-center md:justify-end">
              <Image src={family} alt="" className="w-[50%] md:w-[75%]" />
            </div>
            <div className="md:ml-4">
              <p className="text-center md:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsa laborum aut natus dolor laboriosam possimus quo mollitia cupiditate in fuga asperiores harum non, id distinctio, repellendus amet, sequi esse.</p>
            </div>
        </div>
      </section>
    </>




  )
}
