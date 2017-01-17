
//all this information has been taken from http://letterfrequency.org/ (no permission asked but crediting here and information in general public domain?)

///////////////////////////////////////////////////////////////
//		LETTER FREQUENCIES
///////////////////////////////////////////////////////////////

////	array position number == frequency ranking
// e.g. position 0 = most common

///*no further specific information on what religions covered by this?
///**no further information on what corpus this was taken from?

/////////////////	 ENGLISH 		///////////////////////////////////
/*

//Oxford Dictionary
exports.most_common_letter_oxford = [];

//Press Reporting
exports.most_common_letter_reporting = [];

//Religious Writings*
exports.most_common_letter_religious = [];

//Scientific Writings
exports.most_common_letter_scientific = [];

//General Fiction**
exports.most_common_letter_general_fiction = [];

//(English) Word Averages**
exports.most_common_letter_word_average = [];

//(English) Morse Code**
exports.most_common_letter_morse_english = [];

//English Wikipedia
exports.most_common_letter_wikipedia_english = [];

//Non-Plural Word Letter (18584 Common Base Words)
exports.most_common_letter_nonplural_word = [];

//Plural Word Letter (45406 Common Base Words)
exports.most_common_letter_plural_word  = [];

//Most Common 1st Letter in Words
exports.most_common_letter_1stletter_english = [];

//Most Common 2nd Letter in Words
exports.most_common_letter_2ndletter_english = [];

//Most Common 3rd Letter in Words
exports.most_common_letter_3rdletter_english = [];

//Most Common Last Letter in Words
exports.most_common_letter_lastletter_english = [];

//Most Common Letter to Follow 'e' in Words
exports.most_common_letter_after_e_english = [];

*/

///////////// DIFFERENT LANGUAGES
// Need to find % frequencies for each
// Missing languages
// Pinyin etc...

//--> character shift tables??

//--> arrange languages alphabetically

//--> allow language selection within a given function??

//American English Language
var most_common_letter_american_english = ['e','t', 'a', 'o', 'i', 'n', 's', 'r', 'h', 'l', 'd', 'c', 'u', 'm', 'f', 'p', 'g', 'w', 'y', 'b', 'v', 'k', 'x', 'j', 'q', 'z'];

//British English Language
var most_common_letter_british_english = ["e", "t", "a", "o", "i", "n", "s", "r", "h", "l", "d", "c", "u", "m", "f", "p", "g", "w", "y", "b", "v", "k", "x", "j", "q", "z"];

//Spanish Language
var most_common_letter_spanish = ["e", "a", "o", "s", "r", "n", "i", "d", "l", "c", "t", "u", "m", "p", "b", "g", "y", "í", "v", "q", "ó", "h", "f", "z", "j", "é", "á", "ñ", "x", "ú", "ü", "w", "k"];

//German Language
var most_common_letter_german = ["e", "n", "i", "s", "r", "a", "t", "d", "h", "u", "l", "c", "g", "m", "o", "b", "w", "f", "k", "z", "v", "ü", "p", "ä", "ß", "j", "ö", "y", "q", "x"];

//French Language
var most_common_letter_french = ["e", "s", "a", "i", "t", "n", "r", "u", "l", "o", "d", "c", "m", "p", "é", "v", "q", "f", "b", "g", "h", "j", "à", "x", "è", "y", "ê", "z", "ç", "ô", "ù", "â", "û", "î", "œ", "w", "k", "ï", "ë", "ü", "æ", "ñ"];

//Italian Language
var most_common_letter_italian = ["e", "a", "i", "o", "n", "l", "r", "t", "s", "c", "d", "u", "p", "m", "v", "g", "h", "f", "b", "q", "z", "ò", "à", "ù", "ì", "é", "è", "ó", "y", "k", "w", "x", "j", "ô"];

//Dutch Language
var most_common_letter_dutch = ["e", "n", "a", "t", "i", "r", "o", "d", "s", "l", "g", "h", "v", "k", "m", "u", "b", "p", "w", "j", "c", "z", "f", "x", "y", "ë", "é", "ó", "q"];

//Greek Language
var most_common_letter_modern_greek = ["α", "ο", "ι", "ε", "τ", "σ", "ν", "η", "υ", "ρ", "π", "κ", "μ", "λ", "ω", "δ", "γ", "χ", "θ", "φ", "β", "ξ", "ζ", "ψ"];

