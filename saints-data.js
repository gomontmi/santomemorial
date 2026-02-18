// ============================================================
// SANTO MEMORIAL — BASE DE DADOS DE SANTOS
// ============================================================
// COMO ADICIONAR UM NOVO SANTO:
// 1. Copie uma das entradas abaixo (do { ao }, incluindo a vírgula)
// 2. Cole no FIM da lista, antes do ];
// 3. Preencha os detalhes do seu novo santo
// 4. Guarde o ficheiro e faça upload para o GitHub
//
// CAMPOS EXPLICADOS:
//   id         → nome curto único, sem espaços (ex: "nossa-senhora-fatima")
//   nome       → nome completo do santo
//   festa      → dia de festa (ex: "13 de maio")
//   mes        → apenas o nome do mês (ex: "maio")
//   nascimento → ano de nascimento (ou "Desconhecido")
//   falecimento→ ano de falecimento
//   origem     → país ou região
//   padroeiro  → do que é padroeiro (array, pode ter vários)
//   categorias → categorias de ajuda (saúde, riqueza, proteção, etc.)
//   resumo     → descrição breve de 1-2 frases (mostrada nos cartões)
//   historia   → história completa (mostrada na página do santo)
//   notavel    → razões principais pelas quais é notável (array)
//   destaque   → true = aparece na homepage, false = apenas na lista
// ============================================================

