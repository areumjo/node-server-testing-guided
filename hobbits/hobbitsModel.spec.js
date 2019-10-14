const Hobbits = require('./hobbitsModel.js');

const db = require('../data/dbConfig.js');

// describe('The Hobbit Model', () => {
//     beforeEach(async () => {
//         // what do we want? - wipe the db
//         await db('hobbits').truncate();
//     })
//     describe('the insert function', () => {
//         // test setup
//         it('should insert a new hobbit', () => {
//             const hobbit = { name: 'frodo' };
//             Hobbits.insert(hobbit)
//             .then(hobbit => {
//                 // is there a new hobbit in the db?
//                 db('hobbits')
//                 .then(hob => {
//                     expect(hob.length).toBe(1);
//                     expect(hob[0].name).toBe('frodo');
//                 })
//             });
//         });
//     })
// })

describe('hobbits model', () => {
    beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('hobbits').truncate();
        });

    describe('insert()', () => {
        // this example uses async/await to make it easier to read and understand
        it('should insert the provided hobbits into the db', async () => {
            // this code expects that the table is empty, we'll handle that below
            // add data to the test database using the data access file
            await Hobbits.insert({ name: 'gaffer' });
            await Hobbits.insert({ name: 'sam' });
    
            // read data from the table
            const hobbits = await db('hobbits');
    
            // verify that there are now two records inserted
            expect(hobbits).toHaveLength(2);
        });
        it('should resolve to the newly created hobbit', async () => {
            // test setup
            const hobbitData = { name: 'frodo' };
            const hobbit = await Hobbits.insert(hobbitData);

            expect(hobbit).toEqual({id: 1, name: 'frodo' });
        })
    });
});


// when you don't have db to test, create a db from scratch like this

// knex migrate:latest --env=testing
// knex migrate:latest <== using environment: development
