//Executing the code should display true three times in the browser.

function sortByFoo(tab) {
	// TODO: Fill in the code here, using Array.sort.

	var tabAux = new Array(), i = 0;

	if (tab.length != 0) {
		for (; i < tab.length; i++) {
			if (tab[i].foo === undefined)
				tab[i].foo = 0;
			tabAux.push(tab[i].foo);
		}
		tabAux.sort();
		for (i = 0; i < tabAux.length; i++) {
			tab[i].foo = tabAux[i];
//			console.log(tab[i].foo);
		}
	}

	return tab;
}

// Sort by .foo attribute
console.log(sortByFoo([ {
	foo : 5
}, {
	foo : 7
}, {
	foo : 4
}, {
	foo : 3
}, {
	foo : 2
}, {
	foo : 1
}, {
	foo : 6
} ])[5].foo === 6);

// Does not crash on an empty array
console.log(sortByFoo([]).length === 0);

// For objects without a `foo` attribute, its value should be considered equal
// to '0'
console.log(sortByFoo([ {
	foo : 42
}, {
	bar : 7
}, {
	foo : -5
} ])[1].bar === 7);
