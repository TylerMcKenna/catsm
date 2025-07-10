package com.leoandfrick.catsm.repository;

import com.leoandfrick.catsm.model.GrassSession;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrassSessionRepository extends CrudRepository<GrassSession, Long> {
}
