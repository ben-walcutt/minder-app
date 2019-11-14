package co.newlabs.minder.task;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO {
    private Integer id;
    private String author;
    private String title;
    private String text;
    private LocalDateTime createdTimestamp;
    private LocalDateTime lastUpdatedTimestamp;
    private LocalDateTime dueDateTimestamp;
    private boolean completed;
    private LocalDateTime completedTimestamp;

    public TaskDTO(Task task) {
        this.id = task.getId();
        this.author = task.getAuthor();
        this.title = task.getTitle();
        this.text = task.getText();
        this.createdTimestamp = task.getCreatedTimestamp();
        this.lastUpdatedTimestamp = task.getLastUpdatedTimestamp();
        this.dueDateTimestamp = task.getDueDateTimestamp();
        this.completed = task.isCompleted();
        this.completedTimestamp = task.getCompletedTimestamp();
    }
}
