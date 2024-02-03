

export const MyComponent = () =>{
    return (<>
    </>)
}

class Human {
    props:{name:string, age:number}
    constructor(props:{name:string, age:number}) {
        this.props=props
    }
}

class Man extends Human{
    ageRange: string
    constructor(props:{name:string, age:number,ageRange:string}) {
        super(props);
        this.ageRange= props.ageRange
    }

}

const gago = new Man({name:"Gago",age:56, ageRange:" newGen" })

console.log(gago)