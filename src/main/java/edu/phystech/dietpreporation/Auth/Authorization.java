package edu.phystech.dietpreporation.auth;

public class Authorization {
    private String username;
    private String password;

    public Authorization(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public void setPassword(String password) {
        this.password = password;
    }    

    @Override
    public int hashCode() {
        return username.hashCode() + password.hashCode();
    }
}
