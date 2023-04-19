//your JS code here. If required.
const colorSelect=document.getElementById("colorSelect");
const removeBtn=document.querySelector('input[type="button"]');

removeBtn.addEventListener("click",function()
{
	const selectedOpt=colorSelect.options[colorSelect.selectedIndex];
	colorSelect.removeChild(selectedOpt);
});