class Dinero{
    constructor(mxn1, mxn2, mxn5, mxn10, mxn20, mxn50, mxn100, mxn200, mxn500, mxn1000){
        this.moneda1 = mxn1;
        this.moneda2 = mxn2;
        this.moneda5 = mxn5;
        this.moneda10 = mxn10;
        this.bill20 = mxn20;
        this.bill50 = mxn50;
        this.bill100 = mxn100;
        this.bill200 = mxn200;
        this.bill500 = mxn500;
        this.bill1000 = mxn1000;
    }
}

function mostrarDinero(){
    //aqui va el codigo que cuenta el dinero
    if(localStorage.getItem('dineroAhorrado')){
        let money = JSON.parse(localStorage.getItem('dineroAhorrado'));

        let totalAhorro = money['mon1']+(money['mon2']*2)+(money['mon5']*5)+(money['mon10']*10)+(money['Bill20']*20)+
            (money['Bill50']*50)+(money['Bill100']*100)+(money['Bill200']*200)+(money['Bill500']*500)+(money['Bill1000']*1000);

        document.getElementById('mostrarDinero').innerHTML="Tienes: "+totalAhorro+" pesos.\n"
            +"\n\n "+money['mon1']+" en monedas de 1."
            +"\n "+money['mon2']+" en monedas de 2."
            +"\n "+money['mon5']+" en monedas de 5."
            +"\n "+money['mon10']+" en monedas de 10."
            +"\n "+money['Bill20']+" en billetes de 20."
            +"\n "+money['Bill50']+" en billetes de 50."
            +"\n "+money['Bill100']+" en billetes de 100."
            +"\n "+money['Bill200']+" en billetes de 200."
            +"\n "+money['Bill500']+" en billetes de 500."
            +"\n "+money['Bill1000']+"en billetes de 1000.";
        setTimeout(function(){ 
            document.getElementById('mostrarDinero').innerHTML="";
            },5000);
    }else{
        document.getElementById('mostrarDinero').innerHTML="Haz roto tu cochinito:(";
        setTimeout(function(){ 
            document.getElementById('mostrarDinero').innerHTML="";
            },5000);
    }
}

function meterDinero(){
    let dinero = '', totalmoney = '', money = '';
    let mxn1 = parseInt(document.getElementById('mxn1').value);
    let mxn2 = parseInt(document.getElementById('mxn2').value);
    let mxn5 = parseInt(document.getElementById('mxn5').value);
    let mxn10 = parseInt(document.getElementById('mxn10').value);
    let mxn20 = parseInt(document.getElementById('mxn20').value);
    let mxn50 = parseInt(document.getElementById('mxn50').value);
    let mxn100 = parseInt(document.getElementById('mxn100').value);
    let mxn200 = parseInt(document.getElementById('mxn200').value);
    let mxn500 = parseInt(document.getElementById('mxn500').value);
    let mxn1000 = parseInt(document.getElementById('mxn1000').value);
    
    if(localStorage.getItem("dineroAhorrado")){
        money = JSON.parse(localStorage.getItem('dineroAhorrado'));

        mxn1 = money['mon1'] + mxn1;
        mxn2 = money['mon2'] + mxn2;
        mxn5 = money['mon5'] + mxn5;
        mxn10 = money['mon10'] + mxn10;
        mxn20 = money['Bill20'] + mxn20;
        mxn50 = money['Bill50'] + mxn50;
        mxn100 = money['Bill100'] + mxn100;
        mxn200 = money['Bill200'] + mxn200;
        mxn500 = money['Bill500'] + mxn500;
        mxn1000 = money['Bill1000'] + mxn1000;
        localStorage.removeItem('dineroAhorrado');

        dinero = new Dinero(mxn1, mxn2, mxn5, mxn10, mxn20, mxn50, mxn100, mxn200, mxn500, mxn1000);
        totalmoney = {
            mon1: dinero.moneda1,
            mon2: dinero.moneda2,
            mon5: dinero.moneda5,
            mon10: dinero.moneda10,
            Bill20: dinero.bill20,
            Bill50: dinero.bill50,
            Bill100: dinero.bill100,
            Bill200: dinero.bill200,
            Bill500: dinero.bill500,
            Bill1000: dinero.bill1000
        };
        localStorage.setItem("dineroAhorrado", JSON.stringify(totalmoney));

    }else{
        dinero = new Dinero(mxn1, mxn2, mxn5, mxn10, mxn20, mxn50, mxn100, mxn200, mxn500, mxn1000);
        totalmoney = {
            mon1: dinero.moneda1,
            mon2: dinero.moneda2,
            mon5: dinero.moneda5,
            mon10: dinero.moneda10,
            Bill20: dinero.bill20,
            Bill50: dinero.bill50,
            Bill100: dinero.bill100,
            Bill200: dinero.bill200,
            Bill500: dinero.bill500,
            Bill1000: dinero.bill1000
        };
        localStorage.setItem("dineroAhorrado", JSON.stringify(totalmoney));

    }
    document.getElementById('moneyForm').setAttribute("action","alcanciaMain.html");
}

function romperAlcancia(){
    if(localStorage.getItem("dineroAhorrado")){
        localStorage.removeItem('dineroAhorrado');
        document.getElementById('cochinito').setAttribute('src','cochinitoRoto.png');

        setTimeout(function(){
            document.getElementById('cochinito').setAttribute('src','cochinitoBien.png');
            },5000);
    }
    mostrarDinero();
}