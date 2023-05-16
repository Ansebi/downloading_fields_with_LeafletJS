// colorDetection.js

// Function to convert latlng to pixel coordinates
function latLngToPixelCoordinates(latlng) {
    // Convert latlng to pixel coordinates relative to the map container
    var point = map.latLngToContainerPoint(latlng);

    // Return the pixel coordinates as an object with x and y properties
    return { x: point.x, y: point.y };
}

async function getPixelColor(pixelCoordinates) {
    // Create a canvas element
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // Set the canvas dimensions to match the map container
    canvas.width = map.getSize().x;
    canvas.height = map.getSize().y;
    // Get an image of the map
    var img = await getMapScreenshot();
    // Wait for the image to load
    await new Promise(resolve => {
        img.onload = resolve;
        img.onerror = () => {
            throw new Error('Failed to load image');
        };
    });
    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0);
    // Get the pixel data for the specified coordinates
    var pixelData = ctx.getImageData(pixelCoordinates.x, pixelCoordinates.y, 1, 1).data;
    // Extract the RGB color values from the pixel data
    var r = pixelData[0];
    var g = pixelData[1];
    var b = pixelData[2];
    // Return the RGB color as a string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


async function getMapScreenshot() {
    try {
        // Get a reference to the map container element
        var mapContainer = document.querySelector('#map');
        // Use html2canvas to take a screenshot of the map container
        var canvas = await html2canvas(mapContainer);
        // Create an image element
        var img = new Image();
        // Set the image source to the data URL of the canvas
        img.src = canvas.toDataURL();
        // Wait for the image to load
        await new Promise(resolve => {
            img.onload = resolve;
            img.onerror = () => {
                throw new Error('Failed to load image');
            };
        });
        // Return the image
        return img;
    } catch (error) {
        console.error(error);
    }
}

async function handleButtonClick() {
    // Get the pixel coordinates
    const pixelCoordinates = latLngToPixelCoordinates(latlng);
    
    // Get the RGB color of the pixel at the specified coordinates
    const rgbColor = await getPixelColor(pixelCoordinates);
    
    // Display the RGB color
    console.log(`RGB Color: ${rgbColor}`);
}

// Function to get the RGB color of a clicked point
export function getClickedPointColor(latlng) {
    // Convert latlng to pixel coordinates
    var pixelCoordinates = latLngToPixelCoordinates(latlng);

    // Get the RGB color of the pixel at the specified coordinates
    var rgbColor = getPixelColor(pixelCoordinates);

    return rgbColor;
}
