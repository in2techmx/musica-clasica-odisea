/**
 * ============================================================================
 * ODISEA DE LA ESCULTURA — DATA MASTER & CURADURÍA HISTÓRICA
 * Ecosistema Odisea de las Artes | IN2TECHMX
 * Rigor Histórico, Cero Cajas Negras, Fuentes Académicas
 * ============================================================================
 */

const ESCULTURA_DATA = {
  meta: {
    portalTitle: "Odisea de la Escultura",
    tagline: "La Conquista de la Masa, el Espacio Tridimensional y el Vacío",
    version: "1.0.0",
    curator: "IN2TECHMX & Dirección de Desarrollo (DD)",
    totalMasters: 20,
    totalEras: 10
  },

  // 1. LOS FUNDAMENTOS & DESMITIFICACIÓN
  foundations: {
    definitionStrict: "En sentido estricto, es el arte de modelar, tallar, esculpir o fundir materias sólidas (mármol, bronce, arcilla, madera) para crear formas tridimensionales en el espacio real.",
    definitionBroad: "En sentido amplio, es la dialéctica milenaria entre la masa física, el vacío circundante y la fuerza implacable de la gravedad: la liberación de la forma en tres dimensiones que exige ser rodeada por el espectador.",
    myths: [
      {
        id: "myth-white-marble",
        title: "El mito del mármol blanco impoluto",
        falsity: "«Las esculturas de la Grecia y Roma clásicas eran de mármol blanco inmaculado.»",
        reality: "Falso. Estaban vívidamente pintadas con pigmentos chillones (ocre, bermellón, malaquita, oro y lapislázuli). La blancura es una fantasía renacentista y neoclásica provocada por el desgaste de los siglos y limpiezas abrasivas.",
        source: "Estudios arqueológicos de fluorescencia UV y microscopía química (Vinzenz Brinkmann, Glyptothek Múnich)."
      },
      {
        id: "myth-static-stone",
        title: "La escultura es un arte estático y rígido",
        falsity: "«Al estar hechas de piedra o metal, las esculturas no poseen movimiento.»",
        reality: "Falso. Desde el contrapposto griego hasta la figura serpentinata de Giambologna y los móviles de Calder, los grandes escultores han diseñado obras para sugerir movimiento potencial, tensión muscular y torsión viva.",
        source: "H. W. Janson, Historia del Arte & Rudolf Wittkower, La escultura: procesos y principios."
      },
      {
        id: "myth-mechanical-cast",
        title: "El vaciado en bronce es un proceso mecánico simple",
        falsity: "«Fundir en metal es una simple copia industrial sin mérito artístico.»",
        reality: "Falso. La técnica de la cera perdida exige modelar el núcleo, crear conductos de ventilación, aplicar capas cerámicas refractarias y verter metal fundido a más de 1,000 °C con riesgo letal de explosión por vapor.",
        source: "Benvenuto Cellini, Tratados de orfebrería y escultura (1568)."
      }
    ],
    pillars: [
      {
        id: "pillar-mass-void",
        name: "Masa y Vacío",
        desc: "La escultura no solo esculpe el material sólido; también esculpe el aire que la rodea. El hueco y la oquedad son materia compositiva activa."
      },
      {
        id: "pillar-gravity",
        name: "La Batalla con la Gravedad",
        desc: "Toda escultura es un cálculo de sustentación: equilibrar toneladas de mármol o bronce sobre dos tobillos sin que la piedra quiebre por cizallamiento."
      },
      {
        id: "pillar-360",
        name: "La Mirada en 360 Grados",
        desc: "A diferencia de la pintura, una escultura nunca se agota en un solo plano: cada paso alrededor revela nuevos perfiles, sombras y tensiones."
      }
    ]
  },

  // 2. MACRO-TIMELINE HISTÓRICO DE LA ESCULTURA (30,000 AÑOS)
  eras: [
    {
      id: "prehistoria",
      name: "Prehistoria & Orígenes Mágicos",
      years: "c. 30,000 – 3,000 a.C.",
      color: "#8b5e3c",
      desc: "Tallas totémicas en hueso, marfil y piedra caliza. Culto a la fertilidad y la abstracción sintética de la forma femenina.",
      milestone: "Venus de Willendorf (c. 28,000 a.C.) & Dama de Brassempouy."
    },
    {
      id: "antiguo-oriente",
      name: "Egipto & Mesopotamia",
      years: "c. 3,000 – 500 a.C.",
      color: "#b8860b",
      desc: "La ley de la frontalidad y la búsqueda de la inmortalidad. Bloques compactos de diorita y basalto sin desprendimiento de extremidades.",
      milestone: "Estatua sedente de Kefrén & Busto de Nefertiti (c. 1345 a.C.)."
    },
    {
      id: "grecia-clasica",
      name: "Grecia Arcaica a Clásica",
      years: "c. 700 – 323 a.C.",
      color: "#2a75d3",
      desc: "De la rigidez del kourós a la invención del contrapposto. Policleto fija el canon armónico y Fidias perfecciona el drapeado mojado.",
      milestone: "El Doríforo de Policleto (c. 440 a.C.) & Friso del Partenón."
    },
    {
      id: "helenismo",
      name: "Helenismo Dramático",
      years: "c. 323 – 31 a.C.",
      color: "#8e44ad",
      desc: "Ruptura del equilibrio clásico: estallido del dolor, la vejez, la torsión anatómica y la teatralidad emocional.",
      milestone: "Laocoonte y sus hijos & Victoria alada de Samotracia."
    },
    {
      id: "roma-imperial",
      name: "Roma: Verismo & Monumento",
      years: "c. s. I a.C. – s. IV d.C.",
      color: "#c0392b",
      desc: "Retrato realista implacable (arrugas, calvicie, individualidad cívica) y relieve histórico propagandístico monumental.",
      milestone: "Columna de Trajano & Estatua ecuestre de Marco Aurelio."
    },
    {
      id: "medievo",
      name: "Medievo Románico & Gótico",
      years: "c. 1000 – 1400",
      color: "#27ae60",
      desc: "La piedra subordinada a la catedral. Tímpanos apocalípticos románicos que evolucionan hacia la gracia humanizada de las portadas góticas.",
      milestone: "Pórtico de la Gloria (Compostela) & Claus Sluter (El Pozo de Moisés)."
    },
    {
      id: "renacimiento",
      name: "Renacimiento Heroico",
      years: "c. 1400 – 1550",
      color: "#d97706",
      desc: "Resurrección del cuerpo humano desnudo y el espacio heroico. Donatello domina el bronce y Miguel Ángel conquista el mármol absoluto.",
      milestone: "David de Donatello (c. 1440) & Piedad y David de Miguel Ángel."
    },
    {
      id: "barroco",
      name: "Barroco & Ilusionismo Teatral",
      years: "c. 1600 – 1750",
      color: "#9333ea",
      desc: "Gian Lorenzo Bernini logra que la piedra dura ceda como cera blanda. Captura del instante climático en pleno movimiento extático.",
      milestone: "Apolo y Dafne (1625) & Éxtasis de Santa Teresa (1652)."
    },
    {
      id: "neoclasicismo-modernidad",
      name: "Neoclasicismo a Rodin",
      years: "c. 1750 – 1900",
      color: "#0284c7",
      desc: "De la pulcritud marmórea de Canova a la revolución visceral de Auguste Rodin y Camille Claudel: la carne viva y el non-finito moderno.",
      milestone: "Psique de Canova (1793) & El Pensador y El Vals (Rodin y Claudel)."
    },
    {
      id: "vanguardias-siglox",
      name: "Vanguardias & Espacio Moderno",
      years: "c. 1900 – El Presente",
      color: "#059669",
      desc: "Desmaterialización de la masa: Brâncuși busca la forma esencial, Giacometti reduce la figura a filamento y Calder inventa el móvil cinético.",
      milestone: "El Beso (Brâncuși), El Hombre que Camina (Giacometti), Móviles (Calder)."
    }
  ],

  // 3. EL DECODIFICADOR TÉCNICO INTERACTIVO (PROCEDIMIENTOS & CÁNONES)
  techniques: [
    {
      id: "sustractivo",
      name: "Método Sustractivo (Talla)",
      materials: ["Mármol de Carrara", "Alabastro", "Madera de nogal/cedro", "Caliza", "Granito"],
      tools: ["Puntero", "Gradina dentada", "Cincel plano", "Gubias", "Trépano (taladro de arco)", "Lijas de esmeril"],
      principle: "Quitar materia de un bloque mayor para liberar la forma interna. Es un proceso irreversible: un error de fractura puede arruinar meses de trabajo.",
      iconicExample: "Moisés de Miguel Ángel (Mármol de Carrara)"
    },
    {
      id: "aditivo",
      name: "Método Aditivo (Modelado)",
      materials: ["Arcilla (barro húmedo)", "Cera virgen", "Plastilina", "Escayola / Yeso"],
      tools: ["Armazón interno de alambre", "Palillos de boj", "Espátulas de modelado", "Vaciadores de fleje"],
      principle: "Construir masa agregando porciones progresivamente. Permite correcciones ilimitadas, búsqueda orgánica de texturas y huellas dactilares directas del artista.",
      iconicExample: "Bocetos preparatorios de Auguste Rodin y Terracotas de Bernini"
    },
    {
      id: "fundicion",
      name: "Fundición a la Cera Perdida (Bronce)",
      materials: ["Bronce (aleación 90% cobre + 10% estaño)", "Cera de abeja", "Lodo refractario"],
      tools: ["Horno de crisol", "Canales de colada y bebederos", "Soplete de pátinas", "Cinceles de repujado"],
      principle: "Modelar en cera, cubrir con molde refractario, derretir la cera y verter bronce líquido a 1,100 °C. La cera se pierde para siempre, creando una pieza metálica hueca y ligera.",
      iconicExample: "Perseo con la cabeza de Medusa de Benvenuto Cellini (1554)"
    },
    {
      id: "ensamblaje",
      name: "Ensamblaje, Forja & Cinetismo",
      materials: ["Acero corten", "Hierro forjado", "Alambre", "Chapas industriales", "Piedra suspendida"],
      tools: ["Soldadura autógena y de arco", "Remachadoras", "Yunque y fragua", "Contrapesos de precisión"],
      principle: "Unión de elementos preexistentes o industriales en el espacio. El aire, el viento y la gravedad pasan a ser componentes estructurales de la obra.",
      iconicExample: "El Peine del Viento de Eduardo Chillida & Móviles de Alexander Calder"
    }
  ],

  canons: [
    {
      id: "contrapposto",
      name: "Contrapposto (Contrapeso)",
      desc: "Principio griego por el cual el peso del cuerpo recae sobre una sola pierna (pierna de apoyo), mientras la otra queda relajada. Esto genera un balanceo natural en 'S' entre la cadera y los hombros.",
      inventor: "Policleto (siglo V a.C., El Doríforo)"
    },
    {
      id: "serpentinata",
      name: "Línea Serpentinata (Figura en Espiral)",
      desc: "Torsión helicoidal del cuerpo sobre su propio eje. Diseñada para obligar al espectador a rodear la escultura, ya que ningún ángulo individual permite abarcar la composición completa.",
      inventor: "Giambologna y Manieristas (El rapto de las sabinas, 1582)"
    },
    {
      id: "non-finito",
      name: "Non Finito (Lo Inacabado Expresivo)",
      desc: "Dejar partes de la figura fundidas en el bloque tosco de piedra sin desbastar, sugiriendo el combate entre la materia inerte y el espíritu que intenta escapar.",
      inventor: "Miguel Ángel Buonarroti (Los Cuatro Esclavos para la tumba de Julio II)"
    },
    {
      id: "patina",
      name: "La Pátina Química",
      desc: "Tratamiento con ácidos y calor aplicado a la superficie del bronce para generar coloraciones deliberadas: verde cardenillo, marrón tabaco, negro profundo o dorado bruñido.",
      inventor: "Fundidores renacentistas y Auguste Rodin"
    }
  ],

  // 4. LOS 20 TITANES DE LA ESCULTURA
  titans: [
    {
      id: "policleto",
      name: "Policleto de Argos",
      years: "c. 480 – 420 a.C.",
      era: "grecia-clasica",
      eraName: "Grecia Clásica",
      title: "El Padre del Canon y el Contrapposto",
      image: "assets/obras/doriforo-policleto.jpg",
      masterpiece: "El Doríforo (El Portador de Lanza, c. 440 a.C.)",
      material: "Bronce original (copias romanas en mármol)",
      technique: "Fundición a la cera perdida / Canon de proporciones",
      summary: "Escribió el primer tratado sobre las matemáticas del cuerpo humano (El Canon), fijando la proporción áurea donde la altura total equivale a 7 veces la cabeza. Su invención del contrapposto liberó a la escultura de la rigidez para siempre.",
      quote: "La belleza no reside en los elementos individuales, sino en la proporción simétrica de todas las partes entre sí."
    },
    {
      id: "fidias",
      name: "Fidias de Atenas",
      years: "c. 480 – 430 a.C.",
      era: "grecia-clasica",
      eraName: "Grecia Clásica",
      title: "El Escultor de los Dioses del Partenón",
      masterpiece: "Frisos y Frontones del Partenón (Acrópolis de Atenas)",
      material: "Mármol pentélico, oro y marfil (estatuas criselefantinas)",
      technique: "Talla directa con técnica de 'paños mojados'",
      summary: "Director artístico de la Acrópolis de Pericles. Creó la colosal Atenea Pártenos y el Zeus de Olimpia (una de las 7 Maravillas del Mundo Antiguo). Revolucionó la escultura al modelar túnicas que revelaban la anatomía como si estuvieran empapadas de agua.",
      quote: "No esculpo lo que veo, sino la idea divina que el alma contempla."
    },
    {
      id: "praxiteles",
      name: "Praxíteles",
      years: "c. 400 – 330 a.C.",
      era: "grecia-clasica",
      eraName: "Grecia Clásica / Tardoclásica",
      title: "El Maestro de la Curva Sensual",
      masterpiece: "Afrodita de Cnido & Hermes con el niño Dioniso",
      material: "Mármol de Paros pulido al encausto",
      technique: "Talla de mármol con curva praxiteliana",
      summary: "Esculpió el primer desnudo monumental femenino conocido en la historia occidental (la Afrodita de Cnido), rompiendo el tabú religioso de su tiempo. Su estilo suavizó las aristas del mármol dotándolo de una morbidez y sensualidad irrepetibles.",
      quote: "El mármol oculta un soplo vivo; solo hay que rozarlo con ternura para que respire."
    },
    {
      id: "taller-helenistico",
      name: "Agesandro, Atenodoro & Polidoro",
      years: "c. s. II – I a.C.",
      era: "helenismo",
      eraName: "Helenismo",
      title: "Los Virtuosos del Patetismo Trágico",
      image: "assets/obras/laocoonte.jpg",
      masterpiece: "Laocoonte y sus hijos (Museos Vaticanos)",
      material: "Mármol blanco",
      technique: "Talla tridimensional multifacial de alto dramatismo",
      summary: "Descubierto en Roma en 1506 en presencia del joven Miguel Ángel, este grupo escultórico conmocionó el Renacimiento. Retrata al sacerdote troyano y a sus hijos estrangulados por serpientes marinas con una maestría anatómica y agonía desgarradora.",
      quote: "La escultura helenística no busca la serenidad del dios, sino la catástrofe del hombre."
    },
    {
      id: "donatello",
      name: "Donatello (Donato di Niccolò)",
      years: "1386 – 1466",
      era: "renacimiento",
      eraName: "Primer Renacimiento",
      title: "El Resucitador del Desnudo Heroico",
      image: "assets/obras/david-donatello.jpg",
      masterpiece: "David de bronce (c. 1440, Museo del Bargello)",
      material: "Bronce fundido a la cera perdida con pátina oscura",
      technique: "Fundición hueca exenta y técnica del 'stiacciato'",
      summary: "El escultor más influyente del Quattrocento florentino. Su David en bronce fue el primer desnudo escultórico exento realizado en Europa en más de mil años. Además, inventó el 'stiacciato', técnica de relieve extremadamente fino con perspectiva pictórica.",
      quote: "La piedra no es un límite, es un espejo donde el hombre redescubre su alma."
    },
    {
      id: "miguel-angel",
      name: "Miguel Ángel Buonarroti",
      years: "1475 – 1564",
      era: "renacimiento",
      eraName: "Alto Renacimiento",
      title: "El Titán Supremo del Mármol de Carrara",
      image: "assets/obras/david-michelangelo.jpg",
      masterpiece: "Piedad del Vaticano (1499) & David (1504) & Moisés (1515)",
      material: "Mármol puro de Carrara",
      technique: "Talla directa con puntero, cincel y estética del Non Finito",
      summary: "Considerado unánimemente la cumbre de la escultura occidental. A los 24 años esculpió la Piedad, logrando que los pliegues y el cuerpo inerte de Cristo parecieran carne viva. Talló el David de un bloque dañado de 5 metros y exploró el dolor metafísico con sus Esclavos inacabados.",
      quote: "La escultura ya está completa dentro del bloque de mármol; mi única tarea es retirar la piedra que sobra."
    },
    {
      id: "cellini",
      name: "Benvenuto Cellini",
      years: "1500 – 1571",
      era: "renacimiento",
      eraName: "Manierismo",
      title: "El Orfebre Heroico del Bronce Monumental",
      image: "assets/obras/perseo-cellini.jpg",
      masterpiece: "Perseo con la cabeza de Medusa (1554, Piazza della Signoria)",
      material: "Bronce fundido",
      technique: "Fundición a la cera perdida de escala heroica",
      summary: "Orfebre, escultor y aventurero renacentista. Demostró que una escultura compleja de bronce con múltiples salientes podía fundirse de una sola colada. En su autobiografía narra la noche agónica en que alimentó el horno con sus muebles para salvar la fundición del Perseo.",
      quote: "Cuando el fuego consumió mi taller, arrojé todo el estaño que poseía al horno para que Perseo naciera."
    },
    {
      id: "giambologna",
      name: "Giambologna (Jean de Boulogne)",
      years: "1529 – 1608",
      era: "renacimiento",
      eraName: "Manierismo Tardío",
      title: "El Virtuoso de la Figura Serpentinata",
      image: "assets/obras/rapto-sabinas-giambologna.jpg",
      masterpiece: "El Rapto de las Sabinas (1582, Loggia dei Lanzi, Florencia)",
      material: "Un solo bloque monolítico de mármol de Carrara",
      technique: "Composición helicoidal de tres cuerpos entrelazados",
      summary: "Escultor de origen flamenco al servicio de los Médici. Logró la proeza técnica más audaz del Manierismo: entrelazar tres figuras humanas en una espiral ascendente sin ningún punto ciego, obligando al espectador a caminar alrededor de la obra.",
      quote: "Una escultura no tiene un frente: tiene infinitos frentes conectados por la espiral."
    },
    {
      id: "bernini",
      name: "Gian Lorenzo Bernini",
      years: "1598 – 1680",
      era: "barroco",
      eraName: "Barroco Romano",
      title: "El Mago Teatral del Mármol Transmutado",
      image: "assets/obras/apolo-dafne-bernini.jpg",
      masterpiece: "Apolo y Dafne (1625) & Éxtasis de Santa Teresa (1652)",
      material: "Mármol blanco, bronce dorado y alabastro",
      technique: "Pulido hiperrealista con textura epidérmica y claroscuro de talla",
      summary: "Transformó a Roma en el escenario teatral del Barroco. En 'Apolo y Dafne' capturó el segundo exacto en que los dedos de la ninfa se convierten en corteza y hojas de laurel. En el 'Éxtasis de Santa Teresa' fusionó escultura, arquitectura y luz celestial en una experiencia mística total.",
      quote: "He vencido al mármol y lo he hecho tan flexible como la cera; así he podido aproximar mi arte a la pintura."
    },
    {
      id: "canova",
      name: "Antonio Canova",
      years: "1757 – 1822",
      era: "neoclasicismo-modernidad",
      eraName: "Neoclasicismo",
      title: "El Poeta de la Gracia y la Pureza Impoluta",
      image: "assets/obras/psique-canova.jpg",
      masterpiece: "Psique reanimada por el beso del amor (1793, Museo del Louvre)",
      material: "Mármol de Carrara con acabado de cera ámbar",
      technique: "Talla neoclásica con composiciones en 'X' y pulido satinado",
      summary: "El escultor más aclamado de Europa durante la era napoleónica. Recuperó la serenidad clásica promovida por Winckelmann, logrando en 'Psique y Cupido' una composición aérea de alas abiertas y brazos entrelazados que desafían la densidad pesada de la roca.",
      quote: "La escultura debe ser acariciada con la mirada; su perfección radica en la suavidad de las transiciones."
    },
    {
      id: "rude",
      name: "François Rude",
      years: "1784 – 1855",
      era: "neoclasicismo-modernidad",
      eraName: "Romanticismo",
      title: "El Escultor de la Pasión Revolucionaria",
      masterpiece: "La partida de los voluntarios de 1792 (La Marsellesa, Arco del Triunfo)",
      material: "Piedra caliza monumental",
      technique: "Altorrelieve heroico con tensión anatómica dinámica",
      summary: "Puso fin a la frialdad neoclásica inyectando la furia viva del Romanticismo. Su relieve en el Arco de Triunfo de París, presidido por el genio alado de la guerra con la boca abierta en un grito ensordecedor, es la cumbre del relieve patriótico moderno.",
      quote: "¡A las armas! La piedra debe rugir como el pueblo en las barricadas."
    },
    {
      id: "rodin",
      name: "Auguste Rodin",
      years: "1840 – 1917",
      era: "neoclasicismo-modernidad",
      eraName: "Impresionismo / Inicio Moderno",
      title: "El Padre de la Escultura Moderna",
      image: "assets/obras/pensador-rodin.jpg",
      masterpiece: "El Pensador (1880) & Los Burgueses de Calais (1889) & Las Puertas del Infierno",
      material: "Bronce fundido con pátinas oscuras y yeso",
      technique: "Modelado expresivo en arcilla, luz rasante y accidentes de textura",
      summary: "Destruyó las poses académicas amaneradas para devolver la verdad cruda a la carne humana. Acusado erróneamente de vaciar del natural en 'La Edad de Bronce' por su hiperrealismo anatómico. Redescubrió el valor de la fragmentación corporal y la superficie vibrante.",
      quote: "El cuerpo es un molde donde las pasiones humanas imprimen su fuego; la belleza es el carácter visible de la verdad."
    },
    {
      id: "claudel",
      name: "Camille Claudel",
      years: "1864 – 1943",
      era: "neoclasicismo-modernidad",
      eraName: "Modernismo / Expresionismo",
      title: "La Genio del Movimiento Intimista y el Drama Trágico",
      masterpiece: "El Vals (1893) & La edad madura (1899, Museo de Orsay)",
      material: "Bronce patinado y mármol de ónice",
      technique: "Talla directa y modelado fluido con equilibrio inestable",
      summary: "Pionera indiscutible eclipsada históricamente por su mentor y amante Auguste Rodin. Claudel aportó una delicadeza y un equilibrio inestable sin precedentes al bronce. Su obra cumbre, 'El Vals', captura a dos bailarines suspendidos al borde de la gravedad con lirismo conmovedor.",
      quote: "Hay algo en mis figuras que no pertenece a nadie más: la rebelión contra el abismo que me devora."
    },
    {
      id: "brancusi",
      name: "Constantin Brâncuși",
      years: "1876 – 1957",
      era: "vanguardias-siglox",
      eraName: "Vanguardia / Abstracción Pura",
      title: "El Buscador de la Esencia Oculta de la Materia",
      image: "assets/obras/brancusi-beso.jpg",
      masterpiece: "El Beso (1908) & Pájaro en el espacio (1923) & La Columna del Infinito",
      material: "Mármol blanco, bronce pulido a espejo y madera de roble",
      technique: "Talla directa primordial y pulido reflectante absoluto",
      summary: "Rechazó trabajar como ayudante en el taller de Rodin declarando: 'Bajo la sombra de un gran roble nada puede crecer'. Despojó a la escultura de detalles superfluos para revelar la esencia geométrica primordial del pájaro, el beso y el huevo cósmico.",
      quote: "Lo que es real no es la apariencia externa, sino la idea que yace en el corazón de las cosas."
    },
    {
      id: "giacometti",
      name: "Alberto Giacometti",
      years: "1901 – 1966",
      era: "vanguardias-siglox",
      eraName: "Expresionismo Existencial",
      title: "El Poeta de la Fragilidad Humana y el Vacío",
      image: "assets/obras/giacometti-caminante.jpg",
      masterpiece: "El hombre que camina I (1960)",
      material: "Bronce fundido con textura corroída",
      technique: "Modelado sustractivo en yeso adelgazado al límite de la desintegración",
      summary: "Inspirado por el existencialismo de Sartre tras la Segunda Guerra Mundial, redujo la figura humana a siluetas filiformes, desnudas y corroídas. Sus hombres y mujeres parecen consumidos por el espacio circundante, simbolizando la soledad irremediable de la condición humana.",
      quote: "No esculpo al ser humano para mostrar su fuerza, sino para plasmar la sombra que deja en el vacío antes de desaparecer."
    },
    {
      id: "moore",
      name: "Henry Moore",
      years: "1898 – 1986",
      era: "vanguardias-siglox",
      eraName: "Modernismo Orgánico",
      title: "El Arquitecto del Hueco y las Formas Biológicas",
      image: "assets/obras/moore-figura.jpg",
      masterpiece: "Figuras Reclinadas (1938 – 1980) & Rey y Reina",
      material: "Bronce monumental, madera de olmo y piedra de Pórtland",
      technique: "Perforación de la masa sólida; integración del paisaje natural",
      summary: "Inspirado por las esculturas aztecas del Chac Mool y los guijarros erosionados por el mar, Moore convirtió el agujero y la perforación en el elemento protagonista de la escultura. Demostró que el espacio vacío tiene tanta presencia física como la masa sólida.",
      quote: "Un agujero en una escultura puede tener tanto significado formal como una masa sólida. El espacio es materia viva."
    },
    {
      id: "calder",
      name: "Alexander Calder",
      years: "1898 – 1976",
      era: "vanguardias-siglox",
      eraName: "Arte Cinético",
      title: "El Ingeniero del Movimiento Suspendido",
      masterpiece: "Móviles cinéticos (1932 – 1970) & Stábiles monumentales",
      material: "Chapa de acero esmaltada en colores primarios y alambre de acero",
      technique: "Equilibrio cinético por contrapeso y soldadura industrial",
      summary: "Ingeniero mecánico y artista. Marcel Duchamp bautizó sus esculturas colgantes como 'móviles'. Por primera vez en la historia del arte, la escultura abandonó el pedestal fijo para bailar con las corrientes de aire, incorporando el tiempo real y el azar al espacio.",
      quote: "La escultura no es un objeto muerto; debe flotar, reaccionar a una ráfaga de aire y dibujar el tiempo."
    },
    {
      id: "hepworth",
      name: "Barbara Hepworth",
      years: "1903 – 1975",
      era: "vanguardias-siglox",
      eraName: "Abstracción Británica",
      title: "La Perforadora Mística de la Luz y la Cuerda",
      masterpiece: "Pelagos (1946, Tate Gallery) & Formas individuales",
      material: "Madera de olmo ahuecada, cuerdas tensadas y bronce",
      technique: "Talla directa con oquedad interna policromada",
      summary: "Figura cumbre de la vanguardia británica en St Ives. Fue la primera en perforar un bloque de madera maciza para introducir cuerdas que conectaban los extremos del vacío, explorando la relación entre el cuerpo humano, la costa marina y el infinito.",
      quote: "Quiero absorber la luz dentro de la piedra, no solo dejar que resbale por su superficie."
    },
    {
      id: "bourgeois",
      name: "Louise Bourgeois",
      years: "1911 – 2010",
      era: "vanguardias-siglox",
      eraName: "Arte Contemporáneo",
      title: "La Arquitecta del Trauma y el Monumento Psicológico",
      image: "assets/obras/bourgeois-maman.jpg",
      masterpiece: "Maman (Araña monumental de bronce, 1999)",
      material: "Bronce, acero inoxidable, mármol y textiles",
      technique: "Fundición monumental, ensamblaje de celdas psicológicas",
      summary: "Revolucionó la escultura contemporánea al convertir el trauma infantil, la memoria y la maternidad en estructuras monumentales sobrecogedoras. Su gigantesca araña 'Maman' (de más de 9 metros de altura) rinde homenaje a su madre como tejedora y protectora.",
      quote: "La escultura es el único camino que tengo para exorcizar mis demonios y transformar el miedo en fuerza."
    },
    {
      id: "chillida",
      name: "Eduardo Chillida",
      years: "1924 – 2002",
      era: "vanguardias-siglox",
      eraName: "Siglo XX / Forja Contemporánea",
      title: "El Poeta del Hierro Forjado y el Límite Espacial",
      image: "assets/obras/chillida-peine.jpg",
      masterpiece: "El Peine del Viento (1977, San Sebastián) & Elogio del Horizonte",
      material: "Acero corten, granito y hormigón armado",
      technique: "Forja tradicional en caliente de vigas colosales de acero",
      summary: "El escultor español más universal de la segunda mitad del siglo XX. Con 'El Peine del Viento', incrustó colosales garras de acero en los acantilados del mar Cantábrico para atrapar el viento y las olas, transformando el paisaje natural en un santuario filosófico.",
      quote: "Yo no represento el espacio: lo construyo, lo interrogo y dejo que el viento hable a través de sus junturas."
    }
  ],

  // 5. HISTORIAS MATERIALES, CONTEXTO & MITOS DESMONTADOS
  stories: [
    {
      id: "historia-carrara-david",
      title: "El Bloque Maldito del David",
      tag: "Hecho Histórico Documentado",
      era: "Renacimiento (Florencia, 1501)",
      summary: "El bloque de mármol de más de 5 metros extraído en Carrara fue calificado de 'inservible' tras haber sido arruinado y abandonado durante casi 40 años por Agostino di Duccio. Miguel Ángel aceptó el reto en 1501 y adaptó la pose del héroe a la estrechez extrema del bloque, creando la obra cumbre del contrapposto renacentista."
    },
    {
      id: "historia-cellini-infierno",
      title: "La Noche Infernal de Benvenuto Cellini",
      tag: "Crónica de Taller Documentada",
      era: "Manierismo (Florencia, 1554)",
      summary: "Durante la fundición del 'Perseo con la cabeza de Medusa', el horno de Cellini se incendió, el maestro cayó con fiebre delirante y el metal comenzó a cuajarse prematuramente. Desesperado, Cellini ordenó arrojar al crisol más de doscientos platos, cuencos y sartenes de estaño de su casa para revivir la fluidez de la aleación, logrando una de las proezas metalúrgicas más asombrosas del siglo XVI."
    },
    {
      id: "historia-bernin-piel",
      title: "Bernini y el Secreto de la Carne Blanda",
      tag: "Revolución Técnica",
      era: "Barroco (Roma, 1622)",
      summary: "En 'El rapto de Proserpina', Bernini logró lo que ningún escultor de la antigüedad había conseguido: esculpir la presión de los dedos de Plutón hundiéndose literalmente en el muslo blando de Proserpina. El cardenal Maffeo Barberini declaró: 'El mármol tiembla y cede ante el cincel de este muchacho'."
    }
  ],

  // 5B. GALERÍA DE OBRAS MAESTRAS ESCULTÓRICAS (ALTA RESOLUCIÓN)
  galleryMasterpieces: [
  {
    "id": "david-michelangelo",
    "title": "David",
    "artist": "Miguel Ángel Buonarroti",
    "artistId": "miguel-angel",
    "era": "renacimiento",
    "eraCategory": "renacimiento",
    "year": "1501–1504",
    "material": "Mármol blanco de Carrara",
    "technique": "Sustractiva / Talla directa",
    "dimensions": "5.17 metros de altura",
    "location": "Galería de la Academia, Florencia, Italia",
    "image": "assets/obras/david-michelangelo.jpg",
    "highlight": "El desafío supremo a la gravedad y el cálculo perspectivo de la mirada baja.",
    "curatorialNote": "Tallado en un bloque de mármol de 5.5 metros abandonado y dañado 40 años antes por Agostino di Duccio. Miguel Ángel no esculpió el momento de la victoria, sino la tensión cerebral previa: las pupilas talladas en forma de corazón concentran la mirada, las venas de la mano derecha laten con adrenalina y la cabeza y manos están sobredimensionadas deliberadamente para compensar el escorzo visual desde el suelo."
  },
  {
    "id": "pieta-michelangelo",
    "title": "Piedad del Vaticano",
    "artist": "Miguel Ángel Buonarroti",
    "artistId": "miguel-angel",
    "era": "renacimiento",
    "eraCategory": "renacimiento",
    "year": "1498–1499",
    "material": "Mármol blanco de Carrara pulido al encausto",
    "technique": "Talla directa y pulido a espejo con piedra pómez",
    "dimensions": "174 cm × 195 cm",
    "location": "Basílica de San Pedro, Ciudad del Vaticano",
    "image": "assets/obras/pieta-michelangelo.jpg",
    "highlight": "La morbidez de la carne inerte sostenida sobre pliegues de monumentalidad piramidal.",
    "curatorialNote": "Esculpida por Miguel Ángel con apenas 23 años. Resolvió el problema compositivo de sostener un cadáver adulto masculino sobre el regazo de una mujer joven ampliando la cascada de paños del manto de la Virgen. Es la única obra firmada por el maestro (en la cinta transversal del pecho de María) tras escuchar que la atribuían a un escultor milanés."
  },
  {
    "id": "apolo-dafne-bernini",
    "title": "Apolo y Dafne",
    "artist": "Gian Lorenzo Bernini",
    "artistId": "bernini",
    "era": "barroco",
    "eraCategory": "barroco",
    "year": "1622–1625",
    "material": "Mármol de Carrara",
    "technique": "Talla sustractiva virtuosa con trépano profundo",
    "dimensions": "243 cm de altura",
    "location": "Galería Borghese, Roma, Italia",
    "image": "assets/obras/apolo-dafne-bernini.jpg",
    "highlight": "La metamorfosis vegetal del cuerpo humano atrapada en el instante milimétrico.",
    "curatorialNote": "Basada en las Metamorfosis de Ovidio. Bernini llevó la resistencia mecánica del mármol hasta el borde de la ruptura: los dedos de Dafne germinan en finísimas hojas de laurel que traslucen la luz con menos de dos milímetros de grosor, mientras sus pies echan raíces y la corteza envuelve su torso en pleno grito desesperado."
  },
  {
    "id": "rapto-proserpina-bernini",
    "title": "El Rapto de Proserpina",
    "artist": "Gian Lorenzo Bernini",
    "artistId": "bernini",
    "era": "barroco",
    "eraCategory": "barroco",
    "year": "1621–1622",
    "material": "Mármol de Carrara",
    "technique": "Talla barroca de textura epidérmica",
    "dimensions": "255 cm de altura",
    "location": "Galería Borghese, Roma, Italia",
    "image": "assets/obras/rapto-proserpina-bernini.jpg",
    "highlight": "El mármol volviéndose carne elástica bajo la presión de los dedos de Plutón.",
    "curatorialNote": "El detalle más legendario de la escultura universal: la mano de Plutón hundiendo sus dedos con fuerza brutal en el muslo suave de Proserpina, haciendo que el mármol rígido adquiera la consistencia física de la piel viva y deformable. La torsión contraria de los cuerpos desata un dinamismo violento que conmueve desde cualquier ángulo."
  },
  {
    "id": "extasis-teresa-bernini",
    "title": "El Éxtasis de Santa Teresa",
    "artist": "Gian Lorenzo Bernini",
    "artistId": "bernini",
    "era": "barroco",
    "eraCategory": "barroco",
    "year": "1647–1652",
    "material": "Mármol blanco, estuco dorado y jaspe policromado",
    "technique": "Instalación arquitectónica y teatral barroca",
    "dimensions": "350 cm de altura (grupo escultórico)",
    "location": "Capilla Cornaro, Santa Maria della Vittoria, Roma",
    "image": "assets/obras/extasis-teresa-bernini.jpg",
    "highlight": "La unión de arquitectura, escultura y luz natural en un teatro místico.",
    "curatorialNote": "Bernini diseñó la capilla entera como un escenario de ópera: rayos de bronce dorado descienden guiados por una ventana cenital oculta de cristal amarillo. El ángel sonriente sostiene la flecha ardiente mientras Santa Teresa levita sobre una nube de mármol rugoso, atrapada en una convulsión mística y sensual reflejada en los pliegues tempestuosos de su hábito."
  },
  {
    "id": "victoria-samotracia",
    "title": "Victoria Alada de Samotracia (Niké)",
    "artist": "Taller Helenístico de Rodas (Atribuida a Pitócrito)",
    "artistId": "taller-helenistico",
    "era": "grecia-clasica",
    "eraCategory": "antigua",
    "year": "c. 190 a.C.",
    "material": "Mármol de Paros (figura) y mármol gris de Lartos (proa)",
    "technique": "Talla helenística de paños mojados al viento",
    "dimensions": "5.57 metros de altura (con pedestal de proa)",
    "location": "Museo del Louvre, París, Francia",
    "image": "assets/obras/victoria-samotracia.jpg",
    "highlight": "El aire y la brisa marina esculpidos como materia física envolvente.",
    "curatorialNote": "Descubierta en 1863 en la isla de Samotracia por Charles Champoiseau. Representa a la diosa Niké posándose sobre la proa de un navío de guerra. A pesar de carecer de cabeza y brazos, su dinamismo eólico es insuperable: la túnica se ciñe contra el vientre por la violencia del vendaval marino, creando un vuelo que inspiró a futuristas y cineastas milenios después."
  },
  {
    "id": "venus-milo",
    "title": "Venus de Milo (Afrodita de Melos)",
    "artist": "Alejandro de Antioquía",
    "artistId": "praxiteles",
    "era": "grecia-clasica",
    "eraCategory": "antigua",
    "year": "c. 130–100 a.C.",
    "material": "Mármol de Paros (dos bloques ensamblados)",
    "technique": "Talla helenística con ensamblaje por espigas ocultas",
    "dimensions": "2.02 metros de altura",
    "location": "Museo del Louvre, París, Francia",
    "image": "assets/obras/venus-milo.jpg",
    "highlight": "La torsión sutil en S (curva praxiteliana) y el enigma del drapery cayendo.",
    "curatorialNote": "Descubierta en 1820 en la isla de Melos. Combina la serenidad clásica del siglo V a.C. con la sensualidad helenística tardía. El manto está a punto de resbalar de las caderas, sostenido únicamente por la curvatura de la pierna izquierda en flexión, obligando al ojo a rodear la silueta para anticipar la caída del paño."
  },
  {
    "id": "laocoonte",
    "title": "Laocoonte y sus hijos",
    "artist": "Agesandro, Atenodoro y Polidoro de Rodas",
    "artistId": "taller-helenistico",
    "era": "grecia-clasica",
    "eraCategory": "antigua",
    "year": "c. 40–20 a.C.",
    "material": "Mármol blanco",
    "technique": "Composición piramidal y expresión del pathos helenístico",
    "dimensions": "208 cm de altura",
    "location": "Museos Vaticanos, Roma",
    "image": "assets/obras/laocoonte.jpg",
    "highlight": "El dolor físico y la agonía espiritual tallados con anatomía hiper-expresiva.",
    "curatorialNote": "Desenterrada en Roma en 1506 en presencia del joven Miguel Ángel, esta obra sacudió el curso del arte europeo. El sacerdote troyano y sus vástagos son devorados por serpientes marinas enviadas por los dioses: los músculos tensos hasta la asfixia, las venas hinchadas y la boca abierta en un quejido agónico fundaron la estética moderna del dolor trágico."
  },
  {
    "id": "david-donatello",
    "title": "David en bronce",
    "artist": "Donatello (Donato di Niccolò)",
    "artistId": "donatello",
    "era": "renacimiento",
    "eraCategory": "renacimiento",
    "year": "c. 1440",
    "material": "Bronce fundido a la cera perdida con dorados originales",
    "technique": "Casting en bronce a la cera perdida",
    "dimensions": "158 cm de altura",
    "location": "Museo Nazionale del Bargello, Florencia, Italia",
    "image": "assets/obras/david-donatello.jpg",
    "highlight": "El primer desnudo masculino exento en bronce desde la caída del Imperio Romano.",
    "curatorialNote": "Encargado por Cosme de Médici para el patio del palacio familiar. Donatello rompió mil años de tabú medieval al representar a David como un adolescente desnudo, calzado únicamente con botas y un sombrero decorado con hojas de laurel. La pluma del yelmo de Goliat acaricia sensualmente la pierna del héroe, en un alarde de ambigüedad psicológica y maestría en metal."
  },
  {
    "id": "perseo-cellini",
    "title": "Perseo con la cabeza de Medusa",
    "artist": "Benvenuto Cellini",
    "artistId": "cellini",
    "era": "renacimiento",
    "eraCategory": "renacimiento",
    "year": "1545–1554",
    "material": "Bronce a la cera perdida sobre pedestal de mármol tallado",
    "technique": "Fundición monolítica en bronce a alta temperatura",
    "dimensions": "3.20 metros de altura (con pedestal)",
    "location": "Loggia dei Lanzi, Piazza della Signoria, Florencia",
    "image": "assets/obras/perseo-cellini.jpg",
    "highlight": "La hazaña pirotécnica y metalúrgica que desafió las leyes de la física renacentista.",
    "curatorialNote": "Cosme I de Médici apostó con Cellini que era imposible fundir de una sola colada una figura de bronce tan compleja con los brazos extendidos y sangre brotando. Cellini, postrado con fiebre de muerte, arrojó toda la vajilla de peltre de su casa al horno para licuar el metal y completó la colada milagrosamente en plena tormenta nocturna."
  },
  {
    "id": "rapto-sabinas-giambologna",
    "title": "El Rapto de las Sabinas",
    "artist": "Giambologna (Jean de Boulogne)",
    "artistId": "giambologna",
    "era": "renacimiento",
    "eraCategory": "renacimiento",
    "year": "1579–1583",
    "material": "Mármol blanco (un solo bloque colosal sin empalmes)",
    "technique": "Figura serpentinata helicoidal en espiral ascendente",
    "dimensions": "4.10 metros de altura",
    "location": "Loggia dei Lanzi, Florencia, Italia",
    "image": "assets/obras/rapto-sabinas-giambologna.jpg",
    "highlight": "La apoteosis de la espiral tridimensional: no posee ningún frente privilegiado.",
    "curatorialNote": "Giambologna esculpió esta pieza sin un tema mitológico previo, solo para demostrar a sus rivales que podía entrelazar tres figuras humanas en movimiento violento (anciano, joven romano y doncella sabina) a partir de un único bloque de mármol. Es el ejemplo cumbre de la figura serpentinata manierista: exige obligatoriamente rodearla en 360 grados para comprenderla."
  },
  {
    "id": "psique-canova",
    "title": "Psique reanimada por el beso del amor",
    "artist": "Antonio Canova",
    "artistId": "canova",
    "era": "neoclasicismo",
    "eraCategory": "neoclasico",
    "year": "1787–1793",
    "material": "Mármol blanco de Carrara finamente traslúcido",
    "technique": "Talla neoclásica con composición en X y alas al trasluz",
    "dimensions": "155 cm × 168 cm",
    "location": "Museo del Louvre, París, Francia",
    "image": "assets/obras/psique-canova.jpg",
    "highlight": "La composición en aspa cruzada y la ligereza del mármol desafiando la pesadez.",
    "curatorialNote": "Canova estructuró la obra sobre dos círculos entrelazados y una doble diagonal que forma una X espacial. El momento culminante es el acercamiento de los labios: las alas de Cupido actúan como contrapeso cinético y sus plumas son tan finas que el sol las atraviesa en el museo, logrando que el frío mármol respire poesía etérea."
  },
  {
    "id": "pensador-rodin",
    "title": "El Pensador (Le Penseur)",
    "artist": "Auguste Rodin",
    "artistId": "rodin",
    "era": "siglo-xix",
    "eraCategory": "neoclasico",
    "year": "1880–1904",
    "material": "Bronce a la cera perdida con pátina negra verdosa",
    "technique": "Modelado expresivo en arcilla y fundición en bronce",
    "dimensions": "186 cm de altura (versión monumental)",
    "location": "Musée Rodin, París, Francia",
    "image": "assets/obras/pensador-rodin.jpg",
    "highlight": "El pensamiento convertido en un acto de esfuerzo muscular y tensión física total.",
    "curatorialNote": "Originalmente concebido como Dante Alighieri contemplando los círculos del infierno en La Puerta del Infierno. Rodin transformó al poeta en un héroe proletario y visceral: no solo piensa con la mente, sino con los dedos crispados del pie, el codo clavado en la rodilla contraria y los músculos dorsales contraídos como si la idea pesara toneladas."
  },
  {
    "id": "beso-rodin",
    "title": "El Beso (Le Baiser)",
    "artist": "Auguste Rodin",
    "artistId": "rodin",
    "era": "siglo-xix",
    "eraCategory": "neoclasico",
    "year": "1882–1889",
    "material": "Mármol blanco sobre base tosca sin pulir (non-finito)",
    "technique": "Talla en mármol con contraste entre piel pulida y piedra bruta",
    "dimensions": "181 cm × 112 cm × 117 cm",
    "location": "Musée Rodin, París, Francia",
    "image": "assets/obras/beso-rodin.jpg",
    "highlight": "El contraste entre el bloque tosco terrenal y la entrega sensual de los amantes.",
    "curatorialNote": "Representa a Paolo Malatesta y Francesca da Rimini, condenados en el Infierno de Dante. Rodin prescinde de ropajes y atributos históricos: los labios apenas se rozan mientras la mano de Paolo descansa respetuosa sobre la cadera de Francesca, emergiendo ambos amantes de una roca rugosa que evoca la influencia directa del non-finito de Miguel Ángel."
  },
  {
    "id": "doriforo-policleto",
    "title": "El Doríforo (Copia romana)",
    "artist": "Policleto de Argos",
    "artistId": "policleto",
    "era": "grecia-clasica",
    "eraCategory": "antigua",
    "year": "c. 440 a.C.",
    "material": "Mármol blanco (copia del original en bronce)",
    "technique": "Canon Policlético de 7 cabezas y contrapposto clásico",
    "dimensions": "212 cm de altura",
    "location": "Museo Arqueológico Nacional de Nápoles, Italia",
    "image": "assets/obras/doriforo-policleto.jpg",
    "highlight": "El nacimiento de la postura dinámica en el arte occidental (quiásmo).",
    "curatorialNote": "La escultura teórica más influyente de la antigüedad. Estableció la postura en quiasmo o X: el peso descansa en la pierna derecha (tensa), liberando la izquierda (flexionada); a su vez, el brazo izquierdo sostiene la lanza (tenso), mientras el brazo derecho cuelga relajado. Esta compensación geométrica dotó al ser humano de una armonía viva."
  },
  {
    "id": "formas-continuidad-boccioni",
    "title": "Formas únicas de la continuidad en el espacio",
    "artist": "Umberto Boccioni",
    "artistId": "giacometti",
    "era": "vanguardias",
    "eraCategory": "moderno",
    "year": "1913",
    "material": "Bronce fundido pulido",
    "technique": "Escultura futurista de líneas-fuerza y dinamismo plástico",
    "dimensions": "111 cm de altura",
    "location": "Museo del Novecento, Milán / MoMA, Nueva York",
    "image": "assets/obras/formas-continuidad-boccioni.jpg",
    "highlight": "La aerodinámica de la velocidad fusionando el cuerpo con el viento que lo frena.",
    "curatorialNote": "Manifiesto tridimensional del Futurismo italiano. Boccioni descompone la figura humana en zancada no como un cuerpo cerrado, sino como una estela de vórtices y aletas aerodinámicas producidas por su paso veloz por la atmósfera, anticipando el diseño aeronáutico y la era de la máquina."
  },
  {
    "id": "brancusi-beso",
    "title": "La Columna del Infinito (Coloana Infinitului)",
    "artist": "Constantin Brâncuși",
    "artistId": "brancusi",
    "era": "vanguardias",
    "eraCategory": "moderno",
    "year": "1938",
    "material": "Hierro fundido revestido de latón",
    "technique": "Ensamblaje modular rítmico de 17 módulos romboidales",
    "dimensions": "29.33 metros de altura",
    "location": "Târgu Jiu, Rumanía",
    "image": "assets/obras/brancusi-beso.jpg?v=5",
    "highlight": "El eje vertical infinito que conecta la tierra con el cielo en ritmo geométrico puro.",
    "curatorialNote": "Obra cumbre de la escultura moderna. Brâncuși apiló módulos romboidales idénticos inspirados en los pilares tradicionales rumanos de madera, creando un tótem minimalista de casi 30 metros que parece prolongarse eternamente hacia el firmamento."
  },
  {
    "id": "calder-flamingo",
    "title": "Flamingo (Stabile Monumental)",
    "artist": "Alexander Calder",
    "artistId": "calder",
    "era": "siglo-xx",
    "eraCategory": "moderno",
    "year": "1974",
    "material": "Acero pintado en rojo bermellón (Calder Red)",
    "technique": "Escultura monumental de placas de acero soldadas (Stabile)",
    "dimensions": "16.2 metros de altura • 50 toneladas",
    "location": "Federal Plaza, Chicago, Estados Unidos",
    "image": "assets/obras/calder-flamingo.jpg?v=4",
    "highlight": "La ligereza orgánica y el vacío curvo desafiando 50 toneladas de acero.",
    "curatorialNote": "Calder revolucionó la escultura del siglo XX con sus móviles cinéticos y sus monumentales stabiles de acero. En Flamingo, enormes placas rojas se arquean sobre la plaza financiera de Chicago creando bóvedas por las que caminan los peatones, demostrando que la abstracción industrial puede dialogar con la escala humana y la alegría visual."
  },
  {
    "id": "moore-figura",
    "title": "Figura Reclinada (Reclining Figure)",
    "artist": "Henry Moore",
    "artistId": "moore",
    "era": "siglo-xx",
    "eraCategory": "moderno",
    "year": "1951",
    "material": "Bronce fundido con orificios orgánicos",
    "technique": "Escultura biomórfica con perforación del volumen interior",
    "dimensions": "228 cm de longitud",
    "location": "Tate Modern, Londres / Colecciones abiertas",
    "image": "assets/obras/moore-figura.jpg",
    "highlight": "La oquedad y el agujero como protagonistas escultóricos activos.",
    "curatorialNote": "Moore comprendió que el vacío y el agujero pueden ser más elocuentes que la materia sólida. Inspirado por las chac mool mesoamericanas y las colinas erosionadas de Yorkshire, sus figuras reclinadas abren túneles a través del torso para permitir que el paisaje exterior pase a través de la escultura, fundiendo cuerpo y naturaleza."
  },
  {
    "id": "chillida-peine",
    "title": "El Peine del Viento (Haizearen orrazia)",
    "artist": "Eduardo Chillida",
    "artistId": "chillida",
    "era": "arte-contemporaneo",
    "eraCategory": "moderno",
    "year": "1977",
    "material": "Acero corten anclado en roca viva marina",
    "technique": "Forja monumental de acero y escultura pública site-specific",
    "dimensions": "3 estructuras monumentales de 10 toneladas cada una",
    "location": "Bahía de La Concha, San Sebastián, España",
    "image": "assets/obras/chillida-peine.jpg",
    "highlight": "El hierro abrazando los acantilados marinos en combate con el oleaje del Atlántico.",
    "curatorialNote": "Chillida no colocó una escultura sobre un pedestal en un museo: transformó la costa cantábrica en un templo abierto. Las tres garras de acero corten oxidado peinan el viento furioso del mar antes de que entre a la ciudad, demostrando cómo la escultura contemporánea interroga el horizonte y la gravedad cósmica."
  },
  {
    "id": "bourgeois-maman",
    "title": "Maman",
    "artist": "Louise Bourgeois",
    "artistId": "bourgeois",
    "era": "arte-contemporaneo",
    "eraCategory": "moderno",
    "year": "1999",
    "material": "Bronce, acero inoxidable y 32 huevos de mármol",
    "technique": "Estructura arquitectónica arácnida monumental",
    "dimensions": "9.27 × 8.91 × 10.24 metros",
    "location": "Tate Modern, Londres / Museo Guggenheim Bilbao",
    "image": "assets/obras/bourgeois-maman.jpg",
    "highlight": "La madre tejedora convertida en un monumento colosal de protección y terror.",
    "curatorialNote": "Creada por Bourgeois a sus 88 años como homenaje a su madre, tejedora y restauradora de tapices. La araña gigante se sostiene sobre ocho patas filiformes y amenazantes que forman una bóveda bajo la cual el espectador puede caminar, albergando en su vientre una bolsa de malla con huevos de mármol blanco: símbolo universal de fragilidad y maternidad protectora."
  }
],

  // 6. LABORATORIO DE APRECIACIÓN ESPACIAL 360°
  viewingLab: {
    steps: [
      {
        step: 1,
        title: "El Rodeo Espacial (360°)",
        instruction: "Nunca observes una escultura desde un solo punto fijo. Camina a su alrededor: descubre cómo los perfiles cambian, cómo los brazos se abren o se cierran y cómo la obra dialoga con el vacío circundante."
      },
      {
        step: 2,
        title: "El Centro de Gravedad & Apoyo",
        instruction: "Identifica cómo sostiene la obra su masa contra el suelo. ¿Posee contrapposto? ¿Parece ingrávida como el David o pesada y anclada a la tierra como un ídolo egipcio?"
      },
      {
        step: 3,
        title: "Luz Rasante & Textura Epidérmica",
        instruction: "Analiza la superficie bajo la luz. ¿El mármol está pulido a espejo para reflejar destellos suaves o conserva las estrías del cincel y la rugosidad expresiva del non-finito?"
      },
      {
        step: 4,
        title: "La Escala y el Diálogo con el Entorno",
        instruction: "Evalúa cómo se relaciona el tamaño de la obra con tu propio cuerpo. ¿Es una pieza íntima de gabinete para sostener con las manos o un coloso monumental diseñado para intimidar y conmover?"
      }
    ]
  }
};

// Exportar globalmente para el navegador
if (typeof window !== "undefined") {
  window.ESCULTURA_DATA = ESCULTURA_DATA;
}
