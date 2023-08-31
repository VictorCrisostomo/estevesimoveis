import Link from "next/link";
import { Card } from "@/components/card/Index";

export function CasasGroup() {
  return(
    <>
      <Link href={"./casas/casa-01"}>
        <Card.Root>
          <Card.Image>
            <div className="w-72 h-40 md:w-60 md:h-32 bg-[url(../assets/c01/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo=""
            bairro=""
            endereco=""
            dormitorios=""
            area=""
            valor=""/>
        </Card.Root>
      </Link>
    </>
  )
}