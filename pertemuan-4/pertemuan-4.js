
var totalBus = 10;
var busLembur = 8;
var busOperasi = 6;
var count = 1;

while(count <= totalBus){
    if(count == busLembur){
        console.log("Bus Transjakarta " + count + " sedang lembur");
    }else if (count <= busOperasi) {
        console.log("Bus Transjakarta " + count + " sedang beroperasi denagn baik");
    } else {
        console.log("Bus Transjakarta " + count + " sedang tidak beroperasi");
    }   
    count++;
}