//Russian Language
var most_common_letter_russian = ["o", "e", "a", "и", "н", "т", "с", "в", "л", "р", "к", "д", "м", "п", "у", "ë", "я", "г", "б", "з", "ч", "й", "х", "ж", "ш", "ю", "ц", "щ", "e", "ф", "ъ", "ы", "ь"];

//Turkish Language
var most_common_letter_turkish = ["a", "e", "i", "n", "r", "l", "ı", "d", "k", "m", "u", "y", "t", "s", "b", "o", "ü", "ş", "z", "g", "ç", "h", "ğ", "v", "c", "ö", "p", "f", "j", "w", "x", "q"];

//Polish Language
var most_common_letter_polish = ["i", "a", "e", "o", "z", "n", "s", "c", "r", "w", "y", "ł", "d", "k", "m", "t", "p", "u", "j", "l", "g", "ę", "b", "ą", "h", "ż", "ś", "ó", "ć", "ń", "f", "ź", "v", "q", "x"];

//Esperanto Language
var most_common_letter_esperanto = ["a", "i", "e", "o", "n", "l", "s", "r", "t", "k", "j", "u", "d", "m", "p", "v", "g", "f", "b", "c", "ĝ", "ĉ", "ŭ", "z", "ŝ", "h", "ĵ", "ĥ", "w", "y", "x", "q"];

//Swedish Language
var most_common_letter_swedish = ["e", "a", "n", "t", "r", "s", "l", "i", "d", "o", "m", "g", "k", "v", "ä", "h", "f", "u", "p", "å", "ö", "b", "c", "j", "y", "x", "w", "z", "é", "q", "à", "è"];

//Portuguese Language
var most_common_letter_portuguese = ["a", "e", "o", "s", "r", "i", "n", "m", "d", "u", "t", "l", "c", "p", "h", "v", "q", "g", "f", "b", "ã", "z", "ç", "j", "á", "é", "x", "ó", "õ", "ê", "ô", "à", "y", "í", "è", "ú", "o`", "k", "w"];

//Norwegian Language
var most_common_letter_norwegian = ["e", "r", "n", "t", "s", "i", "l", "a", "k", "o", "d", "g", "m", "v", "f", "u", "p", "b", "h", "ø", "j", "y", "aa", "æ", "c", "w", "z", "x", "q"];

//Icelandic Language
var most_common_letter_icelandic = ["a", "n", "r", "i", "e", "s", "t", "u", "dh", "l", "g", "m", "k", "f", "h", "v", "o", "á", "th", "í", "d", "j", "ó", "b", "y", "æ", "ú", "ö", "p", "é", "ý", "c", "x", "w", "z", "q"];

//Hungarian Language
var most_common_letter_hungarian = ["e", "a", "t", "l", "n", "s", "k", "o", "m", "z", "r", "i", "g", "á", "é", "y", "d", "b", "v", "h", "j", "o:", "f", "u", "p", "ö", "ó", "c", "u:", "í", "ú", "ü", "x", "w", "q"];

//Slovak Language
var most_common_letter_slovak = ["a", "o", "e", "s", "n", "i", "t", "r", "v", "l", "k", "d", "m", "c", "u", "p", "z", "y", "h", "j", "g", "f", "b", "q", "w", "x"];

//Finnish Language
var most_common_letter_finnish = ["e", "n", "a", "t", "r", "s", "i", "l", "d", "o", "k", "g", "m", "v", "f", "aa", "u", "p", "h", "ä", "c", "b", "ö", "j", "y", "x", "z", "w", "q"];

//Danish Language
var most_common_letter_danish = ["e", "n", "a", "d", "t", "r", "s", "l", "g", "i", "o", "h", "m", "k", "v", "u", "f", "b", "p", "ø", "ae", "j", "y", "c", "é", "x", "q", "w", "è", "z", "ü", "à", "ó", "ê", "ç", "aa", "ë", "ä"];

//Czech Language
var most_common_letter_czech = ["o", "e", "a", "n", "t", "i", "v", "l", "s", "r", "d", "k", "u", "p", "í", "m", "c", "h", "á", "z", "y", "j", "b", "ř", "ê", "é", "ĉ", "ž", "ý", "ŝ", "ũ", "g", "f", "ú", "ň", "w", "ď", "ó", "x", "ť", "q"];

//Hawaiian Language
var most_common_letter_hawaiian = ["a", "i", "k", "o'", "e", "n", "u", "h", "l", "m", "â", "p", "ô", "w", "ê", "û", "î", "b", "c", "d", "f", "g", "j", "q", "r", "s", "t", "v", "x", "y", "z"];

