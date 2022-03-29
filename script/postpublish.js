const { execSync } = require('child_process');
const { version } = require('../package.json');

console.log('::: DIST TAG MOVE');
execSync(`npm dist-tag add eslint-config-tools@${version} dev`);
