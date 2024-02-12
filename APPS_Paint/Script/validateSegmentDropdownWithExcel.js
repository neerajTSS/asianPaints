function validateSubSegmentDropdownWithExcel()
//function validateSubSegmentDropdownWithExcel(PlaceName,Segment)
{
/*
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
  */
  
//Click on the segmentbox
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Tables.segmentDropdownValidationExcel.Check();
  Log.Message("Excel");
  NameMapping.Sys.browser.loginPage.panel1001Ports.VisibleOnScreen;
  Log.Checkpoint("Excel verified");
  
  //Select 101 - Builders from in the Segmet field
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Aliases.browser.loginPage.dropDownListSegment.txtBuilders.Click();
  //Click on SubSegment
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
  Tables.builderSubSegmentListVerification.Check();
  Aliases.browser.loginPage.txtBuilders.textnodeBuilders.VisibleOnScreen;
  Log.Checkpoint("Builders List Matched");
  
  //Click on the Segmentfield and click on the CHS
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Aliases.browser.loginPage.dropDownListSegment.segmentChs.Click();
  //Click on SubSegment and validate the list
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
  Tables.Segments.Check();
  Aliases.browser.loginPage.txtChs.txtChs.VisibleOnScreen;
  Log.Checkpoint("CHS List Matched");
  
  //Click on the Segmentfield and click on the Commercial
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Aliases.browser.loginPage.dropDownListSegment.segmentCommercial.Click();
  //Click on SubSegment and validate the list
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
  Tables.Segments.Check();
  Aliases.browser.loginPage.textnodeCommercial.txtCommercial.VisibleOnScreen;
  Log.Checkpoint("Commercial List Matched");
  
  //Click on the Segmentfield and click on the Corporate
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Aliases.browser.loginPage.dropDownListSegment.segmentCorporate.Click();
  //Click on SubSegment and validate the list
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
  Tables.Segments.Check();
  Aliases.browser.loginPage.textnodeCorporate.txtCorporate.VisibleOnScreen;
  Log.Checkpoint("Corporate List Matched");
  
  //Click on the Segmentfield and click on the EducationalInstitutions
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Aliases.browser.loginPage.dropDownListSegment.segmenEducationInstitutions.Click();
  //Click on SubSegment and validate the list
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
  Tables.Segments.Check();
  Aliases.browser.loginPage.textnodeEducationalInstitutions.txtEducationalInstitutions.VisibleOnScreen;
  Log.Checkpoint("EducationalInstitutions List Matched");
  
  //Click on the Segmentfield and click on the Energy
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Aliases.browser.loginPage.dropDownListSegment.segmentEnergy.Click();
  //Click on SubSegment and validate the list
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
  Tables.Segments.Check();
  NameMapping.Sys.browser.loginPage.panel1001Ports.VisibleOnScreen;
  Log.Checkpoint("Energy List Matched");
  
  //Click on the Segmentfield and click on the Factories
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
  Aliases.browser.loginPage.dropDownListSegment.panel151Factories.Click();
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
  Tables.Segments.Check();
  Aliases.browser.loginPage.textnodeFactories.txtFactories.VisibleOnScreen;
  
  
  
  
  
  
}








 
