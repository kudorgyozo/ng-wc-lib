const fs = require('fs');
const {execSync} = require('child_process');
const concat = require('concat');
const projects = ['counter'];

projects.forEach(project => {
    compileComponent(project);
});

function compileComponent(project) {
    console.log(`\t- ${project}`);
    
    const buildJsFiles = `ng run web-comp:build:production --aot --main=projects/web-comp/src/${project}/compile.ts`;
    execSync(buildJsFiles, { stdio: 'inherit'} );

    concat(['dist/tmp/runtime.js', 'dist/tmp/polyfills.js', 'dist/tmp/main.js'], `dist/tmp/${project}-bundle.js`);
}
