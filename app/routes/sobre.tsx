import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { WaveDivider } from "~/components/WaveDivider";
import { CycleBadge } from "~/components/CycleBadge";
import { ContactBubble } from "~/components/ContactBubble";
import type { Route } from "./+types/sobre";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobre nós — GAO Lavanderia" },
    {
      name: "description",
      content:
        "Conheça a história, os valores e a estrutura da GAO Lavanderia, referência em lavagem industrial em Goiânia.",
    },
  ];
}

const VALUES = [
  {
    title: "Regularidade",
    text: "Rota fixa e horários combinados: sua operação sabe exatamente quando a roupa sai e quando volta.",
  },
  {
    title: "Higienização real",
    text: "Processos validados por tipo de tecido, com controle de temperatura, dosagem e tempo de ciclo.",
  },
  {
    title: "Rastreabilidade",
    text: "Cada lote é identificado da coleta à entrega, para você acompanhar o que está em processo.",
  },
  {
    title: "Cuidado com o tecido",
    text: "Separação por fibra e cor para preservar a vida útil de cada peça — não só a limpeza dela.",
  },
];

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero__inner">
            <p className="eyebrow">Sobre a GAO</p>
            <h1>Uma lavanderia pensada para operações que não podem parar</h1>
            <p className="hero__lede">
              Desde 2008 processamos o enxoval de hotéis, hospitais,
              restaurantes e empresas de Goiânia com uma promessa simples:
              roupa limpa, no prazo combinado, sempre.
            </p>
          </div>
        </section>

        <WaveDivider fromColor="var(--teal-deep)" toColor="var(--bg)" />

        <section className="section section--split">
          <div className="section--split__text">
            <p className="eyebrow">Nossa história</p>
            <h2 className="section__title section__title--left">
              De uma lavanderia de bairro a uma operação industrial
            </h2>
            <p>
              A GAO começou como uma lavanderia de bairro atendendo pousadas
              da região. Com o crescimento da demanda por lavagem
              hospitalar e hoteleira em escala, investimos em máquinas
              industriais, protocolos de higienização e uma frota própria
              de coleta e entrega.
            </p>
            <p>
              Hoje atendemos clientes de diferentes portes com o mesmo
              cuidado do primeiro contrato: peças separadas por tecido,
              ciclos dosados e uma equipe que conhece cada rota de cor.
            </p>
          </div>
          <div className="section--split__art" aria-hidden="true">
            <CycleBadge size={220} />
          </div>
        </section>

        <WaveDivider fromColor="var(--bg)" toColor="var(--bg-alt)" />

        <section className="section">
          <p className="eyebrow eyebrow--center">O que guia o trabalho</p>
          <h2 className="section__title">Nossos valores</h2>
          <div className="value-grid">
            {VALUES.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <WaveDivider fromColor="var(--bg-alt)" toColor="var(--teal-deep)" />

        <section className="cta" id="orcamento">
          <div className="cta__inner">
            <h2>Quer conhecer a operação de perto?</h2>
            <p>
              Agende uma visita técnica ou peça uma proposta para o seu
              volume de lavagem.
            </p>
            <a
              href="mailto:contato@gaolavanderia.com.br"
              className="btn btn--primary"
            >
              Falar com a GAO
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactBubble />
    </>
  );
}
