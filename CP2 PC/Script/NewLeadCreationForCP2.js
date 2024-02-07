function Lead_Creation_CP2()
{
  //Maximizes the specified Window object.
  //Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeMenu2' object.
  Aliases.browser.pageLogon.headerMainshellHdr.textnodeMenu2.Click(20, 33);
  //Clicks the 'textnodeText14' control.
  Aliases.browser.pageLogon.asideMainshellContainerPane.headerSales2.textnodeText14.Click();
  //Clicks the 'linkLink5' link.
  Aliases.browser.pageLogon.asideMainshellContainerPane.linkLink5.Click();
  var TimeoutValue;
  TimeoutValue = Options.Run.Timeout;
  Options.Run.Timeout = 3000;
  //Clicks the 'buttonCreate' button.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage3Cont.buttonCreate.ClickButton();
  //Clicks the 'textbox_PlaceName' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textbox_PlaceName.Click();
  Options.Run.Timeout = TimeoutValue;
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/1/eyJjb250ZXh0IjpudWxsLCJ0YXJnZXQiOiIvQllEX0NPRC9TYWxlc09uRGVtYW5kL01hcmtldGluZy9Qcm9zcGVjdC9DT0RfTWt0X1Byb3NwZWN0LlFDLnVpY29tcG9uZW50Iiwid2luSWQiOiI0Y2Y3YTAyNWU1OTkyMTJjZTgxYmM3YmE4NDc4NTZiZiJ9");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textbox_PlaceName' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textbox_PlaceName.Click();
  Options.Run.Timeout = 3000;
  //Sets the text 'Haryana' in the 'textbox_PlaceName' text editor.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textbox_PlaceName.SetText("Haryana");
  //Clicks the 'button_SearchSite' button.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.button_SearchSite.ClickButton();
  Options.Run.Timeout = TimeoutValue;
  //Checks whether the 'VisibleOnScreen' property of the Aliases.browser.pageLogon.FindElement("//section[@role='main']//div[contains(@class, 'sapClientMDiv')]//section/div[contains(@class, 'sapClientMDiv')]//div[contains(@class, 'sapClientMDiv')]//div[contains(@class, 'sapClientMDiv')]/div[contains(@class, 'sapClientMDiv')]") object equals True.
  aqObject.CheckProperty(Aliases.browser.pageLogon.FindElement("//section[@role='main']//div[contains(@class, 'sapClientMDiv')]//section/div[contains(@class, 'sapClientMDiv')]//div[contains(@class, 'sapClientMDiv')]//div[contains(@class, 'sapClientMDiv')]/div[contains(@class, 'sapClientMDiv')]"), "VisibleOnScreen", cmpEqual, true);
  //Posts an information message to the test log.
  Log.Message("MMI Suggested Addresses has been Populated", "");
  //Clicks the 'panelCheckbox' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage3Cont.panelCheckbox.Click();
  //Drags the 'DesktopWindowXamlSource' object.
  Aliases.explorer.wndShell_SecondaryTrayWnd.DesktopWindowXamlSource.Drag(1226, 26, -2, 6);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/1/eyJjb250ZXh0IjpudWxsLCJ0YXJnZXQiOiIvQllEX0NPRC9TYWxlc09uRGVtYW5kL01hcmtldGluZy9Qcm9zcGVjdC9DT0RfTWt0X1Byb3NwZWN0LlFDLnVpY29tcG9uZW50Iiwid2luSWQiOiI0Y2Y3YTAyNWU1OTkyMTJjZTgxYmM3YmE4NDc4NTZiZiJ9");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeButton' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textnodeButton.Click();
  //Clicks the 'panel241Infrastructure' control.
  Aliases.browser.pageLogon.textnode1001Ports.panel241Infrastructure.Click();
  //Clicks the 'textnodeButton2' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textnodeButton2.Click();
  //Clicks the 'panelControlPanelBoards' control.
  Aliases.browser.pageLogon.textnodeEngineeringContractors.panelControlPanelBoards.Click();
  //Clicks the 'textnodeButton3' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textnodeButton3.Click();
  //Clicks the 'panelCold6Months' control.
  Aliases.browser.pageLogon.textnodeCold6Months.panelCold6Months.Click();
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeButton4' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textnodeButton4.Click();
  //Clicks the 'textnodeItem553' control.
  Aliases.browser.pageLogon.textnodeApplicatorPaintWpcc.textnodeItem553.Click();
  //Clicks the 'textnodeButton5' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage1Cont.textnodeButton5.Click();
  //Clicks the 'panelFreshConstruction' control.
  Aliases.browser.pageLogon.textnodeFreshConstruction.panelFreshConstruction.Click();
  //Clicks the 'textnodeOpenPicker' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textnodeOpenPicker.Click();
  //Clicks the 'textnode5' control.
  Aliases.browser.pageLogon.textnode5.Click();
  //Clicks the 'textboxInputfieldsjuu1vlax4Kcrsu' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfieldsjuu1vlax4Kcrsu.Click();
  Options.Run.Timeout = 3000;
  //Sets the text ' NA' in the 'textboxInputfieldsjuu1vlax4Kcrsu' text editor.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfieldsjuu1vlax4Kcrsu.SetText(" NA");
  Options.Run.Timeout = TimeoutValue;
  //Clicks the 'textboxInputfielde8lkgqzhyaW9cxb' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfielde8lkgqzhyaW9cxb.Click();
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxInputfielde8lkgqzhyaW9cxb' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfielde8lkgqzhyaW9cxb.Click();
  //Sets the text 'User' in the 'textboxInputfielde8lkgqzhyaW9cxb' text editor.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfielde8lkgqzhyaW9cxb.SetText("User");
  //Enters '[Tab]' in the 'textboxInputfielde8lkgqzhyaW9cxb' object.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfielde8lkgqzhyaW9cxb.Keys("[Tab]");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeButton10' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textnodeButton10.Click();
  //Clicks the 'textnodeItem434' control.
  Aliases.browser.pageLogon.textnodePainter.textnodeItem434.Click();
  //Clicks the 'textboxInputfield2nstqsd8nqgweb0' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfield2nstqsd8nqgweb0.Click();
  //Sets the text '9897098970' in the 'textboxInputfield2nstqsd8nqgweb0' text editor.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionPage2Cont.textboxInputfield2nstqsd8nqgweb0.SetText("9897098970");
  //Clicks the 'textboxLink966eece3d8ad076de589c' control.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionDetail0Cont.textboxLink966eece3d8ad076de589c.Click();
  //Sets the text 'xyz@yopmail.com' in the 'textboxLink966eece3d8ad076de589c' text editor.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.sectionDetail0Cont.textboxLink966eece3d8ad076de589c.SetText("xyz@yopmail.com");
  Options.Run.Timeout = 3000;
  //Clicks the 'buttonSaveAndOpen' button.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.footerSaveAndOpen.buttonSaveAndOpen.ClickButton();
  Options.Run.Timeout = 5000;
  //Clicks the 'buttonClose' button.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.buttonClose.ClickButton();
  Options.Run.Timeout = TimeoutValue;
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  Options.Run.Timeout = 5000;
  //Clicks the 'buttonMboxBtn0' button.
  Aliases.browser.pageLogon.footerYes.buttonMboxBtn0.ClickButton();
  //Clicks the 'buttonClose' button.
  Aliases.browser.pageLogon.sectionMainshellContainerCanvas.buttonClose.ClickButton();
  Options.Run.Timeout = TimeoutValue;
}