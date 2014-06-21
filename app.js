if (jQuery(".current"))
{
	jQuery("#e" + (parseInt(jQuery(".current").attr("id").substring(1))+1)).click();
}
