$(function () {
    $(".br").click(function (e) {
        e.preventDefault();
        $(".language-selected")
            .html("pt-BR")
            .removeClass("change-en")
            .addClass("change-br");

        $("#title_1").text("UI e UX da Americanas");
        $("#nome").html("Quem é <span>Arthur Queiroz?</span>");
        $("#projetos_academicos").text("Projetos Acadêmicos");
        $(".projeto__descricao").text("Explicação");
        $("#apresentacao").text(`Me chamo Arthur Queiroz, sou estudante de Análise e Desenvolvimento de Sistemas com foco e
                        trazer
                        inovação e satisfação para as pessoas.
                        Tenho experiências práticas no ramo de projetos, estruturação de projetos e algumas linguagens
                        como
                        Python, JS, SQL, MYSQL e etc.
                        Possuo conhecimento nas metodologias ágeis como Scrum e Kanban.
                        Meu foco hoje é mostrar como podemos trazer a satisfação para os clientes pela página web.`);

        $("#explicacao_1").text(`Este projeto teve como objetivo principal otimizar a experiência
                        do usuário no site da
                        Americanas, por meio da aplicação de princípios de usabilidade, acessibilidade e design moderno.
                        A equipe desenvolveu uma nova interface com foco em navegação intuitiva, menus dinâmicos,
                        filtros mais precisos de produtos e a remoção de elementos intrusivos como pop-ups e anúncios
                        inadequados.

                        Foi implementado também um bot de atendimento virtual, garantindo suporte rápido e eficiente ao
                        usuário. A interface foi desenvolvida com HTML, CSS e JavaScript e organizada com boas práticas
                        de modularização no VSCode, considerando padrões de acessibilidade e design responsivo.

                        O projeto utilizou o Design Thinking em todas as etapas: desde a empatia com o usuário e
                        definição dos problemas até a ideação, prototipagem e testes de usabilidade. Além disso,
                        aplicamos conceitos de Gestão Estratégica de TI, assegurando alinhamento com os objetivos da
                        empresa, escalabilidade das soluções e governança tecnológica.

                        Como resultado, entregamos uma proposta funcional e inovadora, que melhora significativamente a
                        experiência do cliente, reforça a presença digital da marca e prepara a base para crescimento
                        sustentável e contínuo da plataforma.`);

        $("#explicacao_2").text(`Este projeto é um Sistema Web de Registro de Cartório desenvolvido com Python (usando o framework Flask), MySQL,
             HTML5 e CSS3. Ele permite o cadastro de usuários com senhas criptografadas utilizando o algoritmo bcrypt, garantindo segurança no armazenamento
              de dados sensíveis. A aplicação também possibilita o registro de nascimentos, com campos como livro, folha, termo, nome do registrado,
              data de nascimento, e nome dos pais. Outra funcionalidade importante é a exibição do último registro feito no banco de dados, permitindo uma 
              visualização rápida e prática. O sistema possui autenticação de administrador, com controle de acesso via login, e fornece mensagens de validação
               com o uso do recurso flash(). A estrutura do projeto foi organizada de forma modular, com pastas separadas para templates, arquivos estáticos e rotas,
                facilitando manutenção e expansão. A integração com o banco de dados MySQL é feita por comandos SQL e uso de cursores,
                 garantindo performance e confiabilidade. Este projeto reflete boas práticas de desenvolvimento web, foco na segurança,
                  usabilidade e organização do código, sendo aplicável a ambientes reais.`);
        $("#title_2").text("Sistema Web de Registro de Cartório");
        $("#title_3").text("NLW com inteligência artificial aplicada");
        $("#explicacao_3").text(`TProjeto desenvolvido durante a NLW Agents da Rocketseat, com foco em integrar inteligência artificial a aplicações web. Utiliza HTML, CSS e JavaScript para criar uma interface que permite interações com a API da OpenAI, exibindo respostas em formato renderizado com markdown. Ideal para praticar integração com IA e desenvolvimento front-end moderno.`);
        $("#title_4").text("My server");
        $("#explicacao_4").text(`Escolha seu Plano é um projeto front-end desenvolvido com HTML5, CSS3,
             que simula uma landing page de apresentação de planos de assinatura.
              O objetivo é oferecer uma interface clara e responsiva onde o usuário pode comparar três planos
               (Essencial, Premium e Gold), visualizando preços, benefícios e botões de ação.
                O layout foi construído com foco em design moderno, usabilidade e responsividade, utilizando conceitos como flexbox,
                 componentização de cards e deploy na Vercel. Esse projeto me permitiu aprimorar habilidades em estruturação semântica,
                  estilização avançada e publicação de sites, sendo uma base sólida para páginas comerciais reais.`);
        $(".fechar_botao").text("Fechar")
    });

    $(".en").click(function (e) {
        e.preventDefault();
        $(".language-selected")
            .html("en-US")
            .removeClass("change-br")
            .addClass("change-en");

        $("#title_1").text("UI and UX of Americanas");
        $("#nome").html("Who is <span>Arthur Queiroz?</span>");
        $("#projetos_academicos").text("Academic Projects");
        $(".projeto__descricao").text("Explanation");
        $("#apresentacao").text(`My name is Arthur Queiroz, I am a student of Systems Analysis and Development focusing on bringing 
            innovation and satisfaction to people. I have practical experience in project management, project structuring, 
            and with several programming languages such as Python, JS, SQL, MYSQL, etc. I am knowledgeable in agile methodologies 
            like Scrum and Kanban. My focus today is to show how we can bring satisfaction to clients through web pages.`);

        $("#explicacao_1").text(`This project aimed primarily to optimize the user experience on the Americanas website by applying principles of usability,
             accessibility, and modern design. The team developed a new interface focused on intuitive navigation, dynamic menus, more accurate product filters,
              and the removal of intrusive elements such as pop-ups and inappropriate ads. A virtual customer service bot was also implemented to ensure fast and efficient
               support for users. The interface was developed using HTML, CSS, and JavaScript, and organized following best modularization practices in VSCode, taking into
                account accessibility standards and responsive design. The project applied Design Thinking throughout all stages: from user empathy and problem
                 definition to ideation, prototyping, and usability testing. In addition, we applied concepts from Strategic IT Management to ensure alignment
                  with the company’s goals, scalability of the solutions, and technological governance. As a result, we delivered a functional and innovative proposal
                   that significantly improves the customer experience, strengthens the brand’s digital presence, and lays the foundation for the platform’s
                    sustainable and continuous growth.`);

        $("#explicacao_2").text(`This project is a Web Registry System for notary offices, developed using Python (with the Flask framework), MySQL, HTML5, and CSS3.
             It allows user registration with encrypted passwords using the bcrypt algorithm, ensuring the secure storage of sensitive data. The application also enables
              the registration of birth records, with fields such as book, page, record number, name of the registered person, date of birth, and parents' names.
Another important feature is the display of the most recent record stored in the database, providing a quick and practical overview. The system includes administrator
 authentication with access control through login and provides validation messages using the flash() function. The project structure is modular, with separate folders for templates, static files, and routes, facilitating maintenance and scalability.
 Integration with the MySQL database is handled through SQL commands and the use of cursors, ensuring performance and reliability.
This project reflects best practices in web development, with a focus on security, usability, and code organization, making it suitable
 for real-world environments.`);
        $("#title_2").text("Web-based Notary Registration System");
        $("#title_3").text("NLW Applied Artificial Intelligence");
        $("#explicacao_3").text(`Project developed during Rocketseat's NLW Agents, focusing on integrating artificial intelligence into web applications. It uses HTML, CSS, and JavaScript to create an interface that enables interactions with the OpenAI API, displaying responses rendered in markdown format. Ideal for practicing AI integration and modern front-end development.`);
        $("#title_4").text("My server");
        $("#explicacao_4").text(`Choose Your Plan is a front-end project developed with HTML5, CSS3, which simulates a landing page for presenting subscription plans. 
            The goal is to provide a clear and responsive interface where users can compare three plans (Essential, Premium, and Gold),
             viewing prices, benefits, and call-to-action buttons. The layout was built with a focus on modern design, usability, and responsiveness,
              using concepts such as flexbox, card componentization, and deployment on Vercel. This project allowed me to improve my skills in semantic
               structuring, advanced styling, and website deployment, serving as a solid foundation for real commercial pages.`);
        $(".fechar_botao").text("close")
    });
});
