import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";

const images = {
  hero:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1900&q=88&fm=webp",
  house:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=86&fm=webp",
  interior:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=86&fm=webp",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=84&fm=webp",
  detail:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=84&fm=webp",
  studio:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=84&fm=webp",
};

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    id: "01",
    title: "Projetos residenciais",
    text: "Casas, apartamentos e refúgios desenhados para acolher rotina, luz natural e identidade.",
    image: images.house,
  },
  {
    id: "02",
    title: "Arquitetura de interiores",
    text: "Layout, materiais, iluminação e acabamentos coordenados para uma experiência inteira.",
    image: images.interior,
  },
  {
    id: "03",
    title: "Projetos comerciais",
    text: "Espaços para marcas que precisam unir operação, presença e experiência de atendimento.",
    image: images.office,
  },
  {
    id: "04",
    title: "Reformas e revitalizações",
    text: "Atualizamos espaços existentes com critério técnico, planejamento e sensibilidade material.",
    image: images.detail,
  },
];

const projects = [
  {
    number: "01",
    name: "Casa Horizonte",
    category: "Residencial",
    place: "São Luís, MA",
    year: "2026",
    image: images.hero,
    text: "Uma residência aberta para a paisagem, com volumes limpos, madeira e iluminação quente ao entardecer.",
  },
  {
    number: "02",
    name: "Refúgio Atlântico",
    category: "Residencial",
    place: "Barreirinhas, MA",
    year: "2025",
    image: images.house,
    text: "Materiais naturais e áreas de convívio desenhadas para respirar junto com o clima.",
  },
  {
    number: "03",
    name: "Estúdio Essencial",
    category: "Comercial",
    place: "São Luís, MA",
    year: "2026",
    image: images.office,
    text: "Um ambiente de trabalho compacto, flexível e preciso, pensado para receber e produzir melhor.",
  },
];

const process = [
  ["01", "Escuta", "Entendemos rotina, desejos, prioridades e orçamento."],
  ["02", "Leitura do espaço", "Medimos, analisamos luz, fluxos, contexto e possibilidades."],
  ["03", "Conceito", "Definimos linguagem, organização espacial e atmosfera do projeto."],
  ["04", "Projeto", "Desenvolvemos desenhos, materiais, iluminação e detalhamentos."],
  ["05", "Ajustes", "Refinamos decisões com clareza até o projeto fazer sentido por inteiro."],
  ["06", "Execução", "Orientamos a obra para preservar intenção, qualidade e viabilidade."],
];

