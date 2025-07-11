package com.leoandfrick.catsm.controller;

import com.leoandfrick.catsm.model.GrassSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.leoandfrick.catsm.service.GrassSessionService;

import java.util.List;

@CrossOrigin
@RestController
public class GrassSessionController {

    @Autowired
    private GrassSessionService service;

    @PostMapping ("/grassSession")
    public ResponseEntity<?> addGrassSession(@RequestBody GrassSession grassSession) {
        try {
            GrassSession addResult = service.addGrassSession(grassSession);
            return new ResponseEntity<>(addResult, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    Would like to only fetch a few at a time, for now doing all
    @GetMapping ("/grassSessions")
    public ResponseEntity<List<GrassSession>> getAllGrassSessions() {
        return new ResponseEntity<>(service.getAllGrassSessions(), HttpStatus.OK);
    }

}
