

let translateIn = document.querySelector("#translateIn");
let translateEs = document.querySelector("#translateEs");
let translatePt = document.querySelector("#translatePt");
let elementTraslate = document.querySelectorAll("h1, h2, h3, h4,thead>tr>th, p, label, option, a, button")

const translateFunction = async (source, target, text)=>{
	const url = 'https://text-translator2.p.rapidapi.com/translate';
		const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': '0e421f7099msh5a9dedcef0624e0p16403ejsnf6ad076db3e4',
			'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
		},
		body: new URLSearchParams({
			source_language: source,
			target_language: target,
			text: text
		})
		};

		const response = await fetch(url, options);
		return await response.json();
}
const functionModifyText = async (elementsArray, idioma) =>{
	for (let index = 0; index < elementsArray.length; index++) {
		let textTranslate = elementsArray[index].innerText;
		if(elementsArray[index].textContent && textTranslate){
		const result = await translateFunction("auto", idioma, textTranslate)
		elementsArray[index].innerText = result.data.translatedText
		elementsArray[index].classList.remove(idioma)
		}
	}
}

translateEs.addEventListener("click", async ()=>{
	try {
		await functionModifyText(elementTraslate, "es");
		
	} catch (error) {
		console.error(error);
	}
    
})

translateIn.addEventListener("click", async ()=>{
	try {
		await functionModifyText(elementTraslate, "en");
	
	} catch (error) {
		console.error(error);
	}
})

translatePt.addEventListener("click", async ()=>{
	try {
		await functionModifyText(elementTraslate, "pt");
	
	} catch (error) {
		console.error(error);
	}
})