//Maori Language
var most_common_letter_maori = ["a", "i", "k", "e", "t", "o", "n", "u", "h", "r", "m", "w", "g", "p", "b", "c", "d", "f", "j", "l", "q", "s", "v", "x", "y", "z"];

//Latin Language
var most_common_letter_latin = ["e", "i", "t", "u", "a", "s", "r", "n", "o", "m", "c", "p", "l", "d", "q", "b", "g", "v", "f", "h", "x", "y", "k", "z", "j", "w"];

//Irish Language
var most_common_letter_irish = ["a", "i", "h", "n", "r", "e", "t", "s", "c", "o", "l", "d", "g", "u", "m", "b", "á", "f", "í", "é", "ú", "ó", "p", "v", "j", "w", "y", "k", "q", "z", "x"];

//Welsh Language
var most_common_letter_welsh = ["a", "y", "n", "d", "r", "e", "i", "l", "o", "g", "h", "w", "t", "f", "u", "s", "c", "m", "b", "p", "â", "ô", "y^", "w^", "j", "ï", "ê", "á", "q", "v", "î", "k", "x", "z"];

//Gaelic Language (unsure which one?)
var most_common_letter_gaelic = ["a", "i", "h", "n", "d", "e", "r", "c", "s", "g", "l", "o", "u", "t", "m", "b", "à", "f", "p", "o`", "ù", "é", "i`", "è", "ó", "j", "k", "q", "v", "w", "x", "y", "z"];

///////////////////////////////////////////////////////////////
//		NGRAMS
///////////////////////////////////////////////////////////////

//Digraph Frequency
var digraph_english = ["th", "he", "an", "in", "er", "on", "re", "ed", "nd", "ha", "at", "en", "es", "of", "nt", "ea", "ti", "to", "io", "le", "is", "ou", "ar", "as", "de", "rt", "ve"];

//Trigraph Frequency
var trigraph_english = ["the", "and", "tha", "ent", "ion", "tio", "for", "nde", "has", "nce", "tis", "oft", "men"];

//Double Letter Frequency
var doubleletter_english = ["ss", "ee", "tt", "ff", "ll", "mm", "oo"];

//Top Twenty Most Used Words in Written English
var mostcommonwords_english_written = ["the", "of", "to", "in", "and", "a", "for", "was", "is", "that", "on", "at", "he", "with", "by", "be", "it", "an", "as", "his"];

//Top Twenty Most Used Words in Spoken English
var mostcommonwords_english_spoken = ["the", "and", "I", "to", "of", "a", "you", "that", "in", "it", "is", "yes", "was", "this", "but", "on", "well", "he", "have", "for"];

//Two Letter Word Frequency
var mostcommonwords_english_2letters = ["of", "to", "in", "it", "is", "be", "as", "at", "so", "we", "he", "by", "or", "on", "do", "if", "me", "my", "up", "an", "go", "no", "us", "am"];

//Three Letter Word Frequency
var mostcommonwords_english_3letters = ["the", "and", "for", "are", "but", "not", "you", "all", "any", "can", "had", "her", "was", "one", "our", "out", "day", "get", "has", "him", "his", "how", "man", "new", "now", "old", "see", "two", "way", "who", "boy", "did", "its", "let", "put", "say", "she", "too", "use"];

//Four Letter Word Frequency
var mostcommonwords_english_4letters = ["that", "with", "have", "this", "will", "your", "from", "they", "know", "want", "been", "good", "much", "some", "time", "very", "when", "come", "here", "just", "like", "long", "make", "many", "more", "only", "over", "such", "take", "than", "them", "well", "were"];

//Most Common Words in Frequency Order
var mostcommonwords_english = ["the", "of", "and", "to", "in", "a", "is", "that", "be", "it", "by", "are", "for", "was", "as", "he", "with", "on", "his", "at", "which", "but", "from", "has", "this", "will", "one", "have", "not", "were", "or", "all", "their", "an", "i", "there", "been", "many", "more", "so", "when", "had", "may", "today", "who", "would", "time", "we", "about", "after", "dollars", "if", "my", "other", "some", "them", "being", "its", "no", "only", "over", "very", "you", "into", "most", "than", "they", "day", "even", "made", "out", "first", "great", "must", "these", "can", "days", "every", "found", "general", "her", "here", "last", "new", "now", "people", "public", "said", "since", "still", "such", "through", "under", "up", "war", "well", "where", "while", "years", "before", "between", "country", "debts", "good", "him", "interest", "large", "like", "make", "our", "take", "upon", "what"];

