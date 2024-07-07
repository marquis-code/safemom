const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../node_modules/wide-align/align.js');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;

    const result = data.replace("const stringWidth = require('string-width');", "const stringWidth = await import('string-width');");

    fs.writeFile(filePath, result, 'utf8', (err) => {
        if (err) throw err;
    });
});
