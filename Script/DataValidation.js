function validateDropdownWithExcel() {
    // Click on subSegmentDropdownButton
    let dropdownObject = Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton;
    Delay(1000);
    // Log Step 1: Click on the dropdown
    Log.Message("Clicking on the dropdown");
    dropdownObject.Click();

    
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Down]"); 
    // Log Step 3: Get the text value
    let textValue1 = dropdownObject.wText; // Replace with the actual method in TestComplete to get the text
    Log.Message("Obtained text value: " + textValue1);

    // Log Step 4: Verify that the value is equal to the given value
    let expectedValue1 = "Road and Bridges";
    if (aqObject.CompareProperty(textValue1, cmpEqual, expectedValue1)) {
        Log.Message("Verified text value against expected value");
    } else {
        Log.Warning(" Mismatch with expected value");
    }

    
   Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Down]"); // Replace with the actual method in TestComplete to press the down arrow again

    // Log Step 6: Get the text value
    let textValue2 = dropdownObject.wText; // Replace with the actual method in TestComplete to get the text
    Log.Message("Step 6: Obtained text value: " + textValue2);

    // Log Step 7: Verify that the value is equal to the given value
    let expectedValue2 = "PFP";
    if (aqObject.CompareProperty(textValue2, cmpEqual, expectedValue2)) {
        Log.Message("Step 7: Verified text value against expected value");
    } else {
        Log.Warning("Step 7: Mismatch with expected value");
    }
}
