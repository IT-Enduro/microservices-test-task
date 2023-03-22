#!/usr/bin/env php
<?php

declare(strict_types=1);

$name = getenv('GREETING_NAME');
$http = new Swoole\Http\Server("0.0.0.0", 8080);
$http->on(
    "request",
    function (Swoole\Http\Request $request, Swoole\Http\Response $response) use ($name) {
        $response->end("Hello, $name");
    }
);
$http->start();