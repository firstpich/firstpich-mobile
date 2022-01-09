describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have step one shown', async () => {
    await waitFor(element(by.id('MyUniqueId123'))).toBeVisible().withTimeout(5000);
    await expect(element(by.id('MyUniqueId123'))).toBeVisible();
  });
});
