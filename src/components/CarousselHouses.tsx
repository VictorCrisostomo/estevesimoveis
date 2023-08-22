'use client';
import Image from 'next/image';

export function CarousselHouse() {
  return (
    <>     
      <div className="relative overflow-auto" id="">
          <div className="relative flex gap-1 snap-x overflow-x-auto scrollCards">

            <div className="snap-center shrink-0">
              <div className="snap-start w-[560px] h-64 md:h-96 bg-red-400">
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="snap-start w-[560px] h-64 md:h-96 bg-blue-400">
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="snap-start w-[560px] h-64 md:h-96 bg-amber-200">
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="snap-start w-[560px] h-64 md:h-96 bg-green-400">
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="snap-start w-[560px] h-64 md:h-96 bg-orange-400">
              </div>
            </div>

          </div>
      </div>
    </>
  )
}


