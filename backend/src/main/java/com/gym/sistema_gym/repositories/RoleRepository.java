package com.gym.sistema_gym.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gym.sistema_gym.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
