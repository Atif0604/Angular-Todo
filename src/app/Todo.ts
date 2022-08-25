
// model in TS
// export class Todo{
//     slno:number
//     title:string
//     desc: string 
//     active:boolean
// }

// the above was giving error{src/app/Todo.ts:4:5 - error TS2564: Property 'slno' has no initializer and is not definitely assigned in the constructor.} as the it needs to been initialized 
// resolution
// 1.initialize the property/ initialize it in constructor
// 2 make the property optional{If some instances of your class won't have this property defined, you can let the type system know by making the property optional.}
// 3 There's a third way, but you shouldn't do this. You can just override the warning by added an ! instead of a ?

export class Todo{
    slno?:number 
    title?:string
    desc?: string 
    active?:boolean
}