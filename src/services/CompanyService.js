export async function getAllCompany() {

    const response = await fetch('http://localhost:30456/api/Company/api/getall');
    return await response.json();

    // const response = await fetch(`https://api.github.com/Lingarajsb/ESM.WebAPI/api/Company`, {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(data)
    //   })
    // return await response.json();
}

export async function addCompany(data) {
    const response = await fetch(`http://localhost:30456/api/Company/api/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}

export async function deleteCompany(CompanyCode) {
    const response = await fetch(`http://localhost:30456/api/Company/api/delete/`+CompanyCode, {
        method: 'DELETE'
      })
    return await response.json();
}