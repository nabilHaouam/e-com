This is an E-commerce website made with react . 

It has Google oauth, and PayPal as a payment gateway.

The products come from an API called fakestoreapi at : https://fakestoreapi.com/.

Routing is handled with react-router-dom.

The buttons such as the sign in with Google button are made with the materialui Library.

There are 4 pages in total : landing page, shop, sign-in, and single product page.

Every product card is a component and all the Card components are inside the Cards component (wrapper).

I didn't use redux for this project because it is a simple project that doesn't need complicated state management.
The App component fetches data from the api , and then, it passes it to the Shop component which will also pass it to the Cards component which then passes it to the Card components. This method is called pipe-drilling.

The Card component is reused in the single-product page.

All the design and animations are hard coded with css , no libraries are used for the animation.
 
 
