import { callBacks, callClassObject, fetchData } from "./demoMock";
import axios from 'axios';
test('mockTry', () => {
    //use jest.fn() to monitor the function could check if this fn is called.
    //nested function test way
    const fn = jest.fn();
    //give a mock return value
    fn.mockReturnValueOnce('zoe');
    // const fn = jest.fn(()=>{
    //     return 'zoe'
    // })
    //the same as above. you could add more logic inside the implementation
    fn.mockImplementationOnce(() => {
        return 'zoe'
    })
    fn.mockImplementationOnce(() => {
        console.log('do something by yourself')
        return 'Tom'
    })
    // run the method with fn() as parameters
    callBacks(fn);
    callBacks(fn);
    //check the called length means it is called
    expect(fn.mock.calls.length).toBe(2);
    //every time call the method with 'abc' parameters.toBeCalledWith
    expect(fn).toBeCalledWith('abc');
    expect(fn.mock.calls[0]).toEqual(['abc']);
    expect(fn.mock.results[0].value).toBe('zoe');
    //check what we get from mock
    console.log(fn.mock)
})
//jest.fn().mock.instances is ‘THIS' refer to who. in function this is undefined.
// but in class object, it is the object.here is the mockConstrutor

test('instanceTest', () => {
    const fn = jest.fn();
    callClassObject(fn);
    console.log(fn.mock.instances[0])
})
// Asynchronous test normally did not use the real Ajax requst.just test if the request is sent or not 
//step use jest mock axios
jest.mock('axios');
//async,await,then,data
//
test.only('axios', async () => {
    axios.get.mockResolvedValueOnce({ data: 'hello' })
    axios.get.mockResolvedValueOnce({ data: 'zoe' })
    await fetchData().then(data => {
        expect(data).toBe('hello')
        console.log(data);
    })
    //twice with different value
    await fetchData().then(data => {
        expect(data).toBe('zoe')
        console.log(data);
    })
})