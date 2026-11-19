/**
 * DATA-MUSIC.JS
 * Ecosistema IN2TECHMX - Odisea Clásica
 * Base de datos musicológica exhaustiva, determinista y auditada.
 */

const MUSIC_DATA = {
  project: {
    title: "Odisea de la Música Clásica",
    subtitle: "El lenguaje de las emociones humanas desmitificado para todos",
    version: "1.0.0",
    curator: "Director de Desarrollo (DD) - IN2TECHMX",
    standard: "+10,000€ Vanguard Craft / Cero AI Slop"
  },

  // DEFINICIÓN DIDÁCTICA FUNDAMENTAL
  whatIsClassicalMusic: {
    summary: "Más que un 'género' estático de música para élites con peluca, la música clásica es una tradición viva de más de mil años de música culta occidental caracterizada por su precisión de notación (la partitura), su desarrollo armónico arquitectónico y su capacidad de narrar la condición humana sin depender necesariamente de palabras.",
    myths: [
      {
        myth: "Es música aburrida y para dormirse.",
        reality: "Tiene pasajes de furia, caos, éxtasis y suspenso que superan a cualquier banda sonora de acción (ej. el 'Dies Irae' de Verdi o 'La Consagración de la Primavera' de Stravinsky)."
      },
      {
        myth: "Es solo para expertos o élites intelectuales.",
        reality: "Fue la música popular y festiva de su tiempo; Bach tocaba en cafeterías, Mozart escribía para teatros populares de comedia y Verdi era coreado por obreros en las calles de Milán."
      },
      {
        myth: "Murió hace cientos de años.",
        reality: "Está en su apogeo: vive en el cine (Star Wars, Interestelar), en los videojuegos (Zelda, Elden Ring) y en compositores vivos como Max Richter, Arvo Pärt o John Williams."
      }
    ],
    corePillars: [
      {
        icon: "🎼",
        title: "La Partitura como Arquitectura",
        desc: "A diferencia de las tradiciones puramente orales o improvisadas, cada nota, silencio, articulación, tempo y volumen está meticulosamente escrito. Esto permite que una orquesta de 100 personas sincronice su mente en una sola obra masiva."
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

  // CRONOLOGÍA / TIMELINE HISTÓRICO COMPLETO
  eras: [
    {
      id: "medieval",
      name: "Música Medieval",
      period: "c. 500 – 1400",
      accent: "#8b5cf6",
      tagline: "El nacimiento de la notación y la espiritualidad del unísono",
      context: "Tras la caída de Roma, los monasterios europeos preservan el saber. Nace la necesidad de fijar los cantos sagrados para que toda la cristiandad cante las mismas oraciones sin distorsión oral.",
      breakthrough: "Invención del tetragrama por Guido d'Arezzo y surgimiento de la polifonía primitiva (organum) en la Catedral de Notre Dame de París.",
      instruments: "Órgano portativo, laúd medieval, viola de arco, salterio, chirimía.",
      exponents: [
        {
          id: "guido-darezzo",
          name: "Guido d'Arezzo",
          years: "c. 991 – 1050",
          role: "El Padre de la Notación Musical",
          avatar: "📜",
          whyExponent: "Sin él, hoy no podríamos leer música. Inventó el sistema de 4 líneas (tetragrama) y bautizó las notas musicales (Ut-Re-Mi-Fa-Sol-La) a partir de las sílabas del himno a San Juan Bautista.",
          milestones: [
            "Creó la 'Mano Guidoniana', la primera herramienta mnemotécnica pedagógica para enseñar canto a cualquier persona.",
            "Permitió por primera vez en la historia que una persona aprendiera una melodía sin haberla escuchado antes jamás."
          ],
          masterpiece: "Micrologus (Tratado fundacional de pedagogía musical)",
          motifKey: "gregoriano"
        },
        {
          id: "hildegarda-von-bingen",
          name: "Hildegarda de Bingen",
          years: "1098 – 1179",
          role: "La Mística Visionaria del Canto Sacro",
          avatar: "✨",
          whyExponent: "Abadesa, científica y filósofa alemana. Creó melodías con una amplitud de registro vocal y lirismo poético que rompían la estricta austeridad del canto gregoriano tradicional.",
          milestones: [
            "Primera compositora cuya biografía e identidad autoral se conserva de forma documentada.",
            "Compositora de 'Ordo Virtutum' (c. 1151), la primera obra de teatro musical moral y dramática conocida."
          ],
          masterpiece: "Symphonia armonie celestium revelationum",
          motifKey: "hildegarda"
        },
        {
          id: "leonin-perotin",
          name: "Léonin & Pérotin (Escuela de Notre Dame)",
          years: "c. 1150 – 1220",
          role: "Los Pioneros de la Polifonía Compleja",
          avatar: "⛪",
          whyExponent: "Transformaron el canto llano monódico en composiciones a dos, tres y cuatro voces simultáneas con métricas rítmicas organizadas (modos rítmicos).",
          milestones: [
            "Creación del 'Magnus Liber Organi' (Gran Libro del Órgano).",
            "Nacimiento del motete medieval y las primeras composiciones a cuatro voces de la historia europea."
          ],
          masterpiece: "Viderunt Omnes (Pérotin, a 4 voces)",
          motifKey: "organum"
        }
      ]
    },
    {
      id: "renacimiento",
      name: "El Renacimiento",
      period: "c. 1400 – 1600",
      accent: "#10b981",
      tagline: "El humanismo, la divina proporción sonora y el contrapunto modal",
      context: "El redescubrimiento del arte clásico grecorromano, la invención de la imprenta (Gutenberg/Petrucci) y la reforma protestante provocan una revolución cultural. La música busca la belleza terrenal, la claridad poética y el equilibrio de las voces.",
      breakthrough: "Perfeccionamiento del contrapunto imitativo (las voces se imitan una a otra con gracia armónica) y nacimiento del madrigal.",
      instruments: "Laúd renacentista, viola da gamba, sacabuche (trombón arcaico), clavecín primitivo, flauta dulce.",
      exponents: [
        {
          id: "josquin-des-prez",
          name: "Josquin des Prez",
          years: "c. 1450 – 1521",
          role: "El Miguel Ángel de la Música",
          avatar: "🎨",
          whyExponent: "Considerado unánimemente por sus contemporáneos (incluyendo Martín Lutero) como el genio supremo de su era. Lutero dijo de él: 'Josquin es el amo de las notas; ellas hacen lo que él quiere; los demás músicos hacen lo que las notas quieren'.",
          milestones: [
            "Introdujo la expresión de los afectos y el sentido dramático del texto en la música sacra.",
            "Popularizó la técnica del contrapunto imitativo continuo que definió el estilo vocal renacentista."
          ],
          masterpiece: "Missa Pange Lingua / Ave Maria... Virgo Serena",
          motifKey: "josquin"
        },
        {
          id: "palestrina",
          name: "Giovanni Pierluigi da Palestrina",
          years: "1525 – 1594",
          role: "El Salvador de la Polifonía Sacra",
          avatar: "🕊️",
          whyExponent: "Fijó el ideal de pureza polifónica católica. Cuenta la historia que durante el Concilio de Trento los obispos querían prohibir la polifonía porque las voces complejas tapaban las palabras de Dios; su Misa del Papa Marcelo demostró que texto y polifonía podían convivir en sublime claridad.",
          milestones: [
            "Estableció el estándar de contrapunto más estudiado en la historia académica (el estilo Palestrina).",
            "Equilibrio absoluto entre disonancia controlada y consonancia luminosa."
          ],
          masterpiece: "Missa Papae Marcelli (1567)",
          motifKey: "palestrina"
        }
      ]
    },
    {
      id: "barroco",
      name: "El Barroco",
      period: "c. 1600 – 1750",
      accent: "#e5b85c",
      tagline: "El claroscuro del drama, el bajo continuo y la arquitectura de la fuga",
      context: "Época de monarquías absolutistas, descubrimientos astronómicos (Galileo, Newton) y exuberancia teatral. La música adopta el contraste dinámico violento (forte/piano), la ornamentación virtuosa y la emoción teatral extrema.",
      breakthrough: "Invención de la Ópera, fijación de la armonía tonal (escalas Mayores y Menores), y el bajo continuo como motor rítmico-armónico.",
      instruments: "Clavecín, órgano de tubos barroco, violín barroco, laúd tiorba, oboe barroco.",
      exponents: [
        {
          id: "bach",
          name: "Johann Sebastian Bach",
          years: "1685 – 1750",
          role: "La Cumbre Matemática y Espiritual de la Música",
          avatar: "👑",
          whyExponent: "El arquitecto definitivo. Tomó todas las formas musicales existentes (fugas, cantatas, conciertos, pasiones) y las llevó a un nivel de sofisticación armónica, profundidad mística y perfección estructural nunca superado.",
          milestones: [
            "Demostró la viabilidad de la afinación moderna con 'El Clave Bien Temperado' (48 preludios y fugas en todas las 24 tonalidades mayores y menores).",
            "Llevó el contrapunto a su límite abstracto en 'El Arte de la Fuga' y 'La Ofrenda Musical'."
          ],
          masterpiece: "Toccata y Fuga en Re menor (BWV 565) / Pasión según San Mateo (BWV 244)",
          motifKey: "bach-toccata"
        },
        {
          id: "vivaldi",
          name: "Antonio Vivaldi",
          years: "1678 – 1741",
          role: "El Cura Rojo y el Maestro del Concierto",
          avatar: "🎻",
          whyExponent: "Sacerdote veneciano y violinista virtuoso. Estandarizó la estructura del concierto clásico en 3 movimientos (Rápido - Lento - Rápido) e impulsó la música descriptiva.",
          milestones: [
            "Escribió más de 500 conciertos, estableciendo la forma 'ritornello'.",
            "Pionero de la música programática con 'Las Cuatro Estaciones', donde la música imita cantos de pájaros, tormentas de verano y fogatas invernales."
          ],
          masterpiece: "Las Cuatro Estaciones (Op. 8, RV 269/315/293/297)",
          motifKey: "vivaldi-primavera"
        },
        {
          id: "handel",
          name: "George Frideric Händel",
          years: "1685 – 1759",
          role: "El Titán del Drama Coral y la Épica Orquestal",
          avatar: "⚡",
          whyExponent: "Compositor germano-británico maestro de la ópera italiana y creador del oratorio dramático en lengua inglesa. Su música posee una grandiosidad melódica y triunfal inigualable.",
          milestones: [
            "Creó el 'Aleluya' del Mesías, una de las piezas más famosas de la historia universal.",
            "Inventó el espectáculo orquestal al aire libre ('Música Acuática' y 'Música para los Reales Fuegos de Artificio')."
          ],
          masterpiece: "El Mesías (HWV 56) / Música Acuática (HWV 348–350)",
          motifKey: "handel-hallelujah"
        }
      ]
    },
    {
      id: "clasicismo",
      name: "El Clasicismo",
      period: "c. 1730/1750 – 1820",
      accent: "#38bdf8",
      tagline: "La Ilustración: Belleza, claridad simétrica y la forma sonata",
      context: "La Ilustración de Voltaire y Rousseau, el auge de la burguesía y el racionalismo. Se rechaza la pesadez y complejidad excesiva del contrapunto barroco en favor de melodías limpias, transparentes y estructuradas con elegancia geométrica.",
      breakthrough: "Invención de la Forma Sonata (exposición, desarrollo, reexposición) y consolidación de la orquesta sinfónica moderna.",
      instruments: "El fortepiano (ancestro del piano moderno), clarinete (incorporado a la orquesta), cuarteto de cuerdas clásico.",
      exponents: [
        {
          id: "haydn",
          name: "Joseph Haydn",
          years: "1732 – 1809",
          role: "El Padre de la Sinfonía y el Cuarteto de Cuerdas",
          avatar: "🎩",
          whyExponent: "Trabajó 30 años al servicio de los príncipes Esterházy, aislado del mundo, lo que según sus palabras le 'obligó a ser original'. Construyó los cimientos de la sinfonía y fue maestro de Mozart y Beethoven.",
          milestones: [
            "Compuso 106 sinfonías y 68 cuartetos de cuerda, definiendo la estructura clásica en 4 movimientos.",
            "Dotó a la música de ingenio cómico, sorpresas teatrales (ej. Sinfonía de la Sorpresa) y humanidad."
          ],
          masterpiece: "Sinfonía n.º 94 'La Sorpresa' (Hob. I:94) / Cuartetos Op. 76",
          motifKey: "haydn-surprise"
        },
        {
          id: "mozart",
          name: "Wolfgang Amadeus Mozart",
          years: "1756 – 1791",
          role: "El Genio Melódico Insuperable de la Humanidad",
          avatar: "🌟",
          whyExponent: "Niño prodigio que componía a los 5 años y dominó todos los géneros existentes (ópera, sinfonía, concierto para piano, música de cámara) con una fluidez que parecía dictada directamente desde el cielo, sin tachaduras.",
          milestones: [
            "Revolucionó la ópera convirtiéndola en un estudio psicológico de pasiones humanas reales (Don Giovanni, Las Bodas de Fígaro).",
            "Creó el modelo definitivo de Concierto para Piano solista dialogando con la orquesta."
          ],
          masterpiece: "Serenata n.º 13 'Eine kleine Nachtmusik' (K. 525) / Requiem en Re menor (K. 626)",
          motifKey: "mozart-nachtmusik"
        }
      ]
    },
    {
      id: "romanticismo",
      name: "El Romanticismo",
      period: "c. 1815 – 1910",
      accent: "#f43f5e",
      tagline: "El fuego interior: pasión desenfrenada, el héroe y la tragedia",
      context: "Revolución Francesa, guerras napoleónicas y Revolución Industrial. El artista ya no es un sirviente de nobles, sino un héroe solitario que expresa su dolor personal, su amor patológico y su fascinación por la naturaleza misteriosa.",
      breakthrough: "Expansión orquestal masiva (trombones, tubas, arpas, percusión colosal), el Poema Sinfónico, el virtuosismo instrumental de solistas y el cromatismo armónico libre.",
      instruments: "Piano de concierto moderno de cola de hierro, tuba, corno inglés, contrafagot, celesta.",
      exponents: [
        {
          id: "beethoven",
          name: "Ludwig van Beethoven",
          years: "1770 – 1827",
          role: "El Titán que Rompió las Reglas del Mundo",
          avatar: "⚡",
          whyExponent: "El puente definitivo entre el Clasicismo y el Romanticismo. A pesar de quedarse completamente sordo, canalizó su sufrimiento en obras revolucionarias de una fuerza cósmica nunca antes escuchada.",
          milestones: [
            "Con la 3ª Sinfonía ('Heroica') duplicó la duración de la sinfonía tradicional y la convirtió en un manifiesto ético.",
            "Con la 9ª Sinfonía introdujo por primera vez en la historia la voz humana y un coro en una sinfonía ('Oda a la Alegría')."
          ],
          masterpiece: "Sinfonía n.º 5 en Do menor (Op. 67) / Sinfonía n.º 9 (Op. 125)",
          motifKey: "beethoven-5th"
        },
        {
          id: "chopin",
          name: "Frédéric Chopin",
          years: "1810 – 1849",
          role: "El Poeta del Piano y el Alma del Rubato",
          avatar: "🎹",
          whyExponent: "Dedicó su genio casi exclusivamente al piano. Creó una técnica expresiva única ('tempo rubato': flexibilidad del tiempo como el latido de un corazón) y una poesía melancólica inmortal ligada a su Polonia natal.",
          milestones: [
            "Elevó géneros menores como el Nocturno, la Mazurka y la Polonesa a la categoría de alta obra de arte.",
            "Reinventó los 'Estudios' de piano (Op. 10 y Op. 25), convirtiendo ejercicios técnicos en obras cumbres del virtuosismo poético."
          ],
          masterpiece: "Nocturno en Mi bemol mayor (Op. 9 n.º 2) / Balada n.º 1 en Sol menor (Op. 23)",
          motifKey: "chopin-nocturne"
        },
        {
          id: "tchaikovsky",
          name: "Piotr Ilich Chaikovski",
          years: "1840 – 1893",
          role: "El Maestro del Drama Emocional y el Ballet Universal",
          avatar: "❄️",
          whyExponent: "El compositor ruso más universal. Su capacidad para crear melodías arrebatadoras y orquestaciones con una desgarradora carga emocional lo convirtieron en un fenómeno mundial.",
          milestones: [
            "Revolucionó la música de ballet elevándola a drama sinfónico serio ('El Lago de los Cisnes', 'El Cascanueces').",
            "Compuso la Sinfonía n.º 6 'Patética', una de las despedidas musicales más estremecedoras de la historia."
          ],
          masterpiece: "Sinfonía n.º 6 'Patética' (Op. 74) / Concierto para Piano n.º 1 (Op. 23)",
          motifKey: "tchaikovsky-swan"
        },
        {
          id: "wagner",
          name: "Richard Wagner",
          years: "1813 – 1883",
          role: "El Revolucionario de la Obra de Arte Total (Gesamtkunstwerk)",
          avatar: "🔥",
          whyExponent: "Figura gigantesca y polémica que cambió para siempre el teatro y la música occidental. Diseñó su propio teatro en Bayreuth y concibió la ópera como una fusión total de drama, poesía, escenografía y música continua sin arias separadas.",
          milestones: [
            "Desarrolló el sistema del 'Leitmotiv' (motivo conductor que identifica a un personaje, objeto o emoción), técnica que usan hoy todos los compositores de cine como John Williams.",
            "Con el 'Acorde de Tristán' (1859) abrió una disonancia que no se resolvía, empujando la música hacia la atonalidad del siglo XX."
          ],
          masterpiece: "El Anillo del Nibelungo (Ciclo de 4 óperas) / Tristán e Isolda",
          motifKey: "wagner-valkyrie"
        }
      ]
    },
    {
      id: "siglo-xx",
      name: "Siglo XX y Modernismo",
      period: "c. 1890 – 1975",
      accent: "#06b6d4",
      tagline: "La explosión del color, la ruptura del ritmo y la era atonal",
      context: "Guerras mundiales, psicoanálisis de Freud, teoría de la relatividad de Einstein, cine e industrialización. Los compositores sienten que la tonalidad tradicional se agotó y buscan nuevos lenguajes radicales: el color tímbrico, el dodecafonismo y la violencia rítmica.",
      breakthrough: "Impresionismo tímbrico, abolición de la tonalidad jerárquica (Atonalismo), invención del Dodecafonismo serial y polirritmias brutales.",
      instruments: "Ondas Martenot, sintetizadores tempranos, percusión expandida (yunques, sirenas), orquesta de cámara recortada.",
      exponents: [
        {
          id: "debussy",
          name: "Claude Debussy",
          years: "1862 – 1918",
          role: "El Pintor del Sonido y la Luz Impresionista",
          avatar: "🌙",
          whyExponent: "Francés rebelde que rompió la tiranía de la armonía germánica. En lugar de tensar acordes hacia una tónica obligada, trataba a cada acorde como un color pictórico libre, utilizando escalas de tonos enteros y pentatónicas exóticas.",
          milestones: [
            "Con el 'Preludio a la Siesta de un Fauno' (1894), Pierre Boulez dijo que 'la música moderna despertó'.",
            "Creó texturas orquestales donde el agua, la niebla y la noche se perciben de forma casi táctil."
          ],
          masterpiece: "Clair de Lune (Suite Bergamasque) / La Mer",
          motifKey: "debussy-clair"
        },
        {
          id: "stravinsky",
          name: "Ígor Stravinsky",
          years: "1882 – 1971",
          role: "El Camaleón del Ritmo que Provocó un Motín",
          avatar: "🌪️",
          whyExponent: "Compositor ruso cuya versatilidad marcó las tres grandes olas del siglo XX (Rusa primigenia, Neoclásica y Serial). Puso al ritmo en el trono principal de la música moderna.",
          milestones: [
            "El estreno de 'La Consagración de la Primavera' en París (1913) provocó peleas a golpes en la platea debido a sus acordes disonantes percusivos y compases cambiantes.",
            "Inspiró el neoclasicismo y transformó para siempre la rítmica del jazz y del rock progresivo."
          ],
          masterpiece: "La Consagración de la Primavera / El Pájaro de Fuego",
          motifKey: "stravinsky-rite"
        },
        {
          id: "schoenberg",
          name: "Arnold Schoenberg",
          years: "1874 – 1951",
          role: "El Demoledor de la Tonalidad y Padre del Dodecafonismo",
          avatar: "📐",
          whyExponent: "Creador de la Segunda Escuela de Viena. Tras considerar que la armonía tradicional ya no podía expresar las angustias del hombre moderno, 'emancipó la disonancia' e inventó el método de composición con 12 notas de igual jerarquía.",
          milestones: [
            "Sustituyó la escala tradicional por una serie dodecafónica (retrogradación, inversión).",
            "Fundó las bases de la música contemporánea experimental y la vanguardia académica."
          ],
          masterpiece: "Pierrot Lunaire (Op. 21) / Variaciones para Orquesta (Op. 31)",
          motifKey: "schoenberg-12tone"
        }
      ]
    },
    {
      id: "contemporanea",
      name: "Contemporánea & Actualidad",
      period: "1975 – Presente",
      accent: "#f59e0b",
      tagline: "El Minimalismo, la épica del cine y el nuevo misticismo sonoro",
      context: "La era digital, globalización y sociedad multimedia. Tras la aridez del serialismo hipercomplejo, los compositores reconectan con la emoción pública a través de la repetición hipnótica, la serenidad meditativa y la música cinematográfica.",
      breakthrough: "Minimalismo (estructuras repetitivas y desfases temporales), Minimalismo Sagrado (espiritualidad y silencio), y la orquesta sinfónica como reina indiscutible del cine y videojuegos.",
      instruments: "Orquesta sinfónica hibridada con diseño sonoro digital, sintetizadores modulares, cellos procesados por pedales DSP.",
      exponents: [
        {
          id: "philip-glass",
          name: "Philip Glass",
          years: "1937 – Presente",
          role: "El Arquitecto del Minimalismo Hipnótico",
          avatar: "⏳",
          whyExponent: "Uno de los compositores vivos más influyentes de la historia. Despojó a la música de desarrollos dramáticos tradicionales para construir catedrales de arpegios repetitivos que evolucionan milimétricamente.",
          milestones: [
            "Revolucionó la ópera contemporánea con 'Einstein on the Beach' (1976).",
            "Puente directo entre la música clásica, el rock experimental (David Bowie) y el cine (Las Horas, El Show de Truman)."
          ],
          masterpiece: "Metamorphosis / Glassworks",
          motifKey: "glass-minimalism"
        },
        {
          id: "arvo-part",
          name: "Arvo Pärt",
          years: "1935 – Presente",
          role: "El Místico del Silencio y la Técnica Tintinnabuli",
          avatar: "🕯️",
          whyExponent: "Compositor estonio que inventó un estilo radicalmente despojado llamado 'tintinnabuli' (como el tañido de pequeñas campanas). Su música transmite una paz y trascendencia casi celestial en medio del ruido contemporáneo.",
          milestones: [
            "El compositor clásico vivo más interpretado en todo el planeta durante una década consecutiva.",
            "Demostró que una sola tríada mayor y dos notas en silencio pueden emocionar más que cien instrumentos a máxima potencia."
          ],
          masterpiece: "Spiegel im Spiegel (1978) / Für Alina",
          motifKey: "part-tintinnabuli"
        },
        {
          id: "john-williams",
          name: "John Williams",
          years: "1932 – Presente",
          role: "El Heredero Directo de la Gran Tradición Sinfónica",
          avatar: "🎬",
          whyExponent: "El compositor más escuchado y premiado de la historia del cine (54 nominaciones al Óscar). Mantuvo viva la orquesta sinfónica post-romántica de Wagner, Holst y Chaikovski en el corazón de miles de millones de personas de todas las edades.",
          milestones: [
            "Uso magistral del Leitmotiv wagneriano en Star Wars, Indiana Jones, Jurassic Park y Harry Potter.",
            "Hizo que tres generaciones completas reconozcan de inmediato un intervalo de segunda menor (Tiburón) o un acorde de cuarta heroica."
          ],
          masterpiece: "Suite de Star Wars / La Lista de Schindler / Jurassic Park",
          motifKey: "williams-theme"
        }
      ]
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
        assignedTo: "Especialmente Ludwig van Beethoven",
        creator: "Georg Kinsky y Hans Halm (1955)",
        originReason: "Obras que Beethoven nunca asignó con número de opus comercial oficial (como bagatelas, canciones o danzas). ¡La famosísima 'Para Elisa' no tiene Opus, es WoO 59!"
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
      title: "Gimnasia Integral para el Cerebro (Neurociencia)",
      desc: "Escuchar música polifónica activa simultáneamente el hemisferio izquierdo (análisis lógico y patrones matemáticos) y el derecho (emoción pura e imaginación espacial). Estudios con resonancia magnética confirman que fortalece el cuerpo calloso y mejora la plasticidad neuronal."
    },
    {
      num: "02",
      title: "El Espejo de las Emociones No Simplificadas",
      desc: "Gran parte de la música comercial moderna empaqueta una sola emoción en 3 minutos. La música clásica expone la ambivalencia real: el duelo que se transmuta en consuelo, la euforia con una sombra de melancolía, el suspenso y la catarsis."
    },
    {
      num: "03",
      title: "El Código Fuente de Toda la Música Actual",
      desc: "Sin las disonancias de Bach no habría acordes de Jazz; sin los clímax dinámicos de Beethoven no existiría el rock de estadios; sin el Leitmotiv de Wagner no habría bandas sonoras de cine; sin el Canon de Pachelbel no existirían las progresiones armónicas de The Beatles o Daft Punk."
    },
    {
      num: "04",
      title: "El Antídoto al Algoritmo y a la Fragmentación Mental",
      desc: "Vivimos en una cultura de videos de 15 segundos y atención fragmentada. Sentarse a escuchar una obra de 20 minutos sin interrupciones es un acto de resistencia cognitiva, una meditación profunda y un entrenamiento para recuperar el foco profundo."
    },
    {
      num: "05",
      title: "Un Lenguaje Universal que Conecta Siglos",
      desc: "Cuando escuchas el grito de dolor de Beethoven o la serenidad de Bach, estás sintiendo exactamente lo que sintió un ser humano hace 250 años ante el amor, la muerte y el misterio. Es el puente empático más poderoso jamás construido."
    }
  ],

  // BRÚJULA PARA PRINCIPIANTES (POR DÓNDE EMPEZAR SEGÚN TU ÁNIMO)
  beginnerCompass: [
    {
      mood: "⚡ Necesito Energía Máxima y Motivación",
      piece: "Beethoven - Sinfonía n.º 7 (4º Movimiento: Allegro con brio)",
      why: "Llamada por Wagner 'la apoteosis de la danza'. Una avalancha rítmica imparable que te subirá la adrenalina más que 3 tazas de café espresso."
    },
    {
      mood: "🧠 Concentración Absoluta para Trabajar o Estudiar",
      piece: "J.S. Bach - Variaciones Goldberg (interpretadas por Glenn Gould)",
      why: "Estructura matemática impecable. Arreglos basados en un bajo continuo que calman la ansiedad y alinean las ondas cerebrales en modo de foco profundo."
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
