package co.newlabs.minder.task;

import lombok.AllArgsConstructor;

import javax.inject.Singleton;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Singleton
@AllArgsConstructor
public class TaskService {

    private TaskRepository taskRepository;

    public List<TaskDTO> getAllTasksForUser(String userId) {
        List<Task> tasks = taskRepository.findAll();
        List<TaskDTO> tasksDTOS = new ArrayList<>();
        for (Task task : tasks) {
            tasksDTOS.add(new TaskDTO(task));
        }
        return tasksDTOS;
    }

    public Task createTask(TaskCreateDTO taskCreateDTO) {
        Task task = Task.builder()
                .author(taskCreateDTO.getAuthor())
                .title(taskCreateDTO.getTitle())
                .text(taskCreateDTO.getText())
                .dueDateTimestamp(taskCreateDTO.getDueDateTimestamp())
                .completed(false)
                .createdTimestamp(LocalDateTime.now())
                .lastUpdatedTimestamp(LocalDateTime.now())
                .build();

        return taskRepository.save(task);
    }
}
