function DropDown(PlaceName,Segment)
{
  //Click on 'Leads' 
  Aliases.browser.loginPage.allMenuLinks.linkLink2.Click();
  Log.Message("Verified that Leads option is clicked");

  aqUtils.Delay(1000);
//Chekpoint for 'Leads' text after clicking the Leads option
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__title0-inner"), "contentText", cmpContains, "Leads", false);   
  Log.Checkpoint("Leads text verification pass");
  Log.Message("Verified that after clicking the Leads option, Leads text is visible");
  
  aqUtils.Delay(1000);
//Checkpoint for '+' icon on Leads page
  if (Aliases.browser.loginPage.pageLeadCreation.pageLead.btnCreate.VisibleOnScreen)
   {
    Aliases.browser.loginPage.pageLeadCreation.pageLead.btnCreate.ClickButton();
    Log.Message("+ icon on Leads page is clicked")
   }
  else{
    Log.Message("+ icon on Leads page is not clicked")
      }

  
  aqUtils.Delay(1000);

//Click on the Place Name field and get name from excel sheet
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxPlaceName.Click();
  Log.Message("Verified clicking the Place Name field.");
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxPlaceName.SetText(PlaceName);
  Log.Message("Verified PlaceName is filled");
  
//Checkpoint for Search Site button
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//button[.='Search Site']"), "contentText", cmpContains, "Search Site", false);
  Log.Checkpoint("Search Site button clicked pass");
  Log.Message("Verified Search Site button is clicked");
  
//Click on the Search Site button
  Aliases.browser.loginPage.pageLeadCreation.pageLead.btnSearchSite.ClickButton();

  aqUtils.Delay(1000);
//Click on second checkbox under 'MMI Suggested Addresses'
  Aliases.browser.loginPage.pageLeadCreation.pageLead.addressCheckBox.Click();

//click on the dropdown of segment
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Click();
  Tables.PaintRegular1.Check();
  NameMapping.Sys.browser.loginPage.panel1001Ports.VisibleOnScreen;


}








 
