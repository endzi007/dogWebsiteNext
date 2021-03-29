export default async function HomeAPI (req, res){
    const data = await getData()
    res.send(data);

}

const getData = async () =>{
    console.log("called");
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data, "data in getData");
    return data;
}
