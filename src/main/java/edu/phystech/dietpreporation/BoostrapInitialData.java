package edu.phystech.dietpreporation;

import edu.phystech.dietpreporation.domain.Client;
import edu.phystech.dietpreporation.repository.ClientRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class BoostrapInitialData implements CommandLineRunner {

    private final ClientRepository clientRepository;
    private final Faker faker = new Faker(Locale.getDefault());

    public BoostrapInitialData(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }


    @Override
    public void run(String... args) {
        for (int i = 0; i < 10; i++) {
            clientRepository.save(new Client(faker.food().dish(), faker.food().measurement()));
        }
    }
}
