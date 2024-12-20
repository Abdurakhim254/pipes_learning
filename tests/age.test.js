import { expect,test } from "vitest";
import { getageByyear } from "./age.js";

test('age is 19 year should be 2005',()=>{
     
    const age=19
    const result=getageByyear(age)

    expect(result).toBe(2005)
})


test('age is 20 year should be 2004',()=>{

    const age=20
    const result=getageByyear(age)

    expect(result).toBe(2005)
})

test('age is 18 year should be 2006',()=>{

    const age=18
    const result=getageByyear(age)

    expect(result).toBe(2006)
})


test('age is 17 year should be 2007',()=>{

    const age=17
    const result=getageByyear(age)

    expect(result).toBe(2007)
})

test('age is 46 year should be 1978',()=>{
    
    const age=46
    const result=getageByyear(age)

    expect(result).toBe(1978)
})