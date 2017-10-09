// // function countAPI(calls) {

// // }



// // var calls = [
// //         "/project1/subproject1/method1",
// //         "/project2/subproject1/method1",
// //         "/project1/subproject1/method1",
// //         "/project1/subproject2/method1",
// //         "/project1/subproject1/method2",
// //         "/project1/subproject2/method1",
// //         "/project2/subproject1/method1",
// //         "/project1/subproject2/method1"
// // ]

// function countAPI(calls) {

// 	var splIt = [];
// 	var counterProject1 = 0;
// 	var counterProject2 = 0;
// 	var counterSubproject1 = 0;
// 	var counterSubproject2 = 0;
// 	var counterMethod1 = 0;
// 	var counterMethod2 = 0;

// 	for (i = 0; i < calls.length; i++) {
// 		splIt.push(calls[i].split("/"));
// 	}

// 	for (j = 0; j < splIt.length; j++) {
// 		for (n = 0; n < splIt[j].length; n++) {
// 			if (splIt[j][n] === "project1") {
// 				counterProject1++;
// 			}
// 			else if (splIt[j][n] === "project2") {
// 				counterProject2++;
// 			}
// 			else if (splIt[j][n] === "subproject1") {
// 				counterSubproject1++;
// 			}
// 			else if (splIt[j][n] === "subproject2") {
// 				counterSubproject2++;
// 			}
// 			else if (splIt[j][n] === "method1") {
// 				counterMethod1++;
// 			}
// 			else if (splIt[j][n] === "method2") {
// 				counterMethod2++;
// 			}
// 			else {
// 				var nista = 0;
// 			}
// 		}			
// 	}
// 	return ["--project1 " + "\(" + counterProject1 + "\)", + "----subproject1 " + "\(" + counterSubproject1 + "\)", + "------method1 " + "\(" + counterMethod1 + "\)", + "------method2 " + "\(" + counterMethod2 + "\)", + "--subproject2 " + "\(" + counterSubroject2 + "\)""--method1 " + "\(" + counterProject1 + "\)" ];
// }

// console.log(countAPI([
//         "/project1/subproject1/method1",
//         "/project2/subproject1/method1",
//         "/project1/subproject1/method1",
//         "/project1/subproject2/method1",
//         "/project1/subproject1/method2",
//         "/project1/subproject2/method1",
//         "/project2/subproject1/method1",
//         "/project1/subproject2/method1"
// ]));


// // 0: […]
// // 0: ""
// // 1: "project1"
// // 2: "subproject1"
// // 3: "method1"
// // length: 4

// ----------------------------------------------------
// SKOLA KODA

// // 1. ZADATAK, NADJI DATO IME U NIZU
// function ime (nizKorisnika) {
// 	var trazeniKorisnik = "Ivan";

// 	for (i = 0; i < nizKorisnika.length; i++) {
		
// 		if (nizKorisnika[i] === trazeniKorisnik) {

// 			var nadjen = 1;
// 		}
// 	}
// 	if (nadjen === 1) {
// 		return true;
// 	}
// 	return false;
// }

// console.log(ime(["Predrag", "Jovan", "Goran"]));

// -----  ------  ------

// 2. ZADATAK, KOLIKO PUTA SE PONAVLJA IME 

// --------- -------- ------

// 3. ZADATAK, dva najmanja broja u nizu
// function ajdeBre(niz) {

// var drugiMin = [0];
// var prviMin = 0;

// for (i = 0, n = i+1; i < niz.length; i++) {
	
// 	if (niz[i] < niz[n]) {
// 		if (drugiMin[drugiMin.length-1] !== niz[i]) {
// 			drugiMin.push(niz[i])
// 		}
		
// 		niz[n] = niz[i];
		
// 	}
// }
//    // return [drugiMin[drugiMin.length-1], drugiMin[drugiMin.length-2]];
//    return prviMin;
// }

// console.log(ajdeBre([4, 7, 10, 3, 40, 55, 2, 55, 1]));

// var niz = [7, 222, 4, 1, 2, 3, 5, 55, 6];
// // var count = Math.max.apply(null, niz) + 1;
// // var proba = [];

// // for (i = 0; i < niz.length; i++) {
// // 	if (niz[i] < count) {
// // 		count = niz[i];
// // 		proba.push(niz[i]);
// // 	}
// // }

// // console.log(proba);
// var najmanji = 0;
// // var drugiNajmanji = Math.max.apply(null, niz) + 1;
// var drugiNajmanji = 0;

// if (niz[0] < niz[1]) {
// 	najmanji = niz[0];
// 	drugiNajmanji = niz[1];
// }
// else {
// 	najmanji = niz[1];
// 	drugiNajmanji = niz[0];
// }
// for (i = 2; i < niz.length; i++) {
// 	if (niz[i] < najmanji) {
// 		drugiNajmanji = najmanji;
// 		najmanji = niz[i];
// 	}
// 	else if (niz[i] < drugiNajmanji) {
// 		drugiNajmanji = niz[i];
// 	}
// }
// // 	if (drugiNajmanji > najmanji && drugiNajmanji > niz[i] && najmanji < niz[i] && najmanji !== niz[niz.length - 1]) {
// // 	drugiNajmanji = niz[i];
// // 	}
	
// // }
// // // ako je najmanji poslednji, a drugi najmanji prvi
// // if (najmanji === niz[niz.length - 1] && drugiNajmanji > niz[0]) {
// // 	drugiNajmanji = niz[0];
// // }
// // if (drugiNajmanji > niz[0] && najmanji !== niz[0]) {
// // 	drugiNajmanji = niz[0];
// // }
// console.log(najmanji);
// console.log(drugiNajmanji);

// OBJEKTI

var telefon = {
	vrsta: "mobilni",
	brend: "Nokia",
	punjac: "punjac off",
	baterija: 1000,
	display: 5.5,
	zvono: 0,
	mikrofon: "mikrofon off",
	zvucnik: "zvucnik off",

	punjenje() {
		if (telefon.baterija <= 1500) {
			punjac = "punjac on";
		}
		else {
			punjac = "punjac off";
		}
		console.log(punjac);
	},

	odgovor() {
		if (telefon.zvono === 1) {
			mikrofon = "mikrofon on";
			zvucnik = "zvucnik on";
		}
		else {	
			mikrofon = "mikrofon off";
			zvucnik = "zvucnik off";
	    }
		console.log(mikrofon, zvucnik);
	}
};

telefon.punjenje();

// telefon.odgovor();














