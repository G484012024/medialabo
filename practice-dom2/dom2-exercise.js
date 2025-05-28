//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
b = document.querySelector('button#show');  
b.addEventListener('click', show);

function show(){
	let a = document.querySelector('h2#addr');
	let i = document.createElement('p');
	a.insertAdjacentElement('afterend',i);
	i.textContent=campus.address;

	let j = document.createElement('ul');
	let k = document.querySelector('h2#dept');
	k.insertAdjacentElement('afterend', j);
	
	for(let n of gakka){
		let g = document.createElement('li');
		j.insertAdjacentElement('beforeend', g);
		g.textContent=n.name;
	}
}
