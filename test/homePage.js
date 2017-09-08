var assert = require('assert');
let expect = require('chai').expect;

describe('webdriver.io page', function() {
	
	describe.only('TEST DESCRIBE 1',function(){
		
		beforeEach(function(){
			browser.url('/');
		});
		
		it('Autorization', function(){
			var login = $("[name='loginName'] div input")
			var pass = $("[name='loginPass'] div input")
			
			login.setValue('ia.gavrichenko')
			pass.setValue('ia.gavrichenko123')
			browser.click('.loginForm__sendButton')
		});
	});
	
	
});