exports.mostcommonwords_english1 = function() {
	return mostcommonwords_english;
};
/*
//50 Most Frequently Used UK Operators
exports.mostcommonwords_british_english_operators = [come get give go keep let make put seem take be do have say see send may will about across after against among at before between by down from in off on over through to under up with as for of till than a the all any every no other some such that this I he you who and because but or if through while how when where why again ever far forward hear near now out still there then together well almost enough even little much not only quite so very tomorrow yesterday north south east west please yes];

//50 Most Frequently Used UK General Things in Alphabetical Order
exports.mostcommonwords_british_english_nouns = [account act addition adjustment advertisement agreement air amount amusement animal answer apparatus approval argument art attack attempt attention attraction authority back balance base behavior belief birth bit bite blood blow body brass bread breath brother building burn burst business butter canvas care cause chalk chance change cloth coal color comfort committee company comparison competition condition connection control cook copper copy cork cotton cough country cover crack credit crime crush cry current curve damage danger daughter day death debt decision degree design desire destruction detail development digestion direction discovery discussion disease disgust distance distribution division doubt drink driving dust earth edge education effect end error event example exchange existence expansion experience expert fact fall family father fear feeling fiction field fight fire flame flight flower fold food force form friend front fruit glass gold government grain grass grip group growth guide harbor harmony hate hearing heat help history hole hope hour humor ice idea impulse increase industry ink insect instrument insurance interest invention iron jelly join journey judge jump kick kiss knowledge land language laugh law lead learning leather letter level lift light limit linen liquid list look loss love machine man manager mark market mass meal measure meat meeting memory metal middle milk mind mine minute mist money month morning mother motion mountain move music name nation need news night noise note number observation offer oil operation opinion order organization ornament owner page pain paint paper part paste payment peace person place plant play pleasure poison point polish porter position powder power price print process produce profit property prose protest pull punishment purpose push quality question rain range rate ray reaction reading reason record regret relation religion representative request respect rest reward rhythm rice river road roll room rub rule run salt sand scale science sea seat secretary selection self sense servant sex shade shake shame shock side sign silk silver sister size sky sleep slip slope smash smell smile smoke sneeze snow soap society son song sort sound soup space stage start statement steam steel step stitch stone stop story stretch structure substance sugar suggestion summer support surprise swim system talk taste tax teaching tendency test theory thing thought thunder time tin top touch trade transport trick trouble turn twist unit use value verse vessel view voice walk war wash waste water wave wax way weather week weight wind wine winter woman wood wool word work wound writing year];

//100 Most Frequently Used Words in Alphabetical Order
exports.mostcommonwords_english2 = [about after all am an and are as at back be because been big but by came can come could day did do down first for from get go going got had has have he her here him his I if in into is it just like little look made make me more my no not now of off on one only or our out over said saw see she so some that the their them then there they this to two up very was we well went were what when where which who will with would you your];

*/

//% Frequency in English 
//according to http://practicalcryptography.com/cryptanalysis/letter-frequencies-various-languages/english-letter-frequencies/ 

//temporarily - will expand to select between jsons and arrays...
exports.english_letter_freq = function() {
	language_ngram_json = {};

	// letter arrays = "most_common_letter_"+language;
	language_ngram_json.ngram_array = most_common_letter_british_english;

	language_ngram_json.ngram_frequencies = letter_freq_english;

	return language_ngram_json;
};

//
var common_word_freq_british = { 
	"THE" : 6.42,
	"OF" : 2.76,
	"AND" : 2.75,
	"TO" :  2.67,
	"A" :  2.43,
	"IN" :  2.31, 
	"IS" :  1.12,
	"FOR" :  1.01, 
	"THAT" :  0.92,
	"WAS" :  0.88,
	"ON" :  0.78,
	"WITH" :  0.75,
	"HE" : 0.75,
	"IT" :  0.74,
	"AS" :  0.71,
	"AT" :  0.58,
	"HIS" :  0.55,
	"BY" : 0.51,
	"BE" :  0.48,
	"FROM" :  0.47,
	"ARE" : 0.47,
	"THIS" :  0.42,
	"I" : 0.41,
	"BUT" :  0.40,
	"HAVE" : 0.39,
	"AN" :  0.37,
	"HAS" :  0.35,
	"NOT" :  0.34,
	"THEY" :  0.33,
	"OR" :  0.30
};

