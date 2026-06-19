🍷 Date App Premium

Um convite interativo, elegante e gamificado para convidar aquela pessoa especial para sair.

O Date App Premium é uma aplicação web mobile-first construída com React e Tailwind CSS. Ele transforma o clássico "vamos sair?" numa experiência interativa, divertida e com um design de altíssimo padrão (Glassmorphism).

✨ Funcionalidades Principais

Design Premium & Animações: Interface translúcida (efeito de vidro escuro), fundo animado com partículas elegantes, e emojis com efeito 3D (drop-shadow).

O Botão Fugitivo: Se o utilizador tentar clicar em "NÃO", o botão foge pela tela de forma inteligente, provocando o utilizador com mensagens divertidas.

Modo Caos 🚨: Se houver muita "resistência emocional" e cliques excessivos no botão "NÃO", o sistema bloqueia a recusa e recalcula a rota para o "SIM".

Contrato do Date: Uma etapa gamificada onde a pessoa tem de aceitar termos engraçados antes de prosseguir.

Fluxo Interativo: Seleção interativa de Data, Horário, Menu (Comida) e "Vibe" do encontro, num layout totalmente adaptável para qualquer ecrã de telemóvel.

Integração com Instagram: No final, a aplicação gera um "Recibo VIP" e copia automaticamente uma mensagem estruturada com as escolhas, redirecionando o utilizador para o teu perfil do Instagram (Direct).

🛠️ Tecnologias Utilizadas

React 18 - Biblioteca principal para a interface.

Vite - Ferramenta de build super rápida.

Tailwind CSS 3/4 - Estilização utilitária e design responsivo.

Lucide React - Ícones modernos e leves.

🚀 Como executar o projeto localmente

Pré-requisitos

Certifica-te de que tens o Node.js instalado no teu computador.

Instalação

Clona este repositório:

git clone https://github.com/TEU_USUARIO/app-date.git


Acede à pasta do projeto:

cd app-date


Instala as dependências:

npm install


Inicia o servidor de desenvolvimento:

npm run dev


Abre o teu navegador no endereço indicado (normalmente http://localhost:5173).

📁 Arquitetura do Projeto

O projeto foi dividido em componentes menores para garantir uma manutenção simples e um código limpo:

src/
├── components/
│   └── ElegantBackground.jsx    # Fundo animado com partículas flutuantes
├── screens/
│   ├── InviteScreen.jsx         # Tela inicial (A grande pergunta)
│   ├── AnnoyingScreen.jsx       # Tela do botão fugitivo ("Não...")
│   ├── ChaosScreen.jsx          # Modo Caos (Alerta de sistema)
│   ├── AcceptedScreen.jsx       # Celebração do "Sim"
│   ├── ContractScreen.jsx       # Contrato com checkboxes divertidas
│   ├── DateTimeScreen.jsx       # Seleção de data e hora
│   ├── FoodScreen.jsx           # Cardápio interativo
│   ├── VibeScreen.jsx           # Escolha da atmosfera do date
│   └── FinalScreen.jsx          # Recibo VIP e envio para o Instagram
├── App.jsx                      # Gestor central de estados e roteamento de telas
├── index.css                    # Estilos globais, animações e layout centralizador
└── main.jsx                     # Ponto de entrada do React


🎨 Como personalizar para o TEU Date

Tornar esta aplicação na tua arma secreta é muito fácil. Eis o que precisas de alterar:

O Nome (Tela Inicial):

Vai a src/screens/InviteScreen.jsx e src/screens/AnnoyingScreen.jsx.

Procura pelo nome estático (ex: "Camila") e substitui pelo nome da pessoa que vais convidar.

O teu Instagram:

Vai a src/screens/FinalScreen.jsx.

Procura a variável const instagramUser = "seu_usuario_aqui"; (linha ~36) e coloca o teu username real do Instagram.

Música de Fundo:

Vai a src/App.jsx.

Altera a constante MUSIC_URL no topo do ficheiro para um link direto de um .mp3 à tua escolha.

🌐 Como colocar online (Deploy)

Para enviares o link para a pessoa, podes alojar a aplicação de forma gratuita na Netlify ou Vercel.

Roda o comando npm run build no teu terminal.

Arrasta a pasta dist gerada para o painel (Drop) do Netlify.

Partilha o link gerado!

(Consulta o ficheiro guia_hospedagem.md se precisares de um tutorial passo-a-passo detalhado).

📝 Licença

Este projeto é open-source e está disponível sob a licença MIT. Sente-te à vontade para fazer um fork, modificar, melhorar e surpreender alguém especial! 🍷
