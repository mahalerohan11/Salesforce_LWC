import { LightningElement,track} from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track prevResult=[];
    firstNumber;
    secondNumber;

    numberChnageHandler(event)
    {
        const inputBox=event.target.name;
        if(inputBox==='firstNumber')
        {
            this.firstNumber=event.target.value;
        }
        else if (inputBox==='secondNumber') 
        {
            this.secondNumber=event.target.value;
        }
       

    }
    addHandler()
    {
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.secondNumber);
        //this.currentResult='Result of ' +firstN+' + '+secondN+' is '+(firstN+secondN);
        this.currentResult=`result of ${firstN} + ${secondN} is ${firstN+secondN}`;
        prevResult.push(this.currentResult);
    }

    subHandler()
    {
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.secondNumber);
        //this.currentResult='Result of ' +firstN+' + '+secondN+' is '+(firstN+secondN);
        this.currentResult=`result of ${firstN} - ${secondN} is ${firstN-secondN}`;
        prevResult.push(this.currentResult);
    }

    mulHandler()
    {
        const firstN=parseInt(this.firstNumber);
        const secondN=parseInt(this.secondNumber);
        //this.currentResult='Result of ' +firstN+' + '+secondN+' is '+(firstN+secondN);
        this.currentResult=`result of ${firstN} * ${secondN} is ${firstN*secondN}`;
        prevResult.push(this.currentResult);
    }
    

}