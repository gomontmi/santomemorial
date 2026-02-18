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
,

  {
    id: "sao-vicente",
    nome: "São Vicente",
    festa: "22 de janeiro",
    mes: "janeiro",
    nascimento: "Desconhecido",
    falecimento: "304",
    origem: "Espanha (Saragoça)",
    padroeiro: ["Lisboa", "Diocese do Algarve", "Marinheiros"],
    categorias: ["Defesa da fé", "Coragem", "Proteção dos marinheiros"],
    resumo: "Diácono e mártir do século IV, padroeiro principal de Lisboa. As suas relíquias foram trazidas para Portugal e a lenda conta que dois corvos velaram o seu corpo, dando origem ao símbolo da cidade.",
    historia: "Vicente nasceu provavelmente em Saragoça, Espanha, no século III. Foi ordenado diácono pelo bispo Valério e tornou-se um eloquente pregador do Evangelho. Durante a feroz perseguição do imperador Diocleciano aos cristãos, Vicente foi preso juntamente com o bispo Valério. O governador Públio Daciano tentou forçá-los a oferecer sacrifícios aos deuses romanos. Valério, impedido de falar por um defeito de fala, pediu a Vicente que respondesse por ambos. Vicente recusou firmemente renegar a fé cristã. Furioso, Daciano libertou o bispo mas ordenou que Vicente fosse submetido às mais terríveis torturas: foi esticado no potro, queimado com grelhas de ferro incandescentes, e teve o corpo dilacerado com ganchos metálicos. Durante todo o suplício, Vicente manteve-se sereno, rezando e até consolando os seus algozes. Depois das torturas, foi lançado numa masmorra imunda onde, segundo a tradição, anjos lhe apareceram trazendo luz e conforto. Morreu a 22 de janeiro de 304. O seu corpo foi lançado aos abutres, mas um corvo o protegeu. Daciano ordenou então que fosse atirado ao mar amarrado a uma pedra de moinho, mas as ondas trouxeram-no de volta à praia onde uma viúva piedosa o sepultou. Séculos mais tarde, no século VIII, cristãos levaram as relíquias para o Cabo de São Vicente, no Algarve, para as proteger dos invasores mouros. Em 1173, D. Afonso Henriques, cumprindo uma promessa feita após a conquista de Lisboa aos mouros, mandou trasladar as relíquias para Lisboa. A lenda conta que a nau foi escoltada por dois corvos desde o Algarve até Lisboa — imagem que ficou eternizada no brasão da cidade. São Vicente é representado com uma barca e dois corvos, símbolos que aparecem na bandeira de Lisboa e em muitas povoações portuguesas. O Mosteiro de São Vicente de Fora, construído no século XVI, guarda as suas relíquias na Sé de Lisboa.",
    notavel: [
      "Padroeiro principal do Patriarcado de Lisboa",
      "Mártir do século IV sob Diocleciano",
      "Símbolo de Lisboa: barca com dois corvos",
      "Relíquias trazidas para Lisboa em 1173",
      "Um dos santos mais venerados da Península Ibérica"
    ],
    destaque: false
  },

  {
    id: "santa-luzia",
    nome: "Santa Luzia",
    festa: "13 de dezembro",
    mes: "dezembro",
    nascimento: "~283",
    falecimento: "~304",
    origem: "Sicília (Itália)",
    padroeiro: ["Olhos", "Cegos", "Visão"],
    categorias: ["Saúde dos olhos", "Visão espiritual", "Clareza mental"],
    resumo: "Mártir siciliana do século IV, padroeira da visão e dos olhos. A tradição diz que arrancou os próprios olhos para os oferecer a um pretendente pagão, mas Deus milagrosamente lhos restituiu.",
    historia: "Luzia nasceu em Siracusa, Sicília, por volta de 283, numa família cristã nobre. Desde jovem consagrou-se a Deus, fazendo voto de virgindade. A mãe, Eutíquia, sofria de hemorragias há quatro anos e nenhum médico conseguia curá-la. Luzia convenceu a mãe a fazer uma peregrinação ao túmulo de Santa Ágata em Catânia. Durante a oração, Santa Ágata apareceu a Luzia e disse-lhe que a mãe seria curada pela sua própria fé e que ela, Luzia, seria a glória de Siracusa tal como Ágata era de Catânia. A mãe foi milagrosamente curada. De regresso a Siracusa, Luzia pediu à mãe permissão para distribuir o seu dote aos pobres e dedicar-se inteiramente a Cristo. A mãe consentiu. No entanto, Luzia estava prometida em casamento a um jovem pagão que, ao saber da distribuição da fortuna, denunciou-a ao governador como cristã. Era o tempo da perseguição de Diocleciano. O governador ordenou que Luzia fosse levada a um prostíbulo para ser desonrada, mas quando os guardas tentaram movê-la, o corpo tornou-se milagrosamente pesado e nem uma junta de bois conseguiu arrastá-la. Tentaram queimá-la viva, mas as chamas não a tocaram. Finalmente, foi traspassada por uma espada na garganta. Segundo uma lenda medieval, o pretendente rejeitado admirava a beleza dos olhos de Luzia. Ela arrancou os próprios olhos e enviou-lhos numa bandeja, dizendo: 'Agora deixa-me servir a Deus em paz.' Deus devolveu-lhe olhos ainda mais belos. Por isso é representada com olhos numa bandeja ou taça. Morreu mártir a 13 de dezembro de 304. O seu nome, Luzia, vem do latim 'lux' (luz), e tornou-se padroeira da visão, invocada por quem tem problemas nos olhos ou busca clareza espiritual. A sua festa, a 13 de dezembro, era no calendário juliano o dia mais curto do ano, marcando o regresso da luz.",
    notavel: [
      "Padroeira dos olhos e da visão",
      "Mártir da perseguição de Diocleciano",
      "Representada com olhos numa taça",
      "Nome significa 'luz' em latim",
      "Uma das sete santas mencionadas no Cânone Romano"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-saude",
    nome: "Nossa Senhora da Saúde",
    festa: "5 de agosto",
    mes: "agosto",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal",
    padroeiro: ["Doentes", "Saúde física e mental"],
    categorias: ["Cura de doenças", "Saúde física", "Saúde mental"],
    resumo: "Invocação mariana muito venerada em Portugal, especialmente em Lisboa e em vários santuários dedicados à protecção da saúde e cura de enfermidades.",
    historia: "A devoção a Nossa Senhora da Saúde tem raízes antigas na cristandade, ligada à invocação da Virgem Maria como medianeira de curas e protectora dos enfermos. Em Portugal, esta devoção ganhou especial destaque durante as epidemias de peste que assolaram o país nos séculos XVI e XVII. As comunidades voltavam-se para Maria pedindo protecção divina contra as doenças devastadoras. Em Lisboa, a Igreja de Nossa Senhora da Saúde, situada no Rego, foi construída em acção de graças pela intercessão da Virgem durante uma epidemia. A igreja original remonta ao século XVI e tornou-se um importante centro de peregrinação para doentes e suas famílias. A imagem de Nossa Senhora da Saúde representa Maria segurando o Menino Jesus, ambos com expressões de ternura e misericórdia. Muitos ex-votos — objectos deixados por fiéis em agradecimento por curas recebidas — adornam os santuários dedicados a esta invocação. Durante a peste bubónica do século XVII, procissões em honra de Nossa Senhora da Saúde percorriam as ruas de Lisboa, e os cronistas da época registaram numerosos testemunhos de curas milagrosas atribuídas à sua intercessão. A devoção espalhou-se por todo o país: em várias localidades ergueram-se ermidas e capelas sob esta invocação. Nos Açores, em Viana do Castelo, no Alentejo e no Algarve existem santuários dedicados a Nossa Senhora da Saúde, todos eles centros de fervorosa devoção popular. A invocação é especialmente forte em tempos de crise sanitária. Durante a pandemia de Covid-19, muitos portugueses voltaram-se novamente para Nossa Senhora da Saúde, pedindo protecção e cura. A festa litúrgica varia conforme a localidade, mas a 5 de agosto é a data mais comummente celebrada. Nossa Senhora da Saúde é invocada não apenas para a cura de doenças físicas, mas também para a saúde mental, o equilíbrio emocional e a paz interior.",
    notavel: [
      "Invocada durante epidemias em Portugal",
      "Santuário principal em Lisboa (Igreja do Rego)",
      "Protetora da saúde física e mental",
      "Numerosos ex-votos de agradecimento por curas",
      "Devoção renovada durante a pandemia de Covid-19"
    ],
    destaque: false
  },

  {
    id: "sao-roque",
    nome: "São Roque",
    festa: "16 de agosto",
    mes: "agosto",
    nascimento: "~1295",
    falecimento: "~1327",
    origem: "França",
    padroeiro: ["Pestilências", "Doenças contagiosas", "Cães"],
    categorias: ["Proteção contra pestes", "Doenças contagiosas", "Saúde pública"],
    resumo: "Peregrino francês que dedicou a vida a cuidar de vítimas da peste. É invocado contra epidemias e doenças contagiosas. A Igreja de São Roque em Lisboa é um dos mais importantes templos da capital.",
    historia: "Roque nasceu em Montpellier, França, por volta de 1295, filho de pais nobres e piedosos que rezaram durante anos por um filho. Quando nasceu, trazia uma cruz vermelha marcada no peito, sinal considerado milagroso. Ficou órfão aos vinte anos e, seguindo o conselho evangélico de vender tudo e seguir Cristo, distribuiu a fortuna aos pobres e partiu em peregrinação a Roma. Durante a viagem, a peste negra assolava a Itália. Em vez de fugir, Roque dedicou-se a cuidar dos pestosos nos hospitais de Acquapendente, Cesena, Mântua, Modena e Parma. Fazia o sinal da cruz sobre os doentes e muitos eram curados milagrosamente. Em Piacenza, Roque contraiu a peste. Para não incomodar ninguém, retirou-se para uma floresta onde esperava morrer sozinho. Um cão pertencente a um nobre chamado Gotardo encontrou-o e começou a levar-lhe pão todos os dias. Gotardo seguiu o cão e descobriu Roque, levando-o para sua casa onde o tratou até à cura. Roque regressou a Montpellier mas, desfigurado pela doença, não foi reconhecido. Acusado de espionagem, foi preso por ordem do próprio tio, governador da cidade. Roque não revelou a identidade e passou cinco anos na prisão, alimentando-se apenas de pão e água, rezando continuamente. Morreu na prisão por volta de 1327. Quando preparavam o corpo para sepultura, descobriram a cruz vermelha no peito e perceberam quem era. A cidade inteira lamentou. Pouco depois da morte começaram a atribuir-lhe milagres, especialmente curas de peste. O culto espalhou-se rapidamente por toda a Europa. Em Portugal, a devoção a São Roque chegou no século XVI, trazida pelos jesuítas. A magnífica Igreja de São Roque em Lisboa, construída em 1567, tornou-se um dos mais importantes templos da capital, famosa pela riqueza das suas capelas, especialmente a Capela de São João Baptista. São Roque é representado com traje de peregrino, mostrando uma chaga de peste na coxa, acompanhado de um cão com pão na boca.",
    notavel: [
      "Padroeiro contra a peste e epidemias",
      "Igreja de São Roque em Lisboa é obra-prima artística",
      "Nasceu com cruz milagrosa no peito",
      "Cuidou de pestosos durante a peste negra",
      "Representado com cão que o alimentou na floresta"
    ],
    destaque: false
  },

  {
    id: "santa-ana",
    nome: "Santa Ana",
    festa: "26 de julho",
    mes: "julho",
    nascimento: "Desconhecido",
    falecimento: "Desconhecido",
    origem: "Judeia (tradição)",
    padroeiro: ["Mães", "Avós", "Mulheres grávidas"],
    categorias: ["Fertilidade", "Proteção das mães", "Maternidade"],
    resumo: "Mãe da Virgem Maria e avó de Jesus Cristo. É especialmente invocada por mulheres que desejam engravidar e por mães e avós. A sua história de fé e paciência inspira os fiéis há séculos.",
    historia: "Segundo a tradição cristã transmitida pelo Protoevangelho de Tiago (século II), Ana era uma mulher piedosa casada com Joaquim, ambos descendentes da tribo de Judá e da linhagem de David. O casal vivia em Nazaré e era profundamente devoto, mas sofria a grande dor de não ter filhos. Na cultura judaica da época, a infertilidade era vista como maldição divina. Joaquim ofereceu um grande sacrifício no Templo de Jerusalém, mas o sacerdote rejeitou a oferenda dizendo que um homem sem descendência não devia oferecer sacrifícios. Humilhado, Joaquim retirou-se para o deserto onde jejuou e rezou durante quarenta dias. Ana, sozinha em casa, também rezava e chorava pela sua esterilidade. Segundo a tradição, um anjo apareceu a ambos separadamente, anunciando que Ana conceberia uma filha que seria bendita entre todas as mulheres. Ana fez o voto de consagrar a criança ao serviço de Deus. Joaquim regressou do deserto e os esposos encontraram-se junto à Porta Dourada de Jerusalém, onde se abraçaram — cena representada em inúmeras obras de arte como símbolo da conceição de Maria. Ana concebeu e deu à luz uma menina a quem deu o nome de Miriam (Maria). Quando Maria tinha três anos, Ana e Joaquim levaram-na ao Templo de Jerusalém e consagraram-na ao serviço de Deus, cumprindo o voto. Ana acompanhou a formação de Maria no Templo e, segundo a tradição, morreu antes do nascimento de Jesus. O nome Ana significa 'graça' ou 'cheia de graça' em hebraico. O culto a Santa Ana desenvolveu-se fortemente na Idade Média e no Renascimento. É invocada especialmente por mulheres que desejam engravidar ou que enfrentam dificuldades na maternidade. Numerosas igrejas e capelas em Portugal são dedicadas a Santa Ana, sendo particularmente venerada nas aldeias e vilas do interior. A iconografia representa-a frequentemente ensinando Maria a ler as Escrituras, simbolizando a transmissão da fé de geração em geração.",
    notavel: [
      "Mãe da Virgem Maria e avó de Jesus",
      "Padroeira das mulheres grávidas e mães",
      "Concebeu Maria após anos de esterilidade",
      "Invocada para fertilidade e maternidade",
      "Encontro com Joaquim na Porta Dourada tornou-se ícone artístico"
    ],
    destaque: false
  },

  {
    id: "doutor-sousa-martins",
    nome: "Doutor Sousa Martins",
    festa: "18 de agosto",
    mes: "agosto",
    nascimento: "1843",
    falecimento: "1897",
    origem: "Portugal",
    padroeiro: ["Doentes", "Medicina"],
    categorias: ["Cura de doenças graves", "Conforto espiritual", "Saúde"],
    resumo: "Médico e professor português conhecido pela dedicação altruísta aos pobres. Embora não canonizado, é venerado como 'santo popular' e a sua estátua em Lisboa tornou-se local de peregrinação.",
    historia: "José Tomás de Sousa Martins nasceu a 7 de março de 1843, em Alhandra. Filho de família humilde, conseguiu estudar medicina na Escola Médico-Cirúrgica de Lisboa através de bolsas e do seu próprio esforço. Formou-se em 1866 com distinção e dedicou-se ao estudo da tuberculose, doença que devastava Portugal no século XIX. Tornou-se professor e médico do Hospital de São José, onde atendia centenas de doentes pobres sem cobrar qualquer pagamento. Vivia modestamente e distribuía do seu próprio bolso medicamentos aos que não tinham como pagar. A sua especialidade era a tisiologia (estudo da tuberculose), e era conhecido por passar horas a examinar cada doente com atenção e carinho que poucos médicos dispensavam aos pobres. Durante os surtos de cólera e de febre-amarela, Sousa Martins trabalhou incansavelmente nos bairros mais afetados, arriscando a própria vida. Contraiu tuberculose — a doença que estudava — e, ironicamente, não havia cura. Continuou a trabalhar enquanto as forças lhe permitiram. Morreu a 18 de agosto de 1897, aos 54 anos. Milhares de pessoas, especialmente os pobres que tinha tratado gratuitamente, acompanharam o funeral. Pouco depois da morte, pessoas começaram a visitar o túmulo no cemitério, deixando flores, velas e pedidos escritos. Em 1904, por subscrição popular, foi erguida uma estátua em sua honra no Campo dos Mártires da Pátria (atual Campo de Santana), junto ao hospital onde trabalhou. A estátua tornou-se local de peregrinação: doentes depositam flores, velas, mensagens de agradecimento e pedidos de cura. Apesar de não ser santo canonizado pela Igreja Católica, Sousa Martins é venerado como 'santo popular'. A devoção é particularmente forte entre pessoas que enfrentam doenças graves. Muitos afirmam ter recebido curas ou conforto após rezarem junto à estátua. A sua festa, dia 18 de agosto, reúne centenas de devotos que acendem velas e deixam flores em agradecimento ou súplica.",
    notavel: [
      "Médico altruísta que tratava pobres gratuitamente",
      "Especialista em tuberculose no século XIX",
      "Venerado como 'santo popular' em Lisboa",
      "Estátua no Campo de Santana é local de peregrinação",
      "Milhares deixam ex-votos pedindo curas"
    ],
    destaque: false
  },

  {
    id: "beata-alexandrina-balasar",
    nome: "Beata Alexandrina de Balasar",
    festa: "13 de outubro",
    mes: "outubro",
    nascimento: "1904",
    falecimento: "1955",
    origem: "Portugal (Balasar, Póvoa de Varzim)",
    padroeiro: ["Sofredores", "Paralíticos"],
    categorias: ["Sofrimento redentor", "Intercessão em momentos de dor", "Paciência"],
    resumo: "Mística portuguesa que ficou paralítica após saltar de uma janela para escapar a um assalto. Viveu 13 anos sem comer nem beber, oferecendo o sofrimento pela conversão dos pecadores.",
    historia: "Alexandrina Maria da Costa nasceu a 30 de março de 1904, em Balasar, Póvoa de Varzim, filha de família pobre. Aos sete anos ficou órfã de pai e começou a trabalhar como costureira e nas tarefas agrícolas para ajudar a mãe. Era uma jovem alegre, piedosa e devota de Nossa Senhora. Com 14 anos, em 1918, para fugir de um ataque de três homens que invadiram a casa, Alexandrina saltou de uma janela de quatro metros de altura. As lesões internas causadas pela queda começaram a paralisá-la progressivamente. Aos 19 anos estava completamente paralítica, acamada e sofrendo dores constantes. Os médicos diagnosticaram lesões graves na coluna e declararam o caso incurável. Em vez de se revoltar, Alexandrina ofereceu o sofrimento a Deus pela conversão dos pecadores e pelas almas do Purgatório. A partir de 1934, começou a reviver misticamente a Paixão de Cristo todas as sextas-feiras, durante três horas e meia. Testemunhas — incluindo médicos, sacerdotes e o bispo — observaram movimentos involuntários do corpo inerte, simulando a subida ao Calvário, a crucifixão e a agonia de Cristo. Em 1938, deixou completamente de se alimentar. Durante 13 anos — de março de 1942 até à morte em 1955 — não ingeriu qualquer alimento sólido ou líquido, vivendo apenas da Eucaristia diária. Foi submetida a rigorosos exames médicos no Hospital de Foce, no Porto, onde ficou internada 40 dias sob vigilância constante: não comeu, não bebeu, e não perdeu peso. Os médicos declararam o caso cientificamente inexplicável. Alexandrina recebia milhares de cartas de todo o mundo pedindo orações. Oferecia o sofrimento especialmente pela santificação dos sacerdotes e pela paz no mundo (era o tempo da Segunda Guerra Mundial). Morreu a 13 de outubro de 1955. Foi beatificada pelo Papa João Paulo II a 25 de abril de 2004. O seu corpo repousa no Santuário de Balasar, local de peregrinação.",
    notavel: [
      "Viveu 13 anos sem comer nem beber",
      "Reviveu a Paixão de Cristo todas as sextas-feiras",
      "Beatificada por João Paulo II em 2004",
      "Caso médico cientificamente inexplicável",
      "Ofereceu sofrimento pela conversão dos pecadores"
    ],
    destaque: false
  }

// ============================================================
// CONTINUA NA PRÓXIMA SECÇÃO...
// ============================================================
// ============================================================
// MAIS SANTOS PARA ADICIONAR (CONTINUAÇÃO)
// ============================================================

,

  {
    id: "santa-senhorinha-basto",
    nome: "Santa Senhorinha de Basto",
    festa: "19 de junho",
    mes: "junho",
    nascimento: "Século X",
    falecimento: "Século X",
    origem: "Portugal (Celorico de Basto)",
    padroeiro: ["Fertilidade", "Mulheres"],
    categorias: ["Fertilidade", "Proteção espiritual", "Maternidade"],
    resumo: "Abadessa medieval portuguesa venerada por milagres de fertilidade. O seu santuário em Celorico de Basto é local de romaria para mulheres que desejam engravidar.",
    historia: "Santa Senhorinha viveu no século X, período de reconquista cristã em Portugal. Segundo a tradição, era filha de nobres cristãos que a consagraram a Deus desde a infância. Tornou-se abadessa de um mosteiro em Basto, na região do Minho, onde viveu com grande austeridade e santidade. Era conhecida pela sua caridade para com os pobres e pela dedicação à oração. Após a sua morte, o corpo foi sepultado numa pequena ermida. Com o tempo, começaram a atribuir-se milagres à sua intercessão, especialmente relacionados com a fertilidade feminina. Mulheres que desejavam engravidar faziam promessas a Santa Senhorinha e muitas testemunhavam ter concebido após visitarem o túmulo. A devoção popular cresceu e, durante a Idade Média, a pequena ermida tornou-se importante local de peregrinação. No século XVI foi construída uma igreja maior para acolher os peregrinos. A igreja de Santa Senhorinha em Celorico de Basto conserva o túmulo da santa e numerosos ex-votos deixados por devotos ao longo dos séculos. A romaria anual, a 19 de junho, atrai milhares de fiéis, especialmente mulheres que pedem a graça da maternidade. A tradição inclui rituais específicos: as mulheres caminham três vezes à volta do túmulo rezando, tocam a pedra do sepulcro e levam consigo terra benta do santuário. Muitas voltam no ano seguinte com os bebés para agradecer. Embora não canonizada oficialmente pela Igreja Católica, Santa Senhorinha é venerada como santa pelo povo há mais de mil anos. É uma das santas populares portuguesas mais antigas e a devoção mantém-se viva até hoje. Historiadores debatem a historicidade da figura, mas a fé do povo na sua intercessão permanece inabalável.",
    notavel: [
      "Abadessa medieval portuguesa",
      "Padroeira da fertilidade feminina",
      "Santuário em Celorico de Basto",
      "Romaria anual a 19 de junho",
      "Venerada há mais de mil anos"
    ],
    destaque: false
  },

  {
    id: "beato-goncalo-amarante",
    nome: "Beato Gonçalo de Amarante",
    festa: "10 de janeiro",
    mes: "janeiro",
    nascimento: "~1187",
    falecimento: "1259",
    origem: "Portugal (Amarante)",
    padroeiro: ["Amarante", "Casamentos"],
    categorias: ["Proteção das famílias", "Saúde", "Casamentos"],
    resumo: "Eremita português que construiu pontes e capelas. É invocado para casamentos felizes e a tradição diz que jovens que passam pela ponte em Amarante no seu dia encontrarão amor.",
    historia: "Gonçalo nasceu por volta de 1187, provavelmente em Parada de Gatim, perto de Guimarães, filho de família nobre. Na juventude, foi ordenado sacerdote e recebeu a paróquia de São Paio de Vizela. Após alguns anos de ministério pastoral, sentiu o chamamento para uma vida mais contemplativa. Renunciou à paróquia, distribuiu os bens aos pobres e retirou-se para uma vida eremítica nas margens do rio Tâmega, no local onde hoje se encontra a cidade de Amarante. Durante quarenta anos viveu numa pequena ermida que ele próprio construiu, dedicada a São Gonçalo. Dedicava-se à oração, penitência e a obras de caridade. Construiu uma ponte sobre o rio Tâmega para facilitar a passagem dos peregrinos que seguiam para Santiago de Compostela — a ponte ainda existe, reconstruída no século XVIII, e é um dos símbolos de Amarante. Gonçalo acolhia peregrinos, doentes e necessitados, prestando-lhes assistência espiritual e material. Realizou numerosos milagres em vida, especialmente curas de doentes. A sua fama de santidade espalhou-se por todo o norte de Portugal. Morreu a 10 de janeiro de 1259, rodeado de fama de santo. O povo começou imediatamente a venerá-lo e a atribuir-lhe milagres. A pequena ermida transformou-se numa igreja e depois num mosteiro. Gonçalo nunca foi formalmente canonizado, mas foi beatificado e o seu culto foi aprovado pela Igreja. É padroeiro da cidade de Amarante e considerado protector dos casamentos e da fertilidade. Uma tradição popular diz que jovens solteiros que tocarem na estátua do santo ou passarem pela ponte no dia da sua festa encontrarão o amor verdadeiro. A festa de São Gonçalo em Amarante, celebrada no primeiro fim-de-semana de junho, é uma das romarias mais concorridas do Minho, com folclore, feiras e a tradicional bênção dos fálicos 'bolos de São Gonçalo' — símbolo de fertilidade.",
    notavel: [
      "Eremita e construtor de pontes no século XIII",
      "Padroeiro de Amarante",
      "Invocado para casamentos e fertilidade",
      "Romaria popular em junho",
      "Tradição dos bolos de São Gonçalo"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-remedios",
    nome: "Nossa Senhora dos Remédios",
    festa: "8 de setembro",
    mes: "setembro",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Lamego)",
    padroeiro: ["Lamego", "Doentes"],
    categorias: ["Cura de doenças", "Ajuda em momentos difíceis", "Proteção"],
    resumo: "Uma das mais importantes devoções marianas de Portugal. O santuário em Lamego, com a monumental escadaria barroca, é destino de peregrinação e local de curas milagrosas.",
    historia: "A devoção a Nossa Senhora dos Remédios em Lamego tem origem numa lenda do século XVIII. Conta-se que um fidalgo da região, João de Morais Sarmento, foi curado milagrosamente de uma grave doença após prometer erguer uma capela em honra da Virgem Maria no monte de Santo Estêvão, que dominava a cidade. Cumprindo a promessa, mandou construir uma pequena ermida em 1750. A devoção cresceu rapidamente e começaram a registar-se numerosas curas milagrosas atribuídas à intercessão de Nossa Senhora dos Remédios. Peregrinos vinham de todo o país deixar ex-votos e agradecer graças recebidas. No final do século XVIII e durante o século XIX, a pequena ermida foi ampliada e construiu-se a monumental escadaria barroca que é hoje um dos mais impressionantes conjuntos arquitectónicos de Portugal. A escadaria tem 686 degraus divididos em nove patamares, decorados com azulejos, fontes, estátuas e capelas que representam os mistérios da fé. A subida da escadaria, muitas vezes de joelhos, é acto de penitência e devoção. A imagem de Nossa Senhora dos Remédios representa a Virgem coroada, com o Menino Jesus ao colo. O santuário guarda centenas de ex-votos — muletas, fotografias, cartas de agradecimento — testemunhos de curas e graças alcançadas. A romaria de Nossa Senhora dos Remédios realiza-se anualmente em setembro e é uma das maiores de Portugal, atraindo dezenas de milhares de peregrinos. Inclui procissões, celebrações litúrgicas, feiras, folclore e fogo-de-artifício. Nossa Senhora dos Remédios é invocada especialmente para curas de doenças graves, problemas familiares e situações desesperadas. A escadaria de Lamego está classificada como Monumento Nacional e é considerada uma das sete maravilhas de Portugal.",
    notavel: [
      "Santuário de Lamego com escadaria monumental",
      "686 degraus decorados com arte barroca",
      "Uma das maiores romarias de Portugal",
      "Centenas de ex-votos de agradecimento",
      "Invocada para curas e situações difíceis"
    ],
    destaque: false
  },

  {
    id: "sao-teotonio",
    nome: "São Teotónio",
    festa: "18 de fevereiro",
    mes: "fevereiro",
    nascimento: "~1080",
    falecimento: "1162",
    origem: "Portugal (Ganfei, Valença)",
    padroeiro: ["Coimbra", "Ordem de Santa Cruz"],
    categorias: ["Defesa da fé", "Proteção espiritual", "Educação"],
    resumo: "Primeiro santo português, fundador da Ordem de Santa Cruz de Coimbra. Conselheiro de reis e reformador da vida religiosa em Portugal no século XII.",
    historia: "Teotónio nasceu por volta de 1080 em Ganfei, perto de Valença, filho de pais nobres. Estudou em Coimbra e foi ordenado sacerdote ainda jovem. Pela sua virtude e saber, foi nomeado prior da Igreja de São Salvador de Vilar de Frades. Em 1112, partiu em peregrinação à Terra Santa, acompanhando a cruzada. Em Jerusalém, ficou profundamente impressionado com a vida dos Cónegos Regrantes de Santo Agostinho que serviam o Santo Sepulcro. Regressou a Portugal determinado a reformar a vida religiosa. Com o apoio de D. Afonso Henriques, fundou em 1131 o Mosteiro de Santa Cruz de Coimbra, introduzindo em Portugal a Regra dos Cónegos Regrantes de Santo Agostinho. O mosteiro tornou-se o mais importante centro cultural e religioso do país, com uma escola, biblioteca e scriptorium onde se copiavam manuscritos. Teotónio foi o primeiro prior e impôs uma disciplina rigorosa: pobreza, oração, estudo e trabalho. O mosteiro acolhia peregrinos, doentes e pobres. Era também centro de formação de sacerdotes e letrados — muitos bispos e conselheiros régios foram formados em Santa Cruz. Teotónio era conselheiro espiritual de D. Afonso Henriques, primeiro rei de Portugal, e acompanhou-o em várias campanhas militares da Reconquista, incluindo a conquista de Santarém (1147). Era conhecido pelos dons de profecia e pelos milagres. Vários cronistas registaram visões que teve e predições que se cumpriram. Tinha especial devoção à Eucaristia e à Virgem Maria. Morreu a 18 de fevereiro de 1162, cercado pelos seus confrades. Foi canonizado em 1162 pelo Papa Alexandre III, tornando-se o primeiro santo português reconhecido pela Igreja. O Mosteiro de Santa Cruz conservou o seu corpo até à extinção das ordens religiosas no século XIX. Hoje, as relíquias estão na Igreja de Santa Cruz em Coimbra. É padroeiro de Coimbra e da Ordem de Santa Cruz.",
    notavel: [
      "Primeiro santo português canonizado",
      "Fundador do Mosteiro de Santa Cruz de Coimbra",
      "Conselheiro de D. Afonso Henriques",
      "Reformador da vida religiosa em Portugal",
      "Padroeiro de Coimbra"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-sameiro",
    nome: "Nossa Senhora do Sameiro",
    festa: "Primeiro domingo de junho",
    mes: "junho",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Braga)",
    padroeiro: ["Braga", "Diocese de Braga"],
    categorias: ["Proteção espiritual", "Milagres", "Conversão"],
    resumo: "Segundo maior santuário mariano de Portugal, após Fátima. Localizado no monte do Sameiro em Braga, é destino de peregrinação e lugar de inúmeros milagres.",
    historia: "O Santuário de Nossa Senhora do Sameiro tem origem numa iniciativa do padre Martinho António Pereira da Silva que, em 1863, inspirado pelas aparições de Lourdes (1858) e pela devoção à Imaculada Conceição, decidiu promover a construção de um santuário mariano no monte do Sameiro, sobranceiro à cidade de Braga. O local foi escolhido pela sua beleza natural e posição elevada, de onde se avista todo o Minho. A primeira pedra foi benzida a 14 de junho de 1863 pelo arcebispo de Braga, D. Manuel da Conceição. A construção da basílica prolongou-se por décadas, financiada por donativos de fiéis. A obra foi concluída em 1891. O santuário é dedicado ao mistério da Imaculada Conceição de Maria. A imagem principal representa Nossa Senhora sobre um globo, esmagando a serpente — símbolo do triunfo de Maria sobre o mal. Desde o início, o Sameiro tornou-se importante centro de peregrinação. Registaram-se numerosos milagres e curas atribuídos à intercessão de Nossa Senhora. Ex-votos encheram as paredes do santuário: muletas, fotografias, cartas de agradecimento. Durante a Primeira Guerra Mundial, muitas famílias portuguesas rezavam no Sameiro pelos soldados no front. Após a guerra, foi erguido um monumento votivo em acção de graças. A romaria principal realiza-se no primeiro domingo de junho e atrai dezenas de milhares de peregrinos de todo o país. Há também uma importante peregrinação nocturna, realizada em agosto, em que fiéis sobem ao santuário à noite, levando velas acesas. Nossa Senhora do Sameiro é especialmente invocada para conversões, protecção da fé, paz nas famílias e curas. Em 1997, o Papa João Paulo II visitou o Sameiro e coroou a imagem de Nossa Senhora, acto que reforçou a importância do santuário. O monte do Sameiro oferece vistas panorâmicas sobre Braga e é um lugar de profunda paz espiritual.",
    notavel: [
      "Segundo maior santuário mariano de Portugal",
      "Localizado em monte com vista panorâmica sobre Braga",
      "Visitado por Papa João Paulo II em 1997",
      "Peregrinação nocturna em agosto",
      "Numerosos ex-votos de curas milagrosas"
    ],
    destaque: false
  },

  {
    id: "santa-beatriz-silva",
    nome: "Santa Beatriz da Silva",
    festa: "1 de setembro",
    mes: "setembro",
    nascimento: "1424",
    falecimento: "1492",
    origem: "Portugal (Campo Maior)",
    padroeiro: ["Ordem das Concepcionistas"],
    categorias: ["Pureza", "Proteção", "Ajuda espiritual"],
    resumo: "Nobre portuguesa fundadora da Ordem da Imaculada Conceição (Concepcionistas). Sofreu perseguição por inveja mas manteve-se fiel a Deus, vivendo em santidade até à morte.",
    historia: "Beatriz da Silva nasceu em 1424 em Campo Maior, filha de nobres portugueses. Era irmã do Beato Amadeu da Silva, fundador dos Franciscanos Amadeus. Desde jovem destacou-se pela beleza e virtude. Foi dama de companhia da princesa Isabel de Portugal, que casou com o rei João II de Castela. Na corte castelhana, a extraordinária beleza de Beatriz despertou ciúmes na rainha Isabel. Segundo a tradição, num acesso de inveja, a rainha mandou prender Beatriz num baú durante três dias, deixando-a quase morrer asfixiada. Nossa Senhora apareceu a Beatriz e salvou-a. Após este episódio, Beatriz deixou a corte e refugiou-se no Mosteiro de Santo Domingos-o-Real, em Toledo, onde viveu como terciária dominicana durante 37 anos, em oração e penitência. Durante este período, teve várias visões da Virgem Maria, que lhe pediu para fundar uma ordem religiosa dedicada à Imaculada Conceição. Com o apoio da rainha Isabel a Católica (não a que a perseguiu, mas a esposa de Fernando de Aragão) e do Papa Inocêncio VIII, Beatriz fundou em 1484 o Mosteiro da Conceição de Nossa Senhora em Toledo, primeiro convento das Concepcionistas Franciscanas. A ordem dedicava-se à contemplação do mistério da Imaculada Conceição de Maria. Beatriz redigiu a regra da ordem, baseada na franciscana mas com características próprias, e foi a primeira abadessa. Morreu em santidade a 1 de setembro de 1492, aos 68 anos. Foi canonizada em 1976 pelo Papa Paulo VI. A Ordem das Concepcionistas espalhou-se por Espanha, Portugal e América Latina. Em Portugal existem vários mosteiros concepcionistas, sendo o mais importante o Convento da Madre de Deus em Lisboa (actual Museu Nacional do Azulejo). Santa Beatriz é invocada por quem sofre perseguições injustas e por quem procura pureza e protecção espiritual.",
    notavel: [
      "Fundadora da Ordem das Concepcionistas",
      "Sofreu perseguição por inveja mas manteve fé",
      "Canonizada em 1976 por Paulo VI",
      "Teve visões de Nossa Senhora",
      "Irmã do Beato Amadeu da Silva"
    ],
    destaque: false
  },

  {
    id: "beato-bartolomeu-martires",
    nome: "Beato Bartolomeu dos Mártires",
    festa: "18 de julho",
    mes: "julho",
    nascimento: "1514",
    falecimento: "1590",
    origem: "Portugal (Lisboa)",
    padroeiro: ["Braga", "Pastores"],
    categorias: ["Proteção espiritual", "Causas comunitárias", "Reforma da Igreja"],
    resumo: "Arcebispo de Braga e figura central do Concílio de Trento. Reformador dedicado aos pobres, renunciou ao arcebispado para viver em pobreza como simples religioso dominicano.",
    historia: "Bartolomeu Fernandes nasceu em Lisboa a 3 de maio de 1514, filho de família modesta. Aos 15 anos entrou para a Ordem dos Pregadores (Dominicanos), adoptando o nome religioso de Bartolomeu dos Mártires em honra dos primeiros mártires dominicanos. Revelou extraordinárias capacidades intelectuais e foi enviado a estudar a várias universidades europeias. Tornou-se professor de Filosofia e Teologia, reitor de colégios e prior de conventos. Em 1559, D. Catarina, regente de Portugal, nomeou-o arcebispo de Braga, uma das mais importantes dioceses do reino. Bartolomeu relutou mas aceitou por obediência. Tomou posse em 1560 e iniciou imediatamente uma profunda reforma pastoral. Convocou sínodos diocesanos, visitou pessoalmente todas as paróquias (mesmo as mais remotas), criou seminários para formação de sacerdotes e promoveu a catequese. Vivia com extrema simplicidade, num pequeno quarto sem luxos, vestindo hábito de lã tosca. Distribuía os rendimentos do arcebispado aos pobres e doentes. Em 1561, foi convocado para o Concílio de Trento, onde teve papel fundamental. As suas intervenções foram decisivas para a reforma litúrgica e pastoral da Igreja. Escreveu o «Stimulus Pastorum» (Estímulo dos Pastores), obra sobre os deveres dos bispos que influenciou gerações de prelados. Após 23 anos como arcebispo, renunciou ao cargo (1582) pedindo permissão ao Papa para se recolher ao convento de Viana do Castelo e viver como simples religioso. Passou os últimos oito anos em oração, penitência e estudo. Morreu a 16 de julho de 1590, com fama de santidade. Foi beatificado por João Paulo II a 4 de novembro de 2001. É venerado como modelo de pastor dedicado aos pobres e exemplo de humildade. O seu corpo repousa na Igreja de São Domingos em Viana do Castelo.",
    notavel: [
      "Arcebispo reformador de Braga",
      "Figura central do Concílio de Trento",
      "Renunciou ao arcebispado para viver em pobreza",
      "Autor do «Stimulus Pastorum»",
      "Beatificado em 2001"
    ],
    destaque: false
  },

  {
    id: "beata-joana-portugal",
    nome: "Beata Joana de Portugal",
    festa: "12 de maio",
    mes: "maio",
    nascimento: "1452",
    falecimento: "1490",
    origem: "Portugal (Lisboa)",
    padroeiro: ["Aveiro", "Jovens"],
    categorias: ["Pureza", "Proteção de jovens", "Vida contemplativa"],
    resumo: "Princesa portuguesa, filha de D. Afonso V, que recusou casamentos régios para se tornar freira dominicana. Viveu em santidade no Convento de Jesus em Aveiro.",
    historia: "Joana nasceu em Lisboa a 6 de fevereiro de 1452, filha do rei D. Afonso V e da rainha D. Isabel. Desde criança demonstrou profunda piedade e amor à oração. Seu pai queria casá-la com príncipes europeus para alianças políticas. Recusou sucessivamente o duque de Saboia, o rei de França Luís XI, o rei de Inglaterra Eduardo IV e o imperador do Sacro Império Romano-Germânico Frederico III. Estas recusas causaram graves problemas diplomáticos. Joana, porém, sentia vocação religiosa e desejava consagrar-se inteiramente a Deus. O pai e o irmão, D. João II, opuseram-se firmemente. Apenas em 1472, após insistentes pedidos, foi autorizada a retirar-se para o Convento de Odivelas, mas sem professar votos (para poder eventualmente casar se mudasse de ideias). A vida na corte e as pressões políticas continuaram. Finalmente, em 1475, obteve permissão para se recolher definitivamente ao recém-fundado Convento de Jesus em Aveiro, das freiras dominicanas. Viveu como religiosa, embora tecnicamente não tenha professado votos solenes (por imposição régia). No convento, vivia com extrema austeridade: dormia sobre tábuas, jejuava rigorosamente, dedicava longas horas à oração. Cuidava pessoalmente dos doentes e dos pobres que acorriam ao convento. Tinha grande devoção à Paixão de Cristo e à Virgem Maria. Durante 15 anos viveu em profunda união com Deus, realizando milagres de cura e profecia. Adoeceu gravemente em 1490 e morreu a 12 de maio desse ano, aos 38 anos. O povo acorreu ao funeral aclamando-a santa. O corpo permaneceu incorrupto durante séculos. Foi beatificada em 1693 pelo Papa Inocêncio XII. O túmulo em mármore no Convento de Jesus (actual Museu de Aveiro) é obra-prima renascentista. É padroeira de Aveiro e invocada especialmente por jovens que enfrentam pressões familiares sobre vocação ou casamento.",
    notavel: [
      "Princesa que recusou tronos por vocação religiosa",
      "Filha de D. Afonso V",
      "Viveu no Convento de Jesus em Aveiro",
      "Corpo incorrupto durante séculos",
      "Beatificada em 1693"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-nazare",
    nome: "Nossa Senhora da Nazaré",
    festa: "8 de setembro",
    mes: "setembro",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Nazaré)",
    padroeiro: ["Pescadores", "Nazaré"],
    categorias: ["Proteção de pescadores", "Milagres do mar", "Navegação"],
    resumo: "Uma das mais antigas devoções marianas de Portugal, ligada ao milagre de Dom Fuas Roupinho. O santuário na Nazaré é destino de peregrinos e protector dos pescadores.",
    historia: "A devoção a Nossa Senhora da Nazaré está ligada a uma lenda do século XII. Conta-se que uma pequena imagem de Nossa Senhora talhada em madeira por São José foi venerada em Nazaré (Terra Santa) e trazida para a Península Ibérica no século IV pelo monge Ciríaco, fugindo das invasões bárbaras. A imagem foi escondida numa gruta perto de Caumon (actual Sítio da Nazaré) durante as invasões muçulmanas, onde permaneceu oculta durante séculos. Em 1182, D. Fuas Roupinho, alcaide de Porto de Mós e vassalo de D. Afonso Henriques, caçava veados na costa quando um espesso nevoeiro desceu. O cavalo galopava cegamente perto do precipício que desce sobre a praia. Percebendo o perigo, D. Fuas invocou Nossa Senhora. Milagrosamente, o cavalo parou com as patas dianteiras já no vazio, sobre a beira do abismo. Em acção de graças, D. Fuas mandou construir uma ermida no local (a Ermida da Memória) e difundiu a devoção à Virgem. A fama dos milagres espalhou-se. No século XIV, a pequena ermida revelou-se insuficiente e foi construída a Igreja de Nossa Senhora da Nazaré no alto do Sítio. A imagem, de madeira escura e estilo bizantino, representa Nossa Senhora grávida — uma iconografia rara. Tornou-se padroeira dos pescadores e navegantes. Antes de cada saída para o mar, os pescadores da Nazaré sobem ao santuário para pedir protecção. As mulheres rezam pela segurança dos maridos e filhos. Numerosos ex-votos — barcos em miniatura, fotografias, peças de redes — testemunham as graças alcançadas. A romaria principal realiza-se a 8 de setembro, festa da Natividade de Nossa Senhora. Milhares de peregrinos acorrem, muitos descalços, em acto de devoção. Nossa Senhora da Nazaré é uma das mais amadas invocações marianas em Portugal.",
    notavel: [
      "Milagre de Dom Fuas Roupinho no século XII",
      "Padroeira dos pescadores da Nazaré",
      "Imagem de madeira com iconografia bizantina",
      "Santuário no alto do Sítio da Nazaré",
      "Numerosos ex-votos de salvamentos no mar"
    ],
    destaque: false
  },

  {
    id: "padre-cruz",
    nome: "Padre Cruz",
    festa: "4 de setembro",
    mes: "setembro",
    nascimento: "1859",
    falecimento: "1948",
    origem: "Portugal (Lisboa)",
    padroeiro: ["Pobres", "Doentes"],
    categorias: ["Saúde", "Conforto espiritual", "Proteção"],
    resumo: "Padre jesuíta que percorreu Portugal levando conforto aos pobres e doentes. Conhecido pelo espírito alegre e caridade incansável, é venerado como 'santo popular'.",
    historia: "Francisco Maria da Cruz Marques Xavier nasceu a 29 de maio de 1859 em Lisboa, filho de família modesta. Desde criança demonstrou vocação religiosa. Aos 17 anos entrou para o noviciado da Companhia de Jesus em Braga e foi ordenado sacerdote em 1888. Trabalhou inicialmente como professor no Colégio de Campolide. Porém, o seu verdadeiro carisma era a evangelização dos pobres e dos doentes. Durante mais de cinquenta anos percorreu Portugal, especialmente Lisboa e arredores, visitando bairros pobres, hospitais, prisões, asilos. Levava a Eucaristia aos moribundos, confessava, consolava, distribuía esmolas. Era conhecido pelo saco de pano que trazia sempre ao ombro, cheio de objectos para dar aos necessitados: roupas, comida, medicamentos, dinheiro. O Padre Cruz tinha um espírito extraordinariamente alegre. Dizia que a alegria era sinal da presença de Deus. Cantava e assobiava pelos caminhos, mesmo em situações difíceis. Pregava missões populares com grande fervor, atraindo multidões. Tinha especial devoção ao Sagrado Coração de Jesus e promovia a prática da Comunhão Reparadora às primeiras sextas-feiras do mês. Apesar da idade avançada, continuou activo até aos últimos dias. Morreu a 4 de setembro de 1948, aos 89 anos. Milhares de pessoas acompanharam o funeral. Imediatamente começaram a atribuir-lhe milagres e a visitarem o túmulo no cemitério dos Prazeres. Embora não seja formalmente beatificado ou canonizado, é venerado pelo povo como santo. A sua causa de beatificação foi aberta. O quarto onde viveu no Colégio de Campolide transformou-se em pequeno museu e local de oração. Muitos devotos pedem a sua intercessão para curas, empregos e protecção. O Padre Cruz é exemplo de sacerdote totalmente dedicado aos pobres, vivendo o Evangelho com alegria contagiante.",
    notavel: [
      "Jesuíta dedicado aos pobres durante 50 anos",
      "Conhecido pelo espírito alegre e caridade",
      "Venerado como 'santo popular' em Lisboa",
      "Processo de beatificação em curso",
      "Exemplo de evangelização com alegria"
    ],
    destaque: false
  }

// ============================================================
// FIM DA SEGUNDA PARTE
// Copie todo este conteúdo e adicione ao ficheiro saints-data.js
// ============================================================
// ============================================================
// ÚLTIMOS 6 SANTOS PARA COMPLETAR OS 18
// ============================================================

,

  {
    id: "sao-bras",
    nome: "São Brás",
    festa: "3 de fevereiro",
    mes: "fevereiro",
    nascimento: "Desconhecido",
    falecimento: "~316",
    origem: "Arménia",
    padroeiro: ["Garganta", "Doenças respiratórias", "São Brás de Alportel"],
    categorias: ["Cura de doenças respiratórias", "Saúde da garganta"],
    resumo: "Bispo e mártir do século IV, padroeiro da garganta. A tradição da bênção das gargantas no seu dia mantém-se viva em Portugal, especialmente no Algarve.",
    historia: "Brás viveu no século III na Arménia, onde foi consagrado bispo da cidade de Sebaste. Era conhecido pela sua santidade, sabedoria e pelos milagres que realizava. Segundo a tradição, vivia numa gruta onde animais selvagens o visitavam e ele curava os que estavam doentes ou feridos. Durante a perseguição do imperador Licínio aos cristãos, Brás foi preso por se recusar a renunciar à fé. A caminho da prisão, aconteceu o milagre mais famoso associado ao santo: uma mãe desesperada trouxe-lhe o filho que estava a sufocar com uma espinha de peixe atravessada na garganta. Brás rezou sobre o menino e a espinha saiu milagrosamente, salvando a criança. Por este milagre, tornou-se padroeiro das doenças da garganta e das vias respiratórias. Na prisão, foi submetido a torturas terríveis: foi açoitado, teve a carne dilacerada com pentes de ferro (instrumentos usados para cardar lã) e finalmente foi decapitado por volta de 316. O culto a São Brás espalhou-se rapidamente pela cristandade. A tradição da 'bênção das gargantas' no dia de São Brás mantém-se até hoje: o sacerdote coloca duas velas benzidas em forma de cruz sobre a garganta dos fiéis e reza uma oração pedindo a protecção do santo contra doenças da garganta e do pulmão. Em Portugal, a devoção a São Brás é particularmente forte no Algarve. A cidade de São Brás de Alportel, que lhe deve o nome, celebra o santo com grande solenidade. Festas e romarias realizam-se a 3 de fevereiro em várias localidades. É invocado especialmente por quem sofre de amigdalites, laringites, bronquites e outras afecções respiratórias. A iconografia representa-o como bispo, frequentemente com os pentes de ferro do martírio ou com uma vela.",
    notavel: [
      "Bispo e mártir do século IV",
      "Padroeiro da garganta e vias respiratórias",
      "Milagre da espinha de peixe",
      "Tradição da bênção das gargantas com velas",
      "Padroeiro de São Brás de Alportel"
    ],
    destaque: false
  },

  {
    id: "sao-tiago",
    nome: "São Tiago Maior",
    festa: "25 de julho",
    mes: "julho",
    nascimento: "Desconhecido",
    falecimento: "~44",
    origem: "Galileia (Israel)",
    padroeiro: ["Peregrinos", "Espanha", "Portugal"],
    categorias: ["Caminhos seguros", "Proteção em viagens", "Peregrinação"],
    resumo: "Apóstolo de Jesus e padroeiro da Espanha. O Caminho de Santiago é uma das mais importantes peregrinações cristãs. Em Portugal é venerado em várias localidades costeiras e rurais.",
    historia: "Tiago era filho de Zebedeu e Salomé, irmão de São João Evangelista. Era pescador no Mar da Galileia quando Jesus o chamou. Com Pedro e João, formava o grupo mais íntimo dos Apóstolos, testemunhando momentos especiais: a Transfiguração, a ressurreição da filha de Jairo e a agonia no Horto das Oliveiras. Jesus chamava a Tiago e João 'Boanerges' (filhos do trovão) pelo temperamento impetuoso. Após a Ascensão de Cristo, Tiago pregou o Evangelho. Segundo a tradição espanhola, evangelizou a Península Ibérica, chegando até à Galiza. Regressou a Jerusalém onde, em 44 d.C., foi decapitado por ordem de Herodes Agripa, tornando-se o primeiro apóstolo mártir. Segundo a lenda, o corpo foi colocado num barco de pedra que, guiado por anjos, navegou até à costa da Galiza, desembarcando em Padrón. Foi sepultado no local onde hoje se ergue a Catedral de Santiago de Compostela. No século IX, um eremita chamado Pelágio teve uma visão de luzes (campus stellae — campo de estrelas) indicando o local do túmulo. O bispo Teodomiro investigou e descobriu relíquias identificadas como de São Tiago. A notícia espalhou-se e Santiago tornou-se um dos mais importantes centros de peregrinação cristã, rivalizando com Roma e Jerusalém. O Caminho de Santiago desenvolveu-se, com rotas por toda a Europa. Em Portugal, vários caminhos levam a Compostela. São Tiago é representado como peregrino, com bordão, cabaça de água, chapéu com vieiras e capa. É invocado para protecção em viagens e peregrinações. Muitas localidades em Portugal têm igrejas dedicadas a Santiago, especialmente em zonas ligadas aos caminhos de peregrinação.",
    notavel: [
      "Um dos doze apóstolos de Jesus",
      "Primeiro apóstolo mártir (44 d.C.)",
      "Padroeiro da Espanha e dos peregrinos",
      "Catedral de Santiago de Compostela",
      "Caminho de Santiago é Património da Humanidade"
    ],
    destaque: false
  },

  {
    id: "santa-maria-castelo-tavira",
    nome: "Santa Maria do Castelo",
    festa: "15 de agosto",
    mes: "agosto",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Tavira)",
    padroeiro: ["Tavira", "Navegantes"],
    categorias: ["Proteção dos navegantes", "Proteção das famílias"],
    resumo: "Invocação mariana venerada na histórica Igreja de Santa Maria do Castelo em Tavira, um dos templos mais importantes do Algarve e testemunho da fé portuguesa.",
    historia: "A Igreja de Santa Maria do Castelo em Tavira tem origem numa antiga mesquita muçulmana que foi convertida em igreja cristã após a reconquista da cidade por D. Paio Peres Correia em 1242. A igreja foi dedicada a Santa Maria, invocação que celebra a Assunção da Virgem Maria ao céu. Ao longo dos séculos, a igreja tornou-se o principal templo de Tavira e centro de devoção mariana no sotavento algarvio. A localização no interior do castelo, no ponto mais alto da cidade, simboliza a protecção de Maria sobre a povoação e sobre os navegantes que partiam do porto de Tavira. A igreja guarda túmulos de cavaleiros que participaram na reconquista cristã, incluindo, segundo a tradição, sete cavaleiros da Ordem de Santiago que morreram na conquista da cidade aos mouros. A devoção a Santa Maria do Castelo está intimamente ligada à história marítima de Tavira. Durante os Descobrimentos, muitas famílias rezavam na igreja pedindo a protecção da Virgem para os seus filhos e maridos que partiam em viagens perigosas. Numerosos ex-votos marinhos foram deixados ao longo dos séculos. A festa de Santa Maria do Castelo celebra-se a 15 de agosto, dia da Assunção. A procissão parte da igreja e desce pelas ruas antigas de Tavira até ao rio Gilão, onde tradicionalmente uma barca transporta a imagem, simbolizando a protecção de Maria sobre os navegantes. A igreja sofreu graves danos no terramoto de 1755 mas foi reconstruída. Conserva elementos góticos originais, incluindo um notável portal e o interior com três naves. É classificada como Monumento Nacional. Santa Maria do Castelo permanece importante centro de fé para a comunidade de Tavira, sendo invocada para protecção das famílias, dos pescadores e de todos os que trabalham no mar.",
    notavel: [
      "Igreja construída sobre antiga mesquita",
      "Túmulos de cavaleiros da Reconquista",
      "Centro de devoção mariana no Algarve",
      "Procissão até ao rio Gilão",
      "Monumento Nacional"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-dores-castro-verde",
    nome: "Nossa Senhora das Dores",
    festa: "15 de setembro",
    mes: "setembro",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Castro Verde, Alentejo)",
    padroeiro: ["Castro Verde", "Consolação"],
    categorias: ["Consolação em sofrimento", "Proteção", "Compaixão"],
    resumo: "Padroeira de Castro Verde, no Baixo Alentejo. A devoção às Sete Dores de Maria é particularmente forte nesta região, onde a Virgem é invocada em tempos de sofrimento.",
    historia: "A devoção a Nossa Senhora das Dores em Castro Verde remonta ao século XVI. A invocação das Sete Dores de Maria contempla os sete momentos de sofrimento da Virgem durante a vida de Jesus: a profecia de Simeão, a fuga para o Egipto, a perda do Menino no Templo, o encontro com Jesus a caminho do Calvário, a crucifixão, a descida da cruz e o sepultamento de Cristo. Em Castro Verde, esta devoção ganhou particular intensidade devido às dificuldades que a população enfrentava: secas prolongadas, más colheitas, epidemias e pobreza. As gentes voltavam-se para Nossa Senhora das Dores pedindo consolo e fortaleza para suportar o sofrimento. A Basílica Real de Nossa Senhora da Conceição em Castro Verde, construída no século XVIII em estilo barroco, é um dos mais impressionantes templos do Alentejo. As paredes interiores estão completamente revestidas com azulejos que representam cenas da Batalha de Ourique (1139), onde, segundo a tradição, Cristo crucificado apareceu a D. Afonso Henriques antes da batalha. Embora a basílica seja dedicada à Imaculada Conceição, a devoção a Nossa Senhora das Dores está profundamente enraizada na piedade popular local. A festa de Nossa Senhora das Dores realiza-se a 15 de setembro com grande solenidade. A procissão percorre as ruas de Castro Verde, com a imagem da Virgem representada com sete espadas trespassando o coração, simbolizando as sete dores. Fiéis vêm de todo o Baixo Alentejo participar nas celebrações. Nossa Senhora das Dores é invocada especialmente por quem atravessa momentos de grande sofrimento: doenças, lutos, problemas familiares, dificuldades económicas. A devoção ensina que Maria, que sofreu tanto, compreende o nosso sofrimento e nos acompanha com compaixão maternal.",
    notavel: [
      "Padroeira de Castro Verde",
      "Sete Dores de Maria",
      "Basílica com azulejos da Batalha de Ourique",
      "Devoção forte no Baixo Alentejo",
      "Invocada em tempos de sofrimento"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-livramento",
    nome: "Nossa Senhora do Livramento",
    festa: "2 de fevereiro",
    mes: "fevereiro",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Alcácer do Sal)",
    padroeiro: ["Alcácer do Sal", "Protecção"],
    categorias: ["Ajuda em dificuldades", "Livramento de perigos", "Proteção"],
    resumo: "Invocação mariana venerada em Alcácer do Sal e em várias localidades do Alentejo. Maria é invocada para livramento de perigos e protecção em momentos difíceis.",
    historia: "A devoção a Nossa Senhora do Livramento está associada à protecção da Virgem Maria em situações de perigo mortal. A invocação tem origem em numerosos testemunhos de pessoas que, em momentos de grande aflição — tempestades no mar, ataques de inimigos, doenças graves, acidentes — invocaram Maria e foram milagrosamente salvas. Em Alcácer do Sal, no Alentejo, a devoção a Nossa Senhora do Livramento remonta à Idade Média. A localização estratégica da vila, junto ao rio Sado e perto do mar, tornava-a vulnerável a ataques de piratas mouros. A população voltava-se para Nossa Senhora pedindo protecção. Várias crónicas medievais registam salvamentos milagrosos atribuídos à intercessão da Virgem. A igreja dedicada a Nossa Senhora do Livramento em Alcácer do Sal foi construída no século XVI, embora exista tradição de um templo anterior no mesmo local. A imagem da Virgem representa Maria com o Menino Jesus, num gesto de protecção maternal. Ao longo dos séculos, ex-votos encheram a igreja: correntes de ferro (simbolizando libertação de prisões), âncoras (salvamentos no mar), muletas (curas), objectos pessoais de soldados que regressaram vivos das guerras. A festa de Nossa Senhora do Livramento celebra-se a 2 de fevereiro, dia da Apresentação do Senhor. Procissões e celebrações litúrgicas marcam o dia. A devoção espalhou-se por várias localidades do Alentejo, onde pequenas ermidas e capelas foram dedicadas a esta invocação. Nossa Senhora do Livramento é invocada em situações de perigo iminente, doenças graves, problemas judiciais, dificuldades financeiras extremas e qualquer circunstância em que a pessoa se sente encurralada sem saída. A confiança na intercessão de Maria como libertadora de todos os males permanece viva na piedade popular alentejana.",
    notavel: [
      "Padroeira de Alcácer do Sal",
      "Invocada para livramento de perigos",
      "Numerosos ex-votos de salvamentos",
      "Devoção forte no Alentejo",
      "Protectora em situações extremas"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-atalaia",
    nome: "Nossa Senhora da Atalaia",
    festa: "15 de agosto",
    mes: "agosto",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Montijo, Setúbal)",
    padroeiro: ["Pescadores", "Agricultores", "Montijo"],
    categorias: ["Proteção de pescadores", "Proteção de agricultores", "Fartura"],
    resumo: "Padroeira do Montijo, venerada no Santuário da Atalaia. A Virgem é invocada por pescadores e agricultores da região de Setúbal e Alentejo para protecção e boas colheitas.",
    historia: "O Santuário de Nossa Senhora da Atalaia situa-se no alto de um monte junto ao Montijo, de onde se avista o estuário do Tejo. O nome 'Atalaia' deriva da palavra árabe 'al-talaya', que significa torre de vigia ou posto de observação. Durante a ocupação muçulmana, o monte servia de atalaia para vigiar navios no Tejo. Após a reconquista cristã, foi construída no local uma pequena ermida dedicada à Virgem Maria. A devoção cresceu entre pescadores que trabalhavam no Tejo e agricultores das terras circundantes. Ambos invocavam Nossa Senhora da Atalaia: os pescadores pediam protecção nas águas traiçoeiras do estuário e boa pesca; os agricultores pediam chuva na medida certa e colheitas abundantes. Numerosos milagres de salvamento foram atribuídos à intercessão da Virgem. No século XVIII, a ermida foi ampliada e tornou-se importante centro de romaria. A festa principal celebra-se a 15 de agosto, festa da Assunção. A romaria da Atalaia é uma das mais concorridas da região, atraindo milhares de peregrinos de todo o Ribatejo e Alentejo. A subida ao santuário, muitas vezes feita a pé desde o Montijo, é acto de devoção e penitência. Do alto da Atalaia, a vista panorâmica sobre o Tejo, Lisboa ao longe e as planícies alentejanas é deslumbrante — símbolo de Maria que, do alto, vigia e protege os seus filhos. A imagem de Nossa Senhora da Atalaia representa Maria coroada, com o Menino Jesus ao colo. O santuário guarda ex-votos marinhos e agrícolas: miniaturas de barcos, redes de pesca, espigas de trigo, ferramentas agrícolas. Nossa Senhora da Atalaia é invocada para protecção no trabalho, fartura na pesca e nas colheitas, e para guardar famílias de pescadores e agricultores.",
    notavel: [
      "Santuário no alto do monte com vista sobre o Tejo",
      "Padroeira de pescadores e agricultores",
      "Romaria concorrida a 15 de agosto",
      "Ex-votos marinhos e agrícolas",
      "Nome derivado de torre de vigia islâmica"
    ],
    destaque: false
  }
