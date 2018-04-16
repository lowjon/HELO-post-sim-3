SELECT * FROM users
WHERE user_id not in (
    SELECT friend_id FROM friends
    WHERE user_id = $1
)
AND user_id != $1