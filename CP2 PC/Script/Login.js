function Login(url, username, password)
{
  Project.Variables.Var1.Reset();
  for(; !Project.Variables.Var1.IsEOF();)
  {
    Browsers.Item(btChrome).Run(Project.Variables.Var1.Value("URL"));
    Aliases.browser.BrowserWindow.Maximize();
    Aliases.browser.pageLogon.formLoginFormNRJ.textboxUsername.Click();
    Log.Message("Verified clicking the username field.");
    
    Aliases.browser.pageLogon.formLoginFormNRJ.textboxUsername.Drag(142, 10, -154, -12);
    Aliases.browser.pageLogon.formLoginFormNRJ.textboxUsername.SetText(Project.Variables.Var1.Value("UserName"));
       Log.Message("Verified setting the username: " + username);
    
    Aliases.browser.pageLogon.formLoginFormNRJ.textboxUsername.Keys("[Tab]");
    Aliases.browser.pageLogon.formLoginFormNRJ.passwordField.SetText(Project.Variables.Var1.Value("Password"));
    Aliases.browser.pageLogon.formLoginFormNRJ.passwordField.SetText(Project.Variables.Password1);
    aqObject.CheckProperty(Aliases.browser.pageLogon.formLoginFormNRJ.panelLanguageBlock, "contentText", cmpEqual, "English\nEnglish");
    Log.Message("English is the preferred Language", "");
    aqObject.CheckProperty(Aliases.browser.pageLogon.formLoginFormNRJ.SignInButton, "VisibleOnScreen", cmpNotEqual, false);
    Log.Message("Successfully log in to the application.", "");
    Aliases.browser.pageLogon.formLoginFormNRJ.SignInButton.ClickButton();
    Aliases.browser.pageLogon.Wait();
    Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/0/eyJfc1dvY0lkIjpudWxsLCJfc1ZpZXdJZCI6bnVsbCwiX3NQZXJmb3JtYW5jZVdvY0lkIjoiSG9tZSIsIl9zUGVyZm9ybWFuY2VWaWV3SWQiOiJIb21lIiwiX3NDb250ZXh0SWQiOiI3OWI2ZTM5MWMzYjhhYThkODc4ZTNlYjFkYzczODFkNSJ9");
    Aliases.browser.BrowserWindow.Maximize();
    Aliases.explorer.wndShell_SecondaryTrayWnd.DesktopWindowXamlSource.DblClick(1209, 29);
    Regions.pageHomeSapCloudForCustomer1.Check(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.panelMainmultitoolbar);
    Log.Message("This is My Home Page as a PSO", "");
    Project.Variables.Var1.Next();
  }
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