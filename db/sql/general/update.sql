UPDATE GENERAL_ORDER_STATUS
SET start_date = ?,
customer = ?,
product = ?,
end_date = ?,
laser_stat = ?,
bending_stat = ?,
welding_stat = ?,
color = ?,
font_color = ?
WHERE id = ?;