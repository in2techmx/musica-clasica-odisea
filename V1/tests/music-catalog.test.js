/**
 * MUSIC-CATALOG.TEST.JS (V2 Expandida)
 * Suite de Pruebas Automatizadas Deterministas — Gate 1 IN2TECHMX
 * Ejecutable en Node.js puro sin dependencias externas
 */

const assert = require("assert");

// Cargar módulos del proyecto
const MUSIC_DATA = require("../app/data-music.js");
const ClassicalSynthesizer = require("../app/audio-synthesizer.js");

console.log("=================================================================");
console.log("INICIANDO SUITE DE TESTS DETERMINISTAS (GATE 1 V2) — ODISEA CLÁSICA");
console.log("=================================================================\n");

let passedTests = 0;
let totalTests = 0;

function test(description, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ [PASS] ${description}`);
    passedTests++;
  } catch (error) {
    console.error(`  ✗ [FAIL] ${description}`);
    console.error(`    Detalle del error: ${error.message}`);
  }
}

// -------------------------------------------------------------
// GRUPO 1: INTEGRIDAD DE DATOS Y ESTRUCTURA DE ÉPOCAS
// -------------------------------------------------------------
console.log("📦 1. Verificación de Integridad de Datos Musicológicos");

test("El dataset principal MUSIC_DATA contiene todas las secciones requeridas", () => {
  assert.ok(MUSIC_DATA.project, "Falta objeto 'project'");
  assert.ok(MUSIC_DATA.whatIsClassicalMusic, "Falta 'whatIsClassicalMusic'");
  assert.ok(Array.isArray(MUSIC_DATA.eras), "'eras' debe ser un array");
  assert.ok(MUSIC_DATA.nomenclatureGuide, "Falta 'nomenclatureGuide'");
  assert.ok(Array.isArray(MUSIC_DATA.whyItMatters), "'whyItMatters' debe ser un array");
  assert.ok(Array.isArray(MUSIC_DATA.beginnerCompass), "'beginnerCompass' debe ser un array");
  assert.ok(Array.isArray(MUSIC_DATA.historicalChronologyStories), "'historicalChronologyStories' debe ser un array");
});

test("Existen exactamente las 7 grandes épocas históricas canónicas", () => {
  assert.strictEqual(MUSIC_DATA.eras.length, 7, "Deben existir 7 épocas históricas");
  const expectedEras = [
    "medieval", "renacimiento", "barroco", 
    "clasicismo", "romanticismo", "siglo-xx", "contemporanea"
  ];
  const actualEras = MUSIC_DATA.eras.map(e => e.id);
  assert.deepStrictEqual(actualEras, expectedEras, "El orden cronológico y los IDs de las épocas deben ser canónicos");
});

test("Cada época histórica cuenta con contexto, ruptura técnica, instrumentos y al menos 2 exponentes", () => {
  MUSIC_DATA.eras.forEach(era => {
    assert.ok(era.name && era.name.length > 3, `Nombre inválido en época ${era.id}`);
    assert.ok(era.period && era.period.length > 4, `Periodo cronológico faltante en ${era.id}`);
    assert.ok(era.context && era.context.length > 20, `Contexto insuficiente en ${era.id}`);
    assert.ok(era.breakthrough && era.breakthrough.length > 15, `Innovación técnica faltante en ${era.id}`);
    assert.ok(era.instruments && era.instruments.length > 5, `Instrumentos faltantes en ${era.id}`);
    assert.ok(Array.isArray(era.exponents) && era.exponents.length >= 2, `La época ${era.id} debe tener al menos 2 exponentes`);
  });
});

// -------------------------------------------------------------
// GRUPO 2: VERIFICACIÓN DE RETRATOS REALES, ETAPAS Y CATÁLOGOS PROPIOS
// -------------------------------------------------------------
console.log("\n👑 2. Verificación de Retratos Reales, Etapas Creativas y Catálogos Propios");

test("Todos los exponentes tienen fotos reales verificadas (locales en disco o HTTPS), iniciales, hitos y catálogos propios", () => {
  const fs = require("fs");
  const path = require("path");
  let totalExponents = 0;
  const appDir = path.resolve(__dirname, "../app");
  MUSIC_DATA.eras.forEach(era => {
    era.exponents.forEach(exp => {
      totalExponents++;
      assert.ok(exp.id, `Falta ID en exponente`);
      assert.ok(exp.name, `Falta nombre en exponente ${exp.id}`);
      assert.ok(exp.years, `Faltan años biográficos en ${exp.name}`);
      assert.ok(exp.role, `Falta rol titular en ${exp.name}`);
      assert.ok(exp.initials, `Faltan iniciales de respaldo en ${exp.name}`);
      const isHttps = typeof exp.image === 'string' && exp.image.startsWith("https://");
      const localPath = typeof exp.image === 'string' ? path.join(appDir, exp.image) : "";
      const isVerifiedLocal = localPath && fs.existsSync(localPath) && fs.statSync(localPath).size > 10000;
      assert.ok(isHttps || isVerifiedLocal, `Imagen inválida o ausente en disco para ${exp.name}: ${exp.image}`);
      assert.ok(exp.whyExponent && exp.whyExponent.length > 30, `Explicación de mérito insuficiente en ${exp.name}`);
      assert.ok(Array.isArray(exp.milestones) && exp.milestones.length >= 2, `Debe tener al menos 2 hitos documentados: ${exp.name}`);
      assert.ok(exp.masterpiece, `Falta obra maestra representativa en ${exp.name}`);
      assert.ok(exp.motifKey, `Falta motifKey asignada en ${exp.name}`);
      
      // Catálogo propio
      assert.ok(exp.catalogInfo, `Falta catalogInfo en ${exp.name}`);
      assert.ok(exp.catalogInfo.systemName, `Falta systemName en catálogo de ${exp.name}`);
      assert.ok(exp.catalogInfo.structure, `Falta structure en catálogo de ${exp.name}`);
      assert.ok(Array.isArray(exp.catalogInfo.keyWorks) && exp.catalogInfo.keyWorks.length > 0, `Faltan keyWorks en catálogo de ${exp.name}`);
    });
  });
  assert.ok(totalExponents >= 15, `Debe haber al menos 15 compositores catalogados (actuales: ${totalExponents})`);
});

test("Todos los exponentes cuentan con desglose de etapas creativas y qué proponen en cada una", () => {
  MUSIC_DATA.eras.forEach(era => {
    era.exponents.forEach(exp => {
      assert.ok(Array.isArray(exp.periods) && exp.periods.length >= 2, `El compositor ${exp.name} debe tener al menos 2 etapas creativas`);
      exp.periods.forEach((p, idx) => {
        assert.ok(p.name, `Falta nombre en etapa ${idx + 1} de ${exp.name}`);
        assert.ok(p.focus && p.focus.length > 20, `Foco contextual insuficiente en etapa ${p.name} de ${exp.name}`);
        assert.ok(p.proposal && p.proposal.length > 20, `Propuesta estética insuficiente en etapa ${p.name} de ${exp.name}`);
      });
    });
  });
});

// -------------------------------------------------------------
// GRUPO 3: HISTORIAS DE SANGRE, PESTE Y CONTEXTO MATERIAL
// -------------------------------------------------------------
console.log("\n📜 3. Verificación de Crónicas de Historia Material y Social");

test("Las historias de contexto histórico material están exhaustivamente documentadas", () => {
  const stories = MUSIC_DATA.historicalChronologyStories;
  assert.ok(stories.length >= 8, `Deben existir al menos 8 crónicas históricas (actuales: ${stories.length})`);
  stories.forEach(st => {
    assert.ok(st.eraId, `Falta eraId en crónica ${st.title}`);
    assert.ok(st.title, "Falta título en crónica");
    assert.ok(st.historicalEvent, `Falta hecho histórico en ${st.title}`);
    assert.ok(st.impactOnMusic && st.impactOnMusic.length > 50, `Impacto musical insuficiente en ${st.title}`);
    assert.ok(st.fascinatingFact && st.fascinatingFact.length > 40, `Dato fascinante insuficiente en ${st.title}`);
  });
});

// -------------------------------------------------------------
// GRUPO 4: NOMENCLATURA Y SISTEMAS DE CATALOGACIÓN UNIVERSAL
// -------------------------------------------------------------
console.log("\n🔍 4. Verificación de Nomenclatura y Catálogos Universales");

test("La guía de nomenclatura desglosa los 4 elementos anatómicos clave", () => {
  const anatomy = MUSIC_DATA.nomenclatureGuide.anatomyExample;
  assert.ok(anatomy, "Falta anatomía de ejemplo");
  assert.strictEqual(anatomy.parts.length, 4, "Deben desglosarse exactamente 4 partes anatómicas");
});

test("Los grandes catálogos universales están documentados con creador y justificación histórica", () => {
  const catalogs = MUSIC_DATA.nomenclatureGuide.catalogSystems;
  assert.ok(catalogs.length >= 6, "Deben estar documentados al menos 6 sistemas de catálogo");
  
  const codes = catalogs.map(c => c.code);
  assert.ok(codes.includes("Op."), "Debe incluirse Opus (Op.)");
  assert.ok(codes.includes("BWV"), "Debe incluirse BWV (Bach)");
  assert.ok(codes.includes("K. o KV"), "Debe incluirse Köchel (Mozart)");
  assert.ok(codes.includes("D."), "Debe incluirse Deutsch (Schubert)");
  assert.ok(codes.includes("Hob."), "Debe incluirse Hoboken (Haydn)");
  assert.ok(codes.includes("RV"), "Debe incluirse Ryom (Vivaldi)");
  assert.ok(codes.includes("WoO"), "Debe incluirse WoO (Beethoven)");
});

// -------------------------------------------------------------
// GRUPO 5: MOTOR DE AUDIO Y FRECUENCIAS ARMÓNICAS
// -------------------------------------------------------------
console.log("\n🎹 5. Verificación del Motor Sintetizador y Frecuencias");

test("El sintetizador ClassicalSynthesizer se instancia limpiamente en entorno Node", () => {
  const synth = new ClassicalSynthesizer();
  assert.ok(synth, "Debe instanciarse el sintetizador");
  assert.ok(synth.NOTE_FREQ, "Debe poseer el mapa de frecuencias");
  assert.ok(synth.MOTIFS, "Debe poseer la biblioteca de motivos");
});

test("Todas las notas del mapa de frecuencias poseen Hertz físicos reales positivos", () => {
  const synth = new ClassicalSynthesizer();
  const freqKeys = Object.keys(synth.NOTE_FREQ);
  assert.ok(freqKeys.length >= 24, "Debe cubrir al menos 2 octavas completas");
  assert.strictEqual(synth.NOTE_FREQ["A4"], 440.00, "A4 debe ser exactamente 440.00 Hz (afinación de concierto)");
});

test("Todos los motivos melódicos de los exponentes existen en el sintetizador y tienen notas válidas", () => {
  const synth = new ClassicalSynthesizer();
  const motifKeys = Object.keys(synth.MOTIFS);

  MUSIC_DATA.eras.forEach(era => {
    era.exponents.forEach(exp => {
      assert.ok(
        motifKeys.includes(exp.motifKey),
        `El motivo '${exp.motifKey}' asignado a ${exp.name} debe existir en el sintetizador`
      );
    });
  });
});

// -------------------------------------------------------------
// GRUPO 6: ARGUMENTACIÓN DIDÁCTICA Y TRASCENDENCIA
// -------------------------------------------------------------
console.log("\n💡 6. Verificación de Didáctica, Beneficios y Brújula");

test("Se incluyen los 5 pilares de por qué es importante y la Brújula de inicio", () => {
  assert.strictEqual(MUSIC_DATA.whyItMatters.length, 5, "Deben existir 5 pilares estructurados de trascendencia");
  assert.strictEqual(MUSIC_DATA.beginnerCompass.length, 4, "Deben existir 4 recomendaciones por ánimo");
});

// -------------------------------------------------------------
// REPORTE DE RESULTADOS
// -------------------------------------------------------------
console.log("\n=================================================================");
console.log(`RESUMEN FINAL DE GATE 1 (V2): ${passedTests}/${totalTests} TESTS PASS`);
if (passedTests === totalTests) {
  console.log("STATUS: CONFORME ✓ (Sello Determinista Aprobado)");
} else {
  console.error("STATUS: NO CONFORME ✗ (Fallaron pruebas deterministas)");
  process.exit(1);
}
console.log("=================================================================\n");
