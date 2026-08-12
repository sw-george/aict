$(function(){
$(".popup").click(function(event){
event.preventDefault();
varhref =$(this).attr("href");
varwidth =$(this).attr("data-width");
varheight =$(this).attr("data-height");
varpopup =window.open (href,"popup",
"height="+ height+",width="+width +"");
});
});