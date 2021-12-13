CREATE TABLE IF NOT EXISTS GENERAL_ORDER_STATUS (
    id integer PRIMARY KEY AUTOINCREMENT,
    start_date text,
    customer text,
    product text,
    end_date text,
    laser_stat text,
    bending_stat text,
    welding_stat text,
    color text);

CREATE TABLE IF NOT EXISTS MAS_ORDER_STATUS (
    id integer PRIMARY KEY AUTOINCREMENT,
    start_date text,
    customer text,
    product text,
    product_type text,
    amount integer,
    end_date text,
    meterial_order TEXT,
    welding_stat TEXT,
    color_stat text,
    release_date text);