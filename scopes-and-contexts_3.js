// 3. What does the following print? Add your answer as a multi-line comment

function a() {
    const test = "HELLO WORLD!";
    function b() {
        const best = "WE ARE THE BEST";
        function c() {
            console.log(test, best);
        }
        console.log(test);
    }
    b();
}
a();

/*
  'HELLO WORLD', because a() is invoking function a which is initializing test and invoking inner function b
  which is logging test (inner function has access to scope of embracing function)
*/
