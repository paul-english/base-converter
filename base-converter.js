Session.set('number', 142);

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

if (Meteor.is_client) {
    Template.calculator.two_forty_eight_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	var on = bits[len - 12] === "1";
	return on;
    };
    Template.calculator.ten_twenty_four_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	var on = bits[len - 11] === "1";
	return on;
    };
    Template.calculator.five_twelve_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	var on = bits[len - 10] === "1";
	return on;
    };
    Template.calculator.two_fifty_six_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	var on = bits[len - 9] === "1";
	return on;
    };
    Template.calculator.one_hundred_twenty_eight_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	var on = bits[len - 8] === "1";
	return on;
    };
    Template.calculator.sixty_four_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	return bits[len - 7] === "1";
    };
    Template.calculator.thirty_two_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	return bits[len - 6] === "1";
    };
    Template.calculator.sixteen_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	return bits[len - 5] === "1";
    };
    Template.calculator.eight_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	return bits[len - 4] === "1";
    };
    Template.calculator.four_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	return bits[len - 3] === "1";
    };
    Template.calculator.two_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	return bits[len - 2] === "1";
    };
    Template.calculator.one_bit = function () {
	var binary_number = Session.get('number').toString(2);
	var bits = binary_number.split("");
	var len = bits.length;
	return bits[len - 1] === "1";
    };
    Template.calculator.binary_number = function () {
	return pad(Session.get('number').toString(2), 12);
    };
    Template.calculator.octal_number = function () {
	return Session.get('number').toString(8);
    };
    Template.calculator.decimal_number = function () {
	return Session.get('number').toString(10);
    };
    Template.calculator.hex_number = function () {
	return Session.get('number').toString(16);
    };
    Template.calculator.events = {
	'change input#binary': function(e) {
	    Session.set('number', parseInt(e.target.value, 2));
	},
	'change input#decimal' : function (e) {
	    Session.set('number', Number(e.target.value));
	},
	'change input[type=checkbox]' : function (e) {
	    var value = 0;
	    if ($('input#two_forty_eight').attr('checked')) value += 2048;
	    if ($('input#ten_twenty_four').attr('checked')) value += 1024;
	    if ($('input#five_twelve').attr('checked')) value += 512;
	    if ($('input#two_fifty_six').attr('checked')) value += 256;
	    if ($('input#one_twenty_eight').attr('checked')) value += 128;
	    if ($('input#sixty_four').attr('checked')) value += 64;
	    if ($('input#thirty_two').attr('checked')) value += 32;
	    if ($('input#sixteen').attr('checked')) value += 16;
	    if ($('input#eight').attr('checked')) value += 8;
	    if ($('input#four').attr('checked')) value += 4;
	    if ($('input#two').attr('checked')) value += 2;
	    if ($('input#one').attr('checked')) value += 1;
	    Session.set('number', value);
	},
	'change input#hex': function(e) {
	    Session.set('number', parseInt(e.target.value, 16));
	}
    };
}

if (Meteor.is_server) {
    Meteor.startup(function () {
		   });
}