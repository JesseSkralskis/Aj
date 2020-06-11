**Client Tutoring Site**

I have a client who has a math tutoring business. Most of his students would come from word of mouth, but he wanted to expand his business and create a web site that would attract more students. He wanted to be able to change content but has no coding experience. He also wanted a booking system that would allow users to book appointments from the web site and send him an email notification when the appointment was booked, I did some research on the best way to tackle this job and decided to build his site using the JAM stack. I used contentful as the cms Gatsby for building the site and Netlify to deploy the site. I also used Web hooks within Netlify and Contentful that allowed when my client changes content within Contentful it automatically rebuilds the repository rebuilds and then deploys in Netlify.

The site consists of the Landing page with a nav bar to the different pages of the site. The slogan within the card was decided on by the client who also had input on the color palette.

The background picture and the slogan header and paragraph below can all be changed very simply within the Contentful cms whenever the client decides by just dragging and dropping photos or editing the text.

![alt_text](/src/images/landing.png "image_tooltip")

The about me page gives information about my clients credentials and tells the story of why students should choose him as their math tutor. Again the text and the phota can be changed at any time by my client within Contentful.

![alt_text](/src/images/about.png "image_tooltip")

The client wanted to add a page that displayed all of the different services he offered. Me and him discussed how he wanted the offerings to be listed and appear on the page as well as the photo. And He was happy to have the flexibility to also be able to change this as needed without having to pay me an updating fee.

![alt_text](/src/images/offerings.png "image_tooltip")

The Client was very specific about how he wanted the booking system to work. It had to be a system that allowed him to designate open times for tutoring that when filled would then be rendered unavailable to other students once booked. He also wanted his students to have the ability to use Paypal for payments. After considering building this functionality myself I did some research and found a very useful plugin called Calendry. For a small fee all the functionality the client requested was already included in Calendry’s features. I just needed to embed the interface directly into the site and the plugin would take care of the rest. My client was very happy with this option because the price for me to build an entire booking system in his site would have been quite a bit more than the small monthly fee from Calendry. The photo in this page can also be changed automatically from the Contentful cms.

![alt_text](/src/images/bookiing.png "image_tooltip")

Technology

This project required me learning and implementing many different technologies. The biggest two were learning Gatsby and learning GraphQl. Furthermore I needed to learn how to set up the Contentful cms for the client and teach him what he would need to do when he needed to change content. I have a background in React so learning Gatsby was very intuitive and I ended up really appreciating the workflow that it offered. I had heard so much about how great the Jam Stack was and how Gatsby optimised loading times and I wasn't. disappointed. I also really enjoyed learning graphQl and saw first hand the benefit of being able to be selective of what I pull from APIs rather than the old restful approach. In general most of the pages had the same flow. Through a Gatsby config file I set up a Gatsby-Contentful plugin that through a space id and an access token allows Gatsby to have access to the content within Contentful. For each Page I would make a graphQl query requesting the given content using its specific slug. Also within the query I could set parameters for the images using another Gatsby Plugin called Gatsby-Sharp. This allows for photo optimization as well as adding effects, and dictating size. I would then take the response from the GraphQl query and distribute it within the page using the jsx. For Navigation between pages gatsby has built in Link plugins almost identical to using React Router. It was as simple as wrapping some h1’s in With a link Component and assigning the to=”/” to whatever the name of the page was.

**New Features**

As of writing this I have been in discussions with my client about adding new features. He decided he wants more diversity in payment options within the site. So I am now adding in the Stripe api which allows for many different options for payment and is also very secure. I have created the 4 tutoring packages with the prices attached within the Stripe account and have set up the configuration that allows Gatsby and Stripe to connect. I have built the component buttons that when clicked allow his students to be redirected directly to a stripe page with the chosen product. I am currently designing the payment page and will be implementing and deploying it soon. My client also wants to transition his business to more virtual sessions because of the new coronavirus environment we are all living in now. So for this I will be adding a page that is a dedicated zoom room where the user will be able to from the site be able to click a button and be able to connect with my Client to start a session virtually.
