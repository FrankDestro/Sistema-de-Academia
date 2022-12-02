package com.gym.sistema_gym.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.Instant;

@Entity
@Table(name = "tb_aluno")
public class Aluno extends User implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer mat;

    public Aluno(Integer mat) {
        this.mat = mat;
    }

    public Aluno(Long id, String name, String email, String password, String imgProfile, Instant createdAt, Instant updaedAt, Integer mat) {
        super(id, name, email, password, imgProfile, createdAt, updaedAt);
        this.mat = mat;
    }
}
