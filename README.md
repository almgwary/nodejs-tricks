# NodeJs Tricks

 <img src="https://raw.githubusercontent.com/almgwary/nodejs-tricks/master/nodejs-image.PNG" width="50%" style="max-width:100%;display: block;margin: auto;">
  
 - - -  
### Node Angular Server [code-here](https://github.com/almgwary/nodejs-tricks/blob/master/node-angular-server.js)
 
 - - -
 
### NodeJs Memory allocation 



    In order to answer this question, one has to understand V8’s Memory Scheme first.

    A running program is always represented through some space allocated in memory. This space is called Resident Set. V8 uses a scheme similar to the Java Virtual Machine and divides the memory into segments:

    Code: the actual code being executed
    Stack: contains all value types (primitives like integer or Boolean) with pointers referencing objects on the heap and pointers defining the control flow of the program
    Heap: a memory segment dedicated to storing reference types like objects, strings and closures. enter image description here
    Now it is easy to answer the question:

    rss: Resident Set Size
    heapTotal: Total Size of the Heap
    heapUsed: Heap actually Used
    Ref: http://apmblog.dynatrace.com/2015/11/04/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/


```
            const used = process.memoryUsage();
              for (let key in used) {
              console.log(`almg    ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`)
              }

              console.log('almg     \n\n\n')
 ```
