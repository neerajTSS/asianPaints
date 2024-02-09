function LoginPage(url, username, password) {
    // Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate(url);
    Log.Message("Verified URL: " + url);
 
    // Maximizes the browser window
    
    Sys.Browser().BrowserWindow(0).Maximize();
    Log.Message("Verified that the browser window is maximized.");
 
    // Clicks the 'textboxUsernameFieldInner' control.
    Aliases.browser.loginPage.formLoginForm.txtBoxUserName.Click();
    Log.Message("Verified clicking the username field.");
 
    // Sets the username
    Aliases.browser.loginPage.formLoginForm.txtBoxUserName.SetText(username);
    Log.Message("Verified setting the username: " + username);
 
    // Clicks the 'passwordboxPasswordFieldInner' control.
    Aliases.browser.loginPage.formLoginForm.txtBoxPassword.Click();
   Log.Message("Verified clicking the password field.");
 
    // Sets the password
    Aliases.browser.loginPage.formLoginForm.txtBoxPassword.SetText(password);
    Log.Message("Verified setting the password.");
 
    // Clicks the 'buttonLoginLink' button.
    Aliases.browser.loginPage.formLoginForm.btnSignIn.ClickButton();
    Log.Message("Verified clicking the login button.");
    
    aqUtils.Delay(2000);
  //click on back button

  browserWindow = Aliases.browser.BrowserWindow;
  browserWindow.Click(125, 87);
  
  Aliases.browser.loginPage.Confirm.buttonOk.ClickButton();
  Aliases.browser.BrowserWindow.Maximize();

}

function Test2(){

    Project.Variables.Var1.Reset();
 
    while (!Project.Variables.Var1.IsEOF()) {
        // Retrieve data for the current iteration
        var currentURL = Project.Variables.Var1.Value("URL");
        var currentUsername = Project.Variables.Var1.Value("Username");
        var currentPassword = Project.Variables.Var1.Value("Password");
 
        // Perform login using the current username and password
        LoginPage(currentURL, currentUsername, currentPassword);
 
        // Move to the next set of credentials
        Project.Variables.Var1.Next();

    }
}




