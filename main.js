let battery=new Pin();
battery.setEnergy(10);
let enter='<br>';
let lamp=new Lamp(true,battery);

document.write("pin hiện tại "+lamp.getBattery()+enter);
lamp.getStatusLamp();
