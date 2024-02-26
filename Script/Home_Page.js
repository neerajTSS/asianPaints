function Home_Page() {
  aqObject.CheckProperty(Aliases.browser.pageLogon.homePage.menuButton, "contentText", cmpEqual, "");
  Log.Message("Verified that Menu button should be visible on screen");
  Aliases.browser.pageLogon.homePage.menuButton.Click();
  // Checkpoints for the main menu links
CheckMenuLink("Home", Aliases.browser.pageLogon.menuContainer.homeButton);
Log.Message("Verified Home option visible on screen.");

CheckMenuLink("Calendar", Aliases.browser.pageLogon.menuContainer.calenderButton);
Log.Message("Verified Calendar option visible on screen.");

CheckMenuLink("Customers", Aliases.browser.pageLogon.menuContainer.customersDropdownButton);
Log.Message("Verified Customers option visible on screen.");

 //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.menuContainer.linkLink11 object equals 'Tasks'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.linkLink11, "contentText", cmpEqual, "Tasks");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.menuContainer.linkLink12 object equals 'Reports'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.linkLink12, "contentText", cmpEqual, "Reports");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.menuContainer.analysisDropdownButton object equals 'Products'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.analysisDropdownButton, "contentText", cmpEqual, "Products");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.menuContainer.libraryButton object equals 'Ratification'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.libraryButton, "contentText", cmpEqual, "Ratification");


//CheckMenuLink("Library", Aliases.browser.pageLogon.menuContainer.libraryButton);
Log.Message("Verified Library option visible on screen.");

//CheckMenuLink("NewProductDevelopment View", Aliases.browser.pageLogon.menuContainer.newProductButton);
//Log.Message("Verified NewProductDevelopment View option visible on screen.");

//CheckMenuLink("Tickets", Aliases.browser.pageLogon.menuContainer.ticketsButton);
//Log.Message("Verified Tickets option visible on screen.");

//CheckMenuLink("Visits", Aliases.browser.pageLogon.menuContainer.visitsButton);
//Log.Message("Verified Visits option visible on screen.");

CheckMenuLink("Sales", Aliases.browser.pageLogon.menuContainer.salesDropdownButton);
Log.Message("Verified Sales option visible on screen.");


   // Clicks the 'Sales' Menu.
Aliases.browser.pageLogon.menuContainer.salesDropdownButton.Click();


// Checkpoints for the Sales submenu links
aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.leadsButton, "title", cmpEqual, "Leads");
Log.Checkpoint("Leads link verification passed.");
Log.Message("Verified that after expanding the Sales option Leads option should be visible.");

aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.projectCardsButton, "title", cmpEqual, "Project Cards");
Log.Checkpoint("Project Cards link verification passed.");
Log.Message("Verified that after expanding the Sales option Project Cards option should be visible.");

aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.salesQuotesbutton, "title", cmpEqual, "Sales Quotes");
Log.Checkpoint("Sales Quotes link verification passed.");
Log.Message("Verified that after expanding the Sales option Sales Quotes option should be visible.");

aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.FSMButton, "title", cmpEqual, "FSM");
Log.Checkpoint("FSM link verification passed.");
Log.Message("Verified that after expanding the Sales option FSM option should be visible.");

}
// Function to verify and log messages for menu link checkpoint
function CheckMenuLink(linkName, linkObject) {
    aqObject.CheckProperty(linkObject, "title", cmpEqual, linkName);
    Log.Checkpoint(linkName + " link verification passed.");
    Log.Message("Verified that " + linkName + " should be visible on clicking Menu button on the left side of the screen.");
}
