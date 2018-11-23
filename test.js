const sat = require('sat_modelo.js')
const {performance} = require('perf_hooks')
console.log("------------------------------------------------------------------------")
t0 = performance.now()
result = sat.solve('./tests/tutorial.cnf')
t1 = performance.now()
console.log("tutorial: isSat = " + result.isSat + "  SatisfyingAssignment = " + result.satisfyingAssignment)
console.log("Execution time: "+(t1-t0)+"ms")
console.log("------------------------------------------------------------------------")

t0 = performance.now()
result = sat.solve('./tests/simple0.cnf')
t1 = performance.now()
console.log("simple0: isSat = " + result.isSat + "  SatisfyingAssignment = " + result.satisfyingAssignment)
console.log("Execution time: "+(t1-t0)+"ms")
console.log("------------------------------------------------------------------------")

t0 = performance.now()
result = sat.solve('./tests/simple1.cnf')
t1 = performance.now()
console.log("simple1: isSat = " + result.isSat + "  SatisfyingAssignment = " + result.satisfyingAssignment)
console.log("Execution time: "+(t1-t0)+"ms")
console.log("------------------------------------------------------------------------")

t0 = performance.now()
result = sat.solve('./tests/simple2.cnf')
t1 = performance.now()
console.log("simple2: isSat = " + result.isSat + "  SatisfyingAssignment = " + result.satisfyingAssignment)
console.log("Execution time: "+(t1-t0)+"ms")
console.log("------------------------------------------------------------------------")

t0 = performance.now()
result = sat.solve('./tests/hole4.cnf')
t1 = performance.now()
console.log("hole4: isSat = " + result.isSat + "  SatisfyingAssignment = " + result.satisfyingAssignment)
console.log("Execution time: "+(t1-t0)+"ms")
console.log("------------------------------------------------------------------------")

t0 = performance.now()
result = sat.solve('./tests/hole5.cnf')
t1 = performance.now()
console.log("hole5: isSat = " + result.isSat + "  SatisfyingAssignment = " + result.satisfyingAssignment)
console.log("Execution time: "+(t1-t0)+"ms")
console.log("------------------------------------------------------------------------")