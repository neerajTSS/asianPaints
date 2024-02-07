function ColorProtective_Admin_Login()
{
  Project.Variables.Var1.Reset();
  var RecordIdx;
  for(RecordIdx = 1; RecordIdx < 2; RecordIdx++)
    Project.Variables.Var1.Next();
  for(RecordIdx = 2; RecordIdx <= 2; RecordIdx++)
  {
    //Launches the specified browser and opens the specified URL in it.
    Browsers.Item(btChrome).Run();
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Navigates to the ''https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=%2fSAP_UI_CT%2fMain%2froot.uiccwoc&rootWindow=X&redirectUrl=%2fsap%2fpublic%2fbyd%2fruntime&supressAutoLogon=true'' address.
    Aliases.browser.ToUrl("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=%2fSAP_UI_CT%2fMain%2froot.uiccwoc&rootWindow=X&redirectUrl=%2fsap%2fpublic%2fbyd%2fruntime&supressAutoLogon=true");
    //Clicks the 'textboxUsernameFieldInner' control.
    Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Click();
    //Drags the 'textboxUsernameFieldInner' object.
    Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Drag(113, 10, -131, 0);
    //Enters KeywordTests.ColorProtective_Login.Variables.Var1("Username") in the 'textboxUsernameFieldInner' object.
    Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Keys(Project.Variables.Var1.Value("Username"));
    //Sets the text 'milton_angela' in the 'textboxUsernameFieldInner' text editor.
    Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.SetText("milton_angela");
    //Enters '[Tab]' in the 'textboxUsernameFieldInner' object.
    Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Keys("[Tab]");
    //Sets the text KeywordTests.ColorProtective_Login.Variables.Var1("Password") in the 'passwordboxPasswordFieldInner' text editor.
    Aliases.browser.pageLogon.formLoginForm.passwordboxPasswordFieldInner.SetText(Project.Variables.Var1.Value("Password"));
    //Sets the text Project.Variables.Password3 in the 'passwordboxPasswordFieldInner' text editor.
    Aliases.browser.pageLogon.formLoginForm.passwordboxPasswordFieldInner.SetText(Project.Variables.Password3);
    //Clicks the 'buttonLoginLink' button.
    Aliases.browser.pageLogon.formLoginForm.buttonLoginLink.ClickButton();
    //Clicks the 'textnodeMenu2' control.
    Aliases.browser.pageLogon.headerMainshellHdr.textnodeMenu2.Click();
    //Clicks the 'headerSales' control.
    Aliases.browser.pageLogon.asideMainshellContainerPane.headerSales.Click();
    //Clicks the 'linkLink41' link.
    Aliases.browser.pageLogon.asideMainshellContainerPane.linkLink41.Click();
    //Clicks the 'linkBathChild1002024' link.
    Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage5Cont.linkBathChild1002024.Click();
    //Clicks the 'textnodeCustomer' control.
    Aliases.browser.pageLogon.headerMainshellHdr.textnodeCustomer.Click();
    //Clicks the 'buttonButton385' button.
    Aliases.browser.pageLogon.footerHelp.buttonButton385.ClickButton();
    //Clicks the 'buttonMboxBtn0' button.
    //Aliases.browser.pageLogon.footerYes.buttonMboxBtn0.ClickButton();
    //Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close();
    Project.Variables.Var1.Next();
  }
}