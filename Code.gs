function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function calculateCBM(length, width, height, quantity, unit) {
  // Conversion factors to meters
  const conversionFactors = {
    mm: 0.001,
    cm: 0.01,
    inch: 0.0254,
    feet: 0.3048
  };

  if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(quantity)) {
    return 'Invalid input';
  }

  // Convert dimensions to meters based on the unit
  let factor = conversionFactors[unit];
  
  if (!factor) {
    return 'Invalid unit';
  }

  // Convert dimensions to meters
  length = length * factor;
  width = width * factor;
  height = height * factor;

  // Calculate volume in cubic meters
  let volume = length * width * height * quantity;
  return volume.toFixed(3);  // Round the result to 3 decimal places
}
