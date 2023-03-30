package com.example.demo.controllers;

import com.example.demo.services.NameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    private NameService nameService;

    @GetMapping("/")
    public String index() {
        return "Greetings from " + nameService.getName() + "!";
    }

}