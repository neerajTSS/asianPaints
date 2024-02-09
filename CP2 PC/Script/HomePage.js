function HomePage()
{
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("//div[2]/div/div[contains(@class, 'sapUshellTileContainerContent')]"), "contentText", cmpEqual, "Juggernaut KPI's\nLead from other LOB..\nCounter\n0\nConverted Leads from Other LOB..\nCounter\n4\nTotal Potential from Converted Leads\nPotential\n0");
  Log.Message("Key Performance Indicators (KPIs) for \"Juggernaut\" are accessible on the homepage.", "");
  aqObject.CheckProperty(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelSalesKpiS, "VisibleOnScreen", cmpNotEqual, false);
  Log.Message("Key Performance Indicators (KPIs) for \"Sales\" are accessible on the homepage.", "");
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("#mainMultiToolBar"), "contentText", cmpEqual, "Home\nMessage");
  Log.Message("Home Page is accesible With the PSO login. ", "");
  aqObject.CheckProperty(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelTest, "VisibleOnScreen", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage0Cont.panelTest, "contentText", cmpEqual, "Sales KPI's\nMy Leads\nLeads\n39\nMy Project Cards\nProject Cards\n19\nMy Open Tasks\nTasks\n7\nMy Tickets\nTickets\n3\nPRF: In Approval\nCounter\n1\nApproved PRFs\nCounter\n13");
  Log.Message("Sales KPIs are also available on the Home Page", "");
}