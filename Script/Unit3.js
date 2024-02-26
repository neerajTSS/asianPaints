function subsegment()
{
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageLogon.leadContainer.sectionDetail0Cont.textnodeIcon146 object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.sectionDetail0Cont.textnodeIcon146, "ObjectLabel", cmpEqual, "");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=%2fSAP_UI_CT%2fMain%2froot.uiccwoc&rootWindow=X&redirectUrl=%2fsap%2fpublic%2fbyd%2fruntime#Nav/1/eyJ0aGluZ3BhcmFtcyI6eyJLZXkiOiJDOUVGM0JGRUMxRTcxRUVFQjU4QkM1ODlCMDcyOUZDQiIsIlNvdXJjZVBhdGgiOiIvUm9vdC8kVGhpbmdIZWFkZXIvSUQifSwiaW5Qb3J0IjoiSW5zcGVjdCIsInRhcmdldCI6Ii9CWURfQ09EL1NhbGVzT25EZW1hbmQvTWFya2V0aW5nL1Byb3NwZWN0L0NPRF9Na3RfUHJvc3BlY3QuVEkudWljb21wb25lbnQiLCJ3aW5JZCI6IjZkMDk4ZTk5MThiYWM5MjQ1ODMwZjRmOTcyOTExYzg1In0=");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeIcon146' control.
  
  //Clicks the 'panelItem386SelectmultiCbbg' control.
  Aliases.browser.pageLogon.panelItem386SelectmultiCbbg.Click();
  //Clicks the 'buttonActions' button.
  Aliases.browser.pageLogon.leadContainer.sectionDetail5Cont.buttonActions.ClickButton();
}