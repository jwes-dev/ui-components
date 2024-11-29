<?php
$watching = [
    'js/components/SideNav.js',
    'js/app.js',
    'side-nav.html',
    'css/style.min.css'
];

$fingerPrint = '';
foreach ($watching as $file) {
    $fingerPrint .= '|' . filemtime($file);
}

echo md5($fingerPrint);