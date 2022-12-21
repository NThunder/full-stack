package edu.phystech.dietpreporation.repository;

import edu.phystech.dietpreporation.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
