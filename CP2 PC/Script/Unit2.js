function ColorProtective_PSO_Login()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxUsernameFieldInner' control.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Click();
  //Drags the 'textboxUsernameFieldInner' object.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Drag(142, 10, -154, -12);
  //Sets the text 'P00124216' in the 'textboxUsernameFieldInner' text editor.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.SetText("P00124216");
  //Enters '[Tab]' in the 'textboxUsernameFieldInner' object.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Keys("[Tab]");
  //Sets the text Project.Variables.Password2 in the 'passwordboxPasswordFieldInner' text editor.
  Aliases.browser.pageLogon.formLoginForm.passwordboxPasswordFieldInner.SetText(Project.Variables.Password2);
  //Sets the text Project.Variables.Password1 in the 'passwordboxPasswordFieldInner' text editor.
  Aliases.browser.pageLogon.formLoginForm.passwordboxPasswordFieldInner.SetText(Project.Variables.Password1);
  //Clicks the 'buttonLoginLink' button.
  Aliases.browser.pageLogon.formLoginForm.buttonLoginLink.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogon.Wait();
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(94, 69);
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(28, 77);
  //Checks whether the 'VisibleOnScreen' property of the Aliases.browser.pageLogon.FindElement("#__title0-inner") object equals True.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__title0-inner"), "VisibleOnScreen", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("#__title0-inner") object equals 'Home'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__title0-inner"), "contentText", cmpEqual, "Home");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageLogon.FindElement("#__link0") object equals True.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__link0"), "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("#__link0") object equals 'Home'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__link0"), "contentText", cmpEqual, "Home");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageLogon.FindElement("#__text14") object equals True.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__text14"), "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("#__text14") object equals 'Sales'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__text14"), "contentText", cmpEqual, "Sales");
  //Clicks the 'textnodePanel2Collapsedimg' control.
  Aliases.browser.pageLogon.asideMainshellContainerPane.headerSales2.textnodePanel2Collapsedimg.Click();
  //Checks whether the 'Enabled' property of the Aliases.browser.pageLogon.FindElement("#__link5") object equals True.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__link5"), "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("#__link5") object equals 'Leads'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__link5"), "contentText", cmpEqual, "Leads");
  //Clicks the 'linkLink5' link.
  Aliases.browser.pageLogon.asideMainshellContainerPane.linkLink5.Click();
  //Clicks the 'linkChembur2024' link.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.linkChembur2024.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("#__text164") object equals 'Chembur - 2024'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#__text164"), "contentText", cmpEqual, "Chembur - 2024");
  //Clicks the 'buttonButton106' button.
  Aliases.browser.pageLogon.footerHelp.buttonButton106.ClickButton();
  //Clicks the 'buttonMboxBtn0' button.
  Aliases.browser.pageLogon.footerYes.buttonMboxBtn0.ClickButton();
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}