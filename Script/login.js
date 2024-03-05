//var JsonReader = require("JsonReader");
//var webElementWaits = require("WebElementWaits");
//
//function doLogin() {
//  
//    var jsonFilePath = "TestData\\Data.json";
//    var jsonData = JsonReader.readJsonFile(jsonFilePath);
//    var jsonUrl = jsonData.url;
//    var username = jsonData.username;
//    var password = jsonData.password;
//    
//    Browsers.Item(btChrome).Navigate(jsonUrl);
//    Log.Message("Navigated to URL: " + jsonUrl);    
//    Aliases.browser.pageLogon.Wait();
//    Aliases.browser.BrowserWindow.Maximize();
//    
//    Aliases.browser.pageLogon.loginForm.userNameBox.SetText(username);
//    Log.Message("Entered username: " + username);
//    Aliases.browser.pageLogon.loginForm.passwordBox.SetText(password);
//    Log.Message("Entered password:" + password);
//    
//    webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.loginForm.signInButton).ClickButton();
//    Log.Message("Verified that the user is able to login with the valid credentials.");
//
//     Wait for the menu button to become visible
//    var menuButton = Aliases.browser.pageLogon.homePage.menuButton;
//    if (menuButton.Exists) {
//        menuButton.Click();
//        Log.Message("Verified that Menu button is visible on the screen.");
//    } else {
//        Log.Message("Menu button is not visible. Refreshing the page and clicking on the button.");
//        
//   Aliases.browser.pageLogon.Keys("[F5]");
//   
//   webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.confirmResubmission.continueButton).Click();
//
//   aqObject.CheckProperty(Aliases.browser.pageLogon.homePage.menuButton, "contentText", cmpEqual, "");
//   Log.Message("Verified that after login to the application user redirects to the Home screen");
//    }
//}
//
//module.exports.doLogin = doLogin;
module.exports.Login = Login;


var webElementWaits = require("WebElementWaits");
 
const selector = {
  inputs: {
    userName: "input[id*='USERNAME_FIELD']",
    password: "input[id*='PASSWORD_FIELD']"
  },
  buttons:{
    signIn: "#LOGIN_LINK"
  },
  labels: {
    homeTitle: "#__title0-inner",
  }
}  
 
 
function doLogin(username, password)
{
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime"); 
  Aliases.browser.BrowserWindow.Maximize(); 
  const Browser = Aliases.browser.Page("*") 
  webElementWaits.waitForElementVisible(Browser.FindElement(selector.inputs.userName)).SetText(username); 
// Browser.FindElement(selector.inputs.userName).SetText(username); 
  Browser.FindElement(selector.inputs.password).SetText(password); 
   Browser.FindElement(selector.buttons.signIn).ClickButton(); 
   Aliases.browser.pageLogon.Wait(); 
   Sys.Keys("^t"); 
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime"); 
//   let title = Browser.FindElement(selector.labels.homeTitle);
//   s
//   aqObject.CheckProperty(title, "Exists", cmpEqual, true);
}
module.exports.doLogin = doLogin;