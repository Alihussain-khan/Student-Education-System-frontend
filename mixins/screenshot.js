import html2canvas from "html2canvas";
export default function screenshot () {
      let  frames = [];
      let intervalId;



    async function takeScreenshot() {
            intervalId = setInterval(takeScreenshotOnLoop , 10000)
    }  

    async function takeScreenshotOnLoop() {
        const { scrollX, scrollY, innerWidth, innerHeight } = window;
    
        // Calculate the visible area after scrolling
        const visibleArea = {
            x: scrollX,
            y: scrollY,
            width: innerWidth,
            height: innerHeight
        };
    
        // Capture the screenshot of the visible area
        const canvas = await html2canvas(document.documentElement, visibleArea);
    
        const imageUrl = canvas.toDataURL(); // Get the base64 encoded image URL
        frames.push(imageUrl); // Store the image URL in the frames array
    
        console.log('Screenshot taken', frames); // Output frames array for debugging or tracking
    
        // Call takeScreenshotOnLoop again after a delay
    }
    

     function stopCapture() {
        clearInterval(intervalId);
    }
    return {
        takeScreenshot,
        stopCapture,
        frames,
    }
}