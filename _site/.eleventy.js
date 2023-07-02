module.exports = function(eleventyConfig) {
    // If you also have HTML files to pass through the build
    eleventyConfig.addPassthroughCopy("*.html");
  
    // Copy the CSS directory
    eleventyConfig.addPassthroughCopy("css");
  
    // Copy the CSS files in the project root
    eleventyConfig.addPassthroughCopy("*.css");
  
    // Copy JavaScript files in the project root
    eleventyConfig.addPassthroughCopy("*.js");
  
    // Copy images
    eleventyConfig.addPassthroughCopy("newimg");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("galleryimg");
  };
  