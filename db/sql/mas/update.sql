UPDATE MAS_ORDER_STATUS
SET start_date = ?,
customer = ?,
project_name = ?,
product = ?,
product_type = ?,
amount = ?,
end_date = ?,
meterial_order = ?,
welding_stat = ?,
color_stat = ?,
release_date = ?,
font_color = ?
WHERE id = ?;