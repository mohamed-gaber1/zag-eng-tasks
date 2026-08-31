let tasks:any[]=[
    {
        id: 1,
        title: "test1",
        completed: true,
        createdAt: new Date()
    },
    {
        id: 2,
        title: "test2",
        completed: true,
        createdAt: new Date()
    },
    {
        id: 3,
        title: "test3",
        completed: false,
        createdAt: new Date()
    },
]
const getAll=()=>{
    return tasks;
}

const getById=(id:number)=>{
    return tasks.find((t)=>t.id===id)
}

const create=(title:string)=>{
    tasks.push({
        id:tasks.length+1,
        title:title,
        completed: false,
        createdAt: new Date()
    })
    return tasks[tasks.length-1]
}

const update=(id:number,newTitel:string,completed:boolean)=>{
    const element= tasks.find((t)=>t.id===id)
    if(!element){
        return "id is not found";
    }
    element.title = newTitel;
    element.completed = completed;
    return element;
}

const remove=(id:number)=>{
    const index = tasks.findIndex(
        (task) => task.id === id
    );
    if(index===-1){
        return "id is not found"
    }
    tasks.splice(index, 1);
}




export{getAll,getById,create,update,remove};