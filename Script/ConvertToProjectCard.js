//var webElementWaits = require("WebElementWaits");
//function ConvertToProjectCardPage(){
//  
//  var container = Aliases.browser.pageLogon.leadContainer;
//  
//  aqObject.CheckProperty(container.buttonActions, "contentText", cmpEqual, "Actions");
//  Aliases.browser.pageLogon.Keys("[F5]");
//  Delay(10000);
//  webElementWaits.waitForElementVisible(container.buttonActions).ClickButton();
//  
//  aqObject.CheckProperty(container.buttonConvertToProjectCard, "contentText", cmpEqual, "Convert to Project Card");
//  webElementWaits.waitForElementVisible(container.buttonConvertToProjectCard).ClickButton();
//  
//  aqObject.CheckProperty(container.SantacruzTextBox, "value", cmpEqual, "Santacruz");
//  aqObject.CheckProperty(container.placeNameTextBox, "value", cmpEqual, "Bath");
//  aqObject.CheckProperty(container.nameTextBox, "value", cmpEqual, "Chinnamani");
//  aqObject.CheckProperty(container.bathroomCount, "value", cmpEqual, "5");
//  aqObject.CheckProperty(container.applicator, "value", cmpEqual, "Applicator (Paint/WPCC)");
//  webElementWaits.waitForElementVisible(container.saveAndOpenButton).ClickButton();  
//}
//module.exports.ConvertToProjectCardPage = ConvertToProjectCardPage;


let workflowUtility = require("WorkflowUtility");
 
const selectors = {
  autoPopulatedFields: {
    
        documentType: "//span[@title='Document Type']/following-sibling::div//input",
        stp: "//span[@title='STP']/following-sibling::div//input",
        parentAccount: "//span[@title='Parent Account']/following-sibling::div//input",
        mainContact: "//span[@title='Main Contact']/following-sibling::div//input",
        source: "//span[@title='Source']/following-sibling::div//input",
       
  },
      
      buttons :
      {
        saveAndOpen:"//button[.='Save and Open']",
      },
     
};
 
function ConvertToProjectCard()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
 
 let value = ['documentType','stp','parentAccount','mainContact','source'];
 
 workflowUtility.checkTxtFieldIsNotEmpty(value, selectors.autoPopulatedFields)
 
  Page.FindElement(selectors.buttons.saveAndOpen).Click();
}
 
module.exports.ConvertToProjectCard = ConvertToProjectCard;