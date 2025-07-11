package com.leoandfrick.catsm.service;

import com.leoandfrick.catsm.model.GrassSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.leoandfrick.catsm.repository.GrassSessionRepository;

import java.util.List;

@Service
public class GrassSessionService {

    @Autowired
    private GrassSessionRepository repository;


    public GrassSession addGrassSession(GrassSession grassSession) {
        return repository.save(grassSession);
    }

    public List<GrassSession> getAllGrassSessions() {
        return repository.findAll();
    }
}
