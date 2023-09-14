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

      <Link href={"./casas/casa-06"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c06/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Centro"
            endereco="Praça 25 de maio, 32"
            dormitorios="3"
            area="135,00"
            valor="630.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-07"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c07/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Tancredão"
            endereco="Rua Fidelina Barreto, 350"
            dormitorios="3"
            area="250,00"
            valor="525.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-08"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c08/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Centro"
            endereco="Rua Barão de Cotegipe, 528"
            dormitorios="2"
            area="84,00"
            valor="320.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-09"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c09/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Praia da Costa"
            endereco="Rua S/N un 1, Lote Águas do Patipe"
            dormitorios="2"
            area="208,94"
            valor="285.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-10"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c10/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Centro"
            endereco="Av. Ilhéus, 270"
            dormitorios="2"
            area="180,00"
            valor="470.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-11"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c11/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Centro"
            endereco="Av. Otávio Mangabeira, 1257"
            dormitorios="3"
            area="185,90"
            valor="380.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-12"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c12/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Ilha de Atalaia"
            endereco="Tv. Ilha Náutica, S/N"
            dormitorios="2"
            area="120,00"
            valor="280.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-13"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c13/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Praia da Costa"
            endereco="Rua dos Anus, 250"
            dormitorios="2"
            area="220,00"
            valor="280.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-14"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c14/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Centro"
            endereco="Av. Otávio Mangabeira, 791"
            dormitorios="3"
            area="192,02"
            valor="409.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-15"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c15/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Tancredão"
            endereco="Rua Fidelina Barreto, 142"
            dormitorios="2"
            area="97,11"
            valor="198.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-16"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c16/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Ilha de Atalaia"
            endereco="Rua das Lagostas, 51"
            dormitorios="3"
            area="212,75"
            valor="400.000,00"/>
        </Card.Root>
      </Link>

      <Link href={"./casas/casa-17"}>
        <Card.Root>
          <Card.Image>
            <div className="w-80 h-40 md:w-72 md:h-36 bg-[url(../assets/c17/c01.jpg)] bg-center bg-cover rounded-t-xl" />
          </Card.Image>
          <Card.Description
            tipo="Casa"
            bairro="Ilha de Atalaia"
            endereco="Av. Tucunaré, 1350"
            dormitorios="4"
            area="415,00"
            valor="690.000,00"/>
        </Card.Root>
      </Link>

    </>
  )
}