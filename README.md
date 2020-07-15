# React Native GoMarketplace Challenge

## :dart: The Challenge

You need to create a mobile app using React Native, Typescript, Async Storage and Context API.

### Functionalities

- **`List products from fake API`**: Your `Dashboard` page should be able to display a listing through a table, with the `title`, `image_url` and `price` fields.

- **`Add items to the cart`**: In your entire application, you must use the Context called `cart` that we make available. You will need to complete the functionality inside `hooks/cart.tsx` so that you can add items to the cart.

- **`Display cart items`**: On the `Cart` page you should display all the items in the cart, along with the quantity, single value, the subtotal value of the items and total of all items.

- **`Increase the number of items in the cart`**: On the `Cart` page, you must allow the user to increase the quantity of items of the same product, for that you can use the `increment` function within its context in `/src/hooks/cart.tsx`.

- **`Decrease the number of items in the cart`**: On the `Cart` page you must allow the user to decrease the quantity of items of the same product, for that you can use the function `decrement` within its context in `/src/hooks/cart.tsx`.

- **`Display total value of items in cart`**: Both on the `Dashboard` page and the` Cart` page, you should display the total value of all the items that are in your cart.

### Tests Specifications

For this challenge we have the following tests:

- **`should be able to list the products`**: For this test to pass, your application must allow all products that are returned from the Fake API to be listed on your `Dashboard` screen. This listing should display the `title` and `price` that must be formatted using the `Intl` function.

- **`should be able to add a product to the cart`**: For this test to pass, you must allow it to be possible to add products from your `Dashboard` to the cart, using the context of the `cart` provided.

- **`should be able to list the products on the cart`**: For this test to pass, you must allow it to be possible to list the products that are saved in the context of your cart on the `Cart` page, on that page display the product name and the subtotal of each product (price \ * quantity).

- **`should be able to calculate the cart total`**: For this test to pass, both on the `Dashboard` page and the `Cart` page, you must display the total value of all the items that are in your cart.

- **`should be able to show the total quantity of itens in the cart`**: For this test to pass, both on the `Dashboard` page and the `Cart` page, you must display the total number of items that are in your cart.

- **`should be able to increment product quantity on the cart`**: For this test to pass, you must allow it to be possible to increase the quantity of a product in your cart, using the context of the `cart` provided.

- **`should be able to decrement product quantity on the cart`**: For this test to pass, you must allow it to be possible to decrease the quantity of a product in your cart, using the context of the `cart` provided.

- **`should be able to navigate to the cart`**: For this test to pass, in your `FloatingCart` component on the Dashboard, you must allow the user to be redirected to the `Cart` page when clicking on the cartID with the testID of `navigate-to-cart-button`.

- **`should be able to add products to the cart`**: For this test to pass, in your file containing the cart context, you must allow the `addToCart` function to add a new item to the cart.

- **`should be able to increment quantity`**: In order for this test to pass, in your file containing the cart context, you must allow the `increment` function to increase by `1` unit the quantity of an item that is stored in the context.

- **`should be able to decrement quantity`**: In order for this test to pass, in your file containing the cart context, you must allow the `decrement` function to decrease by `1` unit the quantity of an item that is stored in the context.

- **`should store products in AsyncStorage while adding, incrementing and decrementing`**: For this test to pass, in your file containing the cart context, you must allow all updates you make to the cart to be saved in AsyncStorage. For example, when adding an item to the cart, add it to AsyncStorage as well. Remember also to update the AsyncStorage value when you increase or decrease the quantity of an item.

- **`should load products from AsyncStorage`**: For this test to pass, in your file containing the cart context, you must allow all products that have been added to be fetched from AsyncStorage.


# :rocket: Releasing the Kraken

## Requirements

You will only need Node.js, a mobile environment and a node global package, Yarn, installed in your environment.

### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

-   #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   #### Other Operating Systems
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node -v
    v12.18.0

    $ npm -v
    6.13.7

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn


### Mobile Environment

In order to setup your environment to emulate the app, you can follow that amazing walkthrough from Rocketseat

[Rocketseat awesome Walkthrough (pt-BR)](https://react-native.rocketseat.dev/)

## :computer: Install

Open your terminal, choose an awesome place to keep this project and type the commands below:

    $ git clone https://github.com/pupato13/react-native-GoMarketplace-Challenge
    $ cd react-native-GoMarketplace-Challenge
    $ yarn

## Configure app

To run GoMarketplace Challenge, you will need to start the fake API Products list before.

    $ yarn json-server server.json -p 3333

To test your API you can access: [products](http://localhost:3333/products)

## :checkered_flag: Running the project

If you are running Android Emulator
\$ yarn android

or if you are running IOS Emulator
\$ yarn ios

## :white_check_mark: Running tests

    $ yarn test
