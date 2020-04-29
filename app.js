//grab the html elements in variables

/*let input = document.querySelector(".input");
let display = document.querySelector(".display");
let button = document.querySelector(".btn");
let selected = document.querySelector(".opt");
let celcius = document.querySelector(".option1");
let farenheits = document.querySelector(".option2");

//change value of the button
 button.value = "Change Temperature";

//add click listner to the button
button.addEventListener('click', fahToCel);
button.addEventListener('click', celToFah);

//add event listener to both inputs
input.addEventListener('input', celToFah);
display.addEventListener('input',fahToCel);

// function to convert farenheits to celcius--------------------
	function fahToCel(){
		
		const ftemp = parseFloat(input.value);
		
		let celTemp = (ftemp - 32) * 5/9;
		//log into the console
		console.log(celTemp + "Celcius");
		//set the result to be displayed
	     input.value = celTemp;

	}
	

// function to convert farenheits to celcius--------------------
	function celToFah(){
		
		const ctemp = parseFloat(input.value);
		let farTemp = ctemp * 9/5 + 32;
		
		//log into the console
          console.log(farTemp + "Farenheits");
          
	     //set the result to be displayed
		display.value = farTemp;
				
	}
	
	//end---------------------------------------------------------*/

const convertFrom = document.querySelector('.convert-FROM');
const convertTo = document.querySelector('.convert-to');

const formula = document.querySelector('.formula');

const fahrenToCelc = (temp) => (temp - 32) * 5 / 9;

const fahrenToKelv = (temp) => (temp - 32) * 5 / 9 + 273.15;

const celcToFahren = (temp) => (temp * 9 / 5) + 32;

const celcToKelv = (temp) => Number(temp) + 273.15;

const kelvToFahren = (temp) => (temp - 273.15) * 9 / 5 + 32;

const kelvToCelc = (temp) => temp - 273.15;



convertFrom.addEventListener('keyup', () => {
    const temp = convertFrom.value;
    let newTemp = convertTo.value;
    const label1 = document.querySelector('.label-1');
    const label2 = document.querySelector('.label-2');


    const convertFromType = document.querySelector('.selection').value;
    const convertToType = document.querySelector('.answerSelection').value;

    //this is working
    if (convertFromType === 'fahrenheit' && convertToType === 'celcius') {
        newTemp = fahrenToCelc(temp).toFixed(2);
        label1.textContent = convertFromType;
        label2.textContent = convertToType;
        formula.textContent = `(${temp}°F - 32) * 5/9 = ${newTemp}°C`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if (convertFromType === 'fahrenheit' && convertToType === 'kelvin') {
        newTemp = fahrenToKelv(temp).toFixed(2);
        label1.textContent = convertFromType;
        label2.textContent = convertToType;
        formula.textContent = `(${temp}°F - 32) * 5/9 + 273.15 = ${newTemp}°K`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if (convertFromType === 'celcius' && convertToType === 'fahrenheit') {
        newTemp = celcToFahren(temp).toFixed(2);
        label1.textContent = convertFromType;
        label2.textContent = convertToType;
        formula.textContent = `(${temp}°C * 9/5) + 32 = ${newTemp}°F`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if (convertFromType === 'celcius' && convertToType === 'kelvin') {
        console.log(convertFromType, convertToType);
        newTemp = celcToKelv(temp).toFixed(2);
        label1.textContent = convertFromType;
        label2.textContent = convertToType;
        formula.textContent = `(${temp}°C + 273.15) = ${newTemp}°K`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if (convertFromType === 'kelvin' && convertToType === 'fahrenheit') {
        newTemp = kelvToFahren(temp).toFixed(2);
        label1.textContent = convertFromType;
        label2.textContent = convertToType;
        formula.textContent = `(${temp}°K - 273.15) * 9/5 + 32 = ${newTemp}°F`;
        convertTo.value = `${newTemp}`;
    }
    //this is working
    else if (convertFromType === 'kelvin' && convertToType === 'celcius') {
        newTemp = kelvToCelc(temp).toFixed(2);
        label1.textContent = convertFromType;
        label2.textContent = convertToType;
        formula.textContent = `${temp}°K - 273.15 = ${newTemp}°C`;
        convertTo.value = `${newTemp}`;
    }
});