// var x = "hello world";
// console.log(x);
// console.log(document.getElementById("screen"));
// console.log(document.getElementById("screen").textContent);
document.addEventListener("DOMContentLoaded",
	function (event){
		function clearScreen(){
			document.getElementById("screen").textContent = "0";
			document.getElementById("small-screen").textContent ="";
		}
		function clear(){
			if(document.getElementById("screen").textContent != "0"){
				if(document.getElementById("screen").textContent.length ==1){
					document.getElementById("screen").textContent = "0";
				}else{
					document.getElementById("screen").textContent = document.getElementById("screen").textContent.slice(0, -1);
				}
			}
			
		}

		function addDigit(){
			if(document.getElementById("screen").textContent != "0"){
				if(state.equal == true){
					document.getElementById("screen").textContent = this.textContent;
					document.getElementById("small-screen").textContent = "";
					state.equal = false;
				}else{
					document.getElementById("screen").textContent += this.textContent;
				}
				// document.getElementById("screen").textContent += this.textContent;
			}else{
				document.getElementById("screen").textContent = this.textContent;
				document.getElementById("small-screen").textContent = "";
			}
		}

		function addDot() {
			if(!document.getElementById("screen").textContent.match(/\./)){
				document.getElementById("screen").textContent = 
				document.getElementById("screen").textContent + this.textContent;
			}
		}

		function operate(){
			console.log(state);
			if(state.operator != null){
				document.getElementById("small-screen").textContent += document.getElementById("screen").textContent + this.textContent;	
			}else{
				document.getElementById("small-screen").textContent = document.getElementById("screen").textContent + this.textContent;
			}
			switch(state.operator){
				case "+":
					state.sum += parseFloat(document.getElementById("screen").textContent);
					state.sum = Math.round( state.sum * 100 + Number.EPSILON ) / 100
					document.getElementById("screen").textContent = ""
					break;
				case "-":
					state.sum -= parseFloat(document.getElementById("screen").textContent);
					state.sum = Math.round( state.sum * 100 + Number.EPSILON ) / 100
					document.getElementById("screen").textContent = ""
					break;
				case "/":
					state.sum /= parseFloat(document.getElementById("screen").textContent);
					state.sum = Math.round( state.sum * 100 + Number.EPSILON ) / 100
					document.getElementById("screen").textContent = ""
					break;
				case "x":
					state.sum *= parseFloat(document.getElementById("screen").textContent);
					state.sum = Math.round( state.sum * 100 + Number.EPSILON ) / 100
					document.getElementById("screen").textContent = ""
					break;
				case null:
					state.sum = parseFloat(document.getElementById("screen").textContent);
					document.getElementById("screen").textContent = ""
					break;
			}
			state.operator = this.textContent;
			console.log(state);
		}
		function equaloperate() {
			console.log(state);
			if(state.operator !=null){
				document.getElementById("small-screen").textContent += document.getElementById("screen").textContent;	
			}
			let ab = parseFloat(document.getElementById("screen").textContent);
			switch(state.operator){
				case "+":
					document.getElementById("screen").textContent = Math.round( (state.sum + ab)* 100 + Number.EPSILON ) / 100;
					break;
				case "-":
					document.getElementById("screen").textContent = Math.round( (state.sum - ab)* 100 + Number.EPSILON ) / 100;
					break;
				case "/":
					document.getElementById("screen").textContent = Math.round( (state.sum / ab)* 100 + Number.EPSILON ) / 100;
					break;
				case "x":
					document.getElementById("screen").textContent = Math.round( (state.sum * ab)* 100 + Number.EPSILON ) / 100;
					break;
				case null:
					break;
			}
			state.sum = 0;
			state.operator = null;
			state.equal = true;
			console.log(state);
		}

		// LOGIC
		var state ={
			sum : 0,
			operator : null,
			equals : false
		};
		

		// event listeners
		document.querySelector("#clear").addEventListener("click", clearScreen);
		document.querySelector("#c").addEventListener("click", clear);
		document.querySelector("#dot").addEventListener("click", addDot);
		document.querySelector("#equal").addEventListener("click", equaloperate);

		const ops = document.querySelectorAll(".button-opr");
		for(let i = 0; i< ops.length; i++){
			// console.log(state);
			// ops[i].myParam = state[sum];
			ops[i].addEventListener("click", operate);

		}
		const buttons = document.querySelectorAll(".button-num");
		for(let i = 0; i< buttons.length; i++){
			buttons[i].addEventListener("click", addDigit);
		}


		// var abc = 123;
		
		// const someInput = document.querySelector("#equal")
		
		// someInput.myParam = 'equalparams'
		// someInput.addEventListener("click", test);
		// function test(){
		// 	abc++;
		// 	console.log(abc);
		// }

		// console.log(document.querySelector("#clear"));\
		}
);
