function validateDropdownWithExcel() {
  
    let dropdownObject = Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton;
    Delay(1000);

    // Log: Clicking on the dropdown
    Log.Message("Clicking on the dropdown");
    dropdownObject.Click();
    let dropdownlist = Aliases.browser.pageLogon.leadContainer.list;
// Get all the items from the dropdown
var dropdownItems = dropdownlist.Items;

// Log all the data
Log.Message("Dropdown Items:");
for (var i = 0; i < dropdownItems.Count; i++) {
    Log.Message(dropdownItems.Item(i).Text);
}

}
