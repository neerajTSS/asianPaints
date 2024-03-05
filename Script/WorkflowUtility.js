 
const Browser = Aliases.browser.Page("*");
function checkTxtFieldIsNotEmpty(inputs, selectors) {
     inputs.forEach(input => {
        let ele = Browser.FindElement(selectors[input]);
        let propertyCheckResult = aqObject.CheckProperty(ele, "Text", cmpNotEqual, "");
            Log.Message(input + " is not null");
        
    });
}
module.exports.checkTxtFieldIsNotEmpty = checkTxtFieldIsNotEmpty;
 