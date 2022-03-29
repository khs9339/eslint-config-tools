const { execSync } = require('child_process');
const { version } = require('../package.json');
execSync(`npm dist-tag add eslint-config-tools@${version} dev`);