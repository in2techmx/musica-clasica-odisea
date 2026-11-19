/**
 * LISTENING-GUIDE.JS
 * Ecosistema IN2TECHMX — Odisea de la Música Clásica
 * Guía de Audición Recomendada por Autor y Etapa Creativa con enlaces gratuitos
 * deterministas a YouTube y bibliotecas de audio/partituras libres (IMSLP / Internet Archive).
 */

function buildYouTubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function buildFreeArchiveUrl(query) {
  return `https://archive.org/search?query=${encodeURIComponent(query)}&and[]=mediatype:audio`;
}

function buildSpotifySearchUrl(query) {
  return `https://open.spotify.com/search/${encodeURIComponent(query)}`;
}

const LISTENING_GUIDE_BY_COMPOSER = {
  "guido-darezzo": [
    [
      {
        title: "Himno 'Ut queant laxis' (Canto Gregoriano)",
        duration: "~3 min",
        whyListen: "Escucha cómo cada verso asciende exactamente un grado de la escala: de sus primeras sílabas (Ut, Re, Mi, Fa, Sol, La) nació el solfeo occidental.",
        ytQuery: "Ut queant laxis Guido d'Arezzo gregorian chant",
        archiveQuery: "Ut queant laxis",
        freeLabel: "Archive Audio",
        useArchive: true
      },
      {
        title: "Antífonas Monásticas en Tetragrama",
        duration: "~4 min",
        whyListen: "Percibe la pureza del unísono sin acompañamiento: la melodía flota libremente siguiendo la acentuación natural del latín.",
        ytQuery: "Gregorian chant medieval monastery antiphon",
        archiveQuery: "Gregorian chant antiphon",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ],
    [
      {
        title: "Demostración de la Mano Guidoniana y Hexacordos",
        duration: "~5 min",
        whyListen: "Observa cómo Guido convirtió la palma de la mano en el primer mapa visual interactivo para leer música a primera vista.",
        ytQuery: "Guidonian hand solmization demonstration early music",
        archiveQuery: "Guido d'Arezzo Micrologus",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "hildegarda-von-bingen": [
    [
      {
        title: "O Viridissima Virga (Antífona a la Virgen)",
        duration: "~4 min",
        whyListen: "Nota los saltos melódicos amplísimos (más de una octava) que rompen la contención del canto gregoriano tradicional.",
        ytQuery: "Hildegard von Bingen O Viridissima Virga Sequentia",
        archiveQuery: "Hildegard von Bingen O viridissima virga",
        freeLabel: "Archive Audio",
        useArchive: true
      },
      {
        title: "Columba Aspexit (Secuencia a San Maximino)",
        duration: "~6 min",
        whyListen: "Escucha el bordón grave sostenido mientras la voz femenina asciende en arcos extáticos sobre una sola sílaba (melisma).",
        ytQuery: "Hildegard von Bingen Columba Aspexit Gothic Voices",
        archiveQuery: "Hildegard von Bingen Columba aspexit",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ],
    [
      {
        title: "Ordo Virtutum (Drama Litúrgico Completo — Selección)",
        duration: "~12 min",
        whyListen: "El drama musical más antiguo conservado: todas las Virtudes cantan melodías celestiales, mientras el Diablo solo puede gritar sin música.",
        ytQuery: "Hildegard von Bingen Ordo Virtutum Sequentia",
        archiveQuery: "Hildegard von Bingen Ordo Virtutum",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "O Virtus Sapientiae",
        duration: "~3 min",
        whyListen: "Símbolo de su madurez en Rupertsberg: una arquitectura vocal luminosa que parece resonar en las bóvedas de piedra del Rin.",
        ytQuery: "Hildegard von Bingen O Virtus Sapientiae",
        archiveQuery: "Hildegard von Bingen Symphonia",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "leonin-perotin": [
    [
      {
        title: "Léonin: Viderunt Omnes (Organum a 2 voces)",
        duration: "~7 min",
        whyListen: "Escucha la voz grave alargando cada nota como una columna de piedra mientras la voz aguda teje arabescos rápidos encima.",
        ytQuery: "Leonin Viderunt Omnes Organum duplum",
        archiveQuery: "Leonin Magnus Liber Organi",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Pérotin: Viderunt Omnes (Organum Quadruplum a 4 voces, 1198)",
        duration: "~11 min",
        whyListen: "El Big Bang de la polifonía occidental: cuatro voces entrelazadas con pulso rítmico hipnótico que anticipa el minimalismo 750 años antes.",
        ytQuery: "Perotin Viderunt Omnes Hilliard Ensemble",
        archiveQuery: "Perotin Viderunt omnes",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Pérotin: Sederunt Principes (a 4 voces)",
        duration: "~11 min",
        whyListen: "Presta atención a los choques disonantes que resuelven en quintas abiertas vacías: el sonido exacto de la Catedral de Notre Dame recién construida.",
        ytQuery: "Perotin Sederunt Principes Hilliard Ensemble",
        archiveQuery: "Perotin Sederunt principes",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "josquin-des-prez": [
    [
      {
        title: "Ave Maria... Virgo Serena (Motete a 4 voces)",
        duration: "~6 min",
        whyListen: "Escucha cómo cada voz entra imitando exactamente la melodía anterior con transparencia cristalina: la obra que definió el Renacimiento.",
        ytQuery: "Josquin des Prez Ave Maria Virgo Serena Tallis Scholars",
        archiveQuery: "Josquin des Prez Ave Maria",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "El Grillo (Frottola secular italiana)",
        duration: "~2 min",
        whyListen: "Humor renacentista puro: las voces imitan el canto rítmico de un grillo mientras Josquin se burla de los cantantes de corte.",
        ytQuery: "Josquin des Prez El Grillo vocal ensemble",
        archiveQuery: "Josquin des Prez El Grillo",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Missa Pange Lingua (Kyrie y Agnus Dei)",
        duration: "~10 min",
        whyListen: "Su testamento espiritual: toda la misa brota de un solo himno medieval transformado con una serenidad humanista conmovedora.",
        ytQuery: "Josquin des Prez Missa Pange Lingua Tallis Scholars",
        archiveQuery: "Josquin des Prez Missa Pange lingua",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Mille Regretz (La Canción del Emperador Carlos V)",
        duration: "~3 min",
        whyListen: "Sencillez desgarradora: cuatro voces en caída descendente que expresan la nostalgia más íntima de la corte imperial.",
        ytQuery: "Josquin des Prez Mille Regretz",
        archiveQuery: "Josquin des Prez Mille regretz",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "palestrina": [
    [
      {
        title: "Sicut Cervus (Motete a 4 voces)",
        duration: "~4 min",
        whyListen: "La definición de la 'curva palestriniana': las melodías suben y bajan con suavidad líquida, sin saltos bruscos ni disonancias sin preparar.",
        ytQuery: "Palestrina Sicut Cervus Cambridge Singers",
        archiveQuery: "Palestrina Sicut cervus",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Missa Papae Marcelli (Gloria y Credo)",
        duration: "~14 min",
        whyListen: "La misa que salvó a la polifonía en el Concilio de Trento: escucha cómo el texto latino se entiende con total claridad pese a sonar a 6 voces.",
        ytQuery: "Palestrina Missa Papae Marcelli Tallis Scholars",
        archiveQuery: "Palestrina Missa Papae Marcelli",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Stabat Mater (a doble coro de 8 voces)",
        duration: "~11 min",
        whyListen: "Dos coros dialogando en el espacio con acordes puros que Richard Wagner admiró siglos después por su dramatismo contenido.",
        ytQuery: "Palestrina Stabat Mater Tallis Scholars",
        archiveQuery: "Palestrina Stabat Mater",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "bach": [
    [
      {
        title: "Toccata y Fuga en Re menor, BWV 565",
        duration: "~9 min",
        whyListen: "El Bach joven y volcánico de Weimar: contrasta la teatralidad gótica del inicio con el rigor geométrico de la fuga a cuatro voces.",
        ytQuery: "Bach Toccata and Fugue in D minor BWV 565 Karl Richter organ",
        archiveQuery: "Bach BWV 565",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Passacaglia y Fuga en Do menor, BWV 582",
        duration: "~14 min",
        whyListen: "20 variaciones monumentales construidas sobre un solo tema de 8 compases en el pedal grave del órgano.",
        ytQuery: "Bach Passacaglia and Fugue in C minor BWV 582 organ",
        archiveQuery: "Bach BWV 582",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Conciertos de Brandeburgo n.º 3 y n.º 5, BWV 1048 & 1050",
        duration: "~12 min",
        whyListen: "La explosión secular de Cöthen: en el n.º 5 escucha la primera gran cadenza solista de clavecín de la historia.",
        ytQuery: "Bach Brandenburg Concerto No 3 BWV 1048 Freiburg Baroque",
        archiveQuery: "Bach Brandenburg Concertos BWV 1048",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Suite para Violonchelo Solo n.º 1 en Sol mayor, BWV 1007 (Preludio)",
        duration: "~3 min",
        whyListen: "Un solo instrumento de cuerda crea la ilusión acústica de armonía completa mediante arpegios continuos.",
        ytQuery: "Bach Cello Suite No 1 Prelude BWV 1007 Yo-Yo Ma",
        archiveQuery: "Bach Cello Suite BWV 1007",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Pasión según San Mateo, BWV 244 (Coro Inicial: Kommt, ihr Töchter)",
        duration: "~8 min",
        whyListen: "La cumbre sacra de Leipzig: doble orquesta, doble coro y un coro infantil entonando un coral sobre el lamento colectivo.",
        ytQuery: "Bach St Matthew Passion BWV 244 Kommt ihr Tochter Gardiner",
        archiveQuery: "Bach BWV 244",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Variaciones Goldberg, BWV 988 (Aria y Variaciones 1–5)",
        duration: "~10 min",
        whyListen: "Arquitectura matemática suprema: 30 variaciones y cánones que regresan al Aria inicial como un círculo perfecto.",
        ytQuery: "Bach Goldberg Variations BWV 988 Glenn Gould 1981",
        archiveQuery: "Bach Goldberg Variations BWV 988",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "vivaldi": [
    [
      {
        title: "L'Estro Armonico, Op. 3 n.º 8 en La menor (RV 522)",
        duration: "~11 min",
        whyListen: "La obra que deslumbró al propio Bach: escucha la energía motora del ritmo veneciano y el diálogo eléctrico entre dos violines.",
        ytQuery: "Vivaldi L'Estro Armonico Op 3 No 8 RV 522",
        archiveQuery: "Vivaldi Op.3 RV 522",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Gloria en Re mayor, RV 589 (1. Gloria in excelsis Deo)",
        duration: "~3 min",
        whyListen: "Escrito para las jóvenes huérfanas del Ospedale della Pietà: júbilo luminoso con trompetas y cuerdas centelleantes.",
        ytQuery: "Vivaldi Gloria RV 589 John Eliot Gardiner",
        archiveQuery: "Vivaldi Gloria RV 589",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Las Cuatro Estaciones: El Verano (RV 315, 3er mov. Presto)",
        duration: "~3 min",
        whyListen: "El primer 'heavy metal' acústico de la historia: una tormenta de granizo pintada únicamente con arcos y escalas vertiginosas.",
        ytQuery: "Vivaldi Four Seasons Summer Presto RV 315",
        archiveQuery: "Vivaldi Four Seasons RV 315",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Las Cuatro Estaciones: El Invierno (RV 297)",
        duration: "~9 min",
        whyListen: "Escucha el tiritar helado en las disonancias iniciales y la lluvia golpeando la ventana en el pizzicato del movimiento lento.",
        ytQuery: "Vivaldi Four Seasons Winter RV 297 Giuliano Carmignola",
        archiveQuery: "Vivaldi Four Seasons RV 297",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Concierto para Laúd en Re mayor, RV 93 (2º mov. Largo)",
        duration: "~5 min",
        whyListen: "El Vivaldi crepuscular e íntimo: una melodía melancólica de elegancia camerística que contrasta con su fama virtuosa.",
        ytQuery: "Vivaldi Lute Concerto in D major RV 93 Largo",
        archiveQuery: "Vivaldi RV 93",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "handel": [
    [
      {
        title: "Música Acuática (Water Music), Suite en Re mayor HWV 349 (Alla Hornpipe)",
        duration: "~4 min",
        whyListen: "Compuesta para sonar en una barcaza sobre el río Támesis ante el Rey Jorge I: esplendor de trompas y trompetas al aire libre.",
        ytQuery: "Handel Water Music Alla Hornpipe HWV 349",
        archiveQuery: "Handel Water Music HWV 349",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Rinaldo, HWV 7 — Aria 'Lascia ch'io pianga'",
        duration: "~5 min",
        whyListen: "La perfección de la ópera seria italiana en Londres: una súplica dolorosa construida con una sencillez melódica inmortal.",
        ytQuery: "Handel Lascia ch'io pianga Rinaldo",
        archiveQuery: "Handel Rinaldo HWV 7",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "El Mesías, HWV 56 — Coro 'Aleluya' (Hallelujah)",
        duration: "~4 min",
        whyListen: "Escrito en solo 24 días: fusiona el contrapunto alemán, la claridad coral inglesa y el teatro italiano en el clímax barroco definitivo.",
        ytQuery: "Handel Messiah Hallelujah Chorus HWV 56",
        archiveQuery: "Handel Messiah HWV 56",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Zadok the Priest, HWV 258 (Himno de Coronación)",
        duration: "~6 min",
        whyListen: "Un crescendo orquestal de suspenso que explota en un coro monumental; usado en cada coronación británica desde 1727.",
        ytQuery: "Handel Zadok the Priest HWV 258",
        archiveQuery: "Handel Zadok the Priest HWV 258",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "haydn": [
    [
      {
        title: "Sinfonía n.º 45 en Fa sostenido menor 'De los Adioses', Hob. I:45",
        duration: "~24 min",
        whyListen: "En el último movimiento los músicos van apagando sus velas y abandonando el escenario uno a uno: una protesta diplomática genial ante el príncipe Esterházy.",
        ytQuery: "Haydn Symphony No 45 Farewell Hob I 45",
        archiveQuery: "Haydn Symphony 45",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Sinfonía n.º 94 en Sol mayor 'La Sorpresa', Hob. I:94 (2º mov. Andante)",
        duration: "~6 min",
        whyListen: "El humor ilustrado de Haydn: tras una melodía inocente y susurrada, un golpe fortissimo de toda la orquesta despierta al público londinense.",
        ytQuery: "Haydn Symphony No 94 Surprise 2nd movement",
        archiveQuery: "Haydn Symphony 94",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Cuarteto de Cuerdas Op. 76 n.º 3 'El Emperador' (2º mov. Poco adagio)",
        duration: "~7 min",
        whyListen: "El modelo eterno del cuarteto de cuerdas: cuatro instrumentos conversando como cuatro personas inteligentes en igualdad absoluta.",
        ytQuery: "Haydn String Quartet Op 76 No 3 Emperor 2nd movement",
        archiveQuery: "Haydn Op.76 No.3",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "mozart": [
    [
      {
        title: "Sinfonía n.º 25 en Sol menor, K. 183 (1er mov. Allegro con brio)",
        duration: "~7 min",
        whyListen: "Escrita a los 17 años: olvida al Mozart 'infantil'; aquí estalla una tormenta trágica de síncopas nerviosas (famosa por abrir el filme 'Amadeus').",
        ytQuery: "Mozart Symphony No 25 in G minor K 183 1st movement",
        archiveQuery: "Mozart Symphony 25 K.183",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Concierto para Violín n.º 5 en La mayor 'Turco', K. 219",
        duration: "~28 min",
        whyListen: "Gracia cortesana de Salzburgo interrumpida de golpe por un episodio exótico a la turca lleno de fuego y audacia.",
        ytQuery: "Mozart Violin Concerto No 5 K 219 Hilary Hahn",
        archiveQuery: "Mozart Violin Concerto K.219",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Concierto para Piano n.º 20 en Re menor, K. 466",
        duration: "~30 min",
        whyListen: "El Mozart vienés libre e independiente: oscuro, demoníaco y pre-romántico; el concierto favorito del propio Beethoven.",
        ytQuery: "Mozart Piano Concerto No 20 in D minor K 466 Mitsuko Uchida",
        archiveQuery: "Mozart Piano Concerto K.466",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Réquiem en Re menor, K. 626 (Dies Irae y Lacrimosa)",
        duration: "~6 min",
        whyListen: "Su testamento inacabado en el lecho de muerte: terror apocalíptico seguido por el llanto polifónico más desgarrador de la historia.",
        ytQuery: "Mozart Requiem K 626 Dies Irae Lacrimosa",
        archiveQuery: "Mozart Requiem K.626",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "beethoven": [
    [
      {
        title: "Sonata para Piano n.º 8 'Patética', Op. 13 (1er mov. Grave – Allegro)",
        duration: "~9 min",
        whyListen: "El joven Beethoven desafiando a Viena: un acorde trágico demoledor que anuncia la ruptura definitiva con la cortesía clásica.",
        ytQuery: "Beethoven Piano Sonata No 8 Pathetique Op 13 Barenboim",
        archiveQuery: "Beethoven Sonata Op.13",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Sinfonía n.º 5 en Do menor, Op. 67 (1er y 4º movimientos)",
        duration: "~16 min",
        whyListen: "El arquetipo del Periodo Heroico: una célula de 4 notas lucha contra la oscuridad hasta estallar en el triunfo luminoso de Do mayor.",
        ytQuery: "Beethoven Symphony No 5 Op 67 Carlos Kleiber",
        archiveQuery: "Beethoven Symphony No.5 Op.67",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Sinfonía n.º 3 'Heroica', Op. 55 (1er mov. Allegro con brio)",
        duration: "~15 min",
        whyListen: "Dos latigazos secos abren la puerta del siglo XIX: duplicó la duración y la ambición filosófica de toda sinfonía anterior.",
        ytQuery: "Beethoven Symphony No 3 Eroica Op 55",
        archiveQuery: "Beethoven Symphony No.3 Op.55",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Sinfonía n.º 9 'Coral', Op. 125 (4º mov. Oda a la Alegría)",
        duration: "~24 min",
        whyListen: "Compuesta completamente sordo: rompe la sinfonía instrumental al introducir voces humanas cantando la hermandad universal.",
        ytQuery: "Beethoven Symphony No 9 4th movement Ode to Joy",
        archiveQuery: "Beethoven Symphony No.9 Op.125",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Cuarteto de Cuerdas n.º 14 en Do sostenido menor, Op. 131",
        duration: "~38 min",
        whyListen: "El Beethoven místico y visionario del final: siete movimientos encadenados sin pausa que parecen venir de otro planeta.",
        ytQuery: "Beethoven String Quartet No 14 Op 131",
        archiveQuery: "Beethoven String Quartet Op.131",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "chopin": [
    [
      {
        title: "Concierto para Piano n.º 1 en Mi menor, Op. 11 (2º mov. Romanze)",
        duration: "~10 min",
        whyListen: "Escrito a los 20 años antes de partir de Polonia para siempre: un nocturno bañado en luz de luna que anticipa toda su poesía pianística.",
        ytQuery: "Chopin Piano Concerto No 1 Op 11 2nd movement Zimerman",
        archiveQuery: "Chopin Op.11",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Balada n.º 1 en Sol menor, Op. 23",
        duration: "~9 min",
        whyListen: "Un drama épico de 9 minutos en un solo instrumento: pasa de la confesión más tierna a una tormenta trágica de virtuosismo desatado.",
        ytQuery: "Chopin Ballade No 1 in G minor Op 23 Krystian Zimerman",
        archiveQuery: "Chopin Ballade Op.23",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Nocturno en Mi bemol mayor, Op. 9 n.º 2 & Estudio 'Revolucionario' Op. 10 n.º 12",
        duration: "~7 min",
        whyListen: "Las dos caras del París romántico: el lirismo belcantista del salón frente a la rabia patriótica por la caída de Varsovia.",
        ytQuery: "Chopin Revolutionary Etude Op 10 No 12",
        archiveQuery: "Chopin Op.10 No.12",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "tchaikovsky": [
    [
      {
        title: "Concierto para Piano n.º 1 en Si bemol menor, Op. 23 (1er mov.)",
        duration: "~20 min",
        whyListen: "Esos acordes iniciales colosales entre las trompas y el piano se convirtieron en el emblema del lirismo sinfónico ruso.",
        ytQuery: "Tchaikovsky Piano Concerto No 1 Op 23 Martha Argerich",
        archiveQuery: "Tchaikovsky Piano Concerto Op.23",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "Obertura-Fantasía 'Romeo y Julieta'",
        duration: "~19 min",
        whyListen: "Contrasta los choques de espadas entre clanes con el tema de amor más famoso y arrebatador del siglo XIX.",
        ytQuery: "Tchaikovsky Romeo and Juliet Fantasy Overture",
        archiveQuery: "Tchaikovsky Romeo and Juliet",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Sinfonía n.º 6 'Patética', Op. 74 (4º mov. Adagio lamentoso)",
        duration: "~10 min",
        whyListen: "En lugar de terminar con fanfarrias triunfales, la sinfonía muere lentamente en un susurro de contrabajos como un latido que se apaga.",
        ytQuery: "Tchaikovsky Symphony No 6 Pathetique 4th movement",
        archiveQuery: "Tchaikovsky Symphony No.6 Op.74",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "El Lago de los Cisnes, Op. 20 (Escena Final / Tema del Cisne)",
        duration: "~4 min",
        whyListen: "Elevó la música de ballet de simple acompañamiento de danza a tragedia sinfónica de primer orden.",
        ytQuery: "Tchaikovsky Swan Lake Theme Op 20",
        archiveQuery: "Tchaikovsky Swan Lake Op.20",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "wagner": [
    [
      {
        title: "Obertura de 'Tannhäuser', WWV 70",
        duration: "~14 min",
        whyListen: "La lucha entre el coro solemne de los peregrinos y la sensualidad febril de Venus: el joven Wagner ya domina el teatro sinfónico.",
        ytQuery: "Wagner Tannhauser Overture Berlin Philharmonic",
        archiveQuery: "Wagner Tannhauser WWV 70",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Tristán e Isolda — Preludio y Liebestod (Muerte de Amor), WWV 90",
        duration: "~18 min",
        whyListen: "Escucha el célebre 'Acorde de Tristán' en el segundo 0:04: un deseo armónico que evita resolver durante horas y cambió la historia de la armonía.",
        ytQuery: "Wagner Tristan und Isolde Prelude and Liebestod",
        archiveQuery: "Wagner Tristan und Isolde WWV 90",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "La Valquiria — Cabalgata de las Valquirias, WWV 86B",
        duration: "~5 min",
        whyListen: "Poderío de los metales wagnerianos y uso magistral del Leitmotiv (motivo conductor), la técnica directa que heredó el cine épico.",
        ytQuery: "Wagner Ride of the Valkyries full orchestra",
        archiveQuery: "Wagner Die Walkure WWV 86B",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "debussy": [
    [
      {
        title: "Clair de Lune (Suite Bergamasque, L. 75)",
        duration: "~5 min",
        whyListen: "Su etapa juvenil todavía cercana a la tradición francesa, pero ya bañada en acordes suspendidos que disuelven el pulso rígido.",
        ytQuery: "Debussy Clair de Lune Francois-Joel Thiollier",
        archiveQuery: "Debussy Suite bergamasque",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Preludio a la Siesta de un Fauno, L. 86",
        duration: "~10 min",
        whyListen: "Ese solo inicial de flauta en tono brumoso inauguró oficialmente la música moderna del siglo XX (según Pierre Boulez).",
        ytQuery: "Debussy Prelude a l'apres-midi d'un faune",
        archiveQuery: "Debussy Prelude a l'apres-midi d'un faune",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "La Mer (Tres Esbozos Sinfónicos), L. 109",
        duration: "~24 min",
        whyListen: "Escucha cómo la orquesta no 'describe' el mar con melodías fijas, sino con destellos de arpa, timbales y olas de color tímbrico.",
        ytQuery: "Debussy La Mer Berliner Philharmoniker",
        archiveQuery: "Debussy La Mer L.109",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "stravinsky": [
    [
      {
        title: "La Consagración de la Primavera (Danza de los Adolescentes & Danza Sacrificial)",
        duration: "~9 min",
        whyListen: "El estreno que provocó un motín en París (1913): acordes politonales martillados con acentos irregulares que liberaron al ritmo para siempre.",
        ytQuery: "Stravinsky Rite of Spring London Symphony Orchestra",
        archiveQuery: "Stravinsky Rite of Spring",
        freeLabel: "IMSLP",
        useArchive: false
      },
      {
        title: "El Pájaro de Fuego (Final)",
        duration: "~4 min",
        whyListen: "Brillo orquestal heredado de Rimski-Kórsakov llevado a una incandescencia mágica en sus primeros ballets rusos.",
        ytQuery: "Stravinsky Firebird Finale",
        archiveQuery: "Stravinsky Firebird",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Pulcinella (Suite Neoclásica)",
        duration: "~22 min",
        whyListen: "Stravinsky toma temas barrocos italianos y los reensambla con acentos picantes y armonías traviesas del siglo XX.",
        ytQuery: "Stravinsky Pulcinella Suite",
        archiveQuery: "Stravinsky Pulcinella",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ],
    [
      {
        title: "Agon (Ballet Serial Tardío)",
        duration: "~23 min",
        whyListen: "A los 75 años se reinventa de nuevo adoptando el serialismo dodecafónico con precisión de relojería seca y danzable.",
        ytQuery: "Stravinsky Agon ballet music",
        archiveQuery: "Stravinsky Agon",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ]
  ],

  "schoenberg": [
    [
      {
        title: "Noche Transfigurada (Verklärte Nacht), Op. 4",
        duration: "~29 min",
        whyListen: "Antes de romper la tonalidad, Schoenberg llevó el romanticismo wagneriano de cuerdas a su límite máximo de emoción febril.",
        ytQuery: "Schoenberg Verklarte Nacht Op 4 Karajan",
        archiveQuery: "Schoenberg Verklarte Nacht Op.4",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Pierrot Lunaire, Op. 21 (Selección)",
        duration: "~10 min",
        whyListen: "Descubre el 'Sprechstimme' (canto hablado): una pesadilla expresionista lunar sin tonalidad fija que suena a cine de terror psicológico.",
        ytQuery: "Schoenberg Pierrot Lunaire Op 21",
        archiveQuery: "Schoenberg Pierrot Lunaire Op.21",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ],
    [
      {
        title: "Suite para Piano, Op. 25 (Preludio)",
        duration: "~3 min",
        whyListen: "Primera obra escrita íntegramente con el método dodecafónico: las 12 notas de la escala cromática tienen exactamente la misma jerarquía.",
        ytQuery: "Schoenberg Suite for Piano Op 25 Maurizio Pollini",
        archiveQuery: "Schoenberg Op.25",
        freeLabel: "IMSLP",
        useArchive: false
      }
    ]
  ],

  "philip-glass": [
    [
      {
        title: "Einstein on the Beach — Knee Play 1",
        duration: "~5 min",
        whyListen: "El manifiesto minimalista: ciclos aditivos de órgano eléctrico y voces contando números que generan un trance hipnótico.",
        ytQuery: "Philip Glass Einstein on the Beach Knee Play 1",
        archiveQuery: "Philip Glass Einstein on the Beach",
        freeLabel: "Archive Audio",
        useArchive: true
      },
      {
        title: "Metamorphosis One (Piano solo)",
        duration: "~6 min",
        whyListen: "Arpegios repetitivos que mutan sutilmente: una puerta de entrada inmediata y emotiva al lenguaje minimalista.",
        ytQuery: "Philip Glass Metamorphosis 1 piano",
        archiveQuery: "Philip Glass Metamorphosis",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ],
    [
      {
        title: "Koyaanisqatsi — Prophecies / Pruit Igoe",
        duration: "~8 min",
        whyListen: "Cómo el minimalismo conquistó el cine: coros graves, órgano y metales en espiral retratando la aceleración de la vida moderna.",
        ytQuery: "Philip Glass Koyaanisqatsi Pruit Igoe",
        archiveQuery: "Philip Glass Koyaanisqatsi",
        freeLabel: "Archive Audio",
        useArchive: true
      },
      {
        title: "Concierto para Violín n.º 1 (2º mov.)",
        duration: "~10 min",
        whyListen: "Su fusión madura entre pulsación minimalista y gran lirismo sinfónico tradicional.",
        ytQuery: "Philip Glass Violin Concerto No 1 2nd movement",
        archiveQuery: "Philip Glass Violin Concerto",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ]
  ],

  "arvo-part": [
    [
      {
        title: "Credo (1968, Periodo Collage/Vanguardia)",
        duration: "~12 min",
        whyListen: "Un choque dramático entre el Preludio en Do mayor de Bach y el caos atonal que le valió la censura del régimen soviético.",
        ytQuery: "Arvo Part Credo 1968",
        archiveQuery: "Arvo Part Credo",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ],
    [
      {
        title: "Spiegel im Spiegel (Espejo en el Espejo, 1978)",
        duration: "~9 min",
        whyListen: "La esencia pura del 'Tintinnabuli': el piano toca tríadas lentas como campanas mientras el violín asciende y desciende en silencio sagrado.",
        ytQuery: "Arvo Part Spiegel im Spiegel violin piano",
        archiveQuery: "Arvo Part Spiegel im Spiegel",
        freeLabel: "Archive Audio",
        useArchive: true
      },
      {
        title: "Fratres (para violín, orquesta de cuerdas y percusión)",
        duration: "~11 min",
        whyListen: "Una meditación hipnótica donde el silencio entre las notas tiene tanto peso expresivo como el sonido mismo.",
        ytQuery: "Arvo Part Fratres Gidon Kremer",
        archiveQuery: "Arvo Part Fratres",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ]
  ],

  "john-williams": [
    [
      {
        title: "Catch Me If You Can — Escapades (Aliento Jazzístico Sinfónico)",
        duration: "~5 min",
        whyListen: "Muestra las raíces jazzísticas de Williams antes de Hollywood: saxofón alto, vibráfono y contrabajo con elegancia de los años 60.",
        ytQuery: "John Williams Catch Me If You Can Escapades",
        archiveQuery: "John Williams jazz",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ],
    [
      {
        title: "Star Wars — The Imperial March & Main Title (Leitmotiv Sinfónico)",
        duration: "~8 min",
        whyListen: "Observa cómo aplica la técnica del Leitmotiv de Richard Wagner y la orquestación masiva de Gustav Holst a la mitología moderna.",
        ytQuery: "John Williams Imperial March Vienna Philharmonic",
        archiveQuery: "John Williams Star Wars symphony",
        freeLabel: "Archive Audio",
        useArchive: true
      },
      {
        title: "La Lista de Schindler — Tema Principal (Violín solista y orquesta)",
        duration: "~4 min",
        whyListen: "Desnudez emocional absoluta: un solo de violín de raíz klezmer y romántica que demuestra que la música clásica sigue emocionando al mundo.",
        ytQuery: "John Williams Schindler's List Theme Itzhak Perlman",
        archiveQuery: "John Williams Schindlers List",
        freeLabel: "Archive Audio",
        useArchive: true
      }
    ]
  ]
};

function enrichWork(w) {
  return {
    title: w.title,
    duration: w.duration,
    whyListen: w.whyListen,
    youtubeUrl: buildYouTubeSearchUrl(w.ytQuery),
    spotifyUrl: buildSpotifySearchUrl(w.archiveQuery || w.ytQuery),
    freeArchiveUrl: buildFreeArchiveUrl(w.archiveQuery || w.ytQuery),
    freeLabel: "Archive Audio"
  };
}

function hydrateListeningGuide(musicData) {
  if (!musicData || !Array.isArray(musicData.eras)) return;
  musicData.eras.forEach(era => {
    (era.exponents || []).forEach(exp => {
      const stages = LISTENING_GUIDE_BY_COMPOSER[exp.id];
      if (!stages || !Array.isArray(exp.periods)) return;
      exp.periods.forEach((period, idx) => {
        const rawList = stages[idx] || stages[stages.length - 1] || [];
        period.recommendedWorks = rawList.map(enrichWork);
      });
    });
  });
}

// Auto-hidrata MUSIC_DATA en navegador y expone API global
if (typeof window !== "undefined") {
  window.LISTENING_GUIDE_BY_COMPOSER = LISTENING_GUIDE_BY_COMPOSER;
  window.hydrateListeningGuide = hydrateListeningGuide;
  if (window.MUSIC_DATA) {
    hydrateListeningGuide(window.MUSIC_DATA);
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { LISTENING_GUIDE_BY_COMPOSER, hydrateListeningGuide, enrichWork };
}
