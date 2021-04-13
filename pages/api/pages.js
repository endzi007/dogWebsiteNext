import fs from "fs";

export default async function PagesAPI (req, res){
    const data = await getPages()
    res.send(data);

}


const getPages = async (ctx) => {
    const directory = fs.readdirSync("./pages");
    const pages = directory.filter(page =>{
      console.log(page[0] === "[");
        if(page !== "api"){
          if(page[0] !== "["){
            if(page[0] !== "_"){
              return page;
            }
          } 
        } 
        return "";
    })
    return pages;
  }