const head = document.head;
//const css = document.createElement('style')
//head.append(css);


head.insertAdjacentHTML(
	`beforeend`,
	`<style type = "text/css">

			container {
				width: 1046px;
				margin: 0 auto;
			}
		

			header {
				display: flex;
			}

			LogoStyle {

			}

			NavStile{
				display: flex;
			}

			HomeItem{
				color: red;
			}

		</style>
	`
)



const body = document.body;
const container = document.createElement('div');
const header = document.createElement('header');


//const logo = document.createElement('div');
const nav = document.createElement('nav');
//const div = document.createElement('ul')
//const HomeItem = document.querySelector('.HomeItem')
//console.log(HomeItem)




///////////////////////////////////////////////////css container style /////////////////////////////////////////////////////////
//container.style.width = "1046px";
//container.style.margin = "0 auto";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////css header style /////////////////////////////////////////////////////////
//header.style.display = "flex";
//nav.style.display = "flex";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

body.prepend(container);
container.prepend(header);
header.prepend(nav);
//nav.prepend(ul);


container.classList.add('container');
const StyleContainer = document.querySelector('.container');
StyleContainer.style.width = "1046px";
StyleContainer.style.margin = "0 auto";


header.insertAdjacentHTML(
	`afterbegin`,   
	`<div class = "LogoStyle">Relvise</div>`
)

nav.insertAdjacentHTML(
	`beforeend`,
	`	<div class = "NAVItem">Home</div>
		<div class = "NAVItem">Product</div>
		<div class = "NAVItem">Pricing</div>
		<div class = "NAVItem LastItem">Contact</div>	
	</div>`
)

nav.classList.add('NavStyle')
header.classList.add('headerStyle');
nav.classList.add('NavStyle')



const NavStyle = document.querySelector('.NavStyle')
NavStyle.style.display = "flex";


const NAVItem = document.querySelectorAll('.NAVItem')
const LastItem = document.querySelector('.LastItem')


NAVItem.forEach((item) => {
	return item.style.margin = "0px 21px 0px 0px";
})

LastItem.style.margin = "0px 0px 0px 0px";

const logoStyle = document.querySelector('.LogoStyle')
logoStyle.style.fontSize = "24px";
logoStyle.style.fontFamily = "Montserrat";
logoStyle.style.margin = "0px 136px 0px 0px";


/////////////////////////////////querySelector//////////////////////////////////////////

определяет 





/////////////////////////////////innerHTML //////////////////////////////////////////
/*инструмент для вставки текста в HTML тег

//header.innerHTML = 'Hello world';  // вставляет текст в тег 

////////////////////////////////////////////////////////////////////////////



/////////////////////////////////// insertAdjacentHTML/////////////////////////////////////////

/* insertAdjacentHTML отличный инструмент по созданию большого количества блоков в HTML 
имеет два важных параметра которые указываются через запятую первый куда вставлять HTML элемент, второй сама структура 
HTML элементов*/

/*header.insertAdjacentHTML(
	`afterbegin`,   
	`<div class = "LogoStyle">Relvise</div>`   может вставлять тег, стили и содержимое тега разом. 
) вставляет вложенный тег вместе с текстом 
*/
///beforebegin вставить HTML непосредственно перед header  
///afterbegin вставить HTML в начало header
/// afterend вставить HTML непосредственно после header
///beforeend вставить HTML в конец header
///////////////////////////////////////////////////////////////////////////


