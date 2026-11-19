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
        desc: "La música pop suele basarse en estrofa-estribillo de 3 minutos. La música clásica toma un motivo de 4 notas (como el inicio de la 5ª de Beethoven) y lo transforma durante 35 minutos en un viaje heroico completo."
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
          whyExponent: "Sin él, la música occidental no podría leerse ni transmitirse en el tiempo. Inventó el sistema de 4 líneas y bautizó las notas musicales (Ut-Re-Mi-Fa-Sol-La) extrayendo las sílabas del himno 'Ut queant laxis' a San Juan Bautista.",
          milestones: [
            "Creó la 'Mano Guidoniana', el primer sistema pedagógico mnemotécnico visual para enseñar solfeo y entonación.",
            "Permitió que los cantantes aprendieran una obra polifónica en pocos días en vez de meses de memorización auditiva."
          ],
          masterpiece: "Micrologus (Tratado fundacional de pedagogía musical)",
          motifKey: "gregoriano",
          catalogInfo: {
            systemName: "Tratados Manuscritos Medievales",
            structure: "Codificado en códices monásticos de Pomposa y Arezzo. Sus tratados no llevaban número de opus sino títulos latinos preservados por la Iglesia.",
            keyWorks: ["Micrologus de disciplina artis musicae (c. 1026)", "Regulae rhythmicae", "Prologus in Antiphonarium"]
          },
          periods: [
            {
              name: "Etapa Monástica en Pomposa (c. 1013–1025)",
              focus: "Observación de la frustración de los monjes al memorizar cánticos durante diez años. Desarrolla las primeras líneas de color (amarillo para Do, rojo para Fa).",
              proposal: "La notación debe ser espacial y visual: notas más agudas deben colocarse físicamente más arriba en la página."
            },
            {
              name: "Etapa de Madurez en Arezzo y Audiencia Papal (1025–1050)",
              focus: "Bajo la protección del obispo Teobaldo escribe el 'Micrologus' y es invitado por el Papa Juan XIX a Roma para demostrar la eficacia de su método pedagógico.",
              proposal: "Universalización del método de solfeo silábico y la Mano Guidoniana para cualquier coro de la cristiandad."
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
          whyExponent: "Abadesa, científica, teóloga y polímata del Sacro Imperio. Rompió los estrechos límites del canto gregoriano masculino con melodías que abarcan más de dos octavas y un lirismo poético extático.",
          milestones: [
            "Primera compositora de la historia europea cuya biografía, textos e identidad autoral se conservan documentados.",
            "Creó 'Ordo Virtutum' (c. 1151), el drama musical sacro más antiguo que se conserva con música y letra completas."
          ],
          masterpiece: "Symphonia armonie celestium revelationum",
          motifKey: "hildegarda",
          catalogInfo: {
            systemName: "Códice de Rupertsberg & Códice de Dendermonde",
            structure: "Sus más de 70 cantos litúrgicos y secuencias están recopilados en dos manuscritos iluminados del siglo XII sin numeración moderna.",
            keyWorks: ["Ordo Virtutum (Drama litúrgico moral)", "O viridissima virga", "O virtus Sapientiae"]
          },
          periods: [
            {
              name: "Etapa del Monasterio de Disibodenberg (1112–1150)",
              focus: "Vida claustral estricta y primeras visiones místicas que plasma en su texto 'Scivias'. Comienza a escribir secuencias y antífonas de devoción mariana.",
              proposal: "La música es el único recuerdo que el alma humana conserva del estado de gracia previo a la expulsión del Paraíso."
            },
            {
              name: "Etapa del Convento de Rupertsberg (1150–1179)",
              focus: "Funda su propio monasterio independiente para mujeres en Bingen. Compone el ciclo 'Symphonia' con audaces giros melódicos ascendentes.",
              proposal: "La voz femenina como vehículo cósmico de la 'Viriditas' (la fuerza vivificante y floreciente de la Creación divina)."
            }
          ]
        },
        {
          id: "leonin-perotin",
          name: "Léonin & Pérotin (Escuela de Notre Dame)",
          years: "c. 1150 – 1220",
          role: "Los Pioneros de la Polifonía Compleja",
          initials: "LP",
          image: "assets/portraits/leonin-perotin.jpg",
          whyExponent: "Transformaron el canto llano monódico en una catedral sonora de varias voces sincronizadas rítmicamente con los modos métricos grecolatinos.",
          milestones: [
            "Crearon el monumental 'Magnus Liber Organi' (Gran Libro del Órgano).",
            "Pérotin compuso los primeros 'organa quadrupla' (a 4 voces simultáneas) conocidos en la historia occidental ('Viderunt Omnes' y 'Sederunt Principes')."
          ],
          masterpiece: "Viderunt Omnes (Pérotin, 1198)",
          motifKey: "organum",
          catalogInfo: {
            systemName: "Magnus Liber Organi (Gran Libro de Notre Dame)",
            structure: "Recopilación gótica de piezas litúrgicas para la Catedral de París clasificadas por festivales religiosos.",
            keyWorks: ["Viderunt Omnes (a 4 voces)", "Sederunt Principes (a 4 voces)", "Alleluia Pascha Nostrum"]
          },
          periods: [
            {
              name: "Época de Léonin (c. 1150–1180): El Organum a Dos Voces",
              focus: "Establecimiento de las partes polifónicas del rito litúrgico de la nueva catedral gótica de París mediante el 'organum purum'.",
              proposal: "Contrastar un bajo pedal eterno (cantus firmus) con una voz superior rápida y ricamente ornamentada (duplum)."
            },
            {
              name: "Época de Pérotin (c. 1180–1220): El Triplum y Quadruplum",
              focus: "Revisión y expansión del Magnus Liber. Invención de la métrica rítmica estricta con compases ternarios que evocaban la Santísima Trinidad.",
              proposal: "La polifonía a cuatro voces como equivalente acústico de las bóvedas de crucería y los vitrales luminosos de Notre Dame."
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
      context: "El redescubrimiento del arte clásico grecorromano, la invención de la imprenta musical en Venecia por Ottaviano Petrucci (1501) y la reforma protestante provocan una revolución cultural. La música busca la belleza terrenal, la claridad de la palabra y el equilibrio de las voces.",
      breakthrough: "Perfeccionamiento del contrapunto imitativo (las voces se imitan una a otra con gracia armónica) y nacimiento del madrigal polifónico.",
      instruments: "Laúd renacentista, viola da gamba, sacabuche (trombón arcaico), clavecín primitivo, flauta dulce.",
      exponents: [
        {
          id: "josquin-des-prez",
          name: "Josquin des Prez",
          years: "c. 1450 – 1521",
          role: "El Miguel Ángel de la Música",
          initials: "JD",
          image: "assets/portraits/josquin-des-prez.jpg",
          whyExponent: "Considerado unánimemente por sus contemporáneos (incluyendo Martín Lutero y los papas de Roma) como el genio supremo de su era. Lutero proclamó: 'Josquin es el amo de las notas; ellas hacen lo que él quiere; los demás músicos hacen lo que las notas quieren'.",
          milestones: [
            "Fue el primer compositor cuya fama internacional se propagó a escala continental gracias a la imprenta musical.",
            "Inventó el estilo de contrapunto imitativo con claridad retórica que se convirtió en el canon del Renacimiento."
          ],
          masterpiece: "Missa Pange Lingua / Ave Maria... Virgo Serena",
          motifKey: "josquin",
          catalogInfo: {
            systemName: "Edición Petrucci (Misse Josquin, 1502)",
            structure: "Petrucci dedicó a Josquin los tres primeros libros monográficos de misas impresas de la historia.",
            keyWorks: ["Missa Pange Lingua", "Missa L'homme armé", "Ave Maria... Virgo Serena", "Mille Regretz (Canción del Emperador Carlos V)"]
          },
          periods: [
            {
              name: "Periodo Franco-Flamenco e Itinerancia Italiana (1475–1500)",
              focus: "Trabaja en la corte ducal de los Sforza en Milán y en el coro de la Capilla Sixtina en Roma. Fusión de la complejidad contrapuntística flamenca con la calidez melódica italiana.",
              proposal: "La música debe conmover el corazón humano antes que limitarse a ser un acertijo intelectual para matemáticos."
            },
            {
              name: "Periodo de Madurez en Ferrara y Condé-sur-l'Escaut (1500–1521)",
              focus: "Maestro de capilla para Hércules de Este en Ferrara. Compone sus misas de madurez y sus conmovedoras chansons seculares.",
              proposal: "Alineación de cada sílaba poética con una declamación musical natural y uso del simbolismo retórico del dolor."
            }
          ]
        },
        {
          id: "palestrina",
          name: "Giovanni Pierluigi da Palestrina",
          years: "1525 – 1594",
          role: "El Salvador de la Polifonía Sacra",
          initials: "GP",
          image: "assets/portraits/palestrina.jpg",
          whyExponent: "Fijó el ideal supremo de pureza polifónica vocal. Durante el Concilio de Trento los prelados católicos amenazaron con prohibir la polifonía por considerarla confusa; su 'Missa Papae Marcelli' demostró que el texto en latín podía escucharse con total transparencia y devoción.",
          milestones: [
            "Estableció el estándar de contrapunto riguroso más estudiado en todos los conservatorios de la historia.",
            "Equilibrio absoluto entre disonancias pasajeras cuidadosamente resueltas y consonancias luminosas."
          ],
          masterpiece: "Missa Papae Marcelli (1567)",
          motifKey: "palestrina",
          catalogInfo: {
            systemName: "Haberl & Casimiri Palestrina-Gesamtausgabe",
            structure: "Catálogo monumental de 33 volúmenes que recopila 105 misas, más de 300 motetes y 140 madrigales.",
            keyWorks: ["Missa Papae Marcelli", "Motete Sicut Cervus", "Stabat Mater a 8 voces", "Missa Brevis"]
          },
          periods: [
            {
              name: "Periodo Romano Temprano y Capilla Giulia (1551–1565)",
              focus: "Maestro de coro en la Basílica de San Pedro bajo el pontificado de Julio III. Publicación de su primer libro de misas.",
              proposal: "Depuración de cualquier melodía profana o ruidosamente secular en el culto sagrado."
            },
            {
              name: "Periodo de la Contrarreforma y Madurez (1565–1594)",
              focus: "Composición de la Missa Papae Marcelli y dirección de la música del Vaticano hasta su muerte, siendo llamado 'Príncipe de la Música'.",
              proposal: "La textura homofónica y el contrapunto suave como oración contemplativa donde la música no compite con la divinidad sino que la refleja."
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
      context: "La devastación de la Guerra de los Treinta Años (1618–1648), el florecimiento de las cortes absolutistas (Luis XIV en Versalles) y la Revolución Científica de Galileo y Newton. La música adopta el contraste dinámico violento (forte/piano), la ornamentación virtuosa y la emoción teatral extrema.",
      breakthrough: "Invención de la Ópera, fijación de la armonía tonal (escalas Mayores y Menores), y el bajo continuo como motor rítmico-armónico.",
      instruments: "Clavecín, órgano de tubos barroco, violín barroco, laúd tiorba, oboe barroco.",
      exponents: [
        {
          id: "bach",
          name: "Johann Sebastian Bach",
          years: "1685 – 1750",
          role: "La Cumbre Matemática y Espiritual de la Música",
          initials: "JSB",
          image: "assets/portraits/bach.jpg",
          whyExponent: "El arquitecto supremo. Tomó todas las formas musicales de Europa (la fuga germánica, el concierto italiano, la suite de danzas francesa) y las llevó a una perfección estructural, riqueza armónica y hondura metafísica nunca superadas.",
          milestones: [
            "Demostró con 'El Clave Bien Temperado' que se podía componer en las 24 tonalidades mayores y menores afinando por temperamento igual.",
            "Llevó el contrapunto a su límite abstracto en 'El Arte de la Fuga' y 'La Ofrenda Musical'."
          ],
          masterpiece: "Toccata y Fuga en Re menor (BWV 565) / Pasión según San Mateo (BWV 244)",
          motifKey: "bach-toccata",
          catalogInfo: {
            systemName: "BWV (Bach-Werke-Verzeichnis)",
            structure: "Creado por Wolfgang Schmieder en 1950. Organizado temáticamente: BWV 1–224 (Cantatas), 225–249 (Obras corales magnas), 525–771 (Órgano), 1041–1065 (Conciertos orquestales).",
            keyWorks: ["BWV 565 (Toccata y Fuga)", "BWV 846-893 (El Clave Bien Temperado)", "BWV 1046-1051 (Conciertos de Brandeburgo)", "BWV 244 (Pasión según San Mateo)"]
          },
          periods: [
            {
              name: "Periodo de Weimar (1708–1717): El Maestro del Órgano",
              focus: "Organista de la corte ducal. Descubre los conciertos de Vivaldi y los transcribe al teclado, aprendiendo la concisión temática italiana. Compone sus grandes tocatas, preludios y fugas de órgano.",
              proposal: "El órgano de tubos como el universo concentrado: polifonía monumental impulsada por pedales y contrapunto denso."
            },
            {
              name: "Periodo de Cöthen (1717–1723): La Explosión Instrumental",
              focus: "Al servicio del príncipe Leopold de Anhalt-Cöthen, devoto calvinista que no requería música sacra. Bach compone música de cámara pura.",
              proposal: "Conciertos de Brandeburgo, Suites para Violonchelo solo y Sonatas y Partitas para violín: elevar los instrumentos solistas a polifonías completas."
            },
            {
              name: "Periodo de Leipzig (1723–1750): El Cantor de Santo Tomás",
              focus: "Director musical de las cuatro iglesias principales de Leipzig. Obligado a componer una cantata litúrgica por semana. Hacia el final de su vida se vuelve solitario e incomprendido.",
              proposal: "La Pasión según San Mateo, la Misa en Si menor y El Arte de la Fuga: síntesis de fe luterana, proporción pitagórica y especulación teórica eterna."
            }
          ]
        },
        {
          id: "vivaldi",
          name: "Antonio Vivaldi",
          years: "1678 – 1741",
          role: "El Cura Rojo y el Maestro del Concierto Solista",
          initials: "AV",
          image: "assets/portraits/vivaldi.jpg",
          whyExponent: "Sacerdote y virtuoso del violín veneciano. Fijó para siempre la estructura del concierto clásico en tres movimientos (Rápido - Lento - Rápido) e inventó la música descriptiva cinematográfica.",
          milestones: [
            "Compuso más de 500 conciertos, estableciendo la técnica del 'ritornello' (estribillo orquestal que dialoga con el virtuosismo del solista).",
            "Pintó sonoras tormentas, cantos de pájaros y fuegos invernales en 'Las Cuatro Estaciones'."
          ],
          masterpiece: "Las Cuatro Estaciones (Op. 8, RV 269/315/293/297)",
          motifKey: "vivaldi-primavera",
          catalogInfo: {
            systemName: "RV (Ryom-Verzeichnis)",
            structure: "Publicado en 1973 por el musicólogo danés Peter Ryom. Reemplazó los catálogos imperfectos de Pincherle y Fanna ordenando sistemáticamente por género e instrumentación.",
            keyWorks: ["RV 269 (La Primavera, Op. 8 n.º 1)", "RV 315 (El Verano, Op. 8 n.º 2)", "RV 589 (Gloria en Re mayor)", "RV 522 (Concierto para dos violines en La menor)"]
          },
          periods: [
            {
              name: "Periodo del Ospedale della Pietà en Venecia (1703–1715)",
              focus: "Profesor de violín en un hospicio para niñas huérfanas de Venecia, convirtiendo a su orquesta femenina en una de las más célebres de Europa.",
              proposal: "La energía rítmica implacable, ataques de arco agresivos y melodías solistas acrobáticas."
            },
            {
              name: "Periodo de Fama Europea e Il Cimento dell'Armonia (1716–1730)",
              focus: "Publicación de sus colecciones Op. 3 (L'estro armonico) y Op. 8 (Las Cuatro Estaciones), que fascinaron a toda Europa e inspiraron a Bach.",
              proposal: "Música programática basada en sonetos poéticos: la partitura imita ruidos de la naturaleza y emociones físicas tangibles."
            },
            {
              name: "Periodo Tardío y Declive en Viena (1730–1741)",
              focus: "Viajes de producción operística. El gusto del público cambia hacia el estilo galante; Vivaldi muere en la pobreza en Viena.",
              proposal: "Dramatismo operístico veneciano aplicado a los conciertos de instrumentos de viento (fagot, oboe, flauta)."
            }
          ]
        },
        {
          id: "handel",
          name: "George Frideric Händel",
          years: "1685 – 1759",
          role: "El Titán del Drama Coral y la Épica Orquestal",
          initials: "GFH",
          image: "assets/portraits/handel.jpg",
          whyExponent: "Compositor cosmopolita (alemán educado en Italia y nacionalizado británico). Inventó el oratorio en lengua inglesa y creó algunas de las melodías corales más triunfales y universales jamás concebidas.",
          milestones: [
            "Creó el 'Aleluya' del Mesías, donde por tradición real los monarcas y el público se ponen de pie.",
            "Pionero del espectáculo orquestal masivo al aire libre ('Música Acuática' para barcazas reales en el Támesis)."
          ],
          masterpiece: "El Mesías (HWV 56) / Música Acuática (HWV 348–350)",
          motifKey: "handel-hallelujah",
          catalogInfo: {
            systemName: "HWV (Händel-Werke-Verzeichnis)",
            structure: "Compilado por Bernd Baselt entre 1978 y 1986. Divide las obras en: HWV 1–42 (Óperas), 43–100 (Oratorios y odas), 312–425 (Música orquestal y de cámara).",
            keyWorks: ["HWV 56 (El Mesías)", "HWV 348-350 (Música Acuática)", "HWV 351 (Música para los Reales Fuegos de Artificio)", "HWV 258 (Zadok the Priest - Himno de Coronación)"]
          },
          periods: [
            {
              name: "Etapa Italiana y Conquista de Londres con la Ópera (1706–1728)",
              focus: "Triunfa en Roma y Florencia con la ópera seria italiana. Se instala en Londres y funda la Royal Academy of Music.",
              proposal: "El aria da capo italiana como espectáculo de virtuosismo vocal extremo (castrati y primadonnas)."
            },
            {
              name: "Invención del Oratorio Inglés y Reinversión Creativa (1732–1759)",
              focus: "Tras la bancarrota de las compañías de ópera italiana, Händel abandona el teatro en italiano y crea el oratorio dramático bíblico en inglés.",
              proposal: "El coro monumental del pueblo como protagonista ético de la historia ('El Mesías', 'Judas Macabeo')."
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
      tagline: "La Ilustración: Belleza, claridad simétrica y la forma sonata",
      context: "La Ilustración de Voltaire, Kant y Rousseau, el auge de la burguesía y el racionalismo científico. Se rechaza la pesadez del contrapunto barroco en favor de melodías limpias, transparentes y estructuradas con elegancia geométrica.",
      breakthrough: "Invención de la Forma Sonata (exposición, desarrollo, reexposición) y consolidación de la orquesta sinfónica clásica moderna.",
      instruments: "El fortepiano (ancestro del piano moderno), clarinete (incorporado a la orquesta), cuarteto de cuerdas clásico.",
      exponents: [
        {
          id: "haydn",
          name: "Joseph Haydn",
          years: "1732 – 1809",
          role: "El Padre de la Sinfonía y del Cuarteto de Cuerdas",
          initials: "JH",
          image: "assets/portraits/haydn.jpg",
          whyExponent: "Trabajó tres décadas aislado en el palacio campestre de los príncipes Esterházy, lo que según sus propias palabras le 'obligó a ser original'. Construyó los cimientos de la sinfonía moderna y fue maestro y amigo de Mozart y profesor de Beethoven.",
          milestones: [
            "Compuso 106 sinfonías y 68 cuartetos de cuerda, definiendo la estructura clásica canónica en 4 movimientos.",
            "Dotó a la música de ingenio cómico, sorpresas teatrales e infinita humanidad."
          ],
          masterpiece: "Sinfonía n.º 94 'La Sorpresa' (Hob. I:94) / Cuartetos Op. 76",
          motifKey: "haydn-surprise",
          catalogInfo: {
            systemName: "Hob. (Hoboken-Verzeichnis)",
            structure: "Creado por Anthony van Hoboken en 1957. Ordenado por categorías temáticas en números romanos: Hob. I (Sinfonías 1-108), Hob. III (Cuartetos de cuerda), Hob. XVI (Sonatas para piano).",
            keyWorks: ["Hob. I:94 (Sinfonía de la Sorpresa)", "Hob. I:104 (Sinfonía Londres)", "Hob. III:77 (Cuarteto Emperador)", "Hob. XXI:2 (El Oratorio La Creación)"]
          },
          periods: [
            {
              name: "Etapa Esterházy Temprana y 'Sturm und Drang' (1761–1779)",
              focus: "Al servicio del príncipe Nicolás el Magnífico en Hungría. Explora la experimentación emocional del movimiento 'Tempestad y Empuje' en modo menor.",
              proposal: "La sonata como diálogo dramático y el cuarteto de cuerdas como cuatro caballeros sabios conversando entre sí."
            },
            {
              name: "Etapa de Madurez y Sinfonías de Londres (1780–1809)",
              focus: "Liberado de sus obligaciones feudales, viaja a Londres como celebridad internacional invitado por Salomon. Compone sus 12 sinfonías londinenses y el oratorio 'La Creación'.",
              proposal: "La música orquestal como entretenimiento público de masas con humor, clímax dinámicos y majestuosidad humanista."
            }
          ]
        },
        {
          id: "mozart",
          name: "Wolfgang Amadeus Mozart",
          years: "1756 – 1791",
          role: "El Genio Melódico Insuperable de la Humanidad",
          initials: "WAM",
          image: "assets/portraits/mozart.jpg",
          whyExponent: "Niño prodigio que componía a los 5 años y dominó todos los géneros existentes (ópera, sinfonía, concierto para piano, música sacra y de cámara) con una fluidez melódica perfecta que parecía fluir sin esfuerzo humano.",
          milestones: [
            "Revolucionó la ópera convirtiéndola en un estudio psicológico de pasiones y dilemas humanos reales ('Las Bodas de Fígaro', 'Don Giovanni').",
            "Creó el modelo arquetípico del Concierto para Piano solista dialogando con la orquesta."
          ],
          masterpiece: "Serenata n.º 13 'Eine kleine Nachtmusik' (K. 525) / Requiem en Re menor (K. 626)",
          motifKey: "mozart-nachtmusik",
          catalogInfo: {
            systemName: "K. o KV (Köchel-Verzeichnis)",
            structure: "Creado por el botánico austríaco Ludwig von Köchel en 1862. Orden cronológico estricto desde K. 1 (minueto compuesto a los 5 años) hasta K. 626 (el Requiem inconcluso).",
            keyWorks: ["K. 525 (Eine kleine Nachtmusik)", "K. 466 (Concierto para piano n.º 20 en Re menor)", "K. 551 (Sinfonía n.º 41 'Júpiter')", "K. 626 (Requiem en Re menor)"]
          },
          periods: [
            {
              name: "Etapa de Juventud e Itinerancia Europea (1762–1773)",
              focus: "Giras infantiles exhibido por su padre Leopold ante las cortes de París, Londres y Roma. Asimilación instantánea de todos los estilos europeos.",
              proposal: "El virtuosismo instrumental temprano puesto al servicio del encanto melódico transparente."
            },
            {
              name: "Periodo de Salzburgo y Rebelión contra el Arzobispo (1773–1781)",
              focus: "Encerrado en el régimen provinciano de Salzburgo al servicio del autoritario Arzobispo Colloredo. Rompe con su patrón con una patada en el trasero y huye a Viena como artista independiente.",
              proposal: "Conciertos de violín y ópera 'Idomeneo': el estilo clásico adquiere vigor dramático y libertad expresiva."
            },
            {
              name: "Madurez en Viena y Trascendencia Final (1781–1791)",
              focus: "Matrimonio con Constanze Weber. Década febril de conciertos por suscripción, sus tres grandes óperas con libreto de Da Ponte, la Sinfonía Júpiter y el misterioso Requiem de encargo.",
              proposal: "Psicología operística profunda: el claroscuro donde la risa y la tragedia coexisten en el mismo compás armónico."
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
      tagline: "El fuego interior: pasión desenfrenada, el héroe y la tragedia",
      context: "Revolución Francesa, guerras napoleónicas y Revolución Industrial. Las ciudades se llenan de fábricas de carbón y humo. El artista rechaza la frialdad mecanicista burguesa y se proclama un héroe solitario que expresa su dolor íntimo, su amor imposible y el misterio abisal de la naturaleza.",
      breakthrough: "Expansión orquestal masiva (trombones, tubas, arpas, percusión colosal), el Poema Sinfónico, el virtuosismo instrumental de solistas y el cromatismo armónico libre.",
      instruments: "Piano de concierto moderno de cola de hierro, tuba, corno inglés, contrafagot, celesta.",
      exponents: [
        {
          id: "beethoven",
          name: "Ludwig van Beethoven",
          years: "1770 – 1827",
          role: "El Titán que Rompió las Reglas del Mundo",
          initials: "LvB",
          image: "assets/portraits/beethoven.jpg",
          whyExponent: "El puente monumental entre el Clasicismo y el Romanticismo. A pesar de quedarse completamente sordo a los 30 años, canalizó su sufrimiento en obras revolucionarias de una fuerza ética y cósmica sin precedentes.",
          milestones: [
            "Con la 3ª Sinfonía ('Heroica') rompió el clasicismo duplicando la duración tradicional de una sinfonía.",
            "Con la 9ª Sinfonía incorporó por primera vez la voz humana y un coro en una sinfonía monumental ('Oda a la Alegría')."
          ],
          masterpiece: "Sinfonía n.º 5 en Do menor (Op. 67) / Sinfonía n.º 9 (Op. 125)",
          motifKey: "beethoven-5th",
          catalogInfo: {
            systemName: "Opus (Op.) & WoO (Werk ohne Opuszahl)",
            structure: "Sus 138 obras principales con número de Opus publicadas en vida o póstumas, más el catálogo WoO (Kinsky-Halm 1955) para 205 obras sin opus comercial (ej. Para Elisa WoO 59).",
            keyWorks: ["Op. 55 (3ª Sinfonía Heroica)", "Op. 67 (5ª Sinfonía)", "Op. 125 (9ª Sinfonía Coral)", "Op. 27 n.º 2 (Sonata Claro de Luna)", "WoO 59 (Para Elisa)"]
          },
          periods: [
            {
              name: "Primer Periodo Clásico de Viena (1792–1802)",
              focus: "Estudia con Haydn. Se establece como el pianista improvisador más temible de los salones aristocráticos. Compone sus primeros cuartetos Op. 18 y la 1ª y 2ª Sinfonías.",
              proposal: "Maestría de la forma sonata clásica heredada de Mozart y Haydn, pero con una densidad motívica y agresividad dinámica ya personales."
            },
            {
              name: "Segundo Periodo Heroico (1803–1814)",
              focus: "Crisis del 'Testamento de Heiligenstadt' (confiesa su desesperación por la sordera irreversible y decide no suicidarse para cumplir su destino artístico).",
              proposal: "La música como lucha épica contra el destino: de la oscuridad de Do menor a la luz triunfal de Do mayor (Sinfonías 3ª, 5ª, 7ª, Concierto Emperador)."
            },
            {
              name: "Tercer Periodo Trascendente y Tardío (1815–1827)",
              focus: "Sordera total y aislamiento absoluto del mundo exterior. Compone en su mente la Missa Solemnis, la Novena Sinfonía y sus últimos cuartetos de cuerda.",
              proposal: "Disolución de las formas clásicas en polifonía mística, variación infinita y visión profética del siglo XX (los Cuartetos tardíos y la Gran Fuga Op. 133)."
            }
          ]
        },
        {
          id: "chopin",
          name: "Frédéric Chopin",
          years: "1810 – 1849",
          role: "El Poeta del Piano y el Alma del Rubato",
          initials: "FC",
          image: "assets/portraits/chopin.jpg",
          whyExponent: "Consagró su genio casi exclusivamente al piano. Creó una técnica expresiva ('tempo rubato': flexibilidad del tiempo musical como el latido orgánico de un corazón) y una poesía melancólica ligada al drama del exilio de su Polonia natal.",
          milestones: [
            "Elevó danzas populares de resistencia nacional como la Mazurka y la Polonesa a la cúspide de la alta cultura.",
            "Reinventó los Estudios de piano (Op. 10 y Op. 25), fundiendo el virtuosismo técnico con la poesía más desgarradora."
          ],
          masterpiece: "Nocturno en Mi bemol mayor (Op. 9 n.º 2) / Balada n.º 1 en Sol menor (Op. 23)",
          motifKey: "chopin-nocturne",
          catalogInfo: {
            systemName: "Opus & Catálogos Brown (B.) / Kobylańska (KK)",
            structure: "Obras con Opus comercial (Op. 1 al 65 en vida, Op. 66 al 74 póstumas de Fontana) y catálogos de manuscritos tempranos de Maurice Brown y Krystyna Kobylańska.",
            keyWorks: ["Op. 9 (Nocturnos)", "Op. 10 y 25 (Estudios para piano)", "Op. 23 (Balada n.º 1)", "Op. 28 (24 Preludios)", "Op. 53 (Polonesa Heroica)"]
          },
          periods: [
            {
              name: "Periodo Polaco de Juventud en Varsovia (1810–1830)",
              focus: "Estudios en el Conservatorio de Varsovia. Asimilación del folclore rural polaco y del estilo brillante para piano. Compone sus dos Conciertos para Piano antes de partir a los 20 años.",
              proposal: "Lirismo vocal del bel canto italiano transportado a las teclas del piano con acento patrio polaco."
            },
            {
              name: "Periodo Parisino y Relación con George Sand (1831–1849)",
              focus: "Llega a París tras el aplastamiento ruso del levantamiento de Varsovia. Rechaza los grandes auditorios ruidosos en favor de los salones íntimos. Acosado por la tuberculosis compone sus baladas, scherzos y nocturnos.",
              proposal: "El piano como confidencia íntima: el rubato (elasticidad del tiempo), disonancias cromáticas y melancolía trágica (el concepto polaco de 'Żal')."
            }
          ]
        },
        {
          id: "tchaikovsky",
          name: "Piotr Ilich Chaikovski",
          years: "1840 – 1893",
          role: "El Maestro del Drama Emocional y el Ballet Universal",
          initials: "PIT",
          image: "assets/portraits/tchaikovsky.jpg",
          whyExponent: "El compositor ruso más universal. Su capacidad para crear melodías arrebatadoras de desgarro interior y orquestaciones con una desgarradora carga emocional lo convirtieron en un fenómeno mundial.",
          milestones: [
            "Revolucionó el ballet elevándolo de mero acompañamiento bailable a drama sinfónico serio ('El Lago de los Cisnes', 'El Cascanueces', 'La Bella Durmiente').",
            "Compuso la Sinfonía n.º 6 'Patética', una de las despedidas musicales más estremecedoras de la historia."
          ],
          masterpiece: "Sinfonía n.º 6 'Patética' (Op. 74) / Concierto para Piano n.º 1 (Op. 23)",
          motifKey: "tchaikovsky-swan",
          catalogInfo: {
            systemName: "Opus & Catálogo ČW (Vaidman-Korabelnikova)",
            structure: "Opus 1 al 80 con catalogación temática oficial del Museo Chaikovski de Klin.",
            keyWorks: ["Op. 23 (Concierto para piano n.º 1)", "Op. 74 (Sinfonía n.º 6 Patética)", "Op. 20 (El Lago de los Cisnes)", "Op. 71 (El Cascanueces)"]
          },
          periods: [
            {
              name: "Etapa del Conservatorio de Moscú (1866–1877)",
              focus: "Profesor de armonía. Lucha con su orientación sexual en la Rusia imperial. Compone el Concierto para piano n.º 1 y el ballet 'El Lago de los Cisnes'.",
              proposal: "Fusión del romanticismo sinfónico occidental europeo con el lirismo folclórico ruso y la pasión melódica desbordada."
            },
            {
              name: "Madurez Internacional y Mecenazgo de Nadezhda von Meck (1878–1893)",
              focus: "Pensión económica que le permite dedicarse a componer sin dar clases, con la condición de no verse jamás en persona con su mecenas. Compone sus sinfonías 4ª, 5ª y 6ª.",
              proposal: "El tema del 'Fatum' (el destino implacable) que aplasta la felicidad terrenal, culminando en el réquiem laico de la Sinfonía Patética."
            }
          ]
        },
        {
          id: "wagner",
          name: "Richard Wagner",
          years: "1813 – 1883",
          role: "El Revolucionario de la Obra de Arte Total (Gesamtkunstwerk)",
          initials: "RW",
          image: "assets/portraits/wagner.jpg",
          whyExponent: "Figura gigantesca y polémica que transformó para siempre el teatro y la música occidental. Diseñó su propio teatro en Bayreuth y concibió el drama musical como la fusión indivisible de poesía, escenografía, mito y música continua sin arias separadas.",
          milestones: [
            "Desarrolló el sistema del 'Leitmotiv' (motivo conductor que identifica a un personaje, objeto o emoción), técnica que usan hoy todos los compositores de cine como John Williams.",
            "Con el 'Acorde de Tristán' (1859) abrió una disonancia que no se resolvía, empujando la música hacia la atonalidad del siglo XX."
          ],
          masterpiece: "El Anillo del Nibelungo (Ciclo de 4 óperas) / Tristán e Isolda",
          motifKey: "wagner-valkyrie",
          catalogInfo: {
            systemName: "WWV (Wagner-Werk-Verzeichnis)",
            structure: "Compilado por John Deathridge, Martin Geck y Egon Voss en 1986. Contiene 113 obras cronológicas.",
            keyWorks: ["WWV 86 (El Anillo del Nibelungo)", "WWV 90 (Tristán e Isolda)", "WWV 96 (Los Maestros Cantores de Núremberg)", "WWV 111 (Parsifal)"]
          },
          periods: [
            {
              name: "Periodo Romántico Revolucionario en Dresde (1840–1849)",
              focus: "Director de la ópera de Dresde. Participa activamente en el levantamiento revolucionario de 1849, lo que le obliga a huir de Alemania como criminal buscado.",
              proposal: "Óperas románticas de transición ('El Holandés Errante', 'Tannhäuser', 'Lohengrin'): superación paulatina de la ópera de números cerrados."
            },
            {
              name: "Periodo del Exilio Suizo y 'Tristán e Isolda' (1849–1864)",
              focus: "Escribe sus ensayos teóricos ('Ópera y Drama') y redacta el poema del Anillo del Nibelungo. Amor prohibido con Mathilde Wesendonck.",
              proposal: "El cromatismo infinito y la melodía sin fin: los acordes no se resuelven, reflejando el anhelo erótico inextinguible."
            },
            {
              name: "Periodo de Bayreuth y el Rey Luis II de Baviera (1864–1883)",
              focus: "Financiado por el monarca bávaro construye el Festspielhaus de Bayreuth con foso de orquesta invisible. Estreno de la Tetralogía completa y 'Parsifal'.",
              proposal: "La orquesta oculta como el inconsciente freudiano del drama que guía psicológicamente la acción mitológica."
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
      tagline: "La explosión del color, la ruptura del ritmo y la era atonal",
      context: "Guerras mundiales, trincheras con gas mostaza, psicoanálisis de Freud, teoría de la relatividad de Einstein, cine e industrialización. Los compositores sienten que la tonalidad tradicional se agotó y buscan nuevos lenguajes radicales: el color tímbrico, el dodecafonismo y la violencia rítmica.",
      breakthrough: "Impresionismo tímbrico, abolición de la tonalidad jerárquica (Atonalismo), invención del Dodecafonismo serial y polirritmias brutales.",
      instruments: "Ondas Martenot, sintetizadores tempranos, percusión expandida (yunques, sirenas), orquesta de cámara recortada.",
      exponents: [
        {
          id: "debussy",
          name: "Claude Debussy",
          years: "1862 – 1918",
          role: "El Pintor del Sonido y la Luz Impresionista",
          initials: "CD",
          image: "assets/portraits/debussy.jpg",
          whyExponent: "Francés rebelde que rompió la tiranía de la armonía germánica. En lugar de tensar acordes hacia una tónica obligada, trataba a cada acorde como un color pictórico libre, utilizando escalas de tonos enteros y pentatónicas exóticas.",
          milestones: [
            "Con el 'Preludio a la Siesta de un Fauno' (1894), Pierre Boulez dijo que 'la música moderna despertó'.",
            "Creó texturas orquestales donde el agua, la niebla y la noche se perciben de forma casi táctil ('La Mer')."
          ],
          masterpiece: "Clair de Lune (Suite Bergamasque) / La Mer",
          motifKey: "debussy-clair",
          catalogInfo: {
            systemName: "L. (Catálogo Lesure)",
            structure: "Compilado por François Lesure en 1977 y revisado en 2001. Contiene 141 obras catalogadas cronológicamente.",
            keyWorks: ["L. 75 (Suite Bergamasque con Clair de Lune)", "L. 86 (Preludio a la Siesta de un Fauno)", "L. 109 (La Mer)", "L. 100 (Ópera Pelléas et Mélisande)"]
          },
          periods: [
            {
              name: "Periodo Bohemio y Fascinación Oriental (1884–1894)",
              focus: "Gana el Premio de Roma. Visita la Exposición Universal de París de 1889 donde escucha el Gamelán de Java. Adopta las escalas pentatónicas.",
              proposal: "Liberación del acorde: el acorde no necesita resolver en una tónica; existe como timbre y luz en el espacio."
            },
            {
              name: "Periodo de Plenitud Simbólica e Impresionista (1894–1918)",
              focus: "Estreno de 'Pelléas et Mélisande' y de los bocetos sinfónicos 'La Mer'. Enfrenta el cáncer terminal mientras la Primera Guerra Mundial bombardea París.",
              proposal: "El sonido líquido y la evaporación de las formas geométricas rígidas en favor de un flujo temporal continuo."
            }
          ]
        },
        {
          id: "stravinsky",
          name: "Ígor Stravinski",
          years: "1882 – 1971",
          role: "El Camaleón del Ritmo que Provocó un Motín",
          initials: "IS",
          image: "assets/portraits/stravinsky.jpg",
          whyExponent: "Compositor ruso cuya versatilidad marcó las tres grandes olas del siglo XX (Rusa primigenia, Neoclásica y Serial). Puso al ritmo en el trono principal de la música moderna.",
          milestones: [
            "El estreno de 'La Consagración de la Primavera' en París (1913) provocó peleas a golpes en la platea debido a sus acordes disonantes percusivos y compases cambiantes.",
            "Inspiró el neoclasicismo y transformó para siempre la rítmica del jazz y del rock progresivo."
          ],
          masterpiece: "La Consagración de la Primavera / El Pájaro de Fuego",
          motifKey: "stravinsky-rite",
          catalogInfo: {
            systemName: "Catálogo White (E.W. White)",
            structure: "Catalogado por Eric Walter White en 1966 cronológicamente con más de 100 obras maestras.",
            keyWorks: ["El Pájaro de Fuego (1910)", "Petrushka (1911)", "La Consagración de la Primavera (1913)", "Sinfonía de los Salmos (1930)"]
          },
          periods: [
            {
              name: "Periodo Ruso de los Ballets Rusos de Diáguilev (1910–1919)",
              focus: "Colaboración en París con Serguéi Diáguilev. Invención de un lenguaje bárbaro, politonal y de compases asimétricos violentos.",
              proposal: "El ritmo como energía primaria destructiva que derriba la complacencia burguesa anterior a la Gran Guerra."
            },
            {
              name: "Periodo Neoclásico (1920–1951)",
              focus: "Exilio en Suiza y Francia. Regreso irónico a las formas de Bach, Pergolesi y Mozart ('Pulcinella', 'Oedipus Rex').",
              proposal: "La música no expresa nada salvo a sí misma: sobriedad formal, orquestas reducidas y artesanía anti-romántica."
            },
            {
              name: "Periodo Serial y Americano en Hollywood (1952–1971)",
              focus: "Instalado en Los Ángeles entabla amistad con Aldous Huxley y Robert Craft. Adopta tardíamente el método dodecafónico de Schoenberg.",
              proposal: "Serialismo austero aplicado a temas sacros y elegías espirituales ('Canticum Sacrum', 'Requiem Canticles')."
            }
          ]
        },
        {
          id: "schoenberg",
          name: "Arnold Schönberg",
          years: "1874 – 1951",
          role: "El Demoledor de la Tonalidad y Padre del Dodecafonismo",
          initials: "AS",
          image: "assets/portraits/schoenberg.jpg",
          whyExponent: "Creador de la Segunda Escuela de Viena. Al sentir que el cromatismo post-wagneriano había agotado la jerarquía tonal, 'emancipó la disonancia' e inventó el método de composición con 12 notas de igual jerarquía.",
          milestones: [
            "Sustituyó la escala mayor/menor por la serie dodecafónica (original, retrógrada, inversión e inversión retrógrada).",
            "Exiliado por el nazismo en Estados Unidos como profesor de John Cage y referente ético del siglo XX."
          ],
          masterpiece: "Pierrot Lunaire (Op. 21) / Variaciones para Orquesta (Op. 31)",
          motifKey: "schoenberg-12tone",
          catalogInfo: {
            systemName: "Opus (Op. 1 al 50) & Rufer Verzeichnis",
            structure: "50 números de opus oficiales más composiciones sin opus recopiladas por Josef Rufer.",
            keyWorks: ["Op. 4 (La Noche Transfigurada)", "Op. 11 (Tres Piezas para piano atonal)", "Op. 21 (Pierrot Lunaire)", "Op. 25 (Suite para piano dodecafónica)"]
          },
          periods: [
            {
              name: "Periodo Post-Romántico Tonal Tardío (1897–1907)",
              focus: "Influido por Brahms y Wagner. Compone obras con un cromatismo extremo al borde del abismo tonal ('Verklärte Nacht').",
              proposal: "Empujar la armonía funcional hasta su máxima saturación emocional."
            },
            {
              name: "Periodo Atonal Libre y Expresionista (1908–1920)",
              focus: "Rompe con la tónica. Amistad con Wassily Kandinsky y el grupo 'Der Blaue Reiter'. Invención del 'Sprechgesang' (canto hablado).",
              proposal: "La disonancia no necesita resolución: debe plasmar las angustias y pesadillas del inconsciente freudiano."
            },
            {
              name: "Periodo Dodecafónico Serial y Exilio en EE.UU. (1921–1951)",
              focus: "Invención del método de composición con 12 notas. Huye de Berlín ante la persecución nazi en 1933 y enseña en Los Ángeles (UCLA).",
              proposal: "Democracia estricta de las 12 notas: ninguna nota puede repetirse antes de que las otras once hayan sonado en la serie."
            }
          ]
        }
      ]
    },
    {
      id: "contemporanea",
      name: "Contemporánea & Actualidad",
      period: "1975 – Presente",
      accent: "#f59e0b",
      tagline: "El Minimalismo, la épica del cine y el nuevo misticismo sonoro",
      context: "La era digital, globalización y sociedad multimedia. Tras la aridez del serialismo hipercomplejo de posguerra, los compositores reconectan con la emoción pública a través de la repetición hipnótica, la serenidad meditativa y la música cinematográfica.",
      breakthrough: "Minimalismo (estructuras repetitivas y desfases temporales), Minimalismo Sagrado (espiritualidad y silencio), y la orquesta sinfónica como reina indiscutible del cine y videojuegos.",
      instruments: "Orquesta sinfónica hibridada con diseño sonoro digital, sintetizadores modulares, cellos procesados por pedales DSP.",
      exponents: [
        {
          id: "philip-glass",
          name: "Philip Glass",
          years: "1937 – Presente",
          role: "El Arquitecto del Minimalismo Hipnótico",
          initials: "PG",
          image: "assets/portraits/philip-glass.jpg",
          whyExponent: "Uno de los compositores vivos más influyentes de la historia. Despojó a la música de desarrollos dramáticos tradicionales para construir catedrales de arpegios repetitivos que evolucionan milimétricamente.",
          milestones: [
            "Revolucionó la ópera contemporánea con 'Einstein on the Beach' (1976).",
            "Puente directo entre la música clásica, el rock experimental (David Bowie, Brian Eno) y el cine ('Koyaanisqatsi', 'Las Horas')."
          ],
          masterpiece: "Metamorphosis / Glassworks",
          motifKey: "glass-minimalism",
          catalogInfo: {
            systemName: "Dunvagen Music Publishers Catalog",
            structure: "Más de 14 sinfonías, 30 óperas y decenas de conciertos para solista organizados por fecha y encargo.",
            keyWorks: ["Glassworks (1981)", "Einstein on the Beach (1976)", "Metamorphosis I-V (1988)", "Banda sonora de Las Horas (2002)"]
          },
          periods: [
            {
              name: "Periodo Minimalista Radical en Nueva York (1967–1976)",
              focus: "Estudios con Nadia Boulanger y transcripciones para Ravi Shankar. Conduce taxis y trabaja de fontanero mientras funda el Philip Glass Ensemble.",
              proposal: "Estructuras rítmicas aditivas de la música india aplicadas a tríadas occidentales repetidas sin modulación tradicional."
            },
            {
              name: "Periodo Sinfónico y Cinematográfico de Masas (1980–Presente)",
              focus: "Firma con Sony Classical. Compone para Hollywood, teatro experimental y las salas de concierto más prestigiosas del mundo.",
              proposal: "El tiempo circular hipnótico como viaje de introspección ante la velocidad alienante del siglo XXI."
            }
          ]
        },
        {
          id: "arvo-part",
          name: "Arvo Pärt",
          years: "1935 – Presente",
          role: "El Místico del Silencio y la Técnica Tintinnabuli",
          initials: "AP",
          image: "assets/portraits/arvo-part.jpg",
          whyExponent: "Compositor estonio que inventó un estilo radicalmente despojado llamado 'tintinnabuli' (como el tañido de pequeñas campanas). Su música transmite una paz y trascendencia casi celestial en medio del ruido contemporáneo.",
          milestones: [
            "El compositor clásico vivo más interpretado en todo el planeta durante una década consecutiva.",
            "Demostró que una sola tríada mayor y dos notas en silencio pueden emocionar más que cien instrumentos a máxima potencia."
          ],
          masterpiece: "Spiegel im Spiegel (1978) / Für Alina",
          motifKey: "part-tintinnabuli",
          catalogInfo: {
            systemName: "Universal Edition Arvo Pärt Archive",
            structure: "Publicado por Universal Edition en Viena y conservado en el Centro Arvo Pärt de Laulasmaa, Estonia.",
            keyWorks: ["Für Alina (1976)", "Fratres (1977)", "Cantus in Memoriam Benjamin Britten (1977)", "Spiegel im Spiegel (1978)"]
          },
          periods: [
            {
              name: "Periodo Vanguardista y Conflicto con la Censura Soviética (1958–1968)",
              focus: "Compositor de la radio estonia bajo el régimen de la URSS. Experimenta con el serialismo y el collage ('Nekrolog', 'Credo'). Suspensión por motivos religiosos.",
              proposal: "La crisis de la vanguardia disonante que conduce a un callejón sin salida espiritual."
            },
            {
              name: "Silencio Creativo y Nacimiento del Tintinnabuli (1968–Presente)",
              focus: "Ocho años de silencio casi total estudiando el canto gregoriano medieval y la polifonía francoflamenca. Emerge en 1976 con 'Für Alina'.",
              proposal: "La voz de campana (tríada pura) combinada con una línea melódica que camina paso a paso: '1 + 1 = 1'."
            }
          ]
        },
        {
          id: "john-williams",
          name: "John Williams",
          years: "1932 – Presente",
          role: "El Heredero Directo de la Gran Tradición Sinfónica",
          initials: "JW",
          image: "assets/portraits/john-williams.jpg",
          whyExponent: "El compositor más escuchado y premiado de la historia del cine (54 nominaciones al Óscar). Mantuvo viva la orquesta sinfónica post-romántica de Wagner, Holst y Chaikovski en el corazón de miles de millones de personas de todas las edades.",
          milestones: [
            "Uso magistral del Leitmotiv wagneriano en Star Wars, Indiana Jones, Jurassic Park, E.T. y Harry Potter.",
            "Hizo que tres generaciones completas reconozcan de inmediato un intervalo de segunda menor (Tiburón) o un acorde de cuarta heroica."
          ],
          masterpiece: "Suite de Star Wars / La Lista de Schindler / Jurassic Park",
          motifKey: "williams-theme",
          catalogInfo: {
            systemName: "Catalog of Film Scores & Concert Works",
            structure: "Más de 120 bandas sonoras sinfónicas, además de conciertos de concierto para violín, violonchelo, trompeta y tuba.",
            keyWorks: ["Star Wars Suite (1977)", "La Lista de Schindler (Tema para violín solista, 1993)", "Jurassic Park (1993)", "Concierto para Violonchelo y Orquesta (1994)"]
          },
          periods: [
            {
              name: "Periodo Jazzístico y Televisión Temprana (1956–1973)",
              focus: "Pianista de jazz en Nueva York ('Little Johnny Love') y compositor para series televisivas en Hollywood ('Lost in Space', 'The Time Tunnel').",
              proposal: "Oficio orquestal vertiginoso, contrapunto dramático y conocimiento íntimo de los metales de Hollywood."
            },
            {
              name: "La Era de Oro con Steven Spielberg y George Lucas (1974–Presente)",
              focus: "Rescate de la gran orquesta sinfónica de 90 músicos cuando el cine de los 70 solo usaba sintetizadores o rock. Dirección de la Boston Pops Orchestra.",
              proposal: "El Leitmotiv como arquitectura emocional invisible que une escenas visuales y personajes en mitologías universales."
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
        originReason: "Stravinski tampoco numeró sus obras con Opus; el catálogo académico de Kirchmeyer (abreviado K.) clasifica cronológicamente sus 112 composiciones y arreglos."
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
      mood: "⚡ Necesito Energía Máxima y Motivación",
      piece: "Beethoven - Sinfonía n.º 7 (4º Movimiento: Allegro con brio)",
      why: "Llamada por Wagner 'la apoteosis de la danza'. Una avalancha rítmica imparable que te subirá la adrenalina más que 3 tazas de café espresso."
    },
    {
      mood: "🧠 Concentración para Trabajar o Estudiar",
      piece: "J.S. Bach - Variaciones Goldberg, BWV 988",
      why: "Construidas sobre una línea de bajo recurrente (ground bass) de 32 notas —no un bajo continuo—, cuya regularidad armónica ofrece un acompañamiento ideal para la lectura y el estudio."
    },
    {
      mood: "🌌 Paz Nocturna, Descompresión y Calma",
      piece: "Claude Debussy - Clair de Lune",
      why: "Un remanso de terciopelo sonoro. Notas como gotas de luz de luna que disuelven el estrés del día sin prisas."
    },
    {
      mood: "🎬 Pasión Cinematográfica y Épica",
      piece: "Gustav Holst - Los Planetas ('Marte, el Portador de la Guerra')",
      why: "La obra que inspiró directamente la música de Star Wars y Gladiador. Ritmo en 5/4 amenazante y metales apocalípticos."
    }
  ]
};

// Exportación modular limpia para entorno Node (Tests) y Navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUSIC_DATA;
}

if (typeof window !== "undefined") { window.MUSIC_DATA = MUSIC_DATA; }
