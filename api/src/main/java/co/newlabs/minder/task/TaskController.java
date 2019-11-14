package co.newlabs.minder.task;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import lombok.AllArgsConstructor;

import java.util.List;

@Controller
@AllArgsConstructor
public class TaskController {

    private TaskService taskService;

    @Get(uri = "/tasks", produces = MediaType.APPLICATION_JSON)
    public List<TaskDTO> getAllTasksForUser(@QueryValue String userId) {
        return taskService.getAllTasksForUser(userId);
    }

    @Post(uri = "/tasks", produces = MediaType.APPLICATION_JSON)
    public Task createTask(@Body TaskCreateDTO taskCreateDTO) {
        return taskService.createTask(taskCreateDTO);
    }
}
