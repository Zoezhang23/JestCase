import Counter from "./counter";

describe('level', () => {
    //实例对象不能在before里面new
    let counter = null;

    beforeAll(() => {
        console.log('Before All...')
    })
    beforeEach(() => {
        counter = new Counter(0);
        console.log('beforeEach')
    })
    describe('1-add', () => {
        test('1', () => {
            counter.addOne()
            expect(counter.number).toBe(1)
        })

        test('2', () => {
            counter.addTwo()
            expect(counter.number).toBe(2)
        })

    })
    describe("1-Minus", () => {

        test.only('1', () => {
            counter.minusOne()
            expect(counter.number).toBe(-1)
        })
        test('2', () => {
            counter.minusTwo()
            expect(counter.number).toBe(-2)
        })
    })

})
