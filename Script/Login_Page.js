function Login_Page(url, username, password) {
  
    // Open the specified URL in a running instance of the Chrome browser.
    Browsers.Item(btChrome).Navigate(url);
    Log.Message("Navigated to URL: " + url);

    // Maximize the browser window for better visibility.
    Aliases.browser.BrowserWindow.Maximize();
    Log.Message("Maximized the browser window.");

    // Set the provided username in the username input field.
    Aliases.browser.pageLogon.loginForm.userNameBox.SetText(username);
    Log.Message("Entered username: " + username);

    // Set the provided password in the password input field.
    Aliases.browser.pageLogon.loginForm.passwordBox.SetText(password);
    Log.Message("Entered password:" + password);

    // Click the 'Sign In' button to initiate login.
    Aliases.browser.pageLogon.loginForm.signInButton.ClickButton();
    Log.Message("Verified that the user is able to login with the valid CP2credentials.");

    var menuButton = Aliases.browser.pageLogon.homePage.menuButton;

    if (menuButton.Exists) {
        menuButton.Click();
        Log.Message("Verified that Menu button is visible on the screen.");
    } else {
        Log.Message("Menu button is not visible. Refreshing the page and clicking on the button.");

        // Refresh the page.
        Aliases.browser.BrowserWindow.Click(123, 80);
        Aliases.browser.pageLogon.confirmResubmission.continueButton.ClickButton();
        Delay(3000);
        aqObject.CheckProperty(Aliases.browser.pageLogon.homePage.menuButton, "contentText", cmpEqual, "");
        Log.Message("Verified that after login to the application user redirect to the Home screen");
    }
}

function Test2() {
    // Reset the dataset to the beginning.
    Project.Variables.Var1.Reset();

    // Loop through the dataset until the end of the data.
    while (!Project.Variables.Var1.IsEOF()) {
      
        // Retrieve data for the current iteration.
        var currentURL = Project.Variables.Var1.Value("URL");
        var currentUsername = Project.Variables.Var1.Value("Username");
        var currentPassword = Project.Variables.Var1.Value("Password");

        // Perform login using the current set of credentials.
        Login_Page(currentURL, currentUsername, currentPassword);

        // Move to the next set of credentials in the dataset.
        Project.Variables.Var1.Next();
    }
}
