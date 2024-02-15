function segment3()
{
  //Clicks the 'DesktopWindowXamlSource' object.
  Aliases.explorer.wndShell_TrayWnd.DesktopWindowXamlSource.Click(1409, 28);
  //Checks whether the 'value' property of the Aliases.browser.pageLogon.leadContainer.sectionPage9Cont.textboxDropdownlistbox9a0feb3afa object equals 'Color Protect 2'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.sectionPage9Cont.textboxDropdownlistbox9a0feb3afa, "value", cmpEqual, "Color Protect 2");
  //Checks whether the 'value' property of the Aliases.browser.pageLogon.leadContainer.sectionPage9Cont.textboxDropdownlistbox4cbaea52a0 object equals 'PC Segment.'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.sectionPage9Cont.textboxDropdownlistbox4cbaea52a0, "value", cmpEqual, "PC Segment.");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=%2fSAP_UI_CT%2fMain%2froot.uiccwoc&rootWindow=X&redirectUrl=%2fsap%2fpublic%2fbyd%2fruntime&supressAutoLogon=true#Nav/1/eyJpbnBvcnQiOiJRdWlja0NyZWF0ZSIsImNvbnRleHQiOm51bGwsInRhcmdldCI6Ii9CWURfQ09EL1NhbGVzT25EZW1hbmQvTWFya2V0aW5nL1Byb3NwZWN0L0NPRF9Na3RfUHJvc3BlY3QuUUMudWljb21wb25lbnQiLCJ3aW5JZCI6ImNkNWVmYjg1ZDZiZTFkNTkyNmE4NDAwYWRjYzdkZmFkIn0=");
  Aliases.browser.BrowserWindow.Maximize();
  //Drags the 'panelContent17' object.
  Aliases.browser.pageLogon.leadContainer.sectionPage9Cont.panelContent17.Drag(1247, 170, 7, -118);
  //Sets the text 'Delhi' in the 'placeNameTextBox' text editor.
  Aliases.browser.pageLogon.leadContainer.placeNameTextBox.SetText("Delhi");
  //Enters '[Enter]' in the 'placeNameTextBox' object.
  Aliases.browser.pageLogon.leadContainer.placeNameTextBox.Keys("[Enter]");
  //Clicks the 'searchSiteButton' button.
  Aliases.browser.pageLogon.leadContainer.searchSiteButton.ClickButton();
  //Clicks the 'addressCheckBox' control.
  Aliases.browser.pageLogon.leadContainer.addressCheckBox.Click();
  //Drags the 'panelContent17' object.
  Aliases.browser.pageLogon.leadContainer.sectionPage9Cont.panelContent17.Drag(1245, 108, 1, 205);
 
  //Drags the 'panelContent17' object.
  Aliases.browser.pageLogon.leadContainer.sectionPage9Cont.panelContent17.Drag(1250, 347, -31, 179);
  //Clicks the 'DesktopWindowXamlSource' object.
  Aliases.explorer.wndShell_TrayWnd.DesktopWindowXamlSource.Click(1353, 52);
}