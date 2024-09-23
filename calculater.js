var display=document.querySelector("#disp")

function show(val){
	display.value+=val
}

function clean(){
	display.value=""
}

function answer(){
	var ans=display.value
	ans=eval(ans)
	display.value=ans
}
