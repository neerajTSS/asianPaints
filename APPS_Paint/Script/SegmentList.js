﻿function SegmentList() 
 {

  // Load Excel driver
    var excelDriver= DDT.ExcelDriver("C:\\Users\\Komaljit.Kaur\\OneDrive-Technossus LLC\\Desktop.x1sx","Dropdown_Data");
    Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentBox.Click();
    
 //check if validation has already performed
   if(excelDriverExecuted){
     Log.Warning("Validation already executed.exiting function.");
     return;
   }

//Find all elements
  var elements=Aliases.browser.loginPage.FindElement("#dropdownlistbox8d1033a88ed231847248f1761eeea1c7_1260-popup-cont");
  //Load excel values into an array
  var excelValues = [];
  while (!excelDriver.EOF()){
    var excelValues=excelDriver.Value(0);
    excelValues.push(excelValues);
    excelDriver.Next();
  }
//Iterate through elements
  for(var i=0;i<elements.length;i++)
  {
  //get excel text
  var elementText=element[i].contentText;
  var found= false;  
//Iterate through excel values array
  for(var j=0;j<elements.length;j++)
  {
    //check element text matches excel value
    if(elementText==excelValues[j])
    {
    Log.Message("excel value is present in dropdown" + "dropdown element is :"+ elementText);
    found=true;
    break;  
    }
  }
  //if element txt not found
  if(!found){
    Log.Warning("validation failed: dropdown element" +elementText +"not match any value in excel");
  }
  }
//set the flag to indicate that the validation has been executed
  excelDriverExecuted = true;
//close excel driver
 DDT.CloseDriver(excelDriver.Name);
 }
