package com.project.springbootbackend.controller;


import com.project.springbootbackend.model.Student;
import com.project.springbootbackend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/getAll")
    public List<Student> list(){
        return studentService.listAll();
    }

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.save(student);
        return "New Student is added";
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> get(@PathVariable Integer id){
        try{
            Student student=studentService.get(id);
            return new ResponseEntity<Student>(student, HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update{id}")
    public ResponseEntity<Student> update (@RequestBody Student student, @PathVariable Integer id){
        try{
            Student existingStudent=studentService. get(id);
            studentService.save(student);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/delete{id}")
    public String delete(@PathVariable Integer id){
        studentService.delete(id);
        return "Deleted the Student details with id" +id;
    }

}
