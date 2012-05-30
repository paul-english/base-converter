Session.set('number', 142);

if (Meteor.is_client) {
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
	return Session.get('number').toString(2);
    };
    Template.calculator.octal_number = function () {
	return Session.get('number').toString(8);
    };
    Template.calculator.decimal_number = function () {
	return Session.get('number').toString(10);
    };
    Template.calculator.hex_number = function () {
	return Session.get('number').toString(12);
    };
    Template.calculator.events = {
	'change input#decimal' : function (e) {
	    Session.set('number', Number(e.target.value));
	},
	'change input[type=checkbox]' : function (e) {
	    var value = 0;
	    if ($('input#one_twenty_eight').attr('checked')) value += 128;
	    if ($('input#sixty_four').attr('checked')) value += 64;
	    if ($('input#thirty_two').attr('checked')) value += 32;
	    if ($('input#sixteen').attr('checked')) value += 16;
	    if ($('input#eight').attr('checked')) value += 8;
	    if ($('input#four').attr('checked')) value += 4;
	    if ($('input#two').attr('checked')) value += 2;
	    if ($('input#one').attr('checked')) value += 1;
	    Session.set('number', value);
	}
    };
}

if (Meteor.is_server) {
    Meteor.startup(function () {
		   });
}