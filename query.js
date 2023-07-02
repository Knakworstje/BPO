let express = require('express');
let app = express();
let zender_data = [0];

app.get("/load/:zender", (req, res) => {
    let zender = req.params.zender;
    res.send(zender_data[parseInt(zender)]);
});

async function init() {
    while (true) {
        setTimeout(() => {
            for (zender in zender_data) {
                zender += 1;
            }
        }, 1 * 1000);
    }
}

init();