function subsegment()
{
  //Checks whether the 'value' property of the Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton, "value", cmpEqual, "");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=%2fSAP_UI_CT%2fMain%2froot.uiccwoc&rootWindow=X&redirectUrl=%2fsap%2fpublic%2fbyd%2fruntime#Nav/1/eyJpbnBvcnQiOiJRdWlja0NyZWF0ZSIsImNvbnRleHQiOm51bGwsInRhcmdldCI6Ii9CWURfQ09EL1NhbGVzT25EZW1hbmQvTWFya2V0aW5nL1Byb3NwZWN0L0NPRF9Na3RfUHJvc3BlY3QuUUMudWljb21wb25lbnQiLCJ3aW5JZCI6ImVlNjFhNTA2ZGQ4NzY2NjdlNWU5MzUyODg4NzhmZDk0In0=");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'subSegmentDropdownButton' control.
  Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLogon.textnodeEngineeringContractors.panelEngineeringContractors2 object equals 'Engineering Contractors'.
  aqObject.CheckProperty(Aliases.browser.pageLogon.textnodeEngineeringContractors.panelEngineeringContractors2, "contentText", cmpEqual, "Engineering Contractors");
  //Clicks the 'panelEngineeringContractors2' control.
  Aliases.browser.pageLogon.textnodeEngineeringContractors.panelEngineeringContractors2.Click();
}