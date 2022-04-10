//Obs em todos scripts por boa prática, algumas ações devem ser tomadas,  1- inicialmente colocamos no nosso html a tag js atraves do script <script>document.documentElement.className += ' js'</script> que pode ser colocado diretamente no head, essa função ira verificar se o js está habilitado no navegador e assim utilizará os scripts. para isso as classes que chamamos no nosso css, utilizamos o .js antes para que a classe só seja ativada se o js estiver ativo. 2 - englobamos as funções dentro de uma função e chamamos ela para que não se misture com outras. 3- dentro das funções executamos um if para ver se o elemento html que selecionamos realmente existe para que o código seja executado e não haja erro. 4- adicionamos uma classe js especifica para cada item que estamos mexendo no javascript para evitar misturar o css do item com o javascript.

// criando a navegação por tab, ao clicar em uma imagem de um animal, aparecer o texto referente a esse animal, em vez de aparecer todos de uma vez como no html.
function initTabNav() {
  let tabMenu = document.querySelectorAll(".js-tabmenu li");
  let tabContent = document.querySelectorAll(".js-tabcontent section");
  //obs isso faz com que sempre um item já esteja selecionado.
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    //funcao que adiciona a classe ativo ao receber um indice como um array.
    function ativeTab(indice) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[indice].classList.add("ativo");
    }

    //funcao que pega o indice de cada imagem e depois adiciona o evento de click a cada imagem chamando a funcao ativetab que adiciona a classe ativo na descrição;
    tabMenu.forEach((itemMenu, indice) => {
      itemMenu.addEventListener("click", () => {
        ativeTab(indice);
      });
    });
  }
}
initTabNav();
//obs criamos essa função initTabNav e chamamos ela aqui embaixo para isolar essa função do codigo e evitar que se misture com alguma outra função.

//criando accordion list no faq para que o texto de cada um só apareça ao clicar.
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion(event) {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo"); //o this nesse caso seria o mesmo que event.currentTarget
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

//criando scroll Suave nos links internos para não rolar de uma vez.

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //obs esse codigo seleciona apenas os a que o href inicia com #, ou seja os a que direcionam para um link interno.
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //forma alternativa com window
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // })
  }
  //obs estamos adicionando um foreach onde tem selector all e queremos adicionar evento para adicionar em cada item.
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//adicionando animação ao scrollSuave

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const metadeTela = window.innerHeight * 0.6; //pegamos o valor de 60% da altura da tela do usuario para utilizar no codigo onde pegamos o topo do elemento, para dar um distanciamento.

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - metadeTela < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
