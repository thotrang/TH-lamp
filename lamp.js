class Pin{
    energy;
    constructor(energy){
        this.energy=energy;
    }
    getEnergy(){
        return this.energy;
    }
    setEnergy(energy){
        this.energy=energy;
    }
    
    dropEnergy(){
        if(this.energy>0)
        return this.energy--;
    }
}

class Lamp{
    status;
    battery;
    constructor(status,battery){
        this.status=status;
        this.battery=battery;
    }
    getBattery(){
        return this.battery.getEnergy();
    }
    setBattery(battery){
        this.battery=battery;
    }
    getStatusLamp(){
        if(this.battery==0){

        }
        if(this.status)
            alert('đèn đã được bật') ;
        else{
            alert('đèn đang tắt') ;
        }
    }
    turnOn(){
        return this.status=true;
    }
    turnOff(){
        return this.status=false;
    }

}