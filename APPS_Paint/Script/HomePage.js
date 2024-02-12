﻿function HomePage()
{
 //Click the 'Menu' 
  Aliases.browser.loginPage.pageHome.btnMenu.Click();

//Checkpoints for the main menu links
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__link0"), "contentText", cmpEqual, "Home");
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__text12"), "contentText", cmpEqual, "Sales");
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__link18"), "contentText", cmpEqual, "Warranty");
 
//Click on 'Sales' 
  Aliases.browser.loginPage.allMenuLinks.headerSales.Click();
  Log.Message("Verified that on clicking Sales it expands ");
 
//Checkpoints for links under Sale drop down
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__link2"), "contentText", cmpContains, "Leads", false);
  Log.Checkpoint("Leads link verification pass");
  Log.Message("Verified that Leads option is visible after expanding Sales option");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__link3"), "contentText", cmpContains, "Project Cards", false);
  Log.Checkpoint("Project Cards link verification pass");
  Log.Message("Verified that Project Cards option is visible after expanding Sales option");  
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__link4"), "contentText", cmpContains, "Sales Quotes", false);
  Log.Checkpoint("Sales Quotes link verification pass");
  Log.Message("Verified that Sales Quotes option is visible after expanding Sales option"); 
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__link5"), "contentText", cmpContains, "FSM", false);
  Log.Checkpoint("FSM link verification pass");
  Log.Message("Verified that FSM option is visible after expanding Sales option"); 
 
  Delay(500)
//Verify the + icon is visible on HomePage 
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//button[.='Create']"), "contentText", cmpContains, "Create", false);
  Log.Checkpoint("+ icon verification pass");
  Log.Message("Verified that + icon is visible on HomePage "); 

//Click on the + icon on HomePage
  Aliases.browser.loginPage.pageLeadCreation.pageLead.buttonCreate6.ClickButton();
  Log.Message(" + icon is clicked ");

//Verify that Lead is visible on popup
  
  if(Aliases.browser.loginPage.sectionDialog1Cont.txtLeadOnPopup.VisibleOnScreen)
  {
    Log.Message("Leads is visible on popup");
//Click on Lead
  Aliases.browser.loginPage.sectionDialog1Cont.txtLeadOnPopup.Click();  
  } 
  else
 {
   Log.Message("Leads is not visible on popup");
 }

  

 
  
  
  
}
