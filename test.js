const sat = require('sat_modelo.js')
const { performance } = require('perf_hooks')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("------------------------------------------------------------------------")

rl.question("Enter the file name:", (fileName) => {
    t0 = performance.now()
    let result = sat.solve('./tests/' + fileName)
    t1 = performance.now()

    if (result.isSat) {
        console.log("File tested: "+fileName)
        console.log("Is SAT!")
        console.log("One satisfying sssignment is: |" + result.satisfyingAssignment.toString().replace(/,/g,"|")+ "|")
        console.log("Execution time: " + (t1 - t0) + "ms")
        console.log("------------------------------------------------------------------------")
    } else if (result.satisfyingAssignment == 'SpecificationProblemFound') {
        console.log("A specification problem was found in the" + fileName + "file!")
        console.log("------------------------------------------------------------------------")
    } else {
        console.log("File tested: "+fileName)
        console.log("Is not SAT!")
        console.log("------------------------------------------------------------------------")
    }
    rl.close()
})

