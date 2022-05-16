import React,{ Component,Fragment } from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


import { Companies } from './components/Companies'
import AddCompany from './components/AddCompany';
import { Stocks } from './components/Stocks';
import { format } from 'date-fns'


import { addCompany, getAllCompany,deleteCompany } from './services/CompanyService';
import { addStock, getAllStocks,getStockByCompanyCode } from './services/StockService';
import AddStocks from './components/AddStocks';

import { BrowserRouter as Router, Switch, Route, Link,Routes  } from 'react-router-dom';  
import SearchCompanyStocks from './components/SearchCompanyStocks';
import { DisplayBoard } from './components/DisplayBoard';

class Home extends Component {
    state = {
        company: {},
        companyList: [],
        numberOfCompanies: 0,
        stock: {},
        stockList: [],
        numberOfStocks: 0,
        companycode:'',
        startdate: '' ,  
        enddate:'',
        form: {
          CompanyCode: "",
          CompanyName: "",
          CompanyCEO: "",
          CompanyTurnover: "",
          CompanyWebsite: "",
          StockExchange: ""
        },
        formErrors: {
          CompanyCode: null,
          CompanyName:null,
          CompanyCEO: null,
          CompanyTurnover: null,
          CompanyWebsite: null,
          StockExchange: null
        }, 
        stockform: {
          CompanyCode: "",
          StockExchange: ""
        },
        stockformErrors: {
          CompanyCode: null,
          StockPrice: null
        }  
      }
    
      componentDidMount() {
        getAllCompany()
        .then(companyList => {
          this.setState({companyList: companyList, numberOfCompanies: companyList.length})
        });

        getAllStocks()
          .then(stockList => {
            this.setState({stockList: stockList, numberOfStocks: stockList.length})
          });
      }
    Changedate = (e) => {    
      console.log(e);
        this.setState({    
                startdate: e   
        });    
    };  
    enddate = (e) => {    
        this.setState({    
            enddate: e    
        });    
    };  
    
    handlestocksearch=(e)=>{
      //e.preventdefault();
      //console.log(new Date(this.state.startdate).toLocaleDateString('fr-FR'));
      //console.log(new Date(this.state.startdate).toISOString().slice(0, 10))
      //console.log(format(new Date(this.state.startdate), 'dd-MM-yyyy'))
      const data = {CompanyCode:this.state.companycode, StartDate: format(new Date(this.state.startdate), 'dd-MM-yyyy'), EndDate:format(new Date(this.state.enddate), 'dd-MM-yyyy')};    
      console.log(data)
      getStockByCompanyCode(data)
      .then(stockList => {
        console.log(stockList);
        this.setState({stockList: stockList, numberOfStocks: stockList.length})
    });
    }
    onChangeCompanyCode=(e)=>{
      //console.log(e.target.value);
      this.setState({companycode:e.target.value})
    }



