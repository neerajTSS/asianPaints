var webElementWaits = require("WebElementWaits");
function HomePageElements() {
  

  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.homePage.menuButton).Click();
  aqObject.CheckProperty(Aliases.browser.pageLogon.homePage.menuButton, "contentText", cmpEqual, "");
 
    // Checkpoints for the main menu links
  CheckMenuLink("Home", Aliases.browser.pageLogon.menuContainer.homeButton);
  Log.Message("Verified Home option visible on screen.");
  
  CheckMenuLink("Calendar", Aliases.browser.pageLogon.menuContainer.calenderButton);
  Log.Message("Verified Calendar option visible on screen.");
  
  CheckMenuLink("Customers", Aliases.browser.pageLogon.menuContainer.customersDropdownButton);
  Log.Message("Verified Customers option visible on screen.");
  
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.linkLink11, "contentText", cmpEqual, "Tasks");
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.linkLink12, "contentText", cmpEqual, "Reports");
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.analysisDropdownButton, "contentText", cmpEqual, "Products");
  aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.libraryButton, "contentText", cmpEqual, "Ratification");
  CheckMenuLink("Sales", Aliases.browser.pageLogon.menuContainer.salesDropdownButton);
  Log.Message("Verified Sales option visible on screen.");
  
  var salesButton =  Aliases.browser.pageLogon.menuContainer.salesDropdownButton;
  salesButton.WaitProperty('Visible',true,Project.Variables.Timeout);
  salesButton.Click();
  
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
module.exports.HomePageElements = HomePageElements;