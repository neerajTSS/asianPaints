function ConvertToProjectCard_Page(OverallPaintPOT,PaintPotTY)
{
  //check that Document Type field should not be null
  if (Aliases.browser.pageLogon.leadContainer.placeNameTextBox != null)
{
  Log.Message("Document Type field is not empty")
  }
  else{
  Log.Message("Document Type field is empty")
  }
 
  //check that STP field should not be null
  if (Aliases.browser.pageLogon.leadContainer.converToProjectCard.stpField != null)
{
  Log.Message("STP field is not empty")
  }
  else{
  Log.Message("STP field is empty")
  }
//check that Parent Account* field should not be null
  if (Aliases.browser.pageLogon.leadContainer.converToProjectCard.parentAccountBox != null)
{
  Log.Message("Parent Account* field is not empty")
  }
  else{
  Log.Message("Parent Account* field is empty")
  }
 
//check that Main Contact field should not be null
  if (Aliases.browser.pageLogon.leadContainer.converToProjectCard.mainContactBox != null)
{
  Log.Message("Main Contact field is not empty")
  }
  else{
  Log.Message("Main Contact field is empty")
  }
 
  //check that Source field should not be null
  if (Aliases.browser.pageLogon.leadContainer.converToProjectCard.sourceBox != null)
{
  Log.Message("Source field is not empty")
  }
  else{
  Log.Message("Source field is empty")
  } 
//check that Segment* field should not be null
  if (Aliases.browser.pageLogon.leadContainer.converToProjectCard.segmentBox != null)
{
  Log.Message("Segment* field is not empty")
  }
  else{
  Log.Message("Segment* field is empty")
  }
 
//check that Project Type* field should not be null
  if (Aliases.browser.pageLogon.leadContainer.converToProjectCard.projectTypeBox != null)
{
  Log.Message("Project Type* field is not empty")
  }
  else{
  Log.Message("Project Type* field is empty")
  }
 
  //Click on the Delivering Plant* field
  Aliases.browser.pageLogon.leadContainer.converToProjectCard.deliveringPlantDropdownButton.Click();
  //select the first delivering plant name
  Aliases.browser.pageLogon.leadContainer.converToProjectCard.txtAsianPaintsLtd1501.Click();
  Delay(1000)
//click on the Project Classification field 
  Aliases.browser.pageLogon.leadContainer.converToProjectCard.projectClassificationDropdownButton.Click();
//Select the '1.Very low POT project (Lifetime POT between 1-2 Lakhs)'
  Aliases.browser.pageLogon.leadContainer.converToProjectCard.projectClassificationSelectedTxt.Click();
 
  Delay(1000)
  //check that after selecting the Project Classification 'Please select all the product categories applicable for the site.' should be visible
Aliases.browser.pageLogon.leadContainer.converToProjectCard.productCategoriesTxt.Click();
if(Aliases.browser.pageLogon.leadContainer.converToProjectCard.productCategoriesTxt.VisibleOnScreen)
{
   Log.Message("Please select all the product categories applicable for the site. txt is visible on screen");
   //click on Toggle button of Paint
   Aliases.browser.pageLogon.leadContainer.converToProjectCard.paintToggleButton.Click();
}
  else
   {
    Log.Message("Please select all the product categories applicable for the site. txt is not visible on screen"); 
   }
//Fill the 'Overall Paint POT.(INR)' field
   Aliases.browser.pageLogon.leadContainer.converToProjectCard.paintPot.SetText(OverallPaintPOT);
   Delay(1000)
//Fill the 'Paint POT TY % (Enter numeric value only, eg: type "30" instead of "30%")' field
Aliases.browser.pageLogon.leadContainer.converToProjectCard.PaintPotTY.SetText(PaintPotTY);
//pressing the Enter key    
  Aliases.browser.pageLogon.leadContainer.converToProjectCard.PaintPotTY.Keys("[Enter]");
//check that 'Paint POT TY(INR)' field is not null
if (Aliases.browser.pageLogon.leadContainer.converToProjectCard.PaintPotTyInr != null)
{
  Log.Message("Paint POT TY(INR) field is not empty")
  }
  else{
  Log.Message("Paint POT TY(INR) field is empty")
  }
 
//Click on Save and Open button
Aliases.browser.pageLogon.leadContainer.converToProjectCard.buttonSaveAndOpen.ClickButton();
Log.Message("Save and Open button is clicked");

 
 
}