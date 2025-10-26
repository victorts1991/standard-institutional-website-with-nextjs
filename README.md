# ✨ OptimusTech - Site Institucional Simulado (Frontend Portfolio)

![Badge - Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Badge - TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Badge - Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Badge - Component Architecture](https://img.shields.io/badge/Component_Architecture-Modular-green?style=for-the-badge)

Este projeto é um site institucional moderno desenvolvido como peça de portfólio. Simula uma página inicial robusta, focada em métricas, vagas abertas e depoimentos, demonstrando proficiência em **desenvolvimento Frontend com foco em arquitetura, experiência do usuário (UX) e design responsivo**.

## 🚀 Demonstração (GIF de Uso)

<img src="[COLOQUE O LINK DO SEU GIF DE DEMONSTRAÇÃO AQUI]" alt="Demonstração do site OptimusTech, mostrando o layout e a responsividade." width="100%">

O GIF acima demonstra a fluidez da navegação, a organização visual do conteúdo e, crucialmente, a **adaptação total para dispositivos móveis**.

---

## 🛠️ Stack Tecnológica

O projeto foi construído com as mais recentes tecnologias do ecossistema React, garantindo alta performance, escalabilidade e uma excelente experiência de desenvolvimento:

* **Next.js 15+:** Framework React para otimizações de performance, roteamento e estrutura de aplicação.
* **TypeScript:** Adiciona tipagem estática, aumentando a manutenibilidade e ajudando na prevenção de erros em tempo de desenvolvimento.
* **Tailwind CSS:** Framework *utility-first* para estilização rápida, responsiva e altamente customizável.
* **React 19+:** Biblioteca para construção da interface do usuário baseada em componentes.

---

## 💡 Arquitetura e Estrutura de Componentes

Um dos pilares deste projeto é a arquitetura de componentes, que garante reutilização e organização do código. A separação clara de responsabilidades em módulos aumenta a manutenibilidade do código.

| Componente | Objetivo Principal | Destaque Técnico (Foco B) |
| :--- | :--- | :--- |
| **`src/app/page.tsx`** | Orquestrador principal da Home. | Demonstra a composição de módulos em uma única página. |
| **`src/components/Metrics`** | Exibe dados em destaque. | Uso de `md:flex-row` para **layout responsivo** (mobile empilhado, desktop lado a lado). |
| **`src/components/PositionsList`** | Lista as vagas por categoria. | Componentização de **cartões de vaga** (`PositionItem`) para reutilização. |
| **`src/components/Navbar`** | Barra de navegação. | Implementação de **menu *off-canvas* (hambúrguer)** com estado (`useState`) para mobile. |
| **Design (Foco A)** | Estilização Geral | Uso de classes utilitárias do Tailwind, como **`max-w-7xl mx-auto`** para layout centralizado e `hover:shadow-md` para interações suaves. |

---

## 🌟 Funcionalidades Chave (Foco C)

Embora focado em tecnologia, o site oferece uma experiência de usuário rica, simulando as funcionalidades essenciais de um site institucional de sucesso:

* **Métricas Visuais:** Destaque para conquistas da empresa (`400+ Projetos concluídos`, `20k Downloads`).
* **Vagas Segmentadas:** Listagem de oportunidades organizada por áreas (`Design` e `Desenvolvimento de Software`) com salários em destaque.
* **Testemunho:** Seção de *Social Proof* para aumentar a credibilidade.
* **Responsividade Impecável:** Layout totalmente adaptável para qualquer tamanho de tela, garantindo a acessibilidade e a experiência do usuário.

---

## ⚙️ Como Rodar Localmente

Para clonar e executar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos

Você precisará ter o [Node.js](https://nodejs.org/en/) (versão LTS recomendada) instalado.

### Instalação

```bash
# 1. Clone o repositório
git clone [URL_DO_SEU_REPOSITORIO]
cd standard-institutional-website-with-nextjs

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

O projeto estará acessível em http://localhost:3000.
