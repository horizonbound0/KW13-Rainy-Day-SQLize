# KW13-Rainy-Day-SQLize

## Description

Rainy Day Odds and Ends inc was in the market for a CLI back end program to help manage their databases, and liked my portfolio enough to reach out to me about it. We met and discussed their wants and needs for the app, and I was able to make them a fast, convenient way for them to manage their inventory's categories, tags, and product details. 

## Installation

To install this project the user needs to enter "npm i" the first time they use it. Afterwards, they need to make sure to login to PSql and run the schema.sql file in the db folder. After that, they can back out of PSql and enter "npm run seed" to seed the database. Once the database is seeded, the user needs to enter "node server" to start the program.

## Usage

After the program is started, the user can enter Get, Delete, Post, and Put requests to the back end through Insomnia, and see the results of their requests in the response window.

[Walkthrough video](https://drive.google.com/file/d/1j6L1y3wDvSkDaG4-t4zxPl8M5TWQNAEG/view?usp=sharing)

## Credits

[Daniel Dunnemann](https://github.com/daniels-pancakes) helped me figure out the best way to do the requests in Insomnia!

## License

This project uses the MIT license which is available to view in the GitHub repo.

## Tests

After following the steps in Installation and Usage, a user can test the program by making the Get, Post, Put, and Delete requests (with the bodies specified in the video) in Insomnia.