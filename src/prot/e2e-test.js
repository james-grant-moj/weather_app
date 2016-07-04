describe('Test suite for weather app', function() {
  it('should have page title Weather App', function() {
    browser.get('http://127.0.0.1:8080/#/');
    var EC = protractor.ExpectedConditions;
    // Waits for the title to be 'Weather App'.
    browser.wait(EC.titleIs('Weather App'), 5000);
  });
});