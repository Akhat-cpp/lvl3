const nowOnElem = {};
const endArray = {};
const dataForWidthDiv = {};
dataForWidthDiv.lengthh = 0;
function Carousel(id, array)
{
	const elemDiv = document.getElementById(id);
	let counter = 0;
	const strArrows = '<i class="fas fa-chevron-left" id="' + id + 'bLeft" onclick="buttonScroll(`' + id +'`, -1)"></i><div id="' + id + 'imgDiv" style="width:100px;"></div><i class="fas fa-chevron-right" id="' + id + 'bRight" onclick="buttonScroll(`' + id + '`, 1)"></i>';
	elemDiv.innerHTML = strArrows;
	const imgDiv = document.getElementById(id + "imgDiv");
	elemDiv.classList.add("arrowsDiv");
	imgDiv.classList.add("imgDiv");
	let strImg = "";
	while(counter != array.length)
	{
		strImg = strImg + '<img src="' + array[counter] + '" id="' + id + 'imgEl' + counter + '">'
		counter++;
	}
	imgDiv.innerHTML = strImg;
	imgDiv.style.overflow = "hidden";//auto
	document.getElementById(id + "bLeft").classList.add("unvisible");
	elemDiv.classList.add("unvisible");//can delete1
	dataForWidthDiv[dataForWidthDiv.lengthh] = id;
	dataForWidthDiv.lengthh++;
	nowOnElem[id] = 0;
	endArray[id] = array.length;
}
window.onload = function()
{
	let counter = 0;
	const counter1 = dataForWidthDiv.lengthh;
	let maxImgWidth;
	let maxImgHeight;
	let counter2;
	while(counter != counter1)
	{
		id = dataForWidthDiv[counter];
		counter2 = 0;
		maxImgWidth = document.getElementById(id + "imgEl0").width;
		maxImgHeight = document.getElementById(id + "imgEl0").height;
		while(counter2 != endArray[id])
		{
			if(document.getElementById(id + "imgEl" + counter2).width > maxImgWidth)
			{
				maxImgWidth = document.getElementById(id + "imgEl" + counter2).width;
				maxImgHeight = document.getElementById(id + "imgEl" + counter2).height;
			}
			counter2++;
		}
		counter2 = 0;
		while(counter2 != endArray[id])
		{
			document.getElementById(id + "imgEl" + counter2).style.cssText += "min-width: " + maxImgWidth + "px";
			document.getElementById(id + "imgEl" + counter2).height = maxImgHeight;
			counter2++;
		}
		document.getElementById(id + "imgDiv").style.width = maxImgWidth + "px";
		document.getElementById(id + "imgDiv").height = maxImgHeight;
		document.getElementById(id).classList.remove("unvisible");//can delete1
		counter++;
	}
}
function buttonScroll(id, typeButton)
{
	const bLeftF1 = document.getElementById(id + "bLeft");
	const bRightF1 = document.getElementById(id + "bRight");
	const nameImgF1 = id + "imgEl" + nowOnElem[id];
	const widthImgF1 = document.getElementById(nameImgF1).width;
	const imgDivF1 = document.getElementById(id + "imgDiv");
	if(typeButton == "-1" && nowOnElem[id] != 0)
	{		
		imgDivF1.scrollBy((widthImgF1 * -1), 0);
		bRightF1.classList.remove("unvisible");
		if(nowOnElem[id] == 1)
			bLeftF1.classList.add("unvisible");
		nowOnElem[id]--;
	}
	if(typeButton == "1" && nowOnElem[id] != (endArray[id]-1))
	{
		imgDivF1.scrollBy(widthImgF1, 0)
		bLeftF1.classList.remove("unvisible");
		if(nowOnElem[id] == (endArray[id] - 2))
			bRightF1.classList.add("unvisible");
		nowOnElem[id]++;
	}
}