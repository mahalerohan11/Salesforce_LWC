import { LightningElement ,track} from 'lwc';

export default class BmiCalculator extends LightningElement {

    weight;
    Height;
    @track BMI;

    onWeightChnage(event){
        this.weight=parseFloat(event.target.value);
    }

    onHightChange(event){
        this.Height=parseFloat(event.target.value);
    }

    calculateBMI(){
        this.BMI=this.weight/(this.Height*this.Height);
    }
}