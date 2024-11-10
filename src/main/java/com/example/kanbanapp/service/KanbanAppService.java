package com.example.kanbanapp.service;

import com.example.kanbanapp.model.Task;
import com.example.kanbanapp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KanbanAppService {
    private final TaskRepository taskRepository;

    public KanbanAppService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
