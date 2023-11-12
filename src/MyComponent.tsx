export const MyComponent = () => {
    function getId() {
        let innerVar = 0

        function innerFunc() {
            return innerVar++
        }

        innerFunc()
        function getInnerVar () {
            return innerVar
        }

        return {
            innerVar:innerVar,
            innerFunc:innerFunc,
            getInnerVar:getInnerVar
        }
    }

    const id = getId()


    console.log("id:", id.innerFunc(), "innerVar:", id.innerVar, "getInnerVar:", id.getInnerVar())
    console.log("id:", id.innerFunc(), "innerVar:", id.innerVar, "getInnerVar:", id.getInnerVar())
    console.log("id:", id.innerFunc(), "innerVar:", id.innerVar, "getInnerVar:", id.getInnerVar())

    //
    // function createCounter() {
    //     let count = 0
    //
    //     function increment() {
    //         count++
    //     }
    //
    //     function decement() {
    //         count--
    //     }
    //
    //     return {
    //         count,
    //         increment,
    //         decement
    //     }
    // }
    //
    // const result = createCounter()
    //
    // result.increment()
    // result.increment()
    // result.increment()
    //
    // console.log(result.count)

    return (<>
    </>)
}

