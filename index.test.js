//match the name,
//config the package.json file test:"jest".
//method:test,tobe
//unit test:component test
//intergrated test: multi component
import { fn1, fn2 } from './index'
test("test-for-fn1", () => {
    expect(fn1(200)).toBe("first-class")
})
test("test-f2", () => {
    expect(fn2(500)).toBe("premiun")
})