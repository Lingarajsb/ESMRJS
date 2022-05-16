export async function getAllStocks() {

    const response = await fetch('http://localhost:30456/api/Stock/api/GetAllStocks');
    return await response.json();
}

export async function addStock(data) {
    const response = await fetch(`http://localhost:30456/api/Stock/api/add/`+data.CompanyCode, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}

export async function getStockByCompanyCode(data) {
    //const response = await fetch(`http://localhost:30456/api/Stock/api/get/${data.CompanyCode}/02-04-2022/30-05-2022`)
    const response = await fetch(`http://localhost:30456/api/Stock/api/get/${data.CompanyCode}/${data.StartDate}/${data.EndDate}`)
   //const response = await fetch(`http://localhost:30456/api/Stock/api/get/CompanyCode=${data.CompanyCode}&StartDate=${data.StartDate}&EndDate=${data.EndDate}`)
   //data

   //const response = await fetch(`http://localhost:30456/api/Stock/api/GetStockByDate/${data}`) 
  return await response.json();
}