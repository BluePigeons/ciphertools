
/////////////////////////////////////////////////////////////////////////////////////////////////////
//		SETUP		//
/////////////////////////////////////////////////////////////////////////////////////////////////////

var languagefrequency = require('./languagefrequency.js');

var nlpCompromise = require('nlp_compromise');
var nlpNgram = require('nlp-ngram');
nlpCompromise.plugin(nlpNgram);
var naturalNode = require('natural');
//var wordnet = new naturalNode.WordNet();
var WordPOS = require('wordpos'),
    wordpos = new WordPOS();


/////////////////////////////////////////////////////////////////////////////////////////////////////
//		NATURAL LANGUAGE INFORMATION	//
/////////////////////////////////////////////////////////////////////////////////////////////////////

var latinalphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Frequency Analysis Data
var most_common_words = languagefrequency.mostcommonwords_english1();


/////////////////////////////////////////////////////////////////////////////////////////////////////
//	 	SPLITTING TEXT 		//
/////////////////////////////////////////////////////////////////////////////////////////////////////

exports.text_linearray = function(inputtext) {
	return inputtext.split('\n');
};

exports.text_wordarray = function(inputtext) {
	return inputtext.split(' ');
};

exports.text_characterarray = function(inputtext) {
	return inputtext.split('');
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
//		SUBSTITUTION FUNCTIONS		//
/////////////////////////////////////////////////////////////////////////////////////////////////////

var shiftedcipher = function(shift_number, alphabet_array) {
	var newarray = [];
	for (var i=0; i<alphabet_array.length; i++) {
		var shiftedplace = i + shift_number;
		if (shiftedplace > (alphabet_array.length - 1) ) {
			var diff_length = shiftedplace - alphabet_array.length;
			newarray.push(alphabet_array[diff_length]);
		}
		else if (shiftedplace < 0) {
			var diff_length = alphabet_array.length + shiftedplace;
			newarray.push(alphabet_array[diff_length]);
		}
		else {
			newarray.push(alphabet_array[shiftedplace]);
		};
	};
	if (newarray.length == alphabet_array.length) {
		//console.log("for number "+shift_number+" array is "+newarray);
		return newarray;
	};
};

exports.shiftedlatinalphabet = function() {
	var shiftedalphabetsarray = [];
	for (var i=0; i<latinalphabet_array.length; i++) { 
		var this_shiftedalphabetarray = shiftedcipher(i, latinalphabet_array);
		shiftedalphabetsarray.push(this_shiftedalphabetarray);
	};
	if (shiftedalphabetsarray.length == latinalphabet_array.length) {
		//console.log(shiftedalphabetsarray);
		return shiftedalphabetsarray;
	};
};

exports.translated_shifttext = function(shift_table, textarray, shift_alpha_number) {
	var shift_text = [];
	for (var i=0; i<textarray.length; i++) {
		for (var j=0; j<shift_table[0].length; j++){
			if (shift_table[0][j] == textarray[i]) {
				shift_text.push(shift_table[shift_alpha_number][j]);
				//console.log(shift_table[shift_alpha_number][j]);
			};
		};
	};
	//console.log(shift_text.join(''));
	return shift_text;

};

var expand_single_object_one_layer = function(initial_array, alphabet_length){

	//reset each foreach loop
	var newsubarray = [];
	var the_original_array = initial_array;

	for (var number=0; number<alphabet_length; number++) {

		//should be an array object, may or may not contain anything
		var newsubsubarray = the_original_array.concat([number]);
		
		//console.log("so for number "+number+" the original array of length "+the_original_array.length+" and type "+(typeof the_original_array)+" but newsubsubarray of "+newsubsubarray.length);

		//now array object also containing an extra number (length +1)
		if (newsubsubarray.length == (initial_array.length + 1)) {
			newsubarray.push(newsubsubarray);
		};

		//console.log("so the subarray is "+initial_array+" of length "+initial_array.length+" and the number to be added is "+number+" making newsub-sub-array of "+ newsubsubarray);
	};

	//when the newsubarray contains 26 arrays made of oldsubarray + each letter of alphabet
	if (newsubarray.length == alphabet_length) {
		//console.log("making the whole new sub array of "+newsubarray);
		return newsubarray;
	};

};


//generate all combinations of numbers 1 to alphabet_length in set_number of numbers
var generate_number_combination_patterns = function(set_number, alphabet_length) {
	var basicpatterns = [];
	var patterns_by_set = [];

	for (var start_no=0; start_no<alphabet_length; start_no++) {
		basicpatterns.push([start_no]);
		patterns_by_set.push(basicpatterns);

		if ((basicpatterns.length == alphabet_length)&&(set_number == 1)) {
			return patterns_by_set;
		}

		else if ((set_number>1)&&(basicpatterns.length == alphabet_length)&&(start_no == alphabet_length-1)) {

			//console.log("First 3 lines of original array is "+'\n'+basicpatterns[0]+'\n'+basicpatterns[1]+'\n'+basicpatterns[2]);
			//console.log("First 3 lines of first line original array is "+'\n'+basicpatterns[0][0]+'\n'+basicpatterns[0][1]+'\n'+basicpatterns[0][2]);

			for (var layer = 1; layer < set_number; layer++) {

				//layer 1 has already been done, so if set_number is 1 then loop should not run
				//if set_number is 2 then it adds the layer=1 which is actually the second layer

				//reset each for loop
				var newpatterns = [];

				console.log("the total length for "+(layer+1)+" is "+( Math.pow(alphabet_length, (layer+1)) ) );

				for (var subarray_no=0; subarray_no<basicpatterns.length; subarray_no++){
					var newsubarray = expand_single_object_one_layer(basicpatterns[subarray_no], alphabet_length);

					///need to add each newsubsubarray individually to newpatterns not nested in newsubarray
					newpatterns = newpatterns.concat(newsubarray);

				};


				//when newpatterns contains the newsubarrays corresponding to each of the original subarrays
				if (newpatterns.length == ( Math.pow(alphabet_length, (layer+1)) ) ) {

					basicpatterns = newpatterns;
					patterns_by_set.push(newpatterns);

					console.log("so the basicpatterns is now of length "+basicpatterns.length);

					if (layer == set_number - 1) {
						//console.log("First 3 lines of the final array of this round is: "+'\n'+newpatterns[0]+'\n'+newpatterns[1]+'\n'+newpatterns[2]);
						//console.log("First 3 lines of first line more specifically..."+'\n'+newpatterns[0][0]+'\n'+newpatterns[0][1]+'\n'+newpatterns[0][2]);
						//console.log("First 3 lines of first of first line being..."+'\n'+newpatterns[0][0][0]+'\n'+newpatterns[0][0][1]+'\n'+newpatterns[0][0][2]);
						return patterns_by_set;
					};
				};

			};

		};

	};

};

/*

For layer 1:

	basicpatterns & newpatterns = 

	[
		newsubarray = 

		[0],
		[1],
		[2],

		... X alphabet_length

	]

For layer 2:

	basicpatterns & newpatterns = 

	[
		newsubarray = 

		[
			newsubsubarray = 

			[0,0],
			[0,1],
			[0,2],
			... X alphabet_length
		],

		... X alphabet_length

	]

---> newsubarray = sum of (newsubsubarray)

---> newsubarray.length = alphabet_length^layer_number

the_number_combinations = 

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

exports.generate_number_combinations = function(alphabet_length, maximum_set_no){

	var the_number_combinations = generate_number_combination_patterns(maximum_set_no, alphabet_length);
	return the_number_combinations;

};

exports.fill_text_numbers = function(thepattern, text_length) {

	var set_number = thepattern.length;
	var newtextnumbers = [];
	var division_number = Math.floor(text_length/set_number);
	var modulo = text_length%set_number;

	//console.log("repeating the pattern of "+thepattern+" over "+(text_length/set_number)+" number of times");

	for (var i=0; i<=division_number; i++) {
		if (i==division_number) {
			for (var j=0; j<modulo; j++) {
				newtextnumbers.push(thepattern[j]);
				//console.log("now adding "+newtextnumbers);
			};
			if (newtextnumbers.length == text_length) {
				//console.log(newtextnumbers);
				return newtextnumbers;
			};
		}
		else {
			for (var x=0; x<set_number; x++) {
				newtextnumbers.push(thepattern[x]);
			};
			//console.log("now "+newtextnumbers+" of length "+newtextnumbers.length);
		};
	};	
};

exports.convert_numbers_to_text_arrays = function(the_number_combinations, alphabet_table){

	var the_converted_table = [];

	//console.log("there are "+alphabet_table.length+" number of alphabets starting with "+alphabet_table[0]+" and finishing with "+alphabet_table[25]);

	the_number_combinations.forEach(function(this_alphabet_number, index_no){
		//convert letters
		var this_letter = alphabet_table[this_alphabet_number][index_no];
		the_converted_table.push(this_letter);
	});

	if (the_converted_table.length == the_number_combinations.length) {
		//join array to string
		var new_text = the_converted_table.join('');
		return new_text;
	};

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var check_string_for_ngrams = function(the_string, ngram_array, minimum_length) {
	var contains_ngrams = [];
	for (var rank=0; rank<ngram_array.length; rank++){
		var the_ngram = ngram_array[rank];
		//need to allow for no minimum length specified?
		if ((the_string.includes(the_ngram))&&(the_ngram.length > minimum_length)){
			contains_ngrams.push(the_ngram);
		};
		if (rank == (ngram_array.length -1)){
			return contains_ngrams;
		};
	};
};

exports.identify_natural_language_words = function(text_table, keywords_array) {
	var might_be_deciphered1 = [];
	var might_be_deciphered2 = [];

	for (var set_number = 0; set_number < text_table.length; set_number++) {
		for (var combination_number = 0; combination_number < text_table[set_number].length; combination_number++) {
			
			var the_string = text_table[set_number][combination_number];
			//console.log(the_string);

			var common_words_in_string = check_string_for_ngrams(the_string, most_common_words, 1);
			if (common_words_in_string.length > 1) {
				///need to add if function for no keyword array
				might_be_deciphered1.push([the_string, set_number, combination_number]);
			};
			var contains_keywords = check_string_for_ngrams(the_string, keywords_array, 1);
			if (contains_keywords.length > 1){
				might_be_deciphered2.push({"string": the_string, "number of alphabets": set_number, "combination number": combination_number});
			};

			if ((set_number == (text_table.length -1))&&(combination_number == (text_table[set_number].length -1))) {
				console.log("finished word natural language common word analysis and found "+might_be_deciphered1.length+" common words solutions"+" and "+might_be_deciphered2.length+" keyword solutions!");
				return might_be_deciphered1;
			};
		};

	};
};

var frequency_analysis = function(the_string, ngram_size) {

	////add ngram_size as variable in function

	/// include both count and percent

	var ngram_json = {};
	var ngram_array = [];
	var ngram_frequencies = {};

    for (var position=0; position<the_string.length; position++) {
        var character = the_string.charAt(position);
        if (ngram_frequencies[character]) {
           ngram_frequencies[character]++;
        } else {
           ngram_frequencies[character] = 1;
           ngram_array.push(character);
        };
    };
    ////
    
    ngram_json.ngram_frequencies = ngram_frequencies;
    ngram_json.ngram_array = ngram_array;

    return ngram_json;
};

var compare_to_natural_language_frequencies = function(the_string, natural_language_freq_json, ngram_size) {

	var string_freq_json = frequency_analysis(the_string, ngram_size);
	var ngrams_in_string = string_freq_json.ngram_array;
	var number_of_characters = ngrams_in_string.length;

	var total_rating = 0;

	for (var rank = 0; rank < number_of_characters; rank++) {
		var this_ngram = ngrams_in_string[rank];

		//until incorporated into earlier function
		var string_ngram_percent = 100 * (string_freq_json.ngram_frequencies[this_ngram] / the_string.length);

		var average_ngram_percent = natural_language_freq_json.ngram_frequencies[this_ngram.toUpperCase()];

		///////****more official mathematical comparison to natural frequencies.....*****
		var character_weighting = 1 / number_of_characters;
		var pc_diff = Math.abs(string_ngram_percent - average_ngram_percent);
		var ngram_rank_diff = 1 - (pc_diff/100);
		total_rating += (character_weighting * ngram_rank_diff);

		if (rank == (number_of_characters -1)){
			//console.log("this string % is "+string_ngram_percent+" and average is "+average_ngram_percent+" and total is "+total_rating);
			return total_rating;
		};

	};

};

exports.array_sortby_natural_language_freq_comparison = function(text_table, natural_language) {
	///add different language options later...

	//add full sorting later...
	var top_options = [];
	var this_language = languagefrequency.english_letter_freq();

	for (var set_number = 0; set_number < text_table.length; set_number++) {
		for (var combination_number = 0; combination_number < text_table[set_number].length; combination_number++) {
			
			var this_string = text_table[set_number][combination_number];
			var this_ranking = compare_to_natural_language_frequencies(this_string, this_language);

			if (this_ranking > 0.95){
				//console.log("set "+set_number+" combination number "+combination_number+" "+this_string);
				
				top_options.push({"string": this_string, "number of alphabets": set_number, "combination number": combination_number});
			};

/////////////--> set 2, combination 104 contains some reasonable??
/*
set 2 
--> 3 alphabets
104 
--> starts with 4th alphabet
ihy nee srn hro naw evr nwo exs tmi ahl orw bis hrn rei w so lve exdtwkhaneptbimhmeassastlvarednrknmefhtowfssmglarionxanaiaskoqowslomdgpmssdarlwrowwitehtiesxirx

*/
			if ((set_number == (text_table.length -1))&&(combination_number == (text_table[set_number].length -1))) {
				console.log("finished word natural language letter frequency analysis and found "+top_options.length+" average frequency solutions!");
				return top_options;
			};
		};
	};

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var combinations_without_repeats = function(combinations_array){
	var the_combinations = combinations_array;
	for (var com_no=0; com_no < combinations_array.length; com_no++) {
		var this_combination = combinations_array[com_no];
		var no_repeats = 0;
		for (var char_no=0; char_no<this_combination.length; char_no++){
			var this_char = this_combination.charAt(char_no);
			//split string into 2 parts either side of character
			var before_sub = this_combination.substr(0, (this_char - 1));
			var after_sub = this_combination.substr( (this_char + 1), (this_combination.length - 1) );

			if ( ( before_sub.includes(this_char)) || ( after_sub.includes(this_char)) ) {
				no_repeats++
			};

			if (char_no == (this_combination.lenth - 1)) {
				return the_combinations;
			};
		};

		if (no_repeats > 0){
			//remove from the_combinations
			the_combinations.splice(com_no, 1);
			console.log("so the_combinations is now only "+the_combinations.length+" long but the original is "+combinations_array.length);
		};
	};
};

