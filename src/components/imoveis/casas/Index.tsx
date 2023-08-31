import Link from "next/link";
import { Card } from "@/components/card/Index";

export function CasasGroup() {
  return(
    <>
      <Link href={"./casas/casa-01"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c01/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Birindiba"
            endereco="R. Edmundo Lopes de Castro, 367"
            dormitorios="3"
            area="129,42"
            valor="350.000,000"/>
        </Card.Root>
      </Link>
    </>
  )
}