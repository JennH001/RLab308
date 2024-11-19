let Data = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26");
let rows = Data.split("\n");

let headers = rows[0].split(",");
let dataset = rows.slice(1).map(row => {
  let values = row.split(",");
  let obj = {};
  headers.forEach((header, index) => {
    obj[header] = values[index];  
  });
  return obj;
});

console.log(dataset);
console.log(rows)





let datasetrev = rows.slice(1).map(row => {
    let values = row.split(",");
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];  
    });
    return obj;
  });
  

  dataset.pop();


  console.log("Dataset after removing the last array:");
  console.log(dataset);
  
 
  let NewData = dataset.map(obj => {
    return headers.map(header => {
      return `${header}: ${obj[header]}`;
    }).join(", ");
  });
  
  console.log("New Data:");
  NewData.forEach(row => console.log(row));


  let array = [0, 1, 2];


array.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


array.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(array);

array.forEach(item => {
    
    let obj = {
      ID: item.id,
      Name: item.name,
      Occupation: item.occupation,
      Age: item.age
    };
    dataset.push(obj);
  });
  

  let NewData = dataset.map(obj => {
    return headers.map(header => {
      return `${header}: ${obj[header]}`;
    }).join(", ");
  });
  
  console.log("New Data:");
  NewData.forEach(row => console.log(row));
