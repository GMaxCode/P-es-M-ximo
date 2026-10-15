import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Croissant,
  MapPin,
  Wheat,
} from "lucide-react";
import { MotionIn, SiteHeader, WhatsAppFloat } from "@/components/site-ui";
import { buildWhatsAppUrl, mapUrl, site, whatsappUrl } from "@/lib/site";

const products = [
  {
    number: "01",
    title: "Pão integral doce",
    description:
      "A versão doce do pão integral da casa, feita com farinha integral como ingrediente principal.",
    image: "/images/4.jpg",
    alt: "Pão integral doce da Pães Máximo",
    tag: "Integral & doce",
    message:
      "Olá, tudo bem? Vim do site Pães Máximos, eu gostaria de fazer uma encomenda de um Pão integral doce.",
  },
  {
    number: "02",
    title: "Pão integral de sal",
    description:
      "A opção de sal da casa também é integral, com farinha integral como ingrediente principal.",
    image: "/images/1.jpg",
    alt: "Pão integral de sal da Pães Máximo",
    tag: "Integral & de sal",
    message:
      "Olá, tudo bem? Vim do site Pães Máximos, eu gostaria de fazer uma encomenda de um Pão integral de sal.",
  },
  {
    number: "03",
    title: "Pão trançado Challah",
    description:
      "Challah trançado, tradicional, doce, rico em ovos e com erva-doce. Um destaque da nossa padaria.",
    image: "/images/challah2.jpg",
    alt: "Pão trançado Challah da Pães Máximo",
    tag: "Especialidade",
    message:
      "Olá, tudo bem? Vim do site Pães Máximos, eu gostaria de fazer uma encomenda de um Pão trançado Challah.",
  },
];

const differences = [
  {
    icon: Wheat,
    title: "Integral de verdade",
    description:
      "Farinha integral como ingrediente principal, sementes e grãos. A composição de cada pão é explicada sem promessas milagrosas.",
  },
  {
    icon: Clock3,
    title: "Fresquinho na hora certa",
    description:
      "Pequenas fornadas em horários programados para você encontrar pão fresquinho. Consulte a disponibilidade pelo WhatsApp.",
  },
  {
    icon: CalendarDays,
    title: "Clube de assinatura",
    description:
      "Receba pães integrais doces ou de sal em casa, ou retire na padaria. Consulte as opções de assinatura semanal ou mensal.",
  },
];

