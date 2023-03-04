# Valinteca Mid-Level Frontend Developer Task

## Table

-   Instructions
-   File Structure
-   App Summay
-   Demo

    ## Instructions

1. create an **array of objects** (containing 6 objects) where each object represents a product with the following properties:-

-   product_name (string, ex: "Gold Coin")
-   product_price (string, ex: "112.55")
-   product_image (string, ex: "gold-coin.png")
-   added_to_cart (boolean, ex: false)

2. create a page where there are **6 product cards** displayed with all their details

3. each product card contains **name**, **price**, **image**, **add_to_cart** button and **quick_view** button

4. create a cart icon in the **navbar**, which opens a **dropdown** with **added_to_cart** products

5. the cart icon should have an **indicator** to the number of **added_to_cart** products

6. create a **quick_view** modal which is opened whenever the user clicks on the **quick_view** button of any product

7. the **quick_view** modal has the same details displayed in the product card

8. adding the product to cart or removing it will affect all places where the product is displayed (product card, navbar dropdown, **quick_view** modal)

9. if the product is **added_to_cart**, the "add to cart" button should be converted to "remove from cart"

10. use **localStorage** to store the array of products, don't use the default array mentioned in first step if there is an array in the **localStorage**

11. you are only allowed to use **HTML**, **CSS** and **JavaScript**, but you can't use jQuery, Bootstrap, Fontawesome (you can use icons but you don't need to attach a whole library of icons), Google Fonts (you can just download and use any single font), etc..

12. feel free to use any **ui/ux design**, but make sure that your design is **responsive**

## File Structure

## Approach
 Development was done in iterations
Create Basic Project Structure
Create Navigation
Create Cart
Create HTML template for main layout + Product and style it
Convert Product HTML to JavaScript DOM elements
Refactor Product JS into smaller components
Review Styles and responsivness

TODO: ⌛

Cart Logic to count Added products
Cart style to display list of added products on hover in a dropdown menu

Modal Logic to show on quickView button click
Modal  has the same details displayed in the product card

Store changes made into local storage
Check on app load, if there is data in Local storage use it, if not use default array

Further TODO:
[] test app vs requirements
[] get review
[] minify + deploy

Accessibility was considered during all development steps.


## Demo

[Click here to view](link)
