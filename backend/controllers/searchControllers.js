const Product = require('../models/Product');

const getSearchSuggestions = async (req, res) => {
    console.log(req.query.query)
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
            },
            {
                "$project": {
                    "_id": 0,
                    "name": 1
                }
            }
        ])
        res.json(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

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
    getSearchSuggestions,
    getSearchResults
}