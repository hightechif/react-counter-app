import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay/CounterDisplay';
import CounterButton from './CounterButton/CounterButton';
import CounterInput from './CounterInput/CounterInput';

class Counter extends Component {

    state = {
        counter: 5,
        quota: 5
    }

    // onTambah = () => {
    //     this.setState((prevState) => {
    //         return { value: prevState.value + 1 }
    //     })
    // }

    // onKurang = () => {
    //     this.setState((prevState) => {
    //         return { value: prevState.value - 1 }
    //     })
    // }

    // onTambahKuota = (n) => {
    //     this.setState((prevState) => {
    //         return { value: prevState.value + n }
    //     })
    // }

    // onKurangKuota = (n) => {
    //     this.setState((prevState) => {
    //         return { value: prevState.value - n }
    //     })
    // }

    // onHitung = (operand, number) => {
    //     switch(operand) {
    //         case "+":
    //             this.setState((prevState) => {
    //                 return { value: prevState.value + number }
    //             })
    //             break;
    //         case "-":
    //             this.setState((prevState) => {
    //                 return { value: prevState.value - number }
    //             })
    //             break;
    //     }
    // }

    counterChangeHandler = (action, value) => {
        switch(action) {
            case "tambah":
                this.setState((prevState) => {
                    return {counter: prevState.counter + 1};
                });
                break;
            case "kurang":
                this.setState((prevState) => {
                    return {counter: prevState.counter - 1};
                });
                break;
            case "tambahKuota":
                this.setState((prevState) => {
                    return {counter: prevState.counter + value};
                });
                break;
            case "kurangKuota":
                this.setState((prevState) => {
                    return {counter: prevState.counter - value};
                });
                break;
            default:
                break;
        }

        // if (action === 'tambah') {
        //     this.setState((prevState) => {
        //         return {counter: prevState.counter + 1};
        //     });
        // }
        // if (action === 'kurang') {
        //     this.setState((prevState) => {
        //         return {counter: prevState.counter - 1};
        //     });
        // }
        // if (action === 'tambahKuota') {
        //     this.setState((prevState) => {
        //         return {counter: prevState.counter + value};
        //     });
        // }
        // if (action === 'kurangKuota') {
        //     this.setState((prevState) => {
        //         return {counter: prevState.counter - value};
        //     });
        // }
    }

    onQuotaChangeHandler = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                quota: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <CounterDisplay value={this.state.counter}/>
                <CounterButton 
                    label="+" 
                    clicked={() => this.counterChangeHandler("tambah")}
                />
                <CounterButton 
                    label="-" 
                    clicked={() => this.counterChangeHandler("kurang")}
                />
                <CounterButton
                    label={`Tambah ${this.state.quota}`}
                    clicked={() => this.counterChangeHandler("tambahKuota", parseInt(this.state.quota, 10))}
                />
                <CounterButton 
                    label={`Kurang ${this.state.quota}`}
                    clicked={() => this.counterChangeHandler("kurangKuota", +this.state.quota)}
                />
                <CounterInput changed={(event) => this.onQuotaChangeHandler(event)}/>
            </div>
        )
    }
}

export default Counter;