function LeadCreation(PlaceName,CustomerName,CustomerMobileNo,CustomerEmail)
//function LeadCreation()
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
/*//Checkpoint for 'New Lead' tab
 // aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__text108"), "contentText", cmpContains, "New Lead", false);
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__text108"), "VisibleOnScreen", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#__text108"), "contentText", cmpEqual, "New Lead");
  Log.Checkpoint("New Lead tab verification pass");
  Log.Message("Verified that after clicking the Leads option user redirect to the New Lead tab ");
*/  
  aqUtils.Delay(1000);
//Checkpoint for 'Place Name' text  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Place Name']"), "contentText", cmpContains, "Place Name", false);
  Log.Checkpoint("Place Name text verification pass");  
  
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
//Checkpoints for fields on New Lead page
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Site Name']"), "contentText", cmpContains, "Site Name", false);
  Log.Checkpoint("Site Name verification pass");
  Log.Message("Verified that Site Name is visible");
    
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Line of Business']"), "contentText", cmpContains, "Line of Business", false);
  Log.Checkpoint("Line of Business verification pass");
  Log.Message("Verified that Line of Business is visible"); 
   
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Sub Line of Business']"), "contentText", cmpContains, "Sub Line of Business", false);
  Log.Checkpoint("Sub Line of Business verification pass");
  Log.Message("Verified that Sub Line of Business is visible");  
    
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Segment']"), "contentText", cmpContains, "Segment", false);
  Log.Checkpoint("Segment verification pass");
  Log.Message("Verified that Segment is visible");  
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Sub Segment.']"), "contentText", cmpContains, "Sub Segment.", false);
  Log.Checkpoint("Sub Segment verification pass");
  Log.Message("Verified that Sub Segment is visible"); 
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Stage']"), "contentText", cmpContains, "Stage", false);
  Log.Checkpoint("Stage verification pass");
  Log.Message("Verified that Stage is visible"); 
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Source']"), "contentText", cmpContains, "Source", false);
  Log.Checkpoint("Source verification pass");
  Log.Message("Verified that Source is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Parent Account']"), "contentText", cmpContains, "Parent Account", false);
  Log.Checkpoint("Parent Account verification pass");
  Log.Message("Verified that Parent Account is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Project Type']"), "contentText", cmpContains, "Project Type", false);
  Log.Checkpoint("Project Type verification pass");
  Log.Message("Verified that Project Type is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Address Line 1']"), "contentText", cmpContains, "Address Line 1", false);
  Log.Checkpoint("Address Line 1 verification pass");
  Log.Message("Verified that Address Line 1 is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='City']"), "contentText", cmpContains, "City", false);
  Log.Checkpoint("City verification pass");
  Log.Message("Verified that City is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='State']"), "contentText", cmpContains, "State", false);
  Log.Checkpoint("State verification pass");
  Log.Message("Verified that State is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Country/Region']"), "contentText", cmpContains, "Country/Region", false);
  Log.Checkpoint("Country/Region verification pass");
  Log.Message("Verified that Country/Region is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Postal Code']"), "contentText", cmpContains, "Postal Code", false);
  Log.Checkpoint("Postal Code verification pass");
  Log.Message("Verified that Postal Code is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='eLoc of STP']"), "contentText", cmpContains, "eLoc of STP", false);
  Log.Checkpoint("eLoc of STP verification pass");
  Log.Message("Verified that eLoc of STP is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Contact Name']"), "contentText", cmpContains, "Contact Name", false);
  Log.Checkpoint("Contact Name verification pass");
  Log.Message("Verified that Contact Name is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Job Title']"), "contentText", cmpContains, "Job Title", false);
  Log.Checkpoint("Job Title verification pass");
  Log.Message("Verified that Job Title is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//bdi[.='Mobile']"), "contentText", cmpContains, "Mobile", false);
  Log.Checkpoint("Mobile verification pass");
  Log.Message("Verified that Mobile is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("#label84f3de75fe4ba51d21d728b6d072e4c5_540-bdi"), "contentText", cmpContains, "Customer Email", false);
  Log.Checkpoint("Customer Email verification pass");
  Log.Message("Verified that Customer Email is visible");
  
  aqObject.CheckProperty(Aliases.browser.loginPage.FindElement("//button[.='Save and Open']"), "contentText", cmpEqual, "Save and Open");
  Log.Checkpoint("Save and Open verification pass");
  Log.Message("Verified that Save and Open is visible");

//Check that Site Name filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.sectionContant.txtBoxSiteName != null)
   {
    Log.Message("Site Name field is not empty")
   }
  else{
    Log.Message("Site Name field is empty")
      }

//Check that Line of Business filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxLineOfBusiness != null)
   {
    Log.Message("Line of Business field is not empty")
   }
  else{
    Log.Message("Line of Business field is empty")
      }

//Check that Sub Line of Business filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtboxSubLineOfBusiness != null)
   {
    Log.Message("Sub Line of Business field is not empty")
   }
  else{
    Log.Message("Sub Line of Business field is empty")
      } 

 //Double-clicks the 'segmentDropdownButton' object.
   Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Click();
   Delay(1000);

// Simulate pressing the down arrow key
   Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Keys("[Down]");

// Log the text of the currently selected item
  var selectedItemText = Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Text;
  Log.Message("Selected Item: " + selectedItemText);

// Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 20; // Adjust as needed
    for (var i = 0; i < numberOfItemsToNavigate; i++) 
    {
        // Simulate pressing the down arrow key
    Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var currentItemText = Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Text;
    Log.Message("Item " + (i + 1) + ": " + currentItemText);

    // If it's the last iteration, remember the last item's text
    if (i === numberOfItemsToNavigate - 1) {
        var lastItemText = currentItemText;
    }
  }
   // Simulate pressing the Enter key to select the last item
    Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Keys("[Enter]");
    Log.Message("Last item selected: " + lastItemText);
    Delay(1000)
  
     Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Click();
     Delay(1000);

// Simulate pressing the down arrow key
 Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Keys("[Down]");

// Log the text of the currently selected item
  var selectedItemText = Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Text;
  Log.Message("Selected Item: " + selectedItemText);

// Loop through pressing the down arrow key and logging the text
  var numberOfItemsToNavigate = 100; // Adjust as needed
  var lastItemText;
  for (var i = 0; i < numberOfItemsToNavigate; i++) {
    // Simulate pressing the down arrow key
    Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var currentItemText = Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Text;
    Log.Message("Item " + (i + 1) + ": " + currentItemText);

    // If it's the last iteration, remember the last item's text
    if (i === numberOfItemsToNavigate - 1) {
        lastItemText = currentItemText;
    }
}

// Simulate pressing the Enter key to select the last item
 Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.subSegmentDropdownButton.Keys("[Enter]");
 Log.Message("Last item selected: " + lastItemText);

/*  
// Click and interact with the 'stageDropdownButton'
   Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.stageDropdownButton.Click();

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(stageDropdownButton)
 {
    stageDropdownButton.Click();
    Delay(1000);
    
    // Simulate pressing the down arrow key
    stageDropdownButton.Keys("[Down]");
   
    // Log the text of the currently selected item
    var selectedItemText = stageDropdownButton.Text;
    Log.Message("Selected Item: " + selectedItemText);

    // Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 3; // Adjust as needed
    var lastItemText;
    
    for (var i = 0; i < numberOfItemsToNavigate; i++) 
    {
        // Simulate pressing the down arrow key
        stageDropdownButton.Keys("[Down]");

        // Log the text of the currently selected item
        var currentItemText = stageDropdownButton.Text;
        Log.Message("Item " + (i + 1) + ": " + currentItemText);

        // If it's the last iteration, remember the last item's text
        if (i === numberOfItemsToNavigate - 1) 
        {
            lastItemText = currentItemText;
        }
    }
    
   // Simulate pressing the Enter key to select the last item
    stageDropdownButton.Keys("[Enter]");
    Log.Message("Last item selected: " + lastItemText); 
    
 }
*/ 
  
//Click on the drop down of the Stage field   
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.stageDropdownButton.Click();
   aqUtils.Delay(1000);
//Select the Stage from the drop down
  Aliases.browser.loginPage.dropDownListStage.txtCold6Months.Click();

//Click on the drop down of the Source field     
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.dropDownBtnSource.Click();
   aqUtils.Delay(1000);
//Select the Source from the drop down
  Aliases.browser.loginPage.dropDownListSource.txtApplicatorPaintWpcc.Click();

//Check that Project Type filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxDropdownFreshConstruction != null)
   {
    Log.Message("Project Type field is not empty")
   }
  else{
    //click on the dropdown and select the value
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxDropdownFreshConstruction.Click();
  Delay(500)
  Aliases.browser.loginPage.projectTypeDropdownList.txtlFreshConstruction.Click();
  Log.Message("Project Type field is empty")
      }  
      
//Check that Parent Account filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxParrentAccount != null)
   {
    Log.Message("Parent Account field is not empty")
   }
  else{
    Log.Message("Parent Account field is empty")
      } 
            
//Click on the Address Line 1
if(Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxAddressLine1 != null)
{
  Log.Message("Address Line 1 is not empty")
}
else
{
  Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxAddressLine1SetText(" XYZ");
}
   
//Check that City filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxCity != null)
   {
    Log.Message("City field is not empty")
   }
  else{
    Log.Message("City field is empty")
      }    

//Check that State filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxState != null)
   {
    Log.Message("State field is not empty")
   }
  else{
    Log.Message("State field is empty")
      }  

//Check that Country/Region filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtSource != null)
   {
    Log.Message("Country/Region field is not empty")
   }
  else{
    Log.Message("Country/Region field is empty")
      }  
       
//Check that Postal Code field is not empty
  
if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxPostalCode != null)
   {
    Log.Message("Postal Code field is not empty")
   }
  else{
    Log.Message("Postal Code field is empty")
      }   
   
