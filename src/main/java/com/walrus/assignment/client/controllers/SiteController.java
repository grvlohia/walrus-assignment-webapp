package com.walrus.assignment.client.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class SiteController {
    
    @RequestMapping(value="/", method=RequestMethod.GET)
    public String showHome() {
        return "index";
    }
    
}
