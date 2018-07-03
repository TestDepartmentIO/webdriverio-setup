describe('Search Tests', () => {
    it('chai js', () => {
        browser.url('/');
        browser.element('#lst-ib').setValue('chai js');
        browser.element('input[value="Google Search"]').click();
        browser.pause(10000);
    });
});
