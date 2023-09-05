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

      <Link href={"./casas/casa-02"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c02/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Centro"
            endereco="R. General Pederneiras, 229"
            dormitorios="4"
            area="359,10"
            valor="1.800.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-03"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c03/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Centro"
            endereco="Av. Cel. Augusto L. de Carvalho, 439"
            dormitorios="7"
            area="394,77"
            valor="2.000.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-04"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c04/c02.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Sócrates Rezende"
            endereco="Av. Helena Chaves, 166"
            dormitorios="3"
            area="144"
            valor="300.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-05"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c05/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Cidade Nova"
            endereco="Rua Mário Ramos, 360"
            dormitorios="3"
            area="85,88"
            valor="290.000,00"/>
        </Card.Root>
      </Link>
    </>
  )
}