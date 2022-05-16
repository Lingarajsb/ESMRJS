import React from 'react'
// import SearchCompanyStocks from './SearchCompanyStocks'

export const Stocks = ({stocks}) => {

    console.log('stocks length:::', stocks.length)
    if (stocks.length === 0) return null

    const StockRow = (stock,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{stock.CompanyCode}</td>
                  <td>{stock.StockPrice}</td>
                  <td>{(new Date(stock.CreatedOn)).toLocaleString().split(',')[0]}</td>
                  <td>{(new Date(stock.CreatedOn)).toLocaleString().split(',')[1]}</td>
              </tr>
          )
    }

    const stockTable = stocks.map((stock,index) => StockRow(stock,index))

    return(
        <div className="container">
            <h2>Stocks</h2>
            {/* <SearchCompanyStocks/> */}
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Company Code</th>
                    <th>Stock Price</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                    {stockTable}
                </tbody>
            </table>
        </div>
    )
}