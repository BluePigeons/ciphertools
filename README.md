# ciphertools
Experimenting with processing traditional and maybe some modern cipher tools in Javascript, mainly for solving problems like the annual British Mensa CipherSIG Christmas challenge


//////total possible combinations = 
//// 26 X start, 1st
//// each start has 26 X (2nd, 3rd... set_no)

//// possible combinations per set_no_layer = alphabet_length ^(set_no) 
//// e.g. combinations = set no 1 = 26, 2 = 26 + 26^2, 3 = 26 + 26^2 + 26^3 ....

//// total possible combinations = sum of [n=1 to n=set_no] (alphabet_length^n)

/// geometric series ---> finite sum of [n=0 to n=max] (a^k) = (1 - a^(max + 1))/(1 - a)
//
//// total possible combinations per set_no = (1-(alphabet_length^(set_no + 1)))/(1-alphabet_length) - 1

//// --> total possible combinations = sum of [n=1 to n=maximum_set_no] (total possible combinations per set_no)

///////////////////////////////////////////
// maximum set_no??
/////the total length of deciphered text
///////////////////////////////////////////

// number of combinations = 
/////	- maximum_set_no 
/////	+ (1/(1-alphabet_length)) * sum of [set_no=1 to set_no=maximum_set_no] (1-(alphabet_length^(set_no + 1))) )

// number of combinations = 
/////	- maximum_set_no 
/////	+ (1/(1-alphabet_length)) * ( (1 * maximum_set_no) - sum of [set_no=1 to set_no=maximum_set_no] (alphabet_length^(set_no + 1)) )

// number of combinations = 
/////	- maximum_set_no 
/////	+ (1/(1-alphabet_length)) * ( (1 * maximum_set_no) - sum of [n=2 to n=maximum_set_no+1] (alphabet_length^n )

// number of combinations = 
/////	- maximum_set_no 
/////	+ maximum_set_no/(1-alphabet_length)
/////	- (1/(1-alphabet_length)) * (( ( 1 - alphabet_length^(maximum_set_no+2) ) / (1 - alphabet_length) ) ) - (1 + alphabet_length) )

///////////////////////////////////////////////////////////////////////////////////////
// number of combinations = 
/////	- maximum_set_no 
/////	+ (1 + alphabet_length + maximum_set_no)/(1-alphabet_length)
/////	- ( ( 1 - alphabet_length^(maximum_set_no+2) ) / (1 - alphabet_length)^2 ) ) 
/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//////	Vigniere - for latin alphabet lowercase 	///////
///////////////////////////////////////////////////////////

//lowercase latin alphabet
////--> alphabet_length = 26

//asssume
////--> maximum_set_no = 26

////[set_no (1-26) [first_no (1-26) [second_no (1-26) [third_no..... ]]]]

// number of possible combinations	= -26 + (1 + 26 + 26)/(1 - 26) - (1 - (26^(26+2)))/((1 - 26)^2)
//									= -26 + (53/-25) - ((1 - 26^28)/625)
//									= 

