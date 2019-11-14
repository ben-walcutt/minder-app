package co.newlabs.minder.task;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "Task")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Task {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String author;

    @Column
    private String title;

    @Column
    private String text;

    @Column
    private LocalDateTime createdTimestamp;

    @Column
    private LocalDateTime lastUpdatedTimestamp;

    @Column
    private LocalDateTime dueDateTimestamp;

    @Column
    private boolean completed;

    @Column
    private LocalDateTime completedTimestamp;
}
