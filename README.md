# Pães Máximo

Landing page responsiva para a padaria em Ji-Paraná-RO, com apresentação do
pão integral doce, do pão integral de sal e do challah — pão doce trançado com
ovos e erva-doce —, além de encomendas pelo WhatsApp.

## Stack

- Next.js 15 com App Router e TypeScript em modo strict
- Tailwind CSS 4 e CSS customizado para a identidade visual
- Framer Motion, com animações sutis e respeito a `prefers-reduced-motion`
- Lucide React e fontes Geist Sans/Mono
- ESLint

## Rodar localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar a versão de
produção:

```bash
npm run lint
npm run build
npm run start
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e confira os dados antes de publicar.
O site usa os valores do ambiente, com dados fornecidos como fallback em
desenvolvimento.

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número com código do país, DDD e número |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Texto preenchido no início da conversa |
| `NEXT_PUBLIC_CLIENT_NAME` | Nome exibido na marca |
| `NEXT_PUBLIC_CITY` | Cidade e estado |
| `NEXT_PUBLIC_INSTAGRAM` | URL do Instagram |
| `NEXT_PUBLIC_FACEBOOK` | URL do Facebook (opcional) |
| `NEXT_PUBLIC_LINKEDIN` | URL do LinkedIn (opcional) |
| `NEXT_PUBLIC_EMAIL` | E-mail de contato (opcional) |
| `NEXT_PUBLIC_ADDRESS` | Endereço exibido e usado no link do Maps |
| `NEXT_PUBLIC_HOURS` | Horário de atendimento |
| `NEXT_PUBLIC_SITE_URL` | URL canônica final com HTTPS |

Confira especialmente o telefone do WhatsApp e a URL do domínio antes do
deploy. O Instagram configurado é `@sdamiaomaximodos`.

## Conteúdo e imagens

- Textos dos produtos e diferenciais: `app/page.tsx`
- Identidade, metadados e Schema.org: `app/layout.tsx`
- Dados padrão e links de contato: `lib/site.ts`
- Estilos e cores: `app/globals.css`
- Fotos locais usadas pelo site: `public/images/`

Substitua as fotos na pasta `public/images/` mantendo os nomes referenciados em
`app/page.tsx`, ou altere os caminhos na lista de produtos. O challah está
destacado como diferencial da padaria.

## Deploy na Vercel

1. Publique o projeto em um repositório Git privado ou público escolhido pelo
   cliente.
2. Importe o repositório na Vercel e mantenha o framework Next.js detectado
   automaticamente.
3. Cadastre as variáveis de ambiente da tabela acima em **Project Settings →
   Environment Variables**. Atualize `NEXT_PUBLIC_SITE_URL` para o domínio
   definitivo e confirme o WhatsApp.
4. Faça o deploy e valide a página, os links de contato, `/robots.txt` e
   `/sitemap.xml`.

## Domínio próprio

Defina primeiro o domínio final (ainda não foi informado). Na Vercel, acesse
**Project Settings → Domains**, adicione o domínio comprado e aplique no
provedor DNS os registros exibidos pela Vercel. Depois que a verificação DNS
concluir, atualize `NEXT_PUBLIC_SITE_URL` com `https://` e publique novamente.
