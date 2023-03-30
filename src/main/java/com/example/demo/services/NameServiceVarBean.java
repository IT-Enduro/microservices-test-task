package com.example.demo.services;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class NameServiceVarBean implements NameService {
    @Override
    public String getName() {
        return System.getenv("GREETING_NAME");
    }
}
