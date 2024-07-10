import React from 'react'

const HomeContent = () => {
  return (
    <div>
        {/* Hero Section */}
  <section id="hero">
    <h1>Effortlessly Resize Images and Convert Text Online</h1>
    <p>Maintain quality, save time, and enhance productivity with our free tools.</p>
    <button>Get Started Now</button>
  </section>

  {/* Features Section  */}
  <section id="features">
    <h2>Our Features</h2>
    <div>
      <h3>Image Resizer</h3>
      <p>Resize photos and images without compromising on quality.</p>
      <p>Supported Formats: JPEG, JPG, PNG, WEBP</p>
      <ul>
        <li>Publish images on your website for faster loading times.</li>
        <li>Send images via email attachments.</li>
        <li>Post photos on social media platforms like Facebook, Instagram, and more.</li>
      </ul>
    </div>
    <div>
      <h3>Text Tools</h3>
      <p>Word Counter: Easily count the number of words in your text.</p>
      <p>Text to Bold: Convert your text to bold effortlessly.</p>
      <p>Other Conversions: Various text conversion options available.</p>
    </div>
  </section>

  {/* How It Works Section */}
  <section id="how-it-works">
    <h2>How It Works</h2>
    <ol>
      <li>Visit our website and upload your image or text.</li>
      <li>Select the desired output (resize image or convert text).</li>
      <li>Download your optimized file instantly.</li>
    </ol>
  </section>

  {/* Benefits Section */}
  <section id="benefits">
    <h2>Why Choose Us</h2>
    <ul>
      <li>No Quality Loss: Resize images without compromising on quality.</li>
      <li>User-Friendly: Simple and intuitive interface for a seamless experience.</li>
      <li>Free and Online: No need to install software; everything is done online.</li>
    </ul>
  </section>

  {/* Use Cases Section  */}
  <section id="use-cases">
    <h2>Use Cases</h2>
    <div>
      <h3>For Websites</h3>
      <p>Optimize images for faster page loading.</p>
    </div>
    <div>
      <h3>For Social Media</h3>
      <p>Perfectly sized images for Facebook, Instagram, LinkedIn, etc.</p>
    </div>
    <div>
      <h3>For Documents</h3>
      <p>Include resized images in Word or PDF documents to reduce file size.</p>
    </div>
    <div>
      <h3>For Auctions</h3>
      <p>Create optimized photos for eBay and other auction sites.</p>
    </div>
  </section>

   {/* Testimonials Section  */}
  <section id="testimonials">
    <h2>User Reviews</h2>
    <blockquote>Fantastic tool! Easy to use and no quality loss. - John Doe</blockquote>
    <blockquote>Perfect for resizing images for my blog. - Jane Smith</blockquote>
  </section>
    </div>
  )
}

export default HomeContent
