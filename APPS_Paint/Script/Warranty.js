function Warranty()
{
   //Click the 'Menu' 
  Aliases.browser.loginPage.pageHome.btnMenu.Click();
  
  //Click on Warranty link
  Aliases.browser.loginPage.allMenuLinks.linkWarranty.Click();
  
  
  Delay(1000);
  //Click on + icon to create warranty
  Aliases.browser.loginPage.pageLeadCreation.pageLead.btnCreate.ClickButton();
  Log.Message("+ icon is clicked");
  
  //Click on the Warranty Type field
  Aliases.browser.loginPage.pageLeadCreation.warrantyPage.warrantyDropdownBtn.Click();
  Log.Message("Warranty Type field is clicked");
  
  //Select the ZSTW - Standard Warranty from the dropdown
  Aliases.browser.loginPage.warrantyTypeDropdownList.txtZstwStandardWarranty.Click();
  Log.Message("ZSTW - Standard Warranty is selected");
  
  



}
