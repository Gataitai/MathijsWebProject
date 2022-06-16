package io.gate.mathijswebproject.model.person;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private String userName;
    @Column
    private LocalDateTime creationDate;


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
