//toBe. abosulately equal
//failed!

// test("testToBe", () => {
// let a = { name: "zoe" }
//     expect(a).toBe({ name: "zoe" })
// })
//toEqual只检测结果
test("toEqual", () => {
    let a = { name: "zoe" }
    expect(a).toEqual({
        name: "zoe"
    })
})
//toNull, to check null

test("toBeNull", () => {
    const a = null;
    expect(a).toBeNull()
})
//toBeUndefined

test('toBeUndefined', () => {
    const a = undefined;
    expect(a).toBeUndefined()
})
test("tobeDefined", () => {
    const a = 1;
    expect(a).toBeDefined()
})
// check truthy/ falsy

test('toBeTruthy', () => {
    const a = 1;
    expect(a).toBeTruthy();
})
//number checking 'toBeGreaterThan''toBeLessThan'
test('toBeGreaterThan', () => {
    const a = 10;
    expect(a).toBeGreaterThanOrEqual(10);
})
//float
test('toBeCloseTo', () => {
    const a = 0.1;
    const b = 0.2;
    expect(a + b).toBeCloseTo(0.3);
})
//String checking:toMatch
test('toMatch', () => {
    const str = 'zoe,miky,alex'
    expect(str).toMatch('zoe');
})
//Array checking:toContain******
test("toContain", () => {
    const arr = ['zoe', 'miky', 'alex']
    expect(arr).toContain('zoe')
})
//Error checking:toThrow
function testThrow() {
    // throw new Error('this is a test');
}
test('toThrow', () => {
    //can add message into parameters
    //not keyword! suggest use less often
    expect(testThrow).not.toThrow('this is a test');
})