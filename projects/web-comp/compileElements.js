const fs = require('fs');
const {execSync} = require('child_process');
const concat = require('concat');
const projects = ['counter'];

projects.forEach(project => {
    compileComponent(project);
});

function compileComponent(project) {
    console.log(`\t- ${project}`);
    
    const buildJsFiles = `ng run web-comp:build:production --aot ` +
        `--main=projects/web-comp/src/${project}/compile.ts ` +
        `--outputPath=dist/${project}`;
    execSync(buildJsFiles, { stdio: 'inherit'} );

    concat(
        [`dist/${project}/runtime.js`, `dist/${project}/polyfills.js`, `dist/${project}/main.js`], 
        `dist/${project}/bundle.js`);
}
