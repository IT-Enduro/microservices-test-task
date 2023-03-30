package com.example.demo.services;

import org.springframework.stereotype.Service;
@Service
public class NameServiceBean implements NameService{

    public String getName() {
        return "Vova";
    }
}
