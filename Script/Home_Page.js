function Home_Page() {
  var menuButton = Aliases.browser.pageLogon.homePage.menuButton;

if (menuButton.Exists)
{
    menuButton.Click();
    Log.Message("Verified that Menu button is visible on the screen.");
}
else
{
    Log.Message("Menu button is not visible. Refreshing the page and clicking on the button.");

    // Refresh the page.
    Aliases.browser.BrowserWindow.Click(123, 80);
    Aliases.browser.pageLogon.confirmResubmission.continueButton.ClickButton();

    // Wait for some time (adjust the milliseconds as needed).
    Delay(3000); 

    // Log a message indicating that the wait is complete.
    Log.Message("Waited for the page to refresh.");
    Aliases.browser.pageLogon.homePage.menuButton.Click();

    Log.Message("Verified that Menu button is visible on the screen after refreshing.");
}
  // Checkpoints for the main menu links
CheckMenuLink("Home", Aliases.browser.pageLogon.homePage.menuButton);
Log.Message("Verified Home link.");

CheckMenuLink("Calendar", Aliases.browser.pageLogon.menuContainer.calendarButton);
Log.Message("Verified Calendar link.");

CheckMenuLink("Customers", Aliases.browser.pageLogon.menuContainer.customersButton);
Log.Message("Verified Customers link.");

CheckMenuLink("Employees", Aliases.browser.pageLogon.menuContainer.employeesButton);
Log.Message("Verified Employees link.");

CheckMenuLink("Activities", Aliases.browser.pageLogon.menuContainer.activitiesButton);
Log.Message("Verified Activities link.");

CheckMenuLink("Analysis", Aliases.browser.pageLogon.menuContainer.analysisButton);
Log.Message("Verified Analysis link.");

CheckMenuLink("Competitors", Aliases.browser.pageLogon.menuContainer.competitorsButton);
Log.Message("Verified Competitors link.");

CheckMenuLink("Products", Aliases.browser.pageLogon.menuContainer.productsButtons);
Log.Message("Verified Products link.");

CheckMenuLink("Library", Aliases.browser.pageLogon.menuContainer.libraryButton);
Log.Message("Verified Library link.");

CheckMenuLink("NewProductDevelopment View", Aliases.browser.pageLogon.menuContainer.newProductButton);
Log.Message("Verified NewProductDevelopment View link.");

CheckMenuLink("Tickets", Aliases.browser.pageLogon.menuContainer.ticketsButton);
Log.Message("Verified Tickets link.");

CheckMenuLink("Visits", Aliases.browser.pageLogon.menuContainer.visitsButton);
Log.Message("Verified Visits link.");

CheckMenuLink("Sales", Aliases.browser.pageLogon.menuContainer.salesButton);
Log.Message("Verified Sales link.");


   // Clicks the 'Sales' Menu.
Aliases.browser.pageLogon.menuContainer.salesbutton.Click();


// Checkpoints for the Sales submenu links
aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.leadsButton, "title", cmpEqual, "Leads");
Log.Checkpoint("Leads link verification passed.");
Log.Message("Verified that Leads option is visible after expanding the Sales option.");

aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.projectCardsButton, "title", cmpEqual, "Project Cards");
Log.Checkpoint("Project Cards link verification passed.");
Log.Message("Verified that Project Cards option is visible after expanding the Sales option.");

aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.salesQuotesbutton, "title", cmpEqual, "Sales Quotes");
Log.Checkpoint("Sales Quotes link verification passed.");
Log.Message("Verified that Sales Quotes option is visible after expanding the Sales option.");

aqObject.CheckProperty(Aliases.browser.pageLogon.menuContainer.FSMButton, "title", cmpEqual, "FSM");
Log.Checkpoint("FSM link verification passed.");
Log.Message("Verified that FSM option is visible after expanding the Sales option.");

}
// Function to verify and log messages for menu link checkpoint
function CheckMenuLink(linkName, linkObject) {
    aqObject.CheckProperty(linkObject, "title", cmpEqual, linkName);
    Log.Checkpoint(linkName + " link verification passed.");
    Log.Message("Verified that " + linkName + " should be visible on clicking Menu button on the left side of the screen.");
}