//% Frequency of letters of Latin Alphabet (Uppercase) for English Language
var letter_freq_english = { 
	"A":  8.55,
	"B":  1.60,
	"C":  3.16,
	"D":  3.87,
	"E": 12.10, 
	"F":  2.18,
	"G":  2.09, 
	"H":  4.96,
	"I":  7.33,
	"J":  0.22,
	"K":  0.81,
	"L":  4.21,
	"M":  2.53,
	"N":  7.17,
	"O":  7.47,
	"P":  2.07,
	"Q":  0.10,
	"R":  6.33,
	"S":  6.73,
	"T":  8.94,
	"U":  2.68,
	"V":  1.06,
	"W":  1.83,
	"X":  0.19,
	"Y":  1.72, 
	"Z":  0.11 
};

//% frequency of bigrams of Latin Alphabet (Uppercase)
var bigram_freq_english = { 
	"TH":  2.71,
	"HE":  2.33,
	"IN":  2.03,
	"ER":  1.78,
	"AN":  1.61,
	"RE":  1.41,
	"ES":  1.32,
	"ON":  1.32,
	"ST":  1.25,
	"NT":  1.17,
	"EN":  1.13,
	"AT":  1.12,
	"ED":  1.08,
	"ND":  1.07,
	"TO":  1.07,
	"OR":  1.06,
	"EA":  1.00,
	"TI":  0.99,
	"AR":  0.98,
	"TE":  0.98,
	"NG":  0.89,
	"AL":  0.88,
	"IT":  0.88,
	"AS":  0.87,
	"IS":  0.86,
	"HA":  0.83,
	"ET":  0.76,
	"SE":  0.73,
	"OU":  0.72,
	"OF":  0.71 
};

//
var trigram_freq_english = { 
	"THE":  1.81,
	"AND":  0.73,
	"ING":  0.72,
	"ENT":  0.42,
	"ION":  0.42,
	"HER":  0.36,
	"FOR":  0.34,
	"THA":  0.33,
	"NTH":  0.33,
	"INT":  0.32,
	"ERE":  0.31,
	"TIO":  0.31,
	"TER":  0.30,
	"EST":  0.28,
	"ERS":  0.28,
	"ATI":  0.26,
	"HAT":  0.26,
	"ATE":  0.25,
	"ALL":  0.25,
	"ETH":  0.24,
	"HES":  0.24,
	"VER":  0.24,
	"HIS":  0.24,
	"OFT":  0.22,
	"ITH":  0.21,
	"FTH":  0.21,
	"STH":  0.21,
	"OTH":  0.21,
	"RES":  0.21,
	"ONT":  0.20 
};

//
//var quadgram_freq_english = { ["TION",  0.31],["NTHE",  0.27],["THER",  0.24],["THAT",  0.21],["OFTH",  0.19],["FTHE",  0.19],["THES",  0.18],["WITH",  0.18],["INTH",  0.17],["ATIO",  0.17],["OTHE",  0.16],["TTHE",  0.16],["DTHE",  0.15],["INGT",  0.15],["ETHE",  0.15],["SAND",  0.14],["STHE",  0.14],["HERE",  0.13],["THEC",  0.13],["MENT",  0.12],["THEM",  0.12],["RTHE",  0.12],["THEP",  0.11],["FROM",  0.10],["THIS",  0.10],["TING",  0.10],["THEI",  0.10],["NGTH",  0.10],["IONS",  0.10],["ANDT",  0.10] };

//
var quintgram_freq_english = { 
	"OFTHE":  0.18,
	"ATION":  0.17,
	"INTHE":  0.16,
	"THERE":  0.09,
	"INGTH":  0.09,
	"TOTHE":  0.08,
	"NGTHE":  0.08,
	"OTHER":  0.07,
	"ATTHE":  0.07,
	"TIONS":  0.07,
	"ANDTH":  0.07,
	"NDTHE":  0.07,
	"ONTHE":  0.07,
	"EDTHE":  0.06,
	"THEIR":  0.06,
	"TIONA":  0.06,
	"ORTHE":  0.06,
	"FORTH":  0.06,
	"INGTO":  0.06,
	"THECO":  0.05,
	"CTION":  0.05,
	"WHICH":  0.05,
	"THESE":  0.05,
	"AFTER":  0.05,
	"EOFTH":  0.05,
	"ABOUT":  0.04,
	"ERTHE":  0.04,
	"IONAL":  0.04,
	"FIRST":  0.04,
	"WOULD":  0.04 
};


