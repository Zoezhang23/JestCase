import { fetchData, fetchData1, fetchData2, fetchData3 } from "./fetchData";

//This will be always pass.wrong.even the API link is wrong
// test('fetchDataTest', () => {
//     fetchData((data) => {
//         expect(data).toEqual({ success: true });
//     })
// });
//callback use done to wait for the asynconized finished the task
test('fetchDataTest', (done) => {
    fetchData((data) => {
        expect(data).toEqual({ "success": true });
        done();
    })
});
//promise retuen type need the then to get the resonpose
test('fetchData1test', () => {
    return fetchData1().then((response) => {
        expect(response.data).toEqual({ "success": true })
    })
})
//for promise error catch test.API is not available
test('promiseErrorCatch', () => {
    // make the expect excuted 1 time at least.
    expect.assertions(1)
    return fetchData2().catch((e) => {
        expect(e.toString().indexOf('404') > -1).toBe(true);
    })

})
test('promiseAwaitTest', async () => {
    const response = await fetchData3();
    expect(response.data).toEqual({
        success: true
    })
})