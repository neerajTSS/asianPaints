function LogOut()
{
  //Opens the specified URL in a running instance of the specified browser.
  //Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime#Nav/0/eyJfc1dvY0lkIjpudWxsLCJfc1ZpZXdJZCI6bnVsbCwiX3NQZXJmb3JtYW5jZVdvY0lkIjoiSG9tZSIsIl9zUGVyZm9ybWFuY2VWaWV3SWQiOiJIb21lIiwiX3NDb250ZXh0SWQiOiI2OTRmMTU2YWQ1MzVlN2RhZGVhN2JiZDY3YTQ3NGJkZSJ9");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeCustomer' control.
  Aliases.browser.pageLogon.headerMainshellHdr.textnodeCustomer.Click();
  //Clicks the 'buttonButton116' button.
  Aliases.browser.pageLogon.footerHelp.buttonButton116.ClickButton();
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}
