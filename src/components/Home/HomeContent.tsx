import React from 'react'

const HomeContent = () => {
  return (
    <div>

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
