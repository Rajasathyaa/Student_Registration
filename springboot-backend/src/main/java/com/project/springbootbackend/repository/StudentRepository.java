package com.project.springbootbackend.repository;

import com.project.springbootbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository <Student, Integer> {
}
