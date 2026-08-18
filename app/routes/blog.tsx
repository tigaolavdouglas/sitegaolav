import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { WaveDivider } from "~/components/WaveDivider";
import { ContactBubble } from "~/components/ContactBubble";
import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog — GAO Lavanderia" },
    {
      name: "description",
      content:
        "Artigos sobre higienização de tecidos, gestão de enxoval e boas práticas de lavanderia industrial.",
    },
  ];
}

const POSTS = [
  {
    category: "Hotelaria",
    date: "12 ago 2026",
    title: "Como calcular o giro de enxoval ideal para o seu hotel",
    excerpt:
      "Um enxoval mal dimensionado custa caro dos dois lados: falta na alta temporada e sobra parada no estoque. Veja como calcular o giro certo.",
  },
  {
    category: "Saúde",
    date: "29 jul 2026",
    title: "RDC e lavagem hospitalar: o que sua clínica precisa saber",
    excerpt:
      "As normas sanitárias para roupas hospitalares vão além de lavar em água quente. Entenda os pontos que auditorias costumam cobrar.",
  },
  {
    category: "Operações",
    date: "15 jul 2026",
    title: "Terceirizar ou montar lavanderia própria? Um comparativo",
    excerpt:
      "Máquina, água, energia, mão de obra e manutenção: o custo real de uma lavanderia interna nem sempre aparece na primeira conta.",
  },
  {
    category: "Tecidos",
    date: "02 jul 2026",
    title: "Por que toalhas perdem maciez — e como evitar isso",
    excerpt:
      "O amaciante nem sempre é o vilão. Dosagem de detergente, dureza da água e ciclo de secagem pesam mais do que parece.",
  },
  {
    category: "Sustentabilidade",
    date: "18 jun 2026", 
    title: "Reúso de água em lavanderia industrial: vale a pena?",
    excerpt:
      "Sistemas de tratamento e reúso reduzem o consumo de água em até 40%. Entenda quando o investimento se paga.",
  },
  {
    category: "Uniformes",
    date: "04 jun 2026",
    title: "Uniforme malcuidado também é imagem de marca",
    excerpt:
      "Manchas e desgaste prematuro em uniformes corporativos dizem mais sobre a empresa do que se imagina.",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero__inner">
            <p className="eyebrow">Blog</p>
            <h1>Ideias sobre lavagem, gestão de enxoval e higienização</h1>
            <p className="hero__lede">
              Conteúdo prático para quem cuida de hotéis, clínicas,
              restaurantes e frotas de uniformes.
            </p>
          </div>
        </section>

        <WaveDivider fromColor="var(--teal-deep)" toColor="var(--bg)" />

        <section className="section">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-card__meta">
                  <span className="blog-card__category">{post.category}</span>
                  <time>{post.date}</time>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-card__link">Ler artigo →</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ContactBubble />
    </>
  );
}
