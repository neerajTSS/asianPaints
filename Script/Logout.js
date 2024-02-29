const selectors = {
  buttons:{
    userIcon: "span[aria-label='customer']",
    signOut: "//bdi[text()='Sign Out']",
    confirm: "//bdi[text()='Yes']"    
  },
}
 
function doLogOut()
{
  const Browser = Aliases.browser.Page("*");
  Browser.FindElement(selectors.buttons.userIcon).Click();
  Browser.FindElement(selectors.buttons.signOut).Click();
  aqObject.CheckProperty(Browser.FindElement(selectors.buttons.confirm), "Exists", cmpEqual, true);
  Browser.FindElement(selectors.buttons.confirm).Click();
  Aliases.browser.BrowserWindow.Close();
}
module.exports.doLogOut = doLogOut;