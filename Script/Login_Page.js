var JsonReader = require("JsonReader");

function Login_Page() {
  
    var jsonFilePath = "TestData\\Data.json";
    var jsonData = JsonReader.readJsonFile(jsonFilePath);
    var jsonUrl = jsonData.url;
    var username = jsonData.username;
    var password = jsonData.password;
    
    Browsers.Item(btChrome).Navigate(jsonUrl);
    Log.Message("Navigated to URL: " + jsonUrl);    
    Aliases.browser.pageLogon.Wait();
    Aliases.browser.BrowserWindow.Maximize();
    Aliases.browser.pageLogon.loginForm.userNameBox.SetText(username);
    Log.Message("Entered username: " + username);
    Aliases.browser.pageLogon.loginForm.passwordBox.SetText(password);
    Log.Message("Entered password:" + password);
    Aliases.browser.pageLogon.loginForm.signInButton.ClickButton();
    Log.Message("Verified that the user is able to login with the valid credentials.");

    // Wait for the menu button to become visible
    var menuButton = Aliases.browser.pageLogon.homePage.menuButton;
    
    if (menuButton.Exists) {
        menuButton.Click();
        Log.Message("Verified that Menu button is visible on the screen.");
    } else {
        Log.Message("Menu button is not visible. Refreshing the page and clicking on the button.");

   // Assuming you have an object representing your browser, like Browser("yourBrowserAlias")
 Aliases.browser.Refresh();

// Ensure the browser has focus


// Simulate pressing the F5 key to refresh the browser
//browser.Keys("[F5]");

       // Aliases.browser.BrowserWindow.Click(123, 80);
      

        Aliases.browser.pageLogon.confirmResubmission.continueButton.ClickButton();
        Delay(5000);

        
        aqObject.CheckProperty(Aliases.browser.pageLogon.homePage.menuButton, "contentText", cmpEqual, "");
        Log.Message("Verified that after login to the application user redirects to the Home screen");
    }
}
