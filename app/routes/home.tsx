import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { WaveDivider } from "~/components/WaveDivider";
import { CycleBadge } from "~/components/CycleBadge";
import { ContactBubble } from "~/components/ContactBubble";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GAO Lavanderia — Lavanderia industrial em Goiânia" },
    {
      name: "description",
      content:
        "Lavagem hospitalar, enxoval hoteleiro e uniformes corporativos com coleta e entrega programada. Peça um orçamento com a GAO Lavanderia.",
    },
  ];
}

const SERVICES = [
  {
    title: "Lavagem hospitalar",
    text: "Higienização com controle de contaminação para hospitais, clínicas e laboratórios, seguindo normas sanitárias.",
  },
  {
    title: "Enxoval hoteleiro",
    text: "Lençóis, toalhas e roupões tratados para manter a maciez e a aparência de novo lavagem após lavagem.",
  },
  {
    title: "Uniformes corporativos",
    text: "Programa de lavagem recorrente para equipes de restaurantes, indústrias e frotas de serviço.",
  },
  {
    title: "Toalhas e tapetes",
    text: "Remoção profunda de sujidade e odores em tecidos de alto tráfego, com secagem controlada.",
  },
  {
    title: "Lavagem a seco",
    text: "Tratamento especializado para tecidos delicados, cortinas e peças que exigem cuidado extra.",
  },
  {
    title: "Coleta e entrega",
    text: "Rota programada que busca e devolve as peças no seu endereço, sem quebrar sua operação.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Coleta agendada",
    text: "Nossa equipe retira as peças no dia e horário combinados com você.",
  },
  {
    step: "02",
    title: "Triagem e pesagem",
    text: "Cada lote é separado por tipo de tecido e registrado antes da lavagem.",
  },
  {
    step: "03",
    title: "Lavagem e higienização",
    text: "Processos dosados por tipo de peça, com controle de temperatura e produtos.",
  },
  {
    step: "04",
    title: "Entrega no prazo",
    text: "Peças dobradas, embaladas e entregues na data combinada.",
  },
];

const STATS = [
  { value: "18", suffix: " anos", label: "de mercado em Goiânia" },
  { value: "12t", suffix: "/mês", label: "de roupas processadas" },
  { value: "200+", suffix: "", label: "clientes ativos" },
  { value: "98%", suffix: "", label: "de entregas no prazo" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">Lavanderia industrial · Goiânia, GO</p>
              <h1>
                Roupa limpa é o que sua operação nunca deveria ter que
                <em> pensar duas vezes.</em>
              </h1>
              <p className="hero__lede">
                A GAO cuida da lavagem, higienização e entrega do enxoval de
                hotéis, hospitais e empresas — para que sua equipe cuide do
                resto.
              </p>
              <div className="hero__actions">
                <a href="#orcamento" className="btn btn--primary">
                  Faça um orçamento
                </a>
                <a href="#processo" className="btn btn--ghost">
                  Como funciona
                </a>
              </div>
              <dl className="hero__trust">
                <div>
                  <dt>18 anos</dt>
                  <dd>de mercado</dd>
                </div>
                <div>
                  <dt>200+</dt>
                  <dd>clientes ativos</dd>
                </div>
                <div>
                  <dt>98%</dt>
                  <dd>no prazo</dd>
                </div>
              </dl>
            </div>
            <div className="hero__art" aria-hidden="true">
              <CycleBadge size={280} spin />
            </div>
          </div>
        </section>

        <WaveDivider fromColor="var(--teal-deep)" toColor="var(--bg)" />

        <section className="section" id="servicos">
          <p className="eyebrow eyebrow--center">O que lavamos</p>
          <h2 className="section__title">
            Um serviço para cada tipo de tecido e rotina
          </h2>
          <div className="service-grid">
            {SERVICES.map((service) => (
              <article className="service-card" key={service.title}>
                <CycleBadge size={40} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <WaveDivider fromColor="var(--bg)" toColor="var(--bg-alt)" />

        <section className="section" id="processo">
          <p className="eyebrow eyebrow--center">Como funciona</p>
          <h2 className="section__title">Da coleta à entrega, em quatro etapas</h2>
          <ol className="process">
            {PROCESS.map((item) => (
              <li className="process__step" key={item.step}>
                <span className="process__number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <WaveDivider fromColor="var(--bg-alt)" toColor="var(--teal-deep)" />

        <section className="stats">
          <div className="stats__inner">
            {STATS.map((stat) => (
              <div className="stats__item" key={stat.label}>
                <span className="stats__value">
                  {stat.value}
                  <small>{stat.suffix}</small>
                </span>
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider fromColor="var(--teal-deep)" toColor="var(--bg)" />

        <section className="cta" id="orcamento">
          <div className="cta__inner">
            <h2>Pronto para tirar a lavanderia da sua lista de problemas?</h2>
            <p>
              Conte pra gente o volume e a frequência da sua operação e
              enviamos uma proposta em até 1 dia útil.
            </p>
            <a href="mailto:contato@gaolavanderia.com.br" className="btn btn--primary">
              Solicitar orçamento
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactBubble />
    </>
  );
}
