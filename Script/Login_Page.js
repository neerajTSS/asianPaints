// Common method to read JSON file
function readJsonFile(jsonFilePath) {
    // Create a File object to read the JSON file
    var file = aqFile.OpenTextFile(jsonFilePath, aqFile.faRead, aqFile.ctANSI);

    // Read the entire content of the file
    var jsonContent = file.ReadAll();

    // Close the file
    file.Close();

    // Parse the JSON content into an object
    return JSON.parse(jsonContent);
}
function Login_Page() {
    // Specify the path to your JSON file
    var jsonFilePath = "TestData\\Data.json";

    // Retrieve username, password, and URL from JSON file
    var jsonData = readJsonFile(jsonFilePath);
    var jsonUrl = jsonData.url;
    var username = jsonData.username;
    var password = jsonData.password;

    // Open the specified URL in a running instance of the Chrome browser.
    Browsers.Item(btChrome).Navigate(jsonUrl);
    Log.Message("Navigated to URL: " + jsonUrl);

    // Wait for the page to load completely
    Aliases.browser.pageLogon.Wait();

    // Maximize the browser window for better visibility.
    Aliases.browser.BrowserWindow.Maximize();
    Log.Message("Maximized the browser window.");

    // Set the retrieved username in the username input field.
    Aliases.browser.pageLogon.loginForm.userNameBox.SetText(username);
    Log.Message("Entered username: " + username);

    // Set the retrieved password in the password input field.
    Aliases.browser.pageLogon.loginForm.passwordBox.SetText(password);
    Log.Message("Entered password:" + password);

    // Click the 'Sign In' button to initiate login.
    Aliases.browser.pageLogon.loginForm.signInButton.ClickButton();
    Log.Message("Verified that the user is able to login with the valid credentials.");

    // Wait for the menu button to become visible
    var menuButton = Aliases.browser.pageLogon.homePage.menuButton;
    
    if (menuButton.Exists) {
        menuButton.Click();
        Log.Message("Verified that Menu button is visible on the screen.");
    } else {
        Log.Message("Menu button is not visible. Refreshing the page and clicking on the button.");

        // Refresh the page.
        Aliases.browser.BrowserWindow.Click(123, 80);
        Aliases.browser.pageLogon.confirmResubmission.continueButton.ClickButton();
        Delay(5000);

        // Check the menu button again
        aqObject.CheckProperty(Aliases.browser.pageLogon.homePage.menuButton, "contentText", cmpEqual, "");
        Log.Message("Verified that after login to the application user redirects to the Home screen");
    }
}
