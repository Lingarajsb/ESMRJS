import React from 'react'


const AddStocks = ({onChangeStockForm, addStock,stockformErrors,formobj }) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Add Stocks</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label htmlFor="txtCompanyCode">Company Code</label>
                            <input type="text" onChange={(e) => onChangeStockForm(e)} onBlur={(e) => onChangeStockForm(e)}
                            value={formobj.CompanyCode}
                             className="form-control" name="CompanyCode" id="CompanyCode" aria-describedby="emailHelp" placeholder="Company Code" />
                         {stockformErrors.CompanyCode && (<span className="text-danger">{stockformErrors.CompanyCode}</span>)} 
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="txtStockPrice">Stock Price</label>
                            <input type="text" onChange={(e) => onChangeStockForm(e)} onBlur={(e) => onChangeStockForm(e)}
                             value={formobj.StockPrice}  className="form-control" name="StockPrice" id="StockPrice" aria-describedby="emailHelp" placeholder="Stock Price" />
                            {stockformErrors.StockPrice && (<span className="text-danger">{stockformErrors.StockPrice}</span>)}
                        </div>
                    </div>              
                    <button type="button" onClick= {(e) => addStock()} className="btn btn-primary">Add</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default AddStocks