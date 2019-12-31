const revealingModule = (function(){
    'use strict'

    const _privateProperty = "private property"
    const publicProperty = "public property"

    function _privateMethod() {
        console.log("private method")
    }

    function publicMethod()  {
        return _privateMethod()
    }
    return {
        publicProperty,
        publicMethod
    }
}())

console.log(revealingModule._privateProperty) // undefined
console.log(revealingModule.publicProperty) // "public property"
revealingModule.publicMethod() // "private method"
revealingModule._privateMethod() // TypeError
