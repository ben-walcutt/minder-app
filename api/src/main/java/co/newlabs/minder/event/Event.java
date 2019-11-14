package co.newlabs.minder.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "Event")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Event {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String creator;

    @Column
    private String title;

    @Column
    private LocalDateTime startTimestamp;

    @Column
    private LocalDateTime endTimestamp;

    @Column
    private LocalDateTime createdTimestamp;

    @Column
    private LocalDateTime lastUpdatedTimestamp;
}