const testimonials = ["Adicione aqui o depoimento de um cliente.", "Adicione aqui o depoimento de um cliente.", "Adicione aqui o depoimento de um cliente."];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" aria-hidden="true">
            <Image
              src="/images/pao-doce.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="cover-image"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-content page-width">
            <MotionIn>
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-dot" /> Feito com carinho em{" "}
                {site.city}
              </p>
              <h1>
                Qualidade que
                <br />
                você <em>merece.</em>
              </h1>
              <p className="hero-copy">
                Pães fofos, saborosos e de qualidade: pão integral doce, pão
                integral de sal e o challah especial da casa.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Croissant size={18} aria-hidden="true" />
                  Fazer uma encomenda
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="text-link text-link-light" href="#sobre">
                  Conheça a padaria <ArrowDown size={15} aria-hidden="true" />
                </a>
              </div>
            </MotionIn>
            <div className="hero-note">
              <span className="hero-note-line" />
              <span>Pequenas fornadas, grandes momentos</span>
            </div>
          </div>
          <a className="hero-scroll" href="#sobre" aria-label="Role para conhecer a padaria">
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="intro-section section-pad" id="sobre">
          <div className="page-width intro-grid">
            <MotionIn className="intro-heading">
              <p className="eyebrow">Um pão muda o dia</p>
              <h2>
                Simples assim:
                <br />
                <em>pão de verdade.</em>
              </h2>
              <span className="small-rule" />
            </MotionIn>
            <MotionIn className="intro-copy" delay={0.1}>
              <p>
                Na {site.clientName}, cada fornada nasce do cuidado com os
                ingredientes e do prazer de fazer pão. Aqui você encontra pão
                integral doce, pão integral de sal e também o challah, uma
                receita trançada especial que é a cara da nossa padaria.
              </p>
              <p>
                Para o café da manhã em família, o lanche das crianças ou para
                abastecer seu comércio: conte com sabor, qualidade e aquele
                cheirinho de pão recém-assado.
              </p>
              <a className="text-link" href="#servicos">
                Descubra nossos pães <ArrowRight size={16} aria-hidden="true" />
              </a>
            </MotionIn>
          </div>
          <div className="page-width difference-grid">
            {differences.map(({ icon: Icon, title, description }, index) => (
              <MotionIn className="difference-card" delay={index * 0.08} key={title}>
                <span className="difference-icon"><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></span>
                <span className="card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </MotionIn>
            ))}
          </div>
          <p className="page-width audience">
            <span>Feito para compartilhar</span>
            Famílias, padarias, mercados, mercearias e escolas.
          </p>
        </section>

        <section className="products-section section-pad" id="servicos">
          <div className="page-width">
            <MotionIn className="section-heading">
              <div>
                <p className="eyebrow">Da nossa fornada para sua mesa</p>
                <h2>Tem pão para<br /><em>todo gosto.</em></h2>
              </div>
              <p className="section-aside">
                Escolha o seu favorito e fale com a gente para consultar
                disponibilidade e encomendar.
              </p>
            </MotionIn>
            <div className="product-grid">
              {products.map((product, index) => (
                <MotionIn className="product-card" delay={index * 0.1} key={product.title}>
                  <a
                    className="product-image-wrap"
                    href={buildWhatsAppUrl(product.message)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Encomendar ${product.title} pelo WhatsApp`}
                  >
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"
                      className="cover-image product-image"
                    />
                    <span className="product-number">{product.number}</span>
                    <span className="product-tag">{product.tag}</span>
                    <span className="product-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
                  </a>
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </MotionIn>
              ))}
            </div>
            <MotionIn className="challah-feature">
              <div className="challah-photo">
                <Image
                  src="/images/challah2.jpg"
                  alt="Challah trançado, pão especial da padaria"
                  fill
                  sizes="(max-width: 700px) 90vw, 40vw"
                  className="cover-image"
                />
              </div>
              <div className="challah-copy">
                <p className="eyebrow">Nosso pão especial</p>
                <h3>Conheça o <em>challah.</em></h3>
                <p>
                  O challah é um pão trançado tradicional da culinária judaica,
                  rico em ovos e com raízes bíblicas e europeias medievais. Na
                  nossa padaria, ele é doce — e leva erva-doce.
                </p>
                <dl className="challah-facts">
                  <div><dt>É doce ou salgado?</dt><dd>É doce.</dd></div>
                  <div><dt>Leva erva-doce?</dt><dd>Sim, leva erva-doce.</dd></div>
                  <div><dt>O que é challah?</dt><dd>Um pão tradicional judaico, trançado e rico em ovos.</dd></div>
                </dl>
                <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Pergunte sobre o challah <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </MotionIn>
          </div>
        </section>

        <section className="testimonials-section section-pad">
          <div className="page-width">
            <MotionIn className="section-heading testimonial-heading">
              <div>
                <p className="eyebrow">Palavra de quem prova</p>
                <h2>Histórias que saem <em>do forno.</em></h2>
              </div>
              <span className="coming-soon-label">Depoimentos em breve</span>
            </MotionIn>
            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card" key={index}>
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <p>{testimonial}</p>
                  <span className="coming-soon">Em breve</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="location-section section-pad" id="localizacao">
          <div className="page-width location-grid">
            <MotionIn className="location-photo">
              <Image
                src="/images/preparo.jpg"
                alt="Pães artesanais expostos na prateleira"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                className="cover-image"
              />
              <span className="photo-caption">Pães feitos para compartilhar.</span>
            </MotionIn>
            <MotionIn className="location-copy" delay={0.1}>
              <p className="eyebrow">Passe por aqui</p>
              <h2>O pão quentinho <em>fica perto.</em></h2>
              <div className="location-detail">
                <span className="detail-icon"><MapPin size={19} aria-hidden="true" /></span>
                <div>
                  <span className="detail-label">Onde estamos</span>
                  <p>{site.address}<br />{site.city}</p>
                </div>
              </div>
              <div className="location-detail">
                <span className="detail-icon"><Clock3 size={19} aria-hidden="true" /></span>
                <div>
                  <span className="detail-label">Horário de atendimento</span>
                  <p>{site.hours}</p>
                </div>
              </div>
              <a className="button button-outline" href={mapUrl} target="_blank" rel="noreferrer">
                Ver no Google Maps <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="hours-note">Consulte a disponibilidade das fornadas antes de vir.</p>
            </MotionIn>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-grain" aria-hidden="true" />
          <MotionIn className="page-width contact-inner">
            <p className="eyebrow eyebrow-light">A próxima fornada pode ser sua</p>
            <h2>Vamos escolher<br />seu próximo <em>pão favorito?</em></h2>
            <p>Faça sua encomenda ou pergunte o que acabou de sair do forno.</p>
            <a className="button button-light contact-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <Croissant size={19} aria-hidden="true" />
              Chamar no WhatsApp
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <div className="contact-social">
              <span>Fale com a gente</span>
              {site.email && (
                <a href={`mailto:${site.email}`}>
                  {site.email} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
              <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da padaria">
                Instagram <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </MotionIn>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-width footer-main">
          <a className="brand footer-brand" href="#inicio" aria-label={`${site.clientName}, início`}>
            <span className="brand-mark"><Croissant size={21} strokeWidth={1.7} aria-hidden="true" /></span>
            <span className="brand-text">{site.clientName}<small>PADARIA ARTESANAL</small></span>
          </a>
          <p className="footer-slogan">Qualidade que você merece!</p>
          <div className="footer-links">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} aria-hidden="true" /></a>
            {site.email && <a href={`mailto:${site.email}`}>E-mail <ArrowUpRight size={13} aria-hidden="true" /></a>}
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} {site.clientName}. Todos os direitos reservados.</span>
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
