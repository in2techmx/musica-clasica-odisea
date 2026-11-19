/**
 * RUN_TESTS.JS
 * Script ejecutor de pruebas automatizadas deterministas (Gate 1)
 */

const { spawnSync } = require("child_process");
const path = require("path");

const testFile = path.join(__dirname, "..", "tests", "music-catalog.test.js");
console.log(`[IN2TECHMX RUNNER] Ejecutando: ${testFile}`);

const result = spawnSync("node", [testFile], { stdio: "inherit" });
process.exit(result.status);
