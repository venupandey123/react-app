import React, { Component } from 'react';
import './css/style.css';

var op =[];                          /* array for storig numbers */
var decimal = true                  /* to acess decimal slot */

class Nums extends Component {

    constructor(props){
        super(props);
    

        this.pusher = this.pusher.bind(this);
        this.pusher2 = this.pusher2.bind(this);
        this.pusher3 = this.pusher3.bind(this);
        this.pusher4 = this.pusher4.bind(this);
       
        this.reset = this.reset.bind(this);
        this.delete = this.delete.bind(this);
    }

   
    pusher = (event) => {
        event.preventDefault();
        var num = event.target.value;
           console.log(num);
           if(op.length <= 23) {
               op += num;
               this.props.setResult({display:op });
           } else {
               this.props.setResult ({ display: '# of max characters reached'});
           }
        };
              // it is used for adding btn values to op

    pusher2 = (event) => {
        event.preventDefault();
        var num = event.target.value;
        var last = op.charAt(op.length-1);

        if(op.length <= 23) {
            if(( last === "+") || (last === "*") || (last ==="/") || (last === '.')) {
              
            } 
            else {
                op += num;
                decimal = true;
                this.props.setResult({ display:op});
            } 
        }
              else {
                this.props.setResult ({ display : "# of max characters reached"});
            }
       
    };               // to only have 1 operation chained

    pusher3 = (event) => {
        event.preventDefault();
        var num = event.target.value;
           if(op.length <= 23) {
               op += num;
               op = op.replace(/\-+/g,'-');
               decimal = true ;
               this.props.setResult ( { display : op});
           } else {
               this.props.setResult( { display: "# of max chars reached"});
           }
    };

    pusher4 = (event) => {
        event.preventDefault();
        var num = event.target.value;
        if (op.length <= 23) {
            if(decimal) {
                op += num;
                this.props.setResult( { display : op});
                decimal = false;
            }
        } else {
            this.props.setResult( { display : "# of max chars reached"})
        }
    };           /* function for the .decimal */

    result = (event) => {
        event.preventDefault();
        var result = eval(op).toFixed(2);
        var ind = result.indexOf('.');
        if(String(result).length <= 11 ) {
            this.props.setResult( { result : result.slice(0,ind), decimals: result.slice(ind) });
        } else {
            this.props.setResult( { result: 'errors', decimals: ""});
        }
    };            /* will execute operation inside the op */

    reset = (event) => {
        event.preventDefault();
        op = [];
        decimal = true;
        this.props.setResult( { result: 0, display: 0, decimals: '.00' });
    };

    delete = (event) => {
        event.preventDefault();
        var test = false;            /* to test if im next to delete a "." */
        op = op.slice(0,-1);
        this.props.setResult( { display:op });
        console.log (op.indexOf(op.length));

        if(op.charAt(op.length-1) === ".") {
            // to check if character is .
            test = true;
        }

        if ( test && (op.charAt(op.length-2) !== ".")) {
            // activate decimal when delete a '.' character
            decimal = true;
            test = false;
            console.log(test);
        }
    };


    render() {
        return(
            <div className="pad">
                <div className="afterpad">
                    <div className="filter">
                    <form className="calc">

                        <div>
                            <button onClick={this.reset} value={0}>C</button>
                            <button onClick={this.delete}>DEL</button>
                        </div>

                        <div>
                             <button onClick={this.pusher} value={1}>1</button>
                             <button onClick={this.pusher} value={2}>2</button>
                             <button onClick={this.pusher} value={3}>3</button>
                            <button onClick={this.pusher2} value="+">+</button>
                        </div>

                        <div>
                             <button onClick={this.pusher} value={4}>4</button>
                             <button onClick={this.pusher} value={5}>5</button>
                             <button onClick={this.pusher} value={6}>6</button>
                            <button onClick={this.pusher3} value="-">-</button>
                        </div>

                        <div>
                             <button onClick={this.pusher} value={7}>7</button>
                             <button onClick={this.pusher} value={8}>8</button>
                             <button onClick={this.pusher} value={9}>9</button>
                            <button onClick={this.pusher2} value="*">*</button>
                        </div>

                        <div className="lastRow">
                             <button onClick={this.pusher} value={0}>0</button>
                            <button onClick={this.pusher4} value=".">.</button>
                            <button onClick={this.pusher2} value="/">/</button>
                        </div>
                    </form>
                    </div>
                </div>

                <button className="return" onClick={this.result}>=</button>
            </div>
        );

    

    }

}; 


export default Nums;