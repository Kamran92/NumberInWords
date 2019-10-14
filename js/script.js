// Функция выводит числа от 0 до 9 прописью
function unit(numElem) {
	var unitObj = {
		0: "ноль", 1: "один", 2: "два", 3: "три",
		4: "четыре", 5: "пять", 6: "шесть",
		7: "семь", 8: "восемь", 9: "девять"
	};
	
	var objectKeyUnit = Object.keys(unitObj);
	
	for (var i = 0; i < objectKeyUnit.length; i++) {
		if (numElem == objectKeyUnit[i]) {
			return unitObj[objectKeyUnit[i]];
		};
	};
};

// Функция выводит числа от 10 до 19 прописью
function from10To19(numElem) {
	var from10To19Obj = {
		10: "десять", 11: "одиннадцать", 12: "двенадцать",
		13: "тринадцать", 14: "четырнадцать", 15: "пятнадцать",
		16: "шестнадцать", 17: "семнадцать", 18: "восемнадцать",
		19: "девятнадцать"
	};
	
	var objectKeyFrom10To19 = Object.keys(from10To19Obj);
	
	for (var i = 0; i < objectKeyFrom10To19.length; i++) {
		if (numElem == objectKeyFrom10To19[i]) {
			return from10To19Obj[objectKeyFrom10To19[i]];
		};
	};
};

// Функция выводит ДЕСЯТКИ от 20 до 90 прописью
function dozens(numElem) {
	var dozensObj = {
		20: "двадцать", 30: "тридцать", 40: "сорок",
		50: "пятьдесят", 60: "шестьдесят", 70: "семьдесят",
		80: "восемьдесят", 90: "девяносто"
	};
	
	var objectKeyDozensObj = Object.keys(dozensObj);
	
	for (var i = 0; i < objectKeyDozensObj.length; i++) {
		if (numElem == objectKeyDozensObj[i]) {
			return dozensObj[objectKeyDozensObj[i]];
		};
	};
};

// Функция выводит числа от 0 до 99 прописью
function findingDozens(numElem) {
	if(numElem % 10 != 0 && numElem > 19) {
		return dozens(numElem - (numElem % 10)) + " " + unit(numElem % 10);
	} else  if (numElem > 9 && numElem < 20) {
		return from10To19(numElem);
	} else {
		return dozens(numElem);
	};
};


// Функция выводит СОТКИ от 100 до 900 прописью
function hundred(numElem) {
	var hundredObj = {
		100: "сто", 200: "двести", 300: "триста",
		400: "четыреста", 500: "пятьсот", 600: "шестьсот",
		700: "семьсот", 800: "восемьсот", 900: "девятьсот"
	};
	
	var objectKeyHundredObj = Object.keys(hundredObj);
	
	for (var i = 0; i < objectKeyHundredObj.length; i++) {
		if (numElem == objectKeyHundredObj[i]) {
			return hundredObj[objectKeyHundredObj[i]];
		};
	};
};
// Функция выводит числа от 100 до 999 прописью
// console.log(findingHundreds(903))
function findingHundreds(numElem) {
	if(numElem % 100 != 0 && numElem > 100) {
		if( Number(String(numElem).substr(1, 1)) != 0) {
			return hundred(numElem - (numElem % 100)) + " " + findingDozens(numElem % 100);
		} else {
			return hundred(numElem - (numElem % 100)) + " " + unit(numElem % 100);
		}
	} else {
		return hundred(numElem);
	};
};

// Функция выводит ТЫСЯЧНЫЕ от 1000 до 9000 прописью
function thousands(numElem) {
	if(Number(String(numElem)[0]) == 1) {
		return "одна" + " тысячи";
	} else if (Number(String(numElem)[0]) == 2) {
		return "две" + " тысячи";
	} else if (Number(String(numElem)[0]) < 5) {
		return unit(Number(String(numElem)[0])) + " тысячи";
	}
	return unit(Number(String(numElem)[0])) + " тысяч"; 
};

// Функция выводит числа от 1000 до 9999 прописью
// console.log(findingThousands(2875));
function findingThousands(numElem) {
	if(numElem % 1000 != 0 && numElem > 1000) {
		return thousands(numElem - (numElem % 1000)) + " " + findingHundreds(numElem % 1000);
	} else {
		return thousands(numElem);
	};
};

// Функция выводит числа от 10000 до 99999 прописью
// console.log(findingTensThousands(56233));
function findingTensThousands(numElem) {
	var num = Number(String(numElem).substr(0, 2)); // Первые 2-а числа
	var num1 = Number(String(numElem).substr(1, 1)); // 2-ое число с лева
	var num2 = Number(String(numElem).substr(2)); // Последние 3-и числа

	if(num > 9 && num < 21) {
		if(num2 == 000) {
			return findingDozens(num) + " тысяч";
		} else {
			return findingDozens(num) + " тысяч" + " " + findingHundreds(numElem % 1000);
		}
	}  else if (num1 > 0 && num1 < 5) {
		if (num1 < 3) {
			if (num2 == 000) {
				return changesEnding1And2(num) + " тысячи";
			} else {
				return changesEnding1And2(num) + " тысячи" + " " + findingHundreds(numElem % 1000);
			}
		} else {
			if (num2 == 000) {
				return findingDozens(num) + " тысячи";
			} else {
				return findingDozens(num) + " тысячи" + " " + findingHundreds(numElem % 1000);
			};
		};
		
	} else if (num1 >= 5 && num1 <= 9 ) {
		return findingDozens(num) + " тысяч" + " " + findingHundreds(numElem % 1000);
	} else if (num2 == 000) {
		return findingDozens(num) + " тысяч"
	}  
};

// Функция выводит слово "одна" и "две"
// console.log(changesEnding1And2(21));
function changesEnding1And2(numElem) {
	var obj = {
		1: "одна", 2: "две"
	};
	var num = Number(String(numElem).substr(-1, 1));
	var objKey = Object.keys(obj);
	if (String(numElem).length == 2) {
		for (var i = 0; i < objKey.length; i++) {
			if (num == objKey[i]) {
			return dozens(numElem - num) + " " + obj[objKey[i]];
			};
		};
	};
};

// Функция выводит числа от 100000 до 999999 прописью
// console.log(displaysHundredsThousands(200000));
function displaysHundredsThousands(numElem) {
	var num = Number(String(numElem).substr(0, 1) + "00");
	var num1 = Number(String(numElem).substr(1));
	if(num1 == 00000) {
		return hundred(num) + " тысяч";
	}
	return hundred(num) + " " + findingTensThousands(num1);
};

// функция выводит от нуля до млн
// console.log(printsFromZeroToMillion("dfdf5656"));
function printsFromZeroToMillion(numElem) {
	var longStrNum = String(numElem).length;

	if(longStrNum <= 6) {
		switch (longStrNum) {
			case 6:
				return displaysHundredsThousands(numElem);
			case 5:
				return findingTensThousands(numElem);
			case 4:
				return findingThousands(numElem);
			case 3:
				return findingHundreds(numElem);
			case 2:
				return findingDozens(numElem);
			case 1:
				return unit(numElem);
		};
	} else {return "Введите цифру до миллиона!!!"};
};

var button = document.querySelector("button");
var input = document.querySelector("input");
button.addEventListener("click", function() {
	if (input.value == "") {
		alert("Введите цифру до миллиона!!!");
	} else {
		alert(printsFromZeroToMillion(Number(input.value)));
	};
});