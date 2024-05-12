function cors(req, res, next) {
    const { origin } = req.headers;
    if(allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    next();
}

const allowedCors = [
    "http://localhost:3001",
    "http://localhost:3000",
    "https://practicum.yandex.ru",
    "https://students-projects.ru"
]

module.exports = { cors }