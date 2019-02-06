var userMain = {
	name: 0,
	surname: 0,
	sex: 0,
	date: 0
	//бьект сохраняет данные пользователя
};

function setMeInfo() {
	// извлекаем информацию из форм:
	//Имя
	var setName = document.getElementById("name");
	userMain.name = setName.value;
	//Фамилия
	var setSurName = document.getElementById("surname");
	userMain.surname = setSurName.value;
	//Пол
	var sex_radio = document.getElementsByName("sexName");
	for (i = 0; i < sex_radio.length; i++) {
		if (sex_radio[i].checked) {
			userMain.sex  = sex_radio[i].value;
		}
	}
	//Дата
	var setDate = document.getElementById("date");
	userMain.date= setDate.value;
	
	//Отпрявляем информацию из обьекта на экран
	//Имя
	var nameExit = document.getElementById("nameExit");
	nameExit.innerHTML = "Имя: " + userMain.name;
	//Фамилия
	var surnameExit = document.getElementById("surnameExit");
	surnameExit.innerHTML = "Фамилия: " + userMain.surname;
	//Пол
	var sexExit = document.getElementById("sexExit");
	sexExit.innerHTML = "Пол: " + userMain.sex;
	//Дата рождения
	var dateExit = document.getElementById("dateExit");
	dateExit.innerHTML = "Дата рождения: " + userMain.date;
}

window.onload = init;
function init() {
	// задаем обработчики форм
	var setInfo = document.getElementById("button");
	setInfo.onclick = setMeInfo;
}