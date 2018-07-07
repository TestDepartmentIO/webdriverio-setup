describe('Search Tests', () => {
    it('chai js', () => {
        browser.url('/');
        browser.element('#sb_form_q').setValue('chai js');
        browser.element('#sb_form_go').click();
        browser.pause(10000);
    });
});
