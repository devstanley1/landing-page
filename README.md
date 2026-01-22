# 🎓 Landing Page - Curso de Desenvolvedor Front-End

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📋 Sobre o Projeto

Landing page profissional para venda de curso de Desenvolvedor Front-End. O projeto apresenta informações sobre o curso, planos de assinatura e um sistema completo de checkout com validação de formulário.

## ✨ Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Três planos de assinatura (Básico, Premium e Vitalício)
- ✅ Página de checkout com validação de formulário
- ✅ Máscaras de entrada automáticas (telefone, cartão, data)
- ✅ Validação de email, telefone e dados de pagamento
- ✅ Persistência de seleção de plano via localStorage
- ✅ SEO otimizado com meta tags
- ✅ Acessibilidade (ARIA labels e semântica HTML5)

## 🗂️ Estrutura do Projeto

```
landing-page/
├── assets/
│   ├── css/
│   │   ├── style.css          # Estilos principais da landing page
│   │   └── checkout.css       # Estilos específicos do checkout
│   └── js/
│       ├── main.js            # Script principal da landing page
│       └── checkout.js        # Script de validação do checkout
├── pages/
│   └── checkout.html          # Página de checkout
├── index.html                 # Página principal (home)
├── google78763bad2e55156c.html # Verificação Google
├── robots.txt                 # Instruções para crawlers
├── sitemap.xml                # Mapa do site para SEO
├── vercel.json                # Configuração de deploy Vercel
└── README.md                  # Documentação do projeto
```

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis CSS e Flexbox
- **JavaScript (ES6+)** - Interatividade e validações
- **Git** - Controle de versão

## 📦 Instalação e Uso

### Pré-requisitos

- Navegador web moderno
- Servidor web local (opcional, para desenvolvimento)

### Executando Localmente

1. Clone o repositório:
```bash
git clone https://github.com/devstanley1/landing-page.git
cd landing-page
```

2. Abra o arquivo `index.html` em seu navegador, ou use um servidor local:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server
```

3. Acesse `http://localhost:8000` no navegador

## 🎨 Personalização

### Cores

As cores principais estão definidas como variáveis CSS em `assets/css/style.css`:

```css
:root {
    --primary-color: #00ff00;
    --primary-dark: #00cc00;
    --bg-dark: #000000;
    --bg-green: #013220;
    --text-light: #ffffff;
}
```

### Planos e Preços

Para modificar os planos, edite o arquivo `index.html` na seção de ofertas e ajuste os valores em `assets/js/main.js`.

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## 🔒 Validações Implementadas

- **Email**: Formato válido (regex)
- **Telefone**: Formato brasileiro (10-11 dígitos)
- **Cartão de Crédito**: 13-19 dígitos
- **Data de Validade**: Formato MM/AA e data futura
- **CVV**: 3-4 dígitos
- **Máscaras automáticas** em todos os campos aplicáveis

## 🌐 Deploy

### Vercel (Recomendado)

O projeto está configurado para deploy na Vercel:

```bash
vercel --prod
```

### Netlify

Faça upload da pasta do projeto ou conecte o repositório GitHub.

### GitHub Pages

```bash
git push origin main
```

Configure o GitHub Pages nas configurações do repositório.

## 📄 Arquivos de Configuração

### robots.txt
Configura quais páginas podem ser indexadas por mecanismos de busca.

### sitemap.xml
Mapa do site para facilitar a indexação pelos buscadores.

### vercel.json
Configurações de roteamento para deploy na Vercel.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Melhorias Futuras

- [ ] Integração com gateway de pagamento real
- [ ] Sistema de backend para processar compras
- [ ] Painel de administração
- [ ] Sistema de cupons de desconto
- [ ] Integração com plataforma de ensino (LMS)
- [ ] Testes automatizados
- [ ] Analytics e tracking de conversão

## 👤 Autor

**Stanley Sampaio Falcão**

- GitHub: [@devstanley1](https://github.com/devstanley1)

## 📞 Suporte

Para suporte e dúvidas, abra uma [issue](https://github.com/devstanley1/landing-page/issues) no GitHub.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐️ Se este projeto foi útil para você, considere dar uma estrela no repositório!