exports.text_rearrangement_combinations = function(the_string){

	var general_number_combinations_array = generate_number_combination_patterns(the_string.length, the_string.length);
	var general_number_combinations = general_number_combinations_array[(general_number_combinations_array.length - 1)];
	///remove combinations with repeated numbers
	var rearrangement_combinations = combinations_without_repeats(general_number_combinations);

	var variations = [];
	for (var option = 0; option < rearrangement_combinations.length; option++) {
		var this_combination = rearrangement_combinations[option];
		var this_array = [];

		for (var number = 0; number < this_combination.length; number++) {
			this_array.push(the_string.charAt(number));
		};

		if (this_array.length == this_combination.length) {
			var new_string = this_array.join('');
			console.log(new_string);
			variations.push(new_string);
		};

	};

	if (variations.length == rearrangement_combinations.length){
		console.log("this generates "+variations.length+" number of combinations.");
		return variations;
	};

};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var add_space_to_string = function(old_string){

	var split_string_array = "";
	var final_substring_split = (5*(Math.floor(old_string.length/5)));

	for (var spacing=0; spacing < old_string.length; spacing += 5){

		if (spacing == final_substring_split){

			var sub_string = old_string.substr(spacing, (old_string.length -1));
			var split_string = split_string_array + sub_string;
			//console.log(split_string);
			return split_string;
		}
		else {

			///////NOT SPLITTING CONSISTENTLY FIVE CONSECUTIVE CHARACTERS???			
			var sub_string = old_string.substr(spacing, (spacing+4));
			console.log("so sub_string is length "+sub_string.length+" between "+spacing+" to "+(spacing+4)+" of old_string length "+old_string.length);

			//console.log("the substring is from "+spacing+" to "+(spacing+4));
			split_string_array = split_string_array.concat(sub_string +" ");
		};
	};

};

var tokenise_nospace_strings = function(the_string) {

	//var tokenizer = new naturalNode.TreebankWordTokenizer();

	var split_string = add_space_to_string(the_string);

	//console.log(split_string);

	return split_string;

	/*
	var the_tokenized_string = tokenizer.tokenize(the_string);
	if (the_tokenized_string[0].length != the_string.length) {
		console.log(the_tokenized_string);
	};
	return the_tokenized_string;
	*/

			//var with_spaces = tokenise_nospace_strings(the_string);

			/*
			var possible_text = nlpCompromise.text(the_string);

			var possible_text_ngram = possible_text.ngram();
			var number_of_different_word_sizes = possible_text_ngram.length;
			var freq_word_one = possible_text_ngram[0].length;
			var freq_word_two = possible_text_ngram[1].length;
			
			if (freq_word_one > 1) {
				might_be_deciphered.push([the_string, set_number, combination_number]);
				console.log("might be: "+'\n'+the_string);
			};
			*/
	
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
