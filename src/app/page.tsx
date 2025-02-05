import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
        reprehenderit harum! Necessitatibus mollitia debitis, quas, itaque nemo
        eveniet ratione cum, magni velit ut sed nihil illum ipsam optio. Beatae
        eos, earum fuga reprehenderit voluptatum culpa quibusdam, repudiandae
        fugiat eius ipsa minus alias, tempore doloremque porro. Vel saepe culpa
        cupiditate, ad at laudantium dolorem, debitis quas quia recusandae odit
        eum nostrum molestias. Nulla possimus similique ducimus blanditiis, sed
        quae dignissimos voluptatum, sunt suscipit omnis incidunt magni
        reiciendis quo consectetur eum optio cum, perspiciatis quas obcaecati
        hic tempore! Sapiente sit, eligendi asperiores illum sint ullam autem
        possimus velit nesciunt a corporis libero, totam omnis inventore
        perferendis nisi, molestias iure. Saepe similique assumenda obcaecati
        voluptatem ipsa adipisci, corrupti quidem fugit maxime a, optio facilis
        excepturi sapiente voluptatibus ex minus sit veniam neque est ducimus?
        Exercitationem dignissimos vitae vero. Cum explicabo ratione similique
        praesentium dolores autem neque fugit reprehenderit sequi est ducimus
        fuga possimus beatae incidunt itaque labore maiores temporibus odio sunt
        doloremque, tempore earum et, nam voluptate. Eos, hic doloribus, aliquid
        quaerat quam nihil saepe fugit possimus labore alias ipsa accusantium a
        maxime aliquam, iusto repudiandae beatae quis eius dignissimos quo
        veritatis? Alias, maiores! Excepturi modi voluptas vitae placeat ab
        veniam vero quia obcaecati natus ad magnam, consectetur ipsa. Odio, quod
        laborum. Quos atque ipsam, enim temporibus at voluptatem voluptas
        dolorem deleniti similique beatae sequi ipsa esse fuga consequatur
        molestias, possimus ut soluta! Debitis placeat accusantium maxime
        voluptatibus, nihil libero et est fuga rem in doloremque atque quaerat
        earum dicta similique, illum tempore. Aperiam ipsam tempore impedit odit
        quisquam, adipisci nemo reiciendis voluptatum perferendis unde velit?
        Dignissimos nam officia voluptatum doloremque dolor iste, repudiandae
        recusandae animi architecto? Molestiae, quisquam. Tempora ab earum enim
        culpa rerum minus! Unde quia magni quod dolores mollitia, sunt ratione
        iusto optio ab ex inventore modi ducimus recusandae aliquid ea fugit
        nostrum. Ducimus fugit officiis aut cum officia aliquam est similique
        blanditiis qui enim, modi deleniti ex facilis aspernatur voluptates
        nihil quia eveniet laudantium? Aliquam voluptas commodi nemo ad quam.
        Iste sed est dolores deleniti error velit inventore architecto totam ut
        facere debitis ad dicta ex corporis ipsam dolore, tempore, voluptate
        labore maxime animi reiciendis cumque fugit! Harum autem inventore sed
        nesciunt quos recusandae cumque consectetur nulla voluptatem veniam, rem
        sint in eos dolorem quas nihil eius ipsum animi reprehenderit assumenda,
        fugiat at maiores deleniti labore? Pariatur, veritatis? Voluptate,
        assumenda. Itaque perferendis nihil eligendi, dolorum quia culpa unde
        illo expedita atque harum iusto earum recusandae placeat blanditiis iure
        at nemo nostrum facere nesciunt adipisci sapiente debitis? Distinctio,
        veritatis et! Dolore nam asperiores aliquid itaque beatae, adipisci
        consequatur id ipsam unde possimus minima ex! At quis repellat
        voluptatibus.
      </p>
      <div className="flex justify-center my-5">
        <Button  variant={"default"}>
          Click Me
        </Button>
      </div>
    </div>
  );
}
