import Person from './person'
// decribe, beforeAll,beforeEach,afterEach,afterAll,test.only
const person = new Person()
describe('firstLevel', () => {

    beforeAll(() => {
        person.addHobby();
        console.log(person.service);
        expect(person.service).toBe('we both have hobby')
    })


    describe('second-01ForZoe', () => {

        beforeEach(() => {
            person.choosePerson(1)
            console.log(person.person)
            person.addHobby();
            expect(person.service).toBe('we both have hobby');
        })

        test('testZoeRead', () => {
            person.readBook();
            expect(person.service).toBe('Zoe is reading book')
        })

        test('testZoeWatch', () => {
            person.watchTV();
            expect(person.service).toBe('Zoe is watching TV')
        })

    })

    describe('second-02', () => {

        beforeAll(() => {
            person.choosePerson(2);
            console.log(person.person)
        })

        test('testTomRead', () => {
            person.readBook();
            expect(person.service).toBe('Tom is reading book')
        })

        test('testTomWatch', () => {
            person.watchTV();
            expect(person.service).toBe('Tom is watching TV')
        })


    })

    afterAll(() => {
        person.extraTime();
        expect(person.service).toBe('We are happy');
    })
})