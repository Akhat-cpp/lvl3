//1.1
// function showModal1(id1)
// {
// 	let modal1 = document.getElementById(id1);
// 	modal1.classList.remove("unvisible");
// 	let backg1 = document.getElementById(div1taskk);
// 	backg1.classList.remove("unvisible");
// }
// function notShowModal1(id2)
// {
// 	let modal2 = document.getElementById(id2);
// 	modal2.classList.add("unvisible");
// 	let backg2 = document.getElementById(div1taskk);
// 	backg1.classList.add("unvisible");
// }
// 
// 1.2
// window.onclick = function(e) 
// {
// 	if(e.target.attributes[1].value == undefined || e.target.attributes[1].value == null) return; // почему не работает?, как сделать чтоб ошибки не выскакивали?
// 	if(e.target.attributes[1].value == "send")
// 	{
// 		let elemVid = document.getElementById(e.target.attributes[1].value);
// 		elemVid.classList.remove("modal");
// 		let backg11 = document.getElementById("backblackid");
// 		backg11.classList.remove("unvisible");
// 	}
// 	if(e.target.attributes[1].value == "close")
// 	{
// 		let elemnVid = document.getElementById(e.target.attributes[1].value);
// 		elemnVid.parentNode.classList.add("modal");
// 		let backg22 = document.getElementById("backblackid");
// 		backg22.classList.add("unvisible");
// 	}
// }
/*все что сверху просто халтура, можно удалить но так подсказки не будут добавляться в еммете))*/
window.onclick = function(e)
{	
	if(e.target.attributes.length < 2) return; //e.target.attributes[1].value = html, поэтому проверка длиной
	elemActiv = document.getElementById(e.target.attributes[1].value + "-button");
	if(elemActiv.classList.contains("modal-trigger"))
	{
		elemVid = document.getElementById(e.target.attributes[1].value);
		elemVid.classList.remove("unvisible");
		darkbackground(true);
	}
	if(elemActiv.classList.contains("modal-close"))
	{
		elParentId = elemActiv.parentNode;
		elParentId.classList.add("unvisible");
		darkbackground(false);
	}
}
function darkbackground(znach)
{
	if(znach) document.getElementById("darkBackgroundId").classList.remove("unvisible");
	else document.getElementById("darkBackgroundId").classList.add("unvisible");
}