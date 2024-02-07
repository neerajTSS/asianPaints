function HomePage()
{
  //Opens the specified URL in a running instance of the specified browser.
  //Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/0/eyJfc1dvY0lkIjpudWxsLCJfc1ZpZXdJZCI6bnVsbCwiX3NQZXJmb3JtYW5jZVdvY0lkIjoiSG9tZSIsIl9zUGVyZm9ybWFuY2VWaWV3SWQiOiJIb21lIiwiX3NDb250ZXh0SWQiOiJhOGI2MTJlYTYwYzk2OTNjMmQ0M2FhMzhiZDQ1ZTU0NiJ9");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("//section[@role='main']//section//div//div[contains(@class, 'sapUshellTileContainerContent')]") object equals 'Test
  //Top 10 Opportunities
  //Table view not supported. Select the tile for report details.'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("//section[@role='main']//section//div//div[contains(@class, 'sapUshellTileContainerContent')]"), "contentText", cmpEqual, "Test\nTop 10 Opportunities\nTable view not supported. Select the tile for report details.");
  //Posts an information message to the test log.
  Log.Message("Top 10 Opportunites KPI is Visibile on the Home_page", "");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("//div[2]/div/div[contains(@class, 'sapUshellTileContainerContent')]") object equals 'Juggernaut KPI's
  //Lead from other LOB..
  //Counter
  //0
  //Converted Leads from Other LOB..
  //Counter
  //0
  //Total Potential from Converted Leads
  //Potential
  //0'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("//div[2]/div/div[contains(@class, 'sapUshellTileContainerContent')]"), "contentText", cmpEqual, "Juggernaut KPI's\nLead from other LOB..\nCounter\n0\nConverted Leads from Other LOB..\nCounter\n0\nTotal Potential from Converted Leads\nPotential\n0");
  //Posts an information message to the test log.
  Log.Message("Key Performance Indicators (KPIs) for \"Juggernaut\" are accessible on the homepage.", "");
  //Checks whether the 'VisibleOnScreen' property of the Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelSalesKpiS object does not equal False.
  aqObject.CheckProperty(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelSalesKpiS, "VisibleOnScreen", cmpNotEqual, false);
  //Posts an information message to the test log.
  Log.Message("Key Performance Indicators (KPIs) for \"Sales\" are accessible on the homepage.", "");
  //Checks whether the 'VisibleOnScreen' property of the Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelMyActivities object does not equal False.
  aqObject.CheckProperty(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelMyActivities, "VisibleOnScreen", cmpNotEqual, false);
  //Posts an information message to the test log.
  Log.Message("\"My Activites\" are accessible on the homepage.", "");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.FindElement("#mainMultiToolBar") object equals 'Home
  //Message'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#mainMultiToolBar"), "contentText", cmpEqual, "Home\nMessage");
  //Posts an information message to the test log.
  Log.Message("Home Page is accesible With the PSO login. ", "");
}