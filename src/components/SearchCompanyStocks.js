import React from 'react'  
// import './App.css';  
// import axios from "axios";  
 import DatePicker from "react-datepicker";    
 import "react-datepicker/dist/react-datepicker.css";    
const SearchCompanyStocks =({handlechangeddate,handleenddate,startdate,enddate,handlesearch,onChangeCompanyCode})=> {  
    // this.state = {  
    //     employeedata: [],  
    //     startdate: '' ,  
    //     enddate:''   
    // }  
    // this.Changedate = (e) => {    
    //     this.setState({    
    //             startdate: e    
    //     });    
    // };  
    // this.enddate = (e) => {    
    //     this.setState({    
    //         enddate: e    
    //     });    
    // };  
    // componentDidMount() {  
    //     axios.get('http://localhost:1141/Api/Searchdata/showdata').then(response => {  
    //         console.log(response.data);  
    //         this.setState({  
    //             employeedata: response.data  
    //         });  
    //     });  
    // }  
//     onsubmit = (e) => {    
//         debugger;  
//         const data = { startdate:this.state.startdate, enddate:this.state.enddate};    
//         e.preventDefault();    
//         axios.post('http://localhost:1141/Api/Searchdata/search',data).then(response => {  
//             console.log(response.data);  
//             this.setState({  
//                 employeedata: response.data  
//             });  
//         });  
// }     
 //   render() {   onSubmit={this.onsubmit}
        return (  
            <div>  
                <div className="row">  
                    <div className="col-sm-12 btn btn-primary">  
                        Search Company Stock Between Two Dates  
                 </div>  
                </div>  <br/>
                <form >  
                    <div className="row hdr" >  
                        <div className="col-sm-3 form-group">  
                                <input type="text" onChange={(e) => onChangeCompanyCode(e)} placeholder="Enter Company Code" className="form-control"></input>
                        </div>  
                        <div className="col-sm-3 form-group">  
                                <DatePicker className="form-control"    
                                                          selected={startdate} placeholderText="Select Date" showPopperArrow={false}    
                                                        //  onChange={this.Changedate}
                                                        dateFormat="dd-MM-yyyy" value={startdate}    onChange={(e)=>handlechangeddate(e)}    
                                                />    
                        </div>  
                        <div className="col-sm-3 form-group">  
                                 <DatePicker className="form-control"    
                                                          selected={enddate} placeholderText="Select Date" showPopperArrow={false}    
                                                     // onChange={this.enddate}    
                                                 dateFormat="dd-MM-yyyy" value={startdate}   onChange={(e)=>handleenddate(e)}    
                                                />    
                        </div>  
                        <div className="col-sm-3 form-group">  
                            <button type="button" className="btn btn-success" onClick={(e)=>handlesearch()} >Search</button>  
                        </div>  
                    </div>  
                </form>            
            </div>  
        )  

    }  
//}  
export default SearchCompanyStocks