import UserTemplate from "../../templates/userTemplate";

export default function QuemSomos() {
  return (
    <UserTemplate>
      <section className="flex flex-col gap-8 p-6 max-w-4xl">
        <div>
          <h1 className="text-primary text-xl font-medium">Quem somos</h1>
          <p>
            Bem-vindo à Unybay, sua nova loja de eletrônicos online, onde
            inovação, qualidade e excelência se encontram para transformar sua
            experiência de compra! Na Unybay, acreditamos que a tecnologia pode
            melhorar a vida das pessoas e facilitar o dia a dia de todos. Por
            isso, nossa missão é oferecer os melhores produtos eletrônicos, com
            a mais alta qualidade, a preços acessíveis e com um atendimento
            impecável. Somos apaixonados por tecnologia e estamos sempre em
            busca das últimas tendências para garantir que você tenha acesso ao
            que há de mais moderno e inovador no mercado.
          </p>
        </div>
        <div>
          <h1 className="text-primary text-xl font-medium">
            O que nos torna únicos?
          </h1>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="font-medium">Variedade e Qualidade</span>:
              Trabalhamos com as melhores marcas e garantimos a qualidade de
              todos os nossos produtos. Você encontra tudo, desde smartphones,
              notebooks, gadgets e acessórios, até eletrodomésticos de última
              geração, tudo em um só lugar.
            </li>
            <li>
              <span className="font-medium">Preços Competitivos</span>:
              Acreditamos que todo mundo merece ter acesso à tecnologia de
              ponta. Por isso, oferecemos preços justos e promoções especiais
              para que você possa aproveitar as melhores ofertas.
            </li>
            <li>
              <span className="font-medium">Atendimento Personalizado</span>:
              Nossa equipe está sempre pronta para ajudar você a escolher o
              produto perfeito para suas necessidades. Se tiver dúvidas, estamos
              aqui para oferecer o suporte que você precisa, seja antes ou
              depois da compra.
            </li>
            <li>
              Entrega Rápida e Segura: Trabalhamos com os melhores serviços de
              entrega para garantir que seu produto chegue até você no menor
              tempo possível, de forma segura e eficiente.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-primary text-xl font-medium">
            Nosso Compromisso
          </h1>
          <p>
            Na Unybay, o compromisso com a satisfação do cliente é nossa maior
            prioridade. Queremos que sua experiência de compra seja fácil,
            rápida e, acima de tudo, agradável. Estamos sempre dispostos a ouvir
            nossos clientes e melhorar a cada dia. Seja bem-vindo à Unybay, onde
            a tecnologia se encontra com a confiança e a excelência. Estamos
            aqui para conectar você ao futuro.
          </p>
        </div>
      </section>
    </UserTemplate>
  );
}