const saintsData = [

  {
    id: "nossa-senhora-fatima",
    nome: "Nossa Senhora de Fátima",
    festa: "13 de maio",
    mes: "maio",
    nascimento: "1917",
    falecimento: "—",
    origem: "Portugal",
    padroeiro: ["Portugal", "Paz mundial", "Conversão dos pecadores"],
    categorias: ["Saúde", "Paz", "Proteção familiar", "Intercessão espiritual"],
    resumo: "Em 1917, a Virgem Maria apareceu a três crianças pastorinhas na Cova da Iria, em Fátima, trazendo uma mensagem de paz, oração e conversão que transformou Portugal e o mundo católico.",
    historia: "A história de Nossa Senhora de Fátima começa a 13 de maio de 1917, quando três crianças pastorinhas — Lúcia dos Santos (10 anos) e seus primos Francisco (9 anos) e Jacinta Marto (7 anos) — guardavam o rebanho na Cova da Iria, perto de Aljustrel, em Fátima. Após rezarem o terço, viram um clarão intenso no céu e, sobre uma pequena azinheira, surgiu uma Senhora vestida de branco, mais brilhante que o sol, com um rosário nas mãos. A Senhora pediu-lhes que voltassem àquele lugar durante seis meses consecutivos, sempre no dia 13. As aparições repetiram-se mensalmente, e em cada encontro a Virgem Maria insistia na importância da oração do terço, da penitência e da conversão dos pecadores. Na quarta aparição, as crianças foram impedidas de ir à Cova da Iria pelo administrador de Ourém, que as prendeu tentando forçá-las a revelar o segredo. A quinta aparição ocorreu com milhares de pessoas presentes. Na sexta e última aparição, a 13 de outubro de 1917, cerca de 70 mil pessoas testemunharam o Milagre do Sol: o astro dançou no céu, mudou de cor e pareceu aproximar-se da Terra, secando instantaneamente as roupas encharcadas pela chuva torrencial. A Virgem revelou-se como Nossa Senhora do Rosário. As mensagens de Fátima incluíam três segredos: a visão do inferno, a profecia da Segunda Guerra Mundial e a consagração da Rússia ao Imaculado Coração de Maria, e um terceiro segredo revelado apenas décadas depois. Francisco morreu em 1919 e Jacinta em 1920, ambos vítimas da gripe pneumónica. Lúcia tornou-se religiosa carmelita e viveu até 2005. Em 1930, a Igreja Católica declarou as aparições dignas de fé. Fátima tornou-se um dos santuários marianos mais importantes do mundo, visitado por milhões de peregrinos anualmente, incluindo três papas que ali foram em peregrinação.",
    notavel: [
      "Aparição mariana reconhecida pela Igreja Católica",
      "Milagre do Sol testemunhado por 70 mil pessoas",
      "Santuário visitado por milhões de peregrinos anualmente",
      "Mensagem de paz e conversão que marcou o século XX",
      "Três crianças videntes, duas beatificadas pela Igreja"
    ],
    destaque: true
  },

  {
    id: "santo-antonio-lisboa",
    nome: "Santo António de Lisboa",
    festa: "13 de junho",
    mes: "junho",
    nascimento: "1195",
    falecimento: "1231",
    origem: "Portugal",
    padroeiro: ["Lisboa", "Casamentos", "Objetos perdidos", "Pobres"],
    categorias: ["Casamentos", "Amor", "Fertilidade", "Saúde", "Objetos perdidos"],
    resumo: "Nascido em Lisboa, Santo António é o santo casamenteiro mais amado de Portugal, conhecido pela sua generosidade para com os pobres e pelos incontáveis milagres que realizou ainda em vida.",
    historia: "Fernando de Bulhões nasceu em Lisboa em 1195, filho de uma família nobre. Estudou na Sé de Lisboa e no Mosteiro de São Vicente de Fora antes de ingressar nos Cónegos Regrantes de Santo Agostinho. Mais tarde, transferiu-se para o Mosteiro de Santa Cruz de Coimbra, onde aprofundou os seus estudos em teologia. Em 1220, profundamente comovido pelo martírio de cinco frades franciscanos em Marrocos, decidiu abandonar a vida agostiniana e juntar-se à Ordem dos Franciscanos, adotando o nome de António em honra de Santo António do Deserto. António partiu para África com o sonho do martírio missionário, mas adoeceu gravemente e teve de regressar. O navio que o trazia foi desviado por uma tempestade para a Sicília, onde iniciou a sua extraordinária missão de pregação. Dotado de uma eloquência fora do comum e de um profundo conhecimento das Escrituras, tornou-se um dos pregadores mais célebres da Europa. Ensinou teologia em Bolonha, Toulouse, Montpellier e Pádua. Era conhecido pela sua imensa caridade para com os pobres: distribuía pão, ajudava jovens sem dote a casar e defendia os oprimidos. Muitos milagres lhe foram atribuídos ainda em vida, incluindo curas, conversões de hereges, e até a ressurreição de mortos. Uma das lendas mais conhecidas conta que pregou aos peixes quando os hereges se recusaram a ouvi-lo, e os peixes emergiram da água para escutá-lo. António passou os últimos meses da sua vida em Pádua, onde morreu a 13 de junho de 1231, aos 36 anos. Foi canonizado menos de um ano depois pelo Papa Gregório IX, um dos processos de canonização mais rápidos da história. Em Portugal, é venerado como santo casamenteiro devido à sua fama de conciliador de casais e protetor dos pobres que não tinham dote para casar. O dia 13 de junho é feriado municipal em Lisboa, e os famosos Casamentos de Santo António celebram anualmente a tradição do santo padroeiro popular da cidade.",
    notavel: [
      "Um dos santos portugueses mais venerados no mundo",
      "Doutor da Igreja proclamado em 1946",
      "Canonizado menos de um ano após a sua morte",
      "Padroeiro de Lisboa e das coisas perdidas",
      "Conhecido mundialmente como o santo casamenteiro"
    ],
    destaque: true
  },

  {
    id: "sao-joao-baptista",
    nome: "São João Baptista",
    festa: "24 de junho",
    mes: "junho",
    nascimento: "~6 a.C.",
    falecimento: "~30 d.C.",
    origem: "Judeia (atual Israel/Palestina)",
    padroeiro: ["Colheitas", "Porto (Portugal)", "Batismo"],
    categorias: ["Proteção", "Iluminação espiritual", "Boas colheitas"],
    resumo: "Profeta que preparou o caminho para Jesus Cristo, batizando-o no rio Jordão. Em Portugal, é especialmente celebrado no Porto com as festas de São João, marcadas por fogueiras, martelinhos e bailaricos.",
    historia: "João Baptista nasceu na Judeia, filho do sacerdote Zacarias e de Isabel, prima de Maria, mãe de Jesus. O seu nascimento foi anunciado pelo arcanjo Gabriel e foi um milagre, pois os seus pais eram idosos e estéreis. João cresceu no deserto, vivendo de forma austera, vestido de pele de camelo e alimentando-se de mel silvestre e gafanhotos. Aos trinta anos, iniciou a sua missão profética às margens do rio Jordão, pregando a conversão dos pecados e batizando multidões que vinham ouvi-lo. Foi João quem baptizou Jesus Cristo, reconhecendo-o como o Messias e proclamando: 'Eis o Cordeiro de Deus, que tira o pecado do mundo'. João denunciou corajosamente os pecados da corte, incluindo o adultério do rei Herodes Antipas, que se havia casado com Herodias, mulher do seu irmão. Por isso foi preso. Durante um banquete, Salomé, filha de Herodias, dançou para Herodes, que lhe prometeu conceder qualquer pedido. Instigada pela mãe, Salomé pediu a cabeça de João Baptista numa bandeja. João foi decapitado na prisão, tornando-se mártir da verdade e da justiça. Em Portugal, as festas de São João são das mais populares, especialmente no Porto, onde a noite de 23 para 24 de junho é celebrada com fogueiras, cascatas, martelinhos de plástico, balões de ar quente e arraiais nas ruas. A tradição das fogueiras simboliza a luz da fé que João trouxe ao mundo. São João é padroeiro das boas colheitas e invocado para proteção e iluminação espiritual.",
    notavel: [
      "Batizou Jesus Cristo no rio Jordão",
      "Último profeta do Antigo Testamento",
      "Mártir decapitado por defender a verdade",
      "Festas de São João no Porto são Património Imaterial",
      "Padroeiro das boas colheitas e dos festejos populares"
    ],
    destaque: true
  },

  {
    id: "sao-pedro",
    nome: "São Pedro",
    festa: "29 de junho",
    mes: "junho",
    nascimento: "~1 d.C.",
    falecimento: "~67 d.C.",
    origem: "Galileia (atual Israel)",
    padroeiro: ["Pescadores", "Papado", "Roma"],
    categorias: ["Sucesso", "Proteção", "Fartura"],
    resumo: "Pescador da Galileia escolhido por Jesus para ser o primeiro Papa, líder dos Apóstolos e pedra fundamental sobre a qual Cristo edificou a Sua Igreja. Em Portugal é especialmente venerado nas comunidades piscatórias.",
    historia: "Simão, filho de Jonas, era um simples pescador do mar da Galileia quando Jesus o chamou dizendo: 'Vem comigo e far-te-ei pescador de homens.' Jesus deu-lhe o nome de Pedro (Kefas em aramaico, que significa 'pedra' ou 'rocha'), dizendo: 'Tu és Pedro, e sobre esta pedra edificarei a minha Igreja.' Pedro tornou-se o líder dos doze apóstolos, testemunhando os maiores milagres de Cristo: a Transfiguração no Monte Tabor, a ressurreição da filha de Jairo e a agonia no Jardim das Oliveiras. No entanto, Pedro também viveu momentos de grande fraqueza: negou Cristo três vezes na noite da prisão, por medo. Após a ressurreição, Jesus perdoou-o e confiou-lhe o cuidado da Igreja: 'Apascenta as minhas ovelhas.' No dia de Pentecostes, cheio do Espírito Santo, Pedro pregou corajosamente em Jerusalém, convertendo três mil pessoas num só dia. Foi preso várias vezes, açoitado e perseguido, mas continuou a pregar incansavelmente. Viajou pela Judeia, Samaria e Antioquia antes de se estabelecer em Roma, onde liderou a comunidade cristã durante os tempos de perseguição do imperador Nero. Segundo a tradição, Pedro foi crucificado de cabeça para baixo, a seu próprio pedido, por não se considerar digno de morrer da mesma forma que Cristo. Foi sepultado no monte Vaticano, e sobre o seu túmulo foi erguida a Basílica de São Pedro, centro da cristandade. Em Portugal, São Pedro é venerado especialmente nas comunidades piscatórias, onde é invocado para proteção no mar, fartura nas pescarias e sucesso no trabalho. As suas festas, celebradas a 29 de junho, incluem procissões marítimas e bênçãos dos barcos.",
    notavel: [
      "Primeiro Papa da Igreja Católica",
      "Líder dos doze apóstolos de Jesus Cristo",
      "Martirizado em Roma sob o imperador Nero",
      "Padroeiro dos pescadores e do Papado",
      "Basílica de São Pedro construída sobre o seu túmulo"
    ],
    destaque: false
  },

  {
    id: "sao-jorge",
    nome: "São Jorge",
    festa: "23 de abril",
    mes: "abril",
    nascimento: "~280",
    falecimento: "~303",
    origem: "Capadócia (atual Turquia)",
    padroeiro: ["Inglaterra", "Portugal", "Guerreiros", "Escuteiros"],
    categorias: ["Proteção contra perigos", "Coragem", "Força espiritual"],
    resumo: "Soldado romano e mártir cristão, venerado pela sua coragem inabalável na defesa da fé. A lenda do dragão simboliza a vitória do bem sobre o mal e a proteção divina nos momentos de maior perigo.",
    historia: "Jorge nasceu na Capadócia, atual Turquia, por volta do ano 280, filho de pais cristãos. Seguiu a carreira militar e tornou-se oficial de alta patente no exército romano sob o imperador Diocleciano. Quando Diocleciano iniciou uma violenta perseguição aos cristãos, Jorge recusou-se a renunciar à sua fé, mesmo sabendo que isso lhe custaria a vida. Apresentou-se perante o imperador e declarou abertamente ser cristão, distribuindo os seus bens aos pobres antes de enfrentar o martírio. Foi submetido a terríveis torturas: foi esticado em roda de tortura, queimado com tochas, obrigado a beber veneno e pisado com sapatos de ferro com pregos. Milagrosamente, sobreviveu a tudo até ser finalmente decapitado a 23 de abril de 303, em Lida (atual Israel). A lenda mais célebre de São Jorge, popularizada na Idade Média, conta que um dragão aterrorizava uma cidade, exigindo sacrifícios humanos. Quando a princesa estava prestes a ser devorada, Jorge apareceu montado num cavalo branco, feriu o dragão com a sua lança e salvou a donzela. A cidade inteira converteu-se ao cristianismo. Esta lenda simboliza a vitória da fé sobre o mal. Em Portugal, São Jorge é invocado em situações de grande perigo, especialmente por militares e pessoas que enfrentam batalhas difíceis. A sua festa é celebrada com procissões e é tradição comer fava rica (com chouriço) neste dia. São Jorge é também padroeiro dos escuteiros e símbolo de coragem e força espiritual.",
    notavel: [
      "Mártir cristão do século III",
      "Lenda do dragão simboliza a vitória sobre o mal",
      "Padroeiro de Inglaterra, Portugal e de várias nações",
      "Invocado em situações de perigo e batalhas",
      "Símbolo universal de coragem e fé"
    ],
    destaque: false
  },

  {
    id: "sao-bento",
    nome: "São Bento de Núrsia",
    festa: "11 de julho",
    mes: "julho",
    nascimento: "480",
    falecimento: "547",
    origem: "Itália",
    padroeiro: ["Europa", "Monges", "Estudantes"],
    categorias: ["Proteção contra o mal", "Saúde", "Paz interior"],
    resumo: "Fundador da ordem beneditina e pai do monaquismo ocidental. A medalha de São Bento é considerada um poderoso sacramental de proteção contra influências malignas e tentações.",
    historia: "Bento nasceu em Núrsia, Itália, por volta de 480, numa família nobre. Foi enviado a Roma para estudar, mas ficou horrorizado com a decadência moral da cidade e retirou-se para uma gruta em Subiaco, onde viveu como eremita durante três anos, dedicando-se à oração e à penitência. A fama da sua santidade espalhou-se e monges vieram pedir-lhe que fosse o seu abade. Bento aceitou, mas a disciplina que impôs foi demasiado rigorosa para alguns, que tentaram envenená-lo. Milagrosamente, o cálice com veneno quebrou-se quando Bento fez o sinal da cruz sobre ele. Mais tarde, fundou doze pequenos mosteiros em Subiaco e, finalmente, estabeleceu-se em Monte Cassino, onde construiu o mosteiro que se tornaria o berço da Ordem Beneditina. Ali escreveu a célebre Regra de São Bento, que resumiu no lema 'Ora et Labora' (Reza e Trabalha). A Regra estabelecia uma vida equilibrada de oração, trabalho manual e estudo, tornando-se a base do monaquismo ocidental e preservando a cultura clássica durante a Idade Média. São Bento realizou inúmeros milagres: ressuscitou um menino, fez brotar água de uma rocha, multiplicou alimentos e expulsou demónios. Segundo a tradição, teve visões místicas, incluindo uma em que viu toda a criação numa bola de luz. Morreu a 21 de março de 547, de pé na capela, apoiado pelos seus monges. A Medalha de São Bento, cunhada séculos após a sua morte, tornou-se um dos sacramentais mais poderosos da Igreja, invocada para proteção contra o mal, doenças e tentações. Contém símbolos e orações em latim que invocam a proteção divina através da intercessão de São Bento.",
    notavel: [
      "Fundador da Ordem Beneditina",
      "Autor da Regra de São Bento (Ora et Labora)",
      "Padroeiro da Europa proclamado por Paulo VI",
      "Medalha de São Bento usada para proteção espiritual",
      "Preservou a cultura clássica durante a Idade Média"
    ],
    destaque: false
  }

,

  {
    id: "santa-rita-cassia",
    nome: "Santa Rita de Cássia",
    festa: "22 de maio",
    mes: "maio",
    nascimento: "1381",
    falecimento: "1457",
    origem: "Itália",
    padroeiro: ["Causas impossíveis", "Casamentos difíceis"],
    categorias: ["Causas impossíveis", "Dificuldades financeiras", "Problemas familiares"],
    resumo: "Conhecida como a santa das causas impossíveis, Rita suportou um casamento difícil, a morte violenta do marido e dos filhos, antes de se tornar freira agostiniana e receber os estigmas da Paixão de Cristo.",
    historia: "Rita Lotti nasceu em 1381, perto de Cássia, Itália. Desde criança desejava ser freira, mas os pais obrigaram-na a casar com um homem violento e cruel. Durante 18 anos, Rita suportou maus tratos com paciência e oração, conseguindo finalmente converter o marido. Pouco depois, ele foi assassinado numa vendeta. Os dois filhos juraram vingar o pai, mas Rita rezou intensamente para que Deus os levasse antes que cometessem pecado mortal. Ambos adoeceram e morreram perdoando os assassinos do pai. Viúva e sem filhos, Rita tentou entrar para o convento agostiniano de Cássia, mas foi rejeitada três vezes por ser viúva. Segundo a lenda, os santos padroeiros da cidade — João Baptista, Agostinho e Nicolau de Tolentino — apareceram-lhe e levaram-na milagrosamente para dentro do convento fechado. As freiras aceitaram-na como sinal divino. Rita viveu 40 anos no convento, dedicando-se à oração e penitência. Durante um sermão sobre a Paixão de Cristo, rezou para partilhar o sofrimento do Senhor. Um espinho da coroa de Cristo desprendeu-se do crucifixo e feriu-a na testa, deixando uma ferida que nunca sarou e exalava mau cheiro, obrigando-a ao isolamento. Nos seus últimos anos, acamada e moribunda, pediu a uma prima que lhe trouxesse uma rosa do jardim da sua antiga casa. Era pleno inverno, mas milagrosamente a rosa estava florida. Morreu a 22 de maio de 1457. O seu corpo permanece incorrupto até hoje no santuário de Cássia. É invocada em situações desesperadas, casamentos difíceis, doenças incuráveis e causas impossíveis.",
    notavel: [
      "Santa das causas impossíveis",
      "Recebeu os estigmas da Paixão de Cristo",
      "Corpo incorrupto há mais de 500 anos",
      "Milagre da rosa no inverno",
      "Padroeira de situações desesperadas"
    ],
    destaque: false
  },

  {
    id: "sao-francisco-assis",
    nome: "São Francisco de Assis",
    festa: "4 de outubro",
    mes: "outubro",
    nascimento: "1181",
    falecimento: "1226",
    origem: "Itália",
    padroeiro: ["Animais", "Ecologia", "Itália"],
    categorias: ["Proteção dos animais", "Ecologia", "Simplicidade espiritual", "Paz"],
    resumo: "Filho de um rico mercador que renunciou a tudo para abraçar a pobreza radical e fundar a Ordem Franciscana. Recebeu os estigmas de Cristo e é conhecido pelo seu amor a toda a criação.",
    historia: "Giovanni di Pietro di Bernardone, conhecido como Francisco, nasceu em Assis, Itália, em 1181, filho de um rico comerciante de tecidos. Levou uma juventude folgada e despreocupada até que, durante uma doença grave e depois de uma experiência de guerra como prisioneiro, teve uma profunda conversão espiritual. Certo dia, ao rezar na igreja de São Damião, ouviu Cristo falar-lhe do crucifixo: 'Francisco, vai e repara a minha casa que, como vês, está toda em ruínas.' Francisco começou literalmente a reconstruir igrejas abandonadas, mas depois compreendeu que devia reformar a Igreja espiritualmente. Numa dramática cena pública, despiu-se diante do bispo e do próprio pai, devolvendo-lhe as roupas e renunciando à herança: 'Até agora chamei-vos pai na terra; de agora em diante posso dizer: Pai nosso que estais nos céus.' Vestido num hábito rude, viveu na mais absoluta pobreza, chamando-a de 'minha senhora'. Pregava com uma simplicidade que comovia multidões. Rapidamente juntaram-se-lhe seguidores, formando a Ordem dos Frades Menores (Franciscanos). Francisco teve uma relação mística com a natureza: pregou aos pássaros, amansou o lobo de Gubbio e compôs o Cântico das Criaturas, um dos primeiros textos da literatura italiana. Em 1224, no monte Alverne, durante uma visão de Cristo crucificado, recebeu os estigmas — as cinco chagas de Cristo — nas mãos, pés e lado. Foi o primeiro caso documentado de estigmatização. Morreu a 3 de outubro de 1226, cantando, aos 44 anos. Foi canonizado apenas dois anos depois. O Papa Francisco escolheu o seu nome em homenagem ao Poverello de Assis.",
    notavel: [
      "Fundador da Ordem Franciscana",
      "Primeiro estigmatizado da história",
      "Autor do Cântico das Criaturas",
      "Padroeiro dos animais e da ecologia",
      "Santo mais popular do catolicismo"
    ],
    destaque: false
  },

  {
    id: "santa-teresinha-menino-jesus",
    nome: "Santa Teresinha do Menino Jesus",
    festa: "1 de outubro",
    mes: "outubro",
    nascimento: "1873",
    falecimento: "1897",
    origem: "França",
    padroeiro: ["Missões", "Tuberculose", "Floristas"],
    categorias: ["Graças pequenas", "Saúde", "Simplicidade", "Confiança em Deus"],
    resumo: "Carmelita francesa que viveu apenas 24 anos mas deixou um ensinamento profundo sobre a 'pequena via' da infância espiritual, tornando-se Doutora da Igreja e uma das santas mais amadas do mundo.",
    historia: "Marie-Françoise-Thérèse Martin nasceu a 2 de janeiro de 1873, em Alençon, França, filha mais nova de Louis e Zélie Martin (ambos declarados santos). Após a morte da mãe quando tinha apenas quatro anos, foi criada pelo pai e pelas irmãs mais velhas com imenso amor. Desde pequena demonstrou um temperamento forte mas também uma profunda sensibilidade espiritual. Aos 14 anos sentiu uma vocação irresistível para o Carmelo, mas era demasiado jovem para entrar. Foi em peregrinação a Roma e, durante uma audiência com o Papa Leão XIII, ajoelhou-se e pediu-lhe permissão especial. O Papa ficou impressionado com a sua determinação. Aos 15 anos entrou finalmente para o Carmelo de Lisieux, onde três das suas irmãs já eram religiosas. Teresinha levou uma vida exterior muito simples e ordinária, mas interiormente desenvolveu uma espiritualidade revolucionária que chamou de 'pequena via' ou 'via da infância espiritual': confiar em Deus como uma criança pequena confia no pai, fazer pequenas coisas com grande amor, e oferecer cada ação, por mais humilde que seja, como um ato de amor a Deus. Escreveu a sua autobiografia, 'História de Uma Alma', por obediência, onde expôs esta doutrina. Contraiu tuberculose aos 23 anos e viveu os últimos meses numa agonia terrível, mas mantendo a serenidade e repetindo: 'Não morro, entro na vida.' Morreu a 30 de setembro de 1897 dizendo: 'Meu Deus, eu vos amo!' Foi canonizada em 1925 e proclamada Doutora da Igreja em 1997 por João Paulo II. É co-padroeira das missões, apesar de nunca ter saído do convento. É invocada especialmente para alcançar pequenas graças do dia-a-dia e para confiar em Deus nas dificuldades.",
    notavel: [
      "Doutora da Igreja proclamada em 1997",
      "Autora de 'História de Uma Alma'",
      "Criadora da 'pequena via' de santidade",
      "Padroeira das missões sem nunca ter sido missionária",
      "Pais canonizados — primeira família santa"
    ],
    destaque: false
  },

  {
    id: "sao-sebastiao",
    nome: "São Sebastião",
    festa: "20 de janeiro",
    mes: "janeiro",
    nascimento: "256",
    falecimento: "288",
    origem: "Narbona (atual França)",
    padroeiro: ["Soldados", "Atletas", "Pestes"],
    categorias: ["Saúde", "Proteção contra epidemias", "Força na adversidade"],
    resumo: "Soldado romano que escondeu a sua fé cristã para ajudar os prisioneiros cristãos. Sobreviveu milagrosamente ao martírio por flechas mas foi morto a bastonadas. É invocado contra epidemias e pestes.",
    historia: "Sebastião nasceu em Narbona, na Gália (atual França), por volta de 256, mas foi educado em Milão, Itália. Tornou-se oficial da Guarda Pretoriana, a elite militar romana, sob o imperador Diocleciano. Escondeu a sua fé cristã para poder estar perto dos prisioneiros cristãos nas masmorras romanas, levando-lhes conforto espiritual e, quando possível, ajudando-os a escapar. Converteu muitos pagãos, incluindo o prefeito de Roma e sua família. Quando a sua fé foi descoberta, Diocleciano sentiu-se profundamente traído e ordenou que fosse executado da forma mais cruel: atado a uma árvore ou coluna e usado como alvo para arqueiros. Sebastião foi crivado de flechas e deixado por morto. Mas Santa Irene, viúva de outro mártir, encontrou-o ainda vivo, levou-o para casa e tratou dos ferimentos. Sebastião recuperou milagrosamente. Em vez de fugir, apresentou-se novamente diante de Diocleciano para repreendê-lo pelas perseguições aos cristãos. Furioso, o imperador ordenou que fosse espancado até à morte com clavas e o seu corpo lançado no esgoto. Cristãos recuperaram o corpo e sepultaram-no nas catacumbas. São Sebastião tornou-se um dos mártires mais venerados da Igreja primitiva. Durante a peste negra na Idade Média, era invocado como protetor contra epidemias, pois as flechas simbolizavam os 'dardos da pestilência'. É padroeiro dos soldados, atletas e de muitas cidades que o invocam em tempos de pandemia.",
    notavel: [
      "Mártir da Igreja primitiva",
      "Sobreviveu milagrosamente a flechas",
      "Invocado contra pestes e epidemias",
      "Padroeiro dos soldados e atletas",
      "Um dos santos mais representados na arte cristã"
    ],
    destaque: false
  },

  {
    id: "sao-cristovao",
    nome: "São Cristóvão",
    festa: "25 de julho",
    mes: "julho",
    nascimento: "Desconhecido",
    falecimento: "~250",
    origem: "Canaã ou Lícia",
    padroeiro: ["Viajantes", "Motoristas", "Transportes"],
    categorias: ["Proteção durante viagens", "Sucesso no trabalho", "Segurança nas estradas"],
    resumo: "Gigante que transportava pessoas através de um rio perigoso até que, numa noite, carregou uma criança que revelou ser Cristo. É o padroeiro dos viajantes e motoristas.",
    historia: "A vida de Cristóvão está envolta em lenda e tradição. Diz-se que era um homem de estatura gigantesca chamado Réprobo, nascido na terra de Canaã. Decidiu servir apenas o mais poderoso dos reis. Serviu um rei terreno, mas ao perceber que este temia o diabo, foi servir o diabo. Porém, quando viu o diabo fugir de uma cruz, compreendeu que havia alguém ainda mais poderoso: Cristo. Foi procurar um eremita para aprender sobre Cristo. O eremita disse-lhe que, se era forte, podia servir Cristo ajudando pessoas a atravessar um rio perigoso. Réprobo construiu uma cabana junto ao rio e começou a transportar pessoas nas suas costas fortes. Numa noite de tempestade, uma criança pediu-lhe ajuda para atravessar. Réprobo colocou-a aos ombros e começou a atravessar, mas a criança tornava-se cada vez mais pesada, e as águas subiam perigosamente. Réprobo quase se afogou com o esforço. Ao chegar à outra margem, exausto, perguntou à criança quem era. A criança respondeu: 'Não te admires, Cristóvão, porque não só levaste o mundo inteiro, mas Aquele que criou o mundo. Eu sou Cristo, teu Rei.' A criança desapareceu, mas Réprobo cravou o seu cajado no chão, que floresceu milagrosamente. Desde então passou a chamar-se Cristóvão ('Portador de Cristo'). Pregou o Evangelho em Lícia e Samos, realizando muitos milagres. Foi martirizado sob o imperador Décio. É tradicionalmente invocado para proteção durante viagens, e a sua imagem é colocada em carros, autocarros e meios de transporte.",
    notavel: [
      "Padroeiro dos viajantes e motoristas",
      "Lenda de carregar o Menino Jesus",
      "Mártir do século III",
      "Imagem protetora em veículos",
      "Um dos catorze santos auxiliadores"
    ],
    destaque: false
  },

  {
    id: "beato-nuno-santa-maria",
    nome: "Beato Nuno de Santa Maria",
    festa: "6 de novembro",
    mes: "novembro",
    nascimento: "1360",
    falecimento: "1431",
    origem: "Portugal",
    padroeiro: ["Portugal", "Exército português"],
    categorias: ["Sucesso em batalhas pessoais", "Proteção nacional", "Devoção"],
    resumo: "Nuno Álvares Pereira, o Santo Condestável, foi um dos maiores heróis militares de Portugal, vencedor da Batalha de Aljubarrota. Após a morte da esposa, tornou-se frade carmelita e viveu em humildade até morrer.",
    historia: "Nuno Álvares Pereira nasceu em 1360, filho de Álvaro Gonçalves Pereira, prior da Ordem do Hospital. Desde muito jovem revelou extraordinárias capacidades militares. Aos 16 anos casou com Leonor de Alvim e tiveram três filhos. Nuno tornou-se Condestável de Portugal (comandante supremo do exército) durante a crise de 1383-1385, quando Portugal estava ameaçado de ser anexado por Castela. D. João I, Mestre de Avis, nomeou-o para liderar as tropas portuguesas. Nuno tinha apenas 24 anos. A 14 de agosto de 1385, comandou as forças portuguesas na decisiva Batalha de Aljubarrota, onde um pequeno exército português derrotou as muito superiores forças castelhanas, garantindo a independência de Portugal. Nuno atribuiu sempre a vitória à Virgem Maria. Após décadas de serviço militar e a morte da sua esposa, Nuno distribuiu os seus bens aos pobres, construiu o Convento do Carmo em Lisboa e, aos 60 anos, renunciou a todos os títulos e honras. Vestiu o hábito carmelita e passou a chamar-se Frei Nuno de Santa Maria, vivendo em pobreza e humildade, fazendo trabalhos manuais no convento até à morte. Morreu a 1 de novembro de 1431. Era tão amado que o povo de Lisboa acorreu em massa às suas exéquias. Foi beatificado em 2009 pelo Papa Bento XVI. É invocado para sucesso em batalhas pessoais e desafios difíceis, e é padroeiro do exército português.",
    notavel: [
      "Herói da Batalha de Aljubarrota (1385)",
      "Condestável de Portugal",
      "Fundador do Convento do Carmo em Lisboa",
      "Beatificado em 2009",
      "Exemplo de humildade após glória militar"
    ],
    destaque: false
  },

  {
    id: "santo-expedito",
    nome: "Santo Expedito",
    festa: "19 de abril",
    mes: "abril",
    nascimento: "Desconhecido",
    falecimento: "~303",
    origem: "Arménia",
    padroeiro: ["Causas urgentes", "Estudantes"],
    categorias: ["Resolução rápida de problemas", "Causas urgentes", "Justiça"],
    resumo: "Soldado romano martirizado na Arménia, invocado para causas urgentes e decisões rápidas. A sua devoção, embora menos tradicional em Portugal, tem crescido entre quem enfrenta prazos apertados.",
    historia: "Santo Expedito era, segundo a tradição, um centurião romano estacionado na Arménia durante o reinado de Diocleciano. Enquanto comandava a sua legião, teve uma visão de Cristo e decidiu converter-se ao cristianismo. No momento da sua conversão, apareceu-lhe um corvo gritando 'Cras! Cras!' (em latim, 'amanhã, amanhã'), tentando fazê-lo adiar a decisão. Expedito esmagou o corvo sob o pé e gritou 'Hodie!' ('hoje!'), proclamando que não adiaria a sua conversão nem por um dia. Por causa da sua fé, foi martirizado e decapitado a 19 de abril de 303. O seu culto espalhou-se pela Europa e chegou a Portugal através de comunidades de emigrantes. Expedito é representado na iconografia vestido como um soldado romano, pisando um corvo (símbolo da procrastinação) e segurando uma cruz com a palavra 'Hodie' (hoje) e uma palma do martírio. É invocado especialmente para assuntos urgentes que precisam de solução rápida: exames, entrevistas de emprego, processos judiciais, decisões importantes, negócios com prazo apertado. Muitos devotos fazem promessas a Santo Expedito comprometendo-se a divulgar a sua devoção se o pedido for atendido. A devoção a Santo Expedito cresceu em Portugal nas últimas décadas, especialmente entre estudantes e profissionais que enfrentam prazos ou situações que exigem decisão e resolução rápidas.",
    notavel: [
      "Padroeiro das causas urgentes",
      "Simbolizado pisando um corvo (procrastinação)",
      "Mártir do século IV",
      "Invocado para decisões rápidas",
      "Devoção crescente em Portugal"
    ],
    destaque: false
  },

  {
    id: "sao-jose",
    nome: "São José",
    festa: "19 de março",
    mes: "março",
    nascimento: "Desconhecido",
    falecimento: "~20 d.C.",
    origem: "Nazaré (Israel)",
    padroeiro: ["Trabalhadores", "Pais de família", "Igreja Universal"],
    categorias: ["Trabalho", "Família", "Proteção financeira"],
    resumo: "Esposo de Maria e pai adotivo de Jesus Cristo, carpinteiro justo e silencioso. É padroeiro dos trabalhadores e protetor das famílias, especialmente invocado para questões de trabalho e sustento familiar.",
    historia: "José era um humilde carpinteiro de Nazaré, descendente da casa real de David. Estava prometido em casamento a Maria quando descobriu que ela estava grávida. Sendo justo, pensou despedi-la secretamente para não a difamar, mas um anjo apareceu-lhe em sonho dizendo: 'José, filho de David, não temas receber Maria por esposa, porque o que nela foi gerado vem do Espírito Santo.' José obedeceu e desposou Maria. Quando César Augusto ordenou o recenseamento, José levou Maria grávida a Belém, onde Jesus nasceu numa gruta porque não havia lugar na hospedaria. Oito dias depois, levou o Menino ao templo para a circuncisão. Quando Herodes ordenou o massacre dos inocentes, um anjo avisou José em sonho: 'Levanta-te, toma o Menino e sua Mãe e foge para o Egito.' José obedeceu imediatamente, protegendo a Sagrada Família durante anos de exílio. Após a morte de Herodes, regressou a Nazaré, onde criou Jesus como filho, ensinando-lhe o ofício de carpinteiro. José é o modelo do pai protetor e do trabalhador honesto. Morreu nos braços de Jesus e Maria, tendo tido a morte mais feliz que um ser humano pode ter. Nunca lhe são atribuídas palavras nos Evangelhos — a sua santidade está no silêncio obediente e no trabalho fiel. São José é invocado para proteção da família, sucesso no trabalho, questões financeiras, na procura de casa e emprego. O Papa Pio IX proclamou-o Padroeiro da Igreja Universal em 1870. O dia 19 de março é celebrado com grande devoção em Portugal, e muitas famílias têm o costume de benzer os pães de São José.",
    notavel: [
      "Pai adotivo de Jesus Cristo",
      "Padroeiro da Igreja Universal",
      "Protetor dos trabalhadores e famílias",
      "Modelo de paternidade e fidelidade",
      "Morte feliz nos braços de Jesus e Maria"
    ],
    destaque: true
  },

  {
    id: "nossa-senhora-conceicao",
    nome: "Nossa Senhora da Conceição",
    festa: "8 de dezembro",
    mes: "dezembro",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal",
    padroeiro: ["Portugal", "Maternidade"],
    categorias: ["Proteção nacional", "Saúde", "Maternidade"],
    resumo: "Padroeira de Portugal desde 1646, proclamada por D. João IV após a Restauração da Independência. Celebra o dogma da Imaculada Conceição, que afirma que Maria foi concebida sem pecado original.",
    historia: "A devoção a Nossa Senhora da Conceição em Portugal tem raízes profundas que remontam à Idade Média. A crença na Imaculada Conceição de Maria — isto é, que ela foi preservada do pecado original desde o primeiro momento da sua conceição — foi ardorosamente defendida pelos franciscanos e pelos reis portugueses muito antes de ser proclamada dogma. Em 1646, numa das cerimónias mais solenes da história de Portugal, D. João IV reuniu as Cortes na capela de Nossa Senhora da Vila Viçosa e, em nome da nação, colocou a coroa real aos pés da imagem de Nossa Senhora da Conceição, proclamando-a Rainha e Padroeira de Portugal. Este ato simbolizava que Portugal não tinha outro rei senão Cristo, e outra rainha senão Maria. Desde então, nenhum rei de Portugal voltou a usar coroa nas cerimónias oficiais. O dogma da Imaculada Conceição foi oficialmente proclamado pelo Papa Pio IX a 8 de dezembro de 1854, na bula Ineffabilis Deus, confirmando uma crença que os portugueses já veneravam há séculos. Quatro anos depois, em 1858, a Virgem Maria apareceu em Lourdes a Bernadette Soubirous e identificou-se dizendo: 'Eu sou a Imaculada Conceição', confirmando sobrenaturalmente o dogma. Em Portugal, a devoção a Nossa Senhora da Conceição é particularmente forte em momentos de crise nacional. Durante a pandemia de Covid-19, muitos portugueses voltaram-se para a Padroeira de Portugal pedindo proteção. A festa de 8 de dezembro é feriado em Portugal e celebrada com grande solenidade. Nossa Senhora da Conceição é invocada para proteção da nação, da família, das mães grávidas e das crianças.",
    notavel: [
      "Padroeira de Portugal desde 1646",
      "D. João IV depôs a coroa aos seus pés",
      "Dogma proclamado em 1854",
      "Aparição de Lourdes confirmou o dogma",
      "Feriado nacional a 8 de dezembro"
    ],
    destaque: true
  },

  {
    id: "sao-martinho-tours",
    nome: "São Martinho de Tours",
    festa: "11 de novembro",
    mes: "novembro",
    nascimento: "316",
    falecimento: "397",
    origem: "Hungria",
    padroeiro: ["Soldados", "Alfaiates", "França"],
    categorias: ["Generosidade", "Fartura", "Proteção contra o frio"],
    resumo: "Soldado romano que partilhou a sua capa com um mendigo, tornando-se símbolo de caridade. Em Portugal, o dia de São Martinho é celebrado com castanhas, vinho novo e o 'Verão de São Martinho'.",
    historia: "Martinho nasceu em 316 na Panónia (atual Hungria), filho de um tribuno militar romano. Apesar de os pais serem pagãos, sentiu-se atraído pelo cristianismo desde criança. Aos 15 anos foi obrigado a alistar-se no exército romano. Certo dia de inverno rigoroso, quando estava de guarda às portas da cidade de Amiens, encontrou um mendigo meio nu a tremer de frio. Compadecido, Martinho tirou a sua capa militar, cortou-a ao meio com a espada e deu metade ao pobre. Naquela noite, Cristo apareceu-lhe em sonho vestido com aquela metade da capa, dizendo aos anjos: 'Martinho, ainda catecúmeno, cobriu-me com esta capa.' Martinho pediu o batismo e, aos 18 anos, deixou o exército para se dedicar inteiramente a Deus. Tornou-se discípulo de Santo Hilário de Poitiers e mais tarde foi aclamado bispo de Tours contra a sua vontade (escondeu-se num curral de gansos, mas os gansos denunciaram-no com o seu grasnido). Como bispo, continuou a viver com grande simplicidade, evangelizando as zonas rurais da Gália e combatendo o paganismo. Fundou o primeiro mosteiro da Gália. Morreu a 8 de novembro de 397, e o seu funeral realizou-se a 11 de novembro, data que se tornou a sua festa. Em Portugal, o dia de São Martinho marca o fim da vindima e é celebrado com castanhas assadas, vinho novo (jeropiga) e comemoração das colheitas. O 'Verão de São Martinho' — um período de dias quentes após o início do outono — é atribuído ao milagre da capa: diz-se que Deus envia sol e calor nestes dias em memória da caridade de São Martinho.",
    notavel: [
      "Santo da caridade — partilhou a capa",
      "Bispo de Tours no século IV",
      "Verão de São Martinho em Portugal",
      "Celebrado com castanhas e vinho novo",
      "Fundador do monaquismo na Gália"
    ],
    destaque: false
  },

  {
    id: "santa-barbara",
    nome: "Santa Bárbara",
    festa: "4 de dezembro",
    mes: "dezembro",
    nascimento: "~280",
    falecimento: "~306",
    origem: "Nicomédia (atual Turquia)",
    padroeiro: ["Mineiros", "Militares", "Bombeiros"],
    categorias: ["Proteção contra tempestades", "Proteção contra raios", "Perigos súbitos"],
    resumo: "Mártir cristã do século IV, filha de um pai pagão cruel que a trancou numa torre. É invocada contra raios, tempestades e morte súbita. Padroeira dos mineiros, artilheiros e bombeiros.",
    historia: "Bárbara nasceu em Nicomédia (atual Izmit, Turquia) por volta de 280, filha de Dióscoro, um rico e influente pagão. Era uma jovem de excepcional beleza, e o pai, temendo que fosse pedida em casamento, mandou construir uma torre onde a encerrou para mantê-la isolada do mundo. Na solidão da torre, Bárbara começou a refletir sobre a criação do universo e, através de um professor cristão, converteu-se ao cristianismo e foi batizada em segredo. Quando o pai mandou construir uma casa de banhos na torre, pediu que fizessem duas janelas. Bárbara, na ausência do pai, mandou abrir uma terceira janela em honra da Santíssima Trindade e gravou uma cruz numa das paredes. Quando Dióscoro regressou e descobriu, enfureceu-se. Bárbara confessou ser cristã. O pai quis matá-la, mas ela fugiu milagrosamente da torre. Foi capturada, levada ao governador Marciano e submetida a terríveis torturas: foi açoitada, queimada com tochas e mutilada. Nada a fez renegar a fé. Finalmente, o próprio pai decapitou-a com a sua espada. Imediatamente após o crime, Dióscoro foi fulminado por um raio. Por causa desta morte, Santa Bárbara tornou-se padroeira contra raios, tempestades e morte súbita. É especialmente venerada por profissões de risco: mineiros (que trabalham sob terra), artilheiros (que lidam com explosivos), bombeiros e militares. Em Portugal, a sua festa é celebrada em várias localidades mineiras e militares.",
    notavel: [
      "Mártir do século IV",
      "Padroeira contra raios e tempestades",
      "Protetora de mineiros e militares",
      "Pai fulminado por raio após matá-la",
      "Uma das Catorze Santos Auxiliadores"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-carmo",
    nome: "Nossa Senhora do Carmo",
    festa: "16 de julho",
    mes: "julho",
    nascimento: "—",
    falecimento: "—",
    origem: "Monte Carmelo (Israel)",
    padroeiro: ["Ordem Carmelita", "Almas do Purgatório"],
    categorias: ["Proteção espiritual", "Libertação das almas no Purgatório"],
    resumo: "Título mariano ligado ao Escapulário do Carmo, uma das devoções mais difundidas no catolicismo. Nossa Senhora prometeu proteção especial e libertação do Purgatório a quem o usar com devoção.",
    historia: "A devoção a Nossa Senhora do Carmo tem origem no Monte Carmelo, na Terra Santa, onde o profeta Elias viu uma pequena nuvem subir do mar, prenúncio da chuva que pôs fim a três anos de seca. Os primeiros eremitas cristãos no Monte Carmelo viram nesta nuvem um símbolo da Virgem Maria, pura e fecunda, que traria Cristo ao mundo. No século XIII, São Simão Stock, prior geral dos carmelitas, rezava intensamente pedindo a proteção de Maria sobre a sua ordem, que enfrentava dificuldades e perseguições. A 16 de julho de 1251, Nossa Senhora apareceu-lhe envolta em luz, acompanhada de anjos, e entregou-lhe o Escapulário do Carmo — duas peças de pano marrom ligadas por cordões, que se usam sobre os ombros. A Virgem fez uma promessa extraordinária conhecida como 'Privilégio Sabatino': 'Este será o privilégio para ti e para todos os carmelitas: quem morrer revestido deste escapulário não sofrerá o fogo eterno. Será um sinal de salvação, proteção nos perigos e penhor de paz.' Mais tarde, numa aparição ao Papa João XXII, Nossa Senhora prometeu que libertaria do Purgatório no primeiro sábado após a morte todos os que usassem o escapulário com devoção, guardassem a castidade segundo o seu estado de vida e rezassem o Ofício Divino (ou, para os leigos, o terço). O Escapulário do Carmo tornou-se uma das devoções marianas mais difundidas no mundo católico. Em Portugal, muitas confrarias do Carmo foram fundadas, e a devoção está ligada à Ordem Carmelita, que teve grande influência espiritual no país, especialmente através de Santa Teresa de Ávila e São João da Cruz.",
    notavel: [
      "Devoção ligada ao Escapulário do Carmo",
      "Promessa de proteção e salvação",
      "Privilégio Sabatino (libertação do Purgatório)",
      "Aparição a São Simão Stock em 1251",
      "Uma das devoções marianas mais difundidas"
    ],
    destaque: false
  }

];

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = saintsData;
}
