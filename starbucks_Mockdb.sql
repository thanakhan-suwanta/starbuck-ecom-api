-- -------------------------------------------------------------
-- TablePlus 5.9.6(546)
--
-- https://tableplus.com/
--
-- Database: starbucks_db
-- Generation Time: 2567-05-28 20:18:40.7250
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS caffeinelevels_id_seq;

-- Table Definition
CREATE TABLE "public"."caffeinelevels" (
    "id" int4 NOT NULL DEFAULT nextval('caffeinelevels_id_seq'::regclass),
    "level" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS categories_id_seq;

-- Table Definition
CREATE TABLE "public"."categories" (
    "id" int4 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS flavor_profiles_id_seq;

-- Table Definition
CREATE TABLE "public"."flavor_profiles" (
    "id" int4 NOT NULL DEFAULT nextval('flavor_profiles_id_seq'::regclass),
    "product_id" int4 NOT NULL,
    "flavor" varchar(100) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS grind_options_id_seq;

-- Table Definition
CREATE TABLE "public"."grind_options" (
    "id" int4 NOT NULL DEFAULT nextval('grind_options_id_seq'::regclass),
    "product_id" int4 NOT NULL,
    "grind_option" varchar(100) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS order_items_id_seq;

-- Table Definition
CREATE TABLE "public"."order_items" (
    "id" int4 NOT NULL DEFAULT nextval('order_items_id_seq'::regclass),
    "order_id" int4 NOT NULL,
    "product_id" int4 NOT NULL,
    "quantity" int4 NOT NULL,
    "price" numeric(10,2) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS orders_id_seq;

-- Table Definition
CREATE TABLE "public"."orders" (
    "id" int4 NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    "user_id" int4 NOT NULL,
    "order_date" timestamp NOT NULL,
    "total" numeric(10,2) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS product_images_id_seq;

-- Table Definition
CREATE TABLE "public"."product_images" (
    "id" int4 NOT NULL DEFAULT nextval('product_images_id_seq'::regclass),
    "product_id" int4 NOT NULL,
    "image_url" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS products_id_seq;

-- Table Definition
CREATE TABLE "public"."products" (
    "id" int4 NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "description" text,
    "price" numeric(10,2) NOT NULL,
    "category_id" int4,
    "region" varchar(255),
    "weight" int4,
    "roast_id" int4,
    "caffeine_level_id" int4,
    "stock" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS roasts_id_seq;

-- Table Definition
CREATE TABLE "public"."roasts" (
    "id" int4 NOT NULL DEFAULT nextval('roasts_id_seq'::regclass),
    "level" varchar(255) NOT NULL,
    "roast_id" int4,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."caffeinelevels" ("id", "level") VALUES
(1, '1'),
(2, '2'),
(3, '3');

INSERT INTO "public"."categories" ("id", "name") VALUES
(1, 'backworb'),
(2, 'yaga'),
(3, 'saber');

INSERT INTO "public"."flavor_profiles" ("id", "product_id", "flavor") VALUES
(1, 1, 'Dark Chocolate'),
(2, 1, 'Black Cherry2'),
(3, 2, 'Dark Chocolate'),
(4, 2, 'Black Cherry2');

INSERT INTO "public"."grind_options" ("id", "product_id", "grind_option") VALUES
(1, 1, 'Whole Bean'),
(2, 1, 'Cafetiere'),
(3, 1, 'Filter'),
(4, 1, 'Espresso');

INSERT INTO "public"."order_items" ("id", "order_id", "product_id", "quantity", "price") VALUES
(1, 10, 1, 2, 12.99),
(2, 10, 2, 1, 12.99),
(3, 11, 1, 2, 12.99),
(4, 11, 2, 1, 12.99),
(5, 12, 1, 2, 12.99),
(6, 12, 2, 1, 12.99);

INSERT INTO "public"."orders" ("id", "user_id", "order_date", "total") VALUES
(1, 1, '2024-05-27 07:46:23.342', 38.97),
(2, 1, '2024-05-27 08:38:47.215', 38.97),
(3, 3, '2024-05-27 08:49:43.43', 25.98),
(4, 3, '2024-05-27 08:51:11.606', 12.99),
(5, 3, '2024-05-27 08:51:20.379', 12.99),
(6, 2, '2024-05-27 10:10:39.06', 38.97),
(10, 2, '2024-05-27 10:34:29.56', 38.97),
(11, 2, '2024-05-27 10:37:59.211', 38.97),
(12, 2, '2024-05-27 10:57:36.399', 38.97);

INSERT INTO "public"."product_images" ("id", "product_id", "image_url") VALUES
(1, 1, 'https://iili.io/H8Y78Qt.webp'),
(2, 1, 'https://iili.io/another_image_url.webp'),
(3, 1, 'www.google.com'),
(4, 1, 'www.smook.com'),
(7, 1, 'www.dakdee.com'),
(8, 7, '	https://www.starbucks.co.th/stb-media/2024/04/Summ…MBIA_NARINO_GRANOS_DE_ESPERANZA_1080x1080_250.jpg'),
(9, 8, '	https://www.starbucks.co.th/stb-media/2024/04/Summ…MBIA_NARINO_GRANOS_DE_ESPERANZA_1080x1080_250.jpg'),
(10, 9, '	https://www.starbucks.co.th/stb-media/2024/04/Summ…MBIA_NARINO_GRANOS_DE_ESPERANZA_1080x1080_250.jpg'),
(11, 10, '	https://www.starbucks.co.th/stb-media/2024/04/Summ…MBIA_NARINO_GRANOS_DE_ESPERANZA_1080x1080_250.jpg'),
(12, 6, '	https://www.starbucks.co.th/stb-media/2024/04/Summ…MBIA_NARINO_GRANOS_DE_ESPERANZA_1080x1080_250.jpg');

INSERT INTO "public"."products" ("id", "name", "description", "price", "category_id", "region", "weight", "roast_id", "caffeine_level_id", "stock") VALUES
(1, 'Signature Blend', 'A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.', 12.99, 1, 'Central America', 500, 1, 2, 2),
(2, '
Starbucks® Single-Origin Sun-Dried Brazil Carmo De Minas', 'Due to the unique geography and climate conditions of the southeastern region of carmo de minas, the most prominent processing method is sun-dried, which intrinsically carries the least amount of impact to the environment by using very little water. This coffee has a subtle acidity and a softer profile that highlights tropical fruits and sweet hazelnuts with a smooth caramelly texture that is best paired with caramel and chocolate.', 20.99, 1, 'Central America', 500, 1, 1, 100),
(3, 'Starbucks® Single-Origin Papua New Guinea Highlands', 'Papua New Guinea is located less than one hundred miles north of Australia and on the edge of the “Ring of Fire” – a belt of intense volcanic activity that encircles the Pacific Ocean. The Papua New Guinea Highlands’ mountainous terrain and rich soil is ideal for coffee cultivation, bringing this medium coffee that highlights a sweeter flavor profile than traditional dark roasted, earthy and spicy coffees from Asia Pacific. This coffee is best paired with ginger and lemon.', 12.99, 1, 'Central America', 500, 1, 1, 100),
(4, 'Starbucks® Veranda Blend™', 'Roasting this blend of specially chosen Latin American beans for a shorter time allows the delicate nuances of soft cocoa and lightly toasted nuts to blossom. Mellow and flavorful, this coffee brews a delightfully gracious cup that’s perfect for welcoming friends.', 18.99, 3, 'thai land', 700, 2, 2, 50),
(5, '
Breakfast Blend', 'Although the gulf between these two types is huge, we think all can agree that our Breakfast Blend is one fine coffee.

It’s a gathering of Latin American beans chosen for their sparkling flavor. Kind of like orange juice and the way it dances on your tongue, this coffee has a get-up-and-going charge to it.

But we roast these beans a little lighter than we usually do. So the flavor is lighter-bodied and milder – just a nudge really. What you get is a nice, clean taste with a sunny disposition. Whether your cup is half full or half empty, it’s all good.', 17.99, 2, 'Central America', 600, 3, 3, 20),
(6, 'Colombia', 'Six thousand feet – straight up. Sounds extreme, we know. But high atop the majestic Andes, in a rugged landscape of simmering volcanoes, is where the finest coffee beans in Colombia like to grow. And just as there are no shortcuts through the dirt paths that crisscross the sheer slopes, we take none when it comes to nurturing these treasured cherries to gourmet perfection.

This Colombian marvel erupts on the palate with a juicy feel and robust flavors, a testament to the hearty riches of volcanic soils. Its remarkable finish, dry with hints of walnut, lifts this superior coffee into a class of its own. One sip and you’ll agree it’s worth every step of the climb.', 32.00, 1, 'Central America', 300, 1, 1, 20),
(7, 'Starbucks Reserve™ Colombia Nariño Granos De Esperanza™
', 'The heart of this Colombian coffee is ignited by the passion of young famers born and raised in the mountains of Nariño. With support from Starbucks Colombia Initiative, Granos de Esperanza (Grains of Hope), they bridge the generational gap of coffee farmers through a holistic multiyear plan to grow their livelihoods and Nariño’s economy. Cultivated during warm tropical days and cool nights, these beans exude a complex, refined flavor. And the farmers’ continued success manifests in this coffee—an embodiment of prosperity for themselves and the place they call home.', 20.99, 1, 'Central America', 200, 1, 2, 50),
(8, 'Starbucks VIA™ Pike Place® Roast
', 'The Story of Pike Place® Roast from our first store in Seattle’s Pike Place Market to our coffeehouses around the world, customers requested a freshly brewed coffee they could enjoy throughout the day. So in 2008 our master blenders and roasters created it for you, a blend so consistent and harmonious that no single characteristic dominates—or disappears. A smooth, well-rounded blend of Latin American coffees with subtly rich flavors of cocoa and toasted nuts, it’s perfect for every day.', 50.99, 3, 'Central America', 500, 3, 3, 100),
(9, 'Starbucks Pike Place® Roast 6 Cups
', 'From our first store in Seattle’s Pike Place Market to our coffeehouses around the world, customers requested a freshly brewed coffee they could enjoy throughtout the day. So in 2008 our master blenders and roasters created it for you, a blend so consistent and harmonious that no single characteristic dominates – or disappears. A smooth, well-rounded blend of Latin American coffees with subtly rich flavors of cocoa and toasted nuts, it’s perfect for every day.', 30.50, 2, 'Central America', 300, 2, 2, 50),
(10, 'Starbucks Reserve™ Colombia Nariño Granos De Esperanza™', 'The heart of this Colombian coffee is ignited by the passion of young famers born and raised in the mountains of Nariño. With support from Starbucks Colombia Initiative, Granos de Esperanza (Grains of Hope), they bridge the generational gap of coffee farmers through a holistic multiyear plan to grow their livelihoods and Nariño’s economy. Cultivated during warm tropical days and cool nights, these beans exude a complex, refined flavor. And the farmers’ continued success manifests in this coffee—an embodiment of prosperity for themselves and the place they call home.', 20.99, 1, 'Central America', 600, 1, 1, 20);

INSERT INTO "public"."roasts" ("id", "level", "roast_id") VALUES
(1, 'Blonde', 1),
(2, 'Medium', 2),
(3, 'Dark', 3);



-- Indices Index
CREATE UNIQUE INDEX caffeinelevels_level_key ON public.caffeinelevels USING btree (level)


-- Indices Index
CREATE UNIQUE INDEX categories_name_key ON public.categories USING btree (name)
ALTER TABLE "public"."flavor_profiles" ADD FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE;
ALTER TABLE "public"."grind_options" ADD FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE;
ALTER TABLE "public"."order_items" ADD FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."order_items" ADD FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."product_images" ADD FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE;
ALTER TABLE "public"."products" ADD FOREIGN KEY ("roast_id") REFERENCES "public"."roasts"("id");
ALTER TABLE "public"."products" ADD FOREIGN KEY ("caffeine_level_id") REFERENCES "public"."caffeinelevels"("id");
ALTER TABLE "public"."products" ADD FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id");


-- Indices Index
CREATE UNIQUE INDEX roasts_level_key ON public.roasts USING btree (level)