    validateNumber = evt => {
      var theEvent = evt || window.event;
  
      // Handle paste
      if (theEvent.type === "paste") {
        key = theEvent.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    };

    
    validateField = (name, value, refValue) => {
      const allowOnlyAlphabets = /^[A-Za-z]+$/;
      const allowOnlyNumeric = /^[0-9\b]+$/;
      const allowOnlyDecimal=/^(\d+(\.\d{0,2})?|\.?\d{1,2})$/;
      let errorMsg = null;
      switch (name) {
        case "CompanyCode":
          if (!value) errorMsg = "Please enter Company Code.";
          else if (value.length < 6) errorMsg = "Company Code must be more than 5 characters";
          break;
        case "CompanyName":
          if (!value) errorMsg = "Please enter Company Name.";
          else if (value.length < 4) errorMsg = "Company Name must be more than 3 characters";
          break;
        case "CompanyCEO":
          if (!value) errorMsg = "Please enter Company CEO.";
          else if (!allowOnlyAlphabets.test(value)) errorMsg = "Only alphabets allowed";
          else if (value.length < 4) errorMsg = "Company CEO must be more than 3 characters";
          break;
        case "CompanyTurnover":
          if (!value) errorMsg = "Please enter Company Turnover.";
          else if (!allowOnlyNumeric.test(value)) errorMsg = "Only numbers allowed";
          else if (value.length < 9) errorMsg = "Accepts amount more than 10 Cr.";
          break;
        case "CompanyWebsite":
          if (!value) errorMsg = "Please enter Company Website.";
          else if (value.length < 11) errorMsg = "Company Name must be more than 10  characters";
          break;
        case "StockExchange":
          if (!value) errorMsg = "Please enter Stock Exchange.";
          else if (value.length < 4) errorMsg = "Stock Exchange must be more than 3  characters";
          break;
        case "StockPrice":
          if (!value) errorMsg = "Please enter Stock Price.";
          //else if (!allowOnlyDecimal.test(value)) errorMsg = "Only decimal values allowed";
          break;
        default:
          break;
      }
      return errorMsg;
    };

    validateForm = (form, formErrors, validateFunc) => {
      const errorObj = {};
      Object.keys(formErrors).map(x => {
        let refValue = null;
        const msg = validateFunc(x, form[x], refValue);
        if (msg) errorObj[x] = msg;
      });
      return errorObj;
    };

    validateStockForm = (form, stockformErrors, validateFunc) => {
      const errorObj = {};
      Object.keys(stockformErrors).map(x => {
        let refValue = null;
        const msg = validateFunc(x, form[x], refValue);
        if (msg) errorObj[x] = msg;
      });
      return errorObj;
    };

      addCompany = (e) => {
        const { form, formErrors } = this.state;
        const errorObj = this.validateForm(form, formErrors, this.validateField);
        if (Object.keys(errorObj).length !== 0) {
          this.setState({ formErrors: { ...formErrors, ...errorObj } });
          return false;
        }

         addCompany(this.state.company)
           .then(response => {
             console.log(response);
             this.setState({numberOfCompanies: this.state.numberOfCompanies + 1})
         });
      } 
      
     handleDeleteCompany = (CompanyCode) => {
      let company
        console.log(CompanyCode);
        deleteCompany(CompanyCode)
          .then(response => {
            console.log(response);
            //this.setState({numberOfCompanies: this.state.numberOfCompanies - 1})
            this.setState({companyList: response, numberOfCompanies: response.length})
        });
      } 
      getAllCompany = () => {
        getAllCompany()
          .then(companyList => {
            //console.log(companyList)
            this.setState({companyList: companyList, numberOfCompanies: companyList.length})
          });
      }
    
      onChangeCompanyForm = (e) => {
        const { name, value } = e.target;
        
        const { form, formErrors } = this.state;
        let formObj = {};
          // handle change event except language field
          formObj = {
            ...form,
            [name]: value
          };
        this.setState({ form: formObj }, () => {
          if (!Object.keys(formErrors).includes(name)) return;
          let formErrorsObj = {};
          // const errorMsg = this.validateField(
          //   name,
          //   name === value
          //   );
          const errorMsg = this.validateField(name, value);
          formErrorsObj = { ...formErrors, [name]: errorMsg };
            console.log(name)
            console.log(value)
            formErrorsObj = { ...formErrors, [name]: errorMsg };
            this.setState({ formErrors: formErrorsObj });
        });

          let company = this.state.company
          if (e.target.name === 'CompanyCode') {
            company.CompanyCode = e.target.value;
          } else if (e.target.name === 'CompanyName') {
            company.CompanyName = e.target.value;
          } else if (e.target.name === 'CompanyCEO') {
            company.CompanyCEO = e.target.value;
          }
          else if (e.target.name === 'CompanyTurnover') {
            company.CompanyTurnover = e.target.value;
          }
          else if (e.target.name === 'CompanyWebsite') {
            company.CompanyWebsite = e.target.value;
          }
          else if (e.target.name === 'StockExchange') {
            company.StockExchange = e.target.value;
          }
          this.setState({company})
      }
    
      onChangeStockForm = (e) => {

        const { name, value } = e.target;
        
        const { stockform, stockformErrors } = this.state;
        let formObj = {};
          // handle change event except language field
          formObj = {
            ...stockform,
            [name]: value
          };
        this.setState({ stockform: formObj }, () => {
          if (!Object.keys(stockformErrors).includes(name)) return;
          let formErrorsObj = {};
          const errorMsg = this.validateField(name, value);
          formErrorsObj = { ...stockformErrors, [name]: errorMsg };
            console.log(name)
            console.log(value)
            formErrorsObj = { ...stockformErrors, [name]: errorMsg };
            this.setState({ stockformErrors: formErrorsObj });
        });

        let stock = this.state.stock
        if (e.target.name === 'CompanyCode') {
          stock.CompanyCode = e.target.value;
        } else if (e.target.name === 'CtockPrice') {
          stock.StockPrice = e.target.value;
         // stock.CreatedOn = Date();//.toLocaleString();
        }
        this.setState({stock})
      }
    
    
      addStock = (e) => {
        const { stockform, stockformErrors } = this.state;
        const errorObj = this.validateStockForm(stockform, stockformErrors, this.validateField);
        if (Object.keys(errorObj).length !== 0) {
          this.setState({ stockformErrors: { ...stockformErrors, ...errorObj } });
          return false;
        }
        addStock(this.state.stock)
          .then(response => {
            console.log(response);
            this.setState({numberOfStocks: this.state.numberOfStocks + 1})
        });
      } 
    
      getAllStocks = () => {
        getAllStocks()
          .then(stockList => {
            //console.log(stockList)
            this.setState({stockList: stockList, numberOfStocks: stockList.length})
          });
      }
    render() {
      const { form, formErrors } = this.state;
      const { stockform, stockformErrors } = this.state;
        return (
            <div>
		<div className="container">  
            {/* <div className="row">  
                    <div className="col-sm-12">  
                        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
                            <div className="collapse navbar-collapse" >    
                              <ul className="navbar-nav mr-auto"> 
                              <li className="nav-item">    
                                  <Link to='/home' className="nav-link">Home</Link>    
                                </li>    
                                <li className="nav-item">    
                                  <Link to='/AddCompany' className="nav-link">Add Company</Link>    
                                </li>    
                                <li className="nav-item">    
                                  <Link to='/AddStock' className="nav-link">Add Company Stock</Link>    
                                </li>   
                              </ul>    
                            </div>    
                          </nav> <br />    
                    </div>  
            </div> */}

        
        
        <Routes>      
          <Route path="/home" element={
             <Fragment>
               <DisplayBoard
                  numberOfCompanies={this.state.numberOfCompanies}
                  getAllCompany={this.getAllCompany}

                  numberOfStocks={this.state.numberOfStocks}
                  getAllStocks={this.getAllStocks}
                >
                </DisplayBoard>
              {/* <SearchCompanyStocks  handlechangeddate={this.Changedate} handleenddate={this.enddate} 
              startdate={this.state.startdate} enddate={this.state.enddate} 
              handlesearch={this.handlestocksearch} onChangeCompanyCode={this.onChangeCompanyCode}
              /> */}
              <Companies companies={this.state.companyList} deleteCompany={this.handleDeleteCompany}></Companies>
              <Stocks stocks={this.state.stockList} ></Stocks>
             </Fragment>
          
          } ></Route>

          <Route path="/StockSearch" element={
             <Fragment>
              <SearchCompanyStocks  handlechangeddate={this.Changedate} handleenddate={this.enddate} 
              startdate={this.state.startdate} enddate={this.state.enddate} 
              handlesearch={this.handlestocksearch} onChangeCompanyCode={this.onChangeCompanyCode}
              />
              {/* <Companies companies={this.state.companyList} deleteCompany={this.handleDeleteCompany}></Companies> */}
              <Stocks stocks={this.state.stockList}></Stocks>
             </Fragment>
          
          } ></Route>

           <Route path='/AddCompany' element={
               <AddCompany  onChangeCompanyForm={this.onChangeCompanyForm} addCompany={this.addCompany} 
               formErrors={this.state.formErrors} formobj={this.state.form} ></AddCompany>}> 
           </Route>
           <Route  path='/Companies'
              element={<AddStocks
                onChangeStockForm={this.onChangeStockForm}
                  addStock={this.addStock}
                  stockformErrors={this.state.stockformErrors}
                  formobj={this.state.stockform}
                  >
                </AddStocks>}>
           </Route>

           <Route  path='/AddStock'
              element={
                
              <AddStocks
              onChangeStockForm={this.onChangeStockForm}
                  addStock={this.addStock}
                  stockformErrors={this.state.stockformErrors}
                  formobj={this.state.stockform}
                  >
                </AddStocks>
                } 
                >
           </Route>
        </Routes>  
      </div>  
        </div>
)
    }
}
export default Home;