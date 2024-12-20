import {expect ,test} from "vitest"
import { pow,sum } from "./sum.js"


test('add 1 + 2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3)
})


test('add 1 - 2 to equal -1',()=>{
    expect(sum(1,-2)).toBe(-1)
})

test('pows 2,2 to equal 4',()=>{
    expect(pow(2,2)).toBe(4)
})
