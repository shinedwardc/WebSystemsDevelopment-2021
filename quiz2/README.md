INSERT INTO `items` (`id`, `name`, `price`) VALUES (1, 'MacBook Pro', '2499'), 
(2, 'OpenBSD Tshirt, '20.0'),(3, 'Amazon echo', '99.99'),(4, 'Nvidia GTX 3080', '1999.99'),(5, 'AMD Ryzen 9 3900X’, '549.99');
INSERT INTO `discounts` (`id`, `item_id`, `discount`) VALUES (1, 1, 0.25), (2, 2, 0.5),(3, 3, 0.75),(4, 5, 0.1);

There is a missing single quote in OpenBSD Tshirt, and the price values for inserting into items are in quotations. Decimals cannot be in quotations, as that will change the decimals to a varchar string. In AMD Ryzen 9 3990X, the symbol next to X is an apostrophe, which instead needs to be a single quote.

PHP file handling was tough, especially inserting syntax