//Check that eLoc of STP filed is not empty 
  
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxeLocofStp != null)
   {
    Log.Message("eLoc of STP field is not empty")
   }
  else{
    Log.Message("eLoc of STP field is empty")
      } 
  
//Click on the Contact Name filed and get name from excel sheet
  Aliases.browser.loginPage.pageLeadCreation.pageLead.txtBoxContactName.Click();
  Aliases.browser.loginPage.pageLeadCreation.pageLead.txtBoxContactName.SetText(CustomerName);
  
//Click on the Job Title drop down
  Aliases.browser.loginPage.pageLeadCreation.pageLead.jobTitleDropDownBtn.Click();
  aqUtils.Delay(2000);
//Select the Job Title
  Aliases.browser.loginPage.textnodePainter.panelPainter.Click();
  
//Click on the Mobile field
  Aliases.browser.loginPage.pageLeadCreation.pageLead.txtBoxMobile.Click();
//Fill the Mobile field
  Aliases.browser.loginPage.pageLeadCreation.pageLead.txtBoxMobile.SetText(CustomerMobileNo);
  
//Click on the Customer Email field
  Aliases.browser.loginPage.pageLeadCreation.pageLead.txtBoxCustomerEmail.Click();
//Fill the Customer Email field
  Aliases.browser.loginPage.pageLeadCreation.pageLead.txtBoxCustomerEmail.SetText(CustomerEmail);

