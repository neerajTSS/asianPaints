var JsonReader = require("JsonReader");
var ExcelReader = require("ReadDataFromExcel");
var webElementWaits = require("WebElementWaits");

function QuoteAndPRFPage(){
    var jsonFilePath = "Data.json";
    var jsonData = JsonReader.readJsonFile(jsonFilePath);
    var path = jsonData.Excelpath;
    var sheetName = jsonData.ExcelSheetName;
    var ExcelData = ExcelReader.readDataUsingHeaderFromExcel(path, sheetName, rowIndex = 2);
    var ProjectSiteDiscount = ExcelData.ProjectSiteDiscount;
    var Quantity = ExcelData.Quantity;
    var SKU = ExcelData.SKU;
    var Dealer = ExcelData.Dealer;
    var container = Aliases.browser.pageLogon.leadContainer;
    var element = container.sectionDetail1Cont.WaitProperty("contentDocument.readyState", "complete");
  aqObject.CheckProperty(container.sectionDetail1Cont.panelQuotePrf, "contentText", cmpEqual, "Quote & PRF");
  webElementWaits.waitForElementVisible(container.sectionDetail1Cont.panelQuotePrf).Click();
  
  aqObject.CheckProperty(container.sectionDetail1Cont.buttonNew, "contentText", cmpEqual, "New");
  webElementWaits.waitForElementVisible(container.sectionDetail1Cont.buttonNew).ClickButton();
  
  aqObject.CheckProperty(webElementWaits.waitForElementVisible(container.sectionDetail2Cont.buttonMore2), "contentText", cmpEqual, "More");
  webElementWaits.waitForElementVisible(container.sectionDetail2Cont.buttonMore2).ClickButton();
  
  webElementWaits.waitForElementVisible(container.sectionDetail2Cont.textboxProjectSiteDiscount).Click();
  
  webElementWaits.waitForElementVisible(container.sectionDetail2Cont.textboxProjectSiteDiscount).SetText(ProjectSiteDiscount);
  
  webElementWaits.waitForElementVisible(container.sectionDetail2Cont.textnodeObjectvalueselectorxVnsf).Click();
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.section1.buttonSearch).ClickButton();
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.formPanevariantf6dozvvwKeokhajys.searchboxPanevariantf6dozvvwKeok).SetText(Dealer);
  Aliases.browser.pageLogon.formPanevariantf6dozvvwKeokhajys.searchboxPanevariantf6dozvvwKeok.Keys("[Enter]");
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.panel299199).Click();
  aqObject.CheckProperty(webElementWaits.waitForElementVisible(container.sectionDetail2Cont.buttonAdd), "contentText", cmpEqual, "Add");
  webElementWaits.waitForElementVisible(container.sectionDetail2Cont.buttonAdd).ClickButton();
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.sectionProduct.textnodeObjectvalueselector7csrh).Click();
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.section1.buttonSearch).ClickButton();
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.formPanevariantf6dozvvwKeokhajys.searchboxPanevariantf6dozvvwKeok).SetText(SKU);
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.textnodeAlpc101cpfl).Click();
  aqObject.CheckProperty(webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.footerAdd.buttonButton143), "contentText", cmpEqual, "Add");
  webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.footerAdd.buttonButton143).ClickButton();
  aqObject.CheckProperty(webElementWaits.waitForElementVisible(container.sectionDetail2Cont.cellListdefintionxg7irgv1uaqrier), "contentText", cmpEqual, "Quantity");
  webElementWaits.waitForElementVisible(container.sectionDetail2Cont.textboxInputfield4qSpgeu0ca6lSzq).Click();
  webElementWaits.waitForElementVisible(container.sectionDetail2Cont.textboxInputfield4qSpgeu0ca6lSzq).SetText(Quantity);
  aqObject.CheckProperty(webElementWaits.waitForElementVisible(container.sectionDetail2Cont.buttonGetPrice), "contentText", cmpEqual, "Get Price\nTriggers external price and free goods determination including product availability check (ATP) and credit status if applicable.");
   webElementWaits.waitForElementVisible(container.sectionDetail2Cont.buttonGetPrice).ClickButton();
   container.sectionDetail2Cont.buttonGetPrice.WaitProperty("contentDocument.readyState", "complete");
   webElementWaits.waitForElementVisible(container.buttonActions).ClickButton();
   aqObject.CheckProperty(webElementWaits.waitForElementVisible(Aliases.browser.pageLogon.buttonSubmitForApproval), "contentText", cmpEqual, "Submit for Approval");
   Aliases.browser.pageLogon.buttonSubmitForApproval.ClickButton();
}
module.exports.QuoteAndPRFPage = QuoteAndPRFPage;