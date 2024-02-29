var webElementWaits = require("WebElementWaits");
function ConvertToProjectCardPage(){
  
  var container = Aliases.browser.pageLogon.leadContainer;
  
  aqObject.CheckProperty(container.buttonActions, "contentText", cmpEqual, "Actions");
  Aliases.browser.pageLogon.Keys("[F5]");
  Delay(10000);
  webElementWaits.waitForElementVisible(container.buttonActions).ClickButton();
  
  aqObject.CheckProperty(container.buttonConvertToProjectCard, "contentText", cmpEqual, "Convert to Project Card");
  webElementWaits.waitForElementVisible(container.buttonConvertToProjectCard).ClickButton();
  
  aqObject.CheckProperty(container.SantacruzTextBox, "value", cmpEqual, "Santacruz");
  aqObject.CheckProperty(container.placeNameTextBox, "value", cmpEqual, "Bath");
  aqObject.CheckProperty(container.nameTextBox, "value", cmpEqual, "Chinnamani");
  aqObject.CheckProperty(container.bathroomCount, "value", cmpEqual, "5");
  aqObject.CheckProperty(container.applicator, "value", cmpEqual, "Applicator (Paint/WPCC)");
  webElementWaits.waitForElementVisible(container.saveAndOpenButton).ClickButton();  
}
module.exports.ConvertToProjectCardPage = ConvertToProjectCardPage;