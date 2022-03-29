const { execSync } = require('child_process');
var version = execSync('npm version patch').toString().trim();
console.log(`Next Version: ${version}`);

execSync(`npm dist-tag add eslint-config-tools@${version.replace('v', '')} dev`);
