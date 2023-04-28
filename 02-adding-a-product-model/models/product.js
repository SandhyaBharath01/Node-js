const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const filePath = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        );
        fs.readFile(filePath, (err, fileContent) => {
            let products = [];
            if (!err) {
                if (fileContent.toString().trim() !== '') {
                    products = JSON.parse(fileContent);
                }
            }
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                if (err) {
                    console.log('Error writing file:', err);
                } else {
                    console.log('File written successfully!');
                }
            });
        });
    }

    static fetchAll(callback) {
        const filePath = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        );
        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                return callback([]);
            }
            callback(JSON.parse(fileContent));
        });
    }
}
