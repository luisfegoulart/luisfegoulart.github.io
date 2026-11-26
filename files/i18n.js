(() => {
    "use strict";

    // Translations are intentionally local: no third-party service, API call,
    // page redirect, or reload is needed to switch languages.
    const translations = {
        "início": "home",
        "contato": "contact",
        "você pode me encontrar em:": "you can find me at:",
        "ir para a página inicial": "go to the home page",

        "oi, sou o goulart": "hi, i'm goulart",
        "atualmente estou trabalhando como suporte erp, mas estudando para entrar na área de cibersegurança. meu maior interesse está em segurança ofensiva e segurança de aplicações.":
            "i currently work in erp support while studying to enter the cybersecurity field. my main interests are offensive security and application security.",
        "meu aprendizado começou em plataformas como hack the box, portswigger web security academy e, mais recentemente, hacking club. através delas pude praticar técnicas em laboratórios e entender, na prática, por que as vulnerabilidades ocorrem e como corrigi-las. também fortaleci minha mentalidade ofensiva, minha capacidade de analisar sistemas e de criar hipóteses de ataque. com o tempo, passei a aprender cada vez mais por conta própria.":
            "i started learning on platforms such as hack the box, portswigger web security academy, and, more recently, hacking club. through these platforms, i was able to practice techniques in labs and understand, in practice, why vulnerabilities occur and how to fix them. i also strengthened my offensive mindset, my ability to analyze systems, and my ability to develop attack hypotheses. over time, i started learning more and more on my own.",
        "gosto de acompanhar pesquisas publicadas pela comunidade, ler write-ups para entender o raciocínio por trás da descoberta de vulnerabilidades, reproduzir técnicas em ambientes controlados para entender como funcionam na prática, resolver ctfs e me aventurar em alguns programas de bug bounty.":
            "i enjoy following research published by the community, reading write-ups to understand the reasoning behind vulnerability discoveries, reproducing techniques in controlled environments to understand how they work in practice, solving ctfs, and trying out a few bug bounty programs.",
        "criei esse site para registrar meus estudos, ideias e projetos que gostaria de compartilhar. espero que este conteúdo consiga transmitir meu interesse pela área e, quem sabe, contribuir com outras pessoas que também estejam estudando ou queiram aprender mais sobre cibersegurança.":
            "i created this website to document my studies, ideas, and projects that i'd like to share. i hope this content conveys my interest in the field and, perhaps, helps others who are also studying or want to learn more about cybersecurity.",
        "certificações": "certifications",

        "posts - goulart": "posts - goulart",
        "posts e write-ups sobre estudos de cibersegurança.": "posts and write-ups about cybersecurity studies.",
        "o que o javascript pode revelar": "what javascript can reveal",
        "quando arquivos javascript revelaram mais do que deveriam": "when javascript files revealed more than they should have",

        "introdução": "introduction",
        "nesse post quero contar sobre como encontrei uma vulnerabilidade extremamente simples, mas com um grande impacto, em uma aplicação web interna.":
            "in this post, i want to share how i found an extremely simple vulnerability with a major impact in an internal web application.",
        "explorando a aplicação": "exploring the application",
        "a aplicação analisada era uma spa desenvolvida em angular. nesse tipo de aplicação, boa parte da lógica é executada no lado do cliente. por isso, o navegador precisa carregar os arquivos javascript responsáveis por controlar o comportamento da aplicação e realizar as chamadas para o backend.":
            "the application i analyzed was an spa built with angular. in this type of application, much of the logic runs on the client side. that's why the browser needs to load the javascript files responsible for controlling the application's behavior and making calls to the backend.",
        "isso significa que, ao analisar o código javascript, é possível descobrir informações importantes sobre a aplicação, como rotas, funções internas e comunicação com apis.":
            "this means that by analyzing javascript code, it's possible to discover important information about the application, such as routes, internal functions, and communication with apis.",
        "seguindo os rastros do javascript": "following the javascript trail",
        "enquanto revisava o código comecei a procurar por funções internas, rotas expostas e possíveis fluxos ocultos da aplicação.":
            "while reviewing the code, i started looking for internal functions, exposed routes, and potential hidden flows in the application.",
        "durante essa análise, encontrei uma função chamada:": "during this analysis, i found a function called:",
        "o nome da função chamou minha atenção, pois sugeria uma funcionalidade relacionada a criação de usuários.":
            "the function's name caught my attention because it suggested a feature related to creating users.",
        "lendo seu funcionamento, encontrei uma referência a uma rota chamada": "by reading its implementation, i found a reference to a route called",
        ", que parecia ser responsável por criar novos usuários. o código verificava se a aplicação estava nessa rota e, caso estivesse, inicializava o formulário de criação de um novo usuário.":
            ", which appeared to be responsible for creating new users. the code checked whether the application was on that route and, if so, initialized the form for creating a new user.",
        "então, adicionei manualmente a rota à url da aplicação e acessei diretamente.":
            "then, i manually added the route to the application's url and accessed it directly.",
        "a descoberta": "the discovery",
        "a página permitia criar um novo usuário e preencher informações como e-mail, nome, telefone e o cargo do usuário.":
            "the page allowed me to create a new user and enter information such as their email address, name, phone number, and the user's role.",
        "o problema é que minha conta atual não deveria possuir acesso a essa funcionalidade.":
            "the problem was that my current account shouldn't have had access to this feature.",
        "a interface da aplicação não apresentava essa opção para o meu usuário, porém, ao acessar a rota diretamente, eu conseguia chegar até a página de criação.":
            "the application's interface didn't show this option for my account. however, by accessing the route directly, i was able to reach the user creation page.",
        "foi então que confirmei o problema: embora a funcionalidade estivesse oculta na interface para meu usuário, o backend não verificava corretamente se o usuário possuía autorização para acessar a funcionalidade.":
            "that's when i confirmed the issue: although the feature was hidden from my user in the interface, the backend didn't properly check whether the user was authorized to access it.",
        "reportando o problema": "reporting the issue",
        "após confirmar o comportamento e criar uma prova de conceito, demonstrando o problema, reportei a vulnerabilidade para a equipe responsável. o problema foi analisado e posteriormente corrigido.":
            "after confirming the behavior and creating a proof of concept to demonstrate the issue, i reported the vulnerability to the team responsible. the issue was reviewed and later fixed.",
        "lições aprendidas": "lessons learned",
        "essa experiência reforçou a importância de conhecer as tecnologias utilizadas por uma aplicação e analisar códigos javascript carregados pelo navegador.":
            "this experience reinforced the importance of understanding the technologies used by an application and analyzing the javascript code loaded by the browser.",
        "porém, a principal lição foi entender que segurança nunca deve depender apenas de esconder funcionalidades dos usuários.":
            "however, the main lesson was that security should never rely solely on hiding features from users.",
        "uma funcionalidade que não está visível não significa que ela está protegida. os controles de autorização devem sempre ser aplicados no backend, onde a ação realmente é processada.":
            "a feature that isn't visible isn't necessarily protected. authorization controls must always be enforced on the backend, where the action is actually processed.",

        "contato - goulart": "contact - goulart",
        "o que o javascript pode revelar - goulart": "what javascript can reveal - goulart"
    };

    const attributeTranslations = {
        "estudos, projetos e anotações de luís felipe goulart sobre cibersegurança.":
            "cybersecurity studies, projects, and notes by luís felipe goulart.",
        "posts e write-ups sobre estudos de cibersegurança.":
            "posts and write-ups about cybersecurity studies.",
        "quando arquivos javascript revelaram mais do que deveriam.":
            "when javascript files revealed more than they should have."
    };

    const originalText = new WeakMap();
    const textWalker = document.createTreeWalker(
        document.documentElement,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || parent.closest("script, style, code, pre, noscript, textarea")) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    const textNodes = [];
    while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);

    function normalized(value) {
        return value.trim().replace(/\s+/g, " ");
    }

    function setLanguage(language) {
        const english = language === "en-US";

        textNodes.forEach((node) => {
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            const source = originalText.get(node);
            const key = normalized(source);
            const translated = english ? translations[key] : null;

            if (translated) {
                const leading = source.match(/^\s*/)?.[0] || "";
                const trailing = source.match(/\s*$/)?.[0] || "";
                node.nodeValue = leading + translated + trailing;
            } else {
                node.nodeValue = source;
            }
        });

        document.documentElement.lang = language;

        const description = document.querySelector('meta[name="description"]');
        if (description) {
            const sourceDescription = description.dataset.originalContent ?? description.content;
            description.dataset.originalContent = sourceDescription;
            description.content = english
                ? (attributeTranslations[normalized(sourceDescription)] || sourceDescription)
                : sourceDescription;
        }

        const navLabel = document.querySelector('.nav[aria-label]');
        if (navLabel) {
            navLabel.setAttribute("aria-label", english ? "Main navigation" : "Navegação principal");
        }
        const languageLabel = document.querySelector('.language-switch');
        if (languageLabel) {
            languageLabel.setAttribute("aria-label", english ? "Language selection" : "Seleção de idioma");
        }

        document.querySelectorAll(".language-switch [data-language]").forEach((button) => {
            const active = button.dataset.language === language;
            button.setAttribute("aria-pressed", String(active));
            button.classList.toggle("is-active", active);
        });

        try {
            localStorage.setItem("goulart-blog-language", language);
        } catch (_) {
            // The page still works when browser storage is unavailable.
        }
    }

    document.querySelectorAll(".language-switch [data-language]").forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.language));
    });

    let savedLanguage = "pt-BR";
    try {
        savedLanguage = localStorage.getItem("goulart-blog-language") || "pt-BR";
    } catch (_) {
        // Default to Portuguese when browser storage is unavailable.
    }

    setLanguage(savedLanguage === "en-US" ? "en-US" : "pt-BR");
})();
