const frases = [
    "Porque você me entende até no silêncio",
"Porque seu sorriso ilumina meu dia",
"Porque você me faz rir mesmo nos piores momentos",
"Porque me sinto em casa quando estou com você",
"Porque você acredita em mim quando nem eu acredito",
"Porque seu abraço cura qualquer dor",
"Porque você é meu porto seguro",
"Porque seu olhar me acalma",
"Porque tudo é mais bonito quando você está por perto",
"Porque você me inspira a ser melhor",
"Porque você cuida de mim como ninguém",
"Porque nossas conversas nunca são entediantes",
"Porque você me faz sentir especial",
"Porque você respeita quem eu sou",
"Porque ao seu lado o tempo voa",
"Porque você me ensina algo novo todos os dias",
"Porque você me dá forças para continuar",
"Porque você sabe exatamente o que dizer",
"Porque você é meu melhor amigo",
"Porque me sinto amado de verdade",
"Porque você me olha com amor",
"Porque você nunca desiste de mim",
"Porque você está comigo nos momentos difíceis",
"Porque dividimos sonhos",
"Porque você me faz sentir único",
"Porque sua voz me tranquiliza",
"Porque você ri das minhas piadas ruins",
"Porque você escuta com o coração",
"Porque você me valoriza",
"Porque você me surpreende sempre",
"Porque sua presença basta",
"Porque você tem um coração gigante",
"Porque você é honesto comigo",
"Porque você me faz acreditar no amor",
"Porque você aceita meus defeitos",
"Porque você celebra minhas conquistas",
"Porque você está sempre do meu lado",
"Porque você me conhece como ninguém",
"Porque seu toque me conforta",
"Porque seu jeito é único",
"Porque você me desafia a crescer",
"Porque você é meu refúgio",
"Porque você transforma tudo em leveza",
"Porque você me dá paz",
"Porque você me olha com ternura",
"Porque você tem um coração lindo",
"Porque você me faz bem",
"Porque você está nos meus planos",
"Porque você faz parte de mim",
"Porque você é luz nos meus dias escuros",
"Porque com você tudo é mais fácil",
"Porque você me escuta com paciência",
"Porque você me respeita",
"Porque você faz o mundo parecer melhor",
"Porque sua risada é música pra mim",
"Porque você cuida dos detalhes",
"Porque você tem um jeito só seu de amar",
"Porque você é meu equilíbrio",
"Porque você me acolhe sem julgar",
"Porque você transforma minha vida",
"Porque você me completa",
"Porque você faz meu coração bater mais forte",
"Porque você acredita no nosso amor",
"Porque você não mede esforços por nós",
"Porque você me trata com carinho",
"Porque você é sincero comigo",
"Porque você me dá segurança",
"Porque você ilumina meu caminho",
"Porque você torna os dias comuns extraordinários",
"Porque você me faz sentir amado todos os dias",
"Porque com você tudo faz sentido",
"Porque você é meu maior apoio",
"Porque você compartilha a vida comigo",
"Porque você me escuta de verdade",
"Porque você se importa",
"Porque você tem um olhar doce",
"Porque você é gentil com todos",
"Porque você sabe amar com leveza",
"Porque você me entende com um gesto",
"Porque você é presença, mesmo em silêncio",
"Porque você respeita meus espaços",
"Porque você me ajuda a evoluir",
"Porque você tem um jeito lindo de cuidar",
"Porque você está comigo mesmo longe",
"Porque você me faz sentir especial sem esforço",
"Porque você me dá vontade de sorrir",
"Porque você me inspira amor",
"Porque você é real",
"Porque você me faz sentir vivo",
"Porque você me faz querer ser melhor",
"Porque você é minha pessoa favorita",
"Porque sua existência faz tudo valer a pena",
"Porque você me ama do seu jeito",
"Porque você é o meu amor tranquilo",
"Porque você é a razão de muitos dos meus sorrisos",
"Porque você é mais do que sonhei",
"Porque você é tudo o que preciso",
"Porque você me ensina sobre o amor todos os dias",
"Porque com você tudo é possível",
"Porque você é a melhor parte do meu dia",
"Porque você é meu lar",
"Porque você me faz feliz só por existir"
];
  
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchButton");
  const resultsList = document.getElementById("resultsList");
  
  button.addEventListener("click", function () {
    const index = parseInt(input.value)-1;
    resultsList.innerHTML = "";
    
    if (!isNaN(index) && index >= 0 && (index) < frases.length) {
      const li = document.createElement("li");
      li.textContent = frases[index];
      li.innerHTML = `
        <div class="frase">
          <span class="numero">${index + 1}.</span>
          <p class="texto">${frases[index]}</p>
        </div>
      <br>
      <img src="images/flowers.png" alt="flowers" style="width: 499px; max-width: 100%; position:fixed; z-index:-1; pointer-events: none; bottom: 0; left: 0;">
    `;
      resultsList.appendChild(li);
    } else if (input.value !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
      <p class="texto">Escolhe um número de 1 a 100 amor ;)</p>
      <img src="images/flowers.png" alt="flowers" style="width: 499px; max-width: 100%; position:fixed; z-index:-1; pointer-events: none; bottom: 0; left: 0;">
      `;
      resultsList.appendChild(li);
    }
  });

  const cat = document.getElementById("cat");

  cat.addEventListener("mouseover", () => {
    cat.src = "images/love.png";
  });
  
  cat.addEventListener("mouseout", () => {
    cat.src = "images/curious.png";
  });

  