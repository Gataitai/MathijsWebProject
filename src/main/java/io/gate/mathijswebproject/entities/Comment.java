package io.gate.mathijswebproject.entities;

import javax.persistence.*;

@Entity
@Table
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private String text;

    @ManyToOne
    private Person person;

    public Comment(String text) {
        this.text = text;
    }

    public Comment() {

    }
}
