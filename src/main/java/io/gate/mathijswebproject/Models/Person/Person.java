package io.gate.mathijswebproject.Models.Person;

import java.time.LocalDateTime;
import java.util.Date;

public class Person {
    private String userName;
    private LocalDateTime creationDate;

    public Person(String userName){
        this.userName = userName;
        this.creationDate = LocalDateTime.now();
    }

    public String getUserName() {
        return userName;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setCreationDate() {
        this.creationDate = LocalDateTime.now();
    }
}
