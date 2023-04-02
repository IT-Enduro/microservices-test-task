package com.edu.entrancetask.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HelloWorldController {
    @Value("${greeting.user}")
    private String user;

    @GetMapping
    String hello() {
        return String.format("Hello, %s", user);
    }
}
