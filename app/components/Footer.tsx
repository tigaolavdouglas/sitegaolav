import { Logo } from "./Logo";
import { WaveDivider } from "./WaveDivider";

export function Footer() {
  return (
    <footer className="site-footer">
      <WaveDivider fromColor="var(--bg)" toColor="var(--teal-deep)" />
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo />
          <p>
            Lavanderia industrial para hotéis, hospitais, restaurantes e
            empresas que não podem parar.
          </p>
        </div>

        <div className="site-footer__col">
          <h3>Navegação</h3>
          <a href="/">Home</a>
          <a href="/sobre-nos">Sobre nós</a>
          <a href="/blog">Blog</a>
        </div>

        <div className="site-footer__col">
          <h3>Serviços</h3>
          <a href="/#servicos">Lavagem hospitalar</a>
          <a href="/#servicos">Enxoval hoteleiro</a>
          <a href="/#servicos">Uniformes corporativos</a>
        </div>

        <div className="site-footer__col">
          <h3>Contato</h3>
          <a href="tel:+556230000000">(62) 3000-0000</a>
          <a href="mailto:contato@gaolavanderia.com.br">
            contato@gaolavanderia.com.br
          </a>
          <span>Goiânia — GO</span>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} GAO Lavanderia. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
