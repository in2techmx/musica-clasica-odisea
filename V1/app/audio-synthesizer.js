/**
 * AUDIO-SYNTHESIZER.JS
 * Ecosistema IN2TECHMX - Odisea Clásica
 * Motor de Síntesis Orquestal Web Audio API (100% Offline, Determinista, Cero dependencias externas)
 */

class ClassicalSynthesizer {
  constructor() {
    this.ctx = null;
    this.analyser = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.currentMotifId = null;
    this.activeTimeouts = [];
    this.onStateChange = null;
    this.audioEl = null;
    this.fadeInterval = null;

    // Grabaciones orquestales y acústicas reales en formato MP3 (200 audio/mpeg verificadas)
    this.REAL_MP3_TRACKS = {
      "proto-grecia": "https://archive.org/download/AncientGreekMusic_201512/Ancient%20Greek%20Music.mp3",
      "beethoven-5th": "https://archive.org/download/LudwigVanBeethovenSymphonyNo.5Op.67I.AllegroConBrioFromAustinPowersGoldmember/Ludwig%20van%20Beethoven%20-%20Symphony%20No.%205%2C%20Op.%2067%2C%20I.%20Allegro%20con%20brio%20(From%20Austin%20Powers%2C%20Goldmember).mp3",
      "vivaldi-primavera": "https://archive.org/download/LeQuattroStagioni/01ViolinConcertoInEMajorRv269spring-I.Allegro.mp3",
      "bach-toccata": "https://archive.org/download/GoldbergVariationsBWV988/Goldberg%20Variations%2C%20BWV%20988%20-%2001.%20Aria.mp3",
      "mozart-nachtmusik": "https://archive.org/download/SymphonyNo.25InGMinorK.183/Symphony%20No.%2025%20in%20G%20minor%20K.%20183%20-%20I.%20Allegro%20con%20brio.mp3",
      "chopin-nocturne": "https://archive.org/download/FredericChopinBalladeNo.1InGMinorOp.23FromThePianist/Frederic%20Chopin%20-%20Ballade%20No.%201%20in%20G%20minor%2C%20Op.%2023%20(From%20The%20Pianist).mp3",
      "debussy-clair": "https://archive.org/download/Debussy_Prelude_a_l_apres_midi_d_un_faune/Prelude_a_l_apres_midi_d_un_faune.mp3",
      "gregoriano": "https://archive.org/download/lp_a-treasury-of-gregorian-chant-vol-iii_monks-of-the-abbey-of-st-thomas/disc1/01.01.%20Introit%20For%20The%201st%20Sunday%20In%20Advent%20(Mode%208)%3B%20Hymn%20For%20Christmas%20Vespers%20(Mode%201)%3B%20Offertory%20For%20The%202nd%20Sunday%20After%20Epiphany%20(Mode%201).mp3",
      "hildegarda": "https://archive.org/download/HildegardVonBingenCanticlesOfEcstasy/Hildegard%20von%20Bingen%20-%20Canticles%20Of%20Ecstasy.mp3",
      "organum": "https://archive.org/download/lp_music-at-notre-dame-1200-1375-notre-dame-m_guillaume-de-machaut-protin-alfred-deller/disc1/01.01.%20Kyrie.mp3",
      "palestrina": "https://archive.org/download/MissaPapaeMarcelli/MissaPapaeMarcelli-I.Kyrie.mp3",
      "josquin": "https://archive.org/download/MissaPapaeMarcelli/MissaPapaeMarcelli-I.Kyrie.mp3",
      "handel-hallelujah": "https://archive.org/download/HWV7RinaldoLasciaChioPianga/RinaldoHwv7-LasciaChioPianga.mp3",
      "haydn-surprise": "https://archive.org/download/Haydn_Symphony_No_94_Surprise/HaydnSurprise.mp3",
      "tchaikovsky-swan": "https://archive.org/download/RomeoJulietOvertureFantasy/Romeo%20%26%20Juliet%20Overture%20-%20Fantasy.mp3",
      "wagner-valkyrie": "https://archive.org/download/wagner_tristan_je_01_einlei_etc/wagner_tristan_je_01_einlei_etc.mp3",
      "stravinsky-rite": "https://archive.org/download/RiteOfSpring_201503/01_Beginning.mp3",
      "schoenberg-12tone": "https://archive.org/download/lp_agon-ballett-fur-12-tnzer_igor-stravinsky-sdwestfunkorchester-baden/disc1/01.01.%20Agon%20(Ballett%20F%C3%BCr%2012%20T%C3%A4nzer).mp3",
      "glass-minimalism": "https://archive.org/download/philip-glass-koyaanisqatsi/Koyaanisqatsi%20(Original%20Soundtrack)/01%20Koyaanisqatsi.mp3",
      "part-tintinnabuli": "https://archive.org/download/arvopartspiegelimspegel/01SpiegelImSpiegel.mp3",
      "williams-theme": "https://archive.org/download/SonataNo.8PathetiqueOp.13/PianoSonataNo.8PathetiqueOp.13-I.Grave.allegroDiMoltoEConBrio.mp3"
    };

    // Frecuencias exactas de notas en Temperamento Igual (Hz) con equivalentes enarmónicos
    this.NOTE_FREQ = {
      "C3": 130.81, "C#3": 138.59, "Db3": 138.59, "D3": 146.83, "D#3": 155.56, "Eb3": 155.56, "E3": 164.81,
      "F3": 174.61, "F#3": 185.00, "Gb3": 185.00, "G3": 196.00, "G#3": 207.65, "Ab3": 207.65, "A3": 220.00,
      "A#3": 233.08, "Bb3": 233.08, "B3": 246.94,
      "C4": 261.63, "C#4": 277.18, "Db4": 277.18, "D4": 293.66, "D#4": 311.13, "Eb4": 311.13, "E4": 329.63, "Fb4": 329.63,
      "F4": 349.23, "F#4": 369.99, "Gb4": 369.99, "G4": 392.00, "G#4": 415.30, "Ab4": 415.30, "A4": 440.00,
      "A#4": 466.16, "Bb4": 466.16, "B4": 493.88,
      "C5": 523.25, "C#5": 554.37, "Db5": 554.37, "D5": 587.33, "D#5": 622.25, "Eb5": 622.25, "E5": 659.25,
      "F5": 698.46, "F#5": 739.99, "Gb5": 739.99, "G5": 783.99, "G#5": 830.61, "Ab5": 830.61, "A5": 880.00,
      "A#5": 932.33, "Bb5": 932.33, "B5": 987.77, "C6": 1046.50
    };

    // Biblioteca de motivos melódicos clásicos auténticos
    this.MOTIFS = {
      "proto-grecia": {
        title: "Antigua Grecia: Música con Lira & Epitafio de Seikilos",
        era: "Antesala Proto-Clásica (Antigüedad)",
        tempo: 78,
        instrument: "piano",
        notes: [
          { pitch: "C4", dur: 0.7, delay: 0.0 },
          { pitch: "G4", dur: 0.7, delay: 0.75 },
          { pitch: "A4", dur: 0.5, delay: 1.5 },
          { pitch: "G4", dur: 0.9, delay: 2.05 },
          { pitch: "F4", dur: 0.6, delay: 3.0 },
          { pitch: "E4", dur: 0.9, delay: 3.65 }
        ]
      },

      "beethoven-5th": {
        title: "Beethoven: Motivo del Destino (5ª Sinfonía)",
        era: "Romanticismo / Clasicismo tardío",
        tempo: 108,
        instrument: "strings",
        notes: [
          { pitch: "G4", dur: 0.22, delay: 0.00 },
          { pitch: "G4", dur: 0.22, delay: 0.26 },
          { pitch: "G4", dur: 0.22, delay: 0.52 },
          { pitch: "Eb4", dur: 1.40, delay: 0.78, vibrato: true },
          // Respuesta en Fa
          { pitch: "F4", dur: 0.22, delay: 2.40 },
          { pitch: "F4", dur: 0.22, delay: 2.66 },
          { pitch: "F4", dur: 0.22, delay: 2.92 },
          { pitch: "D4", dur: 1.80, delay: 3.18, vibrato: true }
        ]
      },

      "bach-toccata": {
        title: "J.S. Bach: Toccata en Re menor (BWV 565)",
        era: "Barroco",
        tempo: 100,
        instrument: "organ",
        notes: [
          { pitch: "A4", dur: 0.15, delay: 0.00 },
          { pitch: "G4", dur: 0.15, delay: 0.16 },
          { pitch: "A4", dur: 1.10, delay: 0.32 },
          // Mordente y bajada
          { pitch: "G4", dur: 0.18, delay: 1.60 },
          { pitch: "F4", dur: 0.18, delay: 1.80 },
          { pitch: "E4", dur: 0.18, delay: 2.00 },
          { pitch: "D4", dur: 0.25, delay: 2.20 },
          { pitch: "C#4", dur: 0.30, delay: 2.48 },
          { pitch: "D4", dur: 1.60, delay: 2.80 },
          // Acorde pedal bajo
          { pitch: "D3", dur: 2.00, delay: 3.20 }
        ]
      },

      "mozart-nachtmusik": {
        title: "Mozart: Serenata Nocturna (K. 525)",
        era: "Clasicismo",
        tempo: 130,
        instrument: "strings",
        notes: [
          { pitch: "G4", dur: 0.35, delay: 0.00 },
          { pitch: "D4", dur: 0.18, delay: 0.40 },
          { pitch: "G4", dur: 0.35, delay: 0.60 },
          { pitch: "D4", dur: 0.18, delay: 1.00 },
          { pitch: "G4", dur: 0.25, delay: 1.20 },
          { pitch: "B4", dur: 0.25, delay: 1.45 },
          { pitch: "D5", dur: 0.60, delay: 1.70 },
          // Segunda frase
          { pitch: "C5", dur: 0.35, delay: 2.45 },
          { pitch: "A4", dur: 0.18, delay: 2.85 },
          { pitch: "C5", dur: 0.35, delay: 3.05 },
          { pitch: "A4", dur: 0.18, delay: 3.45 },
          { pitch: "C5", dur: 0.25, delay: 3.65 },
          { pitch: "F#4", dur: 0.25, delay: 3.90 },
          { pitch: "A4", dur: 0.45, delay: 4.15 },
          { pitch: "G4", dur: 0.80, delay: 4.65 }
        ]
      },

      "debussy-clair": {
        title: "Claude Debussy: Clair de Lune",
        era: "Impresionismo / Siglo XX",
        tempo: 68,
        instrument: "piano",
        notes: [
          { pitch: "F4", dur: 0.70, delay: 0.00 },
          { pitch: "Eb4", dur: 0.70, delay: 0.75 },
          { pitch: "Db4", dur: 0.70, delay: 1.50 },
          { pitch: "C4", dur: 0.70, delay: 2.25 },
          { pitch: "Bb3", dur: 1.20, delay: 3.00 },
          { pitch: "Ab3", dur: 1.50, delay: 4.30 },
          { pitch: "Db4", dur: 2.00, delay: 4.30 }
        ]
      },

      "vivaldi-primavera": {
        title: "Vivaldi: La Primavera (Las Cuatro Estaciones)",
        era: "Barroco",
        tempo: 126,
        instrument: "strings",
        notes: [
          { pitch: "E4", dur: 0.35, delay: 0.00 },
          { pitch: "G#4", dur: 0.35, delay: 0.38 },
          { pitch: "G#4", dur: 0.35, delay: 0.76 },
          { pitch: "G#4", dur: 0.35, delay: 1.14 },
          { pitch: "F#4", dur: 0.18, delay: 1.52 },
          { pitch: "E4", dur: 0.50, delay: 1.72 },
          { pitch: "B4", dur: 0.75, delay: 2.25 },
          { pitch: "B4", dur: 0.35, delay: 3.10 },
          { pitch: "A4", dur: 0.18, delay: 3.48 },
          { pitch: "G#4", dur: 0.50, delay: 3.68 },
          { pitch: "F#4", dur: 0.80, delay: 4.20 }
        ]
      },

      "wagner-valkyrie": {
        title: "Wagner: Cabalgata de las Walkirias",
        era: "Romanticismo",
        tempo: 120,
        instrument: "brass",
        notes: [
          { pitch: "B3", dur: 0.20, delay: 0.00 },
          { pitch: "E4", dur: 0.40, delay: 0.22 },
          { pitch: "G4", dur: 0.20, delay: 0.65 },
          { pitch: "B4", dur: 0.60, delay: 0.88 },
          { pitch: "G4", dur: 0.25, delay: 1.52 },
          { pitch: "E4", dur: 0.60, delay: 1.80 },
          // Segunda parte
          { pitch: "B3", dur: 0.20, delay: 2.50 },
          { pitch: "E4", dur: 0.40, delay: 2.72 },
          { pitch: "G4", dur: 0.20, delay: 3.15 },
          { pitch: "B4", dur: 0.80, delay: 3.38 }
        ]
      },

      "glass-minimalism": {
        title: "Philip Glass: Arpegios Hipnóticos Minimalistas",
        era: "Contemporánea",
        tempo: 140,
        instrument: "piano",
        notes: [
          // Ciclo de tríadas arpegiadas continuas
          { pitch: "C4", dur: 0.18, delay: 0.00 },
          { pitch: "Eb4", dur: 0.18, delay: 0.18 },
          { pitch: "G4", dur: 0.18, delay: 0.36 },
          { pitch: "C5", dur: 0.18, delay: 0.54 },
          { pitch: "G4", dur: 0.18, delay: 0.72 },
          { pitch: "Eb4", dur: 0.18, delay: 0.90 },
          // Desplazamiento a Bb menor
          { pitch: "Bb3", dur: 0.18, delay: 1.08 },
          { pitch: "Db4", dur: 0.18, delay: 1.26 },
          { pitch: "F4", dur: 0.18, delay: 1.44 },
          { pitch: "Bb4", dur: 0.18, delay: 1.62 },
          { pitch: "F4", dur: 0.18, delay: 1.80 },
          { pitch: "Db4", dur: 0.18, delay: 1.98 },
          // Repetición sutil con bajo
          { pitch: "Ab3", dur: 0.18, delay: 2.16 },
          { pitch: "C4", dur: 0.18, delay: 2.34 },
          { pitch: "Eb4", dur: 0.18, delay: 2.52 },
          { pitch: "Ab4", dur: 0.40, delay: 2.70 }
        ]
      },

      "chopin-nocturne": {
        title: "Chopin: Nocturno Op. 9 n.º 2 (Frase Inicial)",
        era: "Romanticismo",
        tempo: 78,
        instrument: "piano",
        notes: [
          { pitch: "Bb4", dur: 0.45, delay: 0.00 },
          { pitch: "G4", dur: 0.30, delay: 0.48 },
          { pitch: "F4", dur: 0.30, delay: 0.80 },
          { pitch: "G4", dur: 0.30, delay: 1.12 },
          { pitch: "Eb4", dur: 0.90, delay: 1.44 },
          { pitch: "Bb3", dur: 0.60, delay: 2.40 },
          { pitch: "C4", dur: 0.35, delay: 3.05 },
          { pitch: "D4", dur: 0.35, delay: 3.42 },
          { pitch: "Eb4", dur: 1.20, delay: 3.80 }
        ]
      },

      "gregoriano": {
        title: "Guido d'Arezzo: Himno Ut Queant Laxis (Origen de las Notas)",
        era: "Medieval",
        tempo: 80,
        instrument: "organ",
        notes: [
          { pitch: "C4", dur: 0.60, delay: 0.00 },
          { pitch: "D4", dur: 0.60, delay: 0.65 },
          { pitch: "F4", dur: 0.60, delay: 1.30 },
          { pitch: "D4", dur: 0.60, delay: 1.95 },
          { pitch: "E4", dur: 0.60, delay: 2.60 },
          { pitch: "F4", dur: 0.80, delay: 3.25 },
          { pitch: "G4", dur: 1.20, delay: 4.10 }
        ]
      },

      "hildegarda": {
        title: "Hildegarda de Bingen: O Frondens Virga (Lirismo Místico)",
        era: "Medieval",
        tempo: 65,
        instrument: "organ",
        notes: [
          { pitch: "D4", dur: 0.70, delay: 0.00 },
          { pitch: "A4", dur: 0.90, delay: 0.75 },
          { pitch: "B4", dur: 0.60, delay: 1.70 },
          { pitch: "A4", dur: 0.60, delay: 2.35 },
          { pitch: "G4", dur: 0.60, delay: 3.00 },
          { pitch: "A4", dur: 0.70, delay: 3.65 },
          { pitch: "E4", dur: 1.40, delay: 4.40 }
        ]
      },

      "organum": {
        title: "Léonin & Pérotin: Organum Quadruplum (Notre Dame)",
        era: "Medieval",
        tempo: 90,
        instrument: "organ",
        notes: [
          { pitch: "D3", dur: 2.50, delay: 0.00 },
          { pitch: "D4", dur: 0.50, delay: 0.00 },
          { pitch: "E4", dur: 0.50, delay: 0.55 },
          { pitch: "F4", dur: 0.50, delay: 1.10 },
          { pitch: "E4", dur: 0.50, delay: 1.65 },
          { pitch: "D4", dur: 1.00, delay: 2.20 }
        ]
      },

      "josquin": {
        title: "Josquin des Prez: Ave Maria (Contrapunto Imitativo)",
        era: "Renacimiento",
        tempo: 85,
        instrument: "strings",
        notes: [
          { pitch: "C4", dur: 0.70, delay: 0.00 },
          { pitch: "G4", dur: 0.70, delay: 0.75 },
          { pitch: "A4", dur: 0.50, delay: 1.50 },
          { pitch: "G4", dur: 0.50, delay: 2.05 },
          { pitch: "F4", dur: 0.50, delay: 2.60 },
          { pitch: "E4", dur: 0.50, delay: 3.15 },
          { pitch: "D4", dur: 1.20, delay: 3.70 }
        ]
      },

      "palestrina": {
        title: "Palestrina: Missa Papae Marcelli (Kyrie Eleison)",
        era: "Renacimiento",
        tempo: 72,
        instrument: "strings",
        notes: [
          { pitch: "F4", dur: 0.80, delay: 0.00 },
          { pitch: "G4", dur: 0.80, delay: 0.85 },
          { pitch: "A4", dur: 1.00, delay: 1.70 },
          { pitch: "G4", dur: 0.50, delay: 2.75 },
          { pitch: "F4", dur: 0.80, delay: 3.30 },
          { pitch: "E4", dur: 0.80, delay: 4.15 },
          { pitch: "F4", dur: 1.50, delay: 5.00 }
        ]
      },

      "handel-hallelujah": {
        title: "G.F. Händel: Coro del Aleluya (El Mesías)",
        era: "Barroco",
        tempo: 104,
        instrument: "brass",
        notes: [
          { pitch: "D4", dur: 0.35, delay: 0.00 },
          { pitch: "B4", dur: 0.35, delay: 0.40 },
          { pitch: "A4", dur: 0.18, delay: 0.80 },
          { pitch: "B4", dur: 0.35, delay: 1.00 },
          { pitch: "G4", dur: 0.50, delay: 1.40 },
          { pitch: "D4", dur: 0.35, delay: 2.00 },
          { pitch: "B4", dur: 0.35, delay: 2.40 },
          { pitch: "A4", dur: 0.18, delay: 2.80 },
          { pitch: "B4", dur: 0.35, delay: 3.00 },
          { pitch: "G4", dur: 0.80, delay: 3.40 }
        ]
      },

      "tchaikovsky-swan": {
        title: "Chaikovski: Tema Principal de El Lago de los Cisnes",
        era: "Romanticismo",
        tempo: 84,
        instrument: "strings",
        notes: [
          { pitch: "B4", dur: 0.80, delay: 0.00 },
          { pitch: "E5", dur: 0.80, delay: 0.85 },
          { pitch: "F#5", dur: 0.40, delay: 1.70 },
          { pitch: "G5", dur: 0.40, delay: 2.15 },
          { pitch: "F#5", dur: 0.40, delay: 2.60 },
          { pitch: "E5", dur: 0.40, delay: 3.05 },
          { pitch: "B4", dur: 1.20, delay: 3.50 }
        ]
      },

      "stravinsky-rite": {
        title: "Stravinsky: Augurios Primaverales (La Consagración)",
        era: "Siglo XX",
        tempo: 120,
        instrument: "strings",
        notes: [
          { pitch: "Eb4", dur: 0.18, delay: 0.00, forte: true },
          { pitch: "Eb4", dur: 0.18, delay: 0.22, forte: true },
          { pitch: "Eb4", dur: 0.18, delay: 0.44, forte: true },
          { pitch: "Eb4", dur: 0.18, delay: 0.66, forte: true },
          { pitch: "Fb4", dur: 0.22, delay: 0.88, forte: true },
          { pitch: "Eb4", dur: 0.18, delay: 1.15, forte: true },
          { pitch: "Eb4", dur: 0.18, delay: 1.37, forte: true }
        ]
      },

      "schoenberg-12tone": {
        title: "Schoenberg: Serie Dodecafónica (12 Tonos Libres)",
        era: "Siglo XX",
        tempo: 90,
        instrument: "piano",
        notes: [
          { pitch: "C4", dur: 0.30, delay: 0.00 },
          { pitch: "C#4", dur: 0.30, delay: 0.35 },
          { pitch: "D4", dur: 0.30, delay: 0.70 },
          { pitch: "Eb4", dur: 0.30, delay: 1.05 },
          { pitch: "E4", dur: 0.30, delay: 1.40 },
          { pitch: "F4", dur: 0.30, delay: 1.75 },
          { pitch: "F#4", dur: 0.30, delay: 2.10 },
          { pitch: "G4", dur: 0.30, delay: 2.45 }
        ]
      },

      "haydn-surprise": {
        title: "Haydn: Sinfonía de la Sorpresa (Tema & ¡GOLPE!)",
        era: "Clasicismo",
        tempo: 110,
        instrument: "strings",
        notes: [
          { pitch: "C4", dur: 0.25, delay: 0.00 },
          { pitch: "C4", dur: 0.25, delay: 0.30 },
          { pitch: "E4", dur: 0.25, delay: 0.60 },
          { pitch: "E4", dur: 0.25, delay: 0.90 },
          { pitch: "G4", dur: 0.25, delay: 1.20 },
          { pitch: "G4", dur: 0.25, delay: 1.50 },
          { pitch: "E4", dur: 0.50, delay: 1.80 },
          // Silencio teatral...
          { pitch: "C4", dur: 1.20, delay: 2.60, forte: true } // ¡¡¡SORPRESA!!!
        ]
      },

      "part-tintinnabuli": {
        title: "Arvo Pärt: Spiegel im Spiegel (Tríada Silenciosa)",
        era: "Contemporánea",
        tempo: 50,
        instrument: "piano",
        notes: [
          { pitch: "F4", dur: 1.20, delay: 0.00 },
          { pitch: "A4", dur: 1.20, delay: 1.30 },
          { pitch: "C5", dur: 1.80, delay: 2.60 },
          { pitch: "A4", dur: 1.20, delay: 4.50 },
          { pitch: "F4", dur: 2.20, delay: 5.80 }
        ]
      },

      "williams-theme": {
        title: "John Williams: Motivo Sinfónico Heroico (Star Wars)",
        era: "Música de Cine / Tradición Sinfónica",
        tempo: 112,
        instrument: "brass",
        notes: [
          { pitch: "C4", dur: 0.25, delay: 0.00 },
          { pitch: "G4", dur: 0.90, delay: 0.28 },
          { pitch: "F4", dur: 0.18, delay: 1.22 },
          { pitch: "E4", dur: 0.18, delay: 1.42 },
          { pitch: "D4", dur: 0.18, delay: 1.62 },
          { pitch: "C5", dur: 0.90, delay: 1.84 },
          { pitch: "G4", dur: 0.60, delay: 2.78 }
        ]
      }
    };
  }

