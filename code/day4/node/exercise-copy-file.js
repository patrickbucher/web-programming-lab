var fs = require('fs');
async function copyfile(src) {
    await fs.copyFile(src, src + '.copy', (err) => {
        if (err != null) {
            console.log(err);
        }
    });
}

copyfile(__filename);
