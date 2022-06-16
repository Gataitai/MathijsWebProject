package io.gate.mathijswebproject.model.grid;

import io.gate.mathijswebproject.model.person.Person;

import javax.persistence.*;

@Entity
@Table
@MappedSuperclass
public class Cell {
    @Id
    @Column
    private String row;
    @Id
    @Column
    private String column;
    @OneToOne
    @JoinColumn
    private Person person;

    public Cell(){
        this.person = new Person();
    }
    public void setColumn(String column) {
        this.column = column;
    }
    public void setRow(String row) {
        this.row = row;
    }
//    public void setColor(String color) {
//        this.color = color;
//    }
    public void setUserName(String userName) {
        this.person.setUserName(userName);
    }
//    public String getColor() {
//        return this.color;
//    }
    public String getUserName() {
        return this.person.getUserName();
    }
    public String getColumn() {
        return column;
    }
    public String getRow() {
        return row;
    }
}