const testimonials = [
  {
    quote:
      "A casa ficou sofisticada sem perder acolhimento. O projeto traduziu nossa rotina com uma precisão rara.",
    name: "Marina e André",
    info: "Casa Horizonte - São Luís",
    image: images.interior,
  },
  {
    quote:
      "O estúdio ganhou presença e funcionalidade. Cada decisão parecia bonita, mas também muito prática.",
    name: "Helena Costa",
    info: "Estúdio comercial - São Luís",
    image: images.office,
  },
  {
    quote:
      "A consultoria nos ajudou a enxergar potencial, evitar compras erradas e planejar a reforma com segurança.",
    name: "Rafael Nunes",
    info: "Apartamento compacto - Paço do Lumiar",
    image: images.detail,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formMessage, setFormMessage] = useState("");
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const submitContact = (event) => {
    event.preventDefault();
    setFormMessage("Mensagem registrada. Em breve retornaremos pelo WhatsApp informado.");
    event.currentTarget.reset();
  };

  const nextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveTestimonial(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const selectedService = services[activeService];
  const selectedTestimonial = testimonials[activeTestimonial];

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="MODUS Arquitetura">
          <span>MODUS</span>
          <small>Arquitetura</small>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-contact">
          <a href="tel:+5598999990000">
            <Phone size={16} aria-hidden="true" />
            (98) 99999-0000
          </a>
          <a className="icon-link" href="https://instagram.com" aria-label="Instagram">
            <Instagram size={18} aria-hidden="true" />
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <aside
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-light" href="#contato" onClick={closeMenu}>
          Iniciar um projeto
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </aside>

      <main>
        <section
          className="hero"
          id="inicio"
          style={{ "--hero-image": `url(${images.hero})` }}
          role="img"
          aria-label="Residência contemporânea com fachada de vidro e iluminação interna quente"
        >
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-title">MODUS</h1>
              <p className="hero-subtitle">
                Arquitetura autoral,
                <br />
                com composição contemporânea.
              </p>
              <a className="hero-cta" href="#contato">
                Começar
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="intro section" id="sobre">
          <p className="kicker">Manifesto</p>
          <div className="intro-layout">
            <h2>Arquitetura que transforma espaços em experiências.</h2>
            <div className="intro-copy">
              <p>
                Cada ambiente conta uma história. Transformamos ideias,
                necessidades e sonhos em projetos funcionais, elegantes e
                profundamente conectados a quem vai viver o espaço.
              </p>
              <div className="metrics" aria-label="Indicadores do escritório">
                <span>
                  <strong>86</strong>
                  projetos desenvolvidos
                </span>
                <span>
                  <strong>12+</strong>
                  anos de atuação
                </span>
                <span>
                  <strong>04</strong>
                  frentes de serviço
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="services section section-dark" id="servicos">
          <div className="section-head">
            <p className="kicker">Serviços</p>
            <h2>Soluções completas para transformar seu espaço.</h2>
          </div>

          <div className="service-editorial">
            <div className="service-list">
              {services.map((service, index) => (
                <button
                  className={`service-row ${activeService === index ? "is-active" : ""}`}
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <span>{service.id}</span>
                  <strong>{service.title}</strong>
                  <small>{service.text}</small>
                  <ArrowUpRight size={21} aria-hidden="true" />
                </button>
              ))}
            </div>

            <figure className="service-image">
              <img
                src={selectedService.image}
                alt={`Referência visual para ${selectedService.title}`}
                loading="lazy"
              />
              <figcaption>{selectedService.title}</figcaption>
            </figure>
          </div>
        </section>

        <section className="projects section" id="projetos">
          <div className="section-head section-head-wide">
            <p className="kicker">Projetos em destaque</p>
            <h2>Uma curadoria de espaços com atmosfera, função e identidade.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.name}>
                <figure className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.name}, projeto de arquitetura contemporânea`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </figure>
                <div className="project-info">
                  <span>{project.number}</span>
                  <h3>{project.name}</h3>
                  <p>{project.text}</p>
                  <dl>
                    <div>
                      <dt>Categoria</dt>
                      <dd>{project.category}</dd>
                    </div>
                    <div>
                      <dt>Local</dt>
                      <dd>{project.place}</dd>
                    </div>
                    <div>
                      <dt>Ano</dt>
                      <dd>{project.year}</dd>
                    </div>
                  </dl>
                  <a className="ghost-link" href="#contato">
                    Ver projeto
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="studio section">
          <div className="studio-image">
            <img
              src={images.studio}
              alt="Equipe de arquitetura discutindo materiais e desenhos em uma mesa de trabalho"
              loading="lazy"
            />
          </div>
          <div className="studio-copy">
            <p className="kicker">Sobre o escritório</p>
            <h2>Escuta, precisão e propósito em cada decisão.</h2>
            <p>
              A MODUS nasce da combinação entre processo técnico e sensibilidade
              visual. Nosso trabalho é organizar escolhas, traduzir estilos de
              vida e criar espaços que permaneçam bonitos, funcionais e vivos no
              cotidiano.
            </p>
            <blockquote>
              "Não buscamos excesso. Buscamos a medida certa entre forma, luz e
              permanência."
            </blockquote>
          </div>
        </section>

        <section className="process section" id="processo">
          <div className="section-head section-head-wide">
            <p className="kicker">Processo</p>
            <h2>Do primeiro encontro ao espaço realizado.</h2>
          </div>

          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials section">
          <figure className="testimonial-image">
            <img
              src={selectedTestimonial.image}
              alt={`Projeto relacionado ao depoimento de ${selectedTestimonial.name}`}
              loading="lazy"
            />
          </figure>
          <div className="testimonial-copy" aria-live="polite">
            <p className="kicker">Depoimentos</p>
            <blockquote>"{selectedTestimonial.quote}"</blockquote>
            <strong>{selectedTestimonial.name}</strong>
            <span>{selectedTestimonial.info}</span>
            <div className="testimonial-controls">
              <button type="button" aria-label="Depoimento anterior" onClick={previousTestimonial}>
                <ArrowLeft size={19} aria-hidden="true" />
              </button>
              <small>
                {String(activeTestimonial + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </small>
              <button type="button" aria-label="Próximo depoimento" onClick={nextTestimonial}>
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact-word" aria-hidden="true">
            VAMOS CRIAR?
          </div>
          <div className="contact-copy">
            <p className="kicker">Contato</p>
            <h2>Seu próximo espaço começa com uma conversa.</h2>
            <p>
              Conte o que você deseja construir, reformar ou transformar. Vamos
              desenhar um caminho possível, bonito e coerente com a sua história.
            </p>
            <a className="button button-light" href="https://wa.me/5598999990000">
              Falar pelo WhatsApp
              <Send size={18} aria-hidden="true" />
            </a>
          </div>

          <form className="contact-form" onSubmit={submitContact}>
            <label>
              Nome
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              WhatsApp
              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" required />
            </label>
            <label>
              Tipo de projeto
              <select name="projectType" defaultValue="residencial">
                <option value="residencial">Residencial</option>
                <option value="interiores">Interiores</option>
                <option value="comercial">Comercial</option>
                <option value="reforma">Reforma</option>
              </select>
            </label>
            <label>
              Mensagem
              <textarea name="message" rows="4" required />
            </label>
            <button className="button button-light" type="submit">
              Iniciar meu projeto
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
            {formMessage && <p className="form-message">{formMessage}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="brand brand-footer" href="#inicio" aria-label="Voltar ao início">
            <span>MODUS</span>
            <small>Arquitetura</small>
          </a>
          <p>Arquitetura para viver novas histórias.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <address>
          <a href="tel:+5598999990000">
            <Phone size={16} aria-hidden="true" />
            (98) 99999-0000
          </a>
          <a href="mailto:contato@modus.arq.br">
            <Mail size={16} aria-hidden="true" />
            contato@modus.arq.br
          </a>
          <span>
            <MapPin size={16} aria-hidden="true" />
            São Luís, MA
          </span>
        </address>
        <div className="social">
          <a href="https://instagram.com" aria-label="Instagram">
            <Instagram size={19} aria-hidden="true" />
          </a>
          <a href="https://pinterest.com" aria-label="Pinterest">
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin size={19} aria-hidden="true" />
          </a>
        </div>
        <small>© {year} MODUS Arquitetura. Todos os direitos reservados.</small>
      </footer>
    </>
  );
}

export default App;
