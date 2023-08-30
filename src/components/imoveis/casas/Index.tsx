import Link from "next/link";
import { Card } from "@/components/card/Index";

export function CasasGroup() {
  return(
    <>
      <Link href={"./casas/casa-01"}>
        <Card.Root>
          <Card.Image>

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