# Incomplete HTTP Response in Node.js Server

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` to signal the end of the response.  This can lead to incomplete responses and unexpected behavior on the client-side.

## Bug

The `bug.js` file contains a simple HTTP server that omits the crucial `res.end()` call.  This results in the client potentially not receiving the complete response, leading to hanging requests or errors.

## Solution

The `bugSolution.js` file demonstrates the corrected code.  The addition of `res.end()` ensures the server properly signals the end of the response, completing the HTTP transaction and preventing client-side issues.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Use a tool like `curl` or a web browser to make a request to `http://localhost:3000/`.
4. Observe the incomplete or delayed response (or error).
5. Run `node bugSolution.js` and repeat steps 3 and 4 to see the corrected behavior.
