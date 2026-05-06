-- Write your query below
-- SELECT c.name
-- FROM customers c
-- LEFT JOIN orders o
-- on c.id =o.customer_id
-- WHERE o.customer_id IS NULL;
-- SELECT name
-- FROM customers c
-- WHERE NOT EXISTS (
--     SELECT 1
--     FROM orders o
--     WHERE c.id = o.customer_id
-- );

SELECT name 
FROM customers 
WHERE id NOT IN(
    SELECT customer_id FROM orders 
);