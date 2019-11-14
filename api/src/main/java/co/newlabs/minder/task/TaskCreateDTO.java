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
public class TaskCreateDTO {
    private String author;
    private String title;
    private String text;
    private LocalDateTime dueDateTimestamp;
}