,

  {
    id: "sao-longuinho",
    nome: "São Longuinho (São Longino)",
    festa: "15 de março",
    mes: "março",
    nascimento: "Desconhecido",
    falecimento: "~37 d.C.",
    origem: "Roma",
    padroeiro: ["Objetos perdidos", "Cegos"],
    categorias: ["Encontrar objetos perdidos", "Questões menores", "Visão"],
    resumo: "Centurião romano que perfurou o lado de Cristo na cruz. Curado milagrosamente ao ser tocado pelo sangue de Jesus, converteu-se ao cristianismo. É invocado para encontrar objetos perdidos.",
    historia: "Longino (nome derivado de 'longinus', lança em latim) era um centurião romano presente na crucificação de Jesus Cristo. Segundo o Evangelho de João, quando viram que Jesus já estava morto, em vez de lhe quebrarem as pernas como faziam aos outros crucificados, Longino atravessou-lhe o lado com uma lança, de onde saíram sangue e água. Segundo a tradição, Longino sofria de uma grave doença nos olhos que o estava a cegar. Quando perfurou o lado de Cristo, gotas de sangue e água respingaram nos seus olhos e ele foi instantaneamente curado. Mas a cura mais profunda aconteceu na sua alma: os olhos do espírito abriram-se e ele reconheceu em Jesus o Filho de Deus. Atribuem-lhe as palavras: 'Verdadeiramente este homem era o Filho de Deus.' Longino converteu-se ao cristianismo imediatamente. Deixou o exército romano e retirou-se para a Capadócia (actual Turquia) onde viveu como monge, pregando o Evangelho. Realizou muitos milagres de cura, especialmente de doenças dos olhos. Foi preso durante a perseguição aos cristãos e levado perante o governador, que ordenou que renunciasse à fé. Longino recusou firmemente. Foi torturado e finalmente decapitado por volta do ano 37 d.C. A devoção popular a São Longuinho cresceu especialmente no Brasil e em Portugal, onde é invocado para encontrar objectos perdidos. A tradição diz que ele era um homem de baixa estatura e, por isso, tinha boa visão do chão, conseguindo encontrar objectos caídos que outros não viam. Quando servia na corte romana, encontrava pertences perdidos e devolvia-os aos donos. Por isso tornou-se padroeiro de quem procura coisas perdidas. A tradição de dar 'três pulinhos' após encontrar o objecto tem várias explicações: homenagem ao santo que mancava, referência à Santíssima Trindade, ou simplesmente uma expressão de alegria e gratidão. A oração popular diz: 'São Longuinho, São Longuinho, se eu achar [objecto], dou três pulinhos!' Em Braga existe uma estátua equestre de São Longuinho, uma das poucas em Portugal.",
    notavel: [
      "Centurião que perfurou o lado de Cristo",
      "Curado de cegueira pelo sangue de Jesus",
      "Converteu-se imediatamente ao cristianismo",
      "Invocado para encontrar objectos perdidos",
      "Tradição popular dos 'três pulinhos'"
    ],
    destaque: false
  },

  {
    id: "santa-faustina-kowalska",
    nome: "Santa Faustina Kowalska",
    festa: "5 de outubro",
    mes: "outubro",
    nascimento: "1905",
    falecimento: "1938",
    origem: "Polónia",
    padroeiro: ["Divina Misericórdia"],
    categorias: ["Misericórdia divina", "Perdão", "Compaixão"],
    resumo: "Freira polaca a quem Jesus apareceu e revelou a mensagem da Divina Misericórdia. A imagem de Jesus Misericordioso e a Coroa da Divina Misericórdia são fruto das suas visões.",
    historia: "Helena Kowalska nasceu a 25 de agosto de 1905 em Głogowiec, Polónia, numa família muito pobre de camponeses. Era a terceira de dez filhos. Desde criança sentia vocação religiosa mas os pais, necessitando do seu trabalho, não lhe permitiram entrar para o convento. Aos 16 anos teve uma visão de Jesus sofredor que lhe disse: 'Quanto tempo ainda te farei esperar?' Saiu de casa e, aos 20 anos, entrou para a Congregação das Irmãs de Nossa Senhora da Misericórdia, adoptando o nome de Irmã Maria Faustina. Trabalhou como cozinheira, jardineira e porteira. Exteriormente levava vida comum, mas interiormente vivia em profunda união mística com Deus. A 22 de fevereiro de 1931, Jesus apareceu-lhe vestido com túnica branca, com a mão direita erguida em sinal de bênção e a esquerda tocando no peito, de onde saíam dois raios: um vermelho (representando o sangue) e outro pálido (representando a água). Jesus disse-lhe: 'Pinta uma imagem segundo o modelo que vês, com a inscrição: Jesus, confio em Vós. Desejo que esta imagem seja venerada no mundo inteiro.' Pediu também que se instituísse a festa da Divina Misericórdia no primeiro domingo após a Páscoa e ensinou-lhe a Coroa da Divina Misericórdia. Faustina teve centenas de visões e locucões místicas, que registou num Diário de 600 páginas. Jesus revelou-lhe mensagens sobre a Sua infinita misericórdia para com os pecadores. Faustina sofreu intensamente de tuberculose, oferecendo o sofrimento pela conversão dos pecadores. Morreu a 5 de outubro de 1938, aos 33 anos. Foi canonizada por João Paulo II em 2000. A devoção à Divina Misericórdia espalhou-se pelo mundo inteiro. A imagem de Jesus Misericordioso é venerada em milhões de lares. A festa da Divina Misericórdia foi instituída oficialmente para toda a Igreja.",
    notavel: [
      "Vidente de Jesus Misericordioso",
      "Autora do Diário sobre a Divina Misericórdia",
      "A imagem de Jesus Misericordioso é baseada nas suas visões",
      "Coroa da Divina Misericórdia revelada a ela",
      "Canonizada por João Paulo II em 2000"
    ],
    destaque: false
  },

  {
    id: "padre-pio",
    nome: "Padre Pio de Pietrelcina",
    festa: "23 de setembro",
    mes: "setembro",
    nascimento: "1887",
    falecimento: "1968",
    origem: "Itália",
    padroeiro: ["Doentes", "Defesa da vida"],
    categorias: ["Curas milagrosas", "Confissão", "Sofrimento redentor"],
    resumo: "Frade capuchinho italiano que recebeu os estigmas de Cristo. Conhecido pelas curas milagrosas, dom de bilocação e capacidade de ler almas. É um dos santos mais venerados do século XX.",
    historia: "Francesco Forgione nasceu a 25 de maio de 1887 em Pietrelcina, sul de Itália, filho de camponeses. Desde os cinco anos manifestava êxtases místicos e falava com Jesus e Maria como se os visse. Aos 15 anos entrou para a Ordem dos Frades Menores Capuchinhos, recebendo o nome de Frei Pio. Foi ordenado sacerdote em 1910. Em 1918, enquanto rezava diante do crucifixo, recebeu os estigmas — as cinco chagas de Cristo nas mãos, pés e lado — que permaneceram visíveis e sangrando durante 50 anos até à sua morte. Foi o primeiro sacerdote estigmatizado da história da Igreja. Padre Pio manifestou extraordinários dons místicos: lia os corações e almas das pessoas no confessionário, profetizava acontecimentos futuros, tinha o dom da bilocação (ser visto em dois lugares ao mesmo tempo), exalava perfume de flores sem causa natural. Passava até 19 horas diárias no confessionário, ouvindo milhares de penitentes que vinham de todo o mundo. Incontáveis curas milagrosas foram-lhe atribuídas. Sofreu incompreensão e foi investigado pelo Santo Ofício, que o proibiu de celebrar missa em público durante dois anos. Suportou tudo com humildade. Em 1956, inaugurou a 'Casa Alívio do Sofrimento', um hospital moderno em San Giovanni Rotondo. Dizia que a sua obra mais importante não eram os milagres mas as almas que reconciliava com Deus. Celebrou a última missa a 22 de setembro de 1968 e morreu na madrugada de 23 de setembro, tendo os estigmas desaparecido do corpo. Cem mil pessoas assistiram ao funeral. Foi canonizado por João Paulo II em 2002. O seu corpo, incorrupto, está exposto em San Giovanni Rotondo, onde milhões de peregrinos o visitam anualmente.",
    notavel: [
      "Recebeu os estigmas de Cristo durante 50 anos",
      "Dons de bilocação e leitura de almas",
      "Incontáveis curas milagrosas documentadas",
      "Fundou a Casa Alívio do Sofrimento (hospital)",
      "Um dos santos mais venerados do século XX"
    ],
    destaque: false
  },

  {
    id: "santa-mafalda-portugal",
    nome: "Santa Mafalda de Portugal",
    festa: "2 de maio",
    mes: "maio",
    nascimento: "~1195",
    falecimento: "1256",
    origem: "Portugal",
    padroeiro: ["Arouca", "Mulheres"],
    categorias: ["Proteção de mulheres", "Causas sociais", "Paz familiar"],
    resumo: "Filha de D. Sancho I, rainha de Castela e depois freira cisterciense em Arouca. Dedicou-se aos pobres e doentes. É venerada informalmente, especialmente na região de Arouca.",
    historia: "Mafalda nasceu por volta de 1195, filha do rei D. Sancho I de Portugal e da rainha D. Dulce de Aragão. Era irmã das santas Teresa e Sancha. Recebeu educação esmerada e desde jovem demonstrava grande piedade. Aos 13 anos foi prometida em casamento ao rei Henrique I de Castela, matrimónio arranjado por razões políticas. Casaram em 1215. Porém, um ano depois, o Papa Inocêncio III anulou o casamento por parentesco (eram primos). Mafalda regressou a Portugal, tendo recebido em dote várias terras, incluindo Arouca. Decidiu consagrar a vida a Deus e aos pobres. Fundou hospitais e asilos, dedicava-se pessoalmente a cuidar de doentes leprosos. Distribuía esmolas generosamente. Por volta de 1220 entrou como freira no Mosteiro de Arouca, de religiosas cistercienses. Ali viveu com grande austeridade e humildade, recusando privilégios devidos à condição régia. Dormia sobre tábuas, jejuava rigorosamente, passava horas em oração. Reformou o mosteiro, introduzindo disciplina mais rigorosa. Tinha especial caridade para com os pobres que batiam à porta do convento. Realizou vários milagres: multiplicou pães para dar aos necessitados, curou doentes. Morreu a 2 de maio de 1256, cercada de fama de santidade. Foi sepultada no mosteiro de Arouca. Embora nunca formalmente canonizada, é venerada como santa pelo povo há séculos. O seu túmulo em Arouca é local de peregrinação. A devoção é especialmente forte na região de Arouca e no norte de Portugal. É invocada por mulheres que enfrentam dificuldades, especialmente relacionadas com casamento, família e questões sociais.",
    notavel: [
      "Filha de D. Sancho I, irmã de duas outras santas",
      "Rainha de Castela, casamento anulado pelo Papa",
      "Fundou hospitais e cuidou pessoalmente de leprosos",
      "Freira cisterciense em Arouca",
      "Venerada informalmente como santa"
    ],
    destaque: false
  },

  {
    id: "sao-gens-lisboa",
    nome: "São Gens de Lisboa (São Ginés)",
    festa: "25 de agosto",
    mes: "agosto",
    nascimento: "Século III",
    falecimento: "~303",
    origem: "Arles (França)",
    padroeiro: ["Artistas", "Músicos", "Lisboa (antigo)"],
    categorias: ["Proteção de artistas", "Inspiração", "Música"],
    resumo: "Mártir cristão e antigo padroeiro de Lisboa antes de São Vicente. Protector de artistas e músicos, especialmente invocado por quem busca inspiração criativa.",
    historia: "Genésio (Gens em português) nasceu no século III em Arles, na Gália (actual França). Era escrivão notário, responsável por registar actos oficiais. Durante a perseguição do imperador Diocleciano aos cristãos, Genésio foi convocado para registar os decretos imperiais contra os seguidores de Cristo. Enquanto escrevia as ordens de perseguição, sentiu profunda repulsa pelo que estava a fazer. Num acto de coragem extraordinária, atirou a pena, rasgou os documentos e declarou publicamente ser cristão. Foi imediatamente preso. Submetido a torturas terríveis, recusou renegar a fé. Foi decapitado por volta do ano 303. Outra tradição diz que Genésio era actor e, durante uma representação satírica do baptismo cristão perante o imperador, foi subitamente tocado pela graça divina, converteu-se realmente e proclamou Cristo, sendo martirizado. O culto a São Gens espalhou-se pela Europa. Em Portugal, foi trazido provavelmente por visigodos ou francos. Tornou-se padroeiro de Lisboa antes de São Vicente. Existia uma igreja dedicada a São Gens onde hoje está o Convento do Carmo. Com a trasladação das relíquias de São Vicente para Lisboa em 1173, este passou a ser o padroeiro principal, mas São Gens continuou venerado. Era especialmente invocado por escribas, notários, secretários e, mais tarde, por artistas e músicos. A ligação aos artistas deriva de uma das tradições que o identifica como actor convertido. É invocado para inspiração criativa, protecção do trabalho artístico e sucesso em empreendimentos culturais.",
    notavel: [
      "Mártir do século III",
      "Antigo padroeiro de Lisboa",
      "Protector de artistas e músicos",
      "Escrivão ou actor convertido durante perseguição",
      "Invocado para inspiração criativa"
    ],
    destaque: false
  },

  {
    id: "santa-iria-tomar",
    nome: "Santa Iria de Tomar (Santarém)",
    festa: "20 de outubro",
    mes: "outubro",
    nascimento: "~650",
    falecimento: "~653",
    origem: "Portugal (Nabância/Tomar)",
    padroeiro: ["Tomar", "Santarém"],
    categorias: ["Castidade", "Proteção das mulheres", "Pureza"],
    resumo: "Virgem e mártir portuguesa do século VII. Morta por ciúmes ao recusar propostas amorosas. O seu corpo foi lançado ao Nabão e apareceu milagrosamente no Tejo, dando nome a Santarém.",
    historia: "Iria (ou Irene) nasceu por volta do ano 650 em Nabância, junto ao rio Nabão (actual Tomar). Era filha de Paterniano e Eufémia, família cristã visigótica. Desde criança consagrou-se a Deus, fazendo voto de virgindade perpétua. Era extraordinariamente bela e virtuosa. Um jovem nobre chamado Britaldo apaixonou-se por ela e pediu-a em casamento. Iria recusou respeitosamente, explicando que tinha consagrado a vida a Cristo. Britaldo, ferido no orgulho, não aceitou a recusa. Tentou várias vezes persuadi-la, chegando a pedir a intervenção dos pais, mas Iria manteve-se firme na sua decisão. Consumido pelo ciúme e pela rejeição, Britaldo decidiu vingar-se. Contratou um monge corrupto chamado Remígio que, em troca de ouro, inventou uma poção e convenceu as pessoas de que Iria estava grávida (a poção causava inchaço no ventre). O escândalo espalhou-se. O próprio pai, Paterniano, cego pela falsa evidência e pela desonra aparente, assassinou a filha num acesso de fúria, decapitando-a. Só depois descobriu a verdade e a inocência de Iria, caindo em profundo desespero e arrependimento. O corpo de Iria foi lançado ao rio Nabão. Milagrosamente, a corrente levou-o até ao rio Tejo e, quinze quilómetros abaixo, as águas depositaram o corpo numa praia, rodeado de luz celestial e perfume de flores. Anjos guardavam o corpo. O lugar passou a chamar-se 'Scallabis Iriana' e mais tarde Santarém (Santa Irene). Ali foi construída uma igreja em sua honra. São Julião, bispo de Cuenca, propagou o culto. Santa Iria tornou-se padroeira de Tomar e Santarém, sendo venerada como mártir da pureza e protectora das mulheres.",
    notavel: [
      "Virgem e mártir portuguesa do século VII",
      "Morta pelo próprio pai enganado por falsa acusação",
      "Corpo milagrosamente transportado pelo rio",
      "Santarém recebeu o nome por causa dela",
      "Padroeira da castidade e das mulheres"
    ],
    destaque: false
  },

  {
    id: "santa-marinha-aguas-santas",
    nome: "Santa Marinha de Águas Santas",
    festa: "18 de julho",
    mes: "julho",
    nascimento: "Século VII",
    falecimento: "Século VII",
    origem: "Portugal (Águas Santas, Porto)",
    padroeiro: ["Águas Santas"],
    categorias: ["Causas impossíveis", "Saúde", "Protecção"],
    resumo: "Virgem e mártir venerada em Águas Santas, perto do Porto. Lendas de milagres associados à fonte que brotou onde foi martirizada. É invocada em causas difíceis.",
    historia: "Marinha viveu no século VII em Bitetos (actual Águas Santas), perto do Porto, durante o período da ocupação visigótica da Península Ibérica. Era filha de família cristã e desde jovem consagrou-se a Deus, fazendo voto de virgindade. Vivia em oração e dedicação aos pobres e doentes. Um nobre da região, talvez pagão ou ariano (heresia que negava a divindade de Cristo, comum entre visigodos), apaixonou-se por Marinha e pediu-a em casamento. Ela recusou firmemente, explicando que pertencia a Cristo. O nobre, enfurecido pela rejeição, acusou-a falsamente de crimes que não cometera. Foi presa e submetida a interrogatório. Recusou renegar a fé cristã ou quebrar o voto de castidade. Foi condenada à morte. Segundo a tradição, foi decapitada numa pedra. No local da execução brotou milagrosamente uma fonte de águas cristalinas com propriedades curativas. Doentes que bebiam da água ou se banhavam nela eram curados. A povoação passou a chamar-se Águas Santas. Foi construída uma igreja no local, dedicada a Santa Marinha. A romaria de Santa Marinha, a 18 de julho, atrai milhares de devotos que vêm beber da fonte santa e pedir a intercessão da mártir. Muitos ex-votos testemunham curas alcançadas. A 'Pedra de Santa Marinha' onde foi decapitada conserva-se na igreja, sendo objecto de veneração. Existe tradição de passar crianças doentes pela 'forna' (abertura na pedra) pedindo cura. Santa Marinha é invocada especialmente em causas impossíveis, doenças graves e situações desesperadas.",
    notavel: [
      "Virgem e mártir do século VII em Portugal",
      "Fonte milagrosa brotou no local do martírio",
      "Águas Santas recebeu o nome por causa dela",
      "Romaria popular a 18 de julho",
      "Invocada em causas impossíveis"
    ],
    destaque: false
  },

  {
    id: "sao-frei-gil-vouzela",
    nome: "São Frei Gil de Vouzela",
    festa: "14 de maio",
    mes: "maio",
    nascimento: "~1140",
    falecimento: "1265",
    origem: "Portugal (Vouzela)",
    padroeiro: ["Vouzela"],
    categorias: ["Arrependimento", "Perdão", "Conversão"],
    resumo: "Médico português que, após matar um homem em duelo, converteu-se, tornou-se eremita e depois frade dominicano. Exemplo de conversão e vida penitente.",
    historia: "Gil Rodrigues nasceu por volta de 1140 em Vouzela. Era médico, profissão rara e prestigiada na época. Homem de temperamento violento, envolveu-se numa disputa que terminou em duelo. Gil matou o adversário. Atormentado pelo remorso, fugiu e refugiou-se numa gruta nas serras próximas de Vouzela, onde viveu como eremita durante anos, fazendo penitência severa pelo crime cometido. Alimentava-se de ervas e raízes, dormia sobre pedras, flagelava-se e passava noites inteiras em oração. Segundo a tradição, animais selvagens aproximavam-se dele mansamente, reconhecendo a sua santidade. A fama da sua penitência espalhou-se e pessoas começaram a procurá-lo pedindo conselhos e orações. Gil realizava curas, utilizando o seu conhecimento médico mas também, segundo testemunhos, por poder divino. Anos depois, Gil deixou a vida eremítica e ingressou na Ordem dos Pregadores (Dominicanos), provavelmente no convento de Coimbra. Como frade, dedicou-se à pregação e ao cuidado dos doentes e pobres. Continuou a vida austera de penitência. Tinha especial caridade para com pecadores arrependidos, encorajando-os à conversão. Morreu em 1265, com fama de santidade. Foi sepultado em Santarém. Embora nunca formalmente canonizado, é venerado como santo, especialmente na região de Vouzela. A gruta onde viveu como eremita tornou-se local de peregrinação. É invocado por quem busca conversão, por pecadores arrependidos e por quem precisa de força para mudar de vida.",
    notavel: [
      "Médico que matou em duelo e se converteu",
      "Viveu como eremita em penitência severa",
      "Tornou-se frade dominicano",
      "Exemplo de arrependimento e conversão",
      "Venerado especialmente em Vouzela"
    ],
    destaque: false
  },

  {
    id: "sao-geraldo-braga",
    nome: "São Geraldo de Braga",
    festa: "5 de dezembro",
    mes: "dezembro",
    nascimento: "Desconhecido",
    falecimento: "1108",
    origem: "França",
    padroeiro: ["Braga"],
    categorias: ["Ajuda espiritual", "Cura", "Reforma da Igreja"],
    resumo: "Monge beneditino francês que se tornou primeiro arcebispo de Braga após a reconquista cristã. Reformador da diocese e exemplo de santidade pastoral.",
    historia: "Geraldo nasceu em França, provavelmente na região da Borgonha, em data desconhecida do século XI. Era monge beneditino do Mosteiro de Moissac, importante centro de renovação espiritual ligado à reforma cluniacense. Era conhecido pela santidade, sabedoria e capacidade de governo. O rei D. Afonso VI de Leão e Castela, em processo de reconquista cristã da Península Ibérica, precisava de bispos santos e capazes para restaurar as dioceses libertadas dos mouros. Braga, antiga sede primacial da Hispânia, estava devastada após séculos de domínio muçulmano. Em 1070, D. Afonso VI nomeou Geraldo como arcebispo de Braga, confiando-lhe a hercúlea tarefa de reconstruir a diocese. Geraldo aceitou por obediência. Chegou a Braga e encontrou a cidade em ruínas: a Sé estava destruída, não havia clero organizado, as estruturas eclesiásticas tinham desaparecido. Iniciou imediatamente a reconstrução. Mandou edificar nova Sé catedral, fundou mosteiros, organizou o cabido, formou sacerdotes, restaurou paróquias. Visitou pessoalmente todo o território da arquidiocese, pregando, catequizando, confirmando. Reintroduziu a liturgia romana. Defendeu a primazia de Braga sobre as dioceses da Galiza. Tinha grande caridade para com os pobres, distribuindo esmolas generosamente. Vivia com austeridade monástica, apesar da dignidade arquiepiscopal. Morreu em 1108, após 38 anos de episcopado. Foi sepultado na Sé de Braga. A sua obra foi fundamental para a restauração da cristandade no norte de Portugal. É venerado como santo, embora não formalmente canonizado. É invocado para ajuda espiritual, cura e protecção.",
    notavel: [
      "Primeiro arcebispo de Braga após reconquista",
      "Reconstruiu a diocese em ruínas",
      "Reformador e organizador da Igreja no norte de Portugal",
      "38 anos de episcopado dedicado",
      "Exemplo de santidade pastoral"
    ],
    destaque: false
  },

  {
    id: "santo-adriao-sever",
    nome: "Santo Adrião de Sever (São Adrião)",
    festa: "1 de março",
    mes: "março",
    nascimento: "Século VII",
    falecimento: "~875",
    origem: "Norte de África",
    padroeiro: ["Sever (Moncorvo)"],
    categorias: ["Milagres", "Proteção contra o mal", "Curas"],
    resumo: "Eremita venerado em Sever (Moncorvo) e em Trás-os-Montes. Tradição forte de romarias. Invocado para protecção e curas milagrosas.",
    historia: "Adrião era, segundo a tradição, um príncipe ou nobre norte-africano que viveu no século VII. Converteu-se ao cristianismo e, rejeitando a vida mundana, decidiu dedicar-se inteiramente a Deus. Deixou a pátria e veio para a Península Ibérica procurando lugar de retiro para vida eremítica. Atravessou várias regiões até chegar às serras de Trás-os-Montes, em Portugal. Estabeleceu-se numa gruta nas proximidades de Sever (actual concelho de Moncorvo), onde viveu em profunda solidão, oração e penitência. Alimentava-se de raízes e frutos silvestres. Passava dias inteiros em contemplação. Realizou vários milagres: fez brotar água de uma rocha para saciar a sede de peregrinos, curou doentes que o procuravam, expulsou demónios. A fama da sua santidade espalhou-se e pessoas vinham de longe pedir bênção e conselho. Adrião acolhia a todos com caridade, mas preservava a vida contemplativa. Morreu na gruta, rodeado de fama de santidade, por volta do ano 875 (segundo algumas fontes, embora as datas sejam incertas). Foi sepultado no local. A gruta tornou-se santuário e local de peregrinação. Foi construída uma capela, depois uma igreja. A romaria de Santo Adrião, que se realiza anualmente no início de Março, é uma das mais importantes de Trás-os-Montes, atraindo milhares de devotos. Muitos sobem à serra de joelhos ou descalços em acto de penitência. São deixados ex-votos agradecendo curas e graças alcançadas. Santo Adrião é especialmente invocado contra doenças, pragas, tempestades e influências malignas.",
    notavel: [
      "Eremita em Trás-os-Montes no século VII",
      "Fez brotar água da rocha milagrosamente",
      "Romaria popular em Sever (Moncorvo)",
      "Forte tradição de devoção em Trás-os-Montes",
      "Invocado contra doenças e mal"
    ],
    destaque: false
  },

  {
    id: "sao-romao-alentejo",
    nome: "São Romão",
    festa: "9 de agosto",
    mes: "agosto",
    nascimento: "Desconhecido",
    falecimento: "Século VII",
    origem: "Península Ibérica",
    padroeiro: ["Alentejo"],
    categorias: ["Milagres", "Proteção de terras", "Doenças"],
    resumo: "Bispo e mártir venerado no interior alentejano. Forte tradição de romarias em sua honra, especialmente em localidades como Borba. Invocado para protecção de terras e curas.",
    historia: "São Romão foi, segundo a tradição, um bispo cristão que viveu na Península Ibérica durante o século VII, período conturbado de invasões bárbaras e conflitos entre visigodos arianos e católicos. As informações históricas são escassas, mas a devoção popular mantém viva a sua memória. Terá sido bispo numa diocese do sul da Hispânia (provavelmente na região do actual Alentejo). Era conhecido pela santidade, zelo pastoral e caridade para com os pobres. Durante perseguições (ou conflitos entre facções cristãs arianas e católicas), foi martirizado pela fé. O local e circunstâncias exactas do martírio perderam-se no tempo. Foi sepultado na região onde exercera o ministério. A devoção popular cresceu e várias localidades alentejanas reivindicam ligação a São Romão. Em Borba, a Ermida de São Romão é importante centro de devoção. A romaria, no início de Agosto, atrai devotos de toda a região. Tradicionalmente, levam-se oferendas de pão e vinho benzidos. São Romão é invocado para protecção das terras agrícolas (especialmente contra pragas e secas), para saúde do gado, cura de doenças e protecção geral. Existe tradição de acender fogueiras na véspera da festa (São Romão Grande) e no dia 9 de Agosto (São Romão Pequeno). A devoção, embora antiga, mantém-se viva especialmente entre populações rurais do Alentejo que vêem em São Romão um protector das actividades agrícolas e da vida camponesa.",
    notavel: [
      "Bispo e mártir do século VII",
      "Forte devoção no interior alentejano",
      "Romarias populares, especialmente em Borba",
      "Invocado para protecção de terras e colheitas",
      "Tradição das fogueiras de São Romão"
    ],
    destaque: false
  }

