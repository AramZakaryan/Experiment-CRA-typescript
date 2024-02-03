export const MyComponent = () => {
    return (<>
    </>)
}


type BigType = {
    a: number
    b: number
}

type SmallType = {
    a: number
}

const big: BigType = {
    a: 100,
    b: 200
}

const small: SmallType = {
    a: 10
}

const foo = (arg:SmallType) =>{
    console.log(arg)
}

foo(big)