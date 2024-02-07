function Login()
{
  Project.Variables.Var1.Reset();
  for(; !Project.Variables.Var1.IsEOF();)
    Project.Variables.Var1.Next();
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxUsernameFieldInner' control.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Click();
  //Drags the 'textboxUsernameFieldInner' object.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Drag(142, 10, -154, -12);
  //Sets the text Project.Variables.Var1("Username") in the 'textboxUsernameFieldInner' text editor.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.SetText(Project.Variables.Var1.Value("Username"));
  //Enters '[Tab]' in the 'textboxUsernameFieldInner' object.
  Aliases.browser.pageLogon.formLoginForm.textboxUsernameFieldInner.Keys("[Tab]");
  //Sets the text Project.Variables.Var1("Password") in the 'passwordboxPasswordFieldInner' text editor.
  Aliases.browser.pageLogon.formLoginForm.passwordboxPasswordFieldInner.SetText(Project.Variables.Var1.Value("Password"));
  //Sets the text Project.Variables.Password1 in the 'passwordboxPasswordFieldInner' text editor.
  Aliases.browser.pageLogon.formLoginForm.passwordboxPasswordFieldInner.SetText(Project.Variables.Password1);
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.formLoginForm.panelLanguageBlock object equals 'English
  //English'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.formLoginForm.panelLanguageBlock, "contentText", cmpEqual, "English\nEnglish");
  //Posts an information message to the test log.
  Log.Message("English is the preferred Language", "");
  //Checks whether the 'VisibleOnScreen' property of the Aliases.browser.pageLogon.formLoginForm.SignInButton object does not equal False.
  aqObject.CheckProperty(Aliases.browser.pageLogon.formLoginForm.SignInButton, "VisibleOnScreen", cmpNotEqual, false);
  //Posts an information message to the test log.
  Log.Message("Successfully log in to the application.", "");
  //Clicks the 'SignInButton' button.
  Aliases.browser.pageLogon.formLoginForm.SignInButton.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogon.Wait();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/0/eyJfc1dvY0lkIjpudWxsLCJfc1ZpZXdJZCI6bnVsbCwiX3NQZXJmb3JtYW5jZVdvY0lkIjoiSG9tZSIsIl9zUGVyZm9ybWFuY2VWaWV3SWQiOiJIb21lIiwiX3NDb250ZXh0SWQiOiI3OWI2ZTM5MWMzYjhhYThkODc4ZTNlYjFkYzczODFkNSJ9");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Double-clicks the 'DesktopWindowXamlSource' object.
  Aliases.explorer.wndShell_SecondaryTrayWnd.DesktopWindowXamlSource.DblClick(1209, 29);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/0/eyJfc1dvY0lkIjpudWxsLCJfc1ZpZXdJZCI6bnVsbCwiX3NQZXJmb3JtYW5jZVdvY0lkIjoiSG9tZSIsIl9zUGVyZm9ybWFuY2VWaWV3SWQiOiJIb21lIiwiX3NDb250ZXh0SWQiOiI5NDgwYmE3M2Y1MTc4ZGUxNmJmNTc0YjZlOTliMTAxOSJ9");
  //Compares the pageHomeSapCloudForCustomer1 Stores item with the image of the Regions.CreateRegionInfo(Aliases.browser.pageLogon, 11, 5, 1896, 98, false) object.
  Regions.pageHomeSapCloudForCustomer1.Check(Regions.CreateRegionInfo(Aliases.browser.pageLogon, 11, 5, 1896, 98, false));
  //Posts an information message to the test log.
  Log.Message("This is My Home Page as a PSO", "");
}

function HomePage()
{
  //Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/0/eyJfc1dvY0lkIjpudWxsLCJfc1ZpZXdJZCI6bnVsbCwiX3NQZXJmb3JtYW5jZVdvY0lkIjoiSG9tZSIsIl9zUGVyZm9ybWFuY2VWaWV3SWQiOiJIb21lIiwiX3NDb250ZXh0SWQiOiJhOGI2MTJlYTYwYzk2OTNjMmQ0M2FhMzhiZDQ1ZTU0NiJ9");
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("//section[@role='main']//section//div//div[contains(@class, 'sapUshellTileContainerContent')]"), "contentText", cmpEqual, "Test\nTop 10 Opportunities\nTable view not supported. Select the tile for report details.");
  Log.Message("Top 10 Opportunites KPI is Visibile on the Home_page", "");
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("//div[2]/div/div[contains(@class, 'sapUshellTileContainerContent')]"), "contentText", cmpEqual, "Juggernaut KPI's\nLead from other LOB..\nCounter\n0\nConverted Leads from Other LOB..\nCounter\n0\nTotal Potential from Converted Leads\nPotential\n0");
  Log.Message("Key Performance Indicators (KPIs) for \"Juggernaut\" are accessible on the homepage.", "");
  aqObject.CheckProperty(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelSalesKpiS, "VisibleOnScreen", cmpNotEqual, false);
  Log.Message("Key Performance Indicators (KPIs) for \"Sales\" are accessible on the homepage.", "");
  aqObject.CheckProperty(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelMyActivities, "VisibleOnScreen", cmpNotEqual, false);
  Log.Message("\"My Activites\" are accessible on the homepage.", "");
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#mainMultiToolBar"), "contentText", cmpEqual, "Home\nMessage");
  Log.Message("Home Page is accesible With the PSO login. ", "");
}