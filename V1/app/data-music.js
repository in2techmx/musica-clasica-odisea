/**
 * DATA-MUSIC.JS (V2 Expandida)
 * Ecosistema IN2TECHMX - Odisea Clásica
 * Base de datos musicológica exhaustiva con retratos históricos, etapas creativas,
 * catálogos analizados y crónicas de historia material y social.
 */

const MUSIC_DATA = {
  project: {
    title: "Odisea de la Música Clásica",
    subtitle: "El lenguaje de las emociones humanas desmitificado para todos",
    version: "2.0.0",
    curator: "Director de Desarrollo (DD) - IN2TECHMX",
    standard: "+10,000€ Vanguard Craft / Cero AI Slop"
  },

  // DEFINICIÓN DIDÁCTICA FUNDAMENTAL
  whatIsClassicalMusic: {
    summary: "Más que un 'género' estático de música para élites con peluca, la música clásica es una tradición viva de más de mil años de música culta occidental caracterizada por su precisión de notación (la partitura), su desarrollo armónico arquitectónico y su capacidad de narrar la condición humana sin depender necesariamente de palabras.",
    myths: [
      {
        myth: "Es música aburrida y para dormirse.",
        reality: "Tiene pasajes de furia, caos, éxtasis y suspenso que superan a cualquier banda sonora de acción (ej. el 'Dies Irae' de Verdi o 'La Consagración de la Primavera' de Stravinski)."
      },
      {
        myth: "Es solo para expertos o élites intelectuales.",
        reality: "Convivió con espacios públicos y populares: Bach dirigía el Collegium Musicum en la cafetería Zimmermann de Leipzig, Mozart compuso singspiels en alemán como 'La flauta mágica' para el teatro popular Theater auf der Wieden, y arias de Verdi eran cantadas en las calles de Italia."
      },
      {
        myth: "Murió hace cientos de años.",
        reality: "Sigue plenamente vigente: dialoga con el cine (Star Wars, Interestelar), los videojuegos (Zelda, Final Fantasy) y compositores contemporáneos como Max Richter, Arvo Pärt o John Williams llenan salas de conciertos y auditorios en todo el mundo."
      }
    ],
    corePillars: [
      {
        icon: "🎼",
        title: "La Partitura y el Arte de la Improvisación",
        desc: "La partitura fija con precisión la arquitectura general para coordinar a decenas de músicos, pero durante siglos convivió con una vibrante tradición de improvisación: desde el bajo continuo barroco hasta las cadencias solistas que Bach, Mozart y Beethoven improvisaban en vivo."
      },
      {
        icon: "⚖️",
        title: "Polifonía y Contrapunto",
        desc: "El arte de entretejer múltiples líneas melódicas independientes que conversan simultáneamente, creando una riqueza textural inigualable donde ninguna voz se anula."
      },
      {
        icon: "⏳",
        title: "Desarrollo Temático en el Tiempo",
        desc: "Muchas formas clásicas desarrollan una idea breve a lo largo de varios minutos: toman un motivo de 4 notas (como el inicio de la 5.ª de Beethoven) y lo transforman a lo largo de un movimiento completo."
      }
    ]
  },

  // GRANDES ÉPOCAS CON RETRATOS HISTÓRICOS Y ANÁLISIS DE ETAPAS
  eras: [
    {
      id: "medieval",
      name: "Música Medieval",
      period: "c. 500 – 1400",
      accent: "#8b5cf6",
      tagline: "El nacimiento de la notación y la espiritualidad del unísono",
      context: "Tras la caída de Roma y el colapso del comercio continental, los monasterios benedictinos conservan el saber escrito. La Iglesia católica requiere estandarizar la liturgia para evitar que los cantos se distorsionen por la transmisión oral en abadías distantes.",
      breakthrough: "Invención del tetragrama por Guido d'Arezzo y surgimiento de la polifonía primitiva (organum) en la Catedral de Notre Dame de París.",
      instruments: "Órgano portativo, laúd medieval, viola de arco, salterio, chirimía.",
      exponents: [
        {
          id: "guido-darezzo",
          name: "Guido d'Arezzo",
          years: "c. 991 – 1050",
          role: "El Padre de la Notación Musical",
          initials: "GA",
          image: "assets/portraits/guido-darezzo.jpg",
          whyExponent: "Monje benedictino y teórico musical cuya reforma pedagógica transformó la transmisión de la música occidental. Sistematizó el tetragrama de 4 líneas con claves y bautizó las seis sílabas del hexacordo (Ut-Re-Mi-Fa-Sol-La) extrayendo las primeras sílabas de cada hemistiquio del himno 'Ut queant laxis' a San Juan Bautista.",
          milestones: [
            "Sentó las bases de la solmisación por hexacordos; la célebre 'Mano Guidoniana' (recurso mnemotécnico documentado en manuscritos posteriores a su muerte) se atribuye a su tradición pedagógica y no a Guido mismo.",
            "Permitió que los cantores aprendieran un canto litúrgico desconocido en pocos días de lectura visual (como expuso en su 'Epistola de ignoto cantu'), en vez de años de memorización exclusivamente oral."
          ],
          masterpiece: "Micrologus (c. 1026, tratado de teoría y pedagogía musical)",
          motifKey: "gregoriano",
          catalogInfo: {
            systemName: "Tratados Manuscritos Medievales",
            structure: "Codificado en códices monásticos de Pomposa y Arezzo. Sus cuatro escritos principales no llevaban número de opus sino títulos latinos preservados en copias manuscritas.",
            keyWorks: ["Micrologus de disciplina artis musicae (c. 1026)", "Prologus in Antiphonarium", "Regulae rhythmicae", "Epistola de ignoto cantu"]
          },
          periods: [
            {
              name: "Etapa Monástica en Pomposa (c. 1013–1025)",
              focus: "Observación de la dificultad de los monjes al memorizar el repertorio litúrgico por vía oral. Desarrolla la notación diastemática sobre líneas y espacios con líneas de color (amarillo para Ut/Do, rojo para Fa).",
              proposal: "La notación debe fijar con exactitud los intervalos: cada línea y cada espacio representan una altura precisa."
            },
            {
              name: "Etapa de Madurez en Arezzo y Audiencia Papal (1025–1050)",
              focus: "Bajo el mecenazgo del obispo Teobaldo de Arezzo redacta el 'Micrologus' (que incluye capítulos sobre el organum polifónico temprano) y presenta su antifonario ante el papa Juan XIX en Roma.",
              proposal: "Didáctica de la solmisación silábica (Ut-Re-Mi-Fa-Sol-La) para entonar melodías a primera vista sin depender de un maestro cantor."
            }
          ]
        },
        {
          id: "hildegarda-von-bingen",
          name: "Hildegarda de Bingen",
          years: "1098 – 1179",
          role: "La Mística Visionaria del Canto Sacro",
          initials: "HB",
          image: "assets/portraits/hildegarda-von-bingen.jpg",
          whyExponent: "Abadesa benedictina, naturalista, teóloga y polímata renana. Expandió el ámbito habitual del canto llano monódico con melodías de gran amplitud interválica (que a menudo superan las dos octavas), melismas expresivos y una poesía litúrgica de intensa imaginería simbólica.",
          milestones: [
            "Primera compositora de la tradición latina occidental con una amplia obra musical conservada y biografía ampliamente documentada (precedida en el ámbito bizantino oriental por Casia de Constantinopla en el siglo IX).",
            "Compuso 'Ordo Virtutum' (c. 1151), el drama litúrgico moral más antiguo conservado con música y texto completos."
          ],
          masterpiece: "Symphonia armonie celestium revelationum / Ordo Virtutum",
          motifKey: "hildegarda",
          catalogInfo: {
            systemName: "Códice de Dendermonde & Riesencodex (Wiesbaden)",
            structure: "Sus 77 cantos litúrgicos (antífonas, responsorios, secuencias e himnos) y el drama 'Ordo Virtutum' se conservan principalmente en dos manuscritos del siglo XII supervisados en su scriptorium.",
            keyWorks: ["Ordo Virtutum (c. 1151, drama litúrgico moral)", "O viridissima virga", "O virtus Sapientiae", "Columba aspexit"]
          },
          periods: [
            {
              name: "Etapa del Monasterio de Disibodenberg (1112–1150)",
              focus: "Vida claustral en comunidad benedictina y redacción de su primera gran obra visionaria, 'Scivias' (1141–1151), cuya sección final ya incluye textos líricos y una versión temprana de 'Ordo Virtutum'.",
              proposal: "La música ('symphonia') como reminiscencia sonora de la armonía espiritual previa a la caída de Adán."
            },
            {
              name: "Etapa del Convento de Rupertsberg (1150–1179)",
              focus: "Funda su propio monasterio femenino en Rupertsberg (cerca de Bingen) y más tarde el de Eibingen. Reúne su ciclo 'Symphonia armonie celestium revelationum'.",
              proposal: "El canto litúrgico como expresión de la 'Viriditas' (el verdor o energía vivificante de la Creación)."
            }
          ]
        },
        {
          id: "leonin-perotin",
          name: "Léonin & Pérotin (Escuela de Notre Dame)",
          years: "c. 1150 – 1220",
          role: "Los Pioneros de la Polifonía de Notre Dame",
          initials: "LP",
          image: "assets/portraits/leonin-perotin.jpg",
          whyExponent: "Primeros grandes maestros de nombre conocido (transmitidos por el teórico inglés conocido como Anónimo IV) vinculados a la Catedral de Notre Dame de París. Desarrollaron la polifonía medida mediante el sistema de los seis modos rítmicos (patrones ternarios cuyos nombres —trocaico, yámbico, dactílico— se tomaron por analogía de la métrica poética clásica).",
          milestones: [
            "Compilaron y ampliaron el 'Magnus Liber Organi' ('Gran Libro de Organum', es decir, de polifonía litúrgica para el gradual y el antifonario, no para el instrumento órgano).",
            "Pérotin compuso los primeros 'organa quadrupla' (obras polifónicas a 4 voces) documentados en Occidente: 'Viderunt Omnes' (1198) y 'Sederunt Principes' (1199)."
          ],
          masterpiece: "Viderunt Omnes (Pérotin, c. 1198)",
          motifKey: "organum",
          catalogInfo: {
            systemName: "Magnus Liber Organi (Códices F, W1 y W2)",
            structure: "Repertorio polifónico de la Catedral de París conservado en manuscritos del siglo XIII (como el Pluteo 29.1 de la Biblioteca Medicea Laurenziana de Florencia).",
            keyWorks: ["Viderunt Omnes (organum quadruplum)", "Sederunt Principes (organum quadruplum)", "Alleluia Nativitas (organum triplum)", "Viderunt Omnes (organum duplum de Léonin)"]
          },
          periods: [
            {
              name: "Época de Léonin (fl. c. 1150–1190): El Organum Duplum",
              focus: "Descrito por Anónimo IV como 'optimus organista' (el mejor compositor de organa). Compone polifonía a dos voces para las fiestas del calendario litúrgico de la nueva catedral gótica de París.",
              proposal: "Alternar pasajes de 'organum purum' (notas tenidas en el tenor bajo una voz superior florida) con secciones medidas de 'discantus'."
            },
            {
              name: "Época de Pérotin (fl. c. 1190–1220): Tripla, Quadrupla y Clausulae",
              focus: "Llamado 'optimus discantor'. abrevia y moderniza el Magnus Liber añadiendo cláusulas de discanto medido y expandiendo la textura a tres ('triplum') y cuatro voces ('quadruplum').",
              proposal: "Coordinación rítmica precisa de tres voces superiores en patrones modales ternarios sobre las notas prolongadas del canto gregoriano en el tenor."
            }
          ]
        }
      ]
    },
    {
      id: "renacimiento",
      name: "El Renacimiento",
      period: "c. 1400 – 1600",
      accent: "#10b981",
      tagline: "El humanismo, la divina proporción sonora y el contrapunto modal",
      context: "El redescubrimiento del pensamiento clásico grecorromano, la aparición de la primera imprenta de polifonía con tipos móviles en Venecia por Ottaviano Petrucci (1501), la Reforma protestante y la Contrarreforma transforman la vida musical europea. La composición busca el equilibrio entre voces, la consonancia imperfecta (terceras y sextas) y la expresión del texto.",
      breakthrough: "Consolidación del contrapunto imitativo continuo entre todas las voces y florecimiento de la misa cíclica, el motete y el madrigal.",
      instruments: "Laúd renacentista, viola da gamba, sacabuche (antecesor del trombón), virginal, cornetto, flauta dulce.",
      exponents: [
        {
          id: "josquin-des-prez",
          name: "Josquin des Prez",
          years: "c. 1450/1455 – 1521",
          role: "El Maestro Franco-Flamenco del Humanismo Musical",
          initials: "JD",
          image: "assets/portraits/josquin-des-prez.jpg",
          whyExponent: "Celebrado por humanistas y teóricos del siglo XVI (como Heinrich Glarean, Baldassare Castiglione y Martín Lutero) como la cumbre de su generación. Lutero escribió sobre él: 'Josquin es el amo de las notas, que han de hacer lo que él quiere; los demás maestros de canto han de hacer lo que las notas quieren'.",
          milestones: [
            "Su prestigio se difundió por toda Europa gracias a la imprenta: Ottaviano Petrucci le dedicó tres volúmenes monográficos de misas (1502, 1505 y 1514).",
            "Llevó a su madurez el contrapunto imitativo por pares de voces (heredado de Dufay, Busnois y Ockeghem), uniéndolo a una declamación retórica transparente del texto."
          ],
          masterpiece: "Missa Pange Lingua (c. 1515, impresa en 1539) / Ave Maria... Virgo Serena",
          motifKey: "josquin",
          catalogInfo: {
            systemName: "New Josquin Edition (NJE) & Impresos de Petrucci",
            structure: "La edición crítica moderna (NJE, 30 vols.) depuró numerosas atribuciones póstumas del siglo XVI, autenticando cerca de 18 misas, unos 50 motetes y alrededor de 65 chansons.",
            keyWorks: ["Ave Maria... Virgo Serena (c. 1485)", "Missa L'homme armé super voces musicales", "Missa Hercules Dux Ferrariae", "Missa Pange Lingua", "Mille Regretz (atrib. tradicional, canción favorita de Carlos V)"]
          },
          periods: [
            {
              name: "Etapa Franco-Flamenca e Italiana (c. 1477–1504)",
              focus: "Documentado en Aix-en-Provence, Milán, la Capilla Papal en Roma y durante un año (1503–1504) como maestro de capilla del duque Hércules I de Este en Ferrara.",
              proposal: "Síntesis del artificio contrapuntístico franco-flamenco con la claridad armónica y silábica de las laude y frottole italianas."
            },
            {
              name: "Etapa Final como Preboste en Condé-sur-l'Escaut (1504–1521)",
              focus: "Se retira como preboste de la colegiata de Notre-Dame en Condé-sur-l'Escaut, donde compone obras de extraordinaria economía y hondura como la 'Missa Pange Lingua'.",
              proposal: "La misa paráfrasis donde el himno gregoriano impregna libremente todas las voces en imitación continua."
            }
          ]
        },
        {
          id: "palestrina",
          name: "Giovanni Pierluigi da Palestrina",
          years: "c. 1525 – 1594",
          role: "El Maestro del Contrapunto Romano y la Polifonía Sacra",
          initials: "GP",
          image: "assets/portraits/palestrina.jpg",
          whyExponent: "Representante arquetípico de la Escuela Romana del siglo XVI. Aunque la historiografía moderna ha demostrado que es una leyenda tardía que el Concilio de Trento quisiera prohibir la polifonía y que su 'Missa Papae Marcelli' la 'salvara' por sí sola, su estilo de curvas melódicas equilibradas y dicción diáfana encarnó el ideal litúrgico postridentino.",
          milestones: [
            "Su tratamiento riguroso de los intervalos y de la preparación y resolución de las disonancias fue codificado por Johann Joseph Fux en 'Gradus ad Parnassum' (1725) como base de la enseñanza académica del contrapunto.",
            "Compuso 104 misas comprobadas, más de 375 motetes y 68 ofertorios, convirtiéndose en el modelo oficial de la polifonía vaticana."
          ],
          masterpiece: "Missa Papae Marcelli (compuesta c. 1562, publicada en 1567)",
          motifKey: "palestrina",
          catalogInfo: {
            systemName: "Haberl (33 vols., 1862–1907) & Casimiri (34 vols., 1939–1987)",
            structure: "Ediciones completas que recopilan sus 12 libros de misas publicados en vida y póstumos, junto con sus motetes, himnos, lamentaciones y madrigales.",
            keyWorks: ["Missa Papae Marcelli (1567)", "Motete Sicut Cervus", "Canticum Canticorum (29 motetes sobre el Cantar de los Cantares, 1584)", "Stabat Mater a 8 voces", "Missa Brevis"]
          },
          periods: [
            {
              name: "Etapa de Palestrina, Capilla Giulia y San Juan de Letrán (1544–1566)",
              focus: "Organista en su ciudad natal y maestro de capilla en Roma bajo el papa Julio III (a quien dedica su Primer Libro de Misas en 1554), San Juan de Letrán y Santa María la Mayor.",
              proposal: "Equilibrio entre el contrapunto franco-flamenco y una textura luminosa que prioriza la inteligibilidad del texto litúrgico."
            },
            {
              name: "Segunda Etapa en la Capilla Giulia y Madurez Romana (1571–1594)",
              focus: "Regresa como maestro de la Capilla Giulia en la Basílica de San Pedro hasta su muerte, supervisando además junto a Annibale Zoilo la revisión del canto gregoriano ('Editio Medicea').",
              proposal: "Polifonía a capela de movimiento conjunto suave, donde todo salto melódico se compensa inmediatamente en dirección contraria."
            }
          ]
        }
      ]
    },
    {
      id: "barroco",
      name: "El Barroco",
      period: "c. 1600 – 1750",
      accent: "#e5b85c",
      tagline: "El claroscuro del drama, el bajo continuo y la arquitectura de la fuga",
      context: "De la Camerata Florentina y la Guerra de los Treinta Años (1618–1648) al esplendor de las cortes europeas y las ciudades mercantiles como Venecia, Hamburgo y Leipzig. La música adopta la doctrina de los afectos ('Affektenlehre'), el contraste dinámico y el virtuosismo vocal e instrumental.",
      breakthrough: "Nacimiento de la ópera y el oratorio, consolidación de la tonalidad funcional (mayor/menor), el bajo continuo y el concierto solista.",
      instruments: "Clavecín, órgano barroco, violín y violonchelo barrocos, tiorba, viola da gamba, oboe y trompeta natural.",
      exponents: [
        {
          id: "bach",
          name: "Johann Sebastian Bach",
          years: "1685 – 1750",
          role: "La Cumbre del Contrapunto y la Síntesis Barroca",
          initials: "JSB",
          image: "assets/portraits/bach.jpg?v=38",
          whyExponent: "Sintetizó y llevó a su máxima complejidad las principales tradiciones europeas de su tiempo —el contrapunto y la tradición orgánica alemana, la claridad formal del concierto italiano y la estilización rítmica de la suite francesa— con un dominio inigualado de la armonía y la polifonía.",
          milestones: [
            "Con los dos libros de 'El Clave Bien Temperado' (1722 y c. 1742) demostró el potencial expresivo de las 24 tonalidades mayores y menores empleando 'buenos temperamentos' (afinaciones circulantes que permitían modular a cualquier tonalidad conservando el color propio de cada una, distintas del temperamento igual matemático moderno).",
            "Llevó la escritura polifónica a su cima especulativa en sus ciclos tardíos: las 'Variaciones Goldberg', 'La Ofrenda Musical' y 'El Arte de la Fuga'."
          ],
          masterpiece: "Pasión según San Mateo (BWV 244) / El Clave Bien Temperado (BWV 846–893)",
          motifKey: "bach-toccata",
          catalogInfo: {
            systemName: "BWV (Bach-Werke-Verzeichnis)",
            structure: "Publicado por Wolfgang Schmieder en 1950 (edición revisada BWV³ en 2022). Organizado temáticamente y no cronológicamente: BWV 1–224 (Cantatas), 225–249 (Motetes, Misas y Pasiones), 525–771 (Órgano), 772–994 (Teclado), 1001–1080 (Cámara, Orquesta y Contrapunto tardío).",
            keyWorks: ["BWV 244 (Pasión según San Mateo)", "BWV 232 (Misa en Si menor)", "BWV 846–893 (El Clave Bien Temperado I y II)", "BWV 1046–1051 (Conciertos de Brandeburgo)", "BWV 565 (Toccata y Fuga en Re menor, obra célebre cuya autoría original ha sido debatida por la musicología moderna)"]
          },
          periods: [
            {
              name: "Etapa de Arnstadt, Mühlhausen y Weimar (1703–1717): El Virtuoso del Órgano",
              focus: "Organista y Konzertmeister en la corte ducal de Weimar. Transcribe al teclado conciertos de Vivaldi y Marcello, asimilando la forma del ritornello italiano, y compone gran parte de su obra para órgano.",
              proposal: "Fusión de la polifonía orgánica del norte y centro de Alemania (Buxtehude, Pachelbel) con la proporción formal italiana."
            },
            {
              name: "Etapa de Cöthen (1717–1723): Maestro de Capilla e Instrumentalismo",
              focus: "Kapellmeister del príncipe Leopold de Anhalt-Cöthen. Dado que la corte era calvinista y no empleaba música litúrgica figurada, Bach se concentra en la música instrumental y pedagógica.",
              proposal: "Polifonía latente en instrumentos melódicos sin acompañamiento (Sonatas y Partitas para violín solo, Suites para violonchelo solo) y combinación policromática en los seis Conciertos de Brandeburgo."
            },
            {
              name: "Etapa de Leipzig (1723–1750): Thomaskantor y Ciclos Especulativos",
              focus: "Cantor de la escuela de Santo Tomás y director musical de las iglesias de Leipzig; dirige además desde 1729 el Collegium Musicum en la cafetería Zimmermann. Compone varios ciclos anuales de cantatas, las dos Pasiones conservadas y sus sumas contrapuntísticas finales.",
              proposal: "Integración de la teología luterana, la retórica musical y la arquitectura contrapuntística exhaustiva ('Misa en Si menor', 'El Arte de la Fuga')."
            }
          ]
        },
        {
          id: "vivaldi",
          name: "Antonio Vivaldi",
          years: "1678 – 1741",
          role: "El Cura Rojo y el Gran Impulsor del Concierto Solista",
          initials: "AV",
          image: "assets/portraits/vivaldi.jpg?v=38",
          whyExponent: "Sacerdote veneciano ('Il Prete Rosso') y virtuoso del violín. Consolidó el modelo barroco del concierto solista en tres movimientos (Rápido – Lento – Rápido, desarrollado a partir de Torelli y Albinoni) y la forma con 'ritornello', ejerciendo una influencia decisiva en toda Europa, incluido J. S. Bach.",
          milestones: [
            "Se conservan más de 500 conciertos suyos (unos 230 para violín, además de fagot, violonchelo, oboe, flauta y mandolina), junto con más de 40 óperas y abundante música sacra.",
            "Hito de la música programática barroca con 'Las Cuatro Estaciones' (1725), cuyos cuatro conciertos van acompañados de sonetos explicativos que describen tormentas, aves, pastores y paisajes helados."
          ],
          masterpiece: "Las Cuatro Estaciones (Op. 8 n.º 1–4, RV 269/315/293/297) / Gloria en Re mayor (RV 589)",
          motifKey: "vivaldi-primavera",
          catalogInfo: {
            systemName: "RV (Ryom-Verzeichnis)",
            structure: "Publicado en 1973 (y ampliado en 2007/2018) por el musicólogo danés Peter Ryom, sustituyendo las numeraciones parciales de Pincherle, Fanna y Ricordi mediante una clasificación por género e instrumentación.",
            keyWorks: ["RV 269, 315, 293, 297 (Las Cuatro Estaciones, Op. 8 n.º 1–4)", "Op. 3 (L'estro armonico, 12 conciertos)", "RV 589 (Gloria en Re mayor)", "RV 522 (Concierto para dos violines en La menor)"]
          },
          periods: [
            {
              name: "Etapa del Ospedale della Pietà y 'L'estro armonico' (1703–1717)",
              focus: "Maestro de violín y luego 'Maestro de' Concerti' en el Pio Ospedale della Pietà de Venecia. La publicación en Ámsterdam de su Op. 3 ('L'estro armonico', 1711) lo proyecta a la fama europea.",
              proposal: "Claridad incisiva del ritornello orquestal alternado con episodios solistas de gran vigor rítmico y virtuosismo."
            },
            {
              name: "Etapa de Mantua, Empresas Operísticas e 'Il cimento' (1718–1730)",
              focus: "Sirve en Mantua al príncipe Felipe de Hesse-Darmstadt, viaja a Roma y publica en 1725 'Il cimento dell'armonia e dell'inventione' Op. 8 (que abre con 'Las Cuatro Estaciones'), mientras actúa como compositor y empresario de ópera.",
              proposal: "Colorido tímbrico descriptivo y transferencia del dramatismo vocal de la ópera veneciana al concierto instrumental."
            },
            {
              name: "Etapa Tardía y Viaje a Viena (1731–1741)",
              focus: "Continúa suministrando conciertos por correo al Ospedale della Pietà y montando óperas en Italia y Europa central. En 1740 se traslada a Viena buscando el favor imperial, pero la muerte de Carlos VI precipita su declive económico y fallece allí en julio de 1741.",
              proposal: "Incorporación de inflexiones preclásicas galantes en sus últimos conciertos y arias operísticas."
            }
          ]
        },
        {
          id: "handel",
          name: "George Frideric Händel",
          years: "1685 – 1759",
          role: "El Titán de la Ópera Seria y del Oratorio Dramático Inglés",
          initials: "GFH",
          image: "assets/portraits/handel.jpg?v=38",
          whyExponent: "Compositor cosmopolita del Barroco tardío: nacido en Halle (Sajonia), formado en la ópera y el concierto en Italia y naturalizado súbdito británico en Londres en 1727. Dominó la ópera seria italiana y creó el género del oratorio dramático en lengua inglesa.",
          milestones: [
            "Compuso en 1741 el oratorio 'El Mesías' (estrenado en Dublín en 1742); la costumbre de ponerse de pie durante su coro 'Hallelujah' se asocia a una tradición histórica atribuida al rey Jorge II en el estreno londinense de 1743 (documentada en testimonios de la década de 1780).",
            "Creó monumentos del ceremonial orquestal barroco como la 'Música Acuática' (interpretada en el Támesis en 1717), la 'Música para los Reales Fuegos de Artificio' (1749) y el himno de coronación 'Zadok the Priest' (1727)."
          ],
          masterpiece: "El Mesías (HWV 56) / Julio César en Egipto (HWV 17) / Música Acuática (HWV 348–350)",
          motifKey: "handel-hallelujah",
          catalogInfo: {
            systemName: "HWV (Händel-Werke-Verzeichnis)",
            structure: "Compilado por Bernd Baselt entre 1978 y 1986 en tres volúmenes temáticos: HWV 1–42 (Óperas), HWV 43–76 (Oratorios, odas y serenatas), HWV 77–256 (Cantatas y música vocal) y HWV 287–612 (Música orquestal, de cámara y teclado).",
            keyWorks: ["HWV 56 (El Mesías)", "HWV 17 (Giulio Cesare in Egitto)", "HWV 348–350 (Música Acuática)", "HWV 351 (Música para los Reales Fuegos de Artificio)", "HWV 258 (Zadok the Priest)"]
          },
          periods: [
            {
              name: "Etapa de Halle, Hamburgo e Italia (1702–1710)",
              focus: "Se inicia en la ópera de Hamburgo y viaja a Florencia, Roma, Nápoles y Venecia (1706–1710), donde entabla contacto con Corelli, Alessandro y Domenico Scarlatti y triunfa con 'Agrippina'.",
              proposal: "Asimilación del bel canto italiano y del estilo concertante de Corelli."
            },
            {
              name: "Auge de la Ópera Seria Italiana en Londres (1711–1737)",
              focus: "Se establece en Londres con 'Rinaldo' (1711) y dirige la Royal Academy of Music, componiendo obras maestras de la ópera seria ('Giulio Cesare', 'Rodelinda', 'Alcina') para grandes voces como Senesino, Cuzzoni y Bordoni.",
              proposal: "El aria da capo como retrato psicológico de gran aliento dramático y riqueza orquestal."
            },
            {
              name: "Era del Oratorio Inglés y Consagración Nacional (1738–1759)",
              focus: "Ante el desgaste financiero de las compañías de ópera italiana y el cambio de gusto del público londinense, vuelca su creatividad en el oratorio en inglés ('Saúl', 'Israel en Egipto', 'El Mesías', 'Sansón', 'Teodora', 'Jefté').",
              proposal: "Síntesis del drama teatral italiano, la tradición coral anglicana (Purcell) y la polifonía germánica, dando al coro un papel dramático central."
            }
          ]
        }
      ]
    },
    {
      id: "clasicismo",
      name: "El Clasicismo",
      period: "c. 1730/1750 – 1820",
      accent: "#38bdf8",
      tagline: "La Ilustración: proporción, claridad formal y el drama de la forma sonata",
      context: "El Siglo de las Luces, la Enciclopedia, el auge de los conciertos públicos por suscripción en Londres, París y Viena, y el paso del sistema cortesano a un mercado editorial y burgués en expansión. Frente a la densidad polifónica del Barroco tardío, se privilegia la melodía articulada con acompañamiento claro y el contraste dramático interno.",
      breakthrough: "Consolidación de la Forma Sonata (exposición bitemática o polarización tonal, desarrollo y reexposición) y del esquema clásico de la sinfonía, la sonata y el cuarteto de cuerdas.",
      instruments: "Fortepiano (con mecanismo de macillos capaz de gradaciones dinámicas), clarinete integrado a la orquesta, cuarteto de cuerdas estandarizado.",
      exponents: [
        {
          id: "haydn",
          name: "Joseph Haydn",
          years: "1732 – 1809",
          role: "El Arquitecto de la Sinfonía y del Cuarteto de Cuerdas",
          initials: "JH",
          image: "assets/portraits/haydn.jpg?v=38",
          whyExponent: "Trabajó durante casi tres décadas como Kapellmeister de los príncipes Esterházy, aislamiento relativo que, según recordó a su biógrafo Georg August Griesinger, le permitió experimentar y lo 'forzó a ser original'. Aunque no inventó la sinfonía ni el cuarteto desde cero, estableció su arquitectura clásica de referencia; fue amigo cercano y referente admirado por Mozart (quien le dedicó seis cuartetos) y tutor del joven Beethoven en Viena.",
          milestones: [
            "Su catálogo reúne 104 sinfonías numeradas tradicionalmente, más las dos sinfonías tempranas sin número conocidas como 'A' (Hob. I:107) y 'B' (Hob. I:108) —para un total de 106 sinfonías, además de la Sinfonía Concertante Hob. I:105—, junto con 68 cuartetos de cuerda.",
            "Perfeccionó el desarrollo temático-motívico (construir movimientos enteros a partir de células breves) e integró el humor, el silencio sorpresivo y la expresividad popular en la alta arquitectura sinfónica."
          ],
          masterpiece: "Sinfonía n.º 94 'La Sorpresa' (Hob. I:94) / Cuartetos Op. 76 / La Creación (Hob. XXI:2)",
          motifKey: "haydn-surprise",
          catalogInfo: {
            systemName: "Hob. (Hoboken-Verzeichnis)",
            structure: "Compilado por el musicólogo neerlandés Anthony van Hoboken (3 vols., 1957–1978). Organizado por géneros en números romanos: Hob. I (Sinfonías), Hob. III (Cuartetos de cuerda), Hob. XVI (Sonatas para teclado), Hob. XXI (Oratorios) y Hob. XXII (Misas).",
            keyWorks: ["Hob. I:94 (Sinfonía n.º 94 'La Sorpresa')", "Hob. I:104 (Sinfonía n.º 104 'Londres')", "Hob. III:77 (Cuarteto Op. 76 n.º 3 'Emperador')", "Hob. XXI:2 (Oratorio 'La Creación')"]
          },
          periods: [
            {
              name: "Etapa de Eisenstadt, Esterháza y el 'Sturm und Drang' (1761–1779)",
              focus: "Al servicio de los príncipes Paul Anton y Nikolaus Esterházy. Dirige orquesta, música de cámara y teatro de ópera; hacia 1768–1772 compone obras de intensa tensión dramática en modo menor (como la Sinfonía n.º 45 'De los adioses' y los Cuartetos Op. 20).",
              proposal: "Emancipación de las cuatro voces del cuarteto de cuerdas y cohesión orgánica de la forma sonata."
            },
            {
              name: "Etapa de Difusión Europea, París y Londres (1780–1809)",
              focus: "Su nuevo contrato de 1779 le permite publicar libremente por toda Europa (Sinfonías de París, 1785–1786). Tras la muerte del príncipe Nikolaus en 1790, realiza dos triunfales estancias en Londres (1791–1792 y 1794–1795) invitado por Johann Peter Salomon, y culmina en Viena con sus seis últimas misas y los oratorios 'La Creación' y 'Las Estaciones'.",
              proposal: "Síntesis entre ciencia contrapuntística, claridad melódica accesible al gran público y monumentalidad coral."
            }
          ]
        },
        {
          id: "mozart",
          name: "Wolfgang Amadeus Mozart",
          years: "1756 – 1791",
          role: "La Síntesis Suprema del Clasicismo Vienés",
          initials: "WAM",
          image: "assets/portraits/mozart.jpg?v=38",
          whyExponent: "Formado desde la infancia en recorridos por las principales cortes y centros musicales de Europa, Mozart asimiló los estilos italiano, francés y germánico para llevar a su plenitud todos los géneros de su época: la ópera (seria, buffa y singspiel), el concierto para piano, la sinfonía, el cuarteto y el quinteto de cuerdas, y la música sacra.",
          milestones: [
            "Transformó la dramaturgia operística dotando a sus personajes de profundidad psicológica y conjuntos vocales donde la acción avanza en tiempo real ('Las bodas de Fígaro', 'Don Giovanni', 'Così fan tutte', 'La flauta mágica').",
            "Con sus 27 conciertos para piano (especialmente la serie vienesa desde 1784) elevó el género a un diálogo sinfónico y dramático de igual a igual entre solista y orquesta."
          ],
          masterpiece: "Serenata n.º 13 'Eine kleine Nachtmusik' (K. 525) / Don Giovanni (K. 527) / Réquiem en Re menor (K. 626)",
          motifKey: "mozart-nachtmusik",
          catalogInfo: {
            systemName: "K. o KV (Köchel-Verzeichnis)",
            structure: "Creado por Ludwig von Köchel en 1862 (y actualizado hasta su 9.ª edición oficial, KV 2024). Ordena cronológicamente más de 600 composiciones desde sus primeras piezas de teclado a los 5 años (K. 1a–1d) hasta el 'Réquiem' inconcluso (K. 626).",
            keyWorks: ["K. 525 (Serenata 'Eine kleine Nachtmusik')", "K. 466 (Concierto para piano n.º 20 en Re menor)", "K. 492 (Las bodas de Fígaro)", "K. 551 (Sinfonía n.º 41 'Júpiter')", "K. 626 (Réquiem en Re menor, completado por F. X. Süssmayr)"]
          },
          periods: [
            {
              name: "Etapa de Formación y Viajes Europeos (1761–1773)",
              focus: "Giras junto a su padre Leopold y su hermana Nannerl por Múnich, Viena, París, Londres e Italia. Conoce a Johann Christian Bach en Londres y al padre Martini en Bolonia.",
              proposal: "Asimilación temprana del estilo galante, la sinfonía italiana de tres movimientos y la escritura vocal operística."
            },
            {
              name: "Etapa de Salzburgo, Mannheim/París e 'Idomeneo' (1773–1781)",
              focus: "Músico en la corte del príncipe-arzobispo Hieronymus von Colloredo en Salzburgo. Viaja a Mannheim y París (1777–1778, donde muere su madre) y estrena 'Idomeneo' en Múnich (1781). En junio de 1781 rompe definitivamente con el servicio arzobispal —siendo expulsado literalmente de un puntapié por el conde Karl von Arco, mayordomo mayor (Oberstküchenmeister) de la corte de Colloredo— y se instala en Viena.",
              proposal: "Expansión orquestal (inspirada en la escuela de Mannheim) y madurez de los conciertos para violín y la Sinfonía Concertante K. 364."
            },
            {
              name: "Década de Viena (1781–1791): Independencia, Óperas y Obra Tardía",
              focus: "Actúa en Viena como pianista, docente y compositor por suscripción y encargo. Estudia los manuscritos de J. S. Bach y Händel en el salón del barón Gottfried van Swieten, dedica seis cuartetos a Haydn y colabora con el libretista Lorenzo Da Ponte.",
              proposal: "Fusión del equilibrio clásico con el contrapunto aprendido de Bach (culminando en el final fugado de la Sinfonía 'Júpiter' K. 551) y el claroscuro dramático de sus últimas obras."
            }
          ]
        }
      ]
    },
    {
      id: "romanticismo",
      name: "El Romanticismo",
      period: "c. 1815 – 1910",
      accent: "#f43f5e",
      tagline: "El fuego interior: subjetividad, expansión sinfónica y drama poético",
      context: "De la Europa postnapoleónica y la Revolución Industrial al surgimiento de los estados nacionales y las grandes salas públicas de concierto. El compositor deja atrás la condición de servidor cortesano para concebirse como artista autónomo; la música se vincula estrechamente con la literatura, la naturaleza, la identidad nacional y la introspección psicológica.",
      breakthrough: "Ampliación de las formas clásicas, nacimiento del Lied romántico, la pieza lírica breve para piano, el Poema Sinfónico, el drama musical continuo y la expansión tímbrica y armónica de la orquesta.",
      instruments: "Piano moderno con bastidor de hierro fundido, maderas con sistemas mecánicos de llaves (Boehm), trompas y trompetas de válvulas, tuba, corno inglés, arpa de doble movimiento.",
      exponents: [
        {
          id: "beethoven",
          name: "Ludwig van Beethoven",
          years: "1770 – 1827",
          role: "El Titán entre el Clasicismo Vienés y la Era Romántica",
          initials: "LvB",
          image: "assets/portraits/beethoven.jpg?v=38",
          whyExponent: "Figura bisagra de la historia musical occidental. Partiendo de las formas clásicas de Haydn y Mozart, expandió sus proporciones, su tensión motívica y su carga expresiva hasta abrir el camino al siglo XIX. Su pérdida auditiva —cuyos primeros síntomas aparecieron hacia los 26–28 años (finales de la década de 1790) y que derivó en sordera prácticamente total hacia 1814–1818— coincidió con una radicalización formal sin precedentes.",
          milestones: [
            "Con la 3.ª Sinfonía 'Heroica' (Op. 55, 1803–1804) transformó la escala dramática y arquitectónica del género sinfónico.",
            "Con la 9.ª Sinfonía (Op. 125, 1824) integró por primera vez voces solistas y coro en una sinfonía del gran canon repertorial ('Oda a la Alegría' de Schiller; si bien existían antecedentes aislados como la 'Schlacht-Sinfonie' de Peter von Winter de 1814)."
          ],
          masterpiece: "Sinfonía n.º 5 en Do menor (Op. 67) / Sinfonía n.º 9 (Op. 125) / Cuartetos tardíos (Op. 127–135)",
          motifKey: "beethoven-5th",
          catalogInfo: {
            systemName: "Opus (Op. 1–138) & Catálogos WoO (Kinsky-Halm) / Hess / Biamonti",
            structure: "138 números de Opus publicados en vida o póstumamente, complementados en 1955 por el catálogo Kinsky-Halm de 205 'Obras sin número de Opus' (WoO, Werk ohne Opuszahl), como 'Para Elisa' (WoO 59).",
            keyWorks: ["Op. 55 (Sinfonía n.º 3 'Heroica')", "Op. 67 (Sinfonía n.º 5 en Do menor)", "Op. 125 (Sinfonía n.º 9 'Coral')", "Op. 123 (Missa Solemnis)", "Op. 131 (Cuarteto de cuerdas n.º 14 en Do sostenido menor)"]
          },
          periods: [
            {
              name: "Primer Periodo: Bonn y Afianzamiento en Viena (1770–1802)",
              focus: "Se traslada de Bonn a Viena en 1792 para estudiar con Haydn (y contrapunto con Albrechtsberger). Destaca como pianista e improvisador y publica sus primeras sonatas para piano (incluida la 'Patética' Op. 13), los Cuartetos Op. 18 y las Sinfonías 1.ª y 2.ª.",
              proposal: "Asimilación del molde clásico vienés con contrastes dinámicos bruscos ('sforzandi') y energía rítmica incisiva."
            },
            {
              name: "Segundo Periodo ('Heroico', 1802–1812)",
              focus: "Tras la crisis reflejada en el 'Testamento de Heiligenstadt' (octubre de 1802), inaugura una nueva vía compositiva con las Sinfonías 3.ª a 8.ª, la ópera 'Fidelio', el Concierto para violín, los Conciertos para piano 4.º y 5.º y los Cuartetos 'Razumovsky' Op. 59.",
              proposal: "Desarrollo orgánico extremo a partir de células motívicas breves y trayectorias dramáticas de la tensión al triunfo."
            },
            {
              name: "Tercer Periodo (Tardío, 1813–1827)",
              focus: "En medio de una sordera ya profunda —comunicándose con sus visitantes mediante cuadernos de conversación—, compone las últimas cinco sonatas para piano (Op. 101, 106 'Hammerklavier', 109, 110 y 111), las 'Variaciones Diabelli', la 'Missa Solemnis', la 9.ª Sinfonía y los cinco últimos cuartetos de cuerda con la 'Gran Fuga' Op. 133.",
              proposal: "Síntesis de variación trascendental, polifonía fugada, lirismo contemplativo y experimentación formal que anticipa la modernidad."
            }
          ]
        },
        {
          id: "chopin",
          name: "Frédéric Chopin",
          years: "1810 – 1849",
          role: "El Poeta del Piano Romántico",
          initials: "FC",
          image: "assets/portraits/chopin.jpg",
          whyExponent: "Nacido cerca de Varsovia de madre polaca y padre francés, centró casi toda su producción en el piano. Exploró a fondo las posibilidades de resonancia del pedal, la ornamentación inspirada en el bel canto italiano y el uso expresivo del 'tempo rubato' (práctica ya documentada desde el siglo XVIII por Tosi y Mozart, que Chopin convirtió en sello poético de flexibilidad melódica sobre un acompañamiento de pulso estable).",
          milestones: [
            "Transformó danzas polacas como la mazurka y la polonesa en formas de concierto de profunda sofisticación armónica e identidad cultural.",
            "Con sus 24 Estudios (Op. 10 y Op. 25), sus cuatro Baladas y sus 24 Preludios (Op. 28) unió la innovación técnica pianística con una audaz armonía cromática."
          ],
          masterpiece: "Balada n.º 1 en Sol menor (Op. 23) / 24 Preludios (Op. 28) / Nocturno en Mi bemol mayor (Op. 9 n.º 2)",
          motifKey: "chopin-nocturne",
          catalogInfo: {
            systemName: "Opus (Op. 1–65 en vida; Op. 66–74 póstumos) & Catálogos Brown (B.) / Kobylańska (KK) / Chomiński (CT)",
            structure: "65 números de Opus publicados en vida, 9 publicados póstumamente por Julian Fontana, y obras sin opus catalogadas por Maurice J. E. Brown y Krystyna Kobylańska.",
            keyWorks: ["Op. 9 y Op. 27 (Nocturnos)", "Op. 10 y Op. 25 (Estudios)", "Op. 23 (Balada n.º 1 en Sol menor)", "Op. 28 (24 Preludios)", "Op. 35 y Op. 58 (Sonatas para piano n.º 2 y n.º 3)"]
          },
          periods: [
            {
              name: "Etapa de Formación en Varsovia (1810–1830)",
              focus: "Estudia con Wojciech Żywny y Józef Elsner en Varsovia. Asimila el folclore de Mazovia, la ópera italiana y el estilo brillante (Hummel, Field), y compone sus dos Conciertos para piano antes de dejar Polonia en noviembre de 1830.",
              proposal: "Canto instrumental ornamentado y virtuosismo juvenil con raíces en las danzas polacas."
            },
            {
              name: "Etapa de París, Mallorca y Nohant (1831–1849)",
              focus: "Establecido en París tras el aplastamiento del Levantamiento de Noviembre en Polonia, prefiere la enseñanza y los salones selectos (como la sala Pleyel) a los recitales masivos. Durante sus años junto a la escritora George Sand (1838–1847, con estancias en Valldemossa y Nohant) compone la mayoría de sus obras maestras de madurez.",
              proposal: "Cromatismo armónico refinado, polifonía interna del teclado y reinvención de la balada, el scherzo, el nocturno y la barcarola."
            }
          ]
        },
        {
          id: "tchaikovsky",
          name: "Piotr Ilich Chaikovski",
          years: "1840 – 1893",
          role: "El Maestro del Lirismo Sinfónico y del Ballet Dramático",
          initials: "PIT",
          image: "assets/portraits/tchaikovsky.jpg",
          whyExponent: "Primer compositor ruso formado profesionalmente en el recién fundado Conservatorio de San Petersburgo (bajo Anton Rubinstein) cuya obra conquistó de inmediato las salas de Europa y América. Unió la arquitectura sinfónica occidental con el temperamento melódico y rítmico ruso y un dominio magistral del color orquestal.",
          milestones: [
            "Renovó la música de ballet dándole continuidad sinfónica y riqueza dramática en su trilogía 'El lago de los cisnes' (1877), 'La bella durmiente' (1890) y 'El cascanueces' (1892).",
            "Compuso seis sinfonías numeradas (culminando en la 6.ª Sinfonía 'Patética', Op. 74, estrenada nueve días antes de su muerte en 1893), conciertos de referencia y óperas como 'Eugenio Oneguin' y 'La dama de picas'."
          ],
          masterpiece: "Sinfonía n.º 6 'Patética' (Op. 74) / Concierto para piano n.º 1 (Op. 23) / El lago de los cisnes (Op. 20)",
          motifKey: "tchaikovsky-swan",
          catalogInfo: {
            systemName: "Opus (Op. 1–80) & Catálogo ČW (Čajkovskij-Werkverzeichnis, Vaidman-Korabelnikova)",
            structure: "80 números de Opus junto con obras sin opus (como la obertura 'Romeo y Julieta') sistematizadas en el catálogo temático ČW del Museo Estatal de Klin (2006).",
            keyWorks: ["Op. 20 (El lago de los cisnes)", "Op. 23 (Concierto para piano n.º 1)", "Op. 24 (Ópera Eugenio Oneguin)", "Op. 35 (Concierto para violín)", "Op. 74 (Sinfonía n.º 6 'Patética')"]
          },
          periods: [
            {
              name: "Etapa del Conservatorio de Moscú (1866–1877)",
              focus: "Profesor de teoría y armonía en Moscú. Entabla diálogo y debate estético con el 'Grupo de los Cinco' (Balákirev) y compone la obertura-fantasía 'Romeo y Julieta', sus tres primeras sinfonías, el Concierto para piano n.º 1 y 'El lago de los cisnes'.",
              proposal: "Integración de la técnica formal germánica y francesa con giros modales y melódicos de la tradición rusa."
            },
            {
              name: "Etapa de Mecenazgo de Nadezhda von Meck y Madurez (1877–1893)",
              focus: "Tras la crisis personal de 1877, recibe durante trece años el apoyo financiero de Nadezhda von Meck (con quien mantiene una célebre correspondencia epistolar sin encontrarse en persona). Viaja como director invitado por Europa y Estados Unidos (inaugurando el Carnegie Hall en 1891) y compone sus Sinfonías 4.ª, 5.ª y 6.ª.",
              proposal: "Sinfonismo dramático articulado en torno a temas cíclicos y un tratamiento virtuoso de las maderas, metales y cuerdas."
            }
          ]
        },
        {
          id: "wagner",
          name: "Richard Wagner",
          years: "1813 – 1883",
          role: "El Reformador del Drama Musical (Gesamtkunstwerk)",
          initials: "RW",
          image: "assets/portraits/wagner.jpg?v=38",
          whyExponent: "Compositor, director y autor de sus propios libretos que transformó el teatro lírico y el lenguaje armónico del siglo XIX. Concibió el drama musical como una 'obra de arte total' ('Gesamtkunstwerk') donde poesía, música, escena y arquitectura teatral (materializada en el Festspielhaus de Bayreuth, inaugurado en 1876) se funden en una corriente sinfónica continua sin división en arias y recitativos cerrados.",
          milestones: [
            "Sistematizó a escala monumental el uso dramático del 'Leitmotiv' (motivo conductor asociado a personajes, objetos, ideas o estados psicológicos, con antecedentes en Weber o Berlioz), técnica que influyó decisivamente en la ópera posterior y en la música cinematográfica.",
            "Con el cromatismo y la suspensión de resoluciones de 'Tristán e Isolda' (compuesta entre 1857 y 1859; estrenada en Múnich en 1865) llevó la tonalidad funcional a una tensión extrema que abrió el camino a la música del siglo XX."
          ],
          masterpiece: "El anillo del nibelungo (tetralogía, WWV 86) / Tristán e Isolda (WWV 90)",
          motifKey: "wagner-valkyrie",
          catalogInfo: {
            systemName: "WWV (Wagner-Werk-Verzeichnis)",
            structure: "Compilado por John Deathridge, Martin Geck y Egon Voss en 1986. Ordena cronológicamente 113 obras musicales (sin utilizar números de Opus tradicionales).",
            keyWorks: ["WWV 70 (Tannhäuser)", "WWV 75 (Lohengrin)", "WWV 86A–D (El anillo del nibelungo: El oro del Rin, La valquiria, Sigfrido, El ocaso de los dioses)", "WWV 90 (Tristán e Isolda)", "WWV 96 (Los maestros cantores de Núremberg)", "WWV 111 (Parsifal)"]
          },
          periods: [
            {
              name: "Etapa de Dresde y la Ópera Romántica Alemana (1842–1849)",
              focus: "Kapellmeister de la corte de Sajonia en Dresde, donde estrena 'Rienzi', 'El holandés errante' y 'Tannhäuser' y concluye 'Lohengrin'. Su participación en la insurrección de mayo de 1849 en Dresde provoca una orden de captura y su huida a Suiza.",
              proposal: "Transición desde la ópera romántica por escenas hacia una mayor continuidad dramática y temática."
            },
            {
              name: "Etapa del Exilio en Zúrich y 'Tristán e Isolda' (1849–1864)",
              focus: "Escribe sus ensayos teóricos ('El arte y la revolución', 'La obra de arte del futuro', 'Ópera y drama'), redacta el poema completo de 'El anillo del nibelungo', inicia su composición y escribe 'Tristán e Isolda'.",
              proposal: "La 'melodía infinita' y el entramado sinfónico de motivos conductores donde la orquesta comenta el subtexto psicológico del drama."
            },
            {
              name: "Etapa de Luis II de Baviera y el Festival de Bayreuth (1864–1883)",
              focus: "Bajo el mecenazgo del rey Luis II de Baviera estrena en Múnich 'Tristán e Isolda' (1865) y 'Los maestros cantores' (1868), y levanta el teatro de Bayreuth con foso orquestal cubierto para el estreno integral del 'Anillo' (1876) y de 'Parsifal' (1882).",
              proposal: "Acústica inmersiva con foso oculto y culminación de la tetralogía mítica y del drama sacro tardío."
            }
          ]
        }
      ]
    },
    {
      id: "siglo-xx",
      name: "Siglo XX y Modernismo",
      period: "c. 1890 – 1975",
      accent: "#06b6d4",
      tagline: "La emancipación del timbre, el ritmo asimétrico y la pluralidad de lenguajes",
      context: "Las dos guerras mundiales, la vanguardia artística (simbolismo, expresionismo, cubismo), el nacimiento de la grabación fonográfica, la radio y el cine transforman radicalmente la cultura sonora. En vez de un único estilo dominante, el siglo XX despliega múltiples caminos simultáneos: impresionismo, neoclasicismo, nacionalismos modernos, atonalismo libre, dodecafonismo y música electrónica.",
      breakthrough: "Disolución o replanteamiento de la jerarquía tonal tradicional, protagonismo estructural del timbre y de la percusión, polirritmias, métrica cambiante y método dodecafónico.",
      instruments: "Percusión sinfónica ampliada, piano preparado, Ondas Martenot, cinta magnética y primeros sintetizadores analógicos.",
      exponents: [
        {
          id: "debussy",
          name: "Claude Debussy",
          years: "1862 – 1918",
          role: "El Renovador del Color Armónico y la Textura Moderna",
          initials: "CD",
          image: "assets/portraits/debussy.jpg",
          whyExponent: "Aunque él mismo rechazaba la etiqueta de 'impresionista' y se sentía más cercano a los poetas simbolistas (Mallarmé, Verlaine), abrió las puertas de la música del siglo XX al liberar a la armonía francesa del modelo de desarrollo sinfónico germánico. Empleó escalas modales, pentatónicas, de tonos enteros y acordes paralelos valorados por su sonoridad y color propios.",
          milestones: [
            "Con su 'Preludio a la siesta de un fauno' (1894, inspirado en la égloga de Mallarmé), obra que Pierre Boulez señaló como el despertar de la música moderna, colocó el timbre de la flauta y la fluidez rítmica en el centro de la forma.",
            "Transformó la escritura para piano ('Preludios', 'Estampas', 'Imágenes'), la ópera ('Pelléas et Mélisande', 1902) y el poema orquestal ('Nocturnos', 'La Mer', 1905)."
          ],
          masterpiece: "Preludio a la siesta de un fauno (L. 86) / La Mer (L. 109) / Clair de Lune (Suite bergamasque, L. 75)",
          motifKey: "debussy-clair",
          catalogInfo: {
            systemName: "L. (Catálogo Lesure)",
            structure: "Catalogado cronológicamente por el musicólogo francés François Lesure en 1977 (numeración original L. 1–141, revisada en 2001/2003).",
            keyWorks: ["L. 75 (Suite bergamasque, que incluye 'Clair de lune')", "L. 86 (Prélude à l'après-midi d'un faune)", "L. 88 (Ópera Pelléas et Mélisande)", "L. 109 (La Mer, tres bocetos sinfónicos)", "L. 117 y L. 123 (Preludios para piano, Libros I y II)"]
          },
          periods: [
            {
              name: "Etapa del Premio de Roma y los Círculos Simbolistas (1884–1894)",
              focus: "Gana el Prix de Rome en 1884. A su regreso a París frecuenta las tertulias de Stéphane Mallarmé, asiste a Bayreuth (admirando y luego distanciándose de Wagner) y escucha el gamelán javanés en la Exposición Universal de París de 1889.",
              proposal: "Armonía no funcional donde los acordes de séptima y novena se desplazan sin obligación de resolver según las reglas escolásticas."
            },
            {
              name: "Madurez Orquestal, Pianística y Sonatas Tardías (1895–1918)",
              focus: "Estrena 'Pelléas et Mélisande' (1902), 'La Mer' (1905), 'Ibéria' y sus colecciones para piano. Durante la Primera Guerra Mundial, ya enfermo de cáncer, firma sus tres últimas sonatas de cámara como 'Claude Debussy, musicien français'.",
              proposal: "De la pincelada tímbrica y rítmica sutil de sus obras sinfónicas a la concisión neoclásica de sus sonatas de 1915–1917."
            }
          ]
        },
        {
          id: "stravinsky",
          name: "Ígor Stravinski",
          years: "1882 – 1971",
          role: "El Renovador del Ritmo y las Formas del Siglo XX",
          initials: "IS",
          image: "assets/portraits/stravinsky.jpg",
          whyExponent: "Compositor ruso (nacionalizado francés en 1934 y estadounidense en 1945) cuya trayectoria atravesó y definió tres grandes corrientes del siglo XX: el primitivismo y colorido ruso de sus ballets para Diáguilev, el neoclasicismo de entreguerras y el serialismo tardío. Revolucionó la métrica occidental mediante acentos desplazados, ostinatos y polirritmias.",
          milestones: [
            "El estreno escénico de 'La consagración de la primavera' en el Théâtre des Champs-Élysées de París (29 de mayo de 1913), con coreografía de Vaslav Nijinski y dirección de Pierre Monteux, provocó un célebre tumulto de gritos, silbidos y discusiones en la sala antes de consagrarse como hito rítmico y orquestal de la modernidad.",
            "Lideró durante tres décadas la estética neoclásica ('Pulcinella', 'Sinfonía de los Salmos', 'The Rake's Progress') y en la década de 1950 adoptó de forma personal la escritura serial."
          ],
          masterpiece: "La consagración de la primavera (1913) / Petrushka (1911) / Sinfonía de los Salmos (1930)",
          motifKey: "stravinsky-rite",
          catalogInfo: {
            systemName: "Catálogo Kirchmeyer (K.) & Catálogo White",
            structure: "Sistematizado por Eric Walter White (1966/1979) y en el catálogo académico K. de Helmut Kirchmeyer ('Kommentiertes Verzeichnis der Werke und Werkausgaben Igor Strawinskys bis 1971', Sächsische Akademie der Wissenschaften zu Leipzig / S. Hirzel Verlag, 2002; edición digital en kcatalog.org).",
            keyWorks: ["K. 10 (El pájaro de fuego, 1910)", "K. 12 (Petrushka, 1911)", "K. 15 (La consagración de la primavera, 1913)", "K. 34 (Pulcinella, 1920)", "K. 52 (Sinfonía de los Salmos, 1930)"]
          },
          periods: [
            {
              name: "Periodo Ruso y los Ballets Rusos de Diáguilev (1908–1919)",
              focus: "Discípulo de Nikolái Rimski-Kórsakov en San Petersburgo, es invitado por Serguéi Diáguilev a París, donde estrena 'El pájaro de fuego', 'Petrushka', 'La consagración de la primavera', 'Las bodas' e 'Historia del soldado'.",
              proposal: "Yuxtaposición de bloques sonoros, armonías politonales u octatónicas y células rítmicas asimétricas."
            },
            {
              name: "Periodo Neoclásico en Francia y Estados Unidos (1920–1951)",
              focus: "Reinterpreta formas, texturas y gestos del Barroco y del Clasicismo (Bach, Pergolesi, Mozart) con distanciamiento moderno y claridad instrumental en obras como el 'Octeto', 'Oedipus Rex', 'Apollon musagète', la 'Sinfonía en tres movimientos' y 'The Rake's Progress'.",
              proposal: "Objetividad constructiva y equilibrio formal frente al pathos expresionista."
            },
            {
              name: "Periodo Serial Tardío (1952–1971)",
              focus: "Instalado en California y en estrecha colaboración con el director Robert Craft, estudia la obra de Anton Webern e integra técnicas seriales y dodecafónicas en 'Canticum Sacrum', 'Agon', 'Threni' y 'Requiem Canticles'.",
              proposal: "Síntesis austera entre el rigor contrapuntístico serial y su inconfundible articulación rítmica y ritual."
            }
          ]
        },
        {
          id: "schoenberg",
          name: "Arnold Schönberg",
          years: "1874 – 1951",
          role: "El Teórico de la Emancipación de la Disonancia y el Dodecafonismo",
          initials: "AS",
          image: "assets/portraits/schoenberg.jpg",
          whyExponent: "Figura central de la Segunda Escuela de Viena junto a sus discípulos directos Alban Berg y Anton Webern. Convencido de que el cromatismo poswagneriano había disuelto las funciones tonales clásicas, postuló hacia 1908 la 'emancipación de la disonancia' (atonalismo libre) y a principios de la década de 1920 formuló el 'método de composición con doce sonidos relacionados únicamente entre sí' (dodecafonismo).",
          milestones: [
            "Desarrolló la serie dodecafónica (en sus cuatro formas: original, retrógrada, inversión e inversión retrógrada) como principio ordenador alternativo a la tonalidad.",
            "Influyó profundamente en la pedagogía y el pensamiento musical del siglo XX, tanto en Europa (Berg, Webern, Eisler) como durante su exilio en Estados Unidos desde 1933 (donde enseñó en USC y UCLA y tuvo entre sus alumnos a John Cage y Lou Harrison)."
          ],
          masterpiece: "La noche transfigurada (Op. 4) / Pierrot Lunaire (Op. 21) / Variaciones para orquesta (Op. 31)",
          motifKey: "schoenberg-12tone",
          catalogInfo: {
            systemName: "Opus (Op. 1–50) & Catálogo Rufer",
            structure: "50 obras publicadas con número de Opus más composiciones sin opus (como los 'Gurrelieder') y obras inconclusas ('Moisés y Aarón') catalogadas por Josef Rufer en 1959.",
            keyWorks: ["Op. 4 (Verklärte Nacht / La noche transfigurada, 1899)", "Op. 11 (Tres piezas para piano, 1909)", "Op. 21 (Pierrot Lunaire, 1912)", "Op. 25 (Suite para piano, 1921–1923)", "Op. 31 (Variaciones para orquesta, 1928)", "Op. 46 (Un superviviente de Varsovia, 1947)"]
          },
          periods: [
            {
              name: "Etapa Posromántica y Tonal Tardía (1897–1907)",
              focus: "Partiendo de la síntesis entre la variación desarrollante de Brahms y la armonía cromática de Wagner, compone el sexteto 'La noche transfigurada' (Op. 4), 'Pelleas und Melisande' (Op. 5), el Cuarteto n.º 1 (Op. 7) y los monumentales 'Gurrelieder'.",
              proposal: "Polifonía densa y cromatismo continuo llevado hasta el límite de la tonalidad."
            },
            {
              name: "Etapa Atonal Libre y Expresionista (1908–1920)",
              focus: "En diálogo con el expresionismo pictórico (entabla amistad y correspondencia con Wassily Kandinsky), prescinde del centro tonal en el final del Cuarteto n.º 2 (Op. 10), las 'Tres piezas para piano' (Op. 11), 'Erwartung' (Op. 17) y 'Pierrot Lunaire' (Op. 21, donde indica en la partitura una 'Sprechmelodie' ejecutada por una 'Sprechstimme' o voz hablada, técnica conocida como 'Sprechgesang').",
              proposal: "Expresión directa de estados psicológicos extremos sin resolución consonante tradicional."
            },
            {
              name: "Etapa Dodecafónica y Exilio en Estados Unidos (1921–1951)",
              focus: "Sistematiza el método de los doce tonos en la 'Suite para piano' Op. 25 y las 'Variaciones para orquesta' Op. 31. Destituido de la Academia de las Artes de Berlín por el régimen nazi en 1933, se exilia en Los Ángeles, donde alterna obras dodecafónicas con partituras que reintegran referencias tonales y temáticas judías ('Kol Nidre', 'Un superviviente de Varsovia').",
              proposal: "Cohesión motívica integral mediante la serie de doce sonidos aplicada a formas clásicas y dramáticas."
            }
          ]
        }
      ]
    },
    {
      id: "contemporanea",
      name: "Contemporánea & Actualidad",
      period: "c. 1975 – Presente",
      accent: "#f59e0b",
      tagline: "El minimalismo, el misticismo coral, la pluralidad posmoderna y el sinfonismo cinematográfico",
      context: "Tras las vanguardias seriales y experimentales de mediados del siglo XX, las últimas décadas se caracterizan por una amplia coexistencia de estéticas: el minimalismo y posminimalismo estadounidense, la nueva simplicidad y el minimalismo sacro europeo, el espectralismo, la creación electroacústica y el auge global de la música sinfónica para el cine y los medios audiovisuales.",
      breakthrough: "Procesos repetitivos y aditivos (minimalismo), técnica 'tintinnabuli' y retorno a la consonancia modal, poliestilismo e integración de la gran orquesta con tecnologías de producción digital.",
      instruments: "Orquesta sinfónica expandida, conjuntos amplificados (sintetizadores y vientos), electrónica en tiempo real y diseño sonoro híbrido.",
      exponents: [
        {
          id: "philip-glass",
          name: "Philip Glass",
          years: "1937 – Presente",
          role: "El Pionero del Minimalismo de Procesos Aditivos",
          initials: "PG",
          image: "assets/portraits/philip-glass.jpg",
          whyExponent: "Junto a La Monte Young, Terry Riley y Steve Reich, fue uno de los padres del minimalismo estadounidense (aunque él prefiere describir su obra como 'música con estructuras repetitivas'). Sustituyó el desarrollo dialéctico tradicional por módulos armónicos y ciclos rítmicos aditivos de transformación gradual.",
          milestones: [
            "Renovó el teatro musical contemporáneo con su trilogía de 'óperas retrato': 'Einstein on the Beach' (1976, junto a Robert Wilson), 'Satyagraha' (1980) y 'Akhnaten' (1983).",
            "Tendió puentes duraderos entre las salas de concierto, el cine ('Koyaanisqatsi' de Godfrey Reggio, 'Mishima', 'Kundun', 'Las Horas') y las artes escénicas."
          ],
          masterpiece: "Einstein on the Beach (1976) / Glassworks (1981) / Koyaanisqatsi (1982)",
          motifKey: "glass-minimalism",
          catalogInfo: {
            systemName: "Catálogo Dunvagen Music Publishers",
            structure: "Comprende más de 25 óperas y obras de teatro musical, 14 sinfonías, más de una docena de conciertos (entre ellos su Concierto para violín n.º 1), cuartetos de cuerda, estudios para piano y bandas sonoras.",
            keyWorks: ["Einstein on the Beach (1976)", "Satyagraha (1980)", "Glassworks (1981)", "Koyaanisqatsi (1982)", "Concierto para violín n.º 1 (1987)", "Metamorphosis I–V (1988)"]
          },
          periods: [
            {
              name: "Etapa de Formación y Minimalismo Radical en Nueva York (1964–1976)",
              focus: "Tras estudiar en Juilliard, se forma en París con Nadia Boulanger y colabora con el sitarista Ravi Shankar transcribiendo su música, lo que le revela la estructura aditiva de los ritmos indios ('tala'). En 1968 funda en Nueva York el Philip Glass Ensemble mientras se gana la vida en oficios manuales.",
              proposal: "Procesos aditivos y sustractivos estrictos ('Music in Twelve Parts') ejecutados por órganos eléctricos, vientos y voces amplificadas."
            },
            {
              name: "Etapa Operística, Sinfónica y Cinematográfica (1976–Presente)",
              focus: "A partir de 'Einstein on the Beach' (presentada en Aviñón y en el Metropolitan Opera) lleva su lenguaje a las compañías de ópera internacionales, a la orquesta sinfónica y al cine.",
              proposal: "Integración de ciclos arpegiados y progresiones armónicas modales/tonales dentro de la gran arquitectura operística y sinfónica."
            }
          ]
        },
        {
          id: "arvo-part",
          name: "Arvo Pärt",
          years: "1935 – Presente",
          role: "El Creador de la Técnica Tintinnabuli y la Polifonía Contemplativa",
          initials: "AP",
          image: "assets/portraits/arvo-part.jpg",
          whyExponent: "Compositor estonio que en 1976 dio a conocer un lenguaje compositivo propio denominado 'tintinnabuli' (del latín 'tintinnabulum', campanilla). Inspirado en el canto llano, la polifonía medieval y la espiritualidad ortodoxa, su música articula una extrema economía de medios donde el silencio y la resonancia adquieren valor estructural.",
          milestones: [
            "De acuerdo con las estadísticas anuales de programación mundial de Bachtrack, fue el compositor vivo más interpretado del mundo durante ocho años consecutivos entre 2011 y 2018; tras ese periodo ininterrumpido volvió a ocupar el primer lugar en 2022 y el segundo en 2019 y 2023 (años en que John Williams encabezó la lista; en 2020–2021 no hubo ranking anual por la pandemia).",
            "Sus obras de 1976–1978 ('Für Alina', 'Fratres', 'Cantus in Memoriam Benjamin Britten', 'Tabula Rasa' y 'Spiegel im Spiegel') se convirtieron en referentes del repertorio coral e instrumental contemporáneo."
          ],
          masterpiece: "Tabula Rasa (1977) / Spiegel im Spiegel (1978) / Für Alina (1976)",
          motifKey: "part-tintinnabuli",
          catalogInfo: {
            systemName: "Catálogo Universal Edition & Arvo Pärt Centre (Laulasmaa)",
            structure: "Editado por Universal Edition (Viena) y documentado en el archivo del Arvo Pärt Centre en Estonia. Abarca cuatro sinfonías, grandes obras corales-orquestales y música de cámara.",
            keyWorks: ["Für Alina (1976)", "Cantus in Memoriam Benjamin Britten (1977)", "Fratres (1977)", "Tabula Rasa (1977)", "Spiegel im Spiegel (1978)", "Passio (1982)", "Kanons Pokajanen (1997)"]
          },
          periods: [
            {
              name: "Etapa Neoclásica, Serial y de Collage en la Estonia Soviética (1958–1968)",
              focus: "Trabaja como ingeniero de sonido en la radio estonia en Tallin. Compone las primeras obras dodecafónicas de Estonia ('Nekrolog', 1960) y piezas de collage barroco-vanguardista que culminan en 'Credo' (1968), obra que suscita fricciones con la censura oficial soviética.",
              proposal: "Contraste dramático entre bloques seriales disonantes y citas de J. S. Bach."
            },
            {
              name: "Retiro, Estudio de la Música Antigua y Nacimiento del 'Tintinnabuli' (1968–Presente)",
              focus: "Atraviesa casi ocho años de retiro compositivo estudiando el canto gregoriano, la Escuela de Notre Dame y la polifonía franco-flamenca. En 1976 presenta 'Für Alina' y en 1980 emigra con su familia a Viena y luego a Berlín, antes de regresar a Estonia en la década de 2000.",
              proposal: "Unión de dos voces indisociables ('1 + 1 = 1'): una voz melódica que avanza por grados conjuntos diatónicos y una voz 'tintinnabuli' que recorre las tres notas de la tríada tónica."
            }
          ]
        },
        {
          id: "john-williams",
          name: "John Williams",
          years: "1932 – Presente",
          role: "El Gran Continuador del Sinfonismo Dramático en el Cine",
          initials: "JW",
          image: "assets/portraits/john-williams.jpg",
          whyExponent: "Compositor, director y pianista estadounidense que revitalizó la gran orquesta sinfónica de tradición posromántica y moderna (heredera de Wagner, Chaikovski, Holst, Elgar, Prokófiev y Korngold) en el cine contemporáneo, acercando el lenguaje orquestal a audiencias globales de múltiples generaciones y sumando 54 nominaciones a los premios Óscar (con 5 estatuillas).",
          milestones: [
            "Desarrolló extensos catálogos de 'Leitmotive' (motivos conductores) con transformaciones armónicas y orquestales a lo largo de sagas cinematográficas como 'Star Wars', 'Indiana Jones', 'Superman', 'Jurassic Park' y 'Harry Potter'.",
            "Su colaboración de cinco décadas con Steven Spielberg (desde 'The Sugarland Express' en 1974 y 'Tiburón' en 1975 hasta 'La lista de Schindler' y 'The Fabelmans') redefinió la narrativa sinfónica audiovisual, además de su labor como director titular de la Boston Pops Orchestra (1980–1993)."
          ],
          masterpiece: "Star Wars (1977) / La lista de Schindler (1993) / Encuentros cercanos del tercer tipo (1977)",
          motifKey: "williams-theme",
          catalogInfo: {
            systemName: "Catálogo de Bandas Sonoras & Obras de Concierto (Hal Leonard)",
            structure: "Más de 100 partituras cinematográficas, cuatro temas olímpicos oficiales y un amplio catálogo de obras de sala (dos conciertos para violín, conciertos para violonchelo, flauta, oboe, clarinete, fagot, trompeta, trompa, tuba, arpa y piano).",
            keyWorks: ["Tiburón / Jaws (1975)", "Star Wars (1977)", "Superman (1978)", "E.T. el extraterrestre (1982)", "La lista de Schindler (1993)", "Concierto para violonchelo y orquesta (1994)", "Concierto para violín n.º 2 (2021)"]
          },
          periods: [
            {
              name: "Etapa de Formación, Jazz y Televisión en Hollywood (1956–1973)",
              focus: "Estudia en UCLA (con Mario Castelnuovo-Tedesco) y piano en Juilliard (con Rosina Lhévinne). Trabaja como pianista de sesión en Hollywood (con Henry Mancini, Alfred Newman y Franz Waxman), compone para series televisivas ('Lost in Space') y gana su primer Óscar como adaptador musical de 'El violinista en el tejado' (1971).",
              proposal: "Dominio versátil del jazz sinfónico, la orquestación de estudio y el contrapunto dramático."
            },
            {
              name: "Renacimiento del Sinfonismo Cinematográfico y Obra de Sala (1974–Presente)",
              focus: "En una década de 1970 en la que Hollywood tendía a las bandas sonoras pop o minimalistas, recupera con 'Jaws' (1975) y 'Star Wars' (1977, grabada con la Orquesta Sinfónica de Londres) la gran plantilla sinfónica, alternando el cine con la dirección de las principales orquestas del mundo.",
              proposal: "Arquitectura leitmotívica, virtuosismo de los metales y escritura concertante tanto en la pantalla como en el repertorio de concierto."
            }
          ]
        }
      ]
    }
  ],

  // HISTORIAS PROFUNDAS: MÚSICA, SANGRE, PESTE Y REVOLUCIONES (CON ETIQUETADO HISTORIOGRÁFICO Y FUENTES)
  historicalChronologyStories: [
    {
      eraId: "medieval",
      categoryTag: "Documentado",
      title: "La Peste Negra, Guillaume de Machaut y los Cánticos de Flagelantes (1347–1360)",
      historicalEvent: "La epidemia de 1347–1351 causa la muerte de entre un tercio y la mitad de la población europea",
      impactOnMusic: "Aunque la polifonía litúrgica (Notre Dame, s. XII), la lírica vernácula (trovadores, cantigas, laude) y el tratado del 'Ars Nova' (Philippe de Vitry, c. 1320) habían nacido décadas antes de la peste, la catástrofe demográfica diezmó capillas y scriptoria monásticos. Guillaume de Machaut —máximo poeta y compositor del amor cortés y del Ars Nova francés— sobrevivió a la epidemia de 1348 y hacia 1360 compuso su monumental 'Messe de Nostre Dame' para la Catedral de Reims: la primera misa ordinaria polifónica completa escrita por un solo autor conocido.",
      fascinatingFact: "Durante el pico de la peste en 1349, procesiones de flagelantes recorrieron Europa central entonando los 'Geisslerlieder' (cantos penitenciales vernáculos conservados en la crónica de Hugo Spechtshart de Reutlingen), testimonio directo del trauma colectivo.",
      sourceRef: "Fuentes: Hoppin, R. H. (1978), Medieval Music; Robertson, A. W. (2002), Guillaume de Machaut and Reims."
    },
    {
      eraId: "renacimiento",
      categoryTag: "Documentado",
      title: "Los Tipos Móviles de Petrucci (1501) y los Himnarios de Lutero (1524)",
      historicalEvent: "Primera polifonía impresa con tipos móviles y difusión de los corales de la Reforma",
      impactOnMusic: "Aunque ya se imprimían misales con canto llano desde la década de 1470, Ottaviano Petrucci obtuvo en 1498 el privilegio del Senado de Venecia y publicó en 1501 el 'Harmonice Musices Odhecaton': la primera colección de música polifónica impresa con tipos móviles metálicos (mediante un proceso de triple impresión). Dos décadas después, en 1524, Martín Lutero y Johann Walter publicaron los primeros himnarios protestantes ('Achtliederbuch' y 'Eyn geystlich Gesangk Buchleyn'), impulsando el canto coral congregacional en lengua alemana.",
      fascinatingFact: "En su prefacio en latín a la colección polifónica 'Symphoniae iucundae' de Georg Rhau (1538), Lutero escribió que, después de la palabra de Dios, solo la música merece ser exaltada como 'señora y gobernadora de los afectos humanos'.",
      sourceRef: "Fuentes: Boorman, S. (2006), Ottaviano Petrucci: Catalogue Raisonné; Leaver, R. A. (2007), Luther's Liturgical Music."
    },
    {
      eraId: "renacimiento",
      categoryTag: "Tradición o leyenda",
      title: "El Concilio de Trento y la Leyenda de Palestrina como 'Salvador de la Polifonía' (1555–1563)",
      historicalEvent: "Debates tridentinos sobre la inteligibilidad del texto litúrgico y construcción del mito de Palestrina",
      impactOnMusic: "Lo documentado en las sesiones de 1562–1563 del Concilio de Trento es que la Iglesia exigió que las palabras de la misa fueran claramente comprensibles y que se excluyera de los templos toda música 'lasciva o impura'. Sin embargo, no existe evidencia histórica de que el Concilio propusiera quemar partituras ni prohibir la polifonía en su totalidad.",
      fascinatingFact: "La célebre historia según la cual la 'Missa Papae Marcelli' de Palestrina (vinculada al breve pontificado de Marcelo II en 1555 y publicada en 1567) habría convencido por sí sola al papa Pío IV de no prohibir la polifonía nació décadas después en escritos de Agostino Agazzari (1607) y Giuseppe Baini (1828), hasta inspirar la ópera 'Palestrina' de Hans Pfitzner.",
      sourceRef: "Fuentes: Monson, C. A. (2002), «The Council of Trent Revisited», JAMS 55/1; Lockwood, L. (1975), Palestrina: Pope Marcellus Mass."
    },
    {
      eraId: "barroco",
      categoryTag: "Interpretación histórica",
      title: "Versalles, el Ceremonial de Luis XIV y el Bastón Mortal de Lully (1661–1687)",
      historicalEvent: "Centralización del espectáculo cortesano bajo Luis XIV y monopolio operístico de Jean-Baptiste Lully",
      impactOnMusic: "Desde la sociología histórica (Norbert Elias), la etiqueta, el ballet de corte y la música en Versalles se interpretan como mecanismos de prestigio y disciplina simbólica de la nobleza alrededor de Luis XIV. El florentino Giovanni Battista Lulli —naturalizado francés como Jean-Baptiste Lully— obtuvo el monopolio real de la academia de ópera y consolidó la 'obertura francesa' de ritmos punteados solemnes.",
      fascinatingFact: "Un hecho estrictamente documentado ocurrió el 8 de enero de 1687: mientras dirigía su 'Te Deum' para celebrar la recuperación médica de Luis XIV, Lully se golpeó accidentalmente el pie con el pesado bastón de mando con el que marcaba el pulso contra el suelo; la herida se gangrenó y le causó la muerte el 22 de marzo.",
      sourceRef: "Fuentes: Elias, N. (1969), La sociedad cortesana; Isherwood, R. M. (1973), Music in the Service of the King."
    },
    {
      eraId: "barroco",
      categoryTag: "Documentado",
      title: "Vivaldi y las Huérfanas Virtuosas del Ospedale della Pietà (1703–1740)",
      historicalEvent: "Un orfanato femenino de Venecia se convierte en el mayor laboratorio instrumental de Europa",
      impactOnMusic: "Antonio Vivaldi, ordenado sacerdote ('Il Prete Rosso'), trabajó durante más de treinta años como maestro de violín y compositor residente en el Pio Ospedale della Pietà de Venecia, una institución que acogía a niñas huérfanas o abandonadas. Para su orquesta y coro femeninos ('le figlie di coro') Vivaldi escribió centenares de conciertos, probando combinaciones inéditas de violín, violonchelo, oboe, fagot y mandolina.",
      fascinatingFact: "Viajeros europeos como Charles de Brosses dejaron crónicas asombradas de cómo aquellas jóvenes —que inicialmente tocaban tras celosías metálicas— ejecutaban los pasajes más vertiginosos del repertorio barroco con una precisión que ninguna otra orquesta italiana igualaba.",
      sourceRef: "Fuentes: Talbot, M. (1993), Vivaldi (The Master Musicians); Baldauf-Berdes, J. L. (1993), Women Musicians of Venice."
    },
    {
      eraId: "clasicismo",
      categoryTag: "Documentado / Tradición biográfica",
      title: "Beethoven, Napoleón y la Portada Rasgada de la Sinfonía 'Heroica' (1804)",
      historicalEvent: "Proclamación imperial de Napoleón Bonaparte y cambio de título de la 3ª Sinfonía, Op. 55",
      impactOnMusic: "Según las memorias publicadas en 1838 por su discípulo Ferdinand Ries, al enterarse en mayo de 1804 de que Napoleón Bonaparte se había proclamado Emperador de los franceses (la coronación en Notre Dame se celebró el 2 de diciembre), Beethoven exclamó que Napoleón también se convertiría en un tirano y arrancó la página titular. Con todo, la relación fue ambivalente: en una carta a Breitkopf & Härtel de agosto de 1804, Beethoven aún mencionaba que la sinfonía 'se titula realmente Bonaparte'.",
      fascinatingFact: "La prueba material se conserva hoy en el archivo de la Gesellschaft der Musikfreunde de Viena: en la copia manuscrita de la partitura, las palabras 'Intitulata Bonaparte' fueron raspadas con tanta fuerza que dejaron un agujero en el papel. Al publicarse en 1806, llevó el subtítulo 'Sinfonía Heroica, compuesta para festejar el recuerdo de un gran hombre'.",
      sourceRef: "Fuentes: Wegeler, F. G. & Ries, F. (1838), Biographische Notizen über L. van Beethoven; Lockwood, L. (2003), Beethoven."
    },
    {
      eraId: "romanticismo",
      categoryTag: "Documentado",
      title: "La Siderurgia del Piano (1825–1859) y el Fenómeno de la 'Lisztomanía' (1844)",
      historicalEvent: "Invención del bastidor de hierro fundido y nacimiento del recital solista moderno",
      impactOnMusic: "La evolución metalúrgica del siglo XIX transformó la acústica del piano: en 1825 Alpheus Babcock patentó en Boston el primer marco de hierro fundido de una sola pieza, y en 1859 Steinway & Sons patentó el bastidor de hierro con cuerdas cruzadas (base de los pianos de concierto modernos, que hoy soportan cerca de 20 toneladas de tensión). Este aumento gradual de potencia y resonancia permitió llenar salas públicas cada vez mayores.",
      fascinatingFact: "En 1840, Franz Liszt utilizó por primera vez en Londres el término 'recital' para sus conciertos de piano a solas, y en 1844 el escritor Heinrich Heine acuñó la palabra 'Lisztomanía' para describir el fervor colectivo que despertaban sus presentaciones en toda Europa.",
      sourceRef: "Fuentes: Ehrlich, C. (1990), The Piano: A History; Walker, A. (1983), Franz Liszt: The Virtuoso Years."
    },
    {
      eraId: "romanticismo",
      categoryTag: "Documentado / Tradición histórica",
      title: "El Exilio de Chopin, la Caída de Varsovia (1831) y el Regreso de su Corazón (1849)",
      historicalEvent: "Represión del Levantamiento de Noviembre en Polonia y exilio definitivo de Chopin en París",
      impactOnMusic: "Frédéric Chopin dejó Varsovia el 2 de noviembre de 1830 para una gira de conciertos; al despedirse, sus amigos le entregaron una copa de plata con tierra polaca. Semanas más tarde estalló el Levantamiento de Noviembre contra el Imperio ruso, y en septiembre de 1831 —mientras Chopin se encontraba en Stuttgart— las tropas zaristas tomaron Varsovia. Chopin nunca volvió a pisar suelo polaco y volcó esa memoria en sus polonesas, mazurkas y baladas.",
      fascinatingFact: "Tras su muerte en París el 17 de octubre de 1849 (atribuida tradicionalmente a tuberculosis, aunque análisis modernos han propuesto también fibrosis quística o pericarditis), la tierra polaca que conservaba fue esparcida sobre su tumba en Père-Lachaise, mientras que su hermana Ludwika trasladó su corazón conservado en alcohol hasta la Iglesia de la Santa Cruz de Varsovia.",
      sourceRef: "Fuentes: Zamoyski, A. (2010), Chopin: Prince of the Romantics; Witt, M. et al. (2018), American Journal of Medicine 131/2."
    },
    {
      eraId: "romanticismo",
      categoryTag: "Documentado",
      title: "Richard Wagner en las Barricadas de Dresde y Orden de Captura (1849)",
      historicalEvent: "El Levantamiento de Mayo en Dresde durante las revoluciones alemanas de 1848–1849",
      impactOnMusic: "Mientras ocupaba el puesto de Kapellmeister de la corte real de Sajonia, Richard Wagner se unió activamente a la insurrección democrática de mayo de 1849 en Dresde junto al anarquista ruso Mijaíl Bakunin, redactando panfletos y vigilando los movimientos de tropas desde la torre de la Frauenkirche. Tras el aplastamiento del levantamiento por el ejército prusiano, se emitió una orden de arresto contra él.",
      fascinatingFact: "Con la ayuda de Franz Liszt y un pasaporte falso, Wagner huyó a Zúrich. Durante más de una década de exilio político sin poder pisar territorio alemán concibió el libreto y las primeras partes de 'El anillo del nibelungo' y 'Tristán e Isolda'.",
      sourceRef: "Fuentes: Millington, B. (2012), The Sorcerer of Bayreuth; Gregor-Dellin, M. (1983), Richard Wagner."
    },
    {
      eraId: "romanticismo",
      categoryTag: "Documentado / Tradición histórica",
      title: "Verdi, el 'Va, pensiero' y el Risorgimento Italiano (1842–1861)",
      historicalEvent: "Unificación de Italia y recepción patriótica de las óperas de Giuseppe Verdi",
      impactOnMusic: "El coro de esclavos hebreos 'Va, pensiero' de la ópera 'Nabucco' (1842) de Giuseppe Verdi alcanzó una enorme popularidad en la Italia dividida y se convirtió —especialmente a partir de las décadas siguientes y del multitudinario funeral de Verdi en 1901— en el emblema musical de la identidad nacional italiana.",
      fascinatingFact: "En los años previos a la unificación de 1861 se difundió en muros de Milán y Venecia el acrónimo '¡Viva V.E.R.D.I.!', utilizado como lema de doble sentido para aclamar al compositor y a 'Vittorio Emanuele Re D'Italia' frente a las autoridades.",
      sourceRef: "Fuentes: Parker, R. (1997), Leonora's Last Act: Essays in Verdian Discourse; Rosselli, J. (2000), The Life of Verdi."
    },
    {
      eraId: "siglo-xx",
      categoryTag: "Documentado / Interpretación histórica",
      title: "El Tumulto de 'La Consagración de la Primavera' de Stravinski en París (1913)",
      historicalEvent: "Estreno escénico de los Ballets Rusos en el Théâtre des Champs-Élysées el 29 de mayo de 1913",
      impactOnMusic: "En la noche del estreno, la combinación de la coreografía de pies vueltos hacia adentro de Vaslav Nijinski y los acordes politonales con acentos irregulares de Ígor Stravinski desató desde los primeros minutos de la primera parte una sonora disputa de silbidos, gritos y aplausos entre sectores rivales del público parisino.",
      fascinatingFact: "Lejos de detenerse, el director Pierre Monteux mantuvo a la orquesta tocando hasta el último compás mientras Nijinski gritaba los números rítmicos a los bailarines desde bambalinas, según relataron testigos como Jean Cocteau y el propio Stravinski. Un mes después, la versión de concierto dirigida por Monteux fue aclamada como un triunfo musical.",
      sourceRef: "Fuentes: Stravinski, Í. (1936), Crónicas de mi vida; Kelly, T. F. (2000), First Nights: Five Musical Premieres."
    },
    {
      eraId: "siglo-xx",
      categoryTag: "Documentado",
      title: "Silvestre Revueltas en la Guerra Civil Española (1937)",
      historicalEvent: "Gira solidaria y estreno de 'Homenaje a Federico García Lorca' en Madrid y Valencia",
      impactOnMusic: "En 1937, en plena Guerra Civil Española, el compositor mexicano Silvestre Revueltas viajó a España junto a Octavio Paz, Elena Garro y la delegación de la LEAR para participar en el II Congreso Internacional de Escritores para la Defensa de la Cultura. Bajo los bombardeos en Madrid y Valencia, Revueltas dirigió personalmente sus obras sinfónicas y camerísticas.",
      fascinatingFact: "Allí presentó su 'Homenaje a Federico García Lorca' (escrito tras el asesinato del poeta granadino en 1936), una obra que funde el dolor fúnebre con el estallido vital de la trompeta, la tuba y el son popular mexicano.",
      sourceRef: "Fuentes: Contreras Soto, E. (2000), Silvestre Revueltas: Baile, duelo y son; Kolb, R. (2023), Silvestre Revueltas: Sounds of a Political Passion."
    },
    {
      eraId: "siglo-xx",
      categoryTag: "Documentado",
      title: "La 7ª Sinfonía de Shostakóvich y los Altavoces del Sitio de Leningrado (1941–1942)",
      historicalEvent: "El asedio de 872 días a Leningrado (c. 600,000 a 1.1 millones de víctimas civiles)",
      impactOnMusic: "Dmitri Shostakóvich inició su 7ª Sinfonía en Leningrado durante las primeras semanas del cerco alemán, antes de ser evacuado con su familia en octubre de 1941 a Kúibyshev (Samara), donde concluyó la partitura en diciembre y se realizó el estreno mundial el 5 de marzo de 1942. Fotografiada en microfilm, la obra viajó por Teherán y El Cairo para su estreno en Occidente en Londres y en Nueva York bajo la batuta de Arturo Toscanini (julio de 1942).",
      fascinatingFact: "El hito más conmovedor ocurrió dentro de la propia ciudad sitiada el 9 de agosto de 1942: Karl Eliasberg reunió a los escasos sobrevivientes de la Orquesta de la Radio de Leningrado con músicos llamados del frente. El general soviético Leonid Góvorov lanzó un bombardeo previo ('Operación Borrasca') para silenciar las baterías alemanas durante el concierto, que se transmitió por altavoces hacia las líneas enemigas; años después, exsoldados alemanes relataron a Eliasberg la impresión que les causó aquella transmisión.",
      sourceRef: "Fuentes: Fay, L. E. (2000), Shostakovich: A Life; Reid, A. (2011), Leningrad: Tragedy of a City Under Siege."
    },
    {
      eraId: "contemporanea",
      categoryTag: "Documentado",
      title: "Leonard Bernstein y la 'Oda a la Libertad' tras la Caída del Muro de Berlín (1989)",
      historicalEvent: "Conciertos históricos del 23 y 25 de diciembre de 1989 en Berlín Occidental y Oriental",
      impactOnMusic: "Siete semanas después de la apertura del Muro de Berlín, Leonard Bernstein dirigió la 9ª Sinfonía de Beethoven en el Schauspielhaus de Berlín Oriental con una orquesta y coros integrados por músicos de Alemania Oriental y Occidental, así como de las cuatro potencias de posguerra (Francia, Reino Unido, Unión Soviética y Estados Unidos).",
      fascinatingFact: "Para aquella ocasión, Bernstein sustituyó en el cuarto movimiento la palabra 'Freude' (Alegría) del poema de Schiller por 'Freiheit' (Libertad), en una transmisión televisiva seguida en directo en más de veinte países.",
      sourceRef: "Fuentes: Burton, H. (1994), Leonard Bernstein; Buch, E. (2003), Beethoven's Ninth: A Political History."
    }
  ],

  // GUÍA DIDÁCTICA DE NOMENCLATURA Y CATALOGACIÓN
  nomenclatureGuide: {
    anatomyExample: {
      rawTitle: "Sinfonía n.º 5 en Do menor, Op. 67",
      composer: "Ludwig van Beethoven",
      year: "1808",
      parts: [
        {
          label: "1. Forma / Género",
          value: "Sinfonía",
          explanation: "Indica el molde arquitectónico de la obra. Una sinfonía es una composición de gran escala escrita para toda la orquesta, estructurada tradicionalmente en 4 movimientos."
        },
        {
          label: "2. Número de Serie",
          value: "n.º 5",
          explanation: "Indica el orden correlativo dentro de ese mismo género para ese compositor. Esta fue la quinta sinfonía escrita por Beethoven de sus nueve en total."
        },
        {
          label: "3. Tonalidad & Modo",
          value: "en Do menor (C minor)",
          explanation: "La escala tonal que rige la pieza. El modo menor suele transmitir dramatismo, tormenta o introspección (Do menor era para Beethoven la tonalidad de la lucha contra el destino; Do mayor, la victoria luminosa)."
        },
        {
          label: "4. Catálogo Editorial",
          value: "Op. 67",
          explanation: "Abreviatura de 'Opus' (obra en latín). Señala que fue la publicación número 67 lanzada comercialmente por el compositor o sus editores."
        }
      ]
    },

    catalogSystems: [
      {
        code: "Op.",
        name: "Opus (del latín: Obra)",
        assignedTo: "Uso Universal (Beethoven, Chopin, Brahms, etc.)",
        creator: "Los propios compositores y sus casas editoras",
        originReason: "Surgió en el Renacimiento/Barroco para que los editores llevaran registro del orden de publicación comercial. Ojo: A veces un Opus agrupa varias obras (ej. Cuartetos Op. 18 n.º 1, 2, 3)."
      },
      {
        code: "BWV",
        name: "Bach-Werke-Verzeichnis (Catálogo de Obras de Bach)",
        assignedTo: "Johann Sebastian Bach",
        creator: "Wolfgang Schmieder (1950)",
        originReason: "Bach casi nunca publicó en vida y no usaba números de Opus. Tras su redescubrimiento, Schmieder organizó sus más de 1,100 obras NO por fecha, sino por géneros temáticos (BWV 1-200 cantatas, 525-771 órgano, 1046-1051 Conciertos de Brandeburgo)."
      },
      {
        code: "K. o KV",
        name: "Köchel-Verzeichnis (Catálogo Köchel)",
        assignedTo: "Wolfgang Amadeus Mozart",
        creator: "Ludwig von Köchel (1862)",
        originReason: "Mozart murió joven dejando más de 600 obras desordenadas sin números cronológicos claros. Köchel, un botánico y mineralogista austríaco apasionado, dedicó su vida a catalogarlas en orden cronológico estricto desde K. 1 (a los 5 años) hasta K. 626 (el Requiem inconcluso)."
      },
      {
        code: "D.",
        name: "Deutsch-Verzeichnis (Catálogo Deutsch)",
        assignedTo: "Franz Schubert",
        creator: "Otto Erich Deutsch (1951)",
        originReason: "Schubert escribió casi 1,000 obras pero en vida solo vio publicadas un puñado insignificante con Opus. Deutsch investigó cartas y manuscritos para ordenarlas desde D. 1 hasta D. 998."
      },
      {
        code: "Hob.",
        name: "Hoboken-Verzeichnis (Catálogo Hoboken)",
        assignedTo: "Joseph Haydn",
        creator: "Anthony van Hoboken (1957)",
        originReason: "Haydn escribió tantísimo (más de 100 sinfonías, decenas de misas y cuartetos) que Hoboken usó números romanos por categorías (Hob. I son sinfonías, Hob. III son cuartetos de cuerda)."
      },
      {
        code: "RV",
        name: "Ryom-Verzeichnis (Catálogo Ryom)",
        assignedTo: "Antonio Vivaldi",
        creator: "Peter Ryom (1973)",
        originReason: "Vivaldi dejó cientos de manuscritos dispersos en monasterios y colecciones privadas. Ryom reemplazó catálogos antiguos incompletos con una ordenación sistemática por instrumentación."
      },
      {
        code: "WoO",
        name: "Werk ohne Opuszahl (Obra sin número de Opus)",
        assignedTo: "Especialmente Ludwig van Beethoven y Johannes Brahms",
        creator: "Georg Kinsky y Hans Halm (1955)",
        originReason: "Obras que el compositor no publicó con número de Opus comercial (como bagatelas, variaciones o canciones). La célebre 'Para Elisa' no lleva Opus: es WoO 59."
      },
      {
        code: "Anh.",
        name: "Anhang (Apéndice de Catálogo)",
        assignedTo: "Catálogos BWV (Bach), K. (Mozart) y Kinsky-Halm (Beethoven)",
        creator: "Musicólogos editores de cada catálogo",
        originReason: "Sección reservada para obras fragmentarias, transcripciones, manuscritos perdidos o piezas de atribución dudosa o espuria."
      },
      {
        code: "S.",
        name: "Catálogo Searle",
        assignedTo: "Franz Liszt",
        creator: "Humphrey Searle (1966)",
        originReason: "Liszt revisó, transcribió y reescribió sus propias obras tantas veces a lo largo de su vida que Searle creó una clasificación temática integral (S. 1 a S. 999)."
      },
      {
        code: "Sz.",
        name: "Catálogo Szőllősy",
        assignedTo: "Béla Bartók",
        creator: "András Szőllősy (1956)",
        originReason: "Bartók dejó de usar números de Opus tres veces por considerarlos confusos; Szőllősy ordenó cronológicamente toda su producción."
      },
      {
        code: "HWV",
        name: "Händel-Werke-Verzeichnis",
        assignedTo: "George Frideric Händel",
        creator: "Bernd Baselt (1978–1986)",
        originReason: "Organiza temáticamente en 612 números las óperas, oratorios ('El Mesías' es HWV 56), himnos y suites instrumentales de Händel."
      },
      {
        code: "L.",
        name: "Catálogo Lesure",
        assignedTo: "Claude Debussy",
        creator: "François Lesure (1977, rev. 2003)",
        originReason: "Debussy rara vez usó números de Opus; Lesure catalogó cronológicamente sus obras desde sus primeras canciones juveniles hasta sus sonatas tardías."
      },
      {
        code: "K. (Stravinski)",
        name: "Catálogo Kirchmeyer",
        assignedTo: "Ígor Stravinski",
        creator: "Helmut Kirchmeyer (2002)",
        originReason: "Stravinski no numeró sus obras con Opus; el catálogo académico de Kirchmeyer ('Kommentiertes Verzeichnis der Werke und Werkausgaben Igor Strawinskys bis 1971', Sächsische Akademie der Wissenschaften zu Leipzig / S. Hirzel Verlag, 2002; kcatalog.org) clasifica cronológicamente sus composiciones y ediciones."
      }
    ],

    temposAndDynamics: {
      tempos: [
        { term: "Largo / Grave", bpm: "40 – 60 BPM", feeling: "Muy solemne, majestuoso, extremadamente lento y suspendido." },
        { term: "Adagio", bpm: "66 – 76 BPM", feeling: "Lento, reflexivo, con emoción lírica profunda y reposada." },
        { term: "Andante", bpm: "76 – 108 BPM", feeling: "A paso de caminata tranquila, fluido sin prisa." },
        { term: "Moderato", bpm: "108 – 120 BPM", feeling: "Velocidad moderada, equilibrada y natural." },
        { term: "Allegro", bpm: "120 – 156 BPM", feeling: "Rápido, animado, alegre y lleno de vitalidad activa." },
        { term: "Presto / Prestissimo", bpm: "168 – 200+ BPM", feeling: "Extremadamente veloz, vertiginoso y lleno de fuego." }
      ],
      dynamics: [
        { code: "pp", term: "Pianissimo", meaning: "Susurro íntimo, casi inaudible pero cargado de tensión." },
        { code: "p", term: "Piano", meaning: "Suave, delicado." },
        { code: "mp / mf", term: "Mezzo-piano / Mezzo-forte", meaning: "Volumen medio cómodo de conversación." },
        { code: "f", term: "Forte", meaning: "Fuerte, rotundo y con presencia orquestal." },
        { code: "ff / fff", term: "Fortissimo", meaning: "Potencia colosal, estruendo con toda la fuerza instrumental." },
        { code: "cresc.", term: "Crescendo", meaning: "Subida progresiva de volumen que genera suspenso y clímax." }
      ]
    }
  },

  // POR QUÉ ES IMPORTANTE Y POR QUÉ DEBERÍAS ESCUCHARLA
  whyItMatters: [
    {
      num: "01",
      title: "Neurociencia Cognitiva y Escucha Atenta",
      desc: "Diversos estudios en neurociencia cognitiva sugieren que la escucha musical activa redes cerebrales distribuidas de percepción auditiva, memoria, atención y recompensa dopaminérgica, y puede contribuir a reducir el estrés percibido (cf. Zatorre & Salimpoor, PNAS, 2013; Levitin, 2006)."
    },
    {
      num: "02",
      title: "El Espejo de Emociones Matizadas",
      desc: "Las formas extensas permiten recorrer arcos psicológicos complejos en una sola obra: la incertidumbre que gradualmente se transforma en consuelo, o la serenidad atravesada por momentos de tensión dramática."
    },
    {
      num: "03",
      title: "Raíces e Influencias en la Música Actual",
      desc: "Su lenguaje armónico y formal ha nutrido a numerosos géneros modernos: el contrapunto de Bach y el colorido impresionista de Debussy y Ravel influyeron en pioneros del jazz; el Leitmotiv de Wagner transformó la música de cine; y progresiones barrocas como el Canon de Pachelbel siguen dialogando con el pop contemporáneo."
    },
    {
      num: "04",
      title: "Un Espacio para la Atención Pausada",
      desc: "Sumergirse en una obra de 15 o 30 minutos complementa nuestros hábitos cotidianos de escucha rápida, ofreciendo un espacio de calma, contemplación y escucha profunda."
    },
    {
      num: "05",
      title: "Un Puente Empático a Través de los Siglos",
      desc: "Al escuchar una obra de Beethoven, Hildegarda de Bingen o Chopin, conectamos con las preguntas, dolores y esperanzas de seres humanos de otras épocas a través de un lenguaje sensible compartido."
    }
  ],

  // BRÚJULA PARA PRINCIPIANTES
  beginnerCompass: [
    {
      mood: "⚡ Energía e Impulso Rítmico",
      piece: "Beethoven - Sinfonía n.º 7 (4º Movimiento: Allegro con brio)",
      why: "Llamada por Wagner 'la apoteosis de la danza'. Su pulso rítmico continuo en compás binario transmite una vitalidad inmediata desde el primer compás."
    },
    {
      mood: "🧠 Concentración para Trabajar o Estudiar",
      piece: "J.S. Bach - Variaciones Goldberg, BWV 988",
      why: "Construidas sobre una línea de bajo recurrente (ground bass) de 32 notas —no un bajo continuo—, cuya regularidad armónica ofrece un acompañamiento ideal para la lectura y el estudio."
    },
    {
      mood: "🌌 Paz Nocturna, Descompresión y Calma",
      piece: "Claude Debussy - Clair de Lune",
      why: "Un remanso de terciopelo sonoro. Sus acordes arpegiados y tempo flexible invitan a una escucha pausada al final del día."
    },
    {
      mood: "🕯️ Contemplación y Serenidad",
      piece: "Arvo Pärt - Spiegel im Spiegel (1978)",
      why: "Técnica tintinnabuli para violín (o violonchelo/viola) y piano: los arpegios triádicos del piano acompañan las escalas diatónicas lentas de la cuerda creando una atmósfera de gran serenidad contemplativa."
    }
  ]
};

// Exportación modular limpia para entorno Node (Tests) y Navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUSIC_DATA;
}

if (typeof window !== "undefined") { window.MUSIC_DATA = MUSIC_DATA; }