// ============================================================
// CONTINUA...
// ============================================================
// ============================================================
// SANTOS RESTANTES - PARTE 2
// ============================================================

,

  {
    id: "santa-margarida-serra",
    nome: "Santa Margarida da Serra",
    festa: "20 de julho",
    mes: "julho",
    nascimento: "Desconhecido",
    falecimento: "Século XIII",
    origem: "Portugal (Grândola)",
    padroeiro: ["Pastores", "Agricultores"],
    categorias: ["Proteção de pastores", "Proteção de agricultores", "Fertilidade dos campos"],
    resumo: "Pastora venerada em zonas rurais alentejanas, especialmente em Grândola. Associada à protecção de rebanhos e fertilidade dos campos.",
    historia: "Margarida viveu no século XIII nas serras entre Grândola e Santiago do Cacém, no Baixo Alentejo. Era uma simples pastora que cuidava das ovelhas da família em terras áridas e solitárias. Desde jovem destacava-se pela piedade profunda. Levava sempre consigo um rosário rústico feito de sementes e rezava enquanto guardava o rebanho. Tinha especial devoção à Virgem Maria e a São Tiago, padroeiro de Santiago do Cacém. Segundo a tradição, Margarida fazia milagres simples mas significativos: protegia o rebanho de lobos através da oração, encontrava ovelhas perdidas guiada por visões, e as terras onde rezava tornavam-se mais férteis. Partilhava o pouco que tinha com mendigos e viajantes que cruzavam as veredas serranas. Num Inverno particularmente rigoroso, deu a sua própria capa a um peregrino que seguia para Santiago de Compostela. Nessa noite, Margarida morreu de frio enquanto guardava o rebanho. Quando a encontraram, o corpo estava coberto de flores silvestres, apesar de ser pleno Inverno. Pastores e camponeses começaram a venerar-lhe a memória. Foi sepultada numa pequena ermida na serra. A devoção espalhou-se entre as populações rurais. Santa Margarida da Serra tornou-se padroeira de pastores e agricultores da região. É invocada para protecção de rebanhos, boas colheitas e chuva na medida certa. A romaria, em Julho, junta pastores e agricultores que sobem à serra em agradecimento ou súplica.",
    notavel: [
      "Pastora do século XIII no Alentejo",
      "Morreu de frio após dar capa a peregrino",
      "Corpo encontrado coberto de flores em pleno Inverno",
      "Padroeira de pastores e agricultores",
      "Devoção forte em zonas rurais alentejanas"
    ],
    destaque: false
  },

  {
    id: "santo-amaro-setubal",
    nome: "Santo Amaro",
    festa: "15 de janeiro",
    mes: "janeiro",
    nascimento: "~530",
    falecimento: "~584",
    origem: "França",
    padroeiro: ["Doentes", "Aleijados"],
    categorias: ["Proteção contra pestes", "Proteção contra doenças", "Curas"],
    resumo: "Abade beneditino francês invocado contra epidemias. Venerado em muitas localidades de Portugal, especialmente em Setúbal e no Alentejo. Protector contra doenças contagiosas.",
    historia: "Amaro (Mauro em latim) nasceu por volta de 530 em Roma, filho de família nobre. Aos 12 anos foi confiado pelos pais a São Bento, fundador da ordem beneditina, que o educou pessoalmente em Monte Cassino. Tornou-se um dos discípulos predilectos de São Bento. Conta-se que quando um jovem monge chamado Plácido estava a afogar-se num lago, São Bento ordenou a Mauro que o salvasse. Mauro correu sobre as águas sem afundar, puxou Plácido para terra e só então percebeu o milagre que realizara pela obediência. Após a morte de São Bento, Mauro foi enviado à Gália (França) onde fundou o Mosteiro de Glanfeuil, tornando-se o seu primeiro abade. Introduziu a Regra beneditina em França. Governou o mosteiro com sabedoria e santidade durante décadas. Realizou numerosas curas milagrosas, especialmente de doenças de pele e enfermidades contagiosas. Por isso tornou-se invocado contra pestes e epidemias. Morreu por volta de 584, cercado de fama de santidade. O culto espalhou-se por toda a Europa. Em Portugal, Santo Amaro é particularmente venerado desde a Idade Média. Durante surtos de peste, construíam-se capelas em sua honra e realizavam-se procissões pedindo sua intercessão. Em Setúbal, em Lisboa (bairro de Alcântara), no Alentejo e noutras regiões existem igrejas e capelas dedicadas a Santo Amaro. É invocado especialmente contra doenças contagiosas, problemas de pele, paralisias e para saúde geral.",
    notavel: [
      "Discípulo directo de São Bento",
      "Caminhou sobre as águas para salvar confrade",
      "Introduziu a Regra beneditina em França",
      "Invocado contra pestes e epidemias",
      "Venerado em Setúbal, Lisboa e Alentejo"
    ],
    destaque: false
  },

  {
    id: "santa-catarina-alexandria-silves",
    nome: "Santa Catarina de Alexandria",
    festa: "25 de novembro",
    mes: "novembro",
    nascimento: "~287",
    falecimento: "~305",
    origem: "Alexandria (Egipto)",
    padroeiro: ["Filósofos", "Estudantes", "Jovens mulheres"],
    categorias: ["Sabedoria", "Proteção de jovens mulheres", "Educação"],
    resumo: "Virgem e mártir do século IV, de grande sabedoria. Venerada em Silves e em todo o mundo. Padroeira dos filósofos e estudantes. Martirizada na roda de espinhos.",
    historia: "Catarina nasceu por volta de 287 em Alexandria, Egipto, filha de família nobre. Era extraordinariamente inteligente e bela. Estudou filosofia, retórica, ciências e línguas, tornando-se uma das mulheres mais cultas do seu tempo. Aos 18 anos, teve uma visão mística na qual Jesus lhe colocou um anel, desposando-a espiritualmente. Consagrou-se a Cristo em virgindade perpétua. Durante a perseguição do imperador Maxêncio, Catarina foi ao palácio imperial e confrontou corajosamente o imperador, defendendo os cristãos e refutando os argumentos dos filósofos pagãos. Maxêncio, impressionado com a sua sabedoria mas enfurecido pela ousadia, convocou cinquenta dos mais sábios filósofos do império para a derrotarem em debate. Catarina converteu-os todos ao cristianismo durante a discussão. Furioso, Maxêncio mandou queimá-los vivos. Tentou então seduzir Catarina, oferecendo-lhe riquezas e até casamento se renunciasse à fé. Ela recusou firmemente. Foi torturada na 'roda de Catarina' — instrumento com lâminas afiadas que rasgava o corpo. Milagrosamente, a roda quebrou-se ao tocá-la. Finalmente foi decapitada por volta de 305. Segundo a lenda, em vez de sangue saiu leite do seu pescoço, e anjos levaram o corpo ao Monte Sinai onde foi sepultado. O Mosteiro de Santa Catarina no Sinai guarda as relíquias. O culto espalhou-se por todo o mundo cristão. Em Portugal, é especialmente venerada em Silves, onde existe uma igreja dedicada a ela. É invocada por estudantes, filósofos e jovens mulheres. É padroeira de bibliotecas e universidades.",
    notavel: [
      "Virgem e mártir de extraordinária sabedoria",
      "Converteu 50 filósofos em debate teológico",
      "Torturada na 'roda de Catarina'",
      "Padroeira de estudantes e filósofos",
      "Venerada em Silves e em todo o mundo"
    ],
    destaque: false
  },

  {
    id: "beato-joao-brito",
    nome: "Beato João de Brito",
    festa: "4 de fevereiro",
    mes: "fevereiro",
    nascimento: "1647",
    falecimento: "1693",
    origem: "Portugal (Lisboa)",
    padroeiro: ["Missionários", "Índia"],
    categorias: ["Coragem", "Ajuda em situações difíceis", "Evangelização"],
    resumo: "Jesuíta português martirizado na Índia. Missionário corajoso que adaptou métodos de evangelização à cultura local. Exemplo de dedicação missionária até ao martírio.",
    historia: "João de Brito nasceu a 1 de março de 1647 em Lisboa, filho de uma família nobre ligada à corte. Ainda criança adoeceu gravemente e a mãe prometeu que se curasse o consagraria a Deus. Curou-se milagrosamente. Aos 15 anos, contra a vontade da família que desejava vê-lo na corte, entrou para a Companhia de Jesus. Foi enviado como missionário para a Índia em 1673. Trabalhou primeiro em Goa, depois na missão de Maduré (actual Tamil Nadu), onde a evangelização enfrentava enormes dificuldades devido ao sistema de castas hindu. João de Brito adoptou métodos inovadores: vestiu-se como um sannyasi (asceta hindu da casta mais alta), viveu em pobreza extrema, adaptou a liturgia à cultura local. Aprendeu Tamil e Sânscrito. Conseguiu converter muitos hindus, incluindo membros de castas elevadas. Esta abordagem gerou controvérsia dentro da própria Igreja, mas João manteve-se firme, defendendo que era necessário adaptar a mensagem cristã à cultura local sem comprometer a essência da fé. Em 1686 regressou brevemente a Portugal para defender os métodos da missão de Maduré perante superiores. Voltou à Índia em 1690. Converteu um rajá local chamado Tadiathevan, que por isso teve de renunciar às esposas (excepto uma) conforme a lei cristã. As esposas repudiadas, furiosas, incitaram perseguição contra João de Brito. Foi preso em 1693. Recusou renunciar à fé. Foi brutalmente torturado e decapitado a 4 de fevereiro de 1693. Foi beatificado em 1853 e canonizado em 1947 por Pio XII. É padroeiro dos missionários e muito venerado na Índia e em Portugal.",
    notavel: [
      "Jesuíta português missionário na Índia",
      "Adoptou métodos inovadores de inculturação",
      "Martirizado por converter um rajá hindu",
      "Canonizado em 1947",
      "Padroeiro dos missionários"
    ],
    destaque: false
  },

  {
    id: "sao-clemente-loule",
    nome: "São Clemente",
    festa: "23 de novembro",
    mes: "novembro",
    nascimento: "Desconhecido",
    falecimento: "~101",
    origem: "Roma",
    padroeiro: ["Loulé", "Marinheiros"],
    categorias: ["Proteção dos campos", "Proteção de agricultores", "Navegação"],
    resumo: "Quarto Papa e mártir da Igreja primitiva. Padroeiro de Loulé, no Algarve. Venerado por agricultores e marinheiros. Afogado no Mar Negro amarrado a uma âncora.",
    historia: "Clemente nasceu em Roma, provavelmente no século I. Segundo a tradição, foi ordenado bispo pelo próprio São Pedro e tornou-se o quarto Papa (depois de Pedro, Lino e Anacleto), governando a Igreja de Roma entre 88 e 101 d.C. Era conhecido pela sabedoria, caridade e zelo pastoral. Escreveu a Epístola aos Coríntios, um dos mais antigos documentos cristãos fora do Novo Testamento. Durante o reinado do imperador Trajano, foi exilado para as minas de pedra na Quersoneso (Crimeia, junto ao Mar Negro), onde já trabalhavam cerca de dois mil cristãos condenados. Clemente organizou-os em comunidade, celebrava missa e reconfortava-os. Realizou um milagre fazendo brotar água abundante de uma rocha, aliviando a sede dos prisioneiros. Muitos pagãos converteram-se ao vê-lo. Furioso, o governador ordenou que Clemente fosse atirado ao mar amarrado a uma âncora. Segundo a lenda, o mar recuou milagrosamente uma vez por ano revelando o túmulo submarino do santo. O culto espalhou-se por todo o mundo cristão. No século IX, São Cirilo e São Metódio (apóstolos dos eslavos) encontraram as relíquias de Clemente no Mar Negro e levaram-nas para Roma. Em Portugal, a devoção a São Clemente é especialmente forte em Loulé, onde é padroeiro. A tradição diz que marinheiros portugueses trouxeram relíquias ou a devoção do Mediterrâneo. A igreja matriz de Loulé é dedicada a São Clemente. É invocado por agricultores (pela água milagrosa da rocha) e marinheiros (pela protecção no mar, apesar de ter morrido afogado). A festa realiza-se a 23 de Novembro com procissão solene.",
    notavel: [
      "Quarto Papa da Igreja Católica",
      "Autor da Epístola aos Coríntios",
      "Martirizado amarrado a âncora no mar",
      "Fez brotar água de rocha para prisioneiros",
      "Padroeiro de Loulé no Algarve"
    ],
    destaque: false
  },

  {
    id: "nossa-senhora-saude-evora",
    nome: "Nossa Senhora da Saúde (Évora)",
    festa: "2 de fevereiro",
    mes: "fevereiro",
    nascimento: "—",
    falecimento: "—",
    origem: "Portugal (Évora)",
    padroeiro: ["Évora", "Doentes"],
    categorias: ["Cura de doenças", "Proteção das famílias", "Saúde"],
    resumo: "Invocação mariana muito venerada em Évora e arredores. A igreja de Nossa Senhora da Saúde é local de romaria. Invocada para curas e protecção da saúde familiar.",
    historia: "A devoção a Nossa Senhora da Saúde em Évora tem raízes no século XVI. Durante uma epidemia de peste que assolou a cidade, a população voltou-se para a Virgem Maria pedindo protecção e cura. Segundo a tradição, a epidemia cessou milagrosamente após procissões e orações fervorosas. Em acção de graças, foi construída uma ermida extra-muros dedicada a Nossa Senhora da Saúde. A localização fora das muralhas tinha razão prática: era onde ficavam isolados os pestosos. A ermida tornou-se santuário de esperança para doentes. Com o tempo, foi ampliada e transformada em igreja. A imagem de Nossa Senhora representa Maria com o Menino, ambos numa atitude de ternura maternal. Numerosos ex-votos deixados ao longo dos séculos testemunham curas alcançadas: muletas, fotografias, peças de vestuário, objectos pessoais. A festa de Nossa Senhora da Saúde, no início de Fevereiro, atrai devotos de toda a região. A procissão parte da igreja e percorre as ruas antigas de Évora. Muitos fiéis acompanham descalços ou de joelhos em acto de devoção. É tradição levar crianças doentes para serem benzidas. Nossa Senhora da Saúde é invocada não apenas para curas físicas mas também para saúde mental, equilíbrio emocional, protecção contra vícios e paz nas famílias. Durante a pandemia de Covid-19, muitas pessoas voltaram-se para Nossa Senhora da Saúde, deixando velas e orações na igreja, que permaneceu aberta para oração individual mesmo durante confinamento.",
    notavel: [
      "Devoção ligada a epidemia de peste em Évora",
      "Igreja extra-muros da cidade",
      "Numerosos ex-votos de curas",
      "Procissão popular no início de Fevereiro",
      "Invocada para saúde física e mental"
    ],
    destaque: false
  },

  {
    id: "santo-andre-sines",
    nome: "Santo André",
    festa: "30 de novembro",
    mes: "novembro",
    nascimento: "Século I",
    falecimento: "~60 d.C.",
    origem: "Galileia (Israel)",
    padroeiro: ["Pescadores", "Escócia", "Rússia"],
    categorias: ["Proteção de pescadores", "Proteção de navegantes", "Evangelização"],
    resumo: "Apóstolo de Jesus, irmão de São Pedro. Foi o primeiro chamado por Cristo. Martirizado numa cruz em X. Venerado nas zonas costeiras de Portugal, especialmente em Sines.",
    historia: "André era pescador no Mar da Galileia, irmão de Simão Pedro. Era discípulo de João Baptista quando este apontou Jesus dizendo: 'Eis o Cordeiro de Deus.' André seguiu Jesus imediatamente e foi, segundo o Evangelho de João, o primeiro apóstolo chamado. Foi André quem levou o irmão Pedro a Cristo, dizendo: 'Encontrámos o Messias.' Por isso é chamado Protokletos (o primeiro chamado). André estava presente em momentos importantes: na multiplicação dos pães (foi ele quem encontrou o rapaz com cinco pães e dois peixes), e entre os que questionaram Jesus sobre o fim dos tempos. Após Pentecostes, André pregou o Evangelho na Judeia, Samaria, Ásia Menor, ao longo do Mar Negro e na Grécia. Segundo a tradição, fundou a Igreja de Bizâncio (Constantinopla). Em Patras, Grécia, converteu muitas pessoas incluindo Maximila, esposa do procônsul romano Egeu. Furioso, Egeu ordenou que André fosse preso. Recusando renegar Cristo, foi condenado à crucifixão. Pediu que não fosse crucificado da mesma forma que Jesus, por não se considerar digno. Foi amarrado (não pregado) a uma cruz em forma de X, que ficou conhecida como Cruz de Santo André. Durante dois dias pregou aos que passavam, antes de morrer. As suas últimas palavras foram de gratidão pela cruz. O culto espalhou-se por todo o mundo cristão. É padroeiro da Escócia, Rússia, Grécia e de muitas localidades piscatórias. Em Portugal, é especialmente venerado em Sines e em zonas costeiras do Alentejo e Algarve. Pescadores invocam-no para protecção no mar. A festa realiza-se com bênção de barcos.",
    notavel: [
      "Primeiro apóstolo chamado por Jesus",
      "Levou o irmão Pedro a Cristo",
      "Martirizado em cruz em X (Cruz de Santo André)",
      "Padroeiro dos pescadores",
      "Venerado em Sines e zonas costeiras"
    ],
    destaque: false
  },

  {
    id: "sao-lourenco-almancil",
    nome: "São Lourenço",
    festa: "10 de agosto",
    mes: "agosto",
    nascimento: "~225",
    falecimento: "258",
    origem: "Espanha (Huesca)",
    padroeiro: ["Cozinheiros", "Pobres", "Bibliotecários"],
    categorias: ["Proteção contra incêndios", "Bênção das colheitas", "Caridade"],
    resumo: "Diácono e mártir do século III. Tesoureiro da Igreja que distribuiu os bens aos pobres. Martirizado numa grelha ardente. A Igreja de São Lourenço em Almancil é jóia do barroco português.",
    historia: "Lourenço nasceu por volta de 225 em Huesca, Espanha. Estudou em Saragoça onde conheceu o futuro Papa Sisto II. Quando Sisto foi eleito Papa em 257, levou Lourenço para Roma e ordenou-o diácono. Confiou-lhe a administração dos bens da Igreja e o cuidado dos pobres. Lourenço organizava a distribuição de esmolas, visitava viúvas e órfãos, levava a Eucaristia aos prisioneiros cristãos. Era profundamente amado pelos pobres de Roma. Em 258, o imperador Valeriano desencadeou violenta perseguição. O Papa Sisto II foi preso e decapitado. Lourenço, ao ver o Papa ser levado ao martírio, chorou: 'Pai, para onde vais sem o teu diácono?' Sisto respondeu: 'Não te abandono, filho. Em três dias me seguirás.' O prefeito de Roma, sabendo que Lourenço guardava os tesouros da Igreja, ordenou que os entregasse. Lourenço pediu três dias. Nesse tempo, distribuiu todos os bens aos pobres e vendeu os vasos sagrados. No terceiro dia, apresentou-se ao prefeito acompanhado de multidão de pobres, cegos, coxos, leprosos, e disse: 'Aqui estão os tesouros da Igreja.' Furioso, o prefeito ordenou que fosse assado vivo numa grelha de ferro sobre brasas. Durante o suplício, Lourenço manteve-se sereno. Segundo a tradição, disse ao carrasco: 'Este lado já está assado, vira-me para o outro.' Morreu rezando pelos perseguidores. Foi sepultado na Via Tiburtina onde foi construída a Basílica de São Lourenço Fora de Muros. O culto espalhou-se rapidamente. É invocado contra incêndios (pela grelha ardente) e para boas colheitas. Em Almancil, Algarve, a Igreja de São Lourenço (século XVIII) é obra-prima do barroco, com azulejos magníficos cobrindo paredes e tecto.",
    notavel: [
      "Diácono mártir do século III",
      "Distribuiu tesouros da Igreja aos pobres",
      "Martirizado em grelha ardente",
      "Padroeiro contra incêndios",
      "Igreja de Almancil é jóia do barroco"
    ],
    destaque: false
  },

  {
    id: "sao-damaso-i",
    nome: "São Dâmaso I",
    festa: "11 de dezembro",
    mes: "dezembro",
    nascimento: "~305",
    falecimento: "384",
    origem: "Península Ibérica (provavelmente Portugal)",
    padroeiro: ["Arqueólogos", "Portugal"],
    categorias: ["Proteção da Igreja", "Unidade", "Defesa da fé"],
    resumo: "Papa de origem portuguesa (ou hispânica) que defendeu a Igreja contra heresias. Promoveu o culto dos mártires e organizou as catacumbas. Encomendou a São Jerónimo a tradução da Bíblia (Vulgata).",
    historia: "Dâmaso nasceu por volta de 305, provavelmente na Península Ibérica. Há tradições que o dizem português, outras que o situam em Espanha. O pai era diácono em Roma (nessa época o celibato não era obrigatório) e levou a família para a Cidade Eterna ainda Dâmaso era criança. Cresceu no ambiente eclesial romano. Foi ordenado diácono e depois sacerdote. Em 366, após a morte do Papa Libério, foi eleito Papa com 60 anos, num contexto de cisma (havia um antipapa, Ursino). Dâmaso governou a Igreja durante 18 anos de grande turbulência. Enfrentou heresias arianas que negavam a divindade de Cristo. Convocou concílios, defendeu a ortodoxia, promoveu a unidade. Uma das suas maiores contribuições foi encomendar a São Jerónimo a tradução da Bíblia para latim (a Vulgata), que se tornou a versão oficial da Igreja durante séculos. Dâmaso tinha profunda devoção aos mártires. Mandou restaurar as catacumbas de Roma, localizou túmulos de mártires esquecidos, compôs inscrições poéticas em sua honra (muitas ainda hoje visíveis). Chamavam-lhe o 'arqueólogo dos mártires'. Estabeleceu o latim como língua litúrgica oficial, substituindo o grego. Promoveu o primado de Roma sobre as outras sedes episcopais. Enfrentou acusações falsas com dignidade. Morreu a 11 de dezembro de 384, deixando a Igreja mais forte e unida. Foi sepultado junto da mãe e irmã (não nas catacumbas com os mártires, por humildade). Em Portugal é venerado como papa de possível origem portuguesa, invocado para protecção da Igreja e unidade dos cristãos.",
    notavel: [
      "Papa de origem ibérica (portuguesa ou espanhola)",
      "Encomendou a Vulgata a São Jerónimo",
      "Restaurou catacumbas e promoveu culto dos mártires",
      "Defendeu a Igreja contra heresias",
      "Estabeleceu latim como língua litúrgica"
    ],
    destaque: false
  }

];
// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = saintsData;
}
