import React from 'react'

export const Companies = ({companies,deleteCompany}) => {

    console.log('companies length:::', companies.length)
    if (companies.length === 0) return null

    const CompanyRow = (company,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{company.CompanyCode}</td>
                  <td>{company.CompanyName}</td>
                  <td>{company.CompanyTurnover}</td>
                  <td>{company.StockExchange}</td>
                  <td>{company.StockPrice}</td>
                  <td>
                    <button type="button" onClick={(e)=>deleteCompany(company.CompanyCode)} 
                     className="btn btn-primary">
                    Delete
                    </button>
                </td>
              </tr>
          )
    }

    const companyTable = companies.map((company,index) => CompanyRow(company,index))

    return(
        <div className="container">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Company List</h6>
                </div>
                <div className="card-body">
                <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellPadding="0">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Company Code</th>
                    <th>Company Name</th>
                    <th>Company Turnover</th>
                    <th>Stock Exchange</th>
                    <th>Stock Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tfoot>
                    <tr>
                    <th>#</th>
                    <th>Company Code</th>
                    <th>Company Name</th>
                    <th>Company Turnover</th>
                    <th>Stock Exchange</th>
                    <th>Stock Price</th>
                    <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                    {companyTable}
                </tbody>
            </table>
            </div>
            </div>
            </div>
        </div>
    )
}