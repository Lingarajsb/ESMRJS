import React from 'react'


const AddCompany = ({onChangeCompanyForm, addCompany,formErrors,formobj }) => {
    return(
        <div className="container">
           
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Add Company</h2>
                <form>
                    <div className="row">                 
                        <div className="form-group col-md-4">
                        <label htmlFor="txtCompanyCode">Company Code</label>
                            <input type="text" onChange={(e) => onChangeCompanyForm(e)} 
                            value={formobj.CompanyCode} onBlur={(e) => onChangeCompanyForm(e)} 
                             className="form-control" name="CompanyCode" id="CompanyCode"
                              aria-describedby="emailHelp" placeholder="Company Code" />
                            {formErrors.CompanyCode && (<span className="text-danger">{formErrors.CompanyCode}</span>)}
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="txtCompanyName">Company Name</label>
                            <input type="text" onChange={(e) => onChangeCompanyForm(e)} onBlur={(e) => onChangeCompanyForm(e)}  
                             className="form-control" name="CompanyName" id="CompanyName"
                             value={formobj.CompanyName} aria-describedby="emailHelp" placeholder="Company Name" />
                            {formErrors.CompanyName && (<span className="text-danger">{formErrors.CompanyName}</span>)}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="txtCompanyCEO">Company CEO</label>
                            <input type="text" onChange={(e) => onChangeCompanyForm(e)} className="form-control" 
                            onBlur={(e) => onChangeCompanyForm(e)}  name="CompanyCEO" id="CompanyCEO" 
                            value={formobj.CompanyCEO} aria-describedby="emailHelp" placeholder="Company CEO" />
                            {formErrors.CompanyCEO && (<span className="text-danger">{formErrors.CompanyCEO}</span>)}
                        </div>
                    </div>
                    <div className="row">
                      
                        <div className="form-group col-md-4">
                        <label htmlFor="txtCompanyTurnOver">Company Turnover</label>
                            <input type="text" onChange={(e) => onChangeCompanyForm(e)}  onBlur={(e) => onChangeCompanyForm(e)} 
                             className="form-control" name="CompanyTurnover" id="CompanyTurnover"
                             value={formobj.CompanyTurnover} aria-describedby="emailHelp" placeholder="Company Turnover" />
                            {formErrors.CompanyTurnover && (<span className="text-danger">{formErrors.CompanyTurnover}</span>)}
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="txtCompanyWebsite">Company Website</label>
                            <input type="text" onChange={(e) => onChangeCompanyForm(e)}  onBlur={(e) => onChangeCompanyForm(e)}
                             value={formobj.CompanyWebsite}  className="form-control" name="CompanyWebsite" id="CompanyWebsite" aria-describedby="emailHelp" placeholder="Company Website" />
                            {formErrors.CompanyWebsite && (<span className="text-danger">{formErrors.CompanyWebsite}</span>)}
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="txtStockExchange">Stock Exchange</label>
                            <input type="text" onChange={(e) => onChangeCompanyForm(e)}  
                             onBlur={(e) => onChangeCompanyForm(e)} 
                             value={formobj.StockExchange}  className="form-control" name="StockExchange" id="StockExchange" aria-describedby="emailHelp" placeholder="Stock Exchange" />
                            {formErrors.StockExchange && (<span className="text-danger">{formErrors.StockExchange}</span>)}
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => addCompany()} className="btn btn-primary">Add</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default AddCompany