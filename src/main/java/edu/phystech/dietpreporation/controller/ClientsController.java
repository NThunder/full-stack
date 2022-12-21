package edu.phystech.dietpreporation.controller;
import edu.phystech.dietpreporation.domain.Client;
import edu.phystech.dietpreporation.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;




@RestController
@RequestMapping("/")
@CrossOrigin
public class ClientsController {

    private class Authorization {
        public String username;
        public String password;
      
    
        @Override
        public int hashCode() {
            if (password == "" || username == "") {
                return 0;
            }
            return username.hashCode() + password.hashCode();
        }
    }

    @Autowired
    private final ClientRepository clientRepository;

    public ClientsController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping("/clients")
    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    @GetMapping("/clients/{id}")
    public Client getClient(@PathVariable Long id) {
        return clientRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping("/clients")
    public ResponseEntity<?> createClient(@RequestBody Client clients) throws URISyntaxException {
        Client savedClient = clientRepository.save(clients);
        return ResponseEntity.created(new URI("/clients/" + savedClient.getId())).body(savedClient);
    }


    @PostMapping("/login")
    public String createToken() throws URISyntaxException {
        return "{\"token\":\"100500\"}"; 
        // if (auth.hashCode() == 0) {
        //     return "{\"token\":\"\"}";
        // }
        // return new String("\"{\"token\":\"") + Integer.toString(auth.hashCode()) +  new String("\"}\"");
    }

    @PutMapping("/clients/{id}")
    public ResponseEntity<?>  updateClient(@PathVariable Long id, @RequestBody Client client) {
        Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        currentClient.setEmail(client.getEmail());
        currentClient = clientRepository.save(client);

        return ResponseEntity.ok(currentClient);
    }

    @DeleteMapping("/clients/{id}")
    public ResponseEntity<?>  deleteClient(@PathVariable Long id) {
        clientRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
