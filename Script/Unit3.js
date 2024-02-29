function wait() {
  var container = Aliases.browser.pageLogon.leadContainer;

  // Click the first button
  container.sectionDetail2Cont.buttonGetPrice.ClickButton();

  // Wait for the page to fully load
  Aliases.browser.pageLogon.leadContainer.WaitProperty("contentDocument.readyState", "complete");

  // Click the second button after the page is loaded
  container.buttonActions.ClickButton();
}
