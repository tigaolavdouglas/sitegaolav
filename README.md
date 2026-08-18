# GAO Lavanderia — site institucional

Site em **React Router v7 (framework mode)** com **SSR** ligado por padrão,
recriando o layout enviado (header com logo em "pinwheel", nav Home / Sobre
Nós / Blog, botão "Faça um orçamento" e seção hero com onda), com conteúdo
placeholder para uma lavanderia industrial.

## Stack

- React Router v7 — modo *framework* (roteamento por arquivo + SSR)
- React 19
- Vite
- TypeScript
- CSS puro com tokens de design (sem framework de CSS)

## Estrutura

```
app/
  root.tsx            # shell HTML, fontes, error boundary
  routes.ts            # mapa de rotas
  app.css               # design tokens + estilos globais
  routes/
    home.tsx            # "/"
    sobre.tsx            # "/sobre-nos"
    blog.tsx              # "/blog"
  components/
    Header.tsx, Footer.tsx, Logo.tsx,
    WaveDivider.tsx, CycleBadge.tsx, ContactBubble.tsx
```

## Rodando localmente

Este projeto foi montado neste ambiente sem acesso à internet, então as
dependências **não foram instaladas nem o build foi testado aqui**. Para
rodar:

```bash
npm install
npm run dev
```

Abra http://localhost:5173.

Build de produção com SSR:

```bash
npm run build
npm run start
```

## Próximos passos sugeridos

- Trocar o conteúdo placeholder (textos, telefone, e-mail) pelos dados reais.
- Ligar o botão "Fale conosco" a um número de WhatsApp real.
- Conectar o formulário/CTA de orçamento a um backend ou serviço de e-mail.
- Adicionar páginas de post de blog individuais quando houver conteúdo real.
