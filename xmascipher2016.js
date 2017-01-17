

//var StanfordSimpleNlp = require('stanford-simple-nlp');

var ciphertools = require('./ciphertools.js');

////////////////////////////////////////////////////////////////////////////////////////

var text = `id yna esnnh nonwwerrn soetst iiad lonw besh 
nnrai woolr eetd ts khwn eltbe mhie a osaot
lra rad nnknie fdto sf somghare on tanw
ia oko mowol oidglmsod anlw now
sitahtee
stirt`;

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

var shifttexttable = function(the_alphabets) {

/////////////////

	var the_table = [];
	for (var i=0; i<the_alphabets.length; i++) {
		the_table.push( ciphertools.translated_shifttext(the_alphabets, textarray, i) );

		//console.log("the table of length "+the_table.length+" and alphabet of length "+the_alphabets.length);
	};

//NOT RETURNING???

	if (the_table.length == the_alphabets.length) {
		//console.log("so it is returning "+the_table);
		return the_table;
	};

/////////////////////

};

var generate_text_numbers = function(pattern_table, maximum_set_number, text_length) {

	var total_text_number_array = [];

	for (var no_sets = 0; no_sets < maximum_set_number; no_sets++ ) {

		var text_numbers_set_arrays = [];
		var number_of_set_combinations = pattern_table[no_sets].length;

		for (var combination_no = 0; combination_no < number_of_set_combinations; combination_no++) {

			var this_combination_pattern = pattern_table[no_sets][combination_no];
			var text_number_pattern_array = ciphertools.fill_text_numbers(this_combination_pattern, text_length);
			text_numbers_set_arrays.push(text_number_pattern_array);

		};

		if (text_numbers_set_arrays.length == number_of_set_combinations) {
			total_text_number_array.push(text_numbers_set_arrays);
		};
	};

	if (total_text_number_array.length == maximum_set_number) {
		return total_text_number_array;
	};

};

var generate_texts = function(text_numbers_table, alphabet_table) {
	var converted_texts_array = [];
	for (var set=0; set<text_numbers_table.length; set++) {
		var converted_sets = [];
		for (var com = 0; com < text_numbers_table[set].length; com++) {
			var this_combination = text_numbers_table[set][com];
			//console.log("set number: "+set+" of length "+text_numbers_table[set].length+" and combination number: "+com);
			var converted_text = ciphertools.convert_numbers_to_text_arrays(this_combination, alphabet_table);
			converted_sets.push(converted_text);
		};
		if (converted_sets.length == text_numbers_table[set].length) {
			converted_texts_array.push(converted_sets);
		};
	};

	if (converted_texts_array.length == text_numbers_table.length) {
		return converted_texts_array;
	};
};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//1. all 26 possible shifted latin lowercase alphabet orders
var shift_table = ciphertools.shiftedlatinalphabet();

//		_________________________________________________
//	1.	| [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,....]	|
//	2.	| [b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,....]	|

//2. the text to be deciphered in array of characters
var textarray = ciphertools.text_characterarray(text);

// 	[i,d, ,y,n,a,e,s....]

//3. array of the text mapped to each 1 - 26 shifted latin lowercase alphabet translations
var the_text_in_numbers = shifttexttable(shift_table);
///////undefined??
//console.log("there are "+the_text_in_numbers.length+" translations");

//		_____________________________________
//	1.	| [textarray mapped to alphabet 1]	|
//	2.	| [textarray mapped to alphabet 2]	|

//4. generate combination of shifted alphabets
////a. number alphabets by row number in shift_table
////b. generate patterns of numbers:
////////i. choose number of alphabets in pattern (set_no)
////////ii. generate combinations of numbers 1 to 26 (for lowercase latin alphabet) for each

// e.g. [2,6,5] or [9,8,23,5,7,18]

var max_set_no = 3;
var alphabet_length = shift_table[0].length;

var table_of_patterns = ciphertools.generate_number_combinations(alphabet_length, max_set_no);

console.log("the pattern number arrays is of length "+table_of_patterns.length+" of lengths: "+'\n'+" set 1: "+table_of_patterns[0].length+'\n'+" set 2: "+table_of_patterns[1].length+'\n'+" set 3: "+table_of_patterns[2].length);

/*

table_of_patterns = 

[
	set_no_combinations & basicapatterns & newpatterns = 
	
	[
		newsubarray & combinations = 

		[0,0,1],
		[0,0,2],
		...

	],

	...

]

*/

//5. repeat the patterns for the length of the textarray
/////////var text_number_pattern_array = ciphertools.fill_text_numbers(thepattern, textarray.length);
// e.g. [2,6,5,2,6,5,2,6,5,2,6,5,2,6,5,2,6,5,6]

var table_of_text_numbers = generate_text_numbers(table_of_patterns, max_set_no, textarray.length);

//console.log("table of text length numbers starts with "+'\n'+table_of_text_numbers[1][0]+'\n'+table_of_text_numbers[1][1]+'\n'+table_of_text_numbers[1][2]);
//console.log("the text number arrays is of length "+table_of_text_numbers.length+" of lengths: "+'\n'+" set 1: "+table_of_text_numbers[0].length+'\n'+" set 2: "+table_of_text_numbers[1].length+'\n'+" set 3: "+table_of_text_numbers[2].length);

//6. generate new text arrays where:
//// --> the number in text_number_pattern_array = the row number in the_text_in_numbers
//// --> the position number (column number) in text_number_pattern_array

var table_of_converted_texts = generate_texts(table_of_text_numbers, the_text_in_numbers);

//console.log(table_of_converted_texts[2][104]);

/*
table_of_converted_texts = 
[
	set_table = 
	[
		"jsnfkjsfgnsd,kng,kfg",
		"qwhweuwgyehdjfhdkvkh",

		.... x number of combinations for set
	],

	.... x maximum number of sets
]

*/

//7. identify natural language texts

////a. identify each string as nlpCompromise.text(string)
////b. frequency analysis of text using n-grams

var possible_keywords = ["stephen", "colbourn", "mensa", "christmas", "xmas", "solve", "cipher", "year", "merry", "happy"];

var table_of_strings_by_common_words = ciphertools.identify_natural_language_words(table_of_converted_texts, possible_keywords);

var table_of_strings_by_freq = ciphertools.array_sortby_natural_language_freq_comparison(table_of_converted_texts, "british_english");

//8. rearrangement options too...

var basic_rearrangement = ciphertools.text_rearrangement_combinations(text);

