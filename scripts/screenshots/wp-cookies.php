<?php
// Prints WordPress auth cookies for a user as JSON. Local test sites only.
// Usage: SITE_HOST=mysite.local WP_PATH=/path/to/public php -d memory_limit=1G wp-cookies.php <user_id> > cookies.json
$_SERVER['HTTP_HOST'] = getenv('SITE_HOST') ?: 'localhost';
$_SERVER['REQUEST_URI'] = '/';
require rtrim(getenv('WP_PATH'), '/') . '/wp-load.php';
$uid = (int) ($argv[1] ?? 1);
$exp = time() + 2 * DAY_IN_SECONDS;
$token = WP_Session_Tokens::get_instance($uid)->create($exp);
echo json_encode([
    ['name' => AUTH_COOKIE, 'value' => wp_generate_auth_cookie($uid, $exp, 'auth', $token)],
    ['name' => LOGGED_IN_COOKIE, 'value' => wp_generate_auth_cookie($uid, $exp, 'logged_in', $token)],
]);