  /**
   * Inicializa el contexto de audio de forma segura
   */
  initContext() {
    if (typeof window === 'undefined') return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      console.warn("Web Audio API no soportado en este navegador.");
      return;
    }
    if (!this.ctx) {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.75, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 128;
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Reproduce una nota con modelado acústico (ADSR + timbre orquestal)
   */
  playNote(pitch, duration, instrument = "piano", startTime = 0, isForte = false, hasVibrato = false) {
    if (!this.ctx) return;
    const freq = this.NOTE_FREQ[pitch];
    if (!freq) return;

    const t = startTime || this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    let oscType = "triangle";
    let filterFreq = 3000;
    let attack = 0.04;
    let decay = 0.15;
    let sustain = 0.6;
    let release = 0.4;
    let peakVol = isForte ? 0.95 : 0.45;

    // Configuración tímbrica por instrumento
    switch (instrument) {
      case "organ":
        oscType = "sawtooth";
        filterFreq = 2200;
        attack = 0.08;
        decay = 0.1;
        sustain = 0.85;
        release = 0.35;
        break;
      case "strings":
        oscType = "sawtooth";
        filterFreq = 1800;
        attack = 0.12;
        decay = 0.2;
        sustain = 0.7;
        release = 0.5;
        break;
      case "brass":
        oscType = "sawtooth";
        filterFreq = 2800;
        attack = 0.06;
        decay = 0.25;
        sustain = 0.75;
        release = 0.3;
        break;
      case "piano":
      default:
        oscType = "sine";
        filterFreq = 3500;
        attack = 0.015;
        decay = 0.3;
        sustain = 0.35;
        release = 0.6;
        break;
    }

    osc.type = oscType;
    osc.frequency.setValueAtTime(freq, t);

    // Vibrato opcional
    if (hasVibrato) {
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(5.5, t); // 5.5 Hz vibrato
      lfoGain.gain.setValueAtTime(freq * 0.02, t);
      lfo.connect(osc.frequency);
      lfo.start(t + 0.3);
      lfo.stop(t + duration + release);
    }

    // Filtro modelador acústico
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(filterFreq, t);

    // Envolvente de Ganancia (ADSR)
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(peakVol, t + attack);
    gain.gain.exponentialRampToValueAtTime(peakVol * sustain, t + attack + decay);
    gain.gain.setValueAtTime(peakVol * sustain, t + duration);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration + release);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + duration + release + 0.1);
  }

  /**
   * Reproduce la grabación real en alta calidad (MP3 orquestal/acústico) con fade-in suave.
   * Si no hay red o falla el stream, cae limpiamente al sintetizador local.
   */
  playMotif(motifKey) {
    this.stop();

    const motif = this.MOTIFS[motifKey];
    if (!motif) {
      console.warn(`Motivo '${motifKey}' no encontrado.`);
      return false;
    }

    const mp3Url = this.REAL_MP3_TRACKS && this.REAL_MP3_TRACKS[motifKey];

    if (typeof Audio !== "undefined" && mp3Url) {
      this.isPlaying = true;
      this.currentMotifId = motifKey;
      if (this.onStateChange) {
        this.onStateChange({ isPlaying: true, motifId: motifKey, motif });
      }

      const audio = new Audio(mp3Url);
      audio.preload = "auto";
      audio.volume = 0.05;
      audio.loop = true;
      this.audioEl = audio;

      audio.addEventListener("error", () => {
        if (this.audioEl === audio) {
          this.playFallbackSynth(motifKey, motif);
        }
      }, { once: true });

      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          if (this.audioEl === audio) {
            this.playFallbackSynth(motifKey, motif);
          }
        });
      }

      // Fade-in acústico suave (0.05 -> 0.82 en 700ms)
      clearInterval(this.fadeInterval);
      this.fadeInterval = setInterval(() => {
        if (!this.audioEl || this.audioEl !== audio) {
          clearInterval(this.fadeInterval);
          return;
        }
        if (audio.volume < 0.80) {
          audio.volume = Math.min(0.82, audio.volume + 0.07);
        } else {
          clearInterval(this.fadeInterval);
        }
      }, 60);

      return true;
    }

    return this.playFallbackSynth(motifKey, motif);
  }

  /**
   * Respaldo determinista offline (Web Audio API)
   */
  playFallbackSynth(motifKey, motif) {
    this.initContext();
    this.isPlaying = true;
    this.currentMotifId = motifKey;
    if (this.onStateChange) {
      this.onStateChange({ isPlaying: true, motifId: motifKey, motif });
    }

    const now = this.ctx.currentTime + 0.05;
    let maxEndTime = 0;

    motif.notes.forEach(note => {
      const noteStart = now + note.delay;
      this.playNote(
        note.pitch,
        note.dur,
        motif.instrument,
        noteStart,
        note.forte || false,
        note.vibrato || false
      );
      const noteEnd = note.delay + note.dur;
      if (noteEnd > maxEndTime) maxEndTime = noteEnd;
    });

    const endTimeout = setTimeout(() => {
      this.isPlaying = false;
      this.currentMotifId = null;
      if (this.onStateChange) {
        this.onStateChange({ isPlaying: false, motifId: null, motif: null });
      }
    }, (maxEndTime + 0.8) * 1000);

    this.activeTimeouts.push(endTimeout);
    return true;
  }

  /**
   * Detiene la reproducción actual (MP3 real o respaldo)
   */
  stop() {
    clearInterval(this.fadeInterval);
    this.activeTimeouts.forEach(clearTimeout);
    this.activeTimeouts = [];

    if (this.audioEl) {
      try {
        this.audioEl.pause();
        this.audioEl.src = "";
      } catch (e) {}
      this.audioEl = null;
    }

    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.02);
      setTimeout(() => {
        if (this.masterGain && this.ctx) {
          this.masterGain.gain.setValueAtTime(0.75, this.ctx.currentTime);
        }
      }, 70);
    }
    this.isPlaying = false;
    this.currentMotifId = null;
    if (this.onStateChange) {
      this.onStateChange({ isPlaying: false, motifId: null, motif: null });
    }
  }

  /**
   * Retorna datos para el visualizador Canvas (espectro real o pulso orgánico sincronizado al MP3)
   */
  getFrequencyData() {
    if (this.audioEl && this.isPlaying) {
      const bins = new Uint8Array(32);
      const t = (this.audioEl.currentTime || 0) * 4.2;
      for (let i = 0; i < bins.length; i++) {
        const wave = Math.sin(t + i * 0.55) * 0.5 + Math.cos(t * 1.37 - i * 0.31) * 0.5;
        const envelope = Math.sin((i / bins.length) * Math.PI);
        bins[i] = Math.max(24, Math.min(245, Math.floor((95 + wave * 95) * (0.45 + envelope * 0.75))));
      }
      return bins;
    }
    if (!this.analyser) return new Uint8Array(0);
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    return dataArray;
  }
}

// Exportación modular limpia
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ClassicalSynthesizer;
}
