const Product = require('../models/Product');

const getSearchResults = async (req, res) => {
    try {
        let result = await Product.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${req.query.query}`,
                        "path": "name",
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 3
                        }
                    }
                }
            }
        ])
        res.json(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = {
    getSearchResults
}