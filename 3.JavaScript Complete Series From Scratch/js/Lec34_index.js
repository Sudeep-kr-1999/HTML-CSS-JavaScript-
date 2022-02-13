console.log("Asynchronous Programming");

// synchronous versus Asynchronous:------------------------------------
// 1. Any computation we do requires processor for our javascript engine to get the job done.
// 2. Many requests interact with things outside of the processor. For example , they may communicate over a network or request data from the storage disk.
// 3. This ia s alot slower than getting it from the memory.
// 4. We don't want our processor to sit idle when such things happening.

// Few ways to write asynchronous code in javascript:-------------
// 1. Async/await
// 2. Callbacks
// 3. promises

// it means hum ye kaam kr lege bs thora 100 ms ke liye wait kr lo to itne mein aage wla kaam ho jaayega means pehle done printing likhkr aa jaayega...............!!!!!
setTimeout(() => {
  for (let index = 0; index < 45; index++) {
    const element = index;
    console.log("This is index number" + index);
  }
}, 100);
console.log("done printing");