const faker = require('faker');

const products = new Array(1000).fill(undefined).map((item) => {
    return {
        name: faker.commerce.productName(),
        category: faker.commerce.product(),
        brand: faker.company.companyName(), 
        description: faker.lorem.paragraph(),
        price: faker.datatype.float(),
        rating: faker.datatype.float({precision: .1}),
        countInStock: faker.datatype.number(),
        numReviews: faker.datatype.number(),
        imageUrl: faker.image.food()
    }
})

module.exports = products;