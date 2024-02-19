// Common method to read JSON file
function readJsonFile() {
  // Specify the path to your JSON file
var filePath = "C:\\Users\\ChinnamaniG\\Documents\\TestComplete 15 Projects\\BDD\\BDD\\Asian.json";

// Create a File object to read the JSON file
var file = aqFile.OpenTextFile(filePath, aqFile.faRead, aqFile.ctANSI);

// Read the entire content of the file
var jsonContent = file.ReadAll();

// Close the file
file.Close();

// Parse the JSON content into an object
var jsonObject = JSON.parse(jsonContent);

// Now you can access the properties of the JSON object
Log.Message("Value of key 'exampleKey': " + jsonObject.username);
}