//Click on Save and Open button
  Aliases.browser.loginPage.pageLeadCreation.footerSaveAndOpen.buttonSaveAndOpen.ClickButton();
 
  aqUtils.Delay(1000);
//Click on More button
  if(Aliases.browser.loginPage.pageLeadCreation.pageLeadDetails.buttonMore.VisibleOnScreen)
  {
    Log.Checkpoint("More button is visible");
    Aliases.browser.loginPage.pageLeadCreation.pageLeadDetails.buttonMore.ClickButton();
  }
  else
  {
    Log.Message("More button is not visible");
  }

 aqUtils.Delay(1000);
//Click on the pencil icon 
  if(Aliases.browser.loginPage.pageLeadCreation.pageLead.btnEdit.VisibleOnScreen)
  {
    Log.Message("Pencil icon is visible");
    Aliases.browser.loginPage.pageLeadCreation.pageLead.btnEdit.ClickButton();
  }
  else
  {
    Log.Message("Pencil icon is not visible");
  }
  
//Verify that on Lead screen all the manditory fields are autopopulated
 //Verify that Site Name* field is not null
   if (Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.txtBoxPlaceName != null)
   {
    Log.Message("Site Name* field is not empty")
   }
  else{
    Log.Message("Site Name* field is empty")
      } 
 
 //Verify that Segment* field is not null
   if (Aliases.browser.loginPage.pageLeadCreation.pageLeadDetails.txtBoxSegment != null)
   {
    Log.Message("Segment* field is not empty")
   }
  else{
    Log.Message("Segment* field is empty")
      }
  
 //Verify that Source* field is not null
   if (Aliases.browser.loginPage.pageLeadCreation.pageLeadDetails.txtBoxSource != null)
   {
    Log.Message("Source* field is not empty")
   }
  else{
    Log.Message("Source* field is empty")
      } 

  let browser = Aliases.browser;
  let textbox = browser.loginPage.pageLeadCreation.pageLeadDetails;
  textbox.textboxCity.SetText("Ludhiana");
  textbox.txtBoxCity.Click();
  
//Verify that Postal Code* field is not null
   if (Aliases.browser.loginPage.pageLeadCreation.pageLeadDetails.txtBoxPostalCode != null)
   {
    Log.Message("Postal Code* field is not empty")
   }
  else{
    Log.Message("Postal Code* field is empty")
      } 
 
//Verify that Save button is visible on screen
  if (Aliases.browser.loginPage.pageLeadCreation.footerSaveAndOpen.btnSave.VisibleOnScreen)
   {
    Aliases.browser.loginPage.pageLeadCreation.footerSaveAndOpen.btnSave.ClickButton();
    Log.Message("In City* filed icon is clicked")
   }
  else{
    Log.Message("In City* filed icon is not clicked")
      }

      
      
           
/*      aqUtils.Delay(1000);
//Verify that Actions button is visible on screen
  if (Aliases.browser.loginPage.pageLeadCreation.pageLeadDetails.btnActions.VisibleOnScreen)
   {
    Aliases.browser.loginPage.pageLeadCreation.pageLeadDetails.btnActions.ClickButton();
    Log.Message("Actions button is visible on screen")
   }
  else{
    Log.Message("Actions button is not visible on screen")
      }
*/

  

  


  








 }



  

    
    
    
    
    
    
    
     
 
























