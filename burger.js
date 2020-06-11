window.onclick = function(e)
{	
	if(e.target.attributes.length < 2) return; //e.target.attributes[1].value = html, поэтому проверка длиной
	let elemActiv = document.getElementById(e.target.attributes[1].value + "-hidding");
	let elem = document.getElementById(e.target.attributes[1].value)
	let temp = 0;
	if(elemActiv.classList.contains("burger-unhidden") && temp == 0)
	{
		elemActiv.classList.remove("burger-unhidden"); elemActiv.classList.remove("fa-bars");
		elemActiv.classList.add("burger-hidden"); elemActiv.classList.add("fa-times");
		//
		elem.classList.remove("hidden-sm")
		temp++;
	}
	if(elemActiv.classList.contains("burger-hidden") && temp == 0)
	{
		elemActiv.classList.remove("burger-hidden"); elemActiv.classList.remove("fa-times"); 
		elemActiv.classList.add("burger-unhidden"); elemActiv.classList.add("fa-bars");
		//
		elem.classList.add("hidden-sm");
		temp++;
	}
	// elem = document.getElementById(e.target.attributes[1].value);
	// console.log(elemActiv.classList)
	// if(elemActiv.classList.contains("burger-hidden"))
	// {
	// 	document.getElementById(e.target.attributes[1].value+"close-button").classList.remove("unvisible");
	// 	elemActiv.classList.add("unvisible");
	// 	elem.classList.remove("hidden");
	// 	console.log("huy1")
	// }
	// if(elemActiv.classList.contains("burger-close"))
	// {
	// 	document.getElementById(e.target.attributes[1].value+"-button").classList.remove("unvisible");
	// 	elemActiv.classList.add("unvisible")
	// 	elem.classList.add("hidden");
	// 	console.log("her2")
	// }
